import prisma from '../../../shared/services/db.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';
import { 
  CreateOrganizacionDto, 
  UpdateOrganizacionDto,
  UpdateOrganizacionPlanDto,
  UpdateFechaPagoDto,
  RegisterAdminDto
} from '../DTOs/admin.dto';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export class AdminService {
  /**
   * Obtener todas las organizaciones con sus suscripciones
   */
  async getAllOrganizaciones() {
    try {
      const organizaciones = await prisma.organizaciones.findMany({
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          creado_en: true,
          actualizado_en: true,
          subdominio: true,
          marca: true,
          suscripciones: {
            select: {
              plan: true,
              estado: true,
              fechaProximoPago: true
            },
            orderBy: {
              creadoEn: 'desc'
            },
            take: 1
          }
        }
      });

      // Transformar los resultados para mantener la estructura esperada por el frontend
      return organizaciones.map(org => {
        const suscripcion = org.suscripciones[0] || {};
        return {
          ...org,
          plan: suscripcion.plan || 'basico',
          estado: suscripcion.estado || 'activo',
          fecha_proximo_pago: suscripcion.fechaProximoPago,
          // Eliminamos el array de suscripciones para mantener la estructura plana
          suscripciones: undefined
        };
      });
    } catch (error) {
      logger.error(`Error al obtener organizaciones: ${error}`);
      throw new AppError('Error al obtener organizaciones', 500);
    }
  }

  /**
   * Obtener una organización por ID
   */
  async getOrganizacionById(id: string) {
    try {
      const organizacion = await prisma.organizaciones.findUnique({
        where: { id },
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          creado_en: true,
          actualizado_en: true,
          subdominio: true,
          marca: true,
          suscripciones: {
            select: {
              plan: true,
              estado: true,
              fechaProximoPago: true
            },
            orderBy: {
              creadoEn: 'desc'
            },
            take: 1
          }
        }
      });

      if (!organizacion) {
        throw new AppError('Organización no encontrada', 404);
      }

      // Transformar el resultado para mantener la misma estructura
      const suscripcion = organizacion.suscripciones[0] || {};
      return {
        ...organizacion,
        plan: suscripcion.plan || 'basico',
        estado: suscripcion.estado || 'activo',
        fecha_proximo_pago: suscripcion.fechaProximoPago,
        suscripciones: undefined
      };
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al obtener organización: ${error}`);
      throw new AppError('Error al obtener organización', 500);
    }
  }
  /**
   * Crear una nueva organización con su suscripción
   */
  async createOrganizacion(data: CreateOrganizacionDto) {
    try {
      // Preparar nombre_schema (tiene que ser string, no undefined)
      let nombreSchema: string;
      
      // Si se proporciona un nombre_schema, verificar que no exista
      if (data.nombre_schema) {
        nombreSchema = data.nombre_schema;
        const existingSchema = await prisma.organizaciones.findFirst({
          where: { nombre_esquema: nombreSchema }
        });

        if (existingSchema) {
          throw new AppError('Este nombre de schema ya está en uso', 400);
        }
      } else {
        // Generar un nombre de schema basado en el nombre y un timestamp
        const timestamp = Date.now().toString().slice(-6);
        nombreSchema = data.nombre.toLowerCase()
          .replace(/[^a-z0-9_]/g, '_')
          .substring(0, 15) + '_' + timestamp;
      }

      // Crear el schema para la organización
      await prisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${nombreSchema}";`);
      logger.info(`Schema "${nombreSchema}" creado con éxito`);

      // Usar transacción para crear organización y suscripción
      const result = await prisma.$transaction(async (tx) => {
        // 1. Crear la organización
        const newOrg = await tx.organizaciones.create({
          data: {
            nombre: data.nombre,
            nombre_esquema: nombreSchema,
            subdominio: data.subdominio,
            marca: data.marca as any
          }
        });

        // 2. Crear la suscripción asociada
        const suscripcionData = data.suscripcion || {};
        await tx.suscripciones.create({
          data: {
            id: uuidv4(),
            organizacionId: newOrg.id,
            plan: suscripcionData.plan || 'basico',
            estado: suscripcionData.estado || 'activo',
            fechaProximoPago: suscripcionData.fechaProximoPago || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días desde hoy
            fechaInicio: new Date()
          }
        });

        return newOrg;
      });

      // Obtener la organización con su suscripción para devolver
      return this.getOrganizacionById(result.id);
    } catch (error) {
      // Si ocurre un error y se llegó a crear el schema, limpiarlo
      if (data.nombre_schema) {
        try {
          await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${data.nombre_schema}" CASCADE;`);
        } catch (cleanupError) {
          logger.error(`Error al limpiar schema: ${cleanupError}`);
        }
      }

      if (error instanceof AppError) throw error;
      logger.error(`Error al crear organización: ${error}`);
      throw new AppError('Error al crear organización', 500);
    }
  }

  /**
   * Actualizar una organización existente
   */
  async updateOrganizacion(id: string, data: UpdateOrganizacionDto) {
    try {
      // Verificar que la organización existe
      const org = await prisma.organizaciones.findUnique({
        where: { id },
        include: {
          suscripciones: {
            orderBy: {
              creadoEn: 'desc'
            },
            take: 1
          }
        }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      // No permitimos cambiar el nombre_schema una vez creado
      if (data.nombre_schema && data.nombre_schema !== org.nombre_esquema) {
        throw new AppError('No se puede cambiar el nombre del schema', 400);
      }

      // Usar transacción para actualizar organización y suscripción
      await prisma.$transaction(async (tx) => {
        // 1. Actualizar la organización
        await tx.organizaciones.update({
          where: { id },
          data: {
            nombre: data.nombre,
            subdominio: data.subdominio,
            marca: data.marca as any
          }
        });

        // 2. Si hay datos de suscripción para actualizar
        if (data.plan || data.estado || data.fecha_proximo_pago) {
          const suscripcion = org.suscripciones[0];
          
          if (suscripcion) {
            // Actualizar la suscripción existente
            await tx.suscripciones.update({
              where: { id: suscripcion.id },
              data: {
                plan: data.plan,
                estado: data.estado,
                fechaProximoPago: data.fecha_proximo_pago
              }
            });
          } else {
            // Crear una nueva suscripción si no existe
            await tx.suscripciones.create({
              data: {
                id: uuidv4(),
                organizacionId: id,
                plan: data.plan || 'basico',
                estado: data.estado || 'activo',
                fechaProximoPago: data.fecha_proximo_pago || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                fechaInicio: new Date()
              }
            });
          }
        }
      });

      // Obtener la organización actualizada
      return this.getOrganizacionById(id);
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al actualizar organización: ${error}`);
      throw new AppError('Error al actualizar organización', 500);
    }
  }

  /**
   * Eliminar una organización
   */
  async deleteOrganizacion(id: string) {
    try {
      // Verificar que la organización existe
      const org = await prisma.organizaciones.findUnique({
        where: { id }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      // Eliminar primero las suscripciones asociadas
      await prisma.suscripciones.deleteMany({
        where: { organizacionId: id }
      });

      // Luego eliminar la organización
      await prisma.organizaciones.delete({
        where: { id }
      });

      // Eliminar el schema (opcional, podría mantenerse para histórico)
      // await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${org.nombre_esquema}" CASCADE;`);

      return { success: true, message: 'Organización eliminada con éxito' };
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al eliminar organización: ${error}`);
      throw new AppError('Error al eliminar organización', 500);
    }
  }

  /**
   * Actualizar el plan de una organización
   */
  async updateOrganizacionPlan(id: string, data: UpdateOrganizacionPlanDto) {
    try {
      // Verificar que la organización existe
      const org = await prisma.organizaciones.findUnique({
        where: { id },
        include: {
          suscripciones: {
            orderBy: {
              creadoEn: 'desc'
            },
            take: 1
          }
        }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      const suscripcion = org.suscripciones[0];
      
      if (suscripcion) {
        // Actualizar suscripción existente
        await prisma.suscripciones.update({
          where: { id: suscripcion.id },
          data: {
            plan: data.plan,
            actualizadoEn: new Date()
          }
        });
      } else {
        // Crear nueva suscripción si no existe
        await prisma.suscripciones.create({
          data: {
            id: uuidv4(),
            organizacionId: id,
            plan: data.plan,
            estado: 'activo',
            fechaInicio: new Date(),
            fechaProximoPago: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
          }
        });
      }

      logger.info(`Plan actualizado para organización ${id}: ${data.plan}`);
      return this.getOrganizacionById(id);
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al actualizar plan de organización: ${error}`);
      throw new AppError('Error al actualizar plan de organización', 500);
    }
  }

  /**
   * Actualizar la fecha de próximo pago de una organización
   */
  async updateFechaPago(id: string, data: UpdateFechaPagoDto) {
    try {
      // Verificar que la organización existe
      const org = await prisma.organizaciones.findUnique({
        where: { id },
        include: {
          suscripciones: {
            orderBy: {
              creadoEn: 'desc'
            },
            take: 1
          }
        }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      const suscripcion = org.suscripciones[0];
      
      if (suscripcion) {
        // Actualizar suscripción existente
        await prisma.suscripciones.update({
          where: { id: suscripcion.id },
          data: {
            fechaProximoPago: data.fecha_proximo_pago,
            actualizadoEn: new Date()
          }
        });
      } else {
        // Crear nueva suscripción si no existe
        await prisma.suscripciones.create({
          data: {
            id: uuidv4(),
            organizacionId: id,
            plan: 'basico',
            estado: 'activo',
            fechaInicio: new Date(),
            fechaProximoPago: data.fecha_proximo_pago
          }
        });
      }

      logger.info(`Fecha de próximo pago actualizada para organización ${id}: ${data.fecha_proximo_pago}`);
      return this.getOrganizacionById(id);
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al actualizar fecha de próximo pago: ${error}`);
      throw new AppError('Error al actualizar fecha de próximo pago', 500);
    }
  }

  /**
   * Listar todos los tenants con información resumida (para dropdown)
   */
  async getAllTenants() {
    try {
      const organizaciones = await prisma.organizaciones.findMany({
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          suscripciones: {
            select: {
              estado: true
            },
            orderBy: {
              creadoEn: 'desc'
            },
            take: 1
          }
        },
        orderBy: {
          nombre: 'asc'
        }
      });

      // Filtrar solo organizaciones activas y transformar resultado
      return organizaciones
        .filter(org => {
          const suscripcion = org.suscripciones[0];
          return !suscripcion || suscripcion.estado === 'activo';
        })
        .map(org => ({
          id: org.id,
          nombre: org.nombre,
          nombre_esquema: org.nombre_esquema,
          estado: org.suscripciones[0]?.estado || 'activo'
        }));
    } catch (error) {
      logger.error(`Error al obtener lista de tenants: ${error}`);
      throw new AppError('Error al obtener lista de tenants', 500);
    }
  }
  
  /**
   * Registrar un nuevo administrador de plataforma
   */
  async registerPlatformAdmin(data: RegisterAdminDto) {
    try {
      // Verificar si ya existe un admin con el correo dado
      const existingAdmin = await prisma.administradores.findUnique({
        where: { correo: data.correo }
      });

      if (existingAdmin) {
        throw new AppError('El correo ya existe en la base de datos', 400);
      }

      // Normalizar permisos
      let permisosNormalizados: string[] = [];
      
      if (data.permisos) {
        if (Array.isArray(data.permisos)) {
          permisosNormalizados = data.permisos;
        } else if (typeof data.permisos === 'object') {
          permisosNormalizados = Object.entries(data.permisos)
            .filter(([_, value]) => value === true)
            .map(([key, _]) => key);
        }
      }

      // Hashear contraseña
      const saltRounds = 10;
      const hash_contrasena = await bcrypt.hash(data.contrasena, saltRounds);

      // Crear nuevo admin
      const newAdmin = await prisma.administradores.create({
        data: {
          id: uuidv4(),
          nombre: data.nombre,
          correo: data.correo,
          hash_contrasena,
          permisos: permisosNormalizados
        },
        select: {
          id: true,
          nombre: true,
          correo: true,
          permisos: true,
          creado_en: true
        }
      });

      logger.info(`Nuevo administrador de plataforma creado: ${newAdmin.id} - ${newAdmin.correo}`);
      return newAdmin;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al registrar administrador: ${error}`);
      throw new AppError('Error al registrar administrador', 500);
    }
  }
}
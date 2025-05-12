import prisma from '../../../shared/services/db.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';
import { 
  CreateOrganizacionDto, 
  UpdateOrganizacionDto,
  UpdateOrganizacionPlanDto,
  UpdateFechaPagoDto,
  RegisterAdminDto,
  RegisterTenantAdminDto,
  UpdateStatusDto,
  UsageQueryDto,
  MetricsQueryDto,
  InvoicesQueryDto,
  HealthInfoDto,
  SendInvoiceDto
} from '../DTOs/admin.dto';
import { TenantPermission } from '../../auth/interfaces/auth.interfaces';
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
              fecha_proximo_pago: true
            },
            orderBy: {
              creado_en: 'desc'
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
          fecha_proximo_pago: suscripcion.fecha_proximo_pago,
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
              fecha_proximo_pago: true
            },
            orderBy: {
              creado_en: 'desc'
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
        fecha_proximo_pago: suscripcion.fecha_proximo_pago,
        suscripciones: undefined
      };
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al obtener organización: ${error}`);
      throw new AppError('Error al obtener organización', 500);
    }
  }  /**
   * Crear una nueva organización con su suscripción
   */  async createOrganizacion(data: CreateOrganizacionDto) {
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

      logger.info(`Intentando crear schema "${nombreSchema}"...`);
        try {
        // Verificar si el schema ya existe
        const schemaExists = await prisma.$queryRaw`
          SELECT EXISTS(
            SELECT 1 FROM information_schema.schemata WHERE schema_name = ${nombreSchema}
          )::boolean as exists
        `;
        logger.info(`Verificación de existencia de schema: ${JSON.stringify(schemaExists)}`);
      } catch (checkError) {
        logger.error(`Error al verificar existencia del schema: ${checkError}`);
      }

      // Crear el schema para la organización
      await prisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${nombreSchema}";`);
      logger.info(`Schema "${nombreSchema}" creado con éxito`);      // Verificar explícitamente si el schema se creó
      try {
        const schemaVerification = await prisma.$queryRaw`
          SELECT EXISTS(
            SELECT 1 FROM information_schema.schemata WHERE schema_name = ${nombreSchema}
          )::boolean as exists
        `;
        logger.info(`Verificación después de CREATE SCHEMA: ${JSON.stringify(schemaVerification)}`);
      } catch (verifyError) {
        logger.error(`Error al verificar creación del schema: ${verifyError}`);
      }

      // Crear las tablas del tenant en el nuevo schema
      logger.info(`Iniciando creación de tablas en schema "${nombreSchema}"...`);
      await this._createTenantTables(nombreSchema);
      logger.info(`Tablas creadas en el schema "${nombreSchema}"`);      // Verificar que las tablas se hayan creado
      try {
        const tableCount = await prisma.$queryRaw`
          SELECT COUNT(*)::integer FROM information_schema.tables 
          WHERE table_schema = ${nombreSchema}
        `;
        logger.info(`Número de tablas creadas en "${nombreSchema}": ${JSON.stringify(tableCount)}`);
      } catch (tableError) {
        logger.error(`Error al verificar tablas creadas: ${tableError}`);
      }// Usar transacción para crear organización y suscripción
      const result = await prisma.$transaction(async (tx) => {
        // 1. Crear la organización - usando el nombre_esquema como identificador único
        logger.info(`Creando organización con nombre_esquema: ${nombreSchema}`);
          // Asegurarse de guardar el subdominio proporcionado por el usuario
        // Si no se proporciona un subdominio, generamos uno basado en el nombre del tenant
        let subdominioFinal = data.subdominio;
        if (subdominioFinal === undefined || subdominioFinal === null || subdominioFinal.trim() === '') {
          const timestamp = Date.now().toString().slice(-4);
          // Generamos un subdominio basado en el nombre de la org, solo para que no sea nulo
          subdominioFinal = `${data.nombre.toLowerCase().replace(/[^a-z0-9-]/g, '-')}-${timestamp}`;
          logger.info(`Generando subdominio automático: ${subdominioFinal}`);
        }
        
        logger.info(`Guardando organización con subdominio: "${subdominioFinal}"`);
        
        const organizacionData: any = {
          nombre: data.nombre,
          nombre_esquema: nombreSchema,
          subdominio: subdominioFinal,
          marca: data.marca as any
        };
        
        const newOrg = await tx.organizaciones.create({
          data: organizacionData
        });

        // 2. Crear la suscripción asociada
        const suscripcionData = data.suscripcion || {};
        await tx.suscripciones.create({
          data: {
            id: uuidv4(),
            organizacion_id: newOrg.id,
            plan: suscripcionData.plan || 'basico',
            estado: suscripcionData.estado || 'activo',
            fecha_proximo_pago: suscripcionData.fecha_proximo_pago || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días desde hoy
            fecha_inicio: new Date()
          }
        });

        return newOrg;
      });

      // Obtener la organización con su suscripción para devolver
      const orgResult = await this.getOrganizacionById(result.id);        // Verificación final de que el schema y las tablas fueron creadas
      try {
        const finalSchemaVerification = await prisma.$queryRaw`
          SELECT 
            EXISTS(
              SELECT 1 FROM information_schema.schemata 
              WHERE schema_name = ${nombreSchema}
            )::boolean as schema_exists,
            (SELECT COUNT(*)::int FROM information_schema.tables 
             WHERE table_schema = ${nombreSchema})::int as table_count
        `;
        logger.info(`Verificación final - Schema y Tablas: ${JSON.stringify(finalSchemaVerification)}`);
      } catch (finalVerifyError) {
        logger.error(`Error en verificación final: ${finalVerifyError}`);
      }
      
      return orgResult;
    } catch (error) {
      // Si ocurre un error y se llegó a crear el schema, limpiarlo
      if (data.nombre_schema) {
        try {
          await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${data.nombre_schema}" CASCADE;`);
          logger.info(`Schema "${data.nombre_schema}" eliminado después de error`);
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
   * Crear las tablas del tenant en el schema especificado
   * @private
   */  private async _createTenantTables(schemaName: string) {
    try {
      logger.info(`Iniciando creación de tablas en schema "${schemaName}"...`);

      // Asegurarse de que la extensión uuid-ossp está habilitada
      try {
        await prisma.$executeRawUnsafe(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        logger.info(`Extensión uuid-ossp verificada/habilitada`);
      } catch (extError) {
        logger.error(`Error al habilitar extensión uuid-ossp: ${extError}`);
        // Continuar de todas formas, podría estar habilitada globalmente
      }
      
      logger.info(`Iniciando creación de tabla 'voluntarios' en schema "${schemaName}"...`);
      
      // Crear las tablas en el schema del tenant, según el modelo definido en Prisma
      // Tabla voluntarios
      try {
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "${schemaName}"."voluntarios" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "nombre_completo" TEXT NOT NULL,
            "dni" TEXT UNIQUE,
            "correo" TEXT,
            "telefono" TEXT,
            "area" TEXT,
            "estado" TEXT,
            "historial" JSONB,
            "registrado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "coordinador_id" UUID NOT NULL,
            
            CONSTRAINT "voluntarios_pkey" PRIMARY KEY ("id")
          );
        `);
        logger.info(`Tabla 'voluntarios' creada en schema "${schemaName}"`);
      } catch (error) {
        logger.error(`Error al crear tabla 'voluntarios': ${error}`);
        throw error;
      }
        logger.info(`Iniciando creación de tabla 'eventos' en schema "${schemaName}"...`);
      // Tabla eventos
      try {
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "${schemaName}"."eventos" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "titulo" TEXT NOT NULL,
            "nombre" TEXT,
            "descripcion" TEXT,
            "inicio" TIMESTAMP(6) NOT NULL,
            "fecha_inicio" TIMESTAMP(6) NOT NULL,
            "fin" TIMESTAMP(6),
            "fecha_fin" TIMESTAMP(6),
            "ubicacion" TEXT,
            "tipo" TEXT,
            "estado" TEXT,
            "coordinador_id" UUID NOT NULL,
            "capacidad" INTEGER,
            "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "actualizado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "requisitos" JSONB,
            
            CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
          );
        `);
        logger.info(`Tabla 'eventos' creada en schema "${schemaName}"`);
      } catch (error) {
        logger.error(`Error al crear tabla 'eventos': ${error}`);
        throw error;
      }
        logger.info(`Iniciando creación de tabla 'inscripciones' en schema "${schemaName}"...`);
      // Tabla inscripciones
      try {
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "${schemaName}"."inscripciones" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "evento_id" UUID NOT NULL,
            "voluntario_id" UUID NOT NULL,
            "estado" TEXT,
            "fecha_inscripcion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "actualizado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            
            CONSTRAINT "inscripciones_pkey" PRIMARY KEY ("id"),
            CONSTRAINT "inscripciones_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "${schemaName}"."eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
            CONSTRAINT "inscripciones_voluntario_id_fkey" FOREIGN KEY ("voluntario_id") REFERENCES "${schemaName}"."voluntarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE
          );
        `);
        logger.info(`Tabla 'inscripciones' creada en schema "${schemaName}"`);
      } catch (error) {
        logger.error(`Error al crear tabla 'inscripciones': ${error}`);
        throw error;
      }
        logger.info(`Iniciando creación de tabla 'asistencia' en schema "${schemaName}"...`);
      // Tabla asistencia
      try {
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "${schemaName}"."asistencia" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "inscripcion_id" UUID NOT NULL,
            "estado" TEXT,
            "marcado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "coordinador_id" UUID NOT NULL,
            
            CONSTRAINT "asistencia_pkey" PRIMARY KEY ("id"),
            CONSTRAINT "asistencia_inscripcion_id_fkey" FOREIGN KEY ("inscripcion_id") REFERENCES "${schemaName}"."inscripciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE
          );
        `);
        logger.info(`Tabla 'asistencia' creada en schema "${schemaName}"`);
      } catch (error) {
        logger.error(`Error al crear tabla 'asistencia': ${error}`);
        throw error;
      }
        logger.info(`Iniciando creación de tabla 'certificados' en schema "${schemaName}"...`);
      // Tabla certificados
      try {
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "${schemaName}"."certificados" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "voluntario_id" UUID NOT NULL,
            "evento_id" UUID NOT NULL,
            "url_pdf" TEXT,
            "emitido_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "coordinador_id" UUID NOT NULL,
            
            CONSTRAINT "certificados_pkey" PRIMARY KEY ("id"),
            CONSTRAINT "certificados_voluntario_id_fkey" FOREIGN KEY ("voluntario_id") REFERENCES "${schemaName}"."voluntarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
            CONSTRAINT "certificados_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "${schemaName}"."eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE
          );
        `);
        logger.info(`Tabla 'certificados' creada en schema "${schemaName}"`);
      } catch (error) {
        logger.error(`Error al crear tabla 'certificados': ${error}`);
        throw error;
      }      // Verificar que todas las tablas se hayan creado correctamente
      try {
        const tables = await prisma.$queryRaw`
          SELECT table_name::text
          FROM information_schema.tables
          WHERE table_schema = ${schemaName}
          ORDER BY table_name;
        `;
        
        // Si no hay tablas, podría significar que la extensión uuid-ossp no está funcionando correctamente
        // Intentaremos un método alternativo
        const tablesArray = Array.isArray(tables) ? tables : [];
        if (tablesArray.length === 0) {
          logger.warn(`No se encontraron tablas en el schema ${schemaName}. Intentando método alternativo...`);
          await this._createTenantTablesAlternative(schemaName);
        } else {
          logger.info(`Tablas creadas en schema "${schemaName}": ${JSON.stringify(tables)}`);
        }
      } catch (error) {
        logger.error(`Error al verificar tablas creadas: ${error}`);
      }

      logger.info(`Todas las tablas fueron creadas exitosamente en el schema "${schemaName}"`);
    } catch (error) {
      logger.error(`Error general al crear tablas en el schema ${schemaName}: ${error}`);
      throw new AppError(`Error al crear tablas del tenant: ${error}`, 500);
    }
  }

  /**
   * Método alternativo para crear tablas del tenant sin depender de uuid-ossp
   * @private
   */
  private async _createTenantTablesAlternative(schemaName: string) {
    try {
      logger.info(`Utilizando método alternativo para crear tablas en schema "${schemaName}"...`);
      
      // Crear tablas con un enfoque diferente para generar UUIDs
      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "${schemaName}"."voluntarios" (
          "id" UUID NOT NULL PRIMARY KEY,
          "nombre_completo" TEXT NOT NULL,
          "dni" TEXT UNIQUE,
          "correo" TEXT,
          "telefono" TEXT,
          "area" TEXT,
          "estado" TEXT,
          "historial" JSONB,
          "registrado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "coordinador_id" UUID NOT NULL
        );

        CREATE TABLE IF NOT EXISTS "${schemaName}"."eventos" (
          "id" UUID NOT NULL PRIMARY KEY,
          "titulo" TEXT NOT NULL,
          "nombre" TEXT,
          "descripcion" TEXT,
          "inicio" TIMESTAMP(6) NOT NULL,
          "fecha_inicio" TIMESTAMP(6) NOT NULL,
          "fin" TIMESTAMP(6),
          "fecha_fin" TIMESTAMP(6),
          "ubicacion" TEXT,
          "tipo" TEXT,
          "estado" TEXT,
          "coordinador_id" UUID NOT NULL,
          "capacidad" INTEGER,
          "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "actualizado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "requisitos" JSONB
        );

        CREATE TABLE IF NOT EXISTS "${schemaName}"."inscripciones" (
          "id" UUID NOT NULL PRIMARY KEY,
          "evento_id" UUID NOT NULL,
          "voluntario_id" UUID NOT NULL,
          "estado" TEXT,
          "fecha_inscripcion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "creado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "actualizado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          CONSTRAINT "inscripciones_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "${schemaName}"."eventos"("id"),
          CONSTRAINT "inscripciones_voluntario_id_fkey" FOREIGN KEY ("voluntario_id") REFERENCES "${schemaName}"."voluntarios"("id")
        );

        CREATE TABLE IF NOT EXISTS "${schemaName}"."asistencia" (
          "id" UUID NOT NULL PRIMARY KEY,
          "inscripcion_id" UUID NOT NULL,
          "estado" TEXT,
          "marcado_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "coordinador_id" UUID NOT NULL,
          CONSTRAINT "asistencia_inscripcion_id_fkey" FOREIGN KEY ("inscripcion_id") REFERENCES "${schemaName}"."inscripciones"("id")
        );

        CREATE TABLE IF NOT EXISTS "${schemaName}"."certificados" (
          "id" UUID NOT NULL PRIMARY KEY,
          "voluntario_id" UUID NOT NULL,
          "evento_id" UUID NOT NULL,
          "url_pdf" TEXT,
          "emitido_en" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
          "coordinador_id" UUID NOT NULL,
          CONSTRAINT "certificados_voluntario_id_fkey" FOREIGN KEY ("voluntario_id") REFERENCES "${schemaName}"."voluntarios"("id"),
          CONSTRAINT "certificados_evento_id_fkey" FOREIGN KEY ("evento_id") REFERENCES "${schemaName}"."eventos"("id")
        );
      `);
      
      logger.info(`Tablas creadas con método alternativo en schema "${schemaName}"`);
    } catch (error) {
      logger.error(`Error en método alternativo para crear tablas: ${error}`);
      throw error;
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
              creado_en: 'desc'
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
                fecha_proximo_pago: data.fecha_proximo_pago
              }
            });
          } else {
            // Crear una nueva suscripción si no existe
            await tx.suscripciones.create({
              data: {
                id: uuidv4(),
                organizacion_id: id,
                plan: data.plan || 'basico',
                estado: data.estado || 'activo',
                fecha_proximo_pago: data.fecha_proximo_pago || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                fecha_inicio: new Date()
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
        where: { organizacion_id: id }
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
              creado_en: 'desc'
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
            actualizado_en: new Date()
          }
        });
      } else {
        // Crear nueva suscripción si no existe
        await prisma.suscripciones.create({
          data: {
            id: uuidv4(),
            organizacion_id: id,
            plan: data.plan,
            estado: 'activo',
            fecha_inicio: new Date(),
            fecha_proximo_pago: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
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
              creado_en: 'desc'
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
            fecha_proximo_pago: data.fecha_proximo_pago,
            actualizado_en: new Date()
          }
        });
      } else {
        // Crear nueva suscripción si no existe
        await prisma.suscripciones.create({
          data: {
            id: uuidv4(),
            organizacion_id: id,
            plan: 'basico',
            estado: 'activo',
            fecha_inicio: new Date(),
            fecha_proximo_pago: data.fecha_proximo_pago
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
              creado_en: 'desc'
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
  /**
   * Registrar un nuevo administrador de tenant
   */
  async registerTenantAdmin(tenantId: string, data: RegisterTenantAdminDto) {
    try {
      // Verificar que el tenant existe
      const org = await prisma.organizaciones.findUnique({
        where: { id: tenantId }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      // Verificar si ya existe un usuario con el correo dado para este tenant
      const existingUser = await prisma.tenant_usuarios.findFirst({
        where: { 
          correo: data.correo,
          tenant_id: tenantId
        }
      });

      if (existingUser) {
        throw new AppError('El correo ya existe para este tenant', 400);
      }// Normalizar permisos
      let permisosNormalizados: string[] = [];
      
      if (data.permisos) {
        // Si se proporcionan permisos específicos, usarlos
        if (Array.isArray(data.permisos)) {
          permisosNormalizados = data.permisos;
        } else if (typeof data.permisos === 'object') {
          // Convertir objeto de permisos a array de strings
          permisosNormalizados = Object.entries(data.permisos)
            .filter(([_, value]) => value === true)
            .map(([key, _]) => key);
        }
      } else {
        // Si no, asignar permisos según el rol (usando los permisos por defecto)
        const rolPermisos: Record<string, string[]> = {
          'admin': Object.values(TenantPermission),
          'coordinador': [
            TenantPermission.MANAGE_EVENTS,
            TenantPermission.VIEW_EVENTS,
            TenantPermission.CREATE_EVENT,
            TenantPermission.UPDATE_EVENT,
            TenantPermission.VIEW_VOLUNTEERS
          ],
          'voluntario': [
            TenantPermission.VIEW_EVENTS
          ]
        };
        
        // Asignar los permisos según el rol o un array vacío si el rol no existe
        const rol = data.rol || 'admin';
        permisosNormalizados = rolPermisos[rol] || [];
      }

      // Hashear contraseña
      const saltRounds = 10;
      const hash_contrasena = await bcrypt.hash(data.contrasena, saltRounds);

      // Crear nuevo usuario para el tenant
      const newTenantAdmin = await prisma.tenant_usuarios.create({
        data: {
          id: uuidv4(),
          tenant_id: tenantId,
          nombre: data.nombre,
          correo: data.correo,
          hash_contrasena,
          rol: data.rol,
          permisos: permisosNormalizados
        },
        select: {
          id: true,
          nombre: true,
          correo: true,
          rol: true,
          permisos: true,
          creado_en: true,
          tenant_id: true,
          organizacion: {
            select: {
              nombre: true,
              nombre_esquema: true
            }
          }
        }
      });

      // Formatear la respuesta
      const result = {
        id: newTenantAdmin.id,
        nombre: newTenantAdmin.nombre,
        correo: newTenantAdmin.correo,
        rol: newTenantAdmin.rol,
        permisos: newTenantAdmin.permisos,
        tenant_id: newTenantAdmin.tenant_id,
        tenant_nombre: newTenantAdmin.organizacion.nombre,
        tenant_schema: newTenantAdmin.organizacion.nombre_esquema,
        creado_en: newTenantAdmin.creado_en
      };

      logger.info(`Nuevo administrador de tenant creado: ${newTenantAdmin.id} - ${newTenantAdmin.correo} para organización: ${org.nombre}`);
      return result;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al registrar administrador de tenant: ${error}`);
      throw new AppError('Error al registrar administrador de tenant', 500);
    }
  }

  /**
   * Actualizar el estado de una organización
   */
  async updateOrganizacionStatus(id: string, data: UpdateStatusDto) {
    try {
      // Verificar que la organización existe
      const org = await prisma.organizaciones.findUnique({
        where: { id },
        include: {
          suscripciones: {
            orderBy: {
              creado_en: 'desc'
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
            estado: data.estado,
            actualizado_en: new Date()
          }
        });
      } else {
        // Crear nueva suscripción si no existe
        await prisma.suscripciones.create({
          data: {
            id: uuidv4(),
            organizacion_id: id,
            plan: 'basico',
            estado: data.estado,
            fecha_inicio: new Date(),
            fecha_proximo_pago: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
          }
        });
      }

      return this.getOrganizacionById(id);
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al actualizar estado de organización: ${error}`);
      throw new AppError('Error al actualizar estado de organización', 500);
    }
  }

  /**
   * Obtener datos de uso de API para una organización
   */
  async getOrganizacionUsage(id: string, query: UsageQueryDto) {
    try {
      // Verificar que la organización existe
      const org = await prisma.organizaciones.findUnique({
        where: { id }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      // Definir fechas para filtrado
      const fechaHasta = query.hasta ? new Date(query.hasta) : new Date();
      const fechaDesde = query.desde 
        ? new Date(query.desde) 
        : new Date(fechaHasta.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 días atrás por defecto
      
      // Aquí implementarías la lógica real para obtener datos de uso
      // Por ahora, devolvemos datos simulados
      
      // Simular datos de uso
      const totalRequests = Math.floor(Math.random() * 10000) + 1000;
      const successfulRequests = Math.floor(totalRequests * (0.95 + Math.random() * 0.05));
      const failedRequests = totalRequests - successfulRequests;
      
      const usageData = {
        periodo: {
          desde: fechaDesde,
          hasta: fechaHasta
        },
        total_requests: totalRequests,
        successful_requests: successfulRequests,
        failed_requests: failedRequests,
        error_rate: (failedRequests / totalRequests) * 100,
        // Distribución por día (simulada)
        daily_usage: this._generateDailyUsageData(fechaDesde, fechaHasta),
        // Top endpoints por uso
        top_endpoints: [
          { path: '/api/events', count: Math.floor(totalRequests * 0.4) },
          { path: '/api/volunteers', count: Math.floor(totalRequests * 0.3) },
          { path: '/api/certificates', count: Math.floor(totalRequests * 0.2) },
          { path: '/api/attendance', count: Math.floor(totalRequests * 0.1) }
        ]
      };
      
      return usageData;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al obtener datos de uso: ${error}`);
      throw new AppError('Error al obtener datos de uso', 500);
    }
  }

  /**
   * Obtener métricas de rendimiento para una organización
   */
  async getOrganizacionMetrics(id: string, query: MetricsQueryDto) {
    try {
      // Verificar que la organización existe
      const org = await prisma.organizaciones.findUnique({
        where: { id }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      // Definir fechas para filtrado
      const fechaHasta = query.hasta ? new Date(query.hasta) : new Date();
      const fechaDesde = query.desde 
        ? new Date(query.desde) 
        : new Date(fechaHasta.getTime() - 7 * 24 * 60 * 60 * 1000); // 7 días atrás por defecto
      
      // Filtrar por tipo de métrica
      const includeLatency = query.tipo === 'latencia' || query.tipo === 'todos';
      const includeErrors = query.tipo === 'errores' || query.tipo === 'todos';
      
      // Simular datos de métricas
      const metricsData: any = {
        periodo: {
          desde: fechaDesde,
          hasta: fechaHasta
        },
        organizacion: {
          id: org.id,
          nombre: org.nombre,
          schema: org.nombre_esquema
        }
      };
      
      if (includeLatency) {
        metricsData.latencia = {
          promedio_ms: Math.floor(Math.random() * 200) + 50,
          p95_ms: Math.floor(Math.random() * 500) + 100,
          p99_ms: Math.floor(Math.random() * 1000) + 200,
          minimo_ms: Math.floor(Math.random() * 20) + 10,
          maximo_ms: Math.floor(Math.random() * 2000) + 500,
          // Distribución por día (simulada)
          por_dia: this._generateLatencyByDayData(fechaDesde, fechaHasta)
        };
      }
      
      if (includeErrors) {
        metricsData.errores = {
          total: Math.floor(Math.random() * 100),
          rate_porcentaje: Math.random() * 5,
          por_tipo: {
            validation: Math.floor(Math.random() * 40),
            authentication: Math.floor(Math.random() * 30),
            not_found: Math.floor(Math.random() * 20),
            server: Math.floor(Math.random() * 10)
          },
          // Distribución por día (simulada)
          por_dia: this._generateErrorsByDayData(fechaDesde, fechaHasta)
        };
      }
      
      return metricsData;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al obtener métricas: ${error}`);
      throw new AppError('Error al obtener métricas', 500);
    }
  }

  /**
   * Obtener facturas para todas las organizaciones
   */
  async getInvoices(query: InvoicesQueryDto) {
    try {
      // Definir fechas para filtrado
      const fechaHasta = query.hasta ? new Date(query.hasta) : new Date();
      const fechaDesde = query.desde 
        ? new Date(query.desde) 
        : new Date(fechaHasta.getTime() - 90 * 24 * 60 * 60 * 1000); // 90 días atrás por defecto
      
      // Obtener todas las organizaciones con sus suscripciones
      const organizaciones = await prisma.organizaciones.findMany({
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          suscripciones: {
            select: {
              plan: true,
              estado: true
            },
            orderBy: {
              creado_en: 'desc'
            },
            take: 1
          }
        }
      });
      
      // Simular datos de facturas
      const invoices = [];
      
      for (const org of organizaciones) {
        const suscripcion = org.suscripciones[0];
        if (!suscripcion) continue;
        
        const plan = suscripcion.plan || 'basico';
        const montoBase = plan === 'basico' ? 50 : plan === 'premium' ? 100 : 200;
        
        // Generar entre 1 y 3 facturas por organización
        const numFacturas = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < numFacturas; i++) {
          // Calcular fecha de factura dentro del rango
          const rango = fechaHasta.getTime() - fechaDesde.getTime();
          const randomOffset = Math.floor(Math.random() * rango);
          const fechaFactura = new Date(fechaDesde.getTime() + randomOffset);
          
          // Calcular fecha de vencimiento (15 días después)
          const fechaVencimiento = new Date(fechaFactura.getTime() + 15 * 24 * 60 * 60 * 1000);
          
          // Estado de la factura
          let estado = 'pendiente';
          if (fechaVencimiento < new Date()) {
            estado = Math.random() > 0.3 ? 'pagada' : 'vencida';
          }
          
          // Si se especificó un filtro de estado y no coincide, omitir esta factura
          if (query.estado !== 'todas' && query.estado !== estado) continue;
          
          // Generar monto con variación aleatoria
          const monto = montoBase + (Math.random() * montoBase * 0.2);
          
          // Crear factura simulada
          invoices.push({
            id: uuidv4(),
            organizacion_id: org.id,
            organizacion_nombre: org.nombre,
            numero: `INV-${Math.floor(Math.random() * 10000)}`,
            fecha_emision: fechaFactura,
            fecha_vencimiento: fechaVencimiento,
            monto: monto.toFixed(2),
            moneda: 'USD',
            estado,
            plan,
            detalles: [
              { concepto: 'Suscripción base', monto: montoBase.toFixed(2) },
              { concepto: 'Uso adicional', monto: (monto - montoBase).toFixed(2) }
            ]
          });
        }
      }
      
      // Ordenar por fecha de emisión (más reciente primero)
      invoices.sort((a, b) => b.fecha_emision.getTime() - a.fecha_emision.getTime());
      
      return invoices;
    } catch (error) {
      logger.error(`Error al obtener facturas: ${error}`);
      throw new AppError('Error al obtener facturas', 500);
    }
  }

  /**
   * Obtener información del estado de salud del sistema
   */
  async getHealthInfo(): Promise<HealthInfoDto> {
    try {
      // Medir el tiempo de respuesta de la base de datos
      const startTime = Date.now();
      let dbStatus = false;
      
      try {
        // Ejecutar una consulta simple para verificar la conexión a la base de datos
        await prisma.$queryRaw`SELECT 1`;
        dbStatus = true;
      } catch (dbError) {
        logger.error(`Error en la conexión a la base de datos: ${dbError}`);
        dbStatus = false;
      }
      
      const apiLatency = Date.now() - startTime;
      
      // Obtener información del sistema
      // En un entorno real, estos valores podrían provenir de servicios de monitoreo
      const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024; // MB
      
      // Simular otros valores que en un entorno real provendrían de sistemas de monitoreo
      const health: HealthInfoDto = {
        db_status: dbStatus,
        api_latency: apiLatency,
        queue_size: Math.floor(Math.random() * 10), // Simulado
        memory_usage: Math.round(memoryUsage * 100) / 100,
        cpu_usage: Math.floor(Math.random() * 30) + 10, // Simulado
        uptime: Math.floor(process.uptime())
      };
      
      return health;
    } catch (error) {
      logger.error(`Error al obtener información de salud: ${error}`);
      throw new AppError('Error al obtener información de salud', 500);
    }
  }

  /**
   * Enviar factura por email o generar PDF
   */
  async sendInvoice(id: string, data: SendInvoiceDto) {
    try {
      // Buscar todas las organizaciones para simular buscar facturas
      const organizaciones = await prisma.organizaciones.findMany({
        select: {
          id: true,
          nombre: true,
          suscripciones: {
            select: {
              id: true,
              plan: true,
              estado: true,
              organizacion_id: true
            },
            orderBy: {
              creado_en: 'desc'
            },
            take: 1
          }
        },
        take: 10
      });
      
      // Simulación: buscar una factura con el ID proporcionado
      let facturaSimulada: any = null;
      
      // Generar una factura simulada basada en el ID
      facturaSimulada = {
        id: id,
        numero: `INV-${Math.floor(Math.random() * 10000)}`,
        fecha_emision: new Date(),
        fecha_vencimiento: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        monto: (Math.random() * 500 + 50).toFixed(2),
        moneda: 'USD',
        estado: Math.random() > 0.5 ? 'pendiente' : 'pagada',
        plan: ['basico', 'premium', 'enterprise'][Math.floor(Math.random() * 3)],
        detalles: [
          { concepto: 'Suscripción base', monto: '50.00' },
          { concepto: 'Uso adicional', monto: '25.00' }
        ]
      };
      
      // Asignar una organización aleatoria a la factura
      const randomOrg = organizaciones[Math.floor(Math.random() * organizaciones.length)];
      if (randomOrg) {
        facturaSimulada.organizacion_id = randomOrg.id;
        facturaSimulada.organizacion_nombre = randomOrg.nombre;
      }
      
      if (!facturaSimulada) {
        throw new AppError('Factura no encontrada', 404);
      }
      
      // Determinar el destinatario de correo
      const destinatario = data.destinatario || `admin@${facturaSimulada.organizacion_nombre.toLowerCase().replace(/\s/g, '')}.com`;
      
      // Simulación del envío de factura
      let resultado: any = {
        success: true,
        factura_id: id,
        timestamp: new Date(),
        method: data.method
      };
      
      // Dependiendo del método seleccionado
      if (data.method === 'email' || data.method === 'both') {
        resultado.email = {
          sent_to: destinatario,
          subject: `Factura ${facturaSimulada.numero} - ${facturaSimulada.organizacion_nombre}`,
          attachments: data.incluirAdjuntos ? 1 : 0,
          cc: data.cc?.length || 0
        };
        
        logger.info(`Email de factura ${id} enviado a ${destinatario}`);
      }
      
      if (data.method === 'pdf' || data.method === 'both') {
        // Simulación de generación de PDF
        resultado.pdf = {
          filename: `factura_${facturaSimulada.numero}.pdf`,
          size_kb: Math.floor(Math.random() * 1000) + 50,
          download_url: `https://ejemplo.com/facturas/${id}/download`
        };
        
        logger.info(`PDF de factura ${id} generado`);
      }
      
      // Mensajes personalizados
      if (data.mensaje) {
        resultado.mensaje_personalizado = true;
      }
      
      return {
        invoice: facturaSimulada,
        sending_details: resultado
      };
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al enviar factura: ${error}`);
      throw new AppError('Error al enviar factura', 500);
    }
  }

  // Métodos privados auxiliares para generar datos simulados
  private _generateDailyUsageData(desde: Date, hasta: Date) {
    const dailyData = [];
    let currentDate = new Date(desde);
    
    while (currentDate <= hasta) {
      dailyData.push({
        fecha: new Date(currentDate),
        total: Math.floor(Math.random() * 500) + 50,
        exitosos: Math.floor(Math.random() * 450) + 50,
        fallidos: Math.floor(Math.random() * 50)
      });
      
      // Avanzar al siguiente día
      currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    }
    
    return dailyData;
  }
  
  private _generateLatencyByDayData(desde: Date, hasta: Date) {
    const dailyData = [];
    let currentDate = new Date(desde);
    
    while (currentDate <= hasta) {
      dailyData.push({
        fecha: new Date(currentDate),
        promedio_ms: Math.floor(Math.random() * 200) + 50,
        p95_ms: Math.floor(Math.random() * 500) + 100
      });
      
      // Avanzar al siguiente día
      currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    }
    
    return dailyData;
  }
  
  private _generateErrorsByDayData(desde: Date, hasta: Date) {
    const dailyData = [];
    let currentDate = new Date(desde);
    
    while (currentDate <= hasta) {
      dailyData.push({
        fecha: new Date(currentDate),
        total: Math.floor(Math.random() * 20),
        rate_porcentaje: Math.random() * 5
      });
      
      // Avanzar al siguiente día
      currentDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    }
    
    return dailyData;
  }
}
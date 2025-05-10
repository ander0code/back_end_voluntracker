import prisma from '../../../shared/services/db.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';
import { 
  CreateOrganizacionDto, 
  UpdateOrganizacionDto,
  UpdateOrganizacionPlanDto,
  UpdateFechaPagoDto
} from '../DTOs/admin.dto';
import bcrypt from 'bcryptjs';

export class AdminService {
  /**
   * Obtener todas las organizaciones
   */
  async getAllOrganizaciones() {
    try {
      return await prisma.organizaciones.findMany({
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          plan: true,
          estado: true,
          creado_en: true,
          actualizado_en: true,
          subdominio: true,
          marca: true,
          fecha_proximo_pago: true
        }
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
          plan: true,
          estado: true,
          fecha_proximo_pago: true,
          creado_en: true,
          actualizado_en: true,
          subdominio: true,
          marca: true
        }
      });

      if (!organizacion) {
        throw new AppError('Organización no encontrada', 404);
      }

      return organizacion;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al obtener organización: ${error}`);
      throw new AppError('Error al obtener organización', 500);
    }
  }

  /**
   * Crear una nueva organización
   */
  async createOrganizacion(data: CreateOrganizacionDto) {
    try {
      // Si se proporciona un nombre_schema, verificar que no exista
      if (data.nombre_schema) {
        const existingSchema = await prisma.organizaciones.findFirst({
          where: { nombre_esquema: data.nombre_schema }
        });

        if (existingSchema) {
          throw new AppError('Este nombre de schema ya está en uso', 400);
        }
      } else {
        // Generar un nombre de schema basado en el nombre y un timestamp
        const timestamp = Date.now().toString().slice(-6);
        data.nombre_schema = data.nombre.toLowerCase()
          .replace(/[^a-z0-9_]/g, '_')
          .substring(0, 15) + '_' + timestamp;
      }

      // Crear el schema para la organización
      await prisma.$executeRawUnsafe(`CREATE SCHEMA IF NOT EXISTS "${data.nombre_schema}";`);
      logger.info(`Schema "${data.nombre_schema}" creado con éxito`);

      // Crear la organización
      const newOrg = await prisma.organizaciones.create({
        data: {
          nombre: data.nombre,
          nombre_esquema: data.nombre_schema,
          subdominio: data.subdominio,
          marca: data.marca as any,
          plan: data.plan || 'basico',
          estado: data.estado || 'activo',
        },
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          plan: true,
          estado: true,
          creado_en: true,
          actualizado_en: true
        }
      });

      // Devolver la organización creada
      return newOrg;
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
        where: { id }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      // No permitimos cambiar el nombre_schema una vez creado
      if (data.nombre_schema && data.nombre_schema !== org.nombre_esquema) {
        throw new AppError('No se puede cambiar el nombre del schema', 400);
      }

      // Actualizar la organización
      const updatedOrg = await prisma.organizaciones.update({
        where: { id },
        data: {
          nombre: data.nombre,
          subdominio: data.subdominio,
          plan: data.plan,
          estado: data.estado,
          marca: data.marca as any,
          fecha_proximo_pago: data.fecha_proximo_pago
        },
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          plan: true,
          estado: true,
          creado_en: true,
          actualizado_en: true,
          subdominio: true,
          fecha_proximo_pago: true
        }
      });

      return updatedOrg;
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

      // Eliminar la organización
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
        where: { id }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      // Actualizar el plan de la organización
      const updatedOrg = await prisma.organizaciones.update({
        where: { id },
        data: {
          plan: data.plan,
          actualizado_en: new Date()
        },
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          plan: true,
          estado: true,
          fecha_proximo_pago: true,
          creado_en: true,
          actualizado_en: true
        }
      });

      logger.info(`Plan actualizado para organización ${id}: ${data.plan}`);
      return updatedOrg;
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
        where: { id }
      });

      if (!org) {
        throw new AppError('Organización no encontrada', 404);
      }

      // Actualizar la fecha de próximo pago
      const updatedOrg = await prisma.organizaciones.update({
        where: { id },
        data: {
          fecha_proximo_pago: data.fecha_proximo_pago,
          actualizado_en: new Date()
        },
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          plan: true,
          estado: true,
          fecha_proximo_pago: true,
          creado_en: true,
          actualizado_en: true
        }
      });

      logger.info(`Fecha de próximo pago actualizada para organización ${id}: ${data.fecha_proximo_pago}`);
      return updatedOrg;
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
      return await prisma.organizaciones.findMany({
        select: {
          id: true,
          nombre: true,
          nombre_esquema: true,
          estado: true
        },
        where: {
          estado: 'activo'
        },
        orderBy: {
          nombre: 'asc'
        }
      });
    } catch (error) {
      logger.error(`Error al obtener lista de tenants: ${error}`);
      throw new AppError('Error al obtener lista de tenants', 500);
    }
  }
}
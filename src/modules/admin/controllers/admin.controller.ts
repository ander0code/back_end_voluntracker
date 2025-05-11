import { Request, Response } from 'express';
import { AdminService } from '../services/admin.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';
import { registerAdminSchema } from '../DTOs/admin.dto';

// Instancia del servicio
const adminService = new AdminService();

/**
 * Controladores para gestión de organizaciones (tenants)
 */
export const organizacionController = {
  // GET /api/admin/organizaciones
  getAll: async (req: Request, res: Response) => {
    try {
      const organizaciones = await adminService.getAllOrganizaciones();
      return res.status(200).json({
        status: 'success',
        data: organizaciones
      });
    } catch (error: any) {
      logger.error(`Error al obtener organizaciones: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al obtener organizaciones'
      });
    }
  },

  // GET /api/admin/organizaciones/:id
  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const organizacion = await adminService.getOrganizacionById(id);
      return res.status(200).json({
        status: 'success',
        data: organizacion
      });
    } catch (error: any) {
      logger.error(`Error al obtener organización: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al obtener organización'
      });
    }
  },

  // POST /api/admin/organizaciones
  create: async (req: Request, res: Response) => {
    try {
      const organizacion = await adminService.createOrganizacion(req.body);
      return res.status(201).json({
        status: 'success',
        data: organizacion
      });
    } catch (error: any) {
      logger.error(`Error al crear organización: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al crear organización'
      });
    }
  },

  // PATCH /api/admin/organizaciones/:id
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const organizacion = await adminService.updateOrganizacion(id, req.body);
      return res.status(200).json({
        status: 'success',
        data: organizacion
      });
    } catch (error: any) {
      logger.error(`Error al actualizar organización: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al actualizar organización'
      });
    }
  },
  // PATCH /api/admin/organizaciones/:id/plan
  updatePlan: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { plan } = req.body;
      
      if (!plan) {
        return res.status(400).json({
          status: 'error',
          message: 'El plan es requerido'
        });
      }
      
      // Utilizamos el método específico para actualizar el plan
      const organizacion = await adminService.updateOrganizacionPlan(id, {
        plan,
        comentario: req.body.comentario
      });
      
      return res.status(200).json({
        status: 'success',
        data: organizacion
      });
    } catch (error: any) {
      logger.error(`Error al actualizar plan: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al actualizar plan'
      });
    }
  },// PATCH /api/admin/organizaciones/:id/payment-date
  updatePaymentDate: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { fecha } = req.body;
      
      if (!fecha) {
        return res.status(400).json({
          status: 'error',
          message: 'La fecha es requerida'
        });
      }
      
      // Convertimos la fecha a formato Date
      const fechaProximoPago = new Date(fecha);
      
      try {
        // Utilizamos el método específico para actualizar la fecha de pago
        const organizacion = await adminService.updateFechaPago(id, {
          fecha_proximo_pago: fechaProximoPago,
          comentario: req.body.comentario
        });
        
        return res.status(200).json({
          status: 'success',
          data: organizacion,
          message: 'Fecha de próximo pago actualizada'
        });
      } catch (error: any) {
        throw error;
      }
      
    } catch (error: any) {
      logger.error(`Error al actualizar fecha de pago: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al actualizar fecha de pago'
      });
    }
  },

  // DELETE /api/admin/organizaciones/:id
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await adminService.deleteOrganizacion(id);
      return res.status(200).json({
        status: 'success',
        message: 'Organización eliminada con éxito'
      });
    } catch (error: any) {
      logger.error(`Error al eliminar organización: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al eliminar organización'
      });
    }
  }
};

/**
 * Controlador para listar tenants (versión API pública)
 */
export const getAllTenants = async (req: Request, res: Response) => {
  try {
    const organizaciones = await adminService.getAllOrganizaciones();
    
    // Filtramos la información que se devuelve
    const tenants = organizaciones.map((org: any) => ({
      id: org.id,
      nombre: org.nombre,
      schema: org.nombre_esquema || org.nombre_schema,
      estado: org.estado || (org.activo ? 'activo' : 'inactivo')
    }));
    
    return res.status(200).json({
      status: 'success',
      data: tenants
    });
  } catch (error: any) {
    logger.error(`Error al listar tenants: ${error.message}`);
    const statusCode = error instanceof AppError ? error.statusCode : 500;
    return res.status(statusCode).json({
      status: 'error',
      message: error.message || 'Error al listar tenants'
    });
  }
};

/**
 * Controlador para registrar un nuevo administrador de plataforma
 */
export const registerAdmin = async (req: Request, res: Response) => {
  try {
    // Validar datos de entrada
    const result = registerAdminSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        status: 'error',
        message: 'Datos de entrada inválidos',
        errors: result.error.format()
      });
    }
    
    // Registrar administrador
    const newAdmin = await adminService.registerPlatformAdmin(result.data);
    
    return res.status(201).json({
      status: 'success',
      data: {
        id: newAdmin.id,
        nombre: newAdmin.nombre,
        correo: newAdmin.correo,
        permisos: newAdmin.permisos,
        creado_en: newAdmin.creado_en
      },
      message: 'Administrador registrado exitosamente'
    });
  } catch (error: any) {
    logger.error(`Error en registro de administrador: ${error.message}`);
    
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    }
    
    return res.status(500).json({
      status: 'error',
      message: 'Error en el servidor al registrar el administrador'
    });
  }
};
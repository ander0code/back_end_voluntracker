import { Request, Response } from 'express';
import { AdminService } from '../services/admin.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';
import { registerAdminSchema } from '../DTOs/admin.dto';

// Instancia del servicio
const adminService = new AdminService();

/**
 * Controladores para gestión de tenants (anteriormente organizaciones)
 */
export const tenantController = {
  // GET /api/admin/tenants
  getAll: async (req: Request, res: Response) => {
    try {
      const tenants = await adminService.getAllOrganizaciones();
      return res.status(200).json({
        status: 'success',
        data: tenants
      });
    } catch (error: any) {
      logger.error(`Error al obtener tenants: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al obtener tenants'
      });
    }
  },
  // GET /api/admin/tenants/:id
  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const tenant = await adminService.getOrganizacionById(id);
      return res.status(200).json({
        status: 'success',
        data: tenant
      });
    } catch (error: any) {
      logger.error(`Error al obtener tenant: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al obtener tenant'
      });
    }
  },

  // POST /api/admin/tenants
  create: async (req: Request, res: Response) => {
    try {
      const tenant = await adminService.createOrganizacion(req.body);
      return res.status(201).json({
        status: 'success',
        data: tenant
      });
    } catch (error: any) {
      logger.error(`Error al crear tenant: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al crear tenant'
      });
    }
  },
  // PATCH /api/admin/tenants/:id
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const tenant = await adminService.updateOrganizacion(id, req.body);
      return res.status(200).json({
        status: 'success',
        data: tenant
      });
    } catch (error: any) {
      logger.error(`Error al actualizar tenant: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al actualizar tenant'
      });
    }
  },  // PATCH /api/admin/tenants/:id/plan
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
      const tenant = await adminService.updateOrganizacionPlan(id, {
        plan,
        comentario: req.body.comentario
      });
      
      return res.status(200).json({
        status: 'success',
        data: tenant
      });
    } catch (error: any) {
      logger.error(`Error al actualizar plan: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al actualizar plan'
      });
    }
  },  // PATCH /api/admin/tenants/:id/payment-date
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
      
      // Utilizamos el método específico para actualizar la fecha de pago
      const tenant = await adminService.updateFechaPago(id, {
        fecha_proximo_pago: fechaProximoPago,
        comentario: req.body.comentario
      });
      
      return res.status(200).json({
        status: 'success',
        data: tenant,
        message: 'Fecha de próximo pago actualizada'
      });
    } catch (error: any) {
      logger.error(`Error al actualizar fecha de pago: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al actualizar fecha de pago'
      });
    }
  },
  // DELETE /api/admin/tenants/:id
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await adminService.deleteOrganizacion(id);
      return res.status(200).json({
        status: 'success',
        message: 'Tenant eliminado con éxito'
      });
    } catch (error: any) {
      logger.error(`Error al eliminar tenant: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al eliminar tenant'
      });
    }
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
import { Request, Response, NextFunction } from 'express';
import { AdminService } from '../services/admin.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';
import { 
  registerAdminSchema, 
  UsageQueryDto, 
  MetricsQueryDto, 
  InvoicesQueryDto,
  SendInvoiceDto,
  registerTenantAdminSchema
} from '../DTOs/admin.dto';

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
      const fecha_proximo_pago = new Date(fecha);
      
      // Utilizamos el método específico para actualizar la fecha de pago
      const tenant = await adminService.updateFechaPago(id, {
        fecha_proximo_pago: fecha_proximo_pago,
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

/**
 * Controladores para la gestión avanzada de tenants
 */
export const statusController = {
  // PATCH /api/admin/tenants/:id/status
  updateStatus: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { estado } = req.body;
      
      if (!estado || !['activo', 'suspendido', 'cancelado'].includes(estado)) {
        return res.status(400).json({
          status: 'error',
          message: 'Estado inválido. Valores permitidos: activo, suspendido, cancelado'
        });
      }
      
      const tenant = await adminService.updateOrganizacionStatus(id, { estado });
      
      return res.status(200).json({
        status: 'success',
        data: tenant,
        message: `Estado del tenant actualizado a: ${estado}`
      });
    } catch (error: any) {
      logger.error(`Error al actualizar estado: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al actualizar estado'
      });
    }
  }
};

/**
 * Controladores para analítica y monitoreo
 */
export const analyticsController = {
  // GET /api/admin/tenants/:id/usage
  getUsage: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const query: UsageQueryDto = {
        desde: req.query.desde as string,
        hasta: req.query.hasta as string
      };
      
      const usageData = await adminService.getOrganizacionUsage(id, query);
      
      return res.status(200).json({
        status: 'success',
        data: usageData
      });
    } catch (error: any) {
      logger.error(`Error al obtener datos de uso: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al obtener datos de uso'
      });
    }
  },
  
  // GET /api/admin/tenants/:id/metrics
  getMetrics: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const query: MetricsQueryDto = {
        desde: req.query.desde as string,
        hasta: req.query.hasta as string,
        tipo: req.query.tipo as 'latencia' | 'errores' | 'todos' || 'todos'
      };
      
      const metricsData = await adminService.getOrganizacionMetrics(id, query);
      
      return res.status(200).json({
        status: 'success',
        data: metricsData
      });
    } catch (error: any) {
      logger.error(`Error al obtener métricas: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al obtener métricas'
      });
    }
  }
};

/**
 * Controladores para facturación
 */
export const billingController = {
  // GET /api/admin/billing/invoices
  getInvoices: async (req: Request, res: Response) => {
    try {
      const query: InvoicesQueryDto = {
        desde: req.query.desde as string,
        hasta: req.query.hasta as string,
        estado: req.query.estado as 'pagada' | 'pendiente' | 'vencida' | 'todas' || 'todas'
      };
      
      const invoices = await adminService.getInvoices(query);
      
      return res.status(200).json({
        status: 'success',
        data: invoices
      });
    } catch (error: any) {
      logger.error(`Error al obtener facturas: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al obtener facturas'
      });
    }
  }
};

/**
 * Controlador para estado de salud del sistema
 */
export const healthController = {
  // GET /api/admin/health
  getHealth: async (req: Request, res: Response) => {
    try {
      const healthInfo = await adminService.getHealthInfo();
      
      return res.status(200).json({
        status: 'success',
        data: healthInfo
      });
    } catch (error: any) {
      logger.error(`Error al obtener estado de salud: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al obtener estado de salud'
      });
    }
  }
};

/**
 * Controlador para envío de facturas
 */
export const invoicesController = {
  // POST /api/admin/billing/invoices/:id/send
  sendInvoice: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const sendOptions: SendInvoiceDto = {
        method: req.body.method || 'email',
        destinatario: req.body.destinatario,
        mensaje: req.body.mensaje,
        cc: req.body.cc,
        incluirAdjuntos: req.body.incluirAdjuntos !== false
      };
      
      const result = await adminService.sendInvoice(id, sendOptions);
      
      return res.status(200).json({
        status: 'success',
        message: `Factura enviada correctamente vía ${sendOptions.method}`,
        data: result
      });
    } catch (error: any) {
      logger.error(`Error al enviar factura: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al enviar factura'
      });
    }
  }
};

// Controladores para gestión de admins de tenant
export const tenantAdminController = {
  /**
   * Registrar un nuevo administrador para un tenant específico
   */
  async registerTenantAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const tenantId = req.params.id;
      const data = req.body;
      
      // Validar datos de entrada con zod
      const validatedData = registerTenantAdminSchema.parse(data);
      
      // Crear el administrador de tenant
      const result = await adminService.registerTenantAdmin(tenantId, validatedData);
      
      return res.status(201).json({
        status: 'success',
        message: 'Administrador de tenant creado con éxito',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
};
import { z } from 'zod';

/**
 * Schemas de validación con Zod para el módulo de administración
 */

// Schema para crear/actualizar organización
export const organizacionSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  correo: z.string().email({ message: 'Correo electrónico inválido' }),
  nombre_schema: z.string().regex(/^[a-z0-9_]+$/, {
    message: 'El nombre del schema solo puede contener letras minúsculas, números y guiones bajos',
  }).optional(),
  subdominio: z.string().optional(),
  marca: z.record(z.any()).optional(),
  // Datos para la suscripción asociada
  suscripcion: z.object({
    plan: z.enum(['basico', 'premium', 'enterprise']).optional(),
    estado: z.string().optional(),
    fecha_proximo_pago: z.date().or(z.string().datetime()).optional()
  }).optional()
});

// Schema para actualizar organización (todos los campos opcionales)
export const updateOrganizacionSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }).optional(),
  correo: z.string().email({ message: 'Correo electrónico inválido' }).optional(),
  nombre_schema: z.string().regex(/^[a-z0-9_]+$/, {
    message: 'El nombre del schema solo puede contener letras minúsculas, números y guiones bajos',
  }).optional(),
  subdominio: z.string().optional(),
  marca: z.record(z.any()).optional(),
  // Campos que corresponden a la suscripción pero se exponen directamente para mantener compatibilidad
  plan: z.enum(['basico', 'premium', 'enterprise']).optional(),
  estado: z.string().optional(),
  fecha_proximo_pago: z.date().or(z.string().datetime()).optional()
});

// Schema para crear/actualizar suscripción
export const suscripcionSchema = z.object({
  organizacion_id: z.string().uuid(),
  plan: z.enum(['basico', 'premium', 'enterprise']),
  fecha_inicio: z.date().or(z.string().datetime()),
  fecha_renovacion: z.date().or(z.string().datetime()),
  estado: z.enum(['activa', 'cancelada', 'suspendida', 'pendiente'])
});

// Schema para actualizar suscripción (todos los campos opcionales)
export const updateSuscripcionSchema = suscripcionSchema.partial().omit({ organizacion_id: true });

// Schema para actualizar el plan de una organización
export const updatePlanSchema = z.object({
  plan: z.enum(['basico', 'premium', 'enterprise'])
});

// Schema para actualizar la fecha de próximo pago
export const updateFechaPagoSchema = z.object({
  fecha_proximo_pago: z.date().or(z.string().datetime()),
  comentario: z.string().optional()
});

// Schema para registrar administrador de plataforma
export const registerAdminSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  correo: z.string().email({ message: 'Correo electrónico inválido' }),
  contrasena: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
  permisos: z.array(z.string()).or(z.record(z.boolean())).optional(),
  rol: z.enum(['admin', 'coordinador', 'voluntario']).optional().default('admin')
});

// Schema para registrar administrador de tenant
export const registerTenantAdminSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  correo: z.string().email({ message: 'Correo electrónico inválido' }),
  contrasena: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
  permisos: z.array(z.string()).optional(),
  rol: z.enum(['admin', 'coordinador', 'voluntario']).default('admin')
});

// Schema para actualizar el estado de una organización
export const updateStatusSchema = z.object({
  estado: z.enum(['activo', 'suspendido', 'cancelado']),
});

// Schema para consulta de uso de API
export const usageQuerySchema = z.object({
  desde: z.date().or(z.string().datetime()).optional(),
  hasta: z.date().or(z.string().datetime()).optional()
});

// Schema para consulta de métricas
export const metricsQuerySchema = z.object({
  desde: z.date().or(z.string().datetime()).optional(),
  hasta: z.date().or(z.string().datetime()).optional(),
  tipo: z.enum(['latencia', 'errores', 'todos']).optional().default('todos')
});

// Schema para consulta de facturas
export const invoicesQuerySchema = z.object({
  desde: z.date().or(z.string().datetime()).optional(),
  hasta: z.date().or(z.string().datetime()).optional(),
  estado: z.enum(['pagada', 'pendiente', 'vencida', 'todas']).optional().default('todas')
});

// Schema para información del sistema
export const healthSchema = z.object({
  db_status: z.boolean(),
  api_latency: z.number(),
  queue_size: z.number(),
  memory_usage: z.number(),
  cpu_usage: z.number(),
  uptime: z.number()
});

// Schema para enviar factura
export const sendInvoiceSchema = z.object({
  method: z.enum(['email', 'pdf', 'both']).default('email'),
  destinatario: z.string().email().optional(),
  mensaje: z.string().optional(),
  cc: z.array(z.string().email()).optional(),
  incluirAdjuntos: z.boolean().optional().default(true)
});

/**
 * DTOs - Tipos inferidos de los schemas
 */
export type CreateOrganizacionDto = z.infer<typeof organizacionSchema>;
export type UpdateOrganizacionDto = z.infer<typeof updateOrganizacionSchema>;
export type CreateSuscripcionDto = z.infer<typeof suscripcionSchema>;
export type UpdateSuscripcionDto = z.infer<typeof updateSuscripcionSchema>;
export type UpdateOrganizacionPlanDto = z.infer<typeof updatePlanSchema>;
export type UpdateFechaPagoDto = z.infer<typeof updateFechaPagoSchema>;
export type RegisterAdminDto = z.infer<typeof registerAdminSchema>;
export type RegisterTenantAdminDto = z.infer<typeof registerTenantAdminSchema>;
export type UpdateStatusDto = z.infer<typeof updateStatusSchema>;
export type UsageQueryDto = z.infer<typeof usageQuerySchema>;
export type MetricsQueryDto = z.infer<typeof metricsQuerySchema>;
export type InvoicesQueryDto = z.infer<typeof invoicesQuerySchema>;
export type HealthInfoDto = z.infer<typeof healthSchema>;
export type SendInvoiceDto = z.infer<typeof sendInvoiceSchema>;
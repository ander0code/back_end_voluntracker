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
    fechaProximoPago: z.date().or(z.string().datetime()).optional()
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
  plan: z.enum(['basico', 'premium', 'enterprise']),
  comentario: z.string().optional()
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
  permisos: z.array(z.string()).or(z.record(z.boolean())).optional()
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
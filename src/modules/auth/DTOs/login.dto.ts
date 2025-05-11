import { z } from 'zod';

/**
 * Schema de validación para login
 */
export const loginSchema = z.object({
  correo: z.string().email({ message: 'Correo electrónico inválido' }),
  contrasena: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
});

/**
 * Tipo inferido del schema
 */
export type LoginDto = z.infer<typeof loginSchema>;
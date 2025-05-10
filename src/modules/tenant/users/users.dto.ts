import { z } from 'zod';

// Schema para validación de usuario
export const userSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  apellido: z.string().min(2, { message: 'El apellido debe tener al menos 2 caracteres' }),
  correo: z.string().email({ message: 'Correo electrónico inválido' }),
  contrasena: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }).optional(),
  telefono: z.string().optional(),
  rol: z.enum(['admin', 'coordinador', 'registrador', 'lector']),
  activo: z.boolean().optional(),
  permisos: z.record(z.boolean()).optional()
});

// Schema para actualización (todos los campos opcionales)
export const updateUserSchema = userSchema.partial();

// Schema para cambio de contraseña
export const changePasswordSchema = z.object({
  contrasenaActual: z.string().min(1, { message: 'La contraseña actual es requerida' }),
  nuevaContrasena: z.string().min(6, { message: 'La nueva contraseña debe tener al menos 6 caracteres' })
});

// Tipos inferidos de los schemas
export type CreateUserDto = z.infer<typeof userSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
export type ChangePasswordDto = z.infer<typeof changePasswordSchema>;
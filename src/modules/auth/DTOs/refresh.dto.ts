import { z } from 'zod';

/**
 * Schema de validación para refresh token
 */
export const refreshTokenSchema = z.object({
  refreshToken: z.string({
    required_error: 'El refresh token es requerido',
    invalid_type_error: 'El refresh token debe ser una cadena de texto'
  }).min(10, { message: 'El refresh token no es válido' })
});

/**
 * Tipo inferido del schema
 */
export type RefreshTokenDto = z.infer<typeof refreshTokenSchema>;
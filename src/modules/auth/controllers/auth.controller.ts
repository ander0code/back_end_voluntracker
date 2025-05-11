import { Request, Response } from 'express';
import { logger } from '../../../shared/services/logger';
import { AuthService } from '../services/auth.service';
import { 
  loginSchema,
  refreshTokenSchema
} from '../DTOs';

const authService = new AuthService();

/**
 * Maneja el inicio de sesión para administradores de plataforma y usuarios de tenant
 */
export const login = async (req: Request, res: Response) => {
  try {
    // Validar datos de entrada
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        status: 'error',
        message: 'Datos de entrada inválidos',
        errors: result.error.format()
      });
    }

    const { correo, contrasena } = result.data;
    logger.debug(`Intento de login con credenciales - correo: ${correo}`);

    // Autenticar usuario
    const resultado = await authService.authenticate(correo, contrasena);
    
    logger.debug(`Login exitoso para: ${correo}, tipo: ${resultado.user.userType}`);
    
    return res.status(200).json({
      status: 'success',
      data: resultado
    });

  } catch (error: any) {
    logger.error(`Error en login: ${error.message}`);
    
    // Manejar diferentes tipos de errores de autenticación
    if (error.message === 'Usuario no encontrado' || error.message === 'Contraseña incorrecta') {
      return res.status(401).json({
        status: 'error',
        message: 'Credenciales inválidas'
      });
    }
    
    return res.status(500).json({
      status: 'error',
      message: 'Error en el servidor al procesar la autenticación'
    });
  }
};

// Las funciones register y invite se han eliminado ya que se manejarán en módulos separados

/**
 * Refresca un token JWT utilizando un refresh token
 */
export const refreshToken = async (req: Request, res: Response) => {
  try {
    // Validar datos de entrada
    const result = refreshTokenSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        status: 'error',
        message: 'Datos de entrada inválidos',
        errors: result.error.format()
      });
    }

    const { refreshToken: token } = result.data;
    
    // Refrescar token
    const tokens = await authService.refreshToken(token);
    
    return res.status(200).json({
      status: 'success',
      data: tokens
    });
  } catch (error: any) {
    logger.error(`Error en refresh token: ${error.message}`);
    
    if (error.message === 'Refresh token inválido' || 
        error.message === 'Usuario no encontrado' ||
        error.name === 'TokenExpiredError' ||
        error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        status: 'error',
        message: 'Token inválido o expirado'
      });
    }
    
    return res.status(500).json({
      status: 'error',
      message: 'Error en el servidor al procesar la solicitud'
    });
  }
};

/**
 * Obtiene el perfil del usuario autenticado
 */
export const getProfile = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id || !req.user.userType) {
      return res.status(401).json({
        status: 'error',
        message: 'No autenticado'
      });
    }
    
    const userId = req.user.id;
    const userType = req.user.userType;
    
    // Obtener perfil de usuario
    const profile = await authService.getUserProfile(userId, userType);
    
    return res.status(200).json({
      status: 'success',
      data: profile
    });
  } catch (error: any) {
    logger.error(`Error al obtener perfil: ${error.message}`);
    
    if (error.message === 'Administrador no encontrado' || 
        error.message === 'Usuario no encontrado') {
      return res.status(404).json({
        status: 'error',
        message: 'Usuario no encontrado'
      });
    }
    
    return res.status(500).json({
      status: 'error',
      message: 'Error en el servidor al obtener el perfil'
    });
  }
};
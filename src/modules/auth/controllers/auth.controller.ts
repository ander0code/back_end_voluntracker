import { Request, Response } from 'express';
import { logger } from '../../../shared/services/logger';
import { AuthService } from '../services/auth.service';
import { UserType } from '../../../shared/interfaces';

// DTOs
interface LoginDto {
  correo: string;
  contrasena: string;
}

interface RegisterDto {
  nombre: string;
  correo: string;
  contrasena: string;
  permisos?: string[];
}

interface InviteDto {
  nombre: string;
  correo: string;
  rol: string;
  permisos?: string[];
}

// Instancia del servicio de autenticación
const authService = new AuthService();

/**
 * Maneja el inicio de sesión para administradores de plataforma y usuarios de tenant
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { correo, contrasena } = req.body as LoginDto;
    
    if (!correo || !contrasena) {
      return res.status(400).json({
        status: 'error',
        message: 'Correo y contraseña son requeridos'
      });
    }

    logger.debug(`Intento de login con credenciales - correo: ${correo}`);

    // Autenticar usuario (primero como admin de plataforma, luego como usuario de tenant)
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

/**
 * Registra un nuevo administrador de plataforma (solo accesible por otros admins)
 */
export const register = async (req: Request, res: Response) => {
  try {
    // Verificar que el usuario actual es un admin de plataforma
    if (req.user?.userType !== UserType.ADMIN_PLATAFORMA) {
      return res.status(403).json({
        status: 'error',
        message: 'No tiene permisos para registrar administradores'
      });
    }
    
    const { nombre, correo, contrasena, permisos } = req.body as RegisterDto;
    
    if (!nombre || !correo || !contrasena) {
      return res.status(400).json({
        status: 'error',
        message: 'Nombre, correo y contraseña son requeridos'
      });
    }
    
    const newAdmin = await authService.registerPlatformAdmin(nombre, correo, contrasena, permisos);
    
    return res.status(201).json({
      status: 'success',
      data: {
        id: newAdmin.id,
        nombre: newAdmin.nombre,
        correo: newAdmin.correo
      }
    });
  } catch (error: any) {
    logger.error(`Error en registro de administrador: ${error.message}`);
    
    if (error.message === 'El correo ya existe en la base de datos') {
      return res.status(400).json({
        status: 'error',
        message: 'El correo ya está registrado'
      });
    }
    
    return res.status(500).json({
      status: 'error',
      message: 'Error en el servidor al registrar el administrador'
    });
  }
};

/**
 * Genera una invitación para un usuario de tenant
 */
export const invite = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.tenantId) {
      return res.status(403).json({
        status: 'error',
        message: 'No tiene permisos para invitar usuarios a este tenant'
      });
    }

    const tenantId = req.user.tenantId;
    const { nombre, correo, rol, permisos } = req.body as InviteDto;
    
    if (!nombre || !correo || !rol) {
      return res.status(400).json({
        status: 'error',
        message: 'Nombre, correo y rol son requeridos'
      });
    }
    
    const result = await authService.inviteTenantUser(nombre, correo, rol, tenantId, permisos);
    
    return res.status(201).json({
      status: 'success',
      data: {
        id: result.id,
        correo: result.correo,
        tenant: result.tenant,
        tempPassword: result.tempPassword // Solo para desarrollo, en producción no devolver esto
      }
    });
  } catch (error: any) {
    logger.error(`Error al invitar usuario: ${error.message}`);
    
    if (error.message.includes('Rol inválido')) {
      return res.status(400).json({
        status: 'error',
        message: error.message
      });
    }
    
    if (error.message === 'El correo ya existe en el sistema') {
      return res.status(400).json({
        status: 'error',
        message: 'El correo ya está registrado'
      });
    }
    
    return res.status(500).json({
      status: 'error',
      message: 'Error en el servidor al invitar al usuario'
    });
  }
};
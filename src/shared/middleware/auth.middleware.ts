import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { logger } from '../services/logger';
import { config } from '../../config';
import { DecodedToken, UserType } from '../interfaces';

/**
 * Middleware de autenticación - verifica que el usuario esté autenticado
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Obtener token desde Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        status: 'error',
        message: 'Acceso no autorizado. Token no proporcionado.'
      });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        status: 'error',
        message: 'Acceso no autorizado. Token no proporcionado.'
      });
    }
    
    // Verificar y decodificar token JWT
    const secret = config.jwt.secret;
    
    if (!secret) {
      logger.error('JWT_SECRET no está definido en variables de entorno');
      return res.status(500).json({
        status: 'error',
        message: 'Error interno del servidor'
      });
    }
    
    const decoded = jwt.verify(token, secret) as DecodedToken;
    
    // Verificar que el tipo de usuario sea válido
    if (decoded.userType !== UserType.ADMIN_PLATAFORMA && decoded.userType !== UserType.TENANT_USUARIO) {
      logger.error(`Tipo de usuario no válido: ${decoded.userType}`);
      throw new Error('Tipo de usuario no válido');
    }
    
    // Agregar usuario a objeto req para uso en controladores
    req.user = {
      id: decoded.id,
      nombre: decoded.nombre,
      correo: decoded.correo,
      userType: decoded.userType,
      permisos: decoded.permisos || [],
      tenantId: decoded.tenantId,
      tenantNombre: decoded.tenantNombre,
      schemaName: decoded.schemaName,
      rol: decoded.rol
    };
    
    logger.debug(`Usuario autenticado: ${decoded.nombre}, tipo: ${decoded.userType}`);
    next();
  } catch (error: any) {
    logger.error(`Error en autenticación: ${error.message}`);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        status: 'error',
        message: 'Token expirado. Inicie sesión nuevamente.'
      });
    }
    
    if (error.message === 'Tipo de usuario no válido') {
      return res.status(400).json({
        status: 'error',
        message: 'Tipo de usuario no válido'
      });
    }
    
    return res.status(401).json({
      status: 'error',
      message: 'Token inválido.'
    });
  }
};

/**
 * Middleware de autorización basada en tipos de usuario y roles
 * @param allowedTypes Tipos de usuario permitidos (admin_plataforma, tenant_usuario) o roles (admin, coordinador, etc)
 * @param requiredPermissions Permisos requeridos (opcional)
 */
export const requireRole = (
  allowedTypes: string | string[], 
  requiredPermissions?: string[]
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Este middleware debe ser usado después de requireAuth
      if (!req.user) {
        return res.status(401).json({
          status: 'error',
          message: 'Usuario no autenticado'
        });
      }
      
      const user = req.user;
      
      // Convertir tipos/roles permitidos a array
      const allowedArray = Array.isArray(allowedTypes) ? allowedTypes : [allowedTypes];
      
      // Verificar si el tipo de usuario o rol está permitido
      const isAllowedType = allowedArray.some(type => {
        // Si es admin_plataforma o tenant_usuario, comparar con userType
        if (type === UserType.ADMIN_PLATAFORMA || type === UserType.TENANT_USUARIO) {
          return user.userType === type;
        } 
        // Si no, es un rol de tenant, comparar con rol
        else {
          return user.rol === type;
        }
      });
      
      if (!isAllowedType) {
        return res.status(403).json({
          status: 'error',
          message: 'Acceso denegado. No tiene el rol requerido.'
        });
      }
      
      // Si se requieren permisos específicos, verificarlos
      if (requiredPermissions && requiredPermissions.length > 0) {
        const userPermisos = user.permisos || [];
        
        const hasRequiredPermissions = requiredPermissions.every(
          permission => userPermisos.includes(permission)
        );
        
        if (!hasRequiredPermissions) {
          return res.status(403).json({
            status: 'error',
            message: 'Acceso denegado. No tiene los permisos requeridos.'
          });
        }
      }
      
      // Si todo está correcto, continuar
      next();
    } catch (error: any) {
      logger.error(`Error en verificación de rol: ${error.message}`);
      return res.status(500).json({
        status: 'error',
        message: 'Error en verificación de permisos'
      });
    }
  };
};
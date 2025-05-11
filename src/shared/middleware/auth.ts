import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../../config';
import { logger } from '../services/logger';

// Extender Request para añadir user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

/**
 * Middleware que verifica si el JWT token es válido
 */
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Obtener token del header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        status: 'error',
        message: 'Acceso no autorizado - Token no proporcionado',
      });
    }
    
    // Extraer token
    const token = authHeader.split(' ')[1];
    
    // Verificar token
    const decoded = jwt.verify(token, config.jwt.secret);
    
    // Añadir usuario a la request
    req.user = decoded;
    
    next();
  } catch (error: any) {
    logger.error(`Error de autenticación: ${error.message}`);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        status: 'error',
        message: 'Sesión expirada',
      });
    }
    
    return res.status(401).json({
      status: 'error',
      message: 'Token inválido',
    });
  }
};

/**
 * Middleware que verifica si el usuario tiene un rol específico
 * @param roles - Rol o roles permitidos
 */
export const requireRole = (roles: string | string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          status: 'error',
          message: 'Acceso no autorizado',
        });
      }
      
      const userRoles = Array.isArray(roles) ? roles : [roles];
      
      if (!userRoles.includes(req.user.userType)) {
        return res.status(403).json({
          status: 'error',
          message: 'No tienes permisos suficientes para acceder a este recurso',
        });
      }
      
      next();
    } catch (error) {
      logger.error(`Error en requireRole: ${error}`);
      return res.status(500).json({
        status: 'error',
        message: 'Error interno del servidor',
      });
    }
  };
};

/**
 * Middleware que verifica si el usuario tiene un permiso específico
 * @param permission - Permiso requerido
 */
export const requirePermission = (permission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user || !req.user.permisos) {
        return res.status(401).json({
          status: 'error',
          message: 'Acceso no autorizado',
        });
      }
      
      if (!req.user.permisos.includes(permission)) {
        return res.status(403).json({
          status: 'error',
          message: `No tienes el permiso ${permission} necesario para esta acción`,
        });
      }
      
      next();
    } catch (error) {
      logger.error(`Error en requirePermission: ${error}`);
      return res.status(500).json({
        status: 'error',
        message: 'Error interno del servidor',
      });
    }
  };
};
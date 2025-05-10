import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../../config';
import prisma from '../services/db.service';
import { logger } from '../services/logger';
import { UserType, DecodedToken } from '../interfaces';
import { AppError } from './errorHandler';


/**
 * Middleware para verificar la autenticación mediante JWT
 */
export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ 
        status: 'error',
        message: 'Token no proporcionado' 
      });
    }
    
    const token = authHeader.split(' ')[1]; // Formato: "Bearer TOKEN"
    
    if (!token) {
      return res.status(401).json({ 
        status: 'error',
        message: 'Formato de token inválido' 
      });
    }
      const decoded = jwt.verify(token, config.jwt.secret) as DecodedToken;
    
    // Convertir DecodedToken a AuthenticatedUser, asegurando que permisos sea un array
    req.user = {
      ...decoded,
      permisos: decoded.permisos || []
    };
    
    logger.debug(`Usuario autenticado: ${decoded.nombre}, tipo: ${decoded.userType}`);
    next();
  } catch (error) {
    logger.error(`Error de autenticación: ${error}`);
    return res.status(401).json({ 
      status: 'error',
      message: 'Token inválido o expirado' 
    });
  }
};

/**
 * Middleware para configurar el search_path de PostgreSQL según el tenant
 * Este middleware debe ser usado después de requireAuth en rutas de tenant
 */
export const setSearchPath = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Verificar que el usuario está autenticado y tiene información de tenant
    if (!req.user || !req.user.schemaName) {
      return res.status(401).json({
        status: 'error',
        message: 'Acceso no autorizado. No se encontró información del tenant.'
      });
    }
    
    const schemaName = req.user.schemaName;
    
    // Verificar que el esquema existe
    const schema = await prisma.$queryRaw`
      SELECT schema_name 
      FROM information_schema.schemata 
      WHERE schema_name = ${schemaName}::text
    `;
    
    if (!Array.isArray(schema) || schema.length === 0) {
      logger.error(`Esquema no encontrado: ${schemaName}`);
      throw new AppError(`Esquema no encontrado: ${schemaName}`, 500);
    }
    
    // Configurar search_path para este tenant
    await prisma.$executeRaw`SET search_path TO ${schemaName}, public`;
    logger.debug(`Search path configurado para tenant: ${schemaName}`);
    
    next();
  } catch (error) {
    logger.error(`Error al configurar search_path: ${error instanceof Error ? error.message : String(error)}`);
    
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    }
    
    return res.status(500).json({
      status: 'error',
      message: 'Error al configurar contexto de tenant'
    });
  }
};

/**
 * Middleware para verificar el rol o tipo de usuario
 * @param role Rol o tipo de usuario requerido (puede ser un array)
 */
export const requireRole = (role: string | string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ 
        status: 'error',
        message: 'Usuario no autenticado' 
      });
    }
    
    const { userType, rol } = req.user;
    
    // Convertir a array si se pasa un solo rol
    const requiredRoles = Array.isArray(role) ? role : [role];
    
    // Verificar si el userType o el rol coincide con alguno de los requeridos
    const hasRequiredRole = requiredRoles.some(r => {
      // Si es admin_plataforma o tenant_usuario, comparar con userType
      if (r === UserType.ADMIN_PLATAFORMA || r === UserType.TENANT_USUARIO) {
        return r === userType;
      }
      // Si no, es un rol de tenant específico (admin, coordinador, supervisor)
      return r === rol;
    });
    
    if (!hasRequiredRole) {
      return res.status(403).json({ 
        status: 'error',
        message: 'No tienes permisos para acceder a este recurso' 
      });
    }
    
    next();
  };
};

/**
 * Middleware para verificar permisos específicos
 * @param permissions Permiso o permisos requeridos (puede ser un array)
 */
export const requirePermission = (permissions: string | string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ 
        status: 'error',
        message: 'Usuario no autenticado' 
      });
    }
    
    const { permisos = [] } = req.user;
    
    // Convertir a array si se pasa un solo permiso
    const requiredPermissions = Array.isArray(permissions) ? permissions : [permissions];
    
    // Verificar si el usuario tiene todos los permisos requeridos
    const hasAllPermissions = requiredPermissions.every(p => permisos.includes(p));
    
    if (!hasAllPermissions) {
      return res.status(403).json({ 
        status: 'error',
        message: 'No tienes los permisos necesarios para esta acción' 
      });
    }
    
    next();
  };
};
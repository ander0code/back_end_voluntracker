import { Request, Response, NextFunction } from 'express';
import { logger } from '../services/logger';

/**
 * Clase personalizada para errores de la aplicación
 */
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Middleware para manejar errores 404 (Not Found)
 */
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(`Ruta no encontrada: ${req.originalUrl}`, 404);
  next(error);
};

/**
 * Middleware para manejar todos los errores de la aplicación
 */
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const error = err;

  // Si el error no tiene código, asignar 500 por defecto
  error.statusCode = error.statusCode || 500;

  // Determinar si es un error operacional o una excepción no controlada
  error.isOperational = error.isOperational !== undefined ? error.isOperational : false;

  // Log según el tipo de error
  if (error.isOperational) {
    // Errores operacionales (controlados)
    logger.warn(`[${error.statusCode}] ${error.message}`);
  } else {
    // Errores de programación o desconocidos (no controlados)
    logger.error(`[${error.statusCode}] ${error.message}`);
    logger.error(error.stack);
  }

  // En desarrollo, enviar toda la información del error
  if (process.env.NODE_ENV === 'development') {
    return res.status(error.statusCode).json({
      status: 'error',
      statusCode: error.statusCode,
      message: error.message,
      stack: error.stack,
      error: error
    });
  }

  // En producción, enviar solo lo necesario
  if (error.isOperational) {
    // Error conocido, seguro para mostrar al cliente
    return res.status(error.statusCode).json({
      status: 'error',
      statusCode: error.statusCode,
      message: error.message
    });
  }

  // Error desconocido, no mostrar detalles al cliente
  return res.status(500).json({
    status: 'error',
    statusCode: 500,
    message: 'Algo salió mal en el servidor.'
  });
};
import { Request, Response, NextFunction } from 'express';

/**
 * Middleware para añadir cabeceras CORS manualmente si la configuración normal no funciona
 */
export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Establecer cabeceras CORS manualmente
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Responder inmediatamente a las solicitudes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
};
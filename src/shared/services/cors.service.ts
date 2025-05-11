import cors from 'cors';
import { Application, Request, Response, NextFunction } from 'express';

/**
 * Configura CORS para toda la aplicación de forma global
 * Implementación unificada que proporciona múltiples opciones
 */
export const setupCors = (app: Application): void => {
  // Opciones estándar para CORS
  const corsOptions = {
    // Permitir cualquier origen en desarrollo
    // Para producción, usa: origin: ['https://tudominio.com']
    origin: '*',
    // Métodos HTTP permitidos
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    // Cabeceras permitidas
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Origin', 'Accept'],
    // No continuar con el preflight (importante para OPTIONS)
    preflightContinue: false,
    // Código de estado para respuestas OPTIONS exitosas
    optionsSuccessStatus: 204,
  };

  // PASO 1: Aplicar middleware cors() como solución principal
  app.use(cors(corsOptions));

  // PASO 2: Agregar manejador específico de OPTIONS como respaldo
  app.options('*', (req: Request, res: Response) => {
    res.status(204).end();
  });
  
  // PASO 3: Middleware de respaldo como última capa de seguridad
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Estas cabeceras serán redundantes con cors(), pero sirven como respaldo
    // si por alguna razón el middleware principal falla
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Origin, Accept');
    
    // No necesitamos manejar OPTIONS aquí ya que debería ser manejado por los pasos anteriores
    next();
  });
};

// /**
//  * Middleware independiente para CORS
//  * Útil si necesitas aplicar CORS a rutas específicas sin afectar toda la aplicación
//  */
// export const corsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Origin, Accept');
  
//   if (req.method === 'OPTIONS') {
//     return res.status(204).end();
//   }
  
//   next();
// };
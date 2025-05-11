import cors from 'cors';
import { Application, Request, Response, NextFunction } from 'express';

export const setupCors = (app: Application): void => {
  // 1. Middleware para manejar OPTIONS preflight de manera directa
  app.options('*', (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
  });
  
  // 2. Middleware para todas las demás solicitudes
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });

  // 3. Configuración CORS estándar como respaldo
  const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: 86400,
    preflightContinue: false
  };

  app.use(cors(corsOptions));
};
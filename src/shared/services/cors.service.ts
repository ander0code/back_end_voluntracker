import cors from 'cors';
import { Application } from 'express';

export const setupCors = (app: Application): void => {
  const corsOptions = {

    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:5000', 
      'http://127.0.0.1:5000',
      '*'  // Permite todos los orígenes durante desarrollo
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: 86400,
    exposedHeaders: ['Content-Length', 'X-Total-Count']
  };

  app.use(cors(corsOptions));
};
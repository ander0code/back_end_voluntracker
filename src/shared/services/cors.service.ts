import cors from 'cors';
import { Application } from 'express';

/**
 * Configuración de CORS para la aplicación
 * Contiene reglas sobre qué dominios pueden acceder a la API
 */
export const setupCors = (app: Application): void => {
  // Opciones de configuración CORS
  const corsOptions = {
    // Orígenes permitidos
    origin: [
      'http://localhost:3000',        // Frontend local
      'http://127.0.0.1:3000',        // Frontend local (IP)
      // Aquí puedes agregar más orígenes según necesites (dev, staging, prod, etc)
    ],
    // Métodos HTTP permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    // Cabeceras permitidas
    allowedHeaders: ['Content-Type', 'Authorization'],
    // Permitir credenciales (cookies, auth headers)
    credentials: true,
    // Máximo tiempo que el navegador puede cachear los resultados del pre-flight
    optionsSuccessStatus: 200, // Algunos navegadores antiguos (IE11) tienen problemas con 204
    maxAge: 86400 // 24 horas
  };

  // Aplicar configuración CORS
  app.use(cors(corsOptions));
};
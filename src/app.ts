import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { config } from 'dotenv';
import apiRoutes from './routes';
import { logger } from './shared/services/logger';
import { notFoundHandler, globalErrorHandler } from './shared/middleware/errorHandler';
import { setupSwagger } from './shared/services/swagger.service';
import { setupCors } from './shared/services/cors.service';

// Cargar variables de entorno
config();

// Crear aplicación Express
const app = express();

// Configurar puerto
const PORT = process.env.PORT || 3000;

// Middlewares
setupCors(app); // Asegúrate de que CORS sea el PRIMER middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: false // Deshabilitar CSP durante desarrollo
}));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar Swagger
setupSwagger(app);

// Ruta base API
app.use('/api', apiRoutes);

// Manejo de rutas no encontradas
app.use(notFoundHandler);

// Manejo global de errores
app.use(globalErrorHandler);

// Iniciar servidor
app.listen(PORT, () => {
  logger.info(`Servidor iniciado en el puerto ${PORT}`);
});

export default app;
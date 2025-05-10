import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { config } from 'dotenv';
import apiRoutes from './routes';
import { logger } from './shared/services/logger';
import { notFoundHandler, globalErrorHandler } from './shared/middleware/errorHandler';

// Cargar variables de entorno
config();

// Crear aplicación Express
const app = express();

// Configurar puerto
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
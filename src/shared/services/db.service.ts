// Importamos PrismaClient desde la ruta donde se generó
import { PrismaClient } from '../../../src/generated/prisma';
import { logger } from './logger';

// Crear una instancia de PrismaClient
const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'error',
    },
    {
      emit: 'event',
      level: 'info',
    },
    {
      emit: 'event',
      level: 'warn',
    },
  ],
});

// Configurar handlers de logging
prisma.$on('error', (e: any) => {
  logger.error(`Prisma error: ${e.message}`);
});

prisma.$on('query', (e: any) => {
  if (process.env.NODE_ENV === 'development') {
    logger.debug(`Query: ${e.query} | Duration: ${e.duration}ms`);
  }
});

// Exportarlo como default para facilitar su importación en otros archivos
export default prisma;
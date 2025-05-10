import dotenv from 'dotenv';
import path from 'path';

// Cargar variables de entorno desde .env
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const env = process.env.NODE_ENV || 'development';

// Configuración global de la aplicación
export const config = {
  port: process.env.PORT || 5000,
  jwt: {
    secret: process.env.JWT_SECRET || 'secret-key-for-development-only',
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/voluntracker'
  },
  env
};
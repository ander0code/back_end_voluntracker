import winston from 'winston';

// Define los niveles de log y sus colores
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define colores para cada nivel
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

// Añadir colores a winston
winston.addColors(colors);

// Formato de los logs
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Define los transportes para los logs
const transports = [
  // Logs para consola
  new winston.transports.Console(),
  // Logs de error en archivo
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  // Todos los logs en archivo
  new winston.transports.File({ filename: 'logs/all.log' }),
];

// Crear el logger
export const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'warn',
  levels,
  format,
  transports,
});
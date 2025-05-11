import { Options } from 'swagger-jsdoc';
import { config } from '../config';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'VolunTracker API',
    version: '1.0.0',
    description: 'API para gestión de voluntarios, eventos y organizaciones sin fines de lucro',
    license: {
      name: 'Licenciado bajo PRIVADO',
      url: 'https://voluntracker.com',
    },
    contact: {
      name: 'Soporte VolunTracker',
      url: 'https://voluntracker.com',
      email: 'info@voluntracker.com',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port || 3000}/api`,
      description: 'Servidor de desarrollo',
    },
    {
      url: 'https://api.voluntracker.com/api',
      description: 'Servidor de producción',
    },
  ],
  tags: [
    {
      name: 'Auth',
      description: 'Endpoints de autenticación y gestión de usuarios',
    },
    {
      name: 'Admin',
      description: 'Administración de organizaciones (tenants) y configuración de la plataforma',
    },
    {
      name: 'Volunteers',
      description: 'Gestión de voluntarios',
    },
    {
      name: 'Events',
      description: 'Gestión de eventos',
    },
    {
      name: 'Inscripciones',
      description: 'Gestión de inscripciones a eventos',
    },
    {
      name: 'Asistencia',
      description: 'Control de asistencia a eventos',
    },
    {
      name: 'Certificados',
      description: 'Generación y gestión de certificados',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      Error: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'error'
          },
          message: {
            type: 'string',
            example: 'Descripción del error'
          },
          errors: {
            type: 'object',
            example: {
              campo: ['Mensaje de error para este campo']
            }
          }
        }
      },
      Usuario: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uuid'
          },
          nombre: {
            type: 'string'
          },
          correo: {
            type: 'string',
            format: 'email'
          },
          userType: {
            type: 'string',
            enum: ['admin_plataforma', 'admin_tenant', 'usuario_tenant']
          },
          permisos: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        }
      }
    }
  },
};

export const swaggerOptions: Options = {
  swaggerDefinition,
  apis: [
    './src/modules/**/*.routes.ts',
    './src/routes/**/*.ts',
    './dist/modules/**/*.routes.js',
    './dist/routes/**/*.js'
  ],
};
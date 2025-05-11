import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from '../../docs/swagger';
import { logger } from './logger';

/**
 * Configura Swagger UI para la documentación de la API
 * @param app - Instancia de Express
 */
export const setupSwagger = (app: Application): void => {
  try {
    const specs = swaggerJsdoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
      explorer: true,
      customCss: '.swagger-ui .topbar { display: none }',
      customSiteTitle: 'VolunTracker API Documentation',
    }));
    logger.info('Swagger UI configurado en /api-docs');
    
    // Ruta de ayuda para Swagger
    app.get('/swagger-help', (req, res) => {
      res.status(200).send(`
        <html>
          <head>
            <title>VolunTracker Swagger Help</title>
            <style>
              body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
              pre { background: #f5f5f5; padding: 10px; border-radius: 5px; overflow-x: auto; }
              h1 { color: #333; }
              .tip { background: #e8f4f8; padding: 10px; border-left: 4px solid #5bc0de; margin: 20px 0; }
            </style>
          </head>
          <body>
            <h1>VolunTracker Swagger Help</h1>
            <p>La documentación de la API debería estar disponible en <a href="/api-docs">/api-docs</a>.</p>
            
            <div class="tip">
              <strong>Tip:</strong> Si la documentación no se carga, puede deberse a uno de estos problemas:
              <ul>
                <li>Las rutas de la API no están siendo encontradas por swagger-jsdoc</li>
                <li>La sintaxis de los comentarios JSDoc no es correcta</li>
                <li>Los archivos compilados (dist) no contienen los comentarios JSDoc</li>
              </ul>
            </div>
            
            <h2>Configuración actual:</h2>
            <pre>${JSON.stringify(swaggerOptions, null, 2)}</pre>
            
            <h2>Solución:</h2>
            <p>Ejecuta el script de diagnóstico con:</p>
            <pre>npx ts-node swagger_diagnostico.ts</pre>
          </body>
        </html>
      `);
    });
  } catch (error: any) {
    logger.error(`Error al configurar Swagger: ${error.message}`);
  }
};
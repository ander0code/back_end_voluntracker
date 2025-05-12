import { Request, Response } from 'express';
import * as voluntarioService from '../services/voluntarios.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';

export const voluntarioController = {
  // GET /api/voluntarios
  obtenerTodos: async (req: Request, res: Response) => {
    try {
      const { schema } = req.query;
      if (!schema || typeof schema !== 'string') {
        return res.status(400).json({ status: 'error', message: 'Schema requerido' });
      }
      const data = await voluntarioService.obtenerTodos(schema);
      res.status(200).json({ status: 'success', data });
    } catch (error: any) {
      logger.error(`Error al obtener voluntarios: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      res.status(statusCode).json({ status: 'error', message: error.message });
    }
  },

  // POST /api/voluntarios
  crearVoluntario: async (req: Request, res: Response) => {
    try {
      const { schema } = req.query;
      if (!schema || typeof schema !== 'string') {
        return res.status(400).json({ status: 'error', message: 'Schema requerido' });
      }
      const data = await voluntarioService.crearVoluntario(schema, req.body);
      res.status(201).json({ status: 'success', data });
    } catch (error: any) {
      logger.error(`Error al crear voluntario: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      res.status(statusCode).json({ status: 'error', message: error.message });
    }
  },

  // PUT /api/voluntarios/:id
  actualizarVoluntario: async (req: Request, res: Response) => {
    try {
      const { schema } = req.query;
      const { id } = req.params;
      if (!schema || typeof schema !== 'string') {
        return res.status(400).json({ status: 'error', message: 'Schema requerido' });
      }
      const data = await voluntarioService.actualizarVoluntario(schema, id, req.body);
      res.status(200).json({ status: 'success', data });
    } catch (error: any) {
      logger.error(`Error al actualizar voluntario: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      res.status(statusCode).json({ status: 'error', message: error.message });
    }
  },

  // DELETE /api/voluntarios/:id
  eliminarVoluntario: async (req: Request, res: Response) => {
    try {
      const { schema } = req.query;
      const { id } = req.params;
      if (!schema || typeof schema !== 'string') {
        return res.status(400).json({ status: 'error', message: 'Schema requerido' });
      }
      await voluntarioService.eliminarVoluntario(schema, id);
      res.status(204).send();
    } catch (error: any) {
      logger.error(`Error al eliminar voluntario: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      res.status(statusCode).json({ status: 'error', message: error.message });
    }
  },

  // GET /api/voluntarios/:id/historial
  historialVoluntario: async (req: Request, res: Response) => {
    try {
      const { schema } = req.query;
      const { id } = req.params;
      if (!schema || typeof schema !== 'string') {
        return res.status(400).json({ status: 'error', message: 'Schema requerido' });
      }
      const data = await voluntarioService.obtenerHistorial(schema, id);
      res.status(200).json({ status: 'success', data });
    } catch (error: any) {
      logger.error(`Error al obtener historial: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      res.status(statusCode).json({ status: 'error', message: error.message });
    }
  },

  // GET /api/voluntarios/:id/certificados
  certificadosVoluntario: async (req: Request, res: Response) => {
    try {
      const { schema } = req.query;
      const { id } = req.params;
      if (!schema || typeof schema !== 'string') {
        return res.status(400).json({ status: 'error', message: 'Schema requerido' });
      }
      const data = await voluntarioService.obtenerCertificados(schema, id);
      res.status(200).json({ status: 'success', data });
    } catch (error: any) {
      logger.error(`Error al obtener certificados: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      res.status(statusCode).json({ status: 'error', message: error.message });
    }
  },
   
  /*exportarVoluntarios: async (req: Request, res: Response) => {
    try {
      const { schema } = req.query;
      if (!schema || typeof schema !== 'string') {
        return res.status(400).json({ status: 'error', message: 'Schema requerido' });
      }

      const fileBuffer = await voluntarioService.exportarVoluntarios(schema);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=voluntarios.xlsx');
      res.send(fileBuffer);
    } catch (error: any) {
      logger.error(`Error al exportar voluntarios: ${error.message}`);
      const statusCode = error instanceof AppError ? error.statusCode : 500;
      return res.status(statusCode).json({
        status: 'error',
        message: error.message || 'Error al exportar voluntarios'
      });
    }
  }*/
};

import { Request, Response, NextFunction } from 'express';
import { EventsService } from './events.service';
import { eventSchema, updateEventSchema } from './events.dto';
import { AppError } from '../../../shared/middleware/errorHandler';

const eventsService = new EventsService();

export class EventsController {
  /**
   * Obtener todos los eventos
   */
  async getAllEvents(req: Request, res: Response, next: NextFunction) {
    try {
      // Extraer filtros de query params
      const filters = {
        estado: req.query.estado as string,
        tipo: req.query.tipo as string,
        desde: req.query.desde as string,
        hasta: req.query.hasta as string,
        includeCoordinador: req.query.includeCoordinador === 'true'
      };

      const events = await eventsService.getAllEvents(filters);
      return res.status(200).json(events);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Obtener un evento por ID
   */
  async getEventById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const event = await eventsService.getEventById(id);
      return res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Crear un nuevo evento
   */
  async createEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const validationResult = eventSchema.safeParse(req.body);
      if (!validationResult.success) {
        return next(new AppError('Datos de entrada inválidos', 400));
      }

      const event = await eventsService.createEvent(validationResult.data);
      return res.status(201).json(event);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Actualizar un evento existente
   */
  async updateEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const validationResult = updateEventSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return next(new AppError('Datos de entrada inválidos', 400));
      }

      const event = await eventsService.updateEvent(id, validationResult.data);
      return res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Eliminar un evento
   */
  async deleteEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await eventsService.deleteEvent(id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Cambiar el estado de un evento
   */
  async changeEventStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { estado } = req.body;
      
      if (!estado || !['borrador', 'publicado', 'cancelado', 'completado'].includes(estado)) {
        return next(new AppError('Estado inválido', 400));
      }

      const event = await eventsService.changeEventStatus(id, estado);
      return res.status(200).json(event);
    } catch (error) {
      next(error);
    }
  }
}
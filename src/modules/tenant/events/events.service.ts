import prisma from '../../../shared/services/db.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';
import { CreateEventDto, UpdateEventDto } from './events.dto';

export class EventsService {
  /**
   * Obtener todos los eventos
   */
  async getAllEvents(filters: any = {}) {
    try {
      // Construir condiciones de filtrado
      const where: any = {};
      
      if (filters.estado) {
        where.estado = filters.estado;
      }
      
      if (filters.tipo) {
        where.tipo = filters.tipo;
      }
      
      if (filters.desde) {
        where.fecha_inicio = {
          gte: new Date(filters.desde)
        };
      }
      
      if (filters.hasta) {
        where.fecha_fin = {
          lte: new Date(filters.hasta)
        };
      }
      
      // Opción para incluir coordinador
      const include: any = {};
      if (filters.includeCoordinador) {
        include.coordinador = {
          select: {
            id: true,
            nombre: true,
            apellido: true,
            correo: true
          }
        };
      }

      return await prisma.eventos.findMany({
        where,
        include,
        orderBy: {
          fecha_inicio: 'asc'
        }
      });
    } catch (error) {
      logger.error(`Error al obtener eventos: ${error}`);
      throw new AppError('Error al obtener eventos', 500);
    }
  }

  /**
   * Obtener un evento por ID
   */
  async getEventById(id: string) {
    try {
      const evento = await prisma.eventos.findUnique({
        where: { id },
        include: {
          coordinador: {
            select: {
              id: true,
              nombre: true,
              apellido: true,
              correo: true
            }
          },
          inscripciones: {
            select: {
              id: true,
              estado: true,
              fecha_inscripcion: true,
              voluntario: {
                select: {
                  id: true,
                  nombre: true,
                  apellido: true,
                  correo: true
                }
              }
            }
          }
        }
      });

      if (!evento) {
        throw new AppError('Evento no encontrado', 404);
      }

      return evento;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al obtener evento: ${error}`);
      throw new AppError('Error al obtener evento', 500);
    }
  }

  /**
   * Crear un nuevo evento
   */
  async createEvent(data: CreateEventDto) {
    try {
      // Validar si el coordinador existe cuando se proporciona
      if (data.coordinador_id) {
        const coordinador = await prisma.usuarios.findUnique({
          where: { id: data.coordinador_id }
        });

        if (!coordinador) {
          throw new AppError('Coordinador no encontrado', 404);
        }
      }

      // Convertir fechas de string a Date
      const createData = {
        ...data,
        fecha_inicio: new Date(data.fecha_inicio),
        fecha_fin: new Date(data.fecha_fin)
      };

      // Crear evento
      const newEvent = await prisma.eventos.create({
        data: createData,
        include: {
          coordinador: {
            select: {
              id: true,
              nombre: true,
              apellido: true,
              correo: true
            }
          }
        }
      });

      return newEvent;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al crear evento: ${error}`);
      throw new AppError('Error al crear evento', 500);
    }
  }

  /**
   * Actualizar un evento existente
   */
  async updateEvent(id: string, data: UpdateEventDto) {
    try {
      // Verificar que el evento existe
      const event = await prisma.eventos.findUnique({
        where: { id }
      });

      if (!event) {
        throw new AppError('Evento no encontrado', 404);
      }

      // Validar si el coordinador existe cuando se proporciona
      if (data.coordinador_id) {
        const coordinador = await prisma.usuarios.findUnique({
          where: { id: data.coordinador_id }
        });

        if (!coordinador) {
          throw new AppError('Coordinador no encontrado', 404);
        }
      }

      // Preparar datos para actualización
      const updateData: any = { ...data };
      
      // Convertir fechas de string a Date si están presentes
      if (data.fecha_inicio) {
        updateData.fecha_inicio = new Date(data.fecha_inicio);
      }
      
      if (data.fecha_fin) {
        updateData.fecha_fin = new Date(data.fecha_fin);
      }

      // Actualizar evento
      const updatedEvent = await prisma.eventos.update({
        where: { id },
        data: updateData,
        include: {
          coordinador: {
            select: {
              id: true,
              nombre: true,
              apellido: true,
              correo: true
            }
          }
        }
      });

      return updatedEvent;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al actualizar evento: ${error}`);
      throw new AppError('Error al actualizar evento', 500);
    }
  }

  /**
   * Eliminar un evento
   */
  async deleteEvent(id: string) {
    try {
      // Verificar que el evento existe
      const event = await prisma.eventos.findUnique({
        where: { id }
      });

      if (!event) {
        throw new AppError('Evento no encontrado', 404);
      }

      // Verificar si tiene inscripciones
      const inscripcionesCount = await prisma.inscripciones.count({
        where: { evento_id: id }
      });

      if (inscripcionesCount > 0) {
        throw new AppError('No se puede eliminar un evento con inscripciones', 400);
      }

      // Eliminar evento
      await prisma.eventos.delete({
        where: { id }
      });

      return { success: true, message: 'Evento eliminado con éxito' };
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al eliminar evento: ${error}`);
      throw new AppError('Error al eliminar evento', 500);
    }
  }

  /**
   * Cambiar el estado de un evento
   */
  async changeEventStatus(id: string, estado: 'borrador' | 'publicado' | 'cancelado' | 'completado') {
    try {
      // Verificar que el evento existe
      const event = await prisma.eventos.findUnique({
        where: { id }
      });

      if (!event) {
        throw new AppError('Evento no encontrado', 404);
      }

      // Actualizar estado
      const updatedEvent = await prisma.eventos.update({
        where: { id },
        data: { estado }
      });

      return updatedEvent;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al cambiar estado del evento: ${error}`);
      throw new AppError('Error al cambiar estado del evento', 500);
    }
  }
}
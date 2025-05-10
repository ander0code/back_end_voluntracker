import { z } from 'zod';

// Schema para validación de evento
export const eventSchema = z.object({
  nombre: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  descripcion: z.string().optional(),
  fecha_inicio: z.string().datetime({ message: 'Fecha de inicio inválida' }),
  fecha_fin: z.string().datetime({ message: 'Fecha de fin inválida' }),
  ubicacion: z.string().optional(),
  cupo_maximo: z.number().int().min(0).optional(),
  tipo: z.enum(['presencial', 'virtual', 'hibrido']),
  coordinador_id: z.string().uuid().optional(),
  estado: z.enum(['borrador', 'publicado', 'cancelado', 'completado']).default('borrador'),
  categorias: z.array(z.string()).optional(),
  requisitos: z.array(z.string()).optional()
});

// Schema para actualización (todos los campos opcionales)
export const updateEventSchema = eventSchema.partial();

// Tipos inferidos de los schemas
export type CreateEventDto = z.infer<typeof eventSchema>;
export type UpdateEventDto = z.infer<typeof updateEventSchema>;
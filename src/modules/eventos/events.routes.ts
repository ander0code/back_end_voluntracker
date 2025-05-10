import { Router } from 'express';
// import { EventsController } from './events.controller';
// import { requireRole } from '../../../shared/middleware/auth';

const router = Router();
// const eventsController = new EventsController();

// // Rutas de lectura (disponibles para todos los roles)
// router.get('/', eventsController.getAllEvents);
// router.get('/:id', eventsController.getEventById);

// // Rutas de escritura (requieren roles específicos)
// router.post('/', requireRole(['admin', 'coordinador']), eventsController.createEvent);
// router.put('/:id', requireRole(['admin', 'coordinador']), eventsController.updateEvent);
// router.delete('/:id', requireRole('admin'), eventsController.deleteEvent);

// // Ruta para cambiar el estado de un evento
// router.patch('/:id/status', requireRole(['admin', 'coordinador']), eventsController.changeEventStatus);

export default router;
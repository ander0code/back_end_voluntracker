import { Router } from 'express';

import volunteersRoutes from './volunteers/volunteers.routes';
import eventsRoutes from './events/events.routes';
import inscripcionesRoutes from './inscripciones/inscripciones.routes';
import asistenciaRoutes from './asistencia/asistencia.routes';
import certificadosRoutes from './certificados/certificados.routes';

const router = Router();

router.use('/volunteers', volunteersRoutes);
router.use('/events', eventsRoutes);
router.use('/inscripciones', inscripcionesRoutes);
router.use('/asistencia', asistenciaRoutes);
router.use('/certificados', certificadosRoutes);

export default router;
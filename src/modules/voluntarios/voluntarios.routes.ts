import { Router } from 'express';
import { requireAuth, requireRole } from '../../shared/middleware/auth.middleware';
import {voluntarioController} from './controllers/voluntarios.controller';

const router = Router();

// Middleware de autenticación y autorización para todas las rutas de voluntarios
router.use(requireAuth);
router.use(requireRole('coordinador')); // Ajusta el rol según lo necesario

// CRUD básico
// GET /api/voluntarios?schema={schema}
router.get('/voluntarios', voluntarioController.obtenerTodos);  

// POST /api/voluntarios?schema={schema}
router.post('/voluntarios', voluntarioController.crearVoluntario);  

// PATCH /api/voluntarios/:id?schema={schema}
router.patch('/voluntarios/:id', voluntarioController.actualizarVoluntario);  

// DELETE /api/voluntarios/:id?schema={schema}
router.delete('/voluntarios/:id', voluntarioController.eliminarVoluntario);  

// Funciones adicionales
// GET /api/voluntarios/:id/history?schema={schema}
router.get('/voluntarios/:id/history', voluntarioController.historialVoluntario);  

// GET /api/voluntarios/:id/certificates?schema={schema}
router.get('/voluntarios/:id/certificates', voluntarioController.certificadosVoluntario);  

/*router.get('/voluntarios/export?schema={schema}', voluntarioController.exportarVoluntarios);*/

export default router;
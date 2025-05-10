import { Router } from 'express';
import { organizacionController, getAllTenants } from './controllers/admin.controller';
import { requireAuth, requireRole } from '../../shared/middleware/auth.middleware';

const router = Router();

// Middleware de autenticación y autorización para todas las rutas de admin
router.use(requireAuth);
router.use(requireRole('admin_plataforma'));

// Rutas para gestión de organizaciones (tenants)
router.get('/organizaciones', organizacionController.getAll);
router.get('/organizaciones/:id', organizacionController.getById);
router.post('/organizaciones', organizacionController.create);
router.patch('/organizaciones/:id', organizacionController.update);
router.patch('/organizaciones/:id/plan', organizacionController.updatePlan);
router.patch('/organizaciones/:id/payment-date', organizacionController.updatePaymentDate);
router.delete('/organizaciones/:id', organizacionController.delete);

// Ruta pública para obtener lista de tenants (puede requerir autenticación dependiendo del caso)
router.get('/tenants', getAllTenants);

export default router;
import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import adminRoutes from '../modules/admin/admin.routes';
import { corsMiddleware } from '../shared/middleware/cors.middleware';

const router = Router();

// Aplicar middleware CORS adicional como respaldo
router.use(corsMiddleware);

// Montar las rutas de autenticación en /api/auth
router.use('/auth', authRoutes);

// Montar las rutas de administración en /api/admin
router.use('/admin', adminRoutes);

export default router;
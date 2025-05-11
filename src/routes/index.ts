import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import adminRoutes from '../modules/admin/admin.routes';

const router = Router();

// Montar las rutas de autenticación en /api/auth
router.use('/auth', authRoutes);

// Montar las rutas de administración en /api/admin
router.use('/admin', adminRoutes);

export default router;
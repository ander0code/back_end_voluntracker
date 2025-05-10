import { Router } from 'express';
import authRoutes from '../modules/auth/routes/auth.routes';
import adminRoutes from '../modules/admin/routes/admin.routes';
import tenantRoutes from '../modules/tenant/tenant.routes';

const router = Router();

// Montar las rutas de autenticación en /api/auth
router.use('/auth', authRoutes);

// Montar las rutas de administración en /api/admin
router.use('/admin', adminRoutes);

// Montar las rutas de tenant en /api/tenant
router.use('/tenant', tenantRoutes);

export default router;
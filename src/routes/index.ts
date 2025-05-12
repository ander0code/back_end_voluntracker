import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import adminRoutes from '../modules/admin/admin.routes';
import voluntariosRoutes from '../modules/voluntarios/voluntarios.routes';


const router = Router();

// Montar las rutas de autenticación en /api/auth
router.use('/auth', authRoutes);

// Montar las rutas de administración en /api/admin
router.use('/admin', adminRoutes);

// Montar las rutas de administración en /api/avoluntarios
router.use('/voluntarios', voluntariosRoutes);

export default router;
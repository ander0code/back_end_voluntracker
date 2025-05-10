import { Router } from 'express';
import { login, register, invite } from './controllers/auth.controller';
import { authMiddleware, requireRole, requirePermission } from '../../shared/middleware/auth';
import { UserType } from '../../shared/interfaces';

const router = Router();

/**
 * @route   POST /api/auth/login
 * @desc    Autenticar un usuario (admin plataforma o usuario tenant)
 * @access  Público
 */
router.post('/login', login);

/**
 * @route   POST /api/auth/register
 * @desc    Registrar un nuevo administrador de plataforma
 * @access  Solo para administradores de plataforma con permisos 'manage_platform_admins'
 */
router.post('/register', 
  authMiddleware, 
  requireRole(UserType.ADMIN_PLATAFORMA),
  requirePermission('manage_platform_admins'), 
  register
);

/**
 * @route   POST /api/auth/invite
 * @desc    Invitar a un usuario a un tenant
 * @access  Solo para administradores de plataforma o admins de tenant
 */
router.post('/invite', 
  authMiddleware, 
  requireRole([UserType.ADMIN_PLATAFORMA, 'admin']),
  invite
);

export default router;
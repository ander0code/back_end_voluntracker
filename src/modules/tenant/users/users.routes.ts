import { Router } from 'express';
import { UsersController } from './users.controller';
import { requireRole } from '../../../shared/middleware/auth';

const router = Router();
const usersController = new UsersController();

// Todas las rutas de este módulo requieren al menos rol 'admin' o 'coordinador'
router.use(requireRole(['admin', 'coordinador']));

// Rutas CRUD básicas
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', requireRole('admin'), usersController.createUser);
router.put('/:id', requireRole('admin'), usersController.updateUser);
router.delete('/:id', requireRole('admin'), usersController.deleteUser);

// Ruta para cambio de contraseña
router.post('/:id/change-password', usersController.changePassword);

export default router;
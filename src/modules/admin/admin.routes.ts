import { Router } from 'express';
import { tenantController, registerAdmin } from './controllers/admin.controller';
import { authMiddleware, requireRole } from '../../shared/middleware/auth';

const router = Router();

// Middleware de autenticación y autorización para todas las rutas de admin
router.use(authMiddleware);
router.use(requireRole('admin_plataforma'));

/**
 * @swagger
 * /admin/tenants:
 *   get:
 *     summary: Listar todos los tenants
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tenants obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                       nombre:
 *                         type: string
 *                       nombre_esquema:
 *                         type: string
 *                       plan:
 *                         type: string
 *                       estado:
 *                         type: string
 *                       creado_en:
 *                         type: string
 *                         format: date-time
 *                       actualizado_en:
 *                         type: string
 *                         format: date-time
 *                       subdominio:
 *                         type: string
 *                       fecha_proximo_pago:
 *                         type: string
 *                         format: date-time
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       500:
 *         description: Error del servidor
 */
router.get('/tenants', tenantController.getAll);

/**
 * @swagger
 * /admin/tenants/{id}:
 *   get:
 *     summary: Detalle de un tenant
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del tenant
 *     responses:
 *       200:
 *         description: Detalle del tenant obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                     nombre:
 *                       type: string
 *                     nombre_esquema:
 *                       type: string
 *                     plan:
 *                       type: string
 *                     estado:
 *                       type: string
 *                     fecha_proximo_pago:
 *                       type: string
 *                       format: date-time
 *                     creado_en:
 *                       type: string
 *                       format: date-time
 *                     actualizado_en:
 *                       type: string
 *                       format: date-time
 *                     subdominio:
 *                       type: string
 *                     marca:
 *                       type: object
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       404:
 *         description: Tenant no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/tenants/:id', tenantController.getById);

/**
 * @swagger
 * /admin/tenants:
 *   post:
 *     summary: Crear nuevo tenant
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del tenant
 *               nombre_esquema:
 *                 type: string
 *                 description: Nombre del esquema para la base de datos (opcional)
 *               subdominio:
 *                 type: string
 *                 description: Subdominio personalizado
 *               marca:
 *                 type: object
 *                 description: Información de marca/personalización
 *               plan:
 *                 type: string
 *                 enum: [basico, premium, enterprise]
 *                 description: Plan de suscripción
 *               estado:
 *                 type: string
 *                 description: Estado del tenant
 *     responses:
 *       201:
 *         description: Tenant creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                     nombre:
 *                       type: string
 *                     nombre_esquema:
 *                       type: string
 *                     plan:
 *                       type: string
 *                     estado:
 *                       type: string
 *                     creado_en:
 *                       type: string
 *                       format: date-time
 *                     actualizado_en:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Datos de entrada inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       500:
 *         description: Error del servidor
 */
router.post('/tenants', tenantController.create);

/**
 * @swagger
 * /admin/tenants/{id}:
 *   patch:
 *     summary: Actualizar datos generales de un tenant
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID del tenant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del tenant
 *               subdominio:
 *                 type: string
 *                 description: Subdominio personalizado
 *               marca:
 *                 type: object
 *                 description: Información de marca/personalización
 *               plan:
 *                 type: string
 *                 enum: [basico, premium, enterprise]
 *                 description: Plan de suscripción
 *               estado:
 *                 type: string
 *                 description: Estado del tenant
 *               fecha_proximo_pago:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha del próximo pago
 *     responses:
 *       200:
 *         description: Tenant actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                     nombre:
 *                       type: string
 *                     nombre_esquema:
 *                       type: string
 *                     plan:
 *                       type: string
 *                     estado:
 *                       type: string
 *                     creado_en:
 *                       type: string
 *                       format: date-time
 *                     actualizado_en:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Datos de entrada inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       404:
 *         description: Tenant no encontrado
 *       500:
 *         description: Error del servidor
 */
router.patch('/tenants/:id', tenantController.update);

// Rutas adicionales para actualización de planes y fechas de pago
router.patch('/tenants/:id/plan', tenantController.updatePlan);
router.patch('/tenants/:id/payment-date', tenantController.updatePaymentDate);


router.delete('/tenants/:id', tenantController.delete);

// Ruta para registrar administradores de plataforma (solo para admins existentes)
router.post('/register', registerAdmin);

export default router;
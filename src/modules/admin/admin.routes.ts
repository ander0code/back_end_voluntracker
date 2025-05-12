import { Router } from 'express';
import { 
  tenantController, 
  registerAdmin, 
  statusController, 
  analyticsController, 
  billingController, 
  healthController,
  invoicesController,
  tenantAdminController
} from './controllers/admin.controller';
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

/**
 * @swagger
 * /admin/tenants/{id}/plan:
 *   patch:
 *     summary: Actualizar plan de un tenant
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
 *             required:
 *               - plan
 *             properties:
 *               plan:
 *                 type: string
 *                 enum: [basico, premium, enterprise]
 *                 description: Nuevo plan de suscripción
 *               comentario:
 *                 type: string
 *                 description: Comentario opcional sobre el cambio
 *     responses:
 *       200:
 *         description: Plan actualizado correctamente
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
router.patch('/tenants/:id/plan', tenantController.updatePlan);

/**
 * @swagger
 * /admin/tenants/{id}/payment-date:
 *   patch:
 *     summary: Actualizar fecha de próximo pago de un tenant
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
 *             required:
 *               - fecha_proximo_pago
 *             properties:
 *               fecha_proximo_pago:
 *                 type: string
 *                 format: date-time
 *                 description: Nueva fecha de próximo pago
 *               comentario:
 *                 type: string
 *                 description: Comentario opcional sobre el cambio
 *     responses:
 *       200:
 *         description: Fecha de próximo pago actualizada correctamente
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
router.patch('/tenants/:id/payment-date', tenantController.updatePaymentDate);

/**
 * @swagger
 * /admin/tenants/{id}:
 *   delete:
 *     summary: Eliminar un tenant
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
 *         description: ID del tenant a eliminar
 *     responses:
 *       200:
 *         description: Tenant eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Tenant eliminado con éxito
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       404:
 *         description: Tenant no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/tenants/:id', tenantController.delete);

/**
 * @swagger
 * /admin/register:
 *   post:
 *     summary: Registrar un nuevo administrador de plataforma
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
 *               - correo
 *               - contrasena
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del administrador
 *               correo:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico (único)
 *               contrasena:
 *                 type: string
 *                 format: password
 *                 description: Contraseña (mínimo 8 caracteres)
 *               permisos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Lista de permisos asignados
 *     responses:
 *       201:
 *         description: Administrador registrado correctamente
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
 *                     correo:
 *                       type: string
 *                       format: email
 *                     permisos:
 *                       type: array
 *                       items:
 *                         type: string
 *                     creado_en:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Datos de entrada inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       409:
 *         description: El correo ya está registrado
 *       500:
 *         description: Error del servidor
 */
router.post('/register', registerAdmin);

/**
 * @swagger
 * /admin/register/tenants/{id}:
 *   post:
 *     summary: Registrar un nuevo administrador para un tenant específico
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
 *             required:
 *               - nombre
 *               - correo
 *               - contrasena
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del administrador
 *               correo:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico (único)
 *               contrasena:
 *                 type: string
 *                 format: password
 *                 description: Contraseña (mínimo 8 caracteres)
 *               rol:
 *                 type: string
 *                 enum: [admin, coordinador, voluntario]
 *                 default: admin
 *                 description: Rol del usuario en el tenant
 *               permisos:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Lista de permisos específicos (opcional)
 *     responses:
 *       201:
 *         description: Administrador de tenant registrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Administrador de tenant creado con éxito
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                     nombre:
 *                       type: string
 *                     correo:
 *                       type: string
 *                       format: email
 *                     rol:
 *                       type: string
 *                     permisos:
 *                       type: array
 *                       items:
 *                         type: string
 *                     tenant_id:
 *                       type: string
 *                       format: uuid
 *                     tenant_nombre:
 *                       type: string
 *                     tenant_schema:
 *                       type: string
 *                     creado_en:
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
 *       409:
 *         description: El correo ya está registrado para este tenant
 *       500:
 *         description: Error del servidor
 */
router.post('/register/tenants/:id', tenantAdminController.registerTenantAdmin);

/**
 * @swagger
 * /admin/tenants/{id}/status:
 *   patch:
 *     summary: Actualizar estado de un tenant (activar/suspender/cancelar)
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
 *             required:
 *               - estado
 *             properties:
 *               estado:
 *                 type: string
 *                 enum: [activo, suspendido, cancelado]
 *                 description: Nuevo estado del tenant
 *               comentario:
 *                 type: string
 *                 description: Comentario opcional sobre el cambio
 *     responses:
 *       200:
 *         description: Estado actualizado correctamente
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
 *                     estado:
 *                       type: string
 *                     plan:
 *                       type: string
 *                 message:
 *                   type: string
 *                   
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
router.patch('/tenants/:id/status', statusController.updateStatus);

/**
 * @swagger
 * /admin/tenants/{id}/usage:
 *   get:
 *     summary: Obtener datos de uso de API para un tenant
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
 *       - in: query
 *         name: desde
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Fecha de inicio para filtrar (formato ISO)
 *       - in: query
 *         name: hasta
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Fecha de fin para filtrar (formato ISO)
 *     responses:
 *       200:
 *         description: Datos de uso obtenidos correctamente
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
 *                     periodo:
 *                       type: object
 *                       properties:
 *                         desde:
 *                           type: string
 *                           format: date-time
 *                         hasta:
 *                           type: string
 *                           format: date-time
 *                     total_requests:
 *                       type: integer
 *                     successful_requests:
 *                       type: integer
 *                     failed_requests:
 *                       type: integer
 *                     error_rate:
 *                       type: number
 *                       format: float
 *                     daily_usage:
 *                       type: array
 *                       items:
 *                         type: object
 *                     top_endpoints:
 *                       type: array
 *                       items:
 *                         type: object
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       404:
 *         description: Tenant no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/tenants/:id/usage', analyticsController.getUsage);

/**
 * @swagger
 * /admin/tenants/{id}/metrics:
 *   get:
 *     summary: Obtener métricas de rendimiento para un tenant
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
 *       - in: query
 *         name: desde
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Fecha de inicio para filtrar (formato ISO)
 *       - in: query
 *         name: hasta
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Fecha de fin para filtrar (formato ISO)
 *       - in: query
 *         name: tipo
 *         schema:
 *           type: string
 *           enum: [latencia, errores, todos]
 *         description: Tipo de métricas a obtener
 *     responses:
 *       200:
 *         description: Métricas obtenidas correctamente
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
 *                     periodo:
 *                       type: object
 *                     organizacion:
 *                       type: object
 *                     latencia:
 *                       type: object
 *                     errores:
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
router.get('/tenants/:id/metrics', analyticsController.getMetrics);

/**
 * @swagger
 * /admin/billing/invoices:
 *   get:
 *     summary: Obtener listado de facturas
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: desde
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Fecha de inicio para filtrar (formato ISO)
 *       - in: query
 *         name: hasta
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Fecha de fin para filtrar (formato ISO)
 *       - in: query
 *         name: estado
 *         schema:
 *           type: string
 *           enum: [pagada, pendiente, vencida, todas]
 *         description: Filtrar por estado de la factura
 *     responses:
 *       200:
 *         description: Facturas obtenidas correctamente
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
 *                       organizacion_id:
 *                         type: string
 *                         format: uuid
 *                       organizacion_nombre:
 *                         type: string
 *                       numero:
 *                         type: string
 *                       fecha_emision:
 *                         type: string
 *                         format: date-time
 *                       fecha_vencimiento:
 *                         type: string
 *                         format: date-time
 *                       monto:
 *                         type: string
 *                       moneda:
 *                         type: string
 *                       estado:
 *                         type: string
 *                       plan:
 *                         type: string
 *                       detalles:
 *                         type: array
 *                         items:
 *                           type: object
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       500:
 *         description: Error del servidor
 */
router.get('/billing/invoices', billingController.getInvoices);

/**
 * @swagger
 * /admin/billing/invoices/{id}/send:
 *   post:
 *     summary: Enviar factura por email o generar PDF
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
 *         description: ID de la factura a enviar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               method:
 *                 type: string
 *                 enum: [email, pdf, both]
 *                 default: email
 *                 description: Método de envío (correo, PDF o ambos)
 *               destinatario:
 *                 type: string
 *                 format: email
 *                 description: Dirección de correo del destinatario (opcional)
 *               mensaje:
 *                 type: string
 *                 description: Mensaje personalizado para incluir en el email
 *               cc:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: email
 *                 description: Direcciones en copia
 *               incluirAdjuntos:
 *                 type: boolean
 *                 default: true
 *                 description: Incluir factura como PDF adjunto
 *     responses:
 *       200:
 *         description: Factura enviada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Factura enviada correctamente vía email
 *                 data:
 *                   type: object
 *                   properties:
 *                     invoice:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           format: uuid
 *                         numero:
 *                           type: string
 *                         fecha_emision:
 *                           type: string
 *                           format: date-time
 *                         fecha_vencimiento:
 *                           type: string
 *                           format: date-time
 *                         monto:
 *                           type: string
 *                         estado:
 *                           type: string
 *                         organizacion_nombre:
 *                           type: string
 *                     sending_details:
 *                       type: object
 *                       properties:
 *                         success:
 *                           type: boolean
 *                         method:
 *                           type: string
 *                         email:
 *                           type: object
 *                         pdf:
 *                           type: object
 *       400:
 *         description: Datos de entrada inválidos
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       404:
 *         description: Factura no encontrada
 *       500:
 *         description: Error del servidor
 */
router.post('/billing/invoices/:id/send', invoicesController.sendInvoice);

/**
 * @swagger
 * /admin/health:
 *   get:
 *     summary: Obtener información del estado de salud del sistema
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información de salud obtenida correctamente
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
 *                     db_status:
 *                       type: boolean
 *                     api_latency:
 *                       type: number
 *                     queue_size:
 *                       type: number
 *                     memory_usage:
 *                       type: number
 *                     cpu_usage:
 *                       type: number
 *                     uptime:
 *                       type: number
 *       401:
 *         description: No autorizado
 *       403:
 *         description: Permisos insuficientes
 *       500:
 *         description: Error del servidor
 */
router.get('/health', healthController.getHealth);



export default router;
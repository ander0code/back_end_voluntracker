import { Router } from 'express';
import { authMiddleware, requireRole } from '../../shared/middleware/auth';
import { voluntarioController } from './controllers/voluntarios.controller';



const router = Router();

// Middleware de autenticación y autorización para todas las rutas de voluntarios
router.use(authMiddleware);
router.use(requireRole('admin_plataforma'));

/**
 * @swagger
 * tags:
 *   name: Voluntarios
 *   description: Gestión de voluntarios
 */

/**
 * @swagger
 * /voluntarios:
 *   get:
 *     summary: Obtener todos los voluntarios
 *     tags: [Voluntarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: schema
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del esquema (tenant)
 *     responses:
 *       200:
 *         description: Lista de voluntarios obtenida correctamente
 *       400:
 *         description: Schema requerido
 *       500:
 *         description: Error del servidor
 */
router.get('/', voluntarioController.obtenerTodos);

/**
 * @swagger
 * /voluntarios:
 *   post:
 *     summary: Crear un nuevo voluntario
 *     tags: [Voluntarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: schema
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del esquema (tenant)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               correo:
 *                 type: string
 *                 format: email
 *               dni:
 *                 type: string
 *               telefono:
 *                 type: string
 *     responses:
 *       201:
 *         description: Voluntario creado correctamente
 *       400:
 *         description: Schema requerido o datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/voluntarios', voluntarioController.crearVoluntario);

/**
 * @swagger
 * /voluntarios/{id}:
 *   patch:
 *     summary: Actualizar un voluntario por ID
 *     tags: [Voluntarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del voluntario
 *       - in: query
 *         name: schema
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del esquema (tenant)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             additionalProperties: true
 *     responses:
 *       200:
 *         description: Voluntario actualizado correctamente
 *       400:
 *         description: Schema requerido o datos inválidos
 *       404:
 *         description: Voluntario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.patch('/voluntarios/:id', voluntarioController.actualizarVoluntario);

/**
 * @swagger
 * /voluntarios/{id}:
 *   delete:
 *     summary: Eliminar un voluntario por ID
 *     tags: [Voluntarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: schema
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Eliminado correctamente
 *       400:
 *         description: Schema requerido
 *       500:
 *         description: Error del servidor
 */
router.delete('/voluntarios/:id', voluntarioController.eliminarVoluntario);

/**
 * @swagger
 * /voluntarios/{id}/history:
 *   get:
 *     summary: Obtener historial de actividades de un voluntario
 *     tags: [Voluntarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: schema
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Historial obtenido correctamente
 *       400:
 *         description: Schema requerido
 *       500:
 *         description: Error del servidor
 */
router.get('/voluntarios/:id/history', voluntarioController.historialVoluntario);

/**
 * @swagger
 * /voluntarios/{id}/certificates:
 *   get:
 *     summary: Obtener certificados del voluntario
 *     tags: [Voluntarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: schema
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Certificados obtenidos correctamente
 *       400:
 *         description: Schema requerido
 *       500:
 *         description: Error del servidor
 */
router.get('/voluntarios/:id/certificates', voluntarioController.certificadosVoluntario);

/**
 * 
 * /voluntarios/export:
 *   get:
 *     summary: Exportar lista de voluntarios en formato Excel
 *     tags: [Voluntarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: schema
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del esquema (tenant)
 *     responses:
 *       200:
 *         description: Archivo Excel generado correctamente
 *         content:
 *           application/vnd.openxmlformats-officedocument.spreadsheetml.sheet:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: Schema requerido
 *       500:
 *         description: Error al generar el archivo
 */
/*router.get('/voluntarios/export', voluntarioController.exportarVoluntarios);
*/
export default router;

import { Router } from 'express';
import { login, refreshToken, getProfile } from './controllers/auth.controller';
import { authMiddleware } from '../../shared/middleware/auth';

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autenticar un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - correo
 *               - contrasena
 *             properties:
 *               correo:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario
 *               contrasena:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Login exitoso
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
 *                     token:
 *                       type: string
 *                       description: JWT token para autenticación
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           format: uuid
 *                         nombre:
 *                           type: string
 *                         correo:
 *                           type: string
 *                           format: email
 *                         userType:
 *                           type: string
 *                           enum: [admin_plataforma, admin_tenant, usuario_tenant]
 *       400:
 *         description: Datos de entrada inválidos
 *       401:
 *         description: Credenciales incorrectas
 *       500:
 *         description: Error del servidor
 */
router.post('/login', login);

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: Refrescar token JWT usando refresh token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: Token de refresco obtenido en el login
 *     responses:
 *       200:
 *         description: Tokens renovados correctamente
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
 *                     token:
 *                       type: string
 *                       description: Nuevo JWT token para autenticación
 *                     refreshToken:
 *                       type: string
 *                       description: Nuevo refresh token
 *       400:
 *         description: Datos de entrada inválidos
 *       401:
 *         description: Token de refresco inválido o expirado
 *       500:
 *         description: Error del servidor
 */
router.post('/refresh', refreshToken);

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Obtener perfil del usuario autenticado
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil obtenido correctamente
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
 *                     userType:
 *                       type: string
 *                       enum: [admin_plataforma, admin_tenant, usuario_tenant]
 *                     permisos:
 *                       type: array
 *                       items:
 *                         type: string
 *                     creado_en:
 *                       type: string
 *                       format: date-time
 *                     actualizado_en:
 *                       type: string
 *                       format: date-time
 *                     tenantId:
 *                       type: string
 *                       format: uuid
 *                       description: Solo para usuarios de tenant
 *                     tenantNombre:
 *                       type: string
 *                       description: Solo para usuarios de tenant
 *                     rol:
 *                       type: string
 *                       description: Solo para usuarios de tenant
 *       401:
 *         description: No autenticado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/profile', authMiddleware, getProfile);

export default router;
import prisma from '../../../shared/services/db.service';
import { logger } from '../../../shared/services/logger';
import { AppError } from '../../../shared/middleware/errorHandler';
import { CreateUserDto, UpdateUserDto, ChangePasswordDto } from './users.dto';
import bcrypt from 'bcryptjs';

export class UsersService {
  /**
   * Obtener todos los usuarios
   */
  async getAllUsers() {
    try {
      return await prisma.usuarios.findMany({
        select: {
          id: true,
          nombre: true,
          apellido: true,
          correo: true,
          telefono: true,
          rol: true,
          activo: true,
          permisos: true,
          fecha_creacion: true,
          fecha_actualizacion: true
        }
      });
    } catch (error) {
      logger.error(`Error al obtener usuarios: ${error}`);
      throw new AppError('Error al obtener usuarios', 500);
    }
  }

  /**
   * Obtener un usuario por ID
   */
  async getUserById(id: string) {
    try {
      const usuario = await prisma.usuarios.findUnique({
        where: { id },
        select: {
          id: true,
          nombre: true,
          apellido: true,
          correo: true,
          telefono: true,
          rol: true,
          activo: true,
          permisos: true,
          fecha_creacion: true,
          fecha_actualizacion: true
        }
      });

      if (!usuario) {
        throw new AppError('Usuario no encontrado', 404);
      }

      return usuario;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al obtener usuario: ${error}`);
      throw new AppError('Error al obtener usuario', 500);
    }
  }

  /**
   * Crear un nuevo usuario
   */
  async createUser(data: CreateUserDto) {
    try {
      // Verificar si el correo ya existe
      const existingUser = await prisma.usuarios.findUnique({
        where: { correo: data.correo }
      });

      if (existingUser) {
        throw new AppError('Este correo ya está registrado', 400);
      }

      // Hash de la contraseña si se proporciona
      let hashedPassword;
      if (data.contrasena) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(data.contrasena, salt);
      } else {
        // Generar contraseña temporal si no se proporciona
        const tempPassword = Math.random().toString(36).slice(-8);
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(tempPassword, salt);

        // TODO: Enviar correo con la contraseña temporal
        logger.info(`Contraseña temporal para ${data.correo}: ${tempPassword}`);
      }

      // Crear el usuario
      const newUser = await prisma.usuarios.create({
        data: {
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          hash_contrasena: hashedPassword,
          telefono: data.telefono,
          rol: data.rol,
          activo: data.activo !== undefined ? data.activo : true,
          permisos: data.permisos || {}
        }
      });

      // Devolver usuario sin incluir la contraseña
      return {
        id: newUser.id,
        nombre: newUser.nombre,
        apellido: newUser.apellido,
        correo: newUser.correo,
        telefono: newUser.telefono,
        rol: newUser.rol,
        activo: newUser.activo,
        permisos: newUser.permisos,
        fecha_creacion: newUser.fecha_creacion,
        fecha_actualizacion: newUser.fecha_actualizacion
      };
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al crear usuario: ${error}`);
      throw new AppError('Error al crear usuario', 500);
    }
  }

  /**
   * Actualizar un usuario existente
   */
  async updateUser(id: string, data: UpdateUserDto) {
    try {
      // Verificar que el usuario existe
      const user = await prisma.usuarios.findUnique({
        where: { id }
      });

      if (!user) {
        throw new AppError('Usuario no encontrado', 404);
      }

      // Si se intenta actualizar el correo, verificar que no exista
      if (data.correo && data.correo !== user.correo) {
        const existingUser = await prisma.usuarios.findUnique({
          where: { correo: data.correo }
        });

        if (existingUser) {
          throw new AppError('Este correo ya está registrado por otro usuario', 400);
        }
      }

      // Procesar la contraseña si se proporciona
      let updateData: any = { ...data };
      if (data.contrasena) {
        const salt = await bcrypt.genSalt(10);
        updateData.hash_contrasena = await bcrypt.hash(data.contrasena, salt);
        delete updateData.contrasena;
      }

      // Actualizar el usuario
      const updatedUser = await prisma.usuarios.update({
        where: { id },
        data: {
          ...updateData,
          fecha_actualizacion: new Date()
        },
        select: {
          id: true,
          nombre: true,
          apellido: true,
          correo: true,
          telefono: true,
          rol: true,
          activo: true,
          permisos: true,
          fecha_creacion: true,
          fecha_actualizacion: true
        }
      });

      return updatedUser;
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al actualizar usuario: ${error}`);
      throw new AppError('Error al actualizar usuario', 500);
    }
  }

  /**
   * Eliminar un usuario
   */
  async deleteUser(id: string) {
    try {
      // Verificar que el usuario existe
      const user = await prisma.usuarios.findUnique({
        where: { id }
      });

      if (!user) {
        throw new AppError('Usuario no encontrado', 404);
      }

      // Eliminar el usuario
      await prisma.usuarios.delete({
        where: { id }
      });

      return { success: true, message: 'Usuario eliminado con éxito' };
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al eliminar usuario: ${error}`);
      throw new AppError('Error al eliminar usuario', 500);
    }
  }

  /**
   * Cambiar la contraseña de un usuario
   */
  async changePassword(id: string, data: ChangePasswordDto) {
    try {
      // Verificar que el usuario existe
      const user = await prisma.usuarios.findUnique({
        where: { id }
      });

      if (!user) {
        throw new AppError('Usuario no encontrado', 404);
      }

      // Verificar la contraseña actual
      const isValidPassword = await bcrypt.compare(data.contrasenaActual, user.hash_contrasena);
      if (!isValidPassword) {
        throw new AppError('Contraseña actual incorrecta', 400);
      }

      // Hash de la nueva contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.nuevaContrasena, salt);

      // Actualizar la contraseña
      await prisma.usuarios.update({
        where: { id },
        data: {
          hash_contrasena: hashedPassword,
          fecha_actualizacion: new Date()
        }
      });

      return { success: true, message: 'Contraseña actualizada con éxito' };
    } catch (error) {
      if (error instanceof AppError) throw error;
      logger.error(`Error al cambiar contraseña: ${error}`);
      throw new AppError('Error al cambiar contraseña', 500);
    }
  }
}
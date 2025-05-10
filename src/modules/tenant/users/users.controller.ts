import { Request, Response, NextFunction } from 'express';
import { UsersService } from './users.service';
import { userSchema, updateUserSchema, changePasswordSchema } from './users.dto';
import { AppError } from '../../../shared/middleware/errorHandler';

const usersService = new UsersService();

export class UsersController {
  /**
   * Obtener todos los usuarios
   */
  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await usersService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Obtener un usuario por ID
   */
  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await usersService.getUserById(id);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Crear un nuevo usuario
   */
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const validationResult = userSchema.safeParse(req.body);
      if (!validationResult.success) {
        return next(new AppError('Datos de entrada inválidos', 400));
      }

      const user = await usersService.createUser(validationResult.data);
      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Actualizar un usuario existente
   */
  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const validationResult = updateUserSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return next(new AppError('Datos de entrada inválidos', 400));
      }

      const user = await usersService.updateUser(id, validationResult.data);
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Eliminar un usuario
   */
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await usersService.deleteUser(id);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Cambiar la contraseña de un usuario
   */
  async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const validationResult = changePasswordSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return next(new AppError('Datos de entrada inválidos', 400));
      }

      const result = await usersService.changePassword(id, validationResult.data);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
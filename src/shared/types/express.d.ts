import { AuthenticatedUser } from '../interfaces';

declare global {
  namespace Express {
    // Extiende la interfaz Request para incluir el usuario autenticado
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}

// Este export vacío es necesario para que el archivo sea tratado como un módulo
export {};
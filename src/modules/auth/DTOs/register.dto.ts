export class RegisterAdminDto {
  /**
   * Admin's full name
   */
  nombre: string;
  
  /**
   * Admin's email address
   */
  correo: string;
  
  /**
   * Admin's password
   */
  contrasena: string;
  
  /**
   * Optional permissions object
   */
  permisos?: Record<string, any>;

  constructor(data: Partial<RegisterAdminDto> = {}) {
    this.nombre = data.nombre || '';
    this.correo = data.correo || '';
    this.contrasena = data.contrasena || '';
    this.permisos = data.permisos;
  }
}
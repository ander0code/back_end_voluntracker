export class LoginDto {
  /**
   * Email address of the user
   */
  correo: string;
  
  /**
   * User password
   */
  contrasena: string;

  constructor(data: Partial<LoginDto> = {}) {
    this.correo = data.correo || '';
    this.contrasena = data.contrasena || '';
  }
}
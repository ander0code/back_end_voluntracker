export class InviteUserDto {
  /**
   * User's full name
   */
  nombre: string;
  
  /**
   * User's email address
   */
  correo: string;
  
  /**
   * User's role in the tenant
   * Can be: 'admin', 'coordinador', 'supervisor'
   */
  rol: string;
  
  /**
   * The tenant UUID where the user will be added
   */
  tenantId: string;
  
  /**
   * Optional object with additional permissions
   */
  permisos?: Record<string, boolean>;

  constructor(data: Partial<InviteUserDto> = {}) {
    this.nombre = data.nombre || '';
    this.correo = data.correo || '';
    this.rol = data.rol || '';
    this.tenantId = data.tenantId || '';
    this.permisos = data.permisos;
  }
}
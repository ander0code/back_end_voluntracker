import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs'; 
import jwt, { SignOptions } from 'jsonwebtoken';
import prisma from '../../../shared/services/db.service';
import { logger } from '../../../shared/services/logger';
import { 
  AuthResult, 
  UserType, 
  TenantRole, 
  TenantPermission, 
  PlatformAdminPermission,
  TENANT_ROLE_PERMISSIONS
} from '../../../shared/interfaces';
import { config } from '../../../config';

export class AuthService {
  private readonly JWT_SECRET: string;
  private readonly JWT_EXPIRES_IN: string;
  
  constructor() {
    // Verificación de variables de entorno críticas
    if (!config.jwt.secret) {
      throw new Error('JWT_SECRET no está definido en variables de entorno');
    }
    this.JWT_SECRET = config.jwt.secret;
    this.JWT_EXPIRES_IN = config.jwt.expiresIn || '1d';
  }

  /**
   * Método principal de autenticación centralizada
   * Busca primero en administradores, y luego en tenant_usuarios
   */
  async authenticate(correo: string, contrasena: string): Promise<AuthResult> {
    try {
      logger.debug(`Iniciando autenticación para: ${correo}`);
      
      // Paso 1: Intentar como administrador de plataforma
      try {
        logger.debug('Intentando autenticar como administrador de plataforma');
        const adminResult = await this.authenticatePlatformAdmin(correo, contrasena);
        logger.debug('Autenticación exitosa como administrador de plataforma');
        return adminResult;
      } catch (error: any) {
        // Verificamos específicamente si el error es que no se encontró el administrador
        if (error.message === 'Administrador no encontrado') {
          logger.debug('No es administrador de plataforma, intentando como usuario de tenant');
        } else {
          // Si es otro tipo de error (como contraseña incorrecta), lo propagamos
          logger.error(`Error durante authenticatePlatformAdmin: ${error.message}`);
          throw error;
        }
      }
      
      // Paso 2: Intentar como usuario de tenant
      try {
        logger.debug('Intentando autenticar como usuario de tenant');
        const tenantUserResult = await this.authenticateTenantUser(correo, contrasena);
        logger.debug('Autenticación exitosa como usuario de tenant');
        return tenantUserResult;
      } catch (error: any) {
        logger.error(`Error durante authenticateTenantUser: ${error.message}`);
        
        // Si llegamos aquí, es porque el usuario no se encontró ni como admin ni como usuario tenant
        if (error.message === 'Usuario no encontrado') {
          throw new Error('Usuario no encontrado');
        }
        
        // Propagamos cualquier otro error (contraseña incorrecta, etc.)
        throw error;
      }
    } catch (error: any) {
      logger.error(`Error general en authenticate: ${error.message}`);
      throw error;
    }
  }

  /**
   * Autenticar administrador de plataforma
   */
  private async authenticatePlatformAdmin(correo: string, contrasena: string): Promise<AuthResult> {
    try {
      logger.debug(`Buscando administrador con correo: ${correo}`);
      
      // Buscar admin por correo
      const admin = await prisma.administradores.findUnique({
        where: { correo }
      });

      if (!admin) {
        logger.debug(`Administrador no encontrado con correo: ${correo}`);
        throw new Error('Administrador no encontrado');
      }

      logger.debug(`Administrador encontrado, verificando contraseña`);
      
      // Verificar contraseña
      const passwordValid = await bcrypt.compare(contrasena, admin.hash_contrasena);
      if (!passwordValid) {
        logger.debug(`Contraseña incorrecta para administrador: ${correo}`);
        throw new Error('Contraseña incorrecta');
      }

      logger.debug(`Contraseña verificada, normalizando permisos`);
      
      // Verificar y normalizar permisos
      const permisos = this.normalizePlatformAdminPermissions(admin.permisos);

      logger.debug(`Generando token JWT para administrador: ${correo}`);
      
      // Generar token JWT
      const token = jwt.sign(
        { 
          id: admin.id,
          nombre: admin.nombre,
          correo: admin.correo,
          userType: UserType.ADMIN_PLATAFORMA,
          permisos 
        },
        this.JWT_SECRET,
        { expiresIn: this.JWT_EXPIRES_IN } as SignOptions
      );

      logger.debug(`Token generado para administrador: ${correo}`);
      
      return {
        token,
        user: {
          id: admin.id,
          nombre: admin.nombre,
          correo: admin.correo,
          userType: UserType.ADMIN_PLATAFORMA,
          permisos
        }
      };
    } catch (error) {
      // Asegurarnos de propagar el error correctamente
      logger.error(`Error en authenticatePlatformAdmin: ${error instanceof Error ? error.message : String(error)}`);
      throw error;
    }
  }

  /**
   * Autenticar usuario de tenant centralizado
   */
  private async authenticateTenantUser(correo: string, contrasena: string): Promise<AuthResult> {
    try {
      logger.debug(`Buscando usuario de tenant con correo: ${correo}`);
      
      // Buscar usuario de tenant por correo (ahora centralizado en public.tenant_usuarios)
      const usuario = await prisma.tenant_usuarios.findUnique({
        where: { correo }
      });
      
      if (!usuario) {
        logger.debug(`Usuario de tenant no encontrado con correo: ${correo}`);
        throw new Error('Usuario no encontrado');
      }
      
      logger.debug(`Usuario encontrado, obteniendo información del tenant`);
      
      // Obtener la información del tenant en una consulta separada
      const tenantInfo = await prisma.organizaciones.findUnique({
        where: { id: usuario.tenant_id },
        select: {
          id: true,
          nombre: true, 
          nombre_esquema: true
        }
      });
      
      if (!tenantInfo) {
        logger.error(`Tenant no encontrado para el usuario ${correo} con tenant_id: ${usuario.tenant_id}`);
        throw new Error('Organización no encontrada');
      }
      
      logger.debug(`Tenant encontrado: ${tenantInfo.nombre}, verificando contraseña`);
      
      // Verificar contraseña
      const passwordValid = await bcrypt.compare(contrasena, usuario.hash_contrasena);
      if (!passwordValid) {
        logger.debug(`Contraseña incorrecta para usuario: ${correo}`);
        throw new Error('Contraseña incorrecta');
      }

      logger.debug(`Contraseña verificada, normalizando permisos`);
      
      // Obtener permisos basados en el rol y combinarlos con permisos específicos
      const rol = usuario.rol as TenantRole;
      const permisos = this.normalizeTenantUserPermissions(rol, usuario.permisos);

      logger.debug(`Generando token JWT para usuario: ${correo}`);
      
      // Generar token JWT
      const token = jwt.sign(
        { 
          id: usuario.id,
          nombre: usuario.nombre,
          correo: usuario.correo,
          userType: UserType.TENANT_USUARIO,
          tenantId: usuario.tenant_id,
          tenantNombre: tenantInfo.nombre,
          schemaName: tenantInfo.nombre_esquema,
          rol: usuario.rol,
          permisos 
        },
        this.JWT_SECRET,
        { expiresIn: this.JWT_EXPIRES_IN } as SignOptions
      );

      logger.debug(`Token generado para usuario de tenant: ${correo}`);
      
      return {
        token,
        user: {
          id: usuario.id,
          nombre: usuario.nombre,
          correo: usuario.correo,
          userType: UserType.TENANT_USUARIO,
          tenantId: usuario.tenant_id,
          tenantNombre: tenantInfo.nombre,
          schemaName: tenantInfo.nombre_esquema,
          rol: usuario.rol,
          permisos
        }
      };
    } catch (error) {
      // Asegurarnos de propagar el error correctamente
      logger.error(`Error en authenticateTenantUser: ${error}`);
      throw error;
    }
  }

  /**
   * Normaliza los permisos de un admin de plataforma
   */
  private normalizePlatformAdminPermissions(permisosDb: unknown): string[] {
    // Si no hay permisos, usar un array vacío
    if (!permisosDb) return [];
    
    // Si ya es un array, asegurar que solo contenga permisos válidos
    if (Array.isArray(permisosDb)) {
      return permisosDb.filter(p => 
        Object.values(PlatformAdminPermission).includes(p as PlatformAdminPermission)
      );
    }
    
    // Si es un objeto, convertir a array de strings 
    // Por ejemplo: { manage_tenants: true, view_tenants: true } -> ["manage_tenants", "view_tenants"]
    if (typeof permisosDb === 'object' && permisosDb !== null) {
      return Object.entries(permisosDb as Record<string, unknown>)
        .filter(([_, value]) => value === true)
        .map(([key, _]) => key)
        .filter(p => Object.values(PlatformAdminPermission).includes(p as PlatformAdminPermission));
    }
    
    return [];
  }

  /**
   * Normaliza y combina los permisos basados en rol con permisos específicos
   */
  private normalizeTenantUserPermissions(rol: TenantRole, permisosEspecificos: unknown): string[] {
    // Obtener permisos base según el rol
    let permisos: string[] = [];
    
    // Si el rol es válido, obtener sus permisos correspondientes
    if (Object.values(TenantRole).includes(rol)) {
      permisos = [...TENANT_ROLE_PERMISSIONS[rol]];
    }
    
    // Si hay permisos específicos, procesarlos
    if (permisosEspecificos) {
      // Si es un array, filtrar solo permisos válidos
      if (Array.isArray(permisosEspecificos)) {
        const permisosValidos = permisosEspecificos.filter(p => 
          Object.values(TenantPermission).includes(p as TenantPermission)
        );
        // Agregar permisos que no estén ya incluidos
        permisosValidos.forEach(p => {
          if (!permisos.includes(p)) {
            permisos.push(p);
          }
        });
      } 
      // Si es un objeto, procesar las entradas
      else if (typeof permisosEspecificos === 'object' && permisosEspecificos !== null) {
        Object.entries(permisosEspecificos as Record<string, boolean>).forEach(([permiso, valor]) => {
          // Si el valor es true y es un permiso válido, agregar si no existe
          if (valor === true && 
              Object.values(TenantPermission).includes(permiso as TenantPermission) && 
              !permisos.includes(permiso)) {
            permisos.push(permiso);
          }
          // Si el valor es false y el permiso está en la lista, removerlo
          else if (valor === false && permisos.includes(permiso)) {
            permisos = permisos.filter(p => p !== permiso);
          }
        });
      }
    }
    
    return permisos;
  }

  /**
   * Registrar un nuevo administrador de plataforma
   */
  async registerPlatformAdmin(nombre: string, correo: string, contrasena: string, permisos?: any) {
    // Verificar si ya existe un admin con el correo dado
    const existingAdmin = await prisma.administradores.findUnique({
      where: { correo }
    });

    if (existingAdmin) {
      throw new Error('El correo ya existe en la base de datos');
    }

    // Normalizar permisos
    const permisosNormalizados = this.normalizePlatformAdminPermissions(permisos);

    // Hashear contraseña
    const saltRounds = 10;
    const hash_contrasena = await bcrypt.hash(contrasena, saltRounds);

    // Crear nuevo admin
    const newAdmin = await prisma.administradores.create({
      data: {
        id: uuidv4(),
        nombre,
        correo,
        hash_contrasena,
        permisos: permisosNormalizados
      }
    });

    return newAdmin;
  }

  /**
   * Invitar a un usuario de tenant
   */
  async inviteTenantUser(nombre: string, correo: string, rol: string, tenantId: string, permisos?: any) {
    try {
      logger.debug(`Invitando usuario a tenant ${tenantId}: ${correo}, rol: ${rol}`);
      
      // Verificar si el tenant existe
      const tenant = await prisma.organizaciones.findUnique({
        where: { id: tenantId }
      });
      
      if (!tenant) {
        throw new Error('Organización no encontrada');
      }

      // Verificar si el rol es válido
      if (!Object.values(TenantRole).includes(rol as TenantRole)) {
        throw new Error(`Rol inválido: ${rol}. Roles válidos: ${Object.values(TenantRole).join(', ')}`);
      }

      // Verificar si ya existe un usuario con el correo
      const existingUser = await prisma.tenant_usuarios.findUnique({
        where: { correo }
      });
      
      if (existingUser) {
        throw new Error('El correo ya existe en el sistema');
      }

      // Generar contraseña temporal
      const tempPassword = this.generateTemporaryPassword();
      const saltRounds = 10;
      const hash_contrasena = await bcrypt.hash(tempPassword, saltRounds);

      // Normalizar permisos según el rol y permisos específicos
      const permisosNormalizados = this.normalizeTenantUserPermissions(rol as TenantRole, permisos);

      // Crear usuario en tenant_usuarios (ahora centralizado)
      const newUser = await prisma.tenant_usuarios.create({
        data: {
          id: uuidv4(),
          tenant_id: tenantId,
          nombre,
          correo,
          hash_contrasena,
          rol,
          permisos: permisosNormalizados
        }
      });

      // En una aplicación real, aquí se enviaría un email con la contraseña temporal
      logger.info(`Usuario invitado a la organización ${tenant.nombre} con contraseña temporal: ${tempPassword}`);

      return {
        id: newUser.id,
        correo: newUser.correo,
        tenant: tenant.nombre,
        tempPassword // Solo para desarrollo, en producción no devolver esto
      };
    } catch (error) {
      logger.error(`Error al invitar usuario: ${error}`);
      throw error;
    }
  }

  /**
   * Generar contraseña temporal
   */
  private generateTemporaryPassword(length = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * Verificar si un usuario tiene un permiso específico
   * Esta función es útil para middleware de autorización
   */
  hasPermission(userPermisos: string[], requiredPermission: string): boolean {
    return userPermisos.includes(requiredPermission);
  }

  /**
   * Verificar si un usuario tiene uno de varios permisos posibles
   */
  hasAnyPermission(userPermisos: string[], requiredPermissions: string[]): boolean {
    return requiredPermissions.some(perm => userPermisos.includes(perm));
  }

  /**
   * Verificar si un usuario tiene todos los permisos especificados
   */
  hasAllPermissions(userPermisos: string[], requiredPermissions: string[]): boolean {
    return requiredPermissions.every(perm => userPermisos.includes(perm));
  }
}
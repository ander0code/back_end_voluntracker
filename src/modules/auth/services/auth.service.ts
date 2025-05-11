import prisma from '../../../shared/services/db.service';
import { config } from '../../../config';
import { logger } from '../../../shared/services/logger';
import bcrypt from 'bcryptjs';
import jwt, { SignOptions } from 'jsonwebtoken';
import { 
  AuthResult, 
  UserType, 
  PlatformAdminPermission, 
  TenantRole, 
  TenantPermission,
  TENANT_ROLE_PERMISSIONS
} from '../interfaces/auth.interfaces';


export class AuthService {
  /**
   * Autenticar un usuario (admin plataforma o usuario tenant)
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

      logger.debug(`Generando token JWT para administrador: ${correo}`);      // Generar token JWT con tipado correcto
      const jwtPayload = { 
        id: admin.id,
        nombre: admin.nombre,
        correo: admin.correo,
        userType: UserType.ADMIN_PLATAFORMA,
        permisos 
      };      const jwtOptions: SignOptions = { 
        expiresIn: `${config.jwt.expiresIn}` as any
      };
      
      const token = jwt.sign(
        jwtPayload,
        process.env.JWT_SECRET || 'default_secret_key',
        jwtOptions
      );

      // Generar refresh token
      const refreshToken = this.generateRefreshToken(admin.id);

      logger.debug(`Token generado para administrador: ${correo}`);
      
      return {
        token,
        refreshToken,
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
      const jwtPayload = {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        userType: UserType.USUARIO_TENANT,
        tenantId: usuario.tenant_id,
        tenantNombre: tenantInfo.nombre,
        schemaName: tenantInfo.nombre_esquema,
        rol: usuario.rol,
        permisos
      };      
      
      const jwtOptions: SignOptions = { 
        expiresIn: config.jwt.expiresIn as any
      };
        const token = jwt.sign(
        jwtPayload,
        process.env.JWT_SECRET || 'default_secret_key',
        jwtOptions
      );

      // Generar refresh token
      const refreshToken = this.generateRefreshToken(usuario.id);

      logger.debug(`Token generado para usuario de tenant: ${correo}`);
      
      return {
        token,
        refreshToken,
        user: {
          id: usuario.id,
          nombre: usuario.nombre,
          correo: usuario.correo,
          userType: UserType.USUARIO_TENANT,
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
   */  private normalizeTenantUserPermissions(rol: TenantRole, permisosEspecificos: unknown): string[] {
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
   * Generar contraseña temporal
   * Esta función de utilidad permanece ya que puede ser útil en otros contextos
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

  /**
   * Genera un nuevo refresh token para un usuario
   * @param userId - ID del usuario
   * @returns String con el refresh token
   */
  private generateRefreshToken(userId: string): string {
    return jwt.sign(
      { id: userId, type: 'refresh' },
      config.jwt.secret,
      { expiresIn: '7d' } // Los refresh tokens duran 7 días
    );
  }
  
  /**
   * Refresca un token JWT utilizando un refresh token
   * @param refreshToken - Token de refresco válido
   * @returns Nuevos tokens (access y refresh)
   */
  async refreshToken(refreshToken: string): Promise<{ token: string, refreshToken: string }> {
    try {
      // Verificar validez del refresh token
      const decoded = jwt.verify(refreshToken, config.jwt.secret) as any;
      
      if (!decoded || !decoded.id || decoded.type !== 'refresh') {
        throw new Error('Refresh token inválido');
      }
      
      // Buscar en ambos tipos de usuarios (admin platform o tenant user)
      let user: any = null;
      
      // Primero buscar en administradores
      user = await prisma.administradores.findUnique({
        where: { id: decoded.id }
      });
      
      let userPayload: any;
      let userType: UserType;
      
      if (user) {
        // Es un administrador de plataforma
        userType = UserType.ADMIN_PLATAFORMA;
        const permisos = this.normalizePlatformAdminPermissions(user.permisos);
        
        userPayload = {
          id: user.id,
          nombre: user.nombre,
          correo: user.correo,
          userType,
          permisos
        };
      } else {
        // Buscar en usuarios de tenant
        user = await prisma.tenant_usuarios.findUnique({
          where: { id: decoded.id }
        });
        
        if (!user) {
          throw new Error('Usuario no encontrado');
        }
        
        // Es un usuario de tenant
        const tenantInfo = await prisma.organizaciones.findUnique({
          where: { id: user.tenant_id },
          select: {
            id: true,
            nombre: true, 
            nombre_esquema: true
          }
        });
        
        if (!tenantInfo) {
          throw new Error('Organización no encontrada');
        }
        
        userType = UserType.USUARIO_TENANT;
        const rol = user.rol as TenantRole;
        const permisos = this.normalizeTenantUserPermissions(rol, user.permisos);
        
        userPayload = {
          id: user.id,
          nombre: user.nombre,
          correo: user.correo,
          userType,
          tenantId: user.tenant_id,
          tenantNombre: tenantInfo.nombre,
          schemaName: tenantInfo.nombre_esquema,
          rol: user.rol,
          permisos
        };
      }
      
      // Generar nuevos tokens
      const newToken = jwt.sign(
        userPayload,
        config.jwt.secret,
        { expiresIn: config.jwt.expiresIn as any }
      );
      
      const newRefreshToken = this.generateRefreshToken(user.id);
      
      return {
        token: newToken,
        refreshToken: newRefreshToken
      };
    } catch (error: any) {
      logger.error(`Error al refrescar token: ${error.message}`);
      throw error;
    }
  }
  
  /**
   * Obtiene el perfil de un usuario
   * @param userId - ID del usuario
   * @param userType - Tipo de usuario
   * @returns Datos del perfil del usuario
   */
  async getUserProfile(userId: string, userType: UserType): Promise<any> {
    try {
      if (userType === UserType.ADMIN_PLATAFORMA) {
        // Buscar admin platform
        const admin = await prisma.administradores.findUnique({
          where: { id: userId },
          select: {
            id: true,
            nombre: true,
            correo: true,
            permisos: true,
            creado_en: true,
            actualizado_en: true
          }
        });
        
        if (!admin) {
          throw new Error('Administrador no encontrado');
        }
        
        return {
          ...admin,
          userType: UserType.ADMIN_PLATAFORMA,
          permisos: this.normalizePlatformAdminPermissions(admin.permisos)
        };      } else if (userType === UserType.USUARIO_TENANT) {
        // Buscar tenant user
        const user = await prisma.tenant_usuarios.findUnique({
          where: { id: userId },
          select: {
            id: true,
            nombre: true,
            correo: true,
            rol: true,
            permisos: true,
            creado_en: true,
            actualizado_en: true,
            tenant_id: true
          }
        });
        
        if (!user) {
          throw new Error('Usuario no encontrado');
        }
        
        // Obtener la información del tenant en una consulta separada
        const tenantInfo = await prisma.organizaciones.findUnique({
          where: { id: user.tenant_id },
          select: {
            id: true,
            nombre: true,
            nombre_esquema: true
          }
        });
        
        if (!tenantInfo) {
          throw new Error('Organización no encontrada');
        }
        
        return {
          id: user.id,
          nombre: user.nombre,
          correo: user.correo,
          userType: UserType.USUARIO_TENANT,
          rol: user.rol,
          permisos: this.normalizeTenantUserPermissions(user.rol as TenantRole, user.permisos),
          tenantId: user.tenant_id,
          tenantNombre: tenantInfo.nombre,
          schemaName: tenantInfo.nombre_esquema,
          creado_en: user.creado_en,
          actualizado_en: user.actualizado_en
        };
      }
      
      throw new Error('Tipo de usuario no soportado');
    } catch (error: any) {
      logger.error(`Error al obtener perfil de usuario: ${error.message}`);
      throw error;
    }
  }
}
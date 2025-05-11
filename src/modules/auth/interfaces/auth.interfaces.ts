/**
 * Resultado de autenticación
 */
export interface AuthResult {
  token: string;
  refreshToken?: string;
  user: {
    id: string;
    nombre: string;
    correo: string;
    userType: UserType;
    permisos?: string[];
    tenantId?: string;
    tenantNombre?: string;
    schemaName?: string;
    rol?: string;
  };
}

/**
 * Tipos de usuario
 */
export enum UserType {
  ADMIN_PLATAFORMA = 'admin_plataforma',
  ADMIN_TENANT = 'admin_tenant',
  USUARIO_TENANT = 'usuario_tenant'
}

/**
 * Permisos para administradores de plataforma
 */
export enum PlatformAdminPermission {
  MANAGE_TENANTS = 'manage_tenants',
  VIEW_TENANTS = 'view_tenants',
  CREATE_TENANT = 'create_tenant',
  UPDATE_TENANT = 'update_tenant',
  DELETE_TENANT = 'delete_tenant',
  MANAGE_ADMINS = 'manage_admins',
  VIEW_ADMINS = 'view_admins'
}

/**
 * Roles para usuarios de tenant
 */
export enum TenantRole {
  ADMIN = 'admin',
  COORDINADOR = 'coordinador',
  VOLUNTARIO = 'voluntario'
}

/**
 * Permisos para usuarios de tenant
 */
export enum TenantPermission {
  MANAGE_EVENTS = 'manage_events',
  VIEW_EVENTS = 'view_events',
  CREATE_EVENT = 'create_event',
  UPDATE_EVENT = 'update_event',
  DELETE_EVENT = 'delete_event',
  MANAGE_VOLUNTEERS = 'manage_volunteers',
  VIEW_VOLUNTEERS = 'view_volunteers',
  MANAGE_REPORTS = 'manage_reports',
  VIEW_REPORTS = 'view_reports'
}

/**
 * Permisos por defecto para cada rol de tenant
 */
export const TENANT_ROLE_PERMISSIONS: Record<TenantRole, string[]> = {
  [TenantRole.ADMIN]: Object.values(TenantPermission),
  [TenantRole.COORDINADOR]: [
    TenantPermission.MANAGE_EVENTS,
    TenantPermission.VIEW_EVENTS,
    TenantPermission.CREATE_EVENT,
    TenantPermission.UPDATE_EVENT,
    TenantPermission.VIEW_VOLUNTEERS
  ],
  [TenantRole.VOLUNTARIO]: [
    TenantPermission.VIEW_EVENTS
  ]
};
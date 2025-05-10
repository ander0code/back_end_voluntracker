/**
 * Tipos de usuario en el sistema
 */
export enum UserType {
  ADMIN_PLATAFORMA = 'admin_plataforma',
  TENANT_USUARIO = 'tenant_usuario'
}

/**
 * Roles de usuarios de tenant
 */
export enum TenantRole {
  ADMIN = 'admin',
  COORDINADOR = 'coordinador',
  VOLUNTARIO = 'voluntario'
}

/**
 * Permisos de administradores de plataforma
 */
export enum PlatformAdminPermission {
  MANAGE_TENANTS = 'manage_tenants',
  VIEW_TENANTS = 'view_tenants',
  MANAGE_SUBSCRIPTIONS = 'manage_subscriptions',
  VIEW_API_USAGE = 'view_api_usage',
  VIEW_GLOBAL_REPORTS = 'view_global_reports'
}

/**
 * Permisos de usuarios de tenant
 */
export enum TenantPermission {
  MANAGE_USERS = 'manage_users',
  VIEW_USERS = 'view_users',
  MANAGE_EVENTS = 'manage_events', 
  VIEW_EVENTS = 'view_events',
  MANAGE_VOLUNTEERS = 'manage_volunteers',
  VIEW_VOLUNTEERS = 'view_volunteers',
  VIEW_REPORTS = 'view_reports'
}

/**
 * Mapa de permisos por rol para usuarios de tenant
 */
export const TENANT_ROLE_PERMISSIONS: Record<TenantRole, string[]> = {
  [TenantRole.ADMIN]: [
    TenantPermission.MANAGE_USERS,
    TenantPermission.VIEW_USERS,
    TenantPermission.MANAGE_EVENTS,
    TenantPermission.VIEW_EVENTS,
    TenantPermission.MANAGE_VOLUNTEERS,
    TenantPermission.VIEW_VOLUNTEERS,
    TenantPermission.VIEW_REPORTS
  ],
  [TenantRole.COORDINADOR]: [
    TenantPermission.VIEW_USERS,
    TenantPermission.MANAGE_EVENTS,
    TenantPermission.VIEW_EVENTS,
    TenantPermission.VIEW_VOLUNTEERS
  ],
  [TenantRole.VOLUNTARIO]: [
    TenantPermission.VIEW_EVENTS
  ]
};

/**
 * Interfaz para el token JWT decodificado
 */
export interface DecodedToken {
  id: string;
  nombre: string;
  correo: string;
  userType: string;
  permisos?: string[];
  tenantId?: string;
  tenantNombre?: string;
  schemaName?: string;
  rol?: string;
}

/**
 * Interfaz para el objeto de usuario autenticado
 */
export interface AuthenticatedUser {
  id: string;
  nombre: string;
  correo: string;
  userType: string;
  permisos: string[];
  tenantId?: string;
  tenantNombre?: string;
  schemaName?: string;
  rol?: string;
}

/**
 * Interfaz para el resultado de autenticación
 */
export interface AuthResult {
  token: string;
  user: {
    id: string;
    nombre: string;
    correo: string;
    userType: string;
    permisos: string[];
    tenantId?: string;
    tenantNombre?: string;
    schemaName?: string;
    rol?: string;
  };
}
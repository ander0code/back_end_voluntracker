
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.7.0
 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
 */
Prisma.prismaVersion = {
  client: "6.7.0",
  engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdministradoresScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  correo: 'correo',
  hash_contrasena: 'hash_contrasena',
  permisos: 'permisos',
  creado_en: 'creado_en',
  actualizado_en: 'actualizado_en'
};

exports.Prisma.OrganizacionesScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  nombre_esquema: 'nombre_esquema',
  subdominio: 'subdominio',
  marca: 'marca',
  creado_en: 'creado_en',
  actualizado_en: 'actualizado_en'
};

exports.Prisma.SuscripcionesScalarFieldEnum = {
  id: 'id',
  organizacion_id: 'organizacion_id',
  plan: 'plan',
  fecha_inicio: 'fecha_inicio',
  fecha_proximo_pago: 'fecha_proximo_pago',
  estado: 'estado',
  creado_en: 'creado_en',
  actualizado_en: 'actualizado_en'
};

exports.Prisma.Tenant_usuariosScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  nombre: 'nombre',
  correo: 'correo',
  hash_contrasena: 'hash_contrasena',
  rol: 'rol',
  permisos: 'permisos',
  creado_en: 'creado_en',
  actualizado_en: 'actualizado_en'
};

exports.Prisma.VoluntariosScalarFieldEnum = {
  id: 'id',
  nombre_completo: 'nombre_completo',
  dni: 'dni',
  correo: 'correo',
  telefono: 'telefono',
  area: 'area',
  estado: 'estado',
  historial: 'historial',
  registrado_en: 'registrado_en',
  coordinador_id: 'coordinador_id'
};

exports.Prisma.EventosScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  nombre: 'nombre',
  descripcion: 'descripcion',
  inicio: 'inicio',
  fecha_inicio: 'fecha_inicio',
  fin: 'fin',
  fecha_fin: 'fecha_fin',
  ubicacion: 'ubicacion',
  tipo: 'tipo',
  estado: 'estado',
  coordinador_id: 'coordinador_id',
  capacidad: 'capacidad',
  creado_en: 'creado_en',
  actualizado_en: 'actualizado_en',
  requisitos: 'requisitos'
};

exports.Prisma.InscripcionesScalarFieldEnum = {
  id: 'id',
  evento_id: 'evento_id',
  voluntario_id: 'voluntario_id',
  estado: 'estado',
  fecha_inscripcion: 'fecha_inscripcion',
  creado_en: 'creado_en',
  actualizado_en: 'actualizado_en'
};

exports.Prisma.AsistenciaScalarFieldEnum = {
  id: 'id',
  inscripcion_id: 'inscripcion_id',
  estado: 'estado',
  marcado_en: 'marcado_en',
  coordinador_id: 'coordinador_id'
};

exports.Prisma.CertificadosScalarFieldEnum = {
  id: 'id',
  voluntario_id: 'voluntario_id',
  evento_id: 'evento_id',
  url_pdf: 'url_pdf',
  emitido_en: 'emitido_en',
  coordinador_id: 'coordinador_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  administradores: 'administradores',
  organizaciones: 'organizaciones',
  suscripciones: 'suscripciones',
  tenant_usuarios: 'tenant_usuarios',
  voluntarios: 'voluntarios',
  eventos: 'eventos',
  inscripciones: 'inscripciones',
  asistencia: 'asistencia',
  certificados: 'certificados'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

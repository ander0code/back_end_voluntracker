
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model administradores
 * Administradores de la plataforma
 */
export type administradores = $Result.DefaultSelection<Prisma.$administradoresPayload>
/**
 * Model organizaciones
 * Organizaciones (tenants)
 */
export type organizaciones = $Result.DefaultSelection<Prisma.$organizacionesPayload>
/**
 * Model suscripciones
 * 
 */
export type suscripciones = $Result.DefaultSelection<Prisma.$suscripcionesPayload>
/**
 * Model tenant_usuarios
 * Usuarios de tenant (centralizados)
 */
export type tenant_usuarios = $Result.DefaultSelection<Prisma.$tenant_usuariosPayload>
/**
 * Model voluntarios
 * 
 */
export type voluntarios = $Result.DefaultSelection<Prisma.$voluntariosPayload>
/**
 * Model eventos
 * 
 */
export type eventos = $Result.DefaultSelection<Prisma.$eventosPayload>
/**
 * Model inscripciones
 * 
 */
export type inscripciones = $Result.DefaultSelection<Prisma.$inscripcionesPayload>
/**
 * Model asistencia
 * 
 */
export type asistencia = $Result.DefaultSelection<Prisma.$asistenciaPayload>
/**
 * Model certificados
 * 
 */
export type certificados = $Result.DefaultSelection<Prisma.$certificadosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administradores
 * const administradores = await prisma.administradores.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Administradores
   * const administradores = await prisma.administradores.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.administradores`: Exposes CRUD operations for the **administradores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradores
    * const administradores = await prisma.administradores.findMany()
    * ```
    */
  get administradores(): Prisma.administradoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizaciones`: Exposes CRUD operations for the **organizaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizaciones
    * const organizaciones = await prisma.organizaciones.findMany()
    * ```
    */
  get organizaciones(): Prisma.organizacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suscripciones`: Exposes CRUD operations for the **suscripciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suscripciones
    * const suscripciones = await prisma.suscripciones.findMany()
    * ```
    */
  get suscripciones(): Prisma.suscripcionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant_usuarios`: Exposes CRUD operations for the **tenant_usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenant_usuarios
    * const tenant_usuarios = await prisma.tenant_usuarios.findMany()
    * ```
    */
  get tenant_usuarios(): Prisma.tenant_usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voluntarios`: Exposes CRUD operations for the **voluntarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voluntarios
    * const voluntarios = await prisma.voluntarios.findMany()
    * ```
    */
  get voluntarios(): Prisma.voluntariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventos`: Exposes CRUD operations for the **eventos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.eventos.findMany()
    * ```
    */
  get eventos(): Prisma.eventosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscripciones`: Exposes CRUD operations for the **inscripciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscripciones
    * const inscripciones = await prisma.inscripciones.findMany()
    * ```
    */
  get inscripciones(): Prisma.inscripcionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asistencia`: Exposes CRUD operations for the **asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.asistenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificados`: Exposes CRUD operations for the **certificados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificados
    * const certificados = await prisma.certificados.findMany()
    * ```
    */
  get certificados(): Prisma.certificadosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "administradores" | "organizaciones" | "suscripciones" | "tenant_usuarios" | "voluntarios" | "eventos" | "inscripciones" | "asistencia" | "certificados"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      administradores: {
        payload: Prisma.$administradoresPayload<ExtArgs>
        fields: Prisma.administradoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.administradoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.administradoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          findFirst: {
            args: Prisma.administradoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.administradoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          findMany: {
            args: Prisma.administradoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>[]
          }
          create: {
            args: Prisma.administradoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          createMany: {
            args: Prisma.administradoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.administradoresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>[]
          }
          delete: {
            args: Prisma.administradoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          update: {
            args: Prisma.administradoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          deleteMany: {
            args: Prisma.administradoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.administradoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.administradoresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>[]
          }
          upsert: {
            args: Prisma.administradoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradoresPayload>
          }
          aggregate: {
            args: Prisma.AdministradoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministradores>
          }
          groupBy: {
            args: Prisma.administradoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.administradoresCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradoresCountAggregateOutputType> | number
          }
        }
      }
      organizaciones: {
        payload: Prisma.$organizacionesPayload<ExtArgs>
        fields: Prisma.organizacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>
          }
          findFirst: {
            args: Prisma.organizacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>
          }
          findMany: {
            args: Prisma.organizacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>[]
          }
          create: {
            args: Prisma.organizacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>
          }
          createMany: {
            args: Prisma.organizacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.organizacionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>[]
          }
          delete: {
            args: Prisma.organizacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>
          }
          update: {
            args: Prisma.organizacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>
          }
          deleteMany: {
            args: Prisma.organizacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.organizacionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>[]
          }
          upsert: {
            args: Prisma.organizacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizacionesPayload>
          }
          aggregate: {
            args: Prisma.OrganizacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizaciones>
          }
          groupBy: {
            args: Prisma.organizacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizacionesCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizacionesCountAggregateOutputType> | number
          }
        }
      }
      suscripciones: {
        payload: Prisma.$suscripcionesPayload<ExtArgs>
        fields: Prisma.suscripcionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.suscripcionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.suscripcionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>
          }
          findFirst: {
            args: Prisma.suscripcionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.suscripcionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>
          }
          findMany: {
            args: Prisma.suscripcionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>[]
          }
          create: {
            args: Prisma.suscripcionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>
          }
          createMany: {
            args: Prisma.suscripcionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.suscripcionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>[]
          }
          delete: {
            args: Prisma.suscripcionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>
          }
          update: {
            args: Prisma.suscripcionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>
          }
          deleteMany: {
            args: Prisma.suscripcionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.suscripcionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.suscripcionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>[]
          }
          upsert: {
            args: Prisma.suscripcionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suscripcionesPayload>
          }
          aggregate: {
            args: Prisma.SuscripcionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuscripciones>
          }
          groupBy: {
            args: Prisma.suscripcionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuscripcionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.suscripcionesCountArgs<ExtArgs>
            result: $Utils.Optional<SuscripcionesCountAggregateOutputType> | number
          }
        }
      }
      tenant_usuarios: {
        payload: Prisma.$tenant_usuariosPayload<ExtArgs>
        fields: Prisma.tenant_usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tenant_usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tenant_usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>
          }
          findFirst: {
            args: Prisma.tenant_usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tenant_usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>
          }
          findMany: {
            args: Prisma.tenant_usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>[]
          }
          create: {
            args: Prisma.tenant_usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>
          }
          createMany: {
            args: Prisma.tenant_usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tenant_usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>[]
          }
          delete: {
            args: Prisma.tenant_usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>
          }
          update: {
            args: Prisma.tenant_usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>
          }
          deleteMany: {
            args: Prisma.tenant_usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tenant_usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tenant_usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>[]
          }
          upsert: {
            args: Prisma.tenant_usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenant_usuariosPayload>
          }
          aggregate: {
            args: Prisma.Tenant_usuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant_usuarios>
          }
          groupBy: {
            args: Prisma.tenant_usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tenant_usuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tenant_usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<Tenant_usuariosCountAggregateOutputType> | number
          }
        }
      }
      voluntarios: {
        payload: Prisma.$voluntariosPayload<ExtArgs>
        fields: Prisma.voluntariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.voluntariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.voluntariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          findFirst: {
            args: Prisma.voluntariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.voluntariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          findMany: {
            args: Prisma.voluntariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>[]
          }
          create: {
            args: Prisma.voluntariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          createMany: {
            args: Prisma.voluntariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.voluntariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>[]
          }
          delete: {
            args: Prisma.voluntariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          update: {
            args: Prisma.voluntariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          deleteMany: {
            args: Prisma.voluntariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.voluntariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.voluntariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>[]
          }
          upsert: {
            args: Prisma.voluntariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$voluntariosPayload>
          }
          aggregate: {
            args: Prisma.VoluntariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoluntarios>
          }
          groupBy: {
            args: Prisma.voluntariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoluntariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.voluntariosCountArgs<ExtArgs>
            result: $Utils.Optional<VoluntariosCountAggregateOutputType> | number
          }
        }
      }
      eventos: {
        payload: Prisma.$eventosPayload<ExtArgs>
        fields: Prisma.eventosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findFirst: {
            args: Prisma.eventosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          findMany: {
            args: Prisma.eventosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          create: {
            args: Prisma.eventosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          createMany: {
            args: Prisma.eventosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          delete: {
            args: Prisma.eventosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          update: {
            args: Prisma.eventosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          deleteMany: {
            args: Prisma.eventosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>[]
          }
          upsert: {
            args: Prisma.eventosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventosPayload>
          }
          aggregate: {
            args: Prisma.EventosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventos>
          }
          groupBy: {
            args: Prisma.eventosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventosGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventosCountArgs<ExtArgs>
            result: $Utils.Optional<EventosCountAggregateOutputType> | number
          }
        }
      }
      inscripciones: {
        payload: Prisma.$inscripcionesPayload<ExtArgs>
        fields: Prisma.inscripcionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inscripcionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inscripcionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          findFirst: {
            args: Prisma.inscripcionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inscripcionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          findMany: {
            args: Prisma.inscripcionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>[]
          }
          create: {
            args: Prisma.inscripcionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          createMany: {
            args: Prisma.inscripcionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inscripcionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>[]
          }
          delete: {
            args: Prisma.inscripcionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          update: {
            args: Prisma.inscripcionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          deleteMany: {
            args: Prisma.inscripcionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inscripcionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inscripcionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>[]
          }
          upsert: {
            args: Prisma.inscripcionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          aggregate: {
            args: Prisma.InscripcionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripciones>
          }
          groupBy: {
            args: Prisma.inscripcionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.inscripcionesCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionesCountAggregateOutputType> | number
          }
        }
      }
      asistencia: {
        payload: Prisma.$asistenciaPayload<ExtArgs>
        fields: Prisma.asistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          findFirst: {
            args: Prisma.asistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          findMany: {
            args: Prisma.asistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>[]
          }
          create: {
            args: Prisma.asistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          createMany: {
            args: Prisma.asistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.asistenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>[]
          }
          delete: {
            args: Prisma.asistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          update: {
            args: Prisma.asistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          deleteMany: {
            args: Prisma.asistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.asistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.asistenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>[]
          }
          upsert: {
            args: Prisma.asistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.asistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.asistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
          }
        }
      }
      certificados: {
        payload: Prisma.$certificadosPayload<ExtArgs>
        fields: Prisma.certificadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.certificadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.certificadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>
          }
          findFirst: {
            args: Prisma.certificadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.certificadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>
          }
          findMany: {
            args: Prisma.certificadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>[]
          }
          create: {
            args: Prisma.certificadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>
          }
          createMany: {
            args: Prisma.certificadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.certificadosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>[]
          }
          delete: {
            args: Prisma.certificadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>
          }
          update: {
            args: Prisma.certificadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>
          }
          deleteMany: {
            args: Prisma.certificadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.certificadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.certificadosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>[]
          }
          upsert: {
            args: Prisma.certificadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificadosPayload>
          }
          aggregate: {
            args: Prisma.CertificadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificados>
          }
          groupBy: {
            args: Prisma.certificadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.certificadosCountArgs<ExtArgs>
            result: $Utils.Optional<CertificadosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    administradores?: administradoresOmit
    organizaciones?: organizacionesOmit
    suscripciones?: suscripcionesOmit
    tenant_usuarios?: tenant_usuariosOmit
    voluntarios?: voluntariosOmit
    eventos?: eventosOmit
    inscripciones?: inscripcionesOmit
    asistencia?: asistenciaOmit
    certificados?: certificadosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizacionesCountOutputType
   */

  export type OrganizacionesCountOutputType = {
    suscripciones: number
    tenant_usuarios: number
  }

  export type OrganizacionesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suscripciones?: boolean | OrganizacionesCountOutputTypeCountSuscripcionesArgs
    tenant_usuarios?: boolean | OrganizacionesCountOutputTypeCountTenant_usuariosArgs
  }

  // Custom InputTypes
  /**
   * OrganizacionesCountOutputType without action
   */
  export type OrganizacionesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizacionesCountOutputType
     */
    select?: OrganizacionesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizacionesCountOutputType without action
   */
  export type OrganizacionesCountOutputTypeCountSuscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suscripcionesWhereInput
  }

  /**
   * OrganizacionesCountOutputType without action
   */
  export type OrganizacionesCountOutputTypeCountTenant_usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenant_usuariosWhereInput
  }


  /**
   * Count Type VoluntariosCountOutputType
   */

  export type VoluntariosCountOutputType = {
    inscripciones: number
    certificados: number
  }

  export type VoluntariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | VoluntariosCountOutputTypeCountInscripcionesArgs
    certificados?: boolean | VoluntariosCountOutputTypeCountCertificadosArgs
  }

  // Custom InputTypes
  /**
   * VoluntariosCountOutputType without action
   */
  export type VoluntariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoluntariosCountOutputType
     */
    select?: VoluntariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoluntariosCountOutputType without action
   */
  export type VoluntariosCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscripcionesWhereInput
  }

  /**
   * VoluntariosCountOutputType without action
   */
  export type VoluntariosCountOutputTypeCountCertificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: certificadosWhereInput
  }


  /**
   * Count Type EventosCountOutputType
   */

  export type EventosCountOutputType = {
    inscripciones: number
    certificados: number
  }

  export type EventosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | EventosCountOutputTypeCountInscripcionesArgs
    certificados?: boolean | EventosCountOutputTypeCountCertificadosArgs
  }

  // Custom InputTypes
  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventosCountOutputType
     */
    select?: EventosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscripcionesWhereInput
  }

  /**
   * EventosCountOutputType without action
   */
  export type EventosCountOutputTypeCountCertificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: certificadosWhereInput
  }


  /**
   * Count Type InscripcionesCountOutputType
   */

  export type InscripcionesCountOutputType = {
    asistencia: number
  }

  export type InscripcionesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencia?: boolean | InscripcionesCountOutputTypeCountAsistenciaArgs
  }

  // Custom InputTypes
  /**
   * InscripcionesCountOutputType without action
   */
  export type InscripcionesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionesCountOutputType
     */
    select?: InscripcionesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InscripcionesCountOutputType without action
   */
  export type InscripcionesCountOutputTypeCountAsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model administradores
   */

  export type AggregateAdministradores = {
    _count: AdministradoresCountAggregateOutputType | null
    _min: AdministradoresMinAggregateOutputType | null
    _max: AdministradoresMaxAggregateOutputType | null
  }

  export type AdministradoresMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    hash_contrasena: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type AdministradoresMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    correo: string | null
    hash_contrasena: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type AdministradoresCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    hash_contrasena: number
    permisos: number
    creado_en: number
    actualizado_en: number
    _all: number
  }


  export type AdministradoresMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    hash_contrasena?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type AdministradoresMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    hash_contrasena?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type AdministradoresCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    hash_contrasena?: true
    permisos?: true
    creado_en?: true
    actualizado_en?: true
    _all?: true
  }

  export type AdministradoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administradores to aggregate.
     */
    where?: administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradores to fetch.
     */
    orderBy?: administradoresOrderByWithRelationInput | administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned administradores
    **/
    _count?: true | AdministradoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradoresMaxAggregateInputType
  }

  export type GetAdministradoresAggregateType<T extends AdministradoresAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministradores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministradores[P]>
      : GetScalarType<T[P], AggregateAdministradores[P]>
  }




  export type administradoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: administradoresWhereInput
    orderBy?: administradoresOrderByWithAggregationInput | administradoresOrderByWithAggregationInput[]
    by: AdministradoresScalarFieldEnum[] | AdministradoresScalarFieldEnum
    having?: administradoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradoresCountAggregateInputType | true
    _min?: AdministradoresMinAggregateInputType
    _max?: AdministradoresMaxAggregateInputType
  }

  export type AdministradoresGroupByOutputType = {
    id: string
    nombre: string
    correo: string
    hash_contrasena: string
    permisos: JsonValue | null
    creado_en: Date
    actualizado_en: Date
    _count: AdministradoresCountAggregateOutputType | null
    _min: AdministradoresMinAggregateOutputType | null
    _max: AdministradoresMaxAggregateOutputType | null
  }

  type GetAdministradoresGroupByPayload<T extends administradoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradoresGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradoresGroupByOutputType[P]>
        }
      >
    >


  export type administradoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    hash_contrasena?: boolean
    permisos?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["administradores"]>

  export type administradoresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    hash_contrasena?: boolean
    permisos?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["administradores"]>

  export type administradoresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    hash_contrasena?: boolean
    permisos?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["administradores"]>

  export type administradoresSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    hash_contrasena?: boolean
    permisos?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }

  export type administradoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "correo" | "hash_contrasena" | "permisos" | "creado_en" | "actualizado_en", ExtArgs["result"]["administradores"]>

  export type $administradoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "administradores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      correo: string
      hash_contrasena: string
      permisos: Prisma.JsonValue | null
      creado_en: Date
      actualizado_en: Date
    }, ExtArgs["result"]["administradores"]>
    composites: {}
  }

  type administradoresGetPayload<S extends boolean | null | undefined | administradoresDefaultArgs> = $Result.GetResult<Prisma.$administradoresPayload, S>

  type administradoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<administradoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradoresCountAggregateInputType | true
    }

  export interface administradoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['administradores'], meta: { name: 'administradores' } }
    /**
     * Find zero or one Administradores that matches the filter.
     * @param {administradoresFindUniqueArgs} args - Arguments to find a Administradores
     * @example
     * // Get one Administradores
     * const administradores = await prisma.administradores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends administradoresFindUniqueArgs>(args: SelectSubset<T, administradoresFindUniqueArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administradores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {administradoresFindUniqueOrThrowArgs} args - Arguments to find a Administradores
     * @example
     * // Get one Administradores
     * const administradores = await prisma.administradores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends administradoresFindUniqueOrThrowArgs>(args: SelectSubset<T, administradoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresFindFirstArgs} args - Arguments to find a Administradores
     * @example
     * // Get one Administradores
     * const administradores = await prisma.administradores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends administradoresFindFirstArgs>(args?: SelectSubset<T, administradoresFindFirstArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administradores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresFindFirstOrThrowArgs} args - Arguments to find a Administradores
     * @example
     * // Get one Administradores
     * const administradores = await prisma.administradores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends administradoresFindFirstOrThrowArgs>(args?: SelectSubset<T, administradoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradores
     * const administradores = await prisma.administradores.findMany()
     * 
     * // Get first 10 Administradores
     * const administradores = await prisma.administradores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administradoresWithIdOnly = await prisma.administradores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends administradoresFindManyArgs>(args?: SelectSubset<T, administradoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administradores.
     * @param {administradoresCreateArgs} args - Arguments to create a Administradores.
     * @example
     * // Create one Administradores
     * const Administradores = await prisma.administradores.create({
     *   data: {
     *     // ... data to create a Administradores
     *   }
     * })
     * 
     */
    create<T extends administradoresCreateArgs>(args: SelectSubset<T, administradoresCreateArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradores.
     * @param {administradoresCreateManyArgs} args - Arguments to create many Administradores.
     * @example
     * // Create many Administradores
     * const administradores = await prisma.administradores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends administradoresCreateManyArgs>(args?: SelectSubset<T, administradoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradores and returns the data saved in the database.
     * @param {administradoresCreateManyAndReturnArgs} args - Arguments to create many Administradores.
     * @example
     * // Create many Administradores
     * const administradores = await prisma.administradores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradores and only return the `id`
     * const administradoresWithIdOnly = await prisma.administradores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends administradoresCreateManyAndReturnArgs>(args?: SelectSubset<T, administradoresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administradores.
     * @param {administradoresDeleteArgs} args - Arguments to delete one Administradores.
     * @example
     * // Delete one Administradores
     * const Administradores = await prisma.administradores.delete({
     *   where: {
     *     // ... filter to delete one Administradores
     *   }
     * })
     * 
     */
    delete<T extends administradoresDeleteArgs>(args: SelectSubset<T, administradoresDeleteArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administradores.
     * @param {administradoresUpdateArgs} args - Arguments to update one Administradores.
     * @example
     * // Update one Administradores
     * const administradores = await prisma.administradores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends administradoresUpdateArgs>(args: SelectSubset<T, administradoresUpdateArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradores.
     * @param {administradoresDeleteManyArgs} args - Arguments to filter Administradores to delete.
     * @example
     * // Delete a few Administradores
     * const { count } = await prisma.administradores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends administradoresDeleteManyArgs>(args?: SelectSubset<T, administradoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradores
     * const administradores = await prisma.administradores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends administradoresUpdateManyArgs>(args: SelectSubset<T, administradoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradores and returns the data updated in the database.
     * @param {administradoresUpdateManyAndReturnArgs} args - Arguments to update many Administradores.
     * @example
     * // Update many Administradores
     * const administradores = await prisma.administradores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradores and only return the `id`
     * const administradoresWithIdOnly = await prisma.administradores.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends administradoresUpdateManyAndReturnArgs>(args: SelectSubset<T, administradoresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administradores.
     * @param {administradoresUpsertArgs} args - Arguments to update or create a Administradores.
     * @example
     * // Update or create a Administradores
     * const administradores = await prisma.administradores.upsert({
     *   create: {
     *     // ... data to create a Administradores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administradores we want to update
     *   }
     * })
     */
    upsert<T extends administradoresUpsertArgs>(args: SelectSubset<T, administradoresUpsertArgs<ExtArgs>>): Prisma__administradoresClient<$Result.GetResult<Prisma.$administradoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresCountArgs} args - Arguments to filter Administradores to count.
     * @example
     * // Count the number of Administradores
     * const count = await prisma.administradores.count({
     *   where: {
     *     // ... the filter for the Administradores we want to count
     *   }
     * })
    **/
    count<T extends administradoresCountArgs>(
      args?: Subset<T, administradoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministradoresAggregateArgs>(args: Subset<T, AdministradoresAggregateArgs>): Prisma.PrismaPromise<GetAdministradoresAggregateType<T>>

    /**
     * Group by Administradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends administradoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: administradoresGroupByArgs['orderBy'] }
        : { orderBy?: administradoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, administradoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the administradores model
   */
  readonly fields: administradoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for administradores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__administradoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the administradores model
   */
  interface administradoresFieldRefs {
    readonly id: FieldRef<"administradores", 'String'>
    readonly nombre: FieldRef<"administradores", 'String'>
    readonly correo: FieldRef<"administradores", 'String'>
    readonly hash_contrasena: FieldRef<"administradores", 'String'>
    readonly permisos: FieldRef<"administradores", 'Json'>
    readonly creado_en: FieldRef<"administradores", 'DateTime'>
    readonly actualizado_en: FieldRef<"administradores", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * administradores findUnique
   */
  export type administradoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where: administradoresWhereUniqueInput
  }

  /**
   * administradores findUniqueOrThrow
   */
  export type administradoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where: administradoresWhereUniqueInput
  }

  /**
   * administradores findFirst
   */
  export type administradoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where?: administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradores to fetch.
     */
    orderBy?: administradoresOrderByWithRelationInput | administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administradores.
     */
    cursor?: administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administradores.
     */
    distinct?: AdministradoresScalarFieldEnum | AdministradoresScalarFieldEnum[]
  }

  /**
   * administradores findFirstOrThrow
   */
  export type administradoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where?: administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradores to fetch.
     */
    orderBy?: administradoresOrderByWithRelationInput | administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administradores.
     */
    cursor?: administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administradores.
     */
    distinct?: AdministradoresScalarFieldEnum | AdministradoresScalarFieldEnum[]
  }

  /**
   * administradores findMany
   */
  export type administradoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Filter, which administradores to fetch.
     */
    where?: administradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradores to fetch.
     */
    orderBy?: administradoresOrderByWithRelationInput | administradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing administradores.
     */
    cursor?: administradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradores.
     */
    skip?: number
    distinct?: AdministradoresScalarFieldEnum | AdministradoresScalarFieldEnum[]
  }

  /**
   * administradores create
   */
  export type administradoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * The data needed to create a administradores.
     */
    data: XOR<administradoresCreateInput, administradoresUncheckedCreateInput>
  }

  /**
   * administradores createMany
   */
  export type administradoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many administradores.
     */
    data: administradoresCreateManyInput | administradoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * administradores createManyAndReturn
   */
  export type administradoresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * The data used to create many administradores.
     */
    data: administradoresCreateManyInput | administradoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * administradores update
   */
  export type administradoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * The data needed to update a administradores.
     */
    data: XOR<administradoresUpdateInput, administradoresUncheckedUpdateInput>
    /**
     * Choose, which administradores to update.
     */
    where: administradoresWhereUniqueInput
  }

  /**
   * administradores updateMany
   */
  export type administradoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update administradores.
     */
    data: XOR<administradoresUpdateManyMutationInput, administradoresUncheckedUpdateManyInput>
    /**
     * Filter which administradores to update
     */
    where?: administradoresWhereInput
    /**
     * Limit how many administradores to update.
     */
    limit?: number
  }

  /**
   * administradores updateManyAndReturn
   */
  export type administradoresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * The data used to update administradores.
     */
    data: XOR<administradoresUpdateManyMutationInput, administradoresUncheckedUpdateManyInput>
    /**
     * Filter which administradores to update
     */
    where?: administradoresWhereInput
    /**
     * Limit how many administradores to update.
     */
    limit?: number
  }

  /**
   * administradores upsert
   */
  export type administradoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * The filter to search for the administradores to update in case it exists.
     */
    where: administradoresWhereUniqueInput
    /**
     * In case the administradores found by the `where` argument doesn't exist, create a new administradores with this data.
     */
    create: XOR<administradoresCreateInput, administradoresUncheckedCreateInput>
    /**
     * In case the administradores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<administradoresUpdateInput, administradoresUncheckedUpdateInput>
  }

  /**
   * administradores delete
   */
  export type administradoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
    /**
     * Filter which administradores to delete.
     */
    where: administradoresWhereUniqueInput
  }

  /**
   * administradores deleteMany
   */
  export type administradoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administradores to delete
     */
    where?: administradoresWhereInput
    /**
     * Limit how many administradores to delete.
     */
    limit?: number
  }

  /**
   * administradores without action
   */
  export type administradoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administradores
     */
    select?: administradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administradores
     */
    omit?: administradoresOmit<ExtArgs> | null
  }


  /**
   * Model organizaciones
   */

  export type AggregateOrganizaciones = {
    _count: OrganizacionesCountAggregateOutputType | null
    _min: OrganizacionesMinAggregateOutputType | null
    _max: OrganizacionesMaxAggregateOutputType | null
  }

  export type OrganizacionesMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    nombre_esquema: string | null
    subdominio: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type OrganizacionesMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    nombre_esquema: string | null
    subdominio: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type OrganizacionesCountAggregateOutputType = {
    id: number
    nombre: number
    nombre_esquema: number
    subdominio: number
    marca: number
    creado_en: number
    actualizado_en: number
    _all: number
  }


  export type OrganizacionesMinAggregateInputType = {
    id?: true
    nombre?: true
    nombre_esquema?: true
    subdominio?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type OrganizacionesMaxAggregateInputType = {
    id?: true
    nombre?: true
    nombre_esquema?: true
    subdominio?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type OrganizacionesCountAggregateInputType = {
    id?: true
    nombre?: true
    nombre_esquema?: true
    subdominio?: true
    marca?: true
    creado_en?: true
    actualizado_en?: true
    _all?: true
  }

  export type OrganizacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizaciones to aggregate.
     */
    where?: organizacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizaciones to fetch.
     */
    orderBy?: organizacionesOrderByWithRelationInput | organizacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizaciones
    **/
    _count?: true | OrganizacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizacionesMaxAggregateInputType
  }

  export type GetOrganizacionesAggregateType<T extends OrganizacionesAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizaciones[P]>
      : GetScalarType<T[P], AggregateOrganizaciones[P]>
  }




  export type organizacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizacionesWhereInput
    orderBy?: organizacionesOrderByWithAggregationInput | organizacionesOrderByWithAggregationInput[]
    by: OrganizacionesScalarFieldEnum[] | OrganizacionesScalarFieldEnum
    having?: organizacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizacionesCountAggregateInputType | true
    _min?: OrganizacionesMinAggregateInputType
    _max?: OrganizacionesMaxAggregateInputType
  }

  export type OrganizacionesGroupByOutputType = {
    id: string
    nombre: string
    nombre_esquema: string
    subdominio: string | null
    marca: JsonValue | null
    creado_en: Date
    actualizado_en: Date
    _count: OrganizacionesCountAggregateOutputType | null
    _min: OrganizacionesMinAggregateOutputType | null
    _max: OrganizacionesMaxAggregateOutputType | null
  }

  type GetOrganizacionesGroupByPayload<T extends organizacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizacionesGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizacionesGroupByOutputType[P]>
        }
      >
    >


  export type organizacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombre_esquema?: boolean
    subdominio?: boolean
    marca?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    suscripciones?: boolean | organizaciones$suscripcionesArgs<ExtArgs>
    tenant_usuarios?: boolean | organizaciones$tenant_usuariosArgs<ExtArgs>
    _count?: boolean | OrganizacionesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizaciones"]>

  export type organizacionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombre_esquema?: boolean
    subdominio?: boolean
    marca?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["organizaciones"]>

  export type organizacionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    nombre_esquema?: boolean
    subdominio?: boolean
    marca?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }, ExtArgs["result"]["organizaciones"]>

  export type organizacionesSelectScalar = {
    id?: boolean
    nombre?: boolean
    nombre_esquema?: boolean
    subdominio?: boolean
    marca?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }

  export type organizacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "nombre_esquema" | "subdominio" | "marca" | "creado_en" | "actualizado_en", ExtArgs["result"]["organizaciones"]>
  export type organizacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suscripciones?: boolean | organizaciones$suscripcionesArgs<ExtArgs>
    tenant_usuarios?: boolean | organizaciones$tenant_usuariosArgs<ExtArgs>
    _count?: boolean | OrganizacionesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type organizacionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type organizacionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $organizacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organizaciones"
    objects: {
      suscripciones: Prisma.$suscripcionesPayload<ExtArgs>[]
      tenant_usuarios: Prisma.$tenant_usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      nombre_esquema: string
      subdominio: string | null
      marca: Prisma.JsonValue | null
      creado_en: Date
      actualizado_en: Date
    }, ExtArgs["result"]["organizaciones"]>
    composites: {}
  }

  type organizacionesGetPayload<S extends boolean | null | undefined | organizacionesDefaultArgs> = $Result.GetResult<Prisma.$organizacionesPayload, S>

  type organizacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizacionesCountAggregateInputType | true
    }

  export interface organizacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organizaciones'], meta: { name: 'organizaciones' } }
    /**
     * Find zero or one Organizaciones that matches the filter.
     * @param {organizacionesFindUniqueArgs} args - Arguments to find a Organizaciones
     * @example
     * // Get one Organizaciones
     * const organizaciones = await prisma.organizaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizacionesFindUniqueArgs>(args: SelectSubset<T, organizacionesFindUniqueArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizacionesFindUniqueOrThrowArgs} args - Arguments to find a Organizaciones
     * @example
     * // Get one Organizaciones
     * const organizaciones = await prisma.organizaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, organizacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacionesFindFirstArgs} args - Arguments to find a Organizaciones
     * @example
     * // Get one Organizaciones
     * const organizaciones = await prisma.organizaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizacionesFindFirstArgs>(args?: SelectSubset<T, organizacionesFindFirstArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacionesFindFirstOrThrowArgs} args - Arguments to find a Organizaciones
     * @example
     * // Get one Organizaciones
     * const organizaciones = await prisma.organizaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, organizacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizaciones
     * const organizaciones = await prisma.organizaciones.findMany()
     * 
     * // Get first 10 Organizaciones
     * const organizaciones = await prisma.organizaciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizacionesWithIdOnly = await prisma.organizaciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends organizacionesFindManyArgs>(args?: SelectSubset<T, organizacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizaciones.
     * @param {organizacionesCreateArgs} args - Arguments to create a Organizaciones.
     * @example
     * // Create one Organizaciones
     * const Organizaciones = await prisma.organizaciones.create({
     *   data: {
     *     // ... data to create a Organizaciones
     *   }
     * })
     * 
     */
    create<T extends organizacionesCreateArgs>(args: SelectSubset<T, organizacionesCreateArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizaciones.
     * @param {organizacionesCreateManyArgs} args - Arguments to create many Organizaciones.
     * @example
     * // Create many Organizaciones
     * const organizaciones = await prisma.organizaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizacionesCreateManyArgs>(args?: SelectSubset<T, organizacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizaciones and returns the data saved in the database.
     * @param {organizacionesCreateManyAndReturnArgs} args - Arguments to create many Organizaciones.
     * @example
     * // Create many Organizaciones
     * const organizaciones = await prisma.organizaciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizaciones and only return the `id`
     * const organizacionesWithIdOnly = await prisma.organizaciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends organizacionesCreateManyAndReturnArgs>(args?: SelectSubset<T, organizacionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organizaciones.
     * @param {organizacionesDeleteArgs} args - Arguments to delete one Organizaciones.
     * @example
     * // Delete one Organizaciones
     * const Organizaciones = await prisma.organizaciones.delete({
     *   where: {
     *     // ... filter to delete one Organizaciones
     *   }
     * })
     * 
     */
    delete<T extends organizacionesDeleteArgs>(args: SelectSubset<T, organizacionesDeleteArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizaciones.
     * @param {organizacionesUpdateArgs} args - Arguments to update one Organizaciones.
     * @example
     * // Update one Organizaciones
     * const organizaciones = await prisma.organizaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizacionesUpdateArgs>(args: SelectSubset<T, organizacionesUpdateArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizaciones.
     * @param {organizacionesDeleteManyArgs} args - Arguments to filter Organizaciones to delete.
     * @example
     * // Delete a few Organizaciones
     * const { count } = await prisma.organizaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizacionesDeleteManyArgs>(args?: SelectSubset<T, organizacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizaciones
     * const organizaciones = await prisma.organizaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizacionesUpdateManyArgs>(args: SelectSubset<T, organizacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizaciones and returns the data updated in the database.
     * @param {organizacionesUpdateManyAndReturnArgs} args - Arguments to update many Organizaciones.
     * @example
     * // Update many Organizaciones
     * const organizaciones = await prisma.organizaciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizaciones and only return the `id`
     * const organizacionesWithIdOnly = await prisma.organizaciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends organizacionesUpdateManyAndReturnArgs>(args: SelectSubset<T, organizacionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organizaciones.
     * @param {organizacionesUpsertArgs} args - Arguments to update or create a Organizaciones.
     * @example
     * // Update or create a Organizaciones
     * const organizaciones = await prisma.organizaciones.upsert({
     *   create: {
     *     // ... data to create a Organizaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizaciones we want to update
     *   }
     * })
     */
    upsert<T extends organizacionesUpsertArgs>(args: SelectSubset<T, organizacionesUpsertArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacionesCountArgs} args - Arguments to filter Organizaciones to count.
     * @example
     * // Count the number of Organizaciones
     * const count = await prisma.organizaciones.count({
     *   where: {
     *     // ... the filter for the Organizaciones we want to count
     *   }
     * })
    **/
    count<T extends organizacionesCountArgs>(
      args?: Subset<T, organizacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizacionesAggregateArgs>(args: Subset<T, OrganizacionesAggregateArgs>): Prisma.PrismaPromise<GetOrganizacionesAggregateType<T>>

    /**
     * Group by Organizaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizacionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends organizacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizacionesGroupByArgs['orderBy'] }
        : { orderBy?: organizacionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organizaciones model
   */
  readonly fields: organizacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organizaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suscripciones<T extends organizaciones$suscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, organizaciones$suscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenant_usuarios<T extends organizaciones$tenant_usuariosArgs<ExtArgs> = {}>(args?: Subset<T, organizaciones$tenant_usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organizaciones model
   */
  interface organizacionesFieldRefs {
    readonly id: FieldRef<"organizaciones", 'String'>
    readonly nombre: FieldRef<"organizaciones", 'String'>
    readonly nombre_esquema: FieldRef<"organizaciones", 'String'>
    readonly subdominio: FieldRef<"organizaciones", 'String'>
    readonly marca: FieldRef<"organizaciones", 'Json'>
    readonly creado_en: FieldRef<"organizaciones", 'DateTime'>
    readonly actualizado_en: FieldRef<"organizaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * organizaciones findUnique
   */
  export type organizacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * Filter, which organizaciones to fetch.
     */
    where: organizacionesWhereUniqueInput
  }

  /**
   * organizaciones findUniqueOrThrow
   */
  export type organizacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * Filter, which organizaciones to fetch.
     */
    where: organizacionesWhereUniqueInput
  }

  /**
   * organizaciones findFirst
   */
  export type organizacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * Filter, which organizaciones to fetch.
     */
    where?: organizacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizaciones to fetch.
     */
    orderBy?: organizacionesOrderByWithRelationInput | organizacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizaciones.
     */
    cursor?: organizacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizaciones.
     */
    distinct?: OrganizacionesScalarFieldEnum | OrganizacionesScalarFieldEnum[]
  }

  /**
   * organizaciones findFirstOrThrow
   */
  export type organizacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * Filter, which organizaciones to fetch.
     */
    where?: organizacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizaciones to fetch.
     */
    orderBy?: organizacionesOrderByWithRelationInput | organizacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizaciones.
     */
    cursor?: organizacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizaciones.
     */
    distinct?: OrganizacionesScalarFieldEnum | OrganizacionesScalarFieldEnum[]
  }

  /**
   * organizaciones findMany
   */
  export type organizacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * Filter, which organizaciones to fetch.
     */
    where?: organizacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizaciones to fetch.
     */
    orderBy?: organizacionesOrderByWithRelationInput | organizacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizaciones.
     */
    cursor?: organizacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizaciones.
     */
    skip?: number
    distinct?: OrganizacionesScalarFieldEnum | OrganizacionesScalarFieldEnum[]
  }

  /**
   * organizaciones create
   */
  export type organizacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a organizaciones.
     */
    data: XOR<organizacionesCreateInput, organizacionesUncheckedCreateInput>
  }

  /**
   * organizaciones createMany
   */
  export type organizacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizaciones.
     */
    data: organizacionesCreateManyInput | organizacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizaciones createManyAndReturn
   */
  export type organizacionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * The data used to create many organizaciones.
     */
    data: organizacionesCreateManyInput | organizacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organizaciones update
   */
  export type organizacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a organizaciones.
     */
    data: XOR<organizacionesUpdateInput, organizacionesUncheckedUpdateInput>
    /**
     * Choose, which organizaciones to update.
     */
    where: organizacionesWhereUniqueInput
  }

  /**
   * organizaciones updateMany
   */
  export type organizacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizaciones.
     */
    data: XOR<organizacionesUpdateManyMutationInput, organizacionesUncheckedUpdateManyInput>
    /**
     * Filter which organizaciones to update
     */
    where?: organizacionesWhereInput
    /**
     * Limit how many organizaciones to update.
     */
    limit?: number
  }

  /**
   * organizaciones updateManyAndReturn
   */
  export type organizacionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * The data used to update organizaciones.
     */
    data: XOR<organizacionesUpdateManyMutationInput, organizacionesUncheckedUpdateManyInput>
    /**
     * Filter which organizaciones to update
     */
    where?: organizacionesWhereInput
    /**
     * Limit how many organizaciones to update.
     */
    limit?: number
  }

  /**
   * organizaciones upsert
   */
  export type organizacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the organizaciones to update in case it exists.
     */
    where: organizacionesWhereUniqueInput
    /**
     * In case the organizaciones found by the `where` argument doesn't exist, create a new organizaciones with this data.
     */
    create: XOR<organizacionesCreateInput, organizacionesUncheckedCreateInput>
    /**
     * In case the organizaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizacionesUpdateInput, organizacionesUncheckedUpdateInput>
  }

  /**
   * organizaciones delete
   */
  export type organizacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
    /**
     * Filter which organizaciones to delete.
     */
    where: organizacionesWhereUniqueInput
  }

  /**
   * organizaciones deleteMany
   */
  export type organizacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizaciones to delete
     */
    where?: organizacionesWhereInput
    /**
     * Limit how many organizaciones to delete.
     */
    limit?: number
  }

  /**
   * organizaciones.suscripciones
   */
  export type organizaciones$suscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    where?: suscripcionesWhereInput
    orderBy?: suscripcionesOrderByWithRelationInput | suscripcionesOrderByWithRelationInput[]
    cursor?: suscripcionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuscripcionesScalarFieldEnum | SuscripcionesScalarFieldEnum[]
  }

  /**
   * organizaciones.tenant_usuarios
   */
  export type organizaciones$tenant_usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    where?: tenant_usuariosWhereInput
    orderBy?: tenant_usuariosOrderByWithRelationInput | tenant_usuariosOrderByWithRelationInput[]
    cursor?: tenant_usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tenant_usuariosScalarFieldEnum | Tenant_usuariosScalarFieldEnum[]
  }

  /**
   * organizaciones without action
   */
  export type organizacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organizaciones
     */
    select?: organizacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organizaciones
     */
    omit?: organizacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizacionesInclude<ExtArgs> | null
  }


  /**
   * Model suscripciones
   */

  export type AggregateSuscripciones = {
    _count: SuscripcionesCountAggregateOutputType | null
    _min: SuscripcionesMinAggregateOutputType | null
    _max: SuscripcionesMaxAggregateOutputType | null
  }

  export type SuscripcionesMinAggregateOutputType = {
    id: string | null
    organizacion_id: string | null
    plan: string | null
    fecha_inicio: Date | null
    fecha_proximo_pago: Date | null
    estado: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type SuscripcionesMaxAggregateOutputType = {
    id: string | null
    organizacion_id: string | null
    plan: string | null
    fecha_inicio: Date | null
    fecha_proximo_pago: Date | null
    estado: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type SuscripcionesCountAggregateOutputType = {
    id: number
    organizacion_id: number
    plan: number
    fecha_inicio: number
    fecha_proximo_pago: number
    estado: number
    creado_en: number
    actualizado_en: number
    _all: number
  }


  export type SuscripcionesMinAggregateInputType = {
    id?: true
    organizacion_id?: true
    plan?: true
    fecha_inicio?: true
    fecha_proximo_pago?: true
    estado?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type SuscripcionesMaxAggregateInputType = {
    id?: true
    organizacion_id?: true
    plan?: true
    fecha_inicio?: true
    fecha_proximo_pago?: true
    estado?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type SuscripcionesCountAggregateInputType = {
    id?: true
    organizacion_id?: true
    plan?: true
    fecha_inicio?: true
    fecha_proximo_pago?: true
    estado?: true
    creado_en?: true
    actualizado_en?: true
    _all?: true
  }

  export type SuscripcionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suscripciones to aggregate.
     */
    where?: suscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suscripciones to fetch.
     */
    orderBy?: suscripcionesOrderByWithRelationInput | suscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: suscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suscripciones
    **/
    _count?: true | SuscripcionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuscripcionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuscripcionesMaxAggregateInputType
  }

  export type GetSuscripcionesAggregateType<T extends SuscripcionesAggregateArgs> = {
        [P in keyof T & keyof AggregateSuscripciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuscripciones[P]>
      : GetScalarType<T[P], AggregateSuscripciones[P]>
  }




  export type suscripcionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suscripcionesWhereInput
    orderBy?: suscripcionesOrderByWithAggregationInput | suscripcionesOrderByWithAggregationInput[]
    by: SuscripcionesScalarFieldEnum[] | SuscripcionesScalarFieldEnum
    having?: suscripcionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuscripcionesCountAggregateInputType | true
    _min?: SuscripcionesMinAggregateInputType
    _max?: SuscripcionesMaxAggregateInputType
  }

  export type SuscripcionesGroupByOutputType = {
    id: string
    organizacion_id: string
    plan: string | null
    fecha_inicio: Date | null
    fecha_proximo_pago: Date | null
    estado: string | null
    creado_en: Date
    actualizado_en: Date
    _count: SuscripcionesCountAggregateOutputType | null
    _min: SuscripcionesMinAggregateOutputType | null
    _max: SuscripcionesMaxAggregateOutputType | null
  }

  type GetSuscripcionesGroupByPayload<T extends suscripcionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuscripcionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuscripcionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuscripcionesGroupByOutputType[P]>
            : GetScalarType<T[P], SuscripcionesGroupByOutputType[P]>
        }
      >
    >


  export type suscripcionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacion_id?: boolean
    plan?: boolean
    fecha_inicio?: boolean
    fecha_proximo_pago?: boolean
    estado?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suscripciones"]>

  export type suscripcionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacion_id?: boolean
    plan?: boolean
    fecha_inicio?: boolean
    fecha_proximo_pago?: boolean
    estado?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suscripciones"]>

  export type suscripcionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizacion_id?: boolean
    plan?: boolean
    fecha_inicio?: boolean
    fecha_proximo_pago?: boolean
    estado?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suscripciones"]>

  export type suscripcionesSelectScalar = {
    id?: boolean
    organizacion_id?: boolean
    plan?: boolean
    fecha_inicio?: boolean
    fecha_proximo_pago?: boolean
    estado?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }

  export type suscripcionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizacion_id" | "plan" | "fecha_inicio" | "fecha_proximo_pago" | "estado" | "creado_en" | "actualizado_en", ExtArgs["result"]["suscripciones"]>
  export type suscripcionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }
  export type suscripcionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }
  export type suscripcionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }

  export type $suscripcionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "suscripciones"
    objects: {
      organizacion: Prisma.$organizacionesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizacion_id: string
      plan: string | null
      fecha_inicio: Date | null
      fecha_proximo_pago: Date | null
      estado: string | null
      creado_en: Date
      actualizado_en: Date
    }, ExtArgs["result"]["suscripciones"]>
    composites: {}
  }

  type suscripcionesGetPayload<S extends boolean | null | undefined | suscripcionesDefaultArgs> = $Result.GetResult<Prisma.$suscripcionesPayload, S>

  type suscripcionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<suscripcionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuscripcionesCountAggregateInputType | true
    }

  export interface suscripcionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['suscripciones'], meta: { name: 'suscripciones' } }
    /**
     * Find zero or one Suscripciones that matches the filter.
     * @param {suscripcionesFindUniqueArgs} args - Arguments to find a Suscripciones
     * @example
     * // Get one Suscripciones
     * const suscripciones = await prisma.suscripciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends suscripcionesFindUniqueArgs>(args: SelectSubset<T, suscripcionesFindUniqueArgs<ExtArgs>>): Prisma__suscripcionesClient<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suscripciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {suscripcionesFindUniqueOrThrowArgs} args - Arguments to find a Suscripciones
     * @example
     * // Get one Suscripciones
     * const suscripciones = await prisma.suscripciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends suscripcionesFindUniqueOrThrowArgs>(args: SelectSubset<T, suscripcionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__suscripcionesClient<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suscripciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suscripcionesFindFirstArgs} args - Arguments to find a Suscripciones
     * @example
     * // Get one Suscripciones
     * const suscripciones = await prisma.suscripciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends suscripcionesFindFirstArgs>(args?: SelectSubset<T, suscripcionesFindFirstArgs<ExtArgs>>): Prisma__suscripcionesClient<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suscripciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suscripcionesFindFirstOrThrowArgs} args - Arguments to find a Suscripciones
     * @example
     * // Get one Suscripciones
     * const suscripciones = await prisma.suscripciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends suscripcionesFindFirstOrThrowArgs>(args?: SelectSubset<T, suscripcionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__suscripcionesClient<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suscripciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suscripcionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suscripciones
     * const suscripciones = await prisma.suscripciones.findMany()
     * 
     * // Get first 10 Suscripciones
     * const suscripciones = await prisma.suscripciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suscripcionesWithIdOnly = await prisma.suscripciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends suscripcionesFindManyArgs>(args?: SelectSubset<T, suscripcionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suscripciones.
     * @param {suscripcionesCreateArgs} args - Arguments to create a Suscripciones.
     * @example
     * // Create one Suscripciones
     * const Suscripciones = await prisma.suscripciones.create({
     *   data: {
     *     // ... data to create a Suscripciones
     *   }
     * })
     * 
     */
    create<T extends suscripcionesCreateArgs>(args: SelectSubset<T, suscripcionesCreateArgs<ExtArgs>>): Prisma__suscripcionesClient<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suscripciones.
     * @param {suscripcionesCreateManyArgs} args - Arguments to create many Suscripciones.
     * @example
     * // Create many Suscripciones
     * const suscripciones = await prisma.suscripciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends suscripcionesCreateManyArgs>(args?: SelectSubset<T, suscripcionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suscripciones and returns the data saved in the database.
     * @param {suscripcionesCreateManyAndReturnArgs} args - Arguments to create many Suscripciones.
     * @example
     * // Create many Suscripciones
     * const suscripciones = await prisma.suscripciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suscripciones and only return the `id`
     * const suscripcionesWithIdOnly = await prisma.suscripciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends suscripcionesCreateManyAndReturnArgs>(args?: SelectSubset<T, suscripcionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suscripciones.
     * @param {suscripcionesDeleteArgs} args - Arguments to delete one Suscripciones.
     * @example
     * // Delete one Suscripciones
     * const Suscripciones = await prisma.suscripciones.delete({
     *   where: {
     *     // ... filter to delete one Suscripciones
     *   }
     * })
     * 
     */
    delete<T extends suscripcionesDeleteArgs>(args: SelectSubset<T, suscripcionesDeleteArgs<ExtArgs>>): Prisma__suscripcionesClient<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suscripciones.
     * @param {suscripcionesUpdateArgs} args - Arguments to update one Suscripciones.
     * @example
     * // Update one Suscripciones
     * const suscripciones = await prisma.suscripciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends suscripcionesUpdateArgs>(args: SelectSubset<T, suscripcionesUpdateArgs<ExtArgs>>): Prisma__suscripcionesClient<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suscripciones.
     * @param {suscripcionesDeleteManyArgs} args - Arguments to filter Suscripciones to delete.
     * @example
     * // Delete a few Suscripciones
     * const { count } = await prisma.suscripciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends suscripcionesDeleteManyArgs>(args?: SelectSubset<T, suscripcionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suscripcionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suscripciones
     * const suscripciones = await prisma.suscripciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends suscripcionesUpdateManyArgs>(args: SelectSubset<T, suscripcionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suscripciones and returns the data updated in the database.
     * @param {suscripcionesUpdateManyAndReturnArgs} args - Arguments to update many Suscripciones.
     * @example
     * // Update many Suscripciones
     * const suscripciones = await prisma.suscripciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suscripciones and only return the `id`
     * const suscripcionesWithIdOnly = await prisma.suscripciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends suscripcionesUpdateManyAndReturnArgs>(args: SelectSubset<T, suscripcionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suscripciones.
     * @param {suscripcionesUpsertArgs} args - Arguments to update or create a Suscripciones.
     * @example
     * // Update or create a Suscripciones
     * const suscripciones = await prisma.suscripciones.upsert({
     *   create: {
     *     // ... data to create a Suscripciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suscripciones we want to update
     *   }
     * })
     */
    upsert<T extends suscripcionesUpsertArgs>(args: SelectSubset<T, suscripcionesUpsertArgs<ExtArgs>>): Prisma__suscripcionesClient<$Result.GetResult<Prisma.$suscripcionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suscripcionesCountArgs} args - Arguments to filter Suscripciones to count.
     * @example
     * // Count the number of Suscripciones
     * const count = await prisma.suscripciones.count({
     *   where: {
     *     // ... the filter for the Suscripciones we want to count
     *   }
     * })
    **/
    count<T extends suscripcionesCountArgs>(
      args?: Subset<T, suscripcionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuscripcionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuscripcionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuscripcionesAggregateArgs>(args: Subset<T, SuscripcionesAggregateArgs>): Prisma.PrismaPromise<GetSuscripcionesAggregateType<T>>

    /**
     * Group by Suscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suscripcionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends suscripcionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: suscripcionesGroupByArgs['orderBy'] }
        : { orderBy?: suscripcionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, suscripcionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuscripcionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the suscripciones model
   */
  readonly fields: suscripcionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for suscripciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__suscripcionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizacion<T extends organizacionesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizacionesDefaultArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the suscripciones model
   */
  interface suscripcionesFieldRefs {
    readonly id: FieldRef<"suscripciones", 'String'>
    readonly organizacion_id: FieldRef<"suscripciones", 'String'>
    readonly plan: FieldRef<"suscripciones", 'String'>
    readonly fecha_inicio: FieldRef<"suscripciones", 'DateTime'>
    readonly fecha_proximo_pago: FieldRef<"suscripciones", 'DateTime'>
    readonly estado: FieldRef<"suscripciones", 'String'>
    readonly creado_en: FieldRef<"suscripciones", 'DateTime'>
    readonly actualizado_en: FieldRef<"suscripciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * suscripciones findUnique
   */
  export type suscripcionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which suscripciones to fetch.
     */
    where: suscripcionesWhereUniqueInput
  }

  /**
   * suscripciones findUniqueOrThrow
   */
  export type suscripcionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which suscripciones to fetch.
     */
    where: suscripcionesWhereUniqueInput
  }

  /**
   * suscripciones findFirst
   */
  export type suscripcionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which suscripciones to fetch.
     */
    where?: suscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suscripciones to fetch.
     */
    orderBy?: suscripcionesOrderByWithRelationInput | suscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suscripciones.
     */
    cursor?: suscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suscripciones.
     */
    distinct?: SuscripcionesScalarFieldEnum | SuscripcionesScalarFieldEnum[]
  }

  /**
   * suscripciones findFirstOrThrow
   */
  export type suscripcionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which suscripciones to fetch.
     */
    where?: suscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suscripciones to fetch.
     */
    orderBy?: suscripcionesOrderByWithRelationInput | suscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suscripciones.
     */
    cursor?: suscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suscripciones.
     */
    distinct?: SuscripcionesScalarFieldEnum | SuscripcionesScalarFieldEnum[]
  }

  /**
   * suscripciones findMany
   */
  export type suscripcionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which suscripciones to fetch.
     */
    where?: suscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suscripciones to fetch.
     */
    orderBy?: suscripcionesOrderByWithRelationInput | suscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suscripciones.
     */
    cursor?: suscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suscripciones.
     */
    skip?: number
    distinct?: SuscripcionesScalarFieldEnum | SuscripcionesScalarFieldEnum[]
  }

  /**
   * suscripciones create
   */
  export type suscripcionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * The data needed to create a suscripciones.
     */
    data: XOR<suscripcionesCreateInput, suscripcionesUncheckedCreateInput>
  }

  /**
   * suscripciones createMany
   */
  export type suscripcionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suscripciones.
     */
    data: suscripcionesCreateManyInput | suscripcionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * suscripciones createManyAndReturn
   */
  export type suscripcionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * The data used to create many suscripciones.
     */
    data: suscripcionesCreateManyInput | suscripcionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * suscripciones update
   */
  export type suscripcionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * The data needed to update a suscripciones.
     */
    data: XOR<suscripcionesUpdateInput, suscripcionesUncheckedUpdateInput>
    /**
     * Choose, which suscripciones to update.
     */
    where: suscripcionesWhereUniqueInput
  }

  /**
   * suscripciones updateMany
   */
  export type suscripcionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suscripciones.
     */
    data: XOR<suscripcionesUpdateManyMutationInput, suscripcionesUncheckedUpdateManyInput>
    /**
     * Filter which suscripciones to update
     */
    where?: suscripcionesWhereInput
    /**
     * Limit how many suscripciones to update.
     */
    limit?: number
  }

  /**
   * suscripciones updateManyAndReturn
   */
  export type suscripcionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * The data used to update suscripciones.
     */
    data: XOR<suscripcionesUpdateManyMutationInput, suscripcionesUncheckedUpdateManyInput>
    /**
     * Filter which suscripciones to update
     */
    where?: suscripcionesWhereInput
    /**
     * Limit how many suscripciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * suscripciones upsert
   */
  export type suscripcionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * The filter to search for the suscripciones to update in case it exists.
     */
    where: suscripcionesWhereUniqueInput
    /**
     * In case the suscripciones found by the `where` argument doesn't exist, create a new suscripciones with this data.
     */
    create: XOR<suscripcionesCreateInput, suscripcionesUncheckedCreateInput>
    /**
     * In case the suscripciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<suscripcionesUpdateInput, suscripcionesUncheckedUpdateInput>
  }

  /**
   * suscripciones delete
   */
  export type suscripcionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
    /**
     * Filter which suscripciones to delete.
     */
    where: suscripcionesWhereUniqueInput
  }

  /**
   * suscripciones deleteMany
   */
  export type suscripcionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suscripciones to delete
     */
    where?: suscripcionesWhereInput
    /**
     * Limit how many suscripciones to delete.
     */
    limit?: number
  }

  /**
   * suscripciones without action
   */
  export type suscripcionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suscripciones
     */
    select?: suscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suscripciones
     */
    omit?: suscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suscripcionesInclude<ExtArgs> | null
  }


  /**
   * Model tenant_usuarios
   */

  export type AggregateTenant_usuarios = {
    _count: Tenant_usuariosCountAggregateOutputType | null
    _min: Tenant_usuariosMinAggregateOutputType | null
    _max: Tenant_usuariosMaxAggregateOutputType | null
  }

  export type Tenant_usuariosMinAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    nombre: string | null
    correo: string | null
    hash_contrasena: string | null
    rol: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type Tenant_usuariosMaxAggregateOutputType = {
    id: string | null
    tenant_id: string | null
    nombre: string | null
    correo: string | null
    hash_contrasena: string | null
    rol: string | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type Tenant_usuariosCountAggregateOutputType = {
    id: number
    tenant_id: number
    nombre: number
    correo: number
    hash_contrasena: number
    rol: number
    permisos: number
    creado_en: number
    actualizado_en: number
    _all: number
  }


  export type Tenant_usuariosMinAggregateInputType = {
    id?: true
    tenant_id?: true
    nombre?: true
    correo?: true
    hash_contrasena?: true
    rol?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type Tenant_usuariosMaxAggregateInputType = {
    id?: true
    tenant_id?: true
    nombre?: true
    correo?: true
    hash_contrasena?: true
    rol?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type Tenant_usuariosCountAggregateInputType = {
    id?: true
    tenant_id?: true
    nombre?: true
    correo?: true
    hash_contrasena?: true
    rol?: true
    permisos?: true
    creado_en?: true
    actualizado_en?: true
    _all?: true
  }

  export type Tenant_usuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenant_usuarios to aggregate.
     */
    where?: tenant_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenant_usuarios to fetch.
     */
    orderBy?: tenant_usuariosOrderByWithRelationInput | tenant_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tenant_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenant_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenant_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tenant_usuarios
    **/
    _count?: true | Tenant_usuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tenant_usuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tenant_usuariosMaxAggregateInputType
  }

  export type GetTenant_usuariosAggregateType<T extends Tenant_usuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant_usuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant_usuarios[P]>
      : GetScalarType<T[P], AggregateTenant_usuarios[P]>
  }




  export type tenant_usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenant_usuariosWhereInput
    orderBy?: tenant_usuariosOrderByWithAggregationInput | tenant_usuariosOrderByWithAggregationInput[]
    by: Tenant_usuariosScalarFieldEnum[] | Tenant_usuariosScalarFieldEnum
    having?: tenant_usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tenant_usuariosCountAggregateInputType | true
    _min?: Tenant_usuariosMinAggregateInputType
    _max?: Tenant_usuariosMaxAggregateInputType
  }

  export type Tenant_usuariosGroupByOutputType = {
    id: string
    tenant_id: string
    nombre: string
    correo: string
    hash_contrasena: string
    rol: string
    permisos: JsonValue | null
    creado_en: Date
    actualizado_en: Date
    _count: Tenant_usuariosCountAggregateOutputType | null
    _min: Tenant_usuariosMinAggregateOutputType | null
    _max: Tenant_usuariosMaxAggregateOutputType | null
  }

  type GetTenant_usuariosGroupByPayload<T extends tenant_usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tenant_usuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tenant_usuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tenant_usuariosGroupByOutputType[P]>
            : GetScalarType<T[P], Tenant_usuariosGroupByOutputType[P]>
        }
      >
    >


  export type tenant_usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    nombre?: boolean
    correo?: boolean
    hash_contrasena?: boolean
    rol?: boolean
    permisos?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant_usuarios"]>

  export type tenant_usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    nombre?: boolean
    correo?: boolean
    hash_contrasena?: boolean
    rol?: boolean
    permisos?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant_usuarios"]>

  export type tenant_usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenant_id?: boolean
    nombre?: boolean
    correo?: boolean
    hash_contrasena?: boolean
    rol?: boolean
    permisos?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant_usuarios"]>

  export type tenant_usuariosSelectScalar = {
    id?: boolean
    tenant_id?: boolean
    nombre?: boolean
    correo?: boolean
    hash_contrasena?: boolean
    rol?: boolean
    permisos?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }

  export type tenant_usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenant_id" | "nombre" | "correo" | "hash_contrasena" | "rol" | "permisos" | "creado_en" | "actualizado_en", ExtArgs["result"]["tenant_usuarios"]>
  export type tenant_usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }
  export type tenant_usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }
  export type tenant_usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizacion?: boolean | organizacionesDefaultArgs<ExtArgs>
  }

  export type $tenant_usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tenant_usuarios"
    objects: {
      organizacion: Prisma.$organizacionesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenant_id: string
      nombre: string
      correo: string
      hash_contrasena: string
      rol: string
      permisos: Prisma.JsonValue | null
      creado_en: Date
      actualizado_en: Date
    }, ExtArgs["result"]["tenant_usuarios"]>
    composites: {}
  }

  type tenant_usuariosGetPayload<S extends boolean | null | undefined | tenant_usuariosDefaultArgs> = $Result.GetResult<Prisma.$tenant_usuariosPayload, S>

  type tenant_usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tenant_usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tenant_usuariosCountAggregateInputType | true
    }

  export interface tenant_usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tenant_usuarios'], meta: { name: 'tenant_usuarios' } }
    /**
     * Find zero or one Tenant_usuarios that matches the filter.
     * @param {tenant_usuariosFindUniqueArgs} args - Arguments to find a Tenant_usuarios
     * @example
     * // Get one Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tenant_usuariosFindUniqueArgs>(args: SelectSubset<T, tenant_usuariosFindUniqueArgs<ExtArgs>>): Prisma__tenant_usuariosClient<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant_usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tenant_usuariosFindUniqueOrThrowArgs} args - Arguments to find a Tenant_usuarios
     * @example
     * // Get one Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tenant_usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, tenant_usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tenant_usuariosClient<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_usuariosFindFirstArgs} args - Arguments to find a Tenant_usuarios
     * @example
     * // Get one Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tenant_usuariosFindFirstArgs>(args?: SelectSubset<T, tenant_usuariosFindFirstArgs<ExtArgs>>): Prisma__tenant_usuariosClient<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant_usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_usuariosFindFirstOrThrowArgs} args - Arguments to find a Tenant_usuarios
     * @example
     * // Get one Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tenant_usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, tenant_usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tenant_usuariosClient<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenant_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.findMany()
     * 
     * // Get first 10 Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenant_usuariosWithIdOnly = await prisma.tenant_usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tenant_usuariosFindManyArgs>(args?: SelectSubset<T, tenant_usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant_usuarios.
     * @param {tenant_usuariosCreateArgs} args - Arguments to create a Tenant_usuarios.
     * @example
     * // Create one Tenant_usuarios
     * const Tenant_usuarios = await prisma.tenant_usuarios.create({
     *   data: {
     *     // ... data to create a Tenant_usuarios
     *   }
     * })
     * 
     */
    create<T extends tenant_usuariosCreateArgs>(args: SelectSubset<T, tenant_usuariosCreateArgs<ExtArgs>>): Prisma__tenant_usuariosClient<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenant_usuarios.
     * @param {tenant_usuariosCreateManyArgs} args - Arguments to create many Tenant_usuarios.
     * @example
     * // Create many Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tenant_usuariosCreateManyArgs>(args?: SelectSubset<T, tenant_usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenant_usuarios and returns the data saved in the database.
     * @param {tenant_usuariosCreateManyAndReturnArgs} args - Arguments to create many Tenant_usuarios.
     * @example
     * // Create many Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenant_usuarios and only return the `id`
     * const tenant_usuariosWithIdOnly = await prisma.tenant_usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tenant_usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, tenant_usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant_usuarios.
     * @param {tenant_usuariosDeleteArgs} args - Arguments to delete one Tenant_usuarios.
     * @example
     * // Delete one Tenant_usuarios
     * const Tenant_usuarios = await prisma.tenant_usuarios.delete({
     *   where: {
     *     // ... filter to delete one Tenant_usuarios
     *   }
     * })
     * 
     */
    delete<T extends tenant_usuariosDeleteArgs>(args: SelectSubset<T, tenant_usuariosDeleteArgs<ExtArgs>>): Prisma__tenant_usuariosClient<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant_usuarios.
     * @param {tenant_usuariosUpdateArgs} args - Arguments to update one Tenant_usuarios.
     * @example
     * // Update one Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tenant_usuariosUpdateArgs>(args: SelectSubset<T, tenant_usuariosUpdateArgs<ExtArgs>>): Prisma__tenant_usuariosClient<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenant_usuarios.
     * @param {tenant_usuariosDeleteManyArgs} args - Arguments to filter Tenant_usuarios to delete.
     * @example
     * // Delete a few Tenant_usuarios
     * const { count } = await prisma.tenant_usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tenant_usuariosDeleteManyArgs>(args?: SelectSubset<T, tenant_usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenant_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tenant_usuariosUpdateManyArgs>(args: SelectSubset<T, tenant_usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenant_usuarios and returns the data updated in the database.
     * @param {tenant_usuariosUpdateManyAndReturnArgs} args - Arguments to update many Tenant_usuarios.
     * @example
     * // Update many Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenant_usuarios and only return the `id`
     * const tenant_usuariosWithIdOnly = await prisma.tenant_usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tenant_usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, tenant_usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant_usuarios.
     * @param {tenant_usuariosUpsertArgs} args - Arguments to update or create a Tenant_usuarios.
     * @example
     * // Update or create a Tenant_usuarios
     * const tenant_usuarios = await prisma.tenant_usuarios.upsert({
     *   create: {
     *     // ... data to create a Tenant_usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant_usuarios we want to update
     *   }
     * })
     */
    upsert<T extends tenant_usuariosUpsertArgs>(args: SelectSubset<T, tenant_usuariosUpsertArgs<ExtArgs>>): Prisma__tenant_usuariosClient<$Result.GetResult<Prisma.$tenant_usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenant_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_usuariosCountArgs} args - Arguments to filter Tenant_usuarios to count.
     * @example
     * // Count the number of Tenant_usuarios
     * const count = await prisma.tenant_usuarios.count({
     *   where: {
     *     // ... the filter for the Tenant_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tenant_usuariosCountArgs>(
      args?: Subset<T, tenant_usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tenant_usuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tenant_usuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tenant_usuariosAggregateArgs>(args: Subset<T, Tenant_usuariosAggregateArgs>): Prisma.PrismaPromise<GetTenant_usuariosAggregateType<T>>

    /**
     * Group by Tenant_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenant_usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tenant_usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tenant_usuariosGroupByArgs['orderBy'] }
        : { orderBy?: tenant_usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tenant_usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenant_usuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tenant_usuarios model
   */
  readonly fields: tenant_usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tenant_usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tenant_usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizacion<T extends organizacionesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, organizacionesDefaultArgs<ExtArgs>>): Prisma__organizacionesClient<$Result.GetResult<Prisma.$organizacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tenant_usuarios model
   */
  interface tenant_usuariosFieldRefs {
    readonly id: FieldRef<"tenant_usuarios", 'String'>
    readonly tenant_id: FieldRef<"tenant_usuarios", 'String'>
    readonly nombre: FieldRef<"tenant_usuarios", 'String'>
    readonly correo: FieldRef<"tenant_usuarios", 'String'>
    readonly hash_contrasena: FieldRef<"tenant_usuarios", 'String'>
    readonly rol: FieldRef<"tenant_usuarios", 'String'>
    readonly permisos: FieldRef<"tenant_usuarios", 'Json'>
    readonly creado_en: FieldRef<"tenant_usuarios", 'DateTime'>
    readonly actualizado_en: FieldRef<"tenant_usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tenant_usuarios findUnique
   */
  export type tenant_usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tenant_usuarios to fetch.
     */
    where: tenant_usuariosWhereUniqueInput
  }

  /**
   * tenant_usuarios findUniqueOrThrow
   */
  export type tenant_usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tenant_usuarios to fetch.
     */
    where: tenant_usuariosWhereUniqueInput
  }

  /**
   * tenant_usuarios findFirst
   */
  export type tenant_usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tenant_usuarios to fetch.
     */
    where?: tenant_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenant_usuarios to fetch.
     */
    orderBy?: tenant_usuariosOrderByWithRelationInput | tenant_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenant_usuarios.
     */
    cursor?: tenant_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenant_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenant_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenant_usuarios.
     */
    distinct?: Tenant_usuariosScalarFieldEnum | Tenant_usuariosScalarFieldEnum[]
  }

  /**
   * tenant_usuarios findFirstOrThrow
   */
  export type tenant_usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tenant_usuarios to fetch.
     */
    where?: tenant_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenant_usuarios to fetch.
     */
    orderBy?: tenant_usuariosOrderByWithRelationInput | tenant_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenant_usuarios.
     */
    cursor?: tenant_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenant_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenant_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenant_usuarios.
     */
    distinct?: Tenant_usuariosScalarFieldEnum | Tenant_usuariosScalarFieldEnum[]
  }

  /**
   * tenant_usuarios findMany
   */
  export type tenant_usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tenant_usuarios to fetch.
     */
    where?: tenant_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenant_usuarios to fetch.
     */
    orderBy?: tenant_usuariosOrderByWithRelationInput | tenant_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tenant_usuarios.
     */
    cursor?: tenant_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenant_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenant_usuarios.
     */
    skip?: number
    distinct?: Tenant_usuariosScalarFieldEnum | Tenant_usuariosScalarFieldEnum[]
  }

  /**
   * tenant_usuarios create
   */
  export type tenant_usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a tenant_usuarios.
     */
    data: XOR<tenant_usuariosCreateInput, tenant_usuariosUncheckedCreateInput>
  }

  /**
   * tenant_usuarios createMany
   */
  export type tenant_usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tenant_usuarios.
     */
    data: tenant_usuariosCreateManyInput | tenant_usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tenant_usuarios createManyAndReturn
   */
  export type tenant_usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many tenant_usuarios.
     */
    data: tenant_usuariosCreateManyInput | tenant_usuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tenant_usuarios update
   */
  export type tenant_usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a tenant_usuarios.
     */
    data: XOR<tenant_usuariosUpdateInput, tenant_usuariosUncheckedUpdateInput>
    /**
     * Choose, which tenant_usuarios to update.
     */
    where: tenant_usuariosWhereUniqueInput
  }

  /**
   * tenant_usuarios updateMany
   */
  export type tenant_usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tenant_usuarios.
     */
    data: XOR<tenant_usuariosUpdateManyMutationInput, tenant_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which tenant_usuarios to update
     */
    where?: tenant_usuariosWhereInput
    /**
     * Limit how many tenant_usuarios to update.
     */
    limit?: number
  }

  /**
   * tenant_usuarios updateManyAndReturn
   */
  export type tenant_usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * The data used to update tenant_usuarios.
     */
    data: XOR<tenant_usuariosUpdateManyMutationInput, tenant_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which tenant_usuarios to update
     */
    where?: tenant_usuariosWhereInput
    /**
     * Limit how many tenant_usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tenant_usuarios upsert
   */
  export type tenant_usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the tenant_usuarios to update in case it exists.
     */
    where: tenant_usuariosWhereUniqueInput
    /**
     * In case the tenant_usuarios found by the `where` argument doesn't exist, create a new tenant_usuarios with this data.
     */
    create: XOR<tenant_usuariosCreateInput, tenant_usuariosUncheckedCreateInput>
    /**
     * In case the tenant_usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tenant_usuariosUpdateInput, tenant_usuariosUncheckedUpdateInput>
  }

  /**
   * tenant_usuarios delete
   */
  export type tenant_usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
    /**
     * Filter which tenant_usuarios to delete.
     */
    where: tenant_usuariosWhereUniqueInput
  }

  /**
   * tenant_usuarios deleteMany
   */
  export type tenant_usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenant_usuarios to delete
     */
    where?: tenant_usuariosWhereInput
    /**
     * Limit how many tenant_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tenant_usuarios without action
   */
  export type tenant_usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenant_usuarios
     */
    select?: tenant_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenant_usuarios
     */
    omit?: tenant_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenant_usuariosInclude<ExtArgs> | null
  }


  /**
   * Model voluntarios
   */

  export type AggregateVoluntarios = {
    _count: VoluntariosCountAggregateOutputType | null
    _min: VoluntariosMinAggregateOutputType | null
    _max: VoluntariosMaxAggregateOutputType | null
  }

  export type VoluntariosMinAggregateOutputType = {
    id: string | null
    nombre_completo: string | null
    dni: string | null
    correo: string | null
    telefono: string | null
    area: string | null
    estado: string | null
    registrado_en: Date | null
    coordinador_id: string | null
  }

  export type VoluntariosMaxAggregateOutputType = {
    id: string | null
    nombre_completo: string | null
    dni: string | null
    correo: string | null
    telefono: string | null
    area: string | null
    estado: string | null
    registrado_en: Date | null
    coordinador_id: string | null
  }

  export type VoluntariosCountAggregateOutputType = {
    id: number
    nombre_completo: number
    dni: number
    correo: number
    telefono: number
    area: number
    estado: number
    historial: number
    registrado_en: number
    coordinador_id: number
    _all: number
  }


  export type VoluntariosMinAggregateInputType = {
    id?: true
    nombre_completo?: true
    dni?: true
    correo?: true
    telefono?: true
    area?: true
    estado?: true
    registrado_en?: true
    coordinador_id?: true
  }

  export type VoluntariosMaxAggregateInputType = {
    id?: true
    nombre_completo?: true
    dni?: true
    correo?: true
    telefono?: true
    area?: true
    estado?: true
    registrado_en?: true
    coordinador_id?: true
  }

  export type VoluntariosCountAggregateInputType = {
    id?: true
    nombre_completo?: true
    dni?: true
    correo?: true
    telefono?: true
    area?: true
    estado?: true
    historial?: true
    registrado_en?: true
    coordinador_id?: true
    _all?: true
  }

  export type VoluntariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voluntarios to aggregate.
     */
    where?: voluntariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voluntarios to fetch.
     */
    orderBy?: voluntariosOrderByWithRelationInput | voluntariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: voluntariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voluntarios
    **/
    _count?: true | VoluntariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoluntariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoluntariosMaxAggregateInputType
  }

  export type GetVoluntariosAggregateType<T extends VoluntariosAggregateArgs> = {
        [P in keyof T & keyof AggregateVoluntarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoluntarios[P]>
      : GetScalarType<T[P], AggregateVoluntarios[P]>
  }




  export type voluntariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: voluntariosWhereInput
    orderBy?: voluntariosOrderByWithAggregationInput | voluntariosOrderByWithAggregationInput[]
    by: VoluntariosScalarFieldEnum[] | VoluntariosScalarFieldEnum
    having?: voluntariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoluntariosCountAggregateInputType | true
    _min?: VoluntariosMinAggregateInputType
    _max?: VoluntariosMaxAggregateInputType
  }

  export type VoluntariosGroupByOutputType = {
    id: string
    nombre_completo: string
    dni: string | null
    correo: string | null
    telefono: string | null
    area: string | null
    estado: string | null
    historial: JsonValue | null
    registrado_en: Date
    coordinador_id: string
    _count: VoluntariosCountAggregateOutputType | null
    _min: VoluntariosMinAggregateOutputType | null
    _max: VoluntariosMaxAggregateOutputType | null
  }

  type GetVoluntariosGroupByPayload<T extends voluntariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoluntariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoluntariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoluntariosGroupByOutputType[P]>
            : GetScalarType<T[P], VoluntariosGroupByOutputType[P]>
        }
      >
    >


  export type voluntariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_completo?: boolean
    dni?: boolean
    correo?: boolean
    telefono?: boolean
    area?: boolean
    estado?: boolean
    historial?: boolean
    registrado_en?: boolean
    coordinador_id?: boolean
    inscripciones?: boolean | voluntarios$inscripcionesArgs<ExtArgs>
    certificados?: boolean | voluntarios$certificadosArgs<ExtArgs>
    _count?: boolean | VoluntariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voluntarios"]>

  export type voluntariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_completo?: boolean
    dni?: boolean
    correo?: boolean
    telefono?: boolean
    area?: boolean
    estado?: boolean
    historial?: boolean
    registrado_en?: boolean
    coordinador_id?: boolean
  }, ExtArgs["result"]["voluntarios"]>

  export type voluntariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_completo?: boolean
    dni?: boolean
    correo?: boolean
    telefono?: boolean
    area?: boolean
    estado?: boolean
    historial?: boolean
    registrado_en?: boolean
    coordinador_id?: boolean
  }, ExtArgs["result"]["voluntarios"]>

  export type voluntariosSelectScalar = {
    id?: boolean
    nombre_completo?: boolean
    dni?: boolean
    correo?: boolean
    telefono?: boolean
    area?: boolean
    estado?: boolean
    historial?: boolean
    registrado_en?: boolean
    coordinador_id?: boolean
  }

  export type voluntariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre_completo" | "dni" | "correo" | "telefono" | "area" | "estado" | "historial" | "registrado_en" | "coordinador_id", ExtArgs["result"]["voluntarios"]>
  export type voluntariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | voluntarios$inscripcionesArgs<ExtArgs>
    certificados?: boolean | voluntarios$certificadosArgs<ExtArgs>
    _count?: boolean | VoluntariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type voluntariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type voluntariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $voluntariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voluntarios"
    objects: {
      inscripciones: Prisma.$inscripcionesPayload<ExtArgs>[]
      certificados: Prisma.$certificadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre_completo: string
      dni: string | null
      correo: string | null
      telefono: string | null
      area: string | null
      estado: string | null
      historial: Prisma.JsonValue | null
      registrado_en: Date
      coordinador_id: string
    }, ExtArgs["result"]["voluntarios"]>
    composites: {}
  }

  type voluntariosGetPayload<S extends boolean | null | undefined | voluntariosDefaultArgs> = $Result.GetResult<Prisma.$voluntariosPayload, S>

  type voluntariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<voluntariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoluntariosCountAggregateInputType | true
    }

  export interface voluntariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voluntarios'], meta: { name: 'voluntarios' } }
    /**
     * Find zero or one Voluntarios that matches the filter.
     * @param {voluntariosFindUniqueArgs} args - Arguments to find a Voluntarios
     * @example
     * // Get one Voluntarios
     * const voluntarios = await prisma.voluntarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends voluntariosFindUniqueArgs>(args: SelectSubset<T, voluntariosFindUniqueArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voluntarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {voluntariosFindUniqueOrThrowArgs} args - Arguments to find a Voluntarios
     * @example
     * // Get one Voluntarios
     * const voluntarios = await prisma.voluntarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends voluntariosFindUniqueOrThrowArgs>(args: SelectSubset<T, voluntariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voluntarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosFindFirstArgs} args - Arguments to find a Voluntarios
     * @example
     * // Get one Voluntarios
     * const voluntarios = await prisma.voluntarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends voluntariosFindFirstArgs>(args?: SelectSubset<T, voluntariosFindFirstArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voluntarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosFindFirstOrThrowArgs} args - Arguments to find a Voluntarios
     * @example
     * // Get one Voluntarios
     * const voluntarios = await prisma.voluntarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends voluntariosFindFirstOrThrowArgs>(args?: SelectSubset<T, voluntariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voluntarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voluntarios
     * const voluntarios = await prisma.voluntarios.findMany()
     * 
     * // Get first 10 Voluntarios
     * const voluntarios = await prisma.voluntarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voluntariosWithIdOnly = await prisma.voluntarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends voluntariosFindManyArgs>(args?: SelectSubset<T, voluntariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voluntarios.
     * @param {voluntariosCreateArgs} args - Arguments to create a Voluntarios.
     * @example
     * // Create one Voluntarios
     * const Voluntarios = await prisma.voluntarios.create({
     *   data: {
     *     // ... data to create a Voluntarios
     *   }
     * })
     * 
     */
    create<T extends voluntariosCreateArgs>(args: SelectSubset<T, voluntariosCreateArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voluntarios.
     * @param {voluntariosCreateManyArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntarios = await prisma.voluntarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends voluntariosCreateManyArgs>(args?: SelectSubset<T, voluntariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voluntarios and returns the data saved in the database.
     * @param {voluntariosCreateManyAndReturnArgs} args - Arguments to create many Voluntarios.
     * @example
     * // Create many Voluntarios
     * const voluntarios = await prisma.voluntarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voluntarios and only return the `id`
     * const voluntariosWithIdOnly = await prisma.voluntarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends voluntariosCreateManyAndReturnArgs>(args?: SelectSubset<T, voluntariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voluntarios.
     * @param {voluntariosDeleteArgs} args - Arguments to delete one Voluntarios.
     * @example
     * // Delete one Voluntarios
     * const Voluntarios = await prisma.voluntarios.delete({
     *   where: {
     *     // ... filter to delete one Voluntarios
     *   }
     * })
     * 
     */
    delete<T extends voluntariosDeleteArgs>(args: SelectSubset<T, voluntariosDeleteArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voluntarios.
     * @param {voluntariosUpdateArgs} args - Arguments to update one Voluntarios.
     * @example
     * // Update one Voluntarios
     * const voluntarios = await prisma.voluntarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends voluntariosUpdateArgs>(args: SelectSubset<T, voluntariosUpdateArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voluntarios.
     * @param {voluntariosDeleteManyArgs} args - Arguments to filter Voluntarios to delete.
     * @example
     * // Delete a few Voluntarios
     * const { count } = await prisma.voluntarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends voluntariosDeleteManyArgs>(args?: SelectSubset<T, voluntariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voluntarios
     * const voluntarios = await prisma.voluntarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends voluntariosUpdateManyArgs>(args: SelectSubset<T, voluntariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voluntarios and returns the data updated in the database.
     * @param {voluntariosUpdateManyAndReturnArgs} args - Arguments to update many Voluntarios.
     * @example
     * // Update many Voluntarios
     * const voluntarios = await prisma.voluntarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voluntarios and only return the `id`
     * const voluntariosWithIdOnly = await prisma.voluntarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends voluntariosUpdateManyAndReturnArgs>(args: SelectSubset<T, voluntariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voluntarios.
     * @param {voluntariosUpsertArgs} args - Arguments to update or create a Voluntarios.
     * @example
     * // Update or create a Voluntarios
     * const voluntarios = await prisma.voluntarios.upsert({
     *   create: {
     *     // ... data to create a Voluntarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voluntarios we want to update
     *   }
     * })
     */
    upsert<T extends voluntariosUpsertArgs>(args: SelectSubset<T, voluntariosUpsertArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosCountArgs} args - Arguments to filter Voluntarios to count.
     * @example
     * // Count the number of Voluntarios
     * const count = await prisma.voluntarios.count({
     *   where: {
     *     // ... the filter for the Voluntarios we want to count
     *   }
     * })
    **/
    count<T extends voluntariosCountArgs>(
      args?: Subset<T, voluntariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoluntariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoluntariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoluntariosAggregateArgs>(args: Subset<T, VoluntariosAggregateArgs>): Prisma.PrismaPromise<GetVoluntariosAggregateType<T>>

    /**
     * Group by Voluntarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {voluntariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends voluntariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: voluntariosGroupByArgs['orderBy'] }
        : { orderBy?: voluntariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, voluntariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoluntariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voluntarios model
   */
  readonly fields: voluntariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voluntarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__voluntariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscripciones<T extends voluntarios$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, voluntarios$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificados<T extends voluntarios$certificadosArgs<ExtArgs> = {}>(args?: Subset<T, voluntarios$certificadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the voluntarios model
   */
  interface voluntariosFieldRefs {
    readonly id: FieldRef<"voluntarios", 'String'>
    readonly nombre_completo: FieldRef<"voluntarios", 'String'>
    readonly dni: FieldRef<"voluntarios", 'String'>
    readonly correo: FieldRef<"voluntarios", 'String'>
    readonly telefono: FieldRef<"voluntarios", 'String'>
    readonly area: FieldRef<"voluntarios", 'String'>
    readonly estado: FieldRef<"voluntarios", 'String'>
    readonly historial: FieldRef<"voluntarios", 'Json'>
    readonly registrado_en: FieldRef<"voluntarios", 'DateTime'>
    readonly coordinador_id: FieldRef<"voluntarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * voluntarios findUnique
   */
  export type voluntariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where: voluntariosWhereUniqueInput
  }

  /**
   * voluntarios findUniqueOrThrow
   */
  export type voluntariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where: voluntariosWhereUniqueInput
  }

  /**
   * voluntarios findFirst
   */
  export type voluntariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where?: voluntariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voluntarios to fetch.
     */
    orderBy?: voluntariosOrderByWithRelationInput | voluntariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voluntarios.
     */
    cursor?: voluntariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voluntarios.
     */
    distinct?: VoluntariosScalarFieldEnum | VoluntariosScalarFieldEnum[]
  }

  /**
   * voluntarios findFirstOrThrow
   */
  export type voluntariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where?: voluntariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voluntarios to fetch.
     */
    orderBy?: voluntariosOrderByWithRelationInput | voluntariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voluntarios.
     */
    cursor?: voluntariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voluntarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voluntarios.
     */
    distinct?: VoluntariosScalarFieldEnum | VoluntariosScalarFieldEnum[]
  }

  /**
   * voluntarios findMany
   */
  export type voluntariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter, which voluntarios to fetch.
     */
    where?: voluntariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voluntarios to fetch.
     */
    orderBy?: voluntariosOrderByWithRelationInput | voluntariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voluntarios.
     */
    cursor?: voluntariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voluntarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voluntarios.
     */
    skip?: number
    distinct?: VoluntariosScalarFieldEnum | VoluntariosScalarFieldEnum[]
  }

  /**
   * voluntarios create
   */
  export type voluntariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * The data needed to create a voluntarios.
     */
    data: XOR<voluntariosCreateInput, voluntariosUncheckedCreateInput>
  }

  /**
   * voluntarios createMany
   */
  export type voluntariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voluntarios.
     */
    data: voluntariosCreateManyInput | voluntariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voluntarios createManyAndReturn
   */
  export type voluntariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * The data used to create many voluntarios.
     */
    data: voluntariosCreateManyInput | voluntariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voluntarios update
   */
  export type voluntariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * The data needed to update a voluntarios.
     */
    data: XOR<voluntariosUpdateInput, voluntariosUncheckedUpdateInput>
    /**
     * Choose, which voluntarios to update.
     */
    where: voluntariosWhereUniqueInput
  }

  /**
   * voluntarios updateMany
   */
  export type voluntariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voluntarios.
     */
    data: XOR<voluntariosUpdateManyMutationInput, voluntariosUncheckedUpdateManyInput>
    /**
     * Filter which voluntarios to update
     */
    where?: voluntariosWhereInput
    /**
     * Limit how many voluntarios to update.
     */
    limit?: number
  }

  /**
   * voluntarios updateManyAndReturn
   */
  export type voluntariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * The data used to update voluntarios.
     */
    data: XOR<voluntariosUpdateManyMutationInput, voluntariosUncheckedUpdateManyInput>
    /**
     * Filter which voluntarios to update
     */
    where?: voluntariosWhereInput
    /**
     * Limit how many voluntarios to update.
     */
    limit?: number
  }

  /**
   * voluntarios upsert
   */
  export type voluntariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * The filter to search for the voluntarios to update in case it exists.
     */
    where: voluntariosWhereUniqueInput
    /**
     * In case the voluntarios found by the `where` argument doesn't exist, create a new voluntarios with this data.
     */
    create: XOR<voluntariosCreateInput, voluntariosUncheckedCreateInput>
    /**
     * In case the voluntarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<voluntariosUpdateInput, voluntariosUncheckedUpdateInput>
  }

  /**
   * voluntarios delete
   */
  export type voluntariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
    /**
     * Filter which voluntarios to delete.
     */
    where: voluntariosWhereUniqueInput
  }

  /**
   * voluntarios deleteMany
   */
  export type voluntariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voluntarios to delete
     */
    where?: voluntariosWhereInput
    /**
     * Limit how many voluntarios to delete.
     */
    limit?: number
  }

  /**
   * voluntarios.inscripciones
   */
  export type voluntarios$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    where?: inscripcionesWhereInput
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    cursor?: inscripcionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * voluntarios.certificados
   */
  export type voluntarios$certificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    where?: certificadosWhereInput
    orderBy?: certificadosOrderByWithRelationInput | certificadosOrderByWithRelationInput[]
    cursor?: certificadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificadosScalarFieldEnum | CertificadosScalarFieldEnum[]
  }

  /**
   * voluntarios without action
   */
  export type voluntariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voluntarios
     */
    select?: voluntariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voluntarios
     */
    omit?: voluntariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: voluntariosInclude<ExtArgs> | null
  }


  /**
   * Model eventos
   */

  export type AggregateEventos = {
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  export type EventosAvgAggregateOutputType = {
    capacidad: number | null
  }

  export type EventosSumAggregateOutputType = {
    capacidad: number | null
  }

  export type EventosMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    nombre: string | null
    descripcion: string | null
    inicio: Date | null
    fecha_inicio: Date | null
    fin: Date | null
    fecha_fin: Date | null
    ubicacion: string | null
    tipo: string | null
    estado: string | null
    coordinador_id: string | null
    capacidad: number | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type EventosMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    nombre: string | null
    descripcion: string | null
    inicio: Date | null
    fecha_inicio: Date | null
    fin: Date | null
    fecha_fin: Date | null
    ubicacion: string | null
    tipo: string | null
    estado: string | null
    coordinador_id: string | null
    capacidad: number | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type EventosCountAggregateOutputType = {
    id: number
    titulo: number
    nombre: number
    descripcion: number
    inicio: number
    fecha_inicio: number
    fin: number
    fecha_fin: number
    ubicacion: number
    tipo: number
    estado: number
    coordinador_id: number
    capacidad: number
    creado_en: number
    actualizado_en: number
    requisitos: number
    _all: number
  }


  export type EventosAvgAggregateInputType = {
    capacidad?: true
  }

  export type EventosSumAggregateInputType = {
    capacidad?: true
  }

  export type EventosMinAggregateInputType = {
    id?: true
    titulo?: true
    nombre?: true
    descripcion?: true
    inicio?: true
    fecha_inicio?: true
    fin?: true
    fecha_fin?: true
    ubicacion?: true
    tipo?: true
    estado?: true
    coordinador_id?: true
    capacidad?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type EventosMaxAggregateInputType = {
    id?: true
    titulo?: true
    nombre?: true
    descripcion?: true
    inicio?: true
    fecha_inicio?: true
    fin?: true
    fecha_fin?: true
    ubicacion?: true
    tipo?: true
    estado?: true
    coordinador_id?: true
    capacidad?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type EventosCountAggregateInputType = {
    id?: true
    titulo?: true
    nombre?: true
    descripcion?: true
    inicio?: true
    fecha_inicio?: true
    fin?: true
    fecha_fin?: true
    ubicacion?: true
    tipo?: true
    estado?: true
    coordinador_id?: true
    capacidad?: true
    creado_en?: true
    actualizado_en?: true
    requisitos?: true
    _all?: true
  }

  export type EventosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to aggregate.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventosMaxAggregateInputType
  }

  export type GetEventosAggregateType<T extends EventosAggregateArgs> = {
        [P in keyof T & keyof AggregateEventos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventos[P]>
      : GetScalarType<T[P], AggregateEventos[P]>
  }




  export type eventosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventosWhereInput
    orderBy?: eventosOrderByWithAggregationInput | eventosOrderByWithAggregationInput[]
    by: EventosScalarFieldEnum[] | EventosScalarFieldEnum
    having?: eventosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventosCountAggregateInputType | true
    _avg?: EventosAvgAggregateInputType
    _sum?: EventosSumAggregateInputType
    _min?: EventosMinAggregateInputType
    _max?: EventosMaxAggregateInputType
  }

  export type EventosGroupByOutputType = {
    id: string
    titulo: string
    nombre: string | null
    descripcion: string | null
    inicio: Date
    fecha_inicio: Date
    fin: Date | null
    fecha_fin: Date | null
    ubicacion: string | null
    tipo: string | null
    estado: string | null
    coordinador_id: string
    capacidad: number | null
    creado_en: Date
    actualizado_en: Date
    requisitos: JsonValue | null
    _count: EventosCountAggregateOutputType | null
    _avg: EventosAvgAggregateOutputType | null
    _sum: EventosSumAggregateOutputType | null
    _min: EventosMinAggregateOutputType | null
    _max: EventosMaxAggregateOutputType | null
  }

  type GetEventosGroupByPayload<T extends eventosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventosGroupByOutputType[P]>
            : GetScalarType<T[P], EventosGroupByOutputType[P]>
        }
      >
    >


  export type eventosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    nombre?: boolean
    descripcion?: boolean
    inicio?: boolean
    fecha_inicio?: boolean
    fin?: boolean
    fecha_fin?: boolean
    ubicacion?: boolean
    tipo?: boolean
    estado?: boolean
    coordinador_id?: boolean
    capacidad?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    requisitos?: boolean
    inscripciones?: boolean | eventos$inscripcionesArgs<ExtArgs>
    certificados?: boolean | eventos$certificadosArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    nombre?: boolean
    descripcion?: boolean
    inicio?: boolean
    fecha_inicio?: boolean
    fin?: boolean
    fecha_fin?: boolean
    ubicacion?: boolean
    tipo?: boolean
    estado?: boolean
    coordinador_id?: boolean
    capacidad?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    requisitos?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    nombre?: boolean
    descripcion?: boolean
    inicio?: boolean
    fecha_inicio?: boolean
    fin?: boolean
    fecha_fin?: boolean
    ubicacion?: boolean
    tipo?: boolean
    estado?: boolean
    coordinador_id?: boolean
    capacidad?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    requisitos?: boolean
  }, ExtArgs["result"]["eventos"]>

  export type eventosSelectScalar = {
    id?: boolean
    titulo?: boolean
    nombre?: boolean
    descripcion?: boolean
    inicio?: boolean
    fecha_inicio?: boolean
    fin?: boolean
    fecha_fin?: boolean
    ubicacion?: boolean
    tipo?: boolean
    estado?: boolean
    coordinador_id?: boolean
    capacidad?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    requisitos?: boolean
  }

  export type eventosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "nombre" | "descripcion" | "inicio" | "fecha_inicio" | "fin" | "fecha_fin" | "ubicacion" | "tipo" | "estado" | "coordinador_id" | "capacidad" | "creado_en" | "actualizado_en" | "requisitos", ExtArgs["result"]["eventos"]>
  export type eventosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | eventos$inscripcionesArgs<ExtArgs>
    certificados?: boolean | eventos$certificadosArgs<ExtArgs>
    _count?: boolean | EventosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type eventosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $eventosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventos"
    objects: {
      inscripciones: Prisma.$inscripcionesPayload<ExtArgs>[]
      certificados: Prisma.$certificadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      nombre: string | null
      descripcion: string | null
      inicio: Date
      fecha_inicio: Date
      fin: Date | null
      fecha_fin: Date | null
      ubicacion: string | null
      tipo: string | null
      estado: string | null
      coordinador_id: string
      capacidad: number | null
      creado_en: Date
      actualizado_en: Date
      requisitos: Prisma.JsonValue | null
    }, ExtArgs["result"]["eventos"]>
    composites: {}
  }

  type eventosGetPayload<S extends boolean | null | undefined | eventosDefaultArgs> = $Result.GetResult<Prisma.$eventosPayload, S>

  type eventosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventosCountAggregateInputType | true
    }

  export interface eventosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventos'], meta: { name: 'eventos' } }
    /**
     * Find zero or one Eventos that matches the filter.
     * @param {eventosFindUniqueArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventosFindUniqueArgs>(args: SelectSubset<T, eventosFindUniqueArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eventos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventosFindUniqueOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventosFindUniqueOrThrowArgs>(args: SelectSubset<T, eventosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventosFindFirstArgs>(args?: SelectSubset<T, eventosFindFirstArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eventos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindFirstOrThrowArgs} args - Arguments to find a Eventos
     * @example
     * // Get one Eventos
     * const eventos = await prisma.eventos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventosFindFirstOrThrowArgs>(args?: SelectSubset<T, eventosFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.eventos.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.eventos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventosWithIdOnly = await prisma.eventos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventosFindManyArgs>(args?: SelectSubset<T, eventosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eventos.
     * @param {eventosCreateArgs} args - Arguments to create a Eventos.
     * @example
     * // Create one Eventos
     * const Eventos = await prisma.eventos.create({
     *   data: {
     *     // ... data to create a Eventos
     *   }
     * })
     * 
     */
    create<T extends eventosCreateArgs>(args: SelectSubset<T, eventosCreateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {eventosCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventosCreateManyArgs>(args?: SelectSubset<T, eventosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {eventosCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const eventos = await prisma.eventos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id`
     * const eventosWithIdOnly = await prisma.eventos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventosCreateManyAndReturnArgs>(args?: SelectSubset<T, eventosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eventos.
     * @param {eventosDeleteArgs} args - Arguments to delete one Eventos.
     * @example
     * // Delete one Eventos
     * const Eventos = await prisma.eventos.delete({
     *   where: {
     *     // ... filter to delete one Eventos
     *   }
     * })
     * 
     */
    delete<T extends eventosDeleteArgs>(args: SelectSubset<T, eventosDeleteArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eventos.
     * @param {eventosUpdateArgs} args - Arguments to update one Eventos.
     * @example
     * // Update one Eventos
     * const eventos = await prisma.eventos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventosUpdateArgs>(args: SelectSubset<T, eventosUpdateArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {eventosDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.eventos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventosDeleteManyArgs>(args?: SelectSubset<T, eventosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventosUpdateManyArgs>(args: SelectSubset<T, eventosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {eventosUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const eventos = await prisma.eventos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id`
     * const eventosWithIdOnly = await prisma.eventos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventosUpdateManyAndReturnArgs>(args: SelectSubset<T, eventosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eventos.
     * @param {eventosUpsertArgs} args - Arguments to update or create a Eventos.
     * @example
     * // Update or create a Eventos
     * const eventos = await prisma.eventos.upsert({
     *   create: {
     *     // ... data to create a Eventos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eventos we want to update
     *   }
     * })
     */
    upsert<T extends eventosUpsertArgs>(args: SelectSubset<T, eventosUpsertArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.eventos.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventosCountArgs>(
      args?: Subset<T, eventosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventosAggregateArgs>(args: Subset<T, EventosAggregateArgs>): Prisma.PrismaPromise<GetEventosAggregateType<T>>

    /**
     * Group by Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventosGroupByArgs['orderBy'] }
        : { orderBy?: eventosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventos model
   */
  readonly fields: eventosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscripciones<T extends eventos$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, eventos$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificados<T extends eventos$certificadosArgs<ExtArgs> = {}>(args?: Subset<T, eventos$certificadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eventos model
   */
  interface eventosFieldRefs {
    readonly id: FieldRef<"eventos", 'String'>
    readonly titulo: FieldRef<"eventos", 'String'>
    readonly nombre: FieldRef<"eventos", 'String'>
    readonly descripcion: FieldRef<"eventos", 'String'>
    readonly inicio: FieldRef<"eventos", 'DateTime'>
    readonly fecha_inicio: FieldRef<"eventos", 'DateTime'>
    readonly fin: FieldRef<"eventos", 'DateTime'>
    readonly fecha_fin: FieldRef<"eventos", 'DateTime'>
    readonly ubicacion: FieldRef<"eventos", 'String'>
    readonly tipo: FieldRef<"eventos", 'String'>
    readonly estado: FieldRef<"eventos", 'String'>
    readonly coordinador_id: FieldRef<"eventos", 'String'>
    readonly capacidad: FieldRef<"eventos", 'Int'>
    readonly creado_en: FieldRef<"eventos", 'DateTime'>
    readonly actualizado_en: FieldRef<"eventos", 'DateTime'>
    readonly requisitos: FieldRef<"eventos", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * eventos findUnique
   */
  export type eventosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findUniqueOrThrow
   */
  export type eventosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos findFirst
   */
  export type eventosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findFirstOrThrow
   */
  export type eventosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos findMany
   */
  export type eventosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventosOrderByWithRelationInput | eventosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    distinct?: EventosScalarFieldEnum | EventosScalarFieldEnum[]
  }

  /**
   * eventos create
   */
  export type eventosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to create a eventos.
     */
    data: XOR<eventosCreateInput, eventosUncheckedCreateInput>
  }

  /**
   * eventos createMany
   */
  export type eventosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos createManyAndReturn
   */
  export type eventosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * The data used to create many eventos.
     */
    data: eventosCreateManyInput | eventosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventos update
   */
  export type eventosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The data needed to update a eventos.
     */
    data: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
    /**
     * Choose, which eventos to update.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos updateMany
   */
  export type eventosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * eventos updateManyAndReturn
   */
  export type eventosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * The data used to update eventos.
     */
    data: XOR<eventosUpdateManyMutationInput, eventosUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * eventos upsert
   */
  export type eventosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * The filter to search for the eventos to update in case it exists.
     */
    where: eventosWhereUniqueInput
    /**
     * In case the eventos found by the `where` argument doesn't exist, create a new eventos with this data.
     */
    create: XOR<eventosCreateInput, eventosUncheckedCreateInput>
    /**
     * In case the eventos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventosUpdateInput, eventosUncheckedUpdateInput>
  }

  /**
   * eventos delete
   */
  export type eventosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
    /**
     * Filter which eventos to delete.
     */
    where: eventosWhereUniqueInput
  }

  /**
   * eventos deleteMany
   */
  export type eventosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventosWhereInput
    /**
     * Limit how many eventos to delete.
     */
    limit?: number
  }

  /**
   * eventos.inscripciones
   */
  export type eventos$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    where?: inscripcionesWhereInput
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    cursor?: inscripcionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * eventos.certificados
   */
  export type eventos$certificadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    where?: certificadosWhereInput
    orderBy?: certificadosOrderByWithRelationInput | certificadosOrderByWithRelationInput[]
    cursor?: certificadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificadosScalarFieldEnum | CertificadosScalarFieldEnum[]
  }

  /**
   * eventos without action
   */
  export type eventosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventos
     */
    select?: eventosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventos
     */
    omit?: eventosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventosInclude<ExtArgs> | null
  }


  /**
   * Model inscripciones
   */

  export type AggregateInscripciones = {
    _count: InscripcionesCountAggregateOutputType | null
    _min: InscripcionesMinAggregateOutputType | null
    _max: InscripcionesMaxAggregateOutputType | null
  }

  export type InscripcionesMinAggregateOutputType = {
    id: string | null
    evento_id: string | null
    voluntario_id: string | null
    estado: string | null
    fecha_inscripcion: Date | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type InscripcionesMaxAggregateOutputType = {
    id: string | null
    evento_id: string | null
    voluntario_id: string | null
    estado: string | null
    fecha_inscripcion: Date | null
    creado_en: Date | null
    actualizado_en: Date | null
  }

  export type InscripcionesCountAggregateOutputType = {
    id: number
    evento_id: number
    voluntario_id: number
    estado: number
    fecha_inscripcion: number
    creado_en: number
    actualizado_en: number
    _all: number
  }


  export type InscripcionesMinAggregateInputType = {
    id?: true
    evento_id?: true
    voluntario_id?: true
    estado?: true
    fecha_inscripcion?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type InscripcionesMaxAggregateInputType = {
    id?: true
    evento_id?: true
    voluntario_id?: true
    estado?: true
    fecha_inscripcion?: true
    creado_en?: true
    actualizado_en?: true
  }

  export type InscripcionesCountAggregateInputType = {
    id?: true
    evento_id?: true
    voluntario_id?: true
    estado?: true
    fecha_inscripcion?: true
    creado_en?: true
    actualizado_en?: true
    _all?: true
  }

  export type InscripcionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscripciones to aggregate.
     */
    where?: inscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscripciones to fetch.
     */
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inscripciones
    **/
    _count?: true | InscripcionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionesMaxAggregateInputType
  }

  export type GetInscripcionesAggregateType<T extends InscripcionesAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripciones[P]>
      : GetScalarType<T[P], AggregateInscripciones[P]>
  }




  export type inscripcionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscripcionesWhereInput
    orderBy?: inscripcionesOrderByWithAggregationInput | inscripcionesOrderByWithAggregationInput[]
    by: InscripcionesScalarFieldEnum[] | InscripcionesScalarFieldEnum
    having?: inscripcionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionesCountAggregateInputType | true
    _min?: InscripcionesMinAggregateInputType
    _max?: InscripcionesMaxAggregateInputType
  }

  export type InscripcionesGroupByOutputType = {
    id: string
    evento_id: string
    voluntario_id: string
    estado: string | null
    fecha_inscripcion: Date
    creado_en: Date
    actualizado_en: Date
    _count: InscripcionesCountAggregateOutputType | null
    _min: InscripcionesMinAggregateOutputType | null
    _max: InscripcionesMaxAggregateOutputType | null
  }

  type GetInscripcionesGroupByPayload<T extends inscripcionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionesGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionesGroupByOutputType[P]>
        }
      >
    >


  export type inscripcionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evento_id?: boolean
    voluntario_id?: boolean
    estado?: boolean
    fecha_inscripcion?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
    asistencia?: boolean | inscripciones$asistenciaArgs<ExtArgs>
    _count?: boolean | InscripcionesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripciones"]>

  export type inscripcionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evento_id?: boolean
    voluntario_id?: boolean
    estado?: boolean
    fecha_inscripcion?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripciones"]>

  export type inscripcionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evento_id?: boolean
    voluntario_id?: boolean
    estado?: boolean
    fecha_inscripcion?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripciones"]>

  export type inscripcionesSelectScalar = {
    id?: boolean
    evento_id?: boolean
    voluntario_id?: boolean
    estado?: boolean
    fecha_inscripcion?: boolean
    creado_en?: boolean
    actualizado_en?: boolean
  }

  export type inscripcionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evento_id" | "voluntario_id" | "estado" | "fecha_inscripcion" | "creado_en" | "actualizado_en", ExtArgs["result"]["inscripciones"]>
  export type inscripcionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
    asistencia?: boolean | inscripciones$asistenciaArgs<ExtArgs>
    _count?: boolean | InscripcionesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type inscripcionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
  }
  export type inscripcionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
  }

  export type $inscripcionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inscripciones"
    objects: {
      eventos: Prisma.$eventosPayload<ExtArgs>
      voluntarios: Prisma.$voluntariosPayload<ExtArgs>
      asistencia: Prisma.$asistenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      evento_id: string
      voluntario_id: string
      estado: string | null
      fecha_inscripcion: Date
      creado_en: Date
      actualizado_en: Date
    }, ExtArgs["result"]["inscripciones"]>
    composites: {}
  }

  type inscripcionesGetPayload<S extends boolean | null | undefined | inscripcionesDefaultArgs> = $Result.GetResult<Prisma.$inscripcionesPayload, S>

  type inscripcionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inscripcionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscripcionesCountAggregateInputType | true
    }

  export interface inscripcionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inscripciones'], meta: { name: 'inscripciones' } }
    /**
     * Find zero or one Inscripciones that matches the filter.
     * @param {inscripcionesFindUniqueArgs} args - Arguments to find a Inscripciones
     * @example
     * // Get one Inscripciones
     * const inscripciones = await prisma.inscripciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inscripcionesFindUniqueArgs>(args: SelectSubset<T, inscripcionesFindUniqueArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscripciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inscripcionesFindUniqueOrThrowArgs} args - Arguments to find a Inscripciones
     * @example
     * // Get one Inscripciones
     * const inscripciones = await prisma.inscripciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inscripcionesFindUniqueOrThrowArgs>(args: SelectSubset<T, inscripcionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesFindFirstArgs} args - Arguments to find a Inscripciones
     * @example
     * // Get one Inscripciones
     * const inscripciones = await prisma.inscripciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inscripcionesFindFirstArgs>(args?: SelectSubset<T, inscripcionesFindFirstArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesFindFirstOrThrowArgs} args - Arguments to find a Inscripciones
     * @example
     * // Get one Inscripciones
     * const inscripciones = await prisma.inscripciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inscripcionesFindFirstOrThrowArgs>(args?: SelectSubset<T, inscripcionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscripciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscripciones
     * const inscripciones = await prisma.inscripciones.findMany()
     * 
     * // Get first 10 Inscripciones
     * const inscripciones = await prisma.inscripciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscripcionesWithIdOnly = await prisma.inscripciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inscripcionesFindManyArgs>(args?: SelectSubset<T, inscripcionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscripciones.
     * @param {inscripcionesCreateArgs} args - Arguments to create a Inscripciones.
     * @example
     * // Create one Inscripciones
     * const Inscripciones = await prisma.inscripciones.create({
     *   data: {
     *     // ... data to create a Inscripciones
     *   }
     * })
     * 
     */
    create<T extends inscripcionesCreateArgs>(args: SelectSubset<T, inscripcionesCreateArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscripciones.
     * @param {inscripcionesCreateManyArgs} args - Arguments to create many Inscripciones.
     * @example
     * // Create many Inscripciones
     * const inscripciones = await prisma.inscripciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inscripcionesCreateManyArgs>(args?: SelectSubset<T, inscripcionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscripciones and returns the data saved in the database.
     * @param {inscripcionesCreateManyAndReturnArgs} args - Arguments to create many Inscripciones.
     * @example
     * // Create many Inscripciones
     * const inscripciones = await prisma.inscripciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscripciones and only return the `id`
     * const inscripcionesWithIdOnly = await prisma.inscripciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inscripcionesCreateManyAndReturnArgs>(args?: SelectSubset<T, inscripcionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inscripciones.
     * @param {inscripcionesDeleteArgs} args - Arguments to delete one Inscripciones.
     * @example
     * // Delete one Inscripciones
     * const Inscripciones = await prisma.inscripciones.delete({
     *   where: {
     *     // ... filter to delete one Inscripciones
     *   }
     * })
     * 
     */
    delete<T extends inscripcionesDeleteArgs>(args: SelectSubset<T, inscripcionesDeleteArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscripciones.
     * @param {inscripcionesUpdateArgs} args - Arguments to update one Inscripciones.
     * @example
     * // Update one Inscripciones
     * const inscripciones = await prisma.inscripciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inscripcionesUpdateArgs>(args: SelectSubset<T, inscripcionesUpdateArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscripciones.
     * @param {inscripcionesDeleteManyArgs} args - Arguments to filter Inscripciones to delete.
     * @example
     * // Delete a few Inscripciones
     * const { count } = await prisma.inscripciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inscripcionesDeleteManyArgs>(args?: SelectSubset<T, inscripcionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscripciones
     * const inscripciones = await prisma.inscripciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inscripcionesUpdateManyArgs>(args: SelectSubset<T, inscripcionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripciones and returns the data updated in the database.
     * @param {inscripcionesUpdateManyAndReturnArgs} args - Arguments to update many Inscripciones.
     * @example
     * // Update many Inscripciones
     * const inscripciones = await prisma.inscripciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inscripciones and only return the `id`
     * const inscripcionesWithIdOnly = await prisma.inscripciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inscripcionesUpdateManyAndReturnArgs>(args: SelectSubset<T, inscripcionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inscripciones.
     * @param {inscripcionesUpsertArgs} args - Arguments to update or create a Inscripciones.
     * @example
     * // Update or create a Inscripciones
     * const inscripciones = await prisma.inscripciones.upsert({
     *   create: {
     *     // ... data to create a Inscripciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscripciones we want to update
     *   }
     * })
     */
    upsert<T extends inscripcionesUpsertArgs>(args: SelectSubset<T, inscripcionesUpsertArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesCountArgs} args - Arguments to filter Inscripciones to count.
     * @example
     * // Count the number of Inscripciones
     * const count = await prisma.inscripciones.count({
     *   where: {
     *     // ... the filter for the Inscripciones we want to count
     *   }
     * })
    **/
    count<T extends inscripcionesCountArgs>(
      args?: Subset<T, inscripcionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InscripcionesAggregateArgs>(args: Subset<T, InscripcionesAggregateArgs>): Prisma.PrismaPromise<GetInscripcionesAggregateType<T>>

    /**
     * Group by Inscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inscripcionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inscripcionesGroupByArgs['orderBy'] }
        : { orderBy?: inscripcionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inscripcionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inscripciones model
   */
  readonly fields: inscripcionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inscripciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inscripcionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voluntarios<T extends voluntariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, voluntariosDefaultArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    asistencia<T extends inscripciones$asistenciaArgs<ExtArgs> = {}>(args?: Subset<T, inscripciones$asistenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inscripciones model
   */
  interface inscripcionesFieldRefs {
    readonly id: FieldRef<"inscripciones", 'String'>
    readonly evento_id: FieldRef<"inscripciones", 'String'>
    readonly voluntario_id: FieldRef<"inscripciones", 'String'>
    readonly estado: FieldRef<"inscripciones", 'String'>
    readonly fecha_inscripcion: FieldRef<"inscripciones", 'DateTime'>
    readonly creado_en: FieldRef<"inscripciones", 'DateTime'>
    readonly actualizado_en: FieldRef<"inscripciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inscripciones findUnique
   */
  export type inscripcionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where: inscripcionesWhereUniqueInput
  }

  /**
   * inscripciones findUniqueOrThrow
   */
  export type inscripcionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where: inscripcionesWhereUniqueInput
  }

  /**
   * inscripciones findFirst
   */
  export type inscripcionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where?: inscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscripciones to fetch.
     */
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscripciones.
     */
    cursor?: inscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscripciones.
     */
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * inscripciones findFirstOrThrow
   */
  export type inscripcionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where?: inscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscripciones to fetch.
     */
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscripciones.
     */
    cursor?: inscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscripciones.
     */
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * inscripciones findMany
   */
  export type inscripcionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where?: inscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscripciones to fetch.
     */
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inscripciones.
     */
    cursor?: inscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscripciones.
     */
    skip?: number
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * inscripciones create
   */
  export type inscripcionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * The data needed to create a inscripciones.
     */
    data: XOR<inscripcionesCreateInput, inscripcionesUncheckedCreateInput>
  }

  /**
   * inscripciones createMany
   */
  export type inscripcionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inscripciones.
     */
    data: inscripcionesCreateManyInput | inscripcionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inscripciones createManyAndReturn
   */
  export type inscripcionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * The data used to create many inscripciones.
     */
    data: inscripcionesCreateManyInput | inscripcionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inscripciones update
   */
  export type inscripcionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * The data needed to update a inscripciones.
     */
    data: XOR<inscripcionesUpdateInput, inscripcionesUncheckedUpdateInput>
    /**
     * Choose, which inscripciones to update.
     */
    where: inscripcionesWhereUniqueInput
  }

  /**
   * inscripciones updateMany
   */
  export type inscripcionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inscripciones.
     */
    data: XOR<inscripcionesUpdateManyMutationInput, inscripcionesUncheckedUpdateManyInput>
    /**
     * Filter which inscripciones to update
     */
    where?: inscripcionesWhereInput
    /**
     * Limit how many inscripciones to update.
     */
    limit?: number
  }

  /**
   * inscripciones updateManyAndReturn
   */
  export type inscripcionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * The data used to update inscripciones.
     */
    data: XOR<inscripcionesUpdateManyMutationInput, inscripcionesUncheckedUpdateManyInput>
    /**
     * Filter which inscripciones to update
     */
    where?: inscripcionesWhereInput
    /**
     * Limit how many inscripciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * inscripciones upsert
   */
  export type inscripcionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * The filter to search for the inscripciones to update in case it exists.
     */
    where: inscripcionesWhereUniqueInput
    /**
     * In case the inscripciones found by the `where` argument doesn't exist, create a new inscripciones with this data.
     */
    create: XOR<inscripcionesCreateInput, inscripcionesUncheckedCreateInput>
    /**
     * In case the inscripciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inscripcionesUpdateInput, inscripcionesUncheckedUpdateInput>
  }

  /**
   * inscripciones delete
   */
  export type inscripcionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter which inscripciones to delete.
     */
    where: inscripcionesWhereUniqueInput
  }

  /**
   * inscripciones deleteMany
   */
  export type inscripcionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscripciones to delete
     */
    where?: inscripcionesWhereInput
    /**
     * Limit how many inscripciones to delete.
     */
    limit?: number
  }

  /**
   * inscripciones.asistencia
   */
  export type inscripciones$asistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    cursor?: asistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * inscripciones without action
   */
  export type inscripcionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
  }


  /**
   * Model asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id: string | null
    inscripcion_id: string | null
    estado: string | null
    marcado_en: Date | null
    coordinador_id: string | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id: string | null
    inscripcion_id: string | null
    estado: string | null
    marcado_en: Date | null
    coordinador_id: string | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id: number
    inscripcion_id: number
    estado: number
    marcado_en: number
    coordinador_id: number
    _all: number
  }


  export type AsistenciaMinAggregateInputType = {
    id?: true
    inscripcion_id?: true
    estado?: true
    marcado_en?: true
    coordinador_id?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id?: true
    inscripcion_id?: true
    estado?: true
    marcado_en?: true
    coordinador_id?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id?: true
    inscripcion_id?: true
    estado?: true
    marcado_en?: true
    coordinador_id?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistencia to aggregate.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type asistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithAggregationInput | asistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: asistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id: string
    inscripcion_id: string
    estado: string | null
    marcado_en: Date
    coordinador_id: string
    _count: AsistenciaCountAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends asistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type asistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inscripcion_id?: boolean
    estado?: boolean
    marcado_en?: boolean
    coordinador_id?: boolean
    inscripciones?: boolean | inscripcionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type asistenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inscripcion_id?: boolean
    estado?: boolean
    marcado_en?: boolean
    coordinador_id?: boolean
    inscripciones?: boolean | inscripcionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type asistenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inscripcion_id?: boolean
    estado?: boolean
    marcado_en?: boolean
    coordinador_id?: boolean
    inscripciones?: boolean | inscripcionesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type asistenciaSelectScalar = {
    id?: boolean
    inscripcion_id?: boolean
    estado?: boolean
    marcado_en?: boolean
    coordinador_id?: boolean
  }

  export type asistenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inscripcion_id" | "estado" | "marcado_en" | "coordinador_id", ExtArgs["result"]["asistencia"]>
  export type asistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | inscripcionesDefaultArgs<ExtArgs>
  }
  export type asistenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | inscripcionesDefaultArgs<ExtArgs>
  }
  export type asistenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | inscripcionesDefaultArgs<ExtArgs>
  }

  export type $asistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asistencia"
    objects: {
      inscripciones: Prisma.$inscripcionesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inscripcion_id: string
      estado: string | null
      marcado_en: Date
      coordinador_id: string
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }

  type asistenciaGetPayload<S extends boolean | null | undefined | asistenciaDefaultArgs> = $Result.GetResult<Prisma.$asistenciaPayload, S>

  type asistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<asistenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface asistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asistencia'], meta: { name: 'asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {asistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asistenciaFindUniqueArgs>(args: SelectSubset<T, asistenciaFindUniqueArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {asistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, asistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asistenciaFindFirstArgs>(args?: SelectSubset<T, asistenciaFindFirstArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, asistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends asistenciaFindManyArgs>(args?: SelectSubset<T, asistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asistencia.
     * @param {asistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
     */
    create<T extends asistenciaCreateArgs>(args: SelectSubset<T, asistenciaCreateArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asistencias.
     * @param {asistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends asistenciaCreateManyArgs>(args?: SelectSubset<T, asistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asistencias and returns the data saved in the database.
     * @param {asistenciaCreateManyAndReturnArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends asistenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, asistenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asistencia.
     * @param {asistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
     */
    delete<T extends asistenciaDeleteArgs>(args: SelectSubset<T, asistenciaDeleteArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asistencia.
     * @param {asistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends asistenciaUpdateArgs>(args: SelectSubset<T, asistenciaUpdateArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asistencias.
     * @param {asistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends asistenciaDeleteManyArgs>(args?: SelectSubset<T, asistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends asistenciaUpdateManyArgs>(args: SelectSubset<T, asistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias and returns the data updated in the database.
     * @param {asistenciaUpdateManyAndReturnArgs} args - Arguments to update many Asistencias.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asistencias and only return the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends asistenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, asistenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asistencia.
     * @param {asistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends asistenciaUpsertArgs>(args: SelectSubset<T, asistenciaUpsertArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends asistenciaCountArgs>(
      args?: Subset<T, asistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends asistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asistenciaGroupByArgs['orderBy'] }
        : { orderBy?: asistenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, asistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asistencia model
   */
  readonly fields: asistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscripciones<T extends inscripcionesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, inscripcionesDefaultArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the asistencia model
   */
  interface asistenciaFieldRefs {
    readonly id: FieldRef<"asistencia", 'String'>
    readonly inscripcion_id: FieldRef<"asistencia", 'String'>
    readonly estado: FieldRef<"asistencia", 'String'>
    readonly marcado_en: FieldRef<"asistencia", 'DateTime'>
    readonly coordinador_id: FieldRef<"asistencia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * asistencia findUnique
   */
  export type asistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia findUniqueOrThrow
   */
  export type asistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia findFirst
   */
  export type asistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia findFirstOrThrow
   */
  export type asistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia findMany
   */
  export type asistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencias to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia create
   */
  export type asistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a asistencia.
     */
    data: XOR<asistenciaCreateInput, asistenciaUncheckedCreateInput>
  }

  /**
   * asistencia createMany
   */
  export type asistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asistencias.
     */
    data: asistenciaCreateManyInput | asistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asistencia createManyAndReturn
   */
  export type asistenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * The data used to create many asistencias.
     */
    data: asistenciaCreateManyInput | asistenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * asistencia update
   */
  export type asistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a asistencia.
     */
    data: XOR<asistenciaUpdateInput, asistenciaUncheckedUpdateInput>
    /**
     * Choose, which asistencia to update.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia updateMany
   */
  export type asistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asistencias.
     */
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyInput>
    /**
     * Filter which asistencias to update
     */
    where?: asistenciaWhereInput
    /**
     * Limit how many asistencias to update.
     */
    limit?: number
  }

  /**
   * asistencia updateManyAndReturn
   */
  export type asistenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * The data used to update asistencias.
     */
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyInput>
    /**
     * Filter which asistencias to update
     */
    where?: asistenciaWhereInput
    /**
     * Limit how many asistencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * asistencia upsert
   */
  export type asistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the asistencia to update in case it exists.
     */
    where: asistenciaWhereUniqueInput
    /**
     * In case the asistencia found by the `where` argument doesn't exist, create a new asistencia with this data.
     */
    create: XOR<asistenciaCreateInput, asistenciaUncheckedCreateInput>
    /**
     * In case the asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asistenciaUpdateInput, asistenciaUncheckedUpdateInput>
  }

  /**
   * asistencia delete
   */
  export type asistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter which asistencia to delete.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia deleteMany
   */
  export type asistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistencias to delete
     */
    where?: asistenciaWhereInput
    /**
     * Limit how many asistencias to delete.
     */
    limit?: number
  }

  /**
   * asistencia without action
   */
  export type asistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asistencia
     */
    omit?: asistenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
  }


  /**
   * Model certificados
   */

  export type AggregateCertificados = {
    _count: CertificadosCountAggregateOutputType | null
    _min: CertificadosMinAggregateOutputType | null
    _max: CertificadosMaxAggregateOutputType | null
  }

  export type CertificadosMinAggregateOutputType = {
    id: string | null
    voluntario_id: string | null
    evento_id: string | null
    url_pdf: string | null
    emitido_en: Date | null
    coordinador_id: string | null
  }

  export type CertificadosMaxAggregateOutputType = {
    id: string | null
    voluntario_id: string | null
    evento_id: string | null
    url_pdf: string | null
    emitido_en: Date | null
    coordinador_id: string | null
  }

  export type CertificadosCountAggregateOutputType = {
    id: number
    voluntario_id: number
    evento_id: number
    url_pdf: number
    emitido_en: number
    coordinador_id: number
    _all: number
  }


  export type CertificadosMinAggregateInputType = {
    id?: true
    voluntario_id?: true
    evento_id?: true
    url_pdf?: true
    emitido_en?: true
    coordinador_id?: true
  }

  export type CertificadosMaxAggregateInputType = {
    id?: true
    voluntario_id?: true
    evento_id?: true
    url_pdf?: true
    emitido_en?: true
    coordinador_id?: true
  }

  export type CertificadosCountAggregateInputType = {
    id?: true
    voluntario_id?: true
    evento_id?: true
    url_pdf?: true
    emitido_en?: true
    coordinador_id?: true
    _all?: true
  }

  export type CertificadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which certificados to aggregate.
     */
    where?: certificadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificados to fetch.
     */
    orderBy?: certificadosOrderByWithRelationInput | certificadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: certificadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned certificados
    **/
    _count?: true | CertificadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificadosMaxAggregateInputType
  }

  export type GetCertificadosAggregateType<T extends CertificadosAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificados[P]>
      : GetScalarType<T[P], AggregateCertificados[P]>
  }




  export type certificadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: certificadosWhereInput
    orderBy?: certificadosOrderByWithAggregationInput | certificadosOrderByWithAggregationInput[]
    by: CertificadosScalarFieldEnum[] | CertificadosScalarFieldEnum
    having?: certificadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificadosCountAggregateInputType | true
    _min?: CertificadosMinAggregateInputType
    _max?: CertificadosMaxAggregateInputType
  }

  export type CertificadosGroupByOutputType = {
    id: string
    voluntario_id: string
    evento_id: string
    url_pdf: string | null
    emitido_en: Date
    coordinador_id: string
    _count: CertificadosCountAggregateOutputType | null
    _min: CertificadosMinAggregateOutputType | null
    _max: CertificadosMaxAggregateOutputType | null
  }

  type GetCertificadosGroupByPayload<T extends certificadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificadosGroupByOutputType[P]>
            : GetScalarType<T[P], CertificadosGroupByOutputType[P]>
        }
      >
    >


  export type certificadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voluntario_id?: boolean
    evento_id?: boolean
    url_pdf?: boolean
    emitido_en?: boolean
    coordinador_id?: boolean
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificados"]>

  export type certificadosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voluntario_id?: boolean
    evento_id?: boolean
    url_pdf?: boolean
    emitido_en?: boolean
    coordinador_id?: boolean
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificados"]>

  export type certificadosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voluntario_id?: boolean
    evento_id?: boolean
    url_pdf?: boolean
    emitido_en?: boolean
    coordinador_id?: boolean
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificados"]>

  export type certificadosSelectScalar = {
    id?: boolean
    voluntario_id?: boolean
    evento_id?: boolean
    url_pdf?: boolean
    emitido_en?: boolean
    coordinador_id?: boolean
  }

  export type certificadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "voluntario_id" | "evento_id" | "url_pdf" | "emitido_en" | "coordinador_id", ExtArgs["result"]["certificados"]>
  export type certificadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
  }
  export type certificadosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
  }
  export type certificadosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voluntarios?: boolean | voluntariosDefaultArgs<ExtArgs>
    eventos?: boolean | eventosDefaultArgs<ExtArgs>
  }

  export type $certificadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "certificados"
    objects: {
      voluntarios: Prisma.$voluntariosPayload<ExtArgs>
      eventos: Prisma.$eventosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      voluntario_id: string
      evento_id: string
      url_pdf: string | null
      emitido_en: Date
      coordinador_id: string
    }, ExtArgs["result"]["certificados"]>
    composites: {}
  }

  type certificadosGetPayload<S extends boolean | null | undefined | certificadosDefaultArgs> = $Result.GetResult<Prisma.$certificadosPayload, S>

  type certificadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<certificadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificadosCountAggregateInputType | true
    }

  export interface certificadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['certificados'], meta: { name: 'certificados' } }
    /**
     * Find zero or one Certificados that matches the filter.
     * @param {certificadosFindUniqueArgs} args - Arguments to find a Certificados
     * @example
     * // Get one Certificados
     * const certificados = await prisma.certificados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends certificadosFindUniqueArgs>(args: SelectSubset<T, certificadosFindUniqueArgs<ExtArgs>>): Prisma__certificadosClient<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {certificadosFindUniqueOrThrowArgs} args - Arguments to find a Certificados
     * @example
     * // Get one Certificados
     * const certificados = await prisma.certificados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends certificadosFindUniqueOrThrowArgs>(args: SelectSubset<T, certificadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__certificadosClient<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificadosFindFirstArgs} args - Arguments to find a Certificados
     * @example
     * // Get one Certificados
     * const certificados = await prisma.certificados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends certificadosFindFirstArgs>(args?: SelectSubset<T, certificadosFindFirstArgs<ExtArgs>>): Prisma__certificadosClient<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificadosFindFirstOrThrowArgs} args - Arguments to find a Certificados
     * @example
     * // Get one Certificados
     * const certificados = await prisma.certificados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends certificadosFindFirstOrThrowArgs>(args?: SelectSubset<T, certificadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__certificadosClient<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificados
     * const certificados = await prisma.certificados.findMany()
     * 
     * // Get first 10 Certificados
     * const certificados = await prisma.certificados.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificadosWithIdOnly = await prisma.certificados.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends certificadosFindManyArgs>(args?: SelectSubset<T, certificadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificados.
     * @param {certificadosCreateArgs} args - Arguments to create a Certificados.
     * @example
     * // Create one Certificados
     * const Certificados = await prisma.certificados.create({
     *   data: {
     *     // ... data to create a Certificados
     *   }
     * })
     * 
     */
    create<T extends certificadosCreateArgs>(args: SelectSubset<T, certificadosCreateArgs<ExtArgs>>): Prisma__certificadosClient<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificados.
     * @param {certificadosCreateManyArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificados = await prisma.certificados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends certificadosCreateManyArgs>(args?: SelectSubset<T, certificadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificados and returns the data saved in the database.
     * @param {certificadosCreateManyAndReturnArgs} args - Arguments to create many Certificados.
     * @example
     * // Create many Certificados
     * const certificados = await prisma.certificados.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificados and only return the `id`
     * const certificadosWithIdOnly = await prisma.certificados.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends certificadosCreateManyAndReturnArgs>(args?: SelectSubset<T, certificadosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificados.
     * @param {certificadosDeleteArgs} args - Arguments to delete one Certificados.
     * @example
     * // Delete one Certificados
     * const Certificados = await prisma.certificados.delete({
     *   where: {
     *     // ... filter to delete one Certificados
     *   }
     * })
     * 
     */
    delete<T extends certificadosDeleteArgs>(args: SelectSubset<T, certificadosDeleteArgs<ExtArgs>>): Prisma__certificadosClient<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificados.
     * @param {certificadosUpdateArgs} args - Arguments to update one Certificados.
     * @example
     * // Update one Certificados
     * const certificados = await prisma.certificados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends certificadosUpdateArgs>(args: SelectSubset<T, certificadosUpdateArgs<ExtArgs>>): Prisma__certificadosClient<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificados.
     * @param {certificadosDeleteManyArgs} args - Arguments to filter Certificados to delete.
     * @example
     * // Delete a few Certificados
     * const { count } = await prisma.certificados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends certificadosDeleteManyArgs>(args?: SelectSubset<T, certificadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificados
     * const certificados = await prisma.certificados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends certificadosUpdateManyArgs>(args: SelectSubset<T, certificadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificados and returns the data updated in the database.
     * @param {certificadosUpdateManyAndReturnArgs} args - Arguments to update many Certificados.
     * @example
     * // Update many Certificados
     * const certificados = await prisma.certificados.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificados and only return the `id`
     * const certificadosWithIdOnly = await prisma.certificados.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends certificadosUpdateManyAndReturnArgs>(args: SelectSubset<T, certificadosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificados.
     * @param {certificadosUpsertArgs} args - Arguments to update or create a Certificados.
     * @example
     * // Update or create a Certificados
     * const certificados = await prisma.certificados.upsert({
     *   create: {
     *     // ... data to create a Certificados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificados we want to update
     *   }
     * })
     */
    upsert<T extends certificadosUpsertArgs>(args: SelectSubset<T, certificadosUpsertArgs<ExtArgs>>): Prisma__certificadosClient<$Result.GetResult<Prisma.$certificadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificadosCountArgs} args - Arguments to filter Certificados to count.
     * @example
     * // Count the number of Certificados
     * const count = await prisma.certificados.count({
     *   where: {
     *     // ... the filter for the Certificados we want to count
     *   }
     * })
    **/
    count<T extends certificadosCountArgs>(
      args?: Subset<T, certificadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificadosAggregateArgs>(args: Subset<T, CertificadosAggregateArgs>): Prisma.PrismaPromise<GetCertificadosAggregateType<T>>

    /**
     * Group by Certificados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificadosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends certificadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: certificadosGroupByArgs['orderBy'] }
        : { orderBy?: certificadosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, certificadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the certificados model
   */
  readonly fields: certificadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for certificados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__certificadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voluntarios<T extends voluntariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, voluntariosDefaultArgs<ExtArgs>>): Prisma__voluntariosClient<$Result.GetResult<Prisma.$voluntariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventos<T extends eventosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventosDefaultArgs<ExtArgs>>): Prisma__eventosClient<$Result.GetResult<Prisma.$eventosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the certificados model
   */
  interface certificadosFieldRefs {
    readonly id: FieldRef<"certificados", 'String'>
    readonly voluntario_id: FieldRef<"certificados", 'String'>
    readonly evento_id: FieldRef<"certificados", 'String'>
    readonly url_pdf: FieldRef<"certificados", 'String'>
    readonly emitido_en: FieldRef<"certificados", 'DateTime'>
    readonly coordinador_id: FieldRef<"certificados", 'String'>
  }
    

  // Custom InputTypes
  /**
   * certificados findUnique
   */
  export type certificadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * Filter, which certificados to fetch.
     */
    where: certificadosWhereUniqueInput
  }

  /**
   * certificados findUniqueOrThrow
   */
  export type certificadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * Filter, which certificados to fetch.
     */
    where: certificadosWhereUniqueInput
  }

  /**
   * certificados findFirst
   */
  export type certificadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * Filter, which certificados to fetch.
     */
    where?: certificadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificados to fetch.
     */
    orderBy?: certificadosOrderByWithRelationInput | certificadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for certificados.
     */
    cursor?: certificadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of certificados.
     */
    distinct?: CertificadosScalarFieldEnum | CertificadosScalarFieldEnum[]
  }

  /**
   * certificados findFirstOrThrow
   */
  export type certificadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * Filter, which certificados to fetch.
     */
    where?: certificadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificados to fetch.
     */
    orderBy?: certificadosOrderByWithRelationInput | certificadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for certificados.
     */
    cursor?: certificadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of certificados.
     */
    distinct?: CertificadosScalarFieldEnum | CertificadosScalarFieldEnum[]
  }

  /**
   * certificados findMany
   */
  export type certificadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * Filter, which certificados to fetch.
     */
    where?: certificadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificados to fetch.
     */
    orderBy?: certificadosOrderByWithRelationInput | certificadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing certificados.
     */
    cursor?: certificadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificados.
     */
    skip?: number
    distinct?: CertificadosScalarFieldEnum | CertificadosScalarFieldEnum[]
  }

  /**
   * certificados create
   */
  export type certificadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * The data needed to create a certificados.
     */
    data: XOR<certificadosCreateInput, certificadosUncheckedCreateInput>
  }

  /**
   * certificados createMany
   */
  export type certificadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many certificados.
     */
    data: certificadosCreateManyInput | certificadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * certificados createManyAndReturn
   */
  export type certificadosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * The data used to create many certificados.
     */
    data: certificadosCreateManyInput | certificadosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * certificados update
   */
  export type certificadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * The data needed to update a certificados.
     */
    data: XOR<certificadosUpdateInput, certificadosUncheckedUpdateInput>
    /**
     * Choose, which certificados to update.
     */
    where: certificadosWhereUniqueInput
  }

  /**
   * certificados updateMany
   */
  export type certificadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update certificados.
     */
    data: XOR<certificadosUpdateManyMutationInput, certificadosUncheckedUpdateManyInput>
    /**
     * Filter which certificados to update
     */
    where?: certificadosWhereInput
    /**
     * Limit how many certificados to update.
     */
    limit?: number
  }

  /**
   * certificados updateManyAndReturn
   */
  export type certificadosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * The data used to update certificados.
     */
    data: XOR<certificadosUpdateManyMutationInput, certificadosUncheckedUpdateManyInput>
    /**
     * Filter which certificados to update
     */
    where?: certificadosWhereInput
    /**
     * Limit how many certificados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * certificados upsert
   */
  export type certificadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * The filter to search for the certificados to update in case it exists.
     */
    where: certificadosWhereUniqueInput
    /**
     * In case the certificados found by the `where` argument doesn't exist, create a new certificados with this data.
     */
    create: XOR<certificadosCreateInput, certificadosUncheckedCreateInput>
    /**
     * In case the certificados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<certificadosUpdateInput, certificadosUncheckedUpdateInput>
  }

  /**
   * certificados delete
   */
  export type certificadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
    /**
     * Filter which certificados to delete.
     */
    where: certificadosWhereUniqueInput
  }

  /**
   * certificados deleteMany
   */
  export type certificadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which certificados to delete
     */
    where?: certificadosWhereInput
    /**
     * Limit how many certificados to delete.
     */
    limit?: number
  }

  /**
   * certificados without action
   */
  export type certificadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificados
     */
    select?: certificadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificados
     */
    omit?: certificadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: certificadosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdministradoresScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    hash_contrasena: 'hash_contrasena',
    permisos: 'permisos',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en'
  };

  export type AdministradoresScalarFieldEnum = (typeof AdministradoresScalarFieldEnum)[keyof typeof AdministradoresScalarFieldEnum]


  export const OrganizacionesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    nombre_esquema: 'nombre_esquema',
    subdominio: 'subdominio',
    marca: 'marca',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en'
  };

  export type OrganizacionesScalarFieldEnum = (typeof OrganizacionesScalarFieldEnum)[keyof typeof OrganizacionesScalarFieldEnum]


  export const SuscripcionesScalarFieldEnum: {
    id: 'id',
    organizacion_id: 'organizacion_id',
    plan: 'plan',
    fecha_inicio: 'fecha_inicio',
    fecha_proximo_pago: 'fecha_proximo_pago',
    estado: 'estado',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en'
  };

  export type SuscripcionesScalarFieldEnum = (typeof SuscripcionesScalarFieldEnum)[keyof typeof SuscripcionesScalarFieldEnum]


  export const Tenant_usuariosScalarFieldEnum: {
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

  export type Tenant_usuariosScalarFieldEnum = (typeof Tenant_usuariosScalarFieldEnum)[keyof typeof Tenant_usuariosScalarFieldEnum]


  export const VoluntariosScalarFieldEnum: {
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

  export type VoluntariosScalarFieldEnum = (typeof VoluntariosScalarFieldEnum)[keyof typeof VoluntariosScalarFieldEnum]


  export const EventosScalarFieldEnum: {
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

  export type EventosScalarFieldEnum = (typeof EventosScalarFieldEnum)[keyof typeof EventosScalarFieldEnum]


  export const InscripcionesScalarFieldEnum: {
    id: 'id',
    evento_id: 'evento_id',
    voluntario_id: 'voluntario_id',
    estado: 'estado',
    fecha_inscripcion: 'fecha_inscripcion',
    creado_en: 'creado_en',
    actualizado_en: 'actualizado_en'
  };

  export type InscripcionesScalarFieldEnum = (typeof InscripcionesScalarFieldEnum)[keyof typeof InscripcionesScalarFieldEnum]


  export const AsistenciaScalarFieldEnum: {
    id: 'id',
    inscripcion_id: 'inscripcion_id',
    estado: 'estado',
    marcado_en: 'marcado_en',
    coordinador_id: 'coordinador_id'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


  export const CertificadosScalarFieldEnum: {
    id: 'id',
    voluntario_id: 'voluntario_id',
    evento_id: 'evento_id',
    url_pdf: 'url_pdf',
    emitido_en: 'emitido_en',
    coordinador_id: 'coordinador_id'
  };

  export type CertificadosScalarFieldEnum = (typeof CertificadosScalarFieldEnum)[keyof typeof CertificadosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type administradoresWhereInput = {
    AND?: administradoresWhereInput | administradoresWhereInput[]
    OR?: administradoresWhereInput[]
    NOT?: administradoresWhereInput | administradoresWhereInput[]
    id?: UuidFilter<"administradores"> | string
    nombre?: StringFilter<"administradores"> | string
    correo?: StringFilter<"administradores"> | string
    hash_contrasena?: StringFilter<"administradores"> | string
    permisos?: JsonNullableFilter<"administradores">
    creado_en?: DateTimeFilter<"administradores"> | Date | string
    actualizado_en?: DateTimeFilter<"administradores"> | Date | string
  }

  export type administradoresOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    permisos?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type administradoresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    correo?: string
    AND?: administradoresWhereInput | administradoresWhereInput[]
    OR?: administradoresWhereInput[]
    NOT?: administradoresWhereInput | administradoresWhereInput[]
    nombre?: StringFilter<"administradores"> | string
    hash_contrasena?: StringFilter<"administradores"> | string
    permisos?: JsonNullableFilter<"administradores">
    creado_en?: DateTimeFilter<"administradores"> | Date | string
    actualizado_en?: DateTimeFilter<"administradores"> | Date | string
  }, "id" | "correo">

  export type administradoresOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    permisos?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    _count?: administradoresCountOrderByAggregateInput
    _max?: administradoresMaxOrderByAggregateInput
    _min?: administradoresMinOrderByAggregateInput
  }

  export type administradoresScalarWhereWithAggregatesInput = {
    AND?: administradoresScalarWhereWithAggregatesInput | administradoresScalarWhereWithAggregatesInput[]
    OR?: administradoresScalarWhereWithAggregatesInput[]
    NOT?: administradoresScalarWhereWithAggregatesInput | administradoresScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"administradores"> | string
    nombre?: StringWithAggregatesFilter<"administradores"> | string
    correo?: StringWithAggregatesFilter<"administradores"> | string
    hash_contrasena?: StringWithAggregatesFilter<"administradores"> | string
    permisos?: JsonNullableWithAggregatesFilter<"administradores">
    creado_en?: DateTimeWithAggregatesFilter<"administradores"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"administradores"> | Date | string
  }

  export type organizacionesWhereInput = {
    AND?: organizacionesWhereInput | organizacionesWhereInput[]
    OR?: organizacionesWhereInput[]
    NOT?: organizacionesWhereInput | organizacionesWhereInput[]
    id?: UuidFilter<"organizaciones"> | string
    nombre?: StringFilter<"organizaciones"> | string
    nombre_esquema?: StringFilter<"organizaciones"> | string
    subdominio?: StringNullableFilter<"organizaciones"> | string | null
    marca?: JsonNullableFilter<"organizaciones">
    creado_en?: DateTimeFilter<"organizaciones"> | Date | string
    actualizado_en?: DateTimeFilter<"organizaciones"> | Date | string
    suscripciones?: SuscripcionesListRelationFilter
    tenant_usuarios?: Tenant_usuariosListRelationFilter
  }

  export type organizacionesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombre_esquema?: SortOrder
    subdominio?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    suscripciones?: suscripcionesOrderByRelationAggregateInput
    tenant_usuarios?: tenant_usuariosOrderByRelationAggregateInput
  }

  export type organizacionesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre_esquema?: string
    subdominio?: string
    AND?: organizacionesWhereInput | organizacionesWhereInput[]
    OR?: organizacionesWhereInput[]
    NOT?: organizacionesWhereInput | organizacionesWhereInput[]
    nombre?: StringFilter<"organizaciones"> | string
    marca?: JsonNullableFilter<"organizaciones">
    creado_en?: DateTimeFilter<"organizaciones"> | Date | string
    actualizado_en?: DateTimeFilter<"organizaciones"> | Date | string
    suscripciones?: SuscripcionesListRelationFilter
    tenant_usuarios?: Tenant_usuariosListRelationFilter
  }, "id" | "nombre_esquema" | "subdominio">

  export type organizacionesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombre_esquema?: SortOrder
    subdominio?: SortOrderInput | SortOrder
    marca?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    _count?: organizacionesCountOrderByAggregateInput
    _max?: organizacionesMaxOrderByAggregateInput
    _min?: organizacionesMinOrderByAggregateInput
  }

  export type organizacionesScalarWhereWithAggregatesInput = {
    AND?: organizacionesScalarWhereWithAggregatesInput | organizacionesScalarWhereWithAggregatesInput[]
    OR?: organizacionesScalarWhereWithAggregatesInput[]
    NOT?: organizacionesScalarWhereWithAggregatesInput | organizacionesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"organizaciones"> | string
    nombre?: StringWithAggregatesFilter<"organizaciones"> | string
    nombre_esquema?: StringWithAggregatesFilter<"organizaciones"> | string
    subdominio?: StringNullableWithAggregatesFilter<"organizaciones"> | string | null
    marca?: JsonNullableWithAggregatesFilter<"organizaciones">
    creado_en?: DateTimeWithAggregatesFilter<"organizaciones"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"organizaciones"> | Date | string
  }

  export type suscripcionesWhereInput = {
    AND?: suscripcionesWhereInput | suscripcionesWhereInput[]
    OR?: suscripcionesWhereInput[]
    NOT?: suscripcionesWhereInput | suscripcionesWhereInput[]
    id?: UuidFilter<"suscripciones"> | string
    organizacion_id?: UuidFilter<"suscripciones"> | string
    plan?: StringNullableFilter<"suscripciones"> | string | null
    fecha_inicio?: DateTimeNullableFilter<"suscripciones"> | Date | string | null
    fecha_proximo_pago?: DateTimeNullableFilter<"suscripciones"> | Date | string | null
    estado?: StringNullableFilter<"suscripciones"> | string | null
    creado_en?: DateTimeFilter<"suscripciones"> | Date | string
    actualizado_en?: DateTimeFilter<"suscripciones"> | Date | string
    organizacion?: XOR<OrganizacionesScalarRelationFilter, organizacionesWhereInput>
  }

  export type suscripcionesOrderByWithRelationInput = {
    id?: SortOrder
    organizacion_id?: SortOrder
    plan?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_proximo_pago?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    organizacion?: organizacionesOrderByWithRelationInput
  }

  export type suscripcionesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: suscripcionesWhereInput | suscripcionesWhereInput[]
    OR?: suscripcionesWhereInput[]
    NOT?: suscripcionesWhereInput | suscripcionesWhereInput[]
    organizacion_id?: UuidFilter<"suscripciones"> | string
    plan?: StringNullableFilter<"suscripciones"> | string | null
    fecha_inicio?: DateTimeNullableFilter<"suscripciones"> | Date | string | null
    fecha_proximo_pago?: DateTimeNullableFilter<"suscripciones"> | Date | string | null
    estado?: StringNullableFilter<"suscripciones"> | string | null
    creado_en?: DateTimeFilter<"suscripciones"> | Date | string
    actualizado_en?: DateTimeFilter<"suscripciones"> | Date | string
    organizacion?: XOR<OrganizacionesScalarRelationFilter, organizacionesWhereInput>
  }, "id">

  export type suscripcionesOrderByWithAggregationInput = {
    id?: SortOrder
    organizacion_id?: SortOrder
    plan?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrderInput | SortOrder
    fecha_proximo_pago?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    _count?: suscripcionesCountOrderByAggregateInput
    _max?: suscripcionesMaxOrderByAggregateInput
    _min?: suscripcionesMinOrderByAggregateInput
  }

  export type suscripcionesScalarWhereWithAggregatesInput = {
    AND?: suscripcionesScalarWhereWithAggregatesInput | suscripcionesScalarWhereWithAggregatesInput[]
    OR?: suscripcionesScalarWhereWithAggregatesInput[]
    NOT?: suscripcionesScalarWhereWithAggregatesInput | suscripcionesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"suscripciones"> | string
    organizacion_id?: UuidWithAggregatesFilter<"suscripciones"> | string
    plan?: StringNullableWithAggregatesFilter<"suscripciones"> | string | null
    fecha_inicio?: DateTimeNullableWithAggregatesFilter<"suscripciones"> | Date | string | null
    fecha_proximo_pago?: DateTimeNullableWithAggregatesFilter<"suscripciones"> | Date | string | null
    estado?: StringNullableWithAggregatesFilter<"suscripciones"> | string | null
    creado_en?: DateTimeWithAggregatesFilter<"suscripciones"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"suscripciones"> | Date | string
  }

  export type tenant_usuariosWhereInput = {
    AND?: tenant_usuariosWhereInput | tenant_usuariosWhereInput[]
    OR?: tenant_usuariosWhereInput[]
    NOT?: tenant_usuariosWhereInput | tenant_usuariosWhereInput[]
    id?: UuidFilter<"tenant_usuarios"> | string
    tenant_id?: UuidFilter<"tenant_usuarios"> | string
    nombre?: StringFilter<"tenant_usuarios"> | string
    correo?: StringFilter<"tenant_usuarios"> | string
    hash_contrasena?: StringFilter<"tenant_usuarios"> | string
    rol?: StringFilter<"tenant_usuarios"> | string
    permisos?: JsonNullableFilter<"tenant_usuarios">
    creado_en?: DateTimeFilter<"tenant_usuarios"> | Date | string
    actualizado_en?: DateTimeFilter<"tenant_usuarios"> | Date | string
    organizacion?: XOR<OrganizacionesScalarRelationFilter, organizacionesWhereInput>
  }

  export type tenant_usuariosOrderByWithRelationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    rol?: SortOrder
    permisos?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    organizacion?: organizacionesOrderByWithRelationInput
  }

  export type tenant_usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    correo?: string
    AND?: tenant_usuariosWhereInput | tenant_usuariosWhereInput[]
    OR?: tenant_usuariosWhereInput[]
    NOT?: tenant_usuariosWhereInput | tenant_usuariosWhereInput[]
    tenant_id?: UuidFilter<"tenant_usuarios"> | string
    nombre?: StringFilter<"tenant_usuarios"> | string
    hash_contrasena?: StringFilter<"tenant_usuarios"> | string
    rol?: StringFilter<"tenant_usuarios"> | string
    permisos?: JsonNullableFilter<"tenant_usuarios">
    creado_en?: DateTimeFilter<"tenant_usuarios"> | Date | string
    actualizado_en?: DateTimeFilter<"tenant_usuarios"> | Date | string
    organizacion?: XOR<OrganizacionesScalarRelationFilter, organizacionesWhereInput>
  }, "id" | "correo">

  export type tenant_usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    rol?: SortOrder
    permisos?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    _count?: tenant_usuariosCountOrderByAggregateInput
    _max?: tenant_usuariosMaxOrderByAggregateInput
    _min?: tenant_usuariosMinOrderByAggregateInput
  }

  export type tenant_usuariosScalarWhereWithAggregatesInput = {
    AND?: tenant_usuariosScalarWhereWithAggregatesInput | tenant_usuariosScalarWhereWithAggregatesInput[]
    OR?: tenant_usuariosScalarWhereWithAggregatesInput[]
    NOT?: tenant_usuariosScalarWhereWithAggregatesInput | tenant_usuariosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tenant_usuarios"> | string
    tenant_id?: UuidWithAggregatesFilter<"tenant_usuarios"> | string
    nombre?: StringWithAggregatesFilter<"tenant_usuarios"> | string
    correo?: StringWithAggregatesFilter<"tenant_usuarios"> | string
    hash_contrasena?: StringWithAggregatesFilter<"tenant_usuarios"> | string
    rol?: StringWithAggregatesFilter<"tenant_usuarios"> | string
    permisos?: JsonNullableWithAggregatesFilter<"tenant_usuarios">
    creado_en?: DateTimeWithAggregatesFilter<"tenant_usuarios"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"tenant_usuarios"> | Date | string
  }

  export type voluntariosWhereInput = {
    AND?: voluntariosWhereInput | voluntariosWhereInput[]
    OR?: voluntariosWhereInput[]
    NOT?: voluntariosWhereInput | voluntariosWhereInput[]
    id?: UuidFilter<"voluntarios"> | string
    nombre_completo?: StringFilter<"voluntarios"> | string
    dni?: StringNullableFilter<"voluntarios"> | string | null
    correo?: StringNullableFilter<"voluntarios"> | string | null
    telefono?: StringNullableFilter<"voluntarios"> | string | null
    area?: StringNullableFilter<"voluntarios"> | string | null
    estado?: StringNullableFilter<"voluntarios"> | string | null
    historial?: JsonNullableFilter<"voluntarios">
    registrado_en?: DateTimeFilter<"voluntarios"> | Date | string
    coordinador_id?: UuidFilter<"voluntarios"> | string
    inscripciones?: InscripcionesListRelationFilter
    certificados?: CertificadosListRelationFilter
  }

  export type voluntariosOrderByWithRelationInput = {
    id?: SortOrder
    nombre_completo?: SortOrder
    dni?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    historial?: SortOrderInput | SortOrder
    registrado_en?: SortOrder
    coordinador_id?: SortOrder
    inscripciones?: inscripcionesOrderByRelationAggregateInput
    certificados?: certificadosOrderByRelationAggregateInput
  }

  export type voluntariosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dni?: string
    AND?: voluntariosWhereInput | voluntariosWhereInput[]
    OR?: voluntariosWhereInput[]
    NOT?: voluntariosWhereInput | voluntariosWhereInput[]
    nombre_completo?: StringFilter<"voluntarios"> | string
    correo?: StringNullableFilter<"voluntarios"> | string | null
    telefono?: StringNullableFilter<"voluntarios"> | string | null
    area?: StringNullableFilter<"voluntarios"> | string | null
    estado?: StringNullableFilter<"voluntarios"> | string | null
    historial?: JsonNullableFilter<"voluntarios">
    registrado_en?: DateTimeFilter<"voluntarios"> | Date | string
    coordinador_id?: UuidFilter<"voluntarios"> | string
    inscripciones?: InscripcionesListRelationFilter
    certificados?: CertificadosListRelationFilter
  }, "id" | "dni">

  export type voluntariosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre_completo?: SortOrder
    dni?: SortOrderInput | SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    historial?: SortOrderInput | SortOrder
    registrado_en?: SortOrder
    coordinador_id?: SortOrder
    _count?: voluntariosCountOrderByAggregateInput
    _max?: voluntariosMaxOrderByAggregateInput
    _min?: voluntariosMinOrderByAggregateInput
  }

  export type voluntariosScalarWhereWithAggregatesInput = {
    AND?: voluntariosScalarWhereWithAggregatesInput | voluntariosScalarWhereWithAggregatesInput[]
    OR?: voluntariosScalarWhereWithAggregatesInput[]
    NOT?: voluntariosScalarWhereWithAggregatesInput | voluntariosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"voluntarios"> | string
    nombre_completo?: StringWithAggregatesFilter<"voluntarios"> | string
    dni?: StringNullableWithAggregatesFilter<"voluntarios"> | string | null
    correo?: StringNullableWithAggregatesFilter<"voluntarios"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"voluntarios"> | string | null
    area?: StringNullableWithAggregatesFilter<"voluntarios"> | string | null
    estado?: StringNullableWithAggregatesFilter<"voluntarios"> | string | null
    historial?: JsonNullableWithAggregatesFilter<"voluntarios">
    registrado_en?: DateTimeWithAggregatesFilter<"voluntarios"> | Date | string
    coordinador_id?: UuidWithAggregatesFilter<"voluntarios"> | string
  }

  export type eventosWhereInput = {
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    id?: UuidFilter<"eventos"> | string
    titulo?: StringFilter<"eventos"> | string
    nombre?: StringNullableFilter<"eventos"> | string | null
    descripcion?: StringNullableFilter<"eventos"> | string | null
    inicio?: DateTimeFilter<"eventos"> | Date | string
    fecha_inicio?: DateTimeFilter<"eventos"> | Date | string
    fin?: DateTimeNullableFilter<"eventos"> | Date | string | null
    fecha_fin?: DateTimeNullableFilter<"eventos"> | Date | string | null
    ubicacion?: StringNullableFilter<"eventos"> | string | null
    tipo?: StringNullableFilter<"eventos"> | string | null
    estado?: StringNullableFilter<"eventos"> | string | null
    coordinador_id?: UuidFilter<"eventos"> | string
    capacidad?: IntNullableFilter<"eventos"> | number | null
    creado_en?: DateTimeFilter<"eventos"> | Date | string
    actualizado_en?: DateTimeFilter<"eventos"> | Date | string
    requisitos?: JsonNullableFilter<"eventos">
    inscripciones?: InscripcionesListRelationFilter
    certificados?: CertificadosListRelationFilter
  }

  export type eventosOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    nombre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    inicio?: SortOrder
    fecha_inicio?: SortOrder
    fin?: SortOrderInput | SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    coordinador_id?: SortOrder
    capacidad?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    requisitos?: SortOrderInput | SortOrder
    inscripciones?: inscripcionesOrderByRelationAggregateInput
    certificados?: certificadosOrderByRelationAggregateInput
  }

  export type eventosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: eventosWhereInput | eventosWhereInput[]
    OR?: eventosWhereInput[]
    NOT?: eventosWhereInput | eventosWhereInput[]
    titulo?: StringFilter<"eventos"> | string
    nombre?: StringNullableFilter<"eventos"> | string | null
    descripcion?: StringNullableFilter<"eventos"> | string | null
    inicio?: DateTimeFilter<"eventos"> | Date | string
    fecha_inicio?: DateTimeFilter<"eventos"> | Date | string
    fin?: DateTimeNullableFilter<"eventos"> | Date | string | null
    fecha_fin?: DateTimeNullableFilter<"eventos"> | Date | string | null
    ubicacion?: StringNullableFilter<"eventos"> | string | null
    tipo?: StringNullableFilter<"eventos"> | string | null
    estado?: StringNullableFilter<"eventos"> | string | null
    coordinador_id?: UuidFilter<"eventos"> | string
    capacidad?: IntNullableFilter<"eventos"> | number | null
    creado_en?: DateTimeFilter<"eventos"> | Date | string
    actualizado_en?: DateTimeFilter<"eventos"> | Date | string
    requisitos?: JsonNullableFilter<"eventos">
    inscripciones?: InscripcionesListRelationFilter
    certificados?: CertificadosListRelationFilter
  }, "id">

  export type eventosOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    nombre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    inicio?: SortOrder
    fecha_inicio?: SortOrder
    fin?: SortOrderInput | SortOrder
    fecha_fin?: SortOrderInput | SortOrder
    ubicacion?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    coordinador_id?: SortOrder
    capacidad?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    requisitos?: SortOrderInput | SortOrder
    _count?: eventosCountOrderByAggregateInput
    _avg?: eventosAvgOrderByAggregateInput
    _max?: eventosMaxOrderByAggregateInput
    _min?: eventosMinOrderByAggregateInput
    _sum?: eventosSumOrderByAggregateInput
  }

  export type eventosScalarWhereWithAggregatesInput = {
    AND?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    OR?: eventosScalarWhereWithAggregatesInput[]
    NOT?: eventosScalarWhereWithAggregatesInput | eventosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"eventos"> | string
    titulo?: StringWithAggregatesFilter<"eventos"> | string
    nombre?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    inicio?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    fin?: DateTimeNullableWithAggregatesFilter<"eventos"> | Date | string | null
    fecha_fin?: DateTimeNullableWithAggregatesFilter<"eventos"> | Date | string | null
    ubicacion?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    estado?: StringNullableWithAggregatesFilter<"eventos"> | string | null
    coordinador_id?: UuidWithAggregatesFilter<"eventos"> | string
    capacidad?: IntNullableWithAggregatesFilter<"eventos"> | number | null
    creado_en?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"eventos"> | Date | string
    requisitos?: JsonNullableWithAggregatesFilter<"eventos">
  }

  export type inscripcionesWhereInput = {
    AND?: inscripcionesWhereInput | inscripcionesWhereInput[]
    OR?: inscripcionesWhereInput[]
    NOT?: inscripcionesWhereInput | inscripcionesWhereInput[]
    id?: UuidFilter<"inscripciones"> | string
    evento_id?: UuidFilter<"inscripciones"> | string
    voluntario_id?: UuidFilter<"inscripciones"> | string
    estado?: StringNullableFilter<"inscripciones"> | string | null
    fecha_inscripcion?: DateTimeFilter<"inscripciones"> | Date | string
    creado_en?: DateTimeFilter<"inscripciones"> | Date | string
    actualizado_en?: DateTimeFilter<"inscripciones"> | Date | string
    eventos?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    voluntarios?: XOR<VoluntariosScalarRelationFilter, voluntariosWhereInput>
    asistencia?: AsistenciaListRelationFilter
  }

  export type inscripcionesOrderByWithRelationInput = {
    id?: SortOrder
    evento_id?: SortOrder
    voluntario_id?: SortOrder
    estado?: SortOrderInput | SortOrder
    fecha_inscripcion?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    eventos?: eventosOrderByWithRelationInput
    voluntarios?: voluntariosOrderByWithRelationInput
    asistencia?: asistenciaOrderByRelationAggregateInput
  }

  export type inscripcionesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: inscripcionesWhereInput | inscripcionesWhereInput[]
    OR?: inscripcionesWhereInput[]
    NOT?: inscripcionesWhereInput | inscripcionesWhereInput[]
    evento_id?: UuidFilter<"inscripciones"> | string
    voluntario_id?: UuidFilter<"inscripciones"> | string
    estado?: StringNullableFilter<"inscripciones"> | string | null
    fecha_inscripcion?: DateTimeFilter<"inscripciones"> | Date | string
    creado_en?: DateTimeFilter<"inscripciones"> | Date | string
    actualizado_en?: DateTimeFilter<"inscripciones"> | Date | string
    eventos?: XOR<EventosScalarRelationFilter, eventosWhereInput>
    voluntarios?: XOR<VoluntariosScalarRelationFilter, voluntariosWhereInput>
    asistencia?: AsistenciaListRelationFilter
  }, "id">

  export type inscripcionesOrderByWithAggregationInput = {
    id?: SortOrder
    evento_id?: SortOrder
    voluntario_id?: SortOrder
    estado?: SortOrderInput | SortOrder
    fecha_inscripcion?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    _count?: inscripcionesCountOrderByAggregateInput
    _max?: inscripcionesMaxOrderByAggregateInput
    _min?: inscripcionesMinOrderByAggregateInput
  }

  export type inscripcionesScalarWhereWithAggregatesInput = {
    AND?: inscripcionesScalarWhereWithAggregatesInput | inscripcionesScalarWhereWithAggregatesInput[]
    OR?: inscripcionesScalarWhereWithAggregatesInput[]
    NOT?: inscripcionesScalarWhereWithAggregatesInput | inscripcionesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"inscripciones"> | string
    evento_id?: UuidWithAggregatesFilter<"inscripciones"> | string
    voluntario_id?: UuidWithAggregatesFilter<"inscripciones"> | string
    estado?: StringNullableWithAggregatesFilter<"inscripciones"> | string | null
    fecha_inscripcion?: DateTimeWithAggregatesFilter<"inscripciones"> | Date | string
    creado_en?: DateTimeWithAggregatesFilter<"inscripciones"> | Date | string
    actualizado_en?: DateTimeWithAggregatesFilter<"inscripciones"> | Date | string
  }

  export type asistenciaWhereInput = {
    AND?: asistenciaWhereInput | asistenciaWhereInput[]
    OR?: asistenciaWhereInput[]
    NOT?: asistenciaWhereInput | asistenciaWhereInput[]
    id?: UuidFilter<"asistencia"> | string
    inscripcion_id?: UuidFilter<"asistencia"> | string
    estado?: StringNullableFilter<"asistencia"> | string | null
    marcado_en?: DateTimeFilter<"asistencia"> | Date | string
    coordinador_id?: UuidFilter<"asistencia"> | string
    inscripciones?: XOR<InscripcionesScalarRelationFilter, inscripcionesWhereInput>
  }

  export type asistenciaOrderByWithRelationInput = {
    id?: SortOrder
    inscripcion_id?: SortOrder
    estado?: SortOrderInput | SortOrder
    marcado_en?: SortOrder
    coordinador_id?: SortOrder
    inscripciones?: inscripcionesOrderByWithRelationInput
  }

  export type asistenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: asistenciaWhereInput | asistenciaWhereInput[]
    OR?: asistenciaWhereInput[]
    NOT?: asistenciaWhereInput | asistenciaWhereInput[]
    inscripcion_id?: UuidFilter<"asistencia"> | string
    estado?: StringNullableFilter<"asistencia"> | string | null
    marcado_en?: DateTimeFilter<"asistencia"> | Date | string
    coordinador_id?: UuidFilter<"asistencia"> | string
    inscripciones?: XOR<InscripcionesScalarRelationFilter, inscripcionesWhereInput>
  }, "id">

  export type asistenciaOrderByWithAggregationInput = {
    id?: SortOrder
    inscripcion_id?: SortOrder
    estado?: SortOrderInput | SortOrder
    marcado_en?: SortOrder
    coordinador_id?: SortOrder
    _count?: asistenciaCountOrderByAggregateInput
    _max?: asistenciaMaxOrderByAggregateInput
    _min?: asistenciaMinOrderByAggregateInput
  }

  export type asistenciaScalarWhereWithAggregatesInput = {
    AND?: asistenciaScalarWhereWithAggregatesInput | asistenciaScalarWhereWithAggregatesInput[]
    OR?: asistenciaScalarWhereWithAggregatesInput[]
    NOT?: asistenciaScalarWhereWithAggregatesInput | asistenciaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"asistencia"> | string
    inscripcion_id?: UuidWithAggregatesFilter<"asistencia"> | string
    estado?: StringNullableWithAggregatesFilter<"asistencia"> | string | null
    marcado_en?: DateTimeWithAggregatesFilter<"asistencia"> | Date | string
    coordinador_id?: UuidWithAggregatesFilter<"asistencia"> | string
  }

  export type certificadosWhereInput = {
    AND?: certificadosWhereInput | certificadosWhereInput[]
    OR?: certificadosWhereInput[]
    NOT?: certificadosWhereInput | certificadosWhereInput[]
    id?: UuidFilter<"certificados"> | string
    voluntario_id?: UuidFilter<"certificados"> | string
    evento_id?: UuidFilter<"certificados"> | string
    url_pdf?: StringNullableFilter<"certificados"> | string | null
    emitido_en?: DateTimeFilter<"certificados"> | Date | string
    coordinador_id?: UuidFilter<"certificados"> | string
    voluntarios?: XOR<VoluntariosScalarRelationFilter, voluntariosWhereInput>
    eventos?: XOR<EventosScalarRelationFilter, eventosWhereInput>
  }

  export type certificadosOrderByWithRelationInput = {
    id?: SortOrder
    voluntario_id?: SortOrder
    evento_id?: SortOrder
    url_pdf?: SortOrderInput | SortOrder
    emitido_en?: SortOrder
    coordinador_id?: SortOrder
    voluntarios?: voluntariosOrderByWithRelationInput
    eventos?: eventosOrderByWithRelationInput
  }

  export type certificadosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: certificadosWhereInput | certificadosWhereInput[]
    OR?: certificadosWhereInput[]
    NOT?: certificadosWhereInput | certificadosWhereInput[]
    voluntario_id?: UuidFilter<"certificados"> | string
    evento_id?: UuidFilter<"certificados"> | string
    url_pdf?: StringNullableFilter<"certificados"> | string | null
    emitido_en?: DateTimeFilter<"certificados"> | Date | string
    coordinador_id?: UuidFilter<"certificados"> | string
    voluntarios?: XOR<VoluntariosScalarRelationFilter, voluntariosWhereInput>
    eventos?: XOR<EventosScalarRelationFilter, eventosWhereInput>
  }, "id">

  export type certificadosOrderByWithAggregationInput = {
    id?: SortOrder
    voluntario_id?: SortOrder
    evento_id?: SortOrder
    url_pdf?: SortOrderInput | SortOrder
    emitido_en?: SortOrder
    coordinador_id?: SortOrder
    _count?: certificadosCountOrderByAggregateInput
    _max?: certificadosMaxOrderByAggregateInput
    _min?: certificadosMinOrderByAggregateInput
  }

  export type certificadosScalarWhereWithAggregatesInput = {
    AND?: certificadosScalarWhereWithAggregatesInput | certificadosScalarWhereWithAggregatesInput[]
    OR?: certificadosScalarWhereWithAggregatesInput[]
    NOT?: certificadosScalarWhereWithAggregatesInput | certificadosScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"certificados"> | string
    voluntario_id?: UuidWithAggregatesFilter<"certificados"> | string
    evento_id?: UuidWithAggregatesFilter<"certificados"> | string
    url_pdf?: StringNullableWithAggregatesFilter<"certificados"> | string | null
    emitido_en?: DateTimeWithAggregatesFilter<"certificados"> | Date | string
    coordinador_id?: UuidWithAggregatesFilter<"certificados"> | string
  }

  export type administradoresCreateInput = {
    id?: string
    nombre: string
    correo: string
    hash_contrasena: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type administradoresUncheckedCreateInput = {
    id?: string
    nombre: string
    correo: string
    hash_contrasena: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type administradoresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type administradoresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type administradoresCreateManyInput = {
    id?: string
    nombre: string
    correo: string
    hash_contrasena: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type administradoresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type administradoresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizacionesCreateInput = {
    id?: string
    nombre: string
    nombre_esquema: string
    subdominio?: string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
    suscripciones?: suscripcionesCreateNestedManyWithoutOrganizacionInput
    tenant_usuarios?: tenant_usuariosCreateNestedManyWithoutOrganizacionInput
  }

  export type organizacionesUncheckedCreateInput = {
    id?: string
    nombre: string
    nombre_esquema: string
    subdominio?: string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
    suscripciones?: suscripcionesUncheckedCreateNestedManyWithoutOrganizacionInput
    tenant_usuarios?: tenant_usuariosUncheckedCreateNestedManyWithoutOrganizacionInput
  }

  export type organizacionesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    nombre_esquema?: StringFieldUpdateOperationsInput | string
    subdominio?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    suscripciones?: suscripcionesUpdateManyWithoutOrganizacionNestedInput
    tenant_usuarios?: tenant_usuariosUpdateManyWithoutOrganizacionNestedInput
  }

  export type organizacionesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    nombre_esquema?: StringFieldUpdateOperationsInput | string
    subdominio?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    suscripciones?: suscripcionesUncheckedUpdateManyWithoutOrganizacionNestedInput
    tenant_usuarios?: tenant_usuariosUncheckedUpdateManyWithoutOrganizacionNestedInput
  }

  export type organizacionesCreateManyInput = {
    id?: string
    nombre: string
    nombre_esquema: string
    subdominio?: string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type organizacionesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    nombre_esquema?: StringFieldUpdateOperationsInput | string
    subdominio?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type organizacionesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    nombre_esquema?: StringFieldUpdateOperationsInput | string
    subdominio?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suscripcionesCreateInput = {
    id?: string
    plan?: string | null
    fecha_inicio?: Date | string | null
    fecha_proximo_pago?: Date | string | null
    estado?: string | null
    creado_en?: Date | string
    actualizado_en?: Date | string
    organizacion: organizacionesCreateNestedOneWithoutSuscripcionesInput
  }

  export type suscripcionesUncheckedCreateInput = {
    id?: string
    organizacion_id: string
    plan?: string | null
    fecha_inicio?: Date | string | null
    fecha_proximo_pago?: Date | string | null
    estado?: string | null
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type suscripcionesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_proximo_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    organizacion?: organizacionesUpdateOneRequiredWithoutSuscripcionesNestedInput
  }

  export type suscripcionesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizacion_id?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_proximo_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suscripcionesCreateManyInput = {
    id?: string
    organizacion_id: string
    plan?: string | null
    fecha_inicio?: Date | string | null
    fecha_proximo_pago?: Date | string | null
    estado?: string | null
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type suscripcionesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_proximo_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suscripcionesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizacion_id?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_proximo_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_usuariosCreateInput = {
    id?: string
    nombre: string
    correo: string
    hash_contrasena: string
    rol: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
    organizacion: organizacionesCreateNestedOneWithoutTenant_usuariosInput
  }

  export type tenant_usuariosUncheckedCreateInput = {
    id?: string
    tenant_id: string
    nombre: string
    correo: string
    hash_contrasena: string
    rol: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type tenant_usuariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    organizacion?: organizacionesUpdateOneRequiredWithoutTenant_usuariosNestedInput
  }

  export type tenant_usuariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_usuariosCreateManyInput = {
    id?: string
    tenant_id: string
    nombre: string
    correo: string
    hash_contrasena: string
    rol: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type tenant_usuariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_usuariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenant_id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voluntariosCreateInput = {
    id?: string
    nombre_completo: string
    dni?: string | null
    correo?: string | null
    telefono?: string | null
    area?: string | null
    estado?: string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: Date | string
    coordinador_id: string
    inscripciones?: inscripcionesCreateNestedManyWithoutVoluntariosInput
    certificados?: certificadosCreateNestedManyWithoutVoluntariosInput
  }

  export type voluntariosUncheckedCreateInput = {
    id?: string
    nombre_completo: string
    dni?: string | null
    correo?: string | null
    telefono?: string | null
    area?: string | null
    estado?: string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: Date | string
    coordinador_id: string
    inscripciones?: inscripcionesUncheckedCreateNestedManyWithoutVoluntariosInput
    certificados?: certificadosUncheckedCreateNestedManyWithoutVoluntariosInput
  }

  export type voluntariosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    inscripciones?: inscripcionesUpdateManyWithoutVoluntariosNestedInput
    certificados?: certificadosUpdateManyWithoutVoluntariosNestedInput
  }

  export type voluntariosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    inscripciones?: inscripcionesUncheckedUpdateManyWithoutVoluntariosNestedInput
    certificados?: certificadosUncheckedUpdateManyWithoutVoluntariosNestedInput
  }

  export type voluntariosCreateManyInput = {
    id?: string
    nombre_completo: string
    dni?: string | null
    correo?: string | null
    telefono?: string | null
    area?: string | null
    estado?: string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: Date | string
    coordinador_id: string
  }

  export type voluntariosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type voluntariosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type eventosCreateInput = {
    id?: string
    titulo: string
    nombre?: string | null
    descripcion?: string | null
    inicio: Date | string
    fecha_inicio: Date | string
    fin?: Date | string | null
    fecha_fin?: Date | string | null
    ubicacion?: string | null
    tipo?: string | null
    estado?: string | null
    coordinador_id: string
    capacidad?: number | null
    creado_en?: Date | string
    actualizado_en?: Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    inscripciones?: inscripcionesCreateNestedManyWithoutEventosInput
    certificados?: certificadosCreateNestedManyWithoutEventosInput
  }

  export type eventosUncheckedCreateInput = {
    id?: string
    titulo: string
    nombre?: string | null
    descripcion?: string | null
    inicio: Date | string
    fecha_inicio: Date | string
    fin?: Date | string | null
    fecha_fin?: Date | string | null
    ubicacion?: string | null
    tipo?: string | null
    estado?: string | null
    coordinador_id: string
    capacidad?: number | null
    creado_en?: Date | string
    actualizado_en?: Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    inscripciones?: inscripcionesUncheckedCreateNestedManyWithoutEventosInput
    certificados?: certificadosUncheckedCreateNestedManyWithoutEventosInput
  }

  export type eventosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    coordinador_id?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    inscripciones?: inscripcionesUpdateManyWithoutEventosNestedInput
    certificados?: certificadosUpdateManyWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    coordinador_id?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    inscripciones?: inscripcionesUncheckedUpdateManyWithoutEventosNestedInput
    certificados?: certificadosUncheckedUpdateManyWithoutEventosNestedInput
  }

  export type eventosCreateManyInput = {
    id?: string
    titulo: string
    nombre?: string | null
    descripcion?: string | null
    inicio: Date | string
    fecha_inicio: Date | string
    fin?: Date | string | null
    fecha_fin?: Date | string | null
    ubicacion?: string | null
    tipo?: string | null
    estado?: string | null
    coordinador_id: string
    capacidad?: number | null
    creado_en?: Date | string
    actualizado_en?: Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type eventosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    coordinador_id?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type eventosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    coordinador_id?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type inscripcionesCreateInput = {
    id?: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
    eventos: eventosCreateNestedOneWithoutInscripcionesInput
    voluntarios: voluntariosCreateNestedOneWithoutInscripcionesInput
    asistencia?: asistenciaCreateNestedManyWithoutInscripcionesInput
  }

  export type inscripcionesUncheckedCreateInput = {
    id?: string
    evento_id: string
    voluntario_id: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutInscripcionesInput
  }

  export type inscripcionesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eventos?: eventosUpdateOneRequiredWithoutInscripcionesNestedInput
    voluntarios?: voluntariosUpdateOneRequiredWithoutInscripcionesNestedInput
    asistencia?: asistenciaUpdateManyWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencia?: asistenciaUncheckedUpdateManyWithoutInscripcionesNestedInput
  }

  export type inscripcionesCreateManyInput = {
    id?: string
    evento_id: string
    voluntario_id: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type inscripcionesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inscripcionesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaCreateInput = {
    id?: string
    estado?: string | null
    marcado_en?: Date | string
    coordinador_id: string
    inscripciones: inscripcionesCreateNestedOneWithoutAsistenciaInput
  }

  export type asistenciaUncheckedCreateInput = {
    id?: string
    inscripcion_id: string
    estado?: string | null
    marcado_en?: Date | string
    coordinador_id: string
  }

  export type asistenciaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    marcado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    inscripciones?: inscripcionesUpdateOneRequiredWithoutAsistenciaNestedInput
  }

  export type asistenciaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inscripcion_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    marcado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type asistenciaCreateManyInput = {
    id?: string
    inscripcion_id: string
    estado?: string | null
    marcado_en?: Date | string
    coordinador_id: string
  }

  export type asistenciaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    marcado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type asistenciaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inscripcion_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    marcado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type certificadosCreateInput = {
    id?: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
    voluntarios: voluntariosCreateNestedOneWithoutCertificadosInput
    eventos: eventosCreateNestedOneWithoutCertificadosInput
  }

  export type certificadosUncheckedCreateInput = {
    id?: string
    voluntario_id: string
    evento_id: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
  }

  export type certificadosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    voluntarios?: voluntariosUpdateOneRequiredWithoutCertificadosNestedInput
    eventos?: eventosUpdateOneRequiredWithoutCertificadosNestedInput
  }

  export type certificadosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type certificadosCreateManyInput = {
    id?: string
    voluntario_id: string
    evento_id: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
  }

  export type certificadosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type certificadosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type administradoresCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    permisos?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type administradoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type administradoresMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SuscripcionesListRelationFilter = {
    every?: suscripcionesWhereInput
    some?: suscripcionesWhereInput
    none?: suscripcionesWhereInput
  }

  export type Tenant_usuariosListRelationFilter = {
    every?: tenant_usuariosWhereInput
    some?: tenant_usuariosWhereInput
    none?: tenant_usuariosWhereInput
  }

  export type suscripcionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tenant_usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizacionesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombre_esquema?: SortOrder
    subdominio?: SortOrder
    marca?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type organizacionesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombre_esquema?: SortOrder
    subdominio?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type organizacionesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    nombre_esquema?: SortOrder
    subdominio?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrganizacionesScalarRelationFilter = {
    is?: organizacionesWhereInput
    isNot?: organizacionesWhereInput
  }

  export type suscripcionesCountOrderByAggregateInput = {
    id?: SortOrder
    organizacion_id?: SortOrder
    plan?: SortOrder
    fecha_inicio?: SortOrder
    fecha_proximo_pago?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type suscripcionesMaxOrderByAggregateInput = {
    id?: SortOrder
    organizacion_id?: SortOrder
    plan?: SortOrder
    fecha_inicio?: SortOrder
    fecha_proximo_pago?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type suscripcionesMinOrderByAggregateInput = {
    id?: SortOrder
    organizacion_id?: SortOrder
    plan?: SortOrder
    fecha_inicio?: SortOrder
    fecha_proximo_pago?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type tenant_usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    rol?: SortOrder
    permisos?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type tenant_usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    rol?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type tenant_usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    tenant_id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    hash_contrasena?: SortOrder
    rol?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type InscripcionesListRelationFilter = {
    every?: inscripcionesWhereInput
    some?: inscripcionesWhereInput
    none?: inscripcionesWhereInput
  }

  export type CertificadosListRelationFilter = {
    every?: certificadosWhereInput
    some?: certificadosWhereInput
    none?: certificadosWhereInput
  }

  export type inscripcionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type certificadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type voluntariosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre_completo?: SortOrder
    dni?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    area?: SortOrder
    estado?: SortOrder
    historial?: SortOrder
    registrado_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type voluntariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre_completo?: SortOrder
    dni?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    area?: SortOrder
    estado?: SortOrder
    registrado_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type voluntariosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre_completo?: SortOrder
    dni?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    area?: SortOrder
    estado?: SortOrder
    registrado_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type eventosCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    inicio?: SortOrder
    fecha_inicio?: SortOrder
    fin?: SortOrder
    fecha_fin?: SortOrder
    ubicacion?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    coordinador_id?: SortOrder
    capacidad?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
    requisitos?: SortOrder
  }

  export type eventosAvgOrderByAggregateInput = {
    capacidad?: SortOrder
  }

  export type eventosMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    inicio?: SortOrder
    fecha_inicio?: SortOrder
    fin?: SortOrder
    fecha_fin?: SortOrder
    ubicacion?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    coordinador_id?: SortOrder
    capacidad?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type eventosMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    inicio?: SortOrder
    fecha_inicio?: SortOrder
    fin?: SortOrder
    fecha_fin?: SortOrder
    ubicacion?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    coordinador_id?: SortOrder
    capacidad?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type eventosSumOrderByAggregateInput = {
    capacidad?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EventosScalarRelationFilter = {
    is?: eventosWhereInput
    isNot?: eventosWhereInput
  }

  export type VoluntariosScalarRelationFilter = {
    is?: voluntariosWhereInput
    isNot?: voluntariosWhereInput
  }

  export type AsistenciaListRelationFilter = {
    every?: asistenciaWhereInput
    some?: asistenciaWhereInput
    none?: asistenciaWhereInput
  }

  export type asistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inscripcionesCountOrderByAggregateInput = {
    id?: SortOrder
    evento_id?: SortOrder
    voluntario_id?: SortOrder
    estado?: SortOrder
    fecha_inscripcion?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type inscripcionesMaxOrderByAggregateInput = {
    id?: SortOrder
    evento_id?: SortOrder
    voluntario_id?: SortOrder
    estado?: SortOrder
    fecha_inscripcion?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type inscripcionesMinOrderByAggregateInput = {
    id?: SortOrder
    evento_id?: SortOrder
    voluntario_id?: SortOrder
    estado?: SortOrder
    fecha_inscripcion?: SortOrder
    creado_en?: SortOrder
    actualizado_en?: SortOrder
  }

  export type InscripcionesScalarRelationFilter = {
    is?: inscripcionesWhereInput
    isNot?: inscripcionesWhereInput
  }

  export type asistenciaCountOrderByAggregateInput = {
    id?: SortOrder
    inscripcion_id?: SortOrder
    estado?: SortOrder
    marcado_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type asistenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    inscripcion_id?: SortOrder
    estado?: SortOrder
    marcado_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type asistenciaMinOrderByAggregateInput = {
    id?: SortOrder
    inscripcion_id?: SortOrder
    estado?: SortOrder
    marcado_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type certificadosCountOrderByAggregateInput = {
    id?: SortOrder
    voluntario_id?: SortOrder
    evento_id?: SortOrder
    url_pdf?: SortOrder
    emitido_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type certificadosMaxOrderByAggregateInput = {
    id?: SortOrder
    voluntario_id?: SortOrder
    evento_id?: SortOrder
    url_pdf?: SortOrder
    emitido_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type certificadosMinOrderByAggregateInput = {
    id?: SortOrder
    voluntario_id?: SortOrder
    evento_id?: SortOrder
    url_pdf?: SortOrder
    emitido_en?: SortOrder
    coordinador_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type suscripcionesCreateNestedManyWithoutOrganizacionInput = {
    create?: XOR<suscripcionesCreateWithoutOrganizacionInput, suscripcionesUncheckedCreateWithoutOrganizacionInput> | suscripcionesCreateWithoutOrganizacionInput[] | suscripcionesUncheckedCreateWithoutOrganizacionInput[]
    connectOrCreate?: suscripcionesCreateOrConnectWithoutOrganizacionInput | suscripcionesCreateOrConnectWithoutOrganizacionInput[]
    createMany?: suscripcionesCreateManyOrganizacionInputEnvelope
    connect?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
  }

  export type tenant_usuariosCreateNestedManyWithoutOrganizacionInput = {
    create?: XOR<tenant_usuariosCreateWithoutOrganizacionInput, tenant_usuariosUncheckedCreateWithoutOrganizacionInput> | tenant_usuariosCreateWithoutOrganizacionInput[] | tenant_usuariosUncheckedCreateWithoutOrganizacionInput[]
    connectOrCreate?: tenant_usuariosCreateOrConnectWithoutOrganizacionInput | tenant_usuariosCreateOrConnectWithoutOrganizacionInput[]
    createMany?: tenant_usuariosCreateManyOrganizacionInputEnvelope
    connect?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
  }

  export type suscripcionesUncheckedCreateNestedManyWithoutOrganizacionInput = {
    create?: XOR<suscripcionesCreateWithoutOrganizacionInput, suscripcionesUncheckedCreateWithoutOrganizacionInput> | suscripcionesCreateWithoutOrganizacionInput[] | suscripcionesUncheckedCreateWithoutOrganizacionInput[]
    connectOrCreate?: suscripcionesCreateOrConnectWithoutOrganizacionInput | suscripcionesCreateOrConnectWithoutOrganizacionInput[]
    createMany?: suscripcionesCreateManyOrganizacionInputEnvelope
    connect?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
  }

  export type tenant_usuariosUncheckedCreateNestedManyWithoutOrganizacionInput = {
    create?: XOR<tenant_usuariosCreateWithoutOrganizacionInput, tenant_usuariosUncheckedCreateWithoutOrganizacionInput> | tenant_usuariosCreateWithoutOrganizacionInput[] | tenant_usuariosUncheckedCreateWithoutOrganizacionInput[]
    connectOrCreate?: tenant_usuariosCreateOrConnectWithoutOrganizacionInput | tenant_usuariosCreateOrConnectWithoutOrganizacionInput[]
    createMany?: tenant_usuariosCreateManyOrganizacionInputEnvelope
    connect?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type suscripcionesUpdateManyWithoutOrganizacionNestedInput = {
    create?: XOR<suscripcionesCreateWithoutOrganizacionInput, suscripcionesUncheckedCreateWithoutOrganizacionInput> | suscripcionesCreateWithoutOrganizacionInput[] | suscripcionesUncheckedCreateWithoutOrganizacionInput[]
    connectOrCreate?: suscripcionesCreateOrConnectWithoutOrganizacionInput | suscripcionesCreateOrConnectWithoutOrganizacionInput[]
    upsert?: suscripcionesUpsertWithWhereUniqueWithoutOrganizacionInput | suscripcionesUpsertWithWhereUniqueWithoutOrganizacionInput[]
    createMany?: suscripcionesCreateManyOrganizacionInputEnvelope
    set?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
    disconnect?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
    delete?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
    connect?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
    update?: suscripcionesUpdateWithWhereUniqueWithoutOrganizacionInput | suscripcionesUpdateWithWhereUniqueWithoutOrganizacionInput[]
    updateMany?: suscripcionesUpdateManyWithWhereWithoutOrganizacionInput | suscripcionesUpdateManyWithWhereWithoutOrganizacionInput[]
    deleteMany?: suscripcionesScalarWhereInput | suscripcionesScalarWhereInput[]
  }

  export type tenant_usuariosUpdateManyWithoutOrganizacionNestedInput = {
    create?: XOR<tenant_usuariosCreateWithoutOrganizacionInput, tenant_usuariosUncheckedCreateWithoutOrganizacionInput> | tenant_usuariosCreateWithoutOrganizacionInput[] | tenant_usuariosUncheckedCreateWithoutOrganizacionInput[]
    connectOrCreate?: tenant_usuariosCreateOrConnectWithoutOrganizacionInput | tenant_usuariosCreateOrConnectWithoutOrganizacionInput[]
    upsert?: tenant_usuariosUpsertWithWhereUniqueWithoutOrganizacionInput | tenant_usuariosUpsertWithWhereUniqueWithoutOrganizacionInput[]
    createMany?: tenant_usuariosCreateManyOrganizacionInputEnvelope
    set?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
    disconnect?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
    delete?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
    connect?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
    update?: tenant_usuariosUpdateWithWhereUniqueWithoutOrganizacionInput | tenant_usuariosUpdateWithWhereUniqueWithoutOrganizacionInput[]
    updateMany?: tenant_usuariosUpdateManyWithWhereWithoutOrganizacionInput | tenant_usuariosUpdateManyWithWhereWithoutOrganizacionInput[]
    deleteMany?: tenant_usuariosScalarWhereInput | tenant_usuariosScalarWhereInput[]
  }

  export type suscripcionesUncheckedUpdateManyWithoutOrganizacionNestedInput = {
    create?: XOR<suscripcionesCreateWithoutOrganizacionInput, suscripcionesUncheckedCreateWithoutOrganizacionInput> | suscripcionesCreateWithoutOrganizacionInput[] | suscripcionesUncheckedCreateWithoutOrganizacionInput[]
    connectOrCreate?: suscripcionesCreateOrConnectWithoutOrganizacionInput | suscripcionesCreateOrConnectWithoutOrganizacionInput[]
    upsert?: suscripcionesUpsertWithWhereUniqueWithoutOrganizacionInput | suscripcionesUpsertWithWhereUniqueWithoutOrganizacionInput[]
    createMany?: suscripcionesCreateManyOrganizacionInputEnvelope
    set?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
    disconnect?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
    delete?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
    connect?: suscripcionesWhereUniqueInput | suscripcionesWhereUniqueInput[]
    update?: suscripcionesUpdateWithWhereUniqueWithoutOrganizacionInput | suscripcionesUpdateWithWhereUniqueWithoutOrganizacionInput[]
    updateMany?: suscripcionesUpdateManyWithWhereWithoutOrganizacionInput | suscripcionesUpdateManyWithWhereWithoutOrganizacionInput[]
    deleteMany?: suscripcionesScalarWhereInput | suscripcionesScalarWhereInput[]
  }

  export type tenant_usuariosUncheckedUpdateManyWithoutOrganizacionNestedInput = {
    create?: XOR<tenant_usuariosCreateWithoutOrganizacionInput, tenant_usuariosUncheckedCreateWithoutOrganizacionInput> | tenant_usuariosCreateWithoutOrganizacionInput[] | tenant_usuariosUncheckedCreateWithoutOrganizacionInput[]
    connectOrCreate?: tenant_usuariosCreateOrConnectWithoutOrganizacionInput | tenant_usuariosCreateOrConnectWithoutOrganizacionInput[]
    upsert?: tenant_usuariosUpsertWithWhereUniqueWithoutOrganizacionInput | tenant_usuariosUpsertWithWhereUniqueWithoutOrganizacionInput[]
    createMany?: tenant_usuariosCreateManyOrganizacionInputEnvelope
    set?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
    disconnect?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
    delete?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
    connect?: tenant_usuariosWhereUniqueInput | tenant_usuariosWhereUniqueInput[]
    update?: tenant_usuariosUpdateWithWhereUniqueWithoutOrganizacionInput | tenant_usuariosUpdateWithWhereUniqueWithoutOrganizacionInput[]
    updateMany?: tenant_usuariosUpdateManyWithWhereWithoutOrganizacionInput | tenant_usuariosUpdateManyWithWhereWithoutOrganizacionInput[]
    deleteMany?: tenant_usuariosScalarWhereInput | tenant_usuariosScalarWhereInput[]
  }

  export type organizacionesCreateNestedOneWithoutSuscripcionesInput = {
    create?: XOR<organizacionesCreateWithoutSuscripcionesInput, organizacionesUncheckedCreateWithoutSuscripcionesInput>
    connectOrCreate?: organizacionesCreateOrConnectWithoutSuscripcionesInput
    connect?: organizacionesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type organizacionesUpdateOneRequiredWithoutSuscripcionesNestedInput = {
    create?: XOR<organizacionesCreateWithoutSuscripcionesInput, organizacionesUncheckedCreateWithoutSuscripcionesInput>
    connectOrCreate?: organizacionesCreateOrConnectWithoutSuscripcionesInput
    upsert?: organizacionesUpsertWithoutSuscripcionesInput
    connect?: organizacionesWhereUniqueInput
    update?: XOR<XOR<organizacionesUpdateToOneWithWhereWithoutSuscripcionesInput, organizacionesUpdateWithoutSuscripcionesInput>, organizacionesUncheckedUpdateWithoutSuscripcionesInput>
  }

  export type organizacionesCreateNestedOneWithoutTenant_usuariosInput = {
    create?: XOR<organizacionesCreateWithoutTenant_usuariosInput, organizacionesUncheckedCreateWithoutTenant_usuariosInput>
    connectOrCreate?: organizacionesCreateOrConnectWithoutTenant_usuariosInput
    connect?: organizacionesWhereUniqueInput
  }

  export type organizacionesUpdateOneRequiredWithoutTenant_usuariosNestedInput = {
    create?: XOR<organizacionesCreateWithoutTenant_usuariosInput, organizacionesUncheckedCreateWithoutTenant_usuariosInput>
    connectOrCreate?: organizacionesCreateOrConnectWithoutTenant_usuariosInput
    upsert?: organizacionesUpsertWithoutTenant_usuariosInput
    connect?: organizacionesWhereUniqueInput
    update?: XOR<XOR<organizacionesUpdateToOneWithWhereWithoutTenant_usuariosInput, organizacionesUpdateWithoutTenant_usuariosInput>, organizacionesUncheckedUpdateWithoutTenant_usuariosInput>
  }

  export type inscripcionesCreateNestedManyWithoutVoluntariosInput = {
    create?: XOR<inscripcionesCreateWithoutVoluntariosInput, inscripcionesUncheckedCreateWithoutVoluntariosInput> | inscripcionesCreateWithoutVoluntariosInput[] | inscripcionesUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutVoluntariosInput | inscripcionesCreateOrConnectWithoutVoluntariosInput[]
    createMany?: inscripcionesCreateManyVoluntariosInputEnvelope
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
  }

  export type certificadosCreateNestedManyWithoutVoluntariosInput = {
    create?: XOR<certificadosCreateWithoutVoluntariosInput, certificadosUncheckedCreateWithoutVoluntariosInput> | certificadosCreateWithoutVoluntariosInput[] | certificadosUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: certificadosCreateOrConnectWithoutVoluntariosInput | certificadosCreateOrConnectWithoutVoluntariosInput[]
    createMany?: certificadosCreateManyVoluntariosInputEnvelope
    connect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
  }

  export type inscripcionesUncheckedCreateNestedManyWithoutVoluntariosInput = {
    create?: XOR<inscripcionesCreateWithoutVoluntariosInput, inscripcionesUncheckedCreateWithoutVoluntariosInput> | inscripcionesCreateWithoutVoluntariosInput[] | inscripcionesUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutVoluntariosInput | inscripcionesCreateOrConnectWithoutVoluntariosInput[]
    createMany?: inscripcionesCreateManyVoluntariosInputEnvelope
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
  }

  export type certificadosUncheckedCreateNestedManyWithoutVoluntariosInput = {
    create?: XOR<certificadosCreateWithoutVoluntariosInput, certificadosUncheckedCreateWithoutVoluntariosInput> | certificadosCreateWithoutVoluntariosInput[] | certificadosUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: certificadosCreateOrConnectWithoutVoluntariosInput | certificadosCreateOrConnectWithoutVoluntariosInput[]
    createMany?: certificadosCreateManyVoluntariosInputEnvelope
    connect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
  }

  export type inscripcionesUpdateManyWithoutVoluntariosNestedInput = {
    create?: XOR<inscripcionesCreateWithoutVoluntariosInput, inscripcionesUncheckedCreateWithoutVoluntariosInput> | inscripcionesCreateWithoutVoluntariosInput[] | inscripcionesUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutVoluntariosInput | inscripcionesCreateOrConnectWithoutVoluntariosInput[]
    upsert?: inscripcionesUpsertWithWhereUniqueWithoutVoluntariosInput | inscripcionesUpsertWithWhereUniqueWithoutVoluntariosInput[]
    createMany?: inscripcionesCreateManyVoluntariosInputEnvelope
    set?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    disconnect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    delete?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    update?: inscripcionesUpdateWithWhereUniqueWithoutVoluntariosInput | inscripcionesUpdateWithWhereUniqueWithoutVoluntariosInput[]
    updateMany?: inscripcionesUpdateManyWithWhereWithoutVoluntariosInput | inscripcionesUpdateManyWithWhereWithoutVoluntariosInput[]
    deleteMany?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
  }

  export type certificadosUpdateManyWithoutVoluntariosNestedInput = {
    create?: XOR<certificadosCreateWithoutVoluntariosInput, certificadosUncheckedCreateWithoutVoluntariosInput> | certificadosCreateWithoutVoluntariosInput[] | certificadosUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: certificadosCreateOrConnectWithoutVoluntariosInput | certificadosCreateOrConnectWithoutVoluntariosInput[]
    upsert?: certificadosUpsertWithWhereUniqueWithoutVoluntariosInput | certificadosUpsertWithWhereUniqueWithoutVoluntariosInput[]
    createMany?: certificadosCreateManyVoluntariosInputEnvelope
    set?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    disconnect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    delete?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    connect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    update?: certificadosUpdateWithWhereUniqueWithoutVoluntariosInput | certificadosUpdateWithWhereUniqueWithoutVoluntariosInput[]
    updateMany?: certificadosUpdateManyWithWhereWithoutVoluntariosInput | certificadosUpdateManyWithWhereWithoutVoluntariosInput[]
    deleteMany?: certificadosScalarWhereInput | certificadosScalarWhereInput[]
  }

  export type inscripcionesUncheckedUpdateManyWithoutVoluntariosNestedInput = {
    create?: XOR<inscripcionesCreateWithoutVoluntariosInput, inscripcionesUncheckedCreateWithoutVoluntariosInput> | inscripcionesCreateWithoutVoluntariosInput[] | inscripcionesUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutVoluntariosInput | inscripcionesCreateOrConnectWithoutVoluntariosInput[]
    upsert?: inscripcionesUpsertWithWhereUniqueWithoutVoluntariosInput | inscripcionesUpsertWithWhereUniqueWithoutVoluntariosInput[]
    createMany?: inscripcionesCreateManyVoluntariosInputEnvelope
    set?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    disconnect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    delete?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    update?: inscripcionesUpdateWithWhereUniqueWithoutVoluntariosInput | inscripcionesUpdateWithWhereUniqueWithoutVoluntariosInput[]
    updateMany?: inscripcionesUpdateManyWithWhereWithoutVoluntariosInput | inscripcionesUpdateManyWithWhereWithoutVoluntariosInput[]
    deleteMany?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
  }

  export type certificadosUncheckedUpdateManyWithoutVoluntariosNestedInput = {
    create?: XOR<certificadosCreateWithoutVoluntariosInput, certificadosUncheckedCreateWithoutVoluntariosInput> | certificadosCreateWithoutVoluntariosInput[] | certificadosUncheckedCreateWithoutVoluntariosInput[]
    connectOrCreate?: certificadosCreateOrConnectWithoutVoluntariosInput | certificadosCreateOrConnectWithoutVoluntariosInput[]
    upsert?: certificadosUpsertWithWhereUniqueWithoutVoluntariosInput | certificadosUpsertWithWhereUniqueWithoutVoluntariosInput[]
    createMany?: certificadosCreateManyVoluntariosInputEnvelope
    set?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    disconnect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    delete?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    connect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    update?: certificadosUpdateWithWhereUniqueWithoutVoluntariosInput | certificadosUpdateWithWhereUniqueWithoutVoluntariosInput[]
    updateMany?: certificadosUpdateManyWithWhereWithoutVoluntariosInput | certificadosUpdateManyWithWhereWithoutVoluntariosInput[]
    deleteMany?: certificadosScalarWhereInput | certificadosScalarWhereInput[]
  }

  export type inscripcionesCreateNestedManyWithoutEventosInput = {
    create?: XOR<inscripcionesCreateWithoutEventosInput, inscripcionesUncheckedCreateWithoutEventosInput> | inscripcionesCreateWithoutEventosInput[] | inscripcionesUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutEventosInput | inscripcionesCreateOrConnectWithoutEventosInput[]
    createMany?: inscripcionesCreateManyEventosInputEnvelope
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
  }

  export type certificadosCreateNestedManyWithoutEventosInput = {
    create?: XOR<certificadosCreateWithoutEventosInput, certificadosUncheckedCreateWithoutEventosInput> | certificadosCreateWithoutEventosInput[] | certificadosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: certificadosCreateOrConnectWithoutEventosInput | certificadosCreateOrConnectWithoutEventosInput[]
    createMany?: certificadosCreateManyEventosInputEnvelope
    connect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
  }

  export type inscripcionesUncheckedCreateNestedManyWithoutEventosInput = {
    create?: XOR<inscripcionesCreateWithoutEventosInput, inscripcionesUncheckedCreateWithoutEventosInput> | inscripcionesCreateWithoutEventosInput[] | inscripcionesUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutEventosInput | inscripcionesCreateOrConnectWithoutEventosInput[]
    createMany?: inscripcionesCreateManyEventosInputEnvelope
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
  }

  export type certificadosUncheckedCreateNestedManyWithoutEventosInput = {
    create?: XOR<certificadosCreateWithoutEventosInput, certificadosUncheckedCreateWithoutEventosInput> | certificadosCreateWithoutEventosInput[] | certificadosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: certificadosCreateOrConnectWithoutEventosInput | certificadosCreateOrConnectWithoutEventosInput[]
    createMany?: certificadosCreateManyEventosInputEnvelope
    connect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type inscripcionesUpdateManyWithoutEventosNestedInput = {
    create?: XOR<inscripcionesCreateWithoutEventosInput, inscripcionesUncheckedCreateWithoutEventosInput> | inscripcionesCreateWithoutEventosInput[] | inscripcionesUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutEventosInput | inscripcionesCreateOrConnectWithoutEventosInput[]
    upsert?: inscripcionesUpsertWithWhereUniqueWithoutEventosInput | inscripcionesUpsertWithWhereUniqueWithoutEventosInput[]
    createMany?: inscripcionesCreateManyEventosInputEnvelope
    set?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    disconnect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    delete?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    update?: inscripcionesUpdateWithWhereUniqueWithoutEventosInput | inscripcionesUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: inscripcionesUpdateManyWithWhereWithoutEventosInput | inscripcionesUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
  }

  export type certificadosUpdateManyWithoutEventosNestedInput = {
    create?: XOR<certificadosCreateWithoutEventosInput, certificadosUncheckedCreateWithoutEventosInput> | certificadosCreateWithoutEventosInput[] | certificadosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: certificadosCreateOrConnectWithoutEventosInput | certificadosCreateOrConnectWithoutEventosInput[]
    upsert?: certificadosUpsertWithWhereUniqueWithoutEventosInput | certificadosUpsertWithWhereUniqueWithoutEventosInput[]
    createMany?: certificadosCreateManyEventosInputEnvelope
    set?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    disconnect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    delete?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    connect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    update?: certificadosUpdateWithWhereUniqueWithoutEventosInput | certificadosUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: certificadosUpdateManyWithWhereWithoutEventosInput | certificadosUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: certificadosScalarWhereInput | certificadosScalarWhereInput[]
  }

  export type inscripcionesUncheckedUpdateManyWithoutEventosNestedInput = {
    create?: XOR<inscripcionesCreateWithoutEventosInput, inscripcionesUncheckedCreateWithoutEventosInput> | inscripcionesCreateWithoutEventosInput[] | inscripcionesUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutEventosInput | inscripcionesCreateOrConnectWithoutEventosInput[]
    upsert?: inscripcionesUpsertWithWhereUniqueWithoutEventosInput | inscripcionesUpsertWithWhereUniqueWithoutEventosInput[]
    createMany?: inscripcionesCreateManyEventosInputEnvelope
    set?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    disconnect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    delete?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    update?: inscripcionesUpdateWithWhereUniqueWithoutEventosInput | inscripcionesUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: inscripcionesUpdateManyWithWhereWithoutEventosInput | inscripcionesUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
  }

  export type certificadosUncheckedUpdateManyWithoutEventosNestedInput = {
    create?: XOR<certificadosCreateWithoutEventosInput, certificadosUncheckedCreateWithoutEventosInput> | certificadosCreateWithoutEventosInput[] | certificadosUncheckedCreateWithoutEventosInput[]
    connectOrCreate?: certificadosCreateOrConnectWithoutEventosInput | certificadosCreateOrConnectWithoutEventosInput[]
    upsert?: certificadosUpsertWithWhereUniqueWithoutEventosInput | certificadosUpsertWithWhereUniqueWithoutEventosInput[]
    createMany?: certificadosCreateManyEventosInputEnvelope
    set?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    disconnect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    delete?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    connect?: certificadosWhereUniqueInput | certificadosWhereUniqueInput[]
    update?: certificadosUpdateWithWhereUniqueWithoutEventosInput | certificadosUpdateWithWhereUniqueWithoutEventosInput[]
    updateMany?: certificadosUpdateManyWithWhereWithoutEventosInput | certificadosUpdateManyWithWhereWithoutEventosInput[]
    deleteMany?: certificadosScalarWhereInput | certificadosScalarWhereInput[]
  }

  export type eventosCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<eventosCreateWithoutInscripcionesInput, eventosUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: eventosCreateOrConnectWithoutInscripcionesInput
    connect?: eventosWhereUniqueInput
  }

  export type voluntariosCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<voluntariosCreateWithoutInscripcionesInput, voluntariosUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: voluntariosCreateOrConnectWithoutInscripcionesInput
    connect?: voluntariosWhereUniqueInput
  }

  export type asistenciaCreateNestedManyWithoutInscripcionesInput = {
    create?: XOR<asistenciaCreateWithoutInscripcionesInput, asistenciaUncheckedCreateWithoutInscripcionesInput> | asistenciaCreateWithoutInscripcionesInput[] | asistenciaUncheckedCreateWithoutInscripcionesInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutInscripcionesInput | asistenciaCreateOrConnectWithoutInscripcionesInput[]
    createMany?: asistenciaCreateManyInscripcionesInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type asistenciaUncheckedCreateNestedManyWithoutInscripcionesInput = {
    create?: XOR<asistenciaCreateWithoutInscripcionesInput, asistenciaUncheckedCreateWithoutInscripcionesInput> | asistenciaCreateWithoutInscripcionesInput[] | asistenciaUncheckedCreateWithoutInscripcionesInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutInscripcionesInput | asistenciaCreateOrConnectWithoutInscripcionesInput[]
    createMany?: asistenciaCreateManyInscripcionesInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type eventosUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<eventosCreateWithoutInscripcionesInput, eventosUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: eventosCreateOrConnectWithoutInscripcionesInput
    upsert?: eventosUpsertWithoutInscripcionesInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutInscripcionesInput, eventosUpdateWithoutInscripcionesInput>, eventosUncheckedUpdateWithoutInscripcionesInput>
  }

  export type voluntariosUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<voluntariosCreateWithoutInscripcionesInput, voluntariosUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: voluntariosCreateOrConnectWithoutInscripcionesInput
    upsert?: voluntariosUpsertWithoutInscripcionesInput
    connect?: voluntariosWhereUniqueInput
    update?: XOR<XOR<voluntariosUpdateToOneWithWhereWithoutInscripcionesInput, voluntariosUpdateWithoutInscripcionesInput>, voluntariosUncheckedUpdateWithoutInscripcionesInput>
  }

  export type asistenciaUpdateManyWithoutInscripcionesNestedInput = {
    create?: XOR<asistenciaCreateWithoutInscripcionesInput, asistenciaUncheckedCreateWithoutInscripcionesInput> | asistenciaCreateWithoutInscripcionesInput[] | asistenciaUncheckedCreateWithoutInscripcionesInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutInscripcionesInput | asistenciaCreateOrConnectWithoutInscripcionesInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutInscripcionesInput | asistenciaUpsertWithWhereUniqueWithoutInscripcionesInput[]
    createMany?: asistenciaCreateManyInscripcionesInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutInscripcionesInput | asistenciaUpdateWithWhereUniqueWithoutInscripcionesInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutInscripcionesInput | asistenciaUpdateManyWithWhereWithoutInscripcionesInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type asistenciaUncheckedUpdateManyWithoutInscripcionesNestedInput = {
    create?: XOR<asistenciaCreateWithoutInscripcionesInput, asistenciaUncheckedCreateWithoutInscripcionesInput> | asistenciaCreateWithoutInscripcionesInput[] | asistenciaUncheckedCreateWithoutInscripcionesInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutInscripcionesInput | asistenciaCreateOrConnectWithoutInscripcionesInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutInscripcionesInput | asistenciaUpsertWithWhereUniqueWithoutInscripcionesInput[]
    createMany?: asistenciaCreateManyInscripcionesInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutInscripcionesInput | asistenciaUpdateWithWhereUniqueWithoutInscripcionesInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutInscripcionesInput | asistenciaUpdateManyWithWhereWithoutInscripcionesInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type inscripcionesCreateNestedOneWithoutAsistenciaInput = {
    create?: XOR<inscripcionesCreateWithoutAsistenciaInput, inscripcionesUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: inscripcionesCreateOrConnectWithoutAsistenciaInput
    connect?: inscripcionesWhereUniqueInput
  }

  export type inscripcionesUpdateOneRequiredWithoutAsistenciaNestedInput = {
    create?: XOR<inscripcionesCreateWithoutAsistenciaInput, inscripcionesUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: inscripcionesCreateOrConnectWithoutAsistenciaInput
    upsert?: inscripcionesUpsertWithoutAsistenciaInput
    connect?: inscripcionesWhereUniqueInput
    update?: XOR<XOR<inscripcionesUpdateToOneWithWhereWithoutAsistenciaInput, inscripcionesUpdateWithoutAsistenciaInput>, inscripcionesUncheckedUpdateWithoutAsistenciaInput>
  }

  export type voluntariosCreateNestedOneWithoutCertificadosInput = {
    create?: XOR<voluntariosCreateWithoutCertificadosInput, voluntariosUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: voluntariosCreateOrConnectWithoutCertificadosInput
    connect?: voluntariosWhereUniqueInput
  }

  export type eventosCreateNestedOneWithoutCertificadosInput = {
    create?: XOR<eventosCreateWithoutCertificadosInput, eventosUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: eventosCreateOrConnectWithoutCertificadosInput
    connect?: eventosWhereUniqueInput
  }

  export type voluntariosUpdateOneRequiredWithoutCertificadosNestedInput = {
    create?: XOR<voluntariosCreateWithoutCertificadosInput, voluntariosUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: voluntariosCreateOrConnectWithoutCertificadosInput
    upsert?: voluntariosUpsertWithoutCertificadosInput
    connect?: voluntariosWhereUniqueInput
    update?: XOR<XOR<voluntariosUpdateToOneWithWhereWithoutCertificadosInput, voluntariosUpdateWithoutCertificadosInput>, voluntariosUncheckedUpdateWithoutCertificadosInput>
  }

  export type eventosUpdateOneRequiredWithoutCertificadosNestedInput = {
    create?: XOR<eventosCreateWithoutCertificadosInput, eventosUncheckedCreateWithoutCertificadosInput>
    connectOrCreate?: eventosCreateOrConnectWithoutCertificadosInput
    upsert?: eventosUpsertWithoutCertificadosInput
    connect?: eventosWhereUniqueInput
    update?: XOR<XOR<eventosUpdateToOneWithWhereWithoutCertificadosInput, eventosUpdateWithoutCertificadosInput>, eventosUncheckedUpdateWithoutCertificadosInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type suscripcionesCreateWithoutOrganizacionInput = {
    id?: string
    plan?: string | null
    fecha_inicio?: Date | string | null
    fecha_proximo_pago?: Date | string | null
    estado?: string | null
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type suscripcionesUncheckedCreateWithoutOrganizacionInput = {
    id?: string
    plan?: string | null
    fecha_inicio?: Date | string | null
    fecha_proximo_pago?: Date | string | null
    estado?: string | null
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type suscripcionesCreateOrConnectWithoutOrganizacionInput = {
    where: suscripcionesWhereUniqueInput
    create: XOR<suscripcionesCreateWithoutOrganizacionInput, suscripcionesUncheckedCreateWithoutOrganizacionInput>
  }

  export type suscripcionesCreateManyOrganizacionInputEnvelope = {
    data: suscripcionesCreateManyOrganizacionInput | suscripcionesCreateManyOrganizacionInput[]
    skipDuplicates?: boolean
  }

  export type tenant_usuariosCreateWithoutOrganizacionInput = {
    id?: string
    nombre: string
    correo: string
    hash_contrasena: string
    rol: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type tenant_usuariosUncheckedCreateWithoutOrganizacionInput = {
    id?: string
    nombre: string
    correo: string
    hash_contrasena: string
    rol: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type tenant_usuariosCreateOrConnectWithoutOrganizacionInput = {
    where: tenant_usuariosWhereUniqueInput
    create: XOR<tenant_usuariosCreateWithoutOrganizacionInput, tenant_usuariosUncheckedCreateWithoutOrganizacionInput>
  }

  export type tenant_usuariosCreateManyOrganizacionInputEnvelope = {
    data: tenant_usuariosCreateManyOrganizacionInput | tenant_usuariosCreateManyOrganizacionInput[]
    skipDuplicates?: boolean
  }

  export type suscripcionesUpsertWithWhereUniqueWithoutOrganizacionInput = {
    where: suscripcionesWhereUniqueInput
    update: XOR<suscripcionesUpdateWithoutOrganizacionInput, suscripcionesUncheckedUpdateWithoutOrganizacionInput>
    create: XOR<suscripcionesCreateWithoutOrganizacionInput, suscripcionesUncheckedCreateWithoutOrganizacionInput>
  }

  export type suscripcionesUpdateWithWhereUniqueWithoutOrganizacionInput = {
    where: suscripcionesWhereUniqueInput
    data: XOR<suscripcionesUpdateWithoutOrganizacionInput, suscripcionesUncheckedUpdateWithoutOrganizacionInput>
  }

  export type suscripcionesUpdateManyWithWhereWithoutOrganizacionInput = {
    where: suscripcionesScalarWhereInput
    data: XOR<suscripcionesUpdateManyMutationInput, suscripcionesUncheckedUpdateManyWithoutOrganizacionInput>
  }

  export type suscripcionesScalarWhereInput = {
    AND?: suscripcionesScalarWhereInput | suscripcionesScalarWhereInput[]
    OR?: suscripcionesScalarWhereInput[]
    NOT?: suscripcionesScalarWhereInput | suscripcionesScalarWhereInput[]
    id?: UuidFilter<"suscripciones"> | string
    organizacion_id?: UuidFilter<"suscripciones"> | string
    plan?: StringNullableFilter<"suscripciones"> | string | null
    fecha_inicio?: DateTimeNullableFilter<"suscripciones"> | Date | string | null
    fecha_proximo_pago?: DateTimeNullableFilter<"suscripciones"> | Date | string | null
    estado?: StringNullableFilter<"suscripciones"> | string | null
    creado_en?: DateTimeFilter<"suscripciones"> | Date | string
    actualizado_en?: DateTimeFilter<"suscripciones"> | Date | string
  }

  export type tenant_usuariosUpsertWithWhereUniqueWithoutOrganizacionInput = {
    where: tenant_usuariosWhereUniqueInput
    update: XOR<tenant_usuariosUpdateWithoutOrganizacionInput, tenant_usuariosUncheckedUpdateWithoutOrganizacionInput>
    create: XOR<tenant_usuariosCreateWithoutOrganizacionInput, tenant_usuariosUncheckedCreateWithoutOrganizacionInput>
  }

  export type tenant_usuariosUpdateWithWhereUniqueWithoutOrganizacionInput = {
    where: tenant_usuariosWhereUniqueInput
    data: XOR<tenant_usuariosUpdateWithoutOrganizacionInput, tenant_usuariosUncheckedUpdateWithoutOrganizacionInput>
  }

  export type tenant_usuariosUpdateManyWithWhereWithoutOrganizacionInput = {
    where: tenant_usuariosScalarWhereInput
    data: XOR<tenant_usuariosUpdateManyMutationInput, tenant_usuariosUncheckedUpdateManyWithoutOrganizacionInput>
  }

  export type tenant_usuariosScalarWhereInput = {
    AND?: tenant_usuariosScalarWhereInput | tenant_usuariosScalarWhereInput[]
    OR?: tenant_usuariosScalarWhereInput[]
    NOT?: tenant_usuariosScalarWhereInput | tenant_usuariosScalarWhereInput[]
    id?: UuidFilter<"tenant_usuarios"> | string
    tenant_id?: UuidFilter<"tenant_usuarios"> | string
    nombre?: StringFilter<"tenant_usuarios"> | string
    correo?: StringFilter<"tenant_usuarios"> | string
    hash_contrasena?: StringFilter<"tenant_usuarios"> | string
    rol?: StringFilter<"tenant_usuarios"> | string
    permisos?: JsonNullableFilter<"tenant_usuarios">
    creado_en?: DateTimeFilter<"tenant_usuarios"> | Date | string
    actualizado_en?: DateTimeFilter<"tenant_usuarios"> | Date | string
  }

  export type organizacionesCreateWithoutSuscripcionesInput = {
    id?: string
    nombre: string
    nombre_esquema: string
    subdominio?: string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
    tenant_usuarios?: tenant_usuariosCreateNestedManyWithoutOrganizacionInput
  }

  export type organizacionesUncheckedCreateWithoutSuscripcionesInput = {
    id?: string
    nombre: string
    nombre_esquema: string
    subdominio?: string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
    tenant_usuarios?: tenant_usuariosUncheckedCreateNestedManyWithoutOrganizacionInput
  }

  export type organizacionesCreateOrConnectWithoutSuscripcionesInput = {
    where: organizacionesWhereUniqueInput
    create: XOR<organizacionesCreateWithoutSuscripcionesInput, organizacionesUncheckedCreateWithoutSuscripcionesInput>
  }

  export type organizacionesUpsertWithoutSuscripcionesInput = {
    update: XOR<organizacionesUpdateWithoutSuscripcionesInput, organizacionesUncheckedUpdateWithoutSuscripcionesInput>
    create: XOR<organizacionesCreateWithoutSuscripcionesInput, organizacionesUncheckedCreateWithoutSuscripcionesInput>
    where?: organizacionesWhereInput
  }

  export type organizacionesUpdateToOneWithWhereWithoutSuscripcionesInput = {
    where?: organizacionesWhereInput
    data: XOR<organizacionesUpdateWithoutSuscripcionesInput, organizacionesUncheckedUpdateWithoutSuscripcionesInput>
  }

  export type organizacionesUpdateWithoutSuscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    nombre_esquema?: StringFieldUpdateOperationsInput | string
    subdominio?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant_usuarios?: tenant_usuariosUpdateManyWithoutOrganizacionNestedInput
  }

  export type organizacionesUncheckedUpdateWithoutSuscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    nombre_esquema?: StringFieldUpdateOperationsInput | string
    subdominio?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant_usuarios?: tenant_usuariosUncheckedUpdateManyWithoutOrganizacionNestedInput
  }

  export type organizacionesCreateWithoutTenant_usuariosInput = {
    id?: string
    nombre: string
    nombre_esquema: string
    subdominio?: string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
    suscripciones?: suscripcionesCreateNestedManyWithoutOrganizacionInput
  }

  export type organizacionesUncheckedCreateWithoutTenant_usuariosInput = {
    id?: string
    nombre: string
    nombre_esquema: string
    subdominio?: string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
    suscripciones?: suscripcionesUncheckedCreateNestedManyWithoutOrganizacionInput
  }

  export type organizacionesCreateOrConnectWithoutTenant_usuariosInput = {
    where: organizacionesWhereUniqueInput
    create: XOR<organizacionesCreateWithoutTenant_usuariosInput, organizacionesUncheckedCreateWithoutTenant_usuariosInput>
  }

  export type organizacionesUpsertWithoutTenant_usuariosInput = {
    update: XOR<organizacionesUpdateWithoutTenant_usuariosInput, organizacionesUncheckedUpdateWithoutTenant_usuariosInput>
    create: XOR<organizacionesCreateWithoutTenant_usuariosInput, organizacionesUncheckedCreateWithoutTenant_usuariosInput>
    where?: organizacionesWhereInput
  }

  export type organizacionesUpdateToOneWithWhereWithoutTenant_usuariosInput = {
    where?: organizacionesWhereInput
    data: XOR<organizacionesUpdateWithoutTenant_usuariosInput, organizacionesUncheckedUpdateWithoutTenant_usuariosInput>
  }

  export type organizacionesUpdateWithoutTenant_usuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    nombre_esquema?: StringFieldUpdateOperationsInput | string
    subdominio?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    suscripciones?: suscripcionesUpdateManyWithoutOrganizacionNestedInput
  }

  export type organizacionesUncheckedUpdateWithoutTenant_usuariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    nombre_esquema?: StringFieldUpdateOperationsInput | string
    subdominio?: NullableStringFieldUpdateOperationsInput | string | null
    marca?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    suscripciones?: suscripcionesUncheckedUpdateManyWithoutOrganizacionNestedInput
  }

  export type inscripcionesCreateWithoutVoluntariosInput = {
    id?: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
    eventos: eventosCreateNestedOneWithoutInscripcionesInput
    asistencia?: asistenciaCreateNestedManyWithoutInscripcionesInput
  }

  export type inscripcionesUncheckedCreateWithoutVoluntariosInput = {
    id?: string
    evento_id: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutInscripcionesInput
  }

  export type inscripcionesCreateOrConnectWithoutVoluntariosInput = {
    where: inscripcionesWhereUniqueInput
    create: XOR<inscripcionesCreateWithoutVoluntariosInput, inscripcionesUncheckedCreateWithoutVoluntariosInput>
  }

  export type inscripcionesCreateManyVoluntariosInputEnvelope = {
    data: inscripcionesCreateManyVoluntariosInput | inscripcionesCreateManyVoluntariosInput[]
    skipDuplicates?: boolean
  }

  export type certificadosCreateWithoutVoluntariosInput = {
    id?: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
    eventos: eventosCreateNestedOneWithoutCertificadosInput
  }

  export type certificadosUncheckedCreateWithoutVoluntariosInput = {
    id?: string
    evento_id: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
  }

  export type certificadosCreateOrConnectWithoutVoluntariosInput = {
    where: certificadosWhereUniqueInput
    create: XOR<certificadosCreateWithoutVoluntariosInput, certificadosUncheckedCreateWithoutVoluntariosInput>
  }

  export type certificadosCreateManyVoluntariosInputEnvelope = {
    data: certificadosCreateManyVoluntariosInput | certificadosCreateManyVoluntariosInput[]
    skipDuplicates?: boolean
  }

  export type inscripcionesUpsertWithWhereUniqueWithoutVoluntariosInput = {
    where: inscripcionesWhereUniqueInput
    update: XOR<inscripcionesUpdateWithoutVoluntariosInput, inscripcionesUncheckedUpdateWithoutVoluntariosInput>
    create: XOR<inscripcionesCreateWithoutVoluntariosInput, inscripcionesUncheckedCreateWithoutVoluntariosInput>
  }

  export type inscripcionesUpdateWithWhereUniqueWithoutVoluntariosInput = {
    where: inscripcionesWhereUniqueInput
    data: XOR<inscripcionesUpdateWithoutVoluntariosInput, inscripcionesUncheckedUpdateWithoutVoluntariosInput>
  }

  export type inscripcionesUpdateManyWithWhereWithoutVoluntariosInput = {
    where: inscripcionesScalarWhereInput
    data: XOR<inscripcionesUpdateManyMutationInput, inscripcionesUncheckedUpdateManyWithoutVoluntariosInput>
  }

  export type inscripcionesScalarWhereInput = {
    AND?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
    OR?: inscripcionesScalarWhereInput[]
    NOT?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
    id?: UuidFilter<"inscripciones"> | string
    evento_id?: UuidFilter<"inscripciones"> | string
    voluntario_id?: UuidFilter<"inscripciones"> | string
    estado?: StringNullableFilter<"inscripciones"> | string | null
    fecha_inscripcion?: DateTimeFilter<"inscripciones"> | Date | string
    creado_en?: DateTimeFilter<"inscripciones"> | Date | string
    actualizado_en?: DateTimeFilter<"inscripciones"> | Date | string
  }

  export type certificadosUpsertWithWhereUniqueWithoutVoluntariosInput = {
    where: certificadosWhereUniqueInput
    update: XOR<certificadosUpdateWithoutVoluntariosInput, certificadosUncheckedUpdateWithoutVoluntariosInput>
    create: XOR<certificadosCreateWithoutVoluntariosInput, certificadosUncheckedCreateWithoutVoluntariosInput>
  }

  export type certificadosUpdateWithWhereUniqueWithoutVoluntariosInput = {
    where: certificadosWhereUniqueInput
    data: XOR<certificadosUpdateWithoutVoluntariosInput, certificadosUncheckedUpdateWithoutVoluntariosInput>
  }

  export type certificadosUpdateManyWithWhereWithoutVoluntariosInput = {
    where: certificadosScalarWhereInput
    data: XOR<certificadosUpdateManyMutationInput, certificadosUncheckedUpdateManyWithoutVoluntariosInput>
  }

  export type certificadosScalarWhereInput = {
    AND?: certificadosScalarWhereInput | certificadosScalarWhereInput[]
    OR?: certificadosScalarWhereInput[]
    NOT?: certificadosScalarWhereInput | certificadosScalarWhereInput[]
    id?: UuidFilter<"certificados"> | string
    voluntario_id?: UuidFilter<"certificados"> | string
    evento_id?: UuidFilter<"certificados"> | string
    url_pdf?: StringNullableFilter<"certificados"> | string | null
    emitido_en?: DateTimeFilter<"certificados"> | Date | string
    coordinador_id?: UuidFilter<"certificados"> | string
  }

  export type inscripcionesCreateWithoutEventosInput = {
    id?: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
    voluntarios: voluntariosCreateNestedOneWithoutInscripcionesInput
    asistencia?: asistenciaCreateNestedManyWithoutInscripcionesInput
  }

  export type inscripcionesUncheckedCreateWithoutEventosInput = {
    id?: string
    voluntario_id: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
    asistencia?: asistenciaUncheckedCreateNestedManyWithoutInscripcionesInput
  }

  export type inscripcionesCreateOrConnectWithoutEventosInput = {
    where: inscripcionesWhereUniqueInput
    create: XOR<inscripcionesCreateWithoutEventosInput, inscripcionesUncheckedCreateWithoutEventosInput>
  }

  export type inscripcionesCreateManyEventosInputEnvelope = {
    data: inscripcionesCreateManyEventosInput | inscripcionesCreateManyEventosInput[]
    skipDuplicates?: boolean
  }

  export type certificadosCreateWithoutEventosInput = {
    id?: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
    voluntarios: voluntariosCreateNestedOneWithoutCertificadosInput
  }

  export type certificadosUncheckedCreateWithoutEventosInput = {
    id?: string
    voluntario_id: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
  }

  export type certificadosCreateOrConnectWithoutEventosInput = {
    where: certificadosWhereUniqueInput
    create: XOR<certificadosCreateWithoutEventosInput, certificadosUncheckedCreateWithoutEventosInput>
  }

  export type certificadosCreateManyEventosInputEnvelope = {
    data: certificadosCreateManyEventosInput | certificadosCreateManyEventosInput[]
    skipDuplicates?: boolean
  }

  export type inscripcionesUpsertWithWhereUniqueWithoutEventosInput = {
    where: inscripcionesWhereUniqueInput
    update: XOR<inscripcionesUpdateWithoutEventosInput, inscripcionesUncheckedUpdateWithoutEventosInput>
    create: XOR<inscripcionesCreateWithoutEventosInput, inscripcionesUncheckedCreateWithoutEventosInput>
  }

  export type inscripcionesUpdateWithWhereUniqueWithoutEventosInput = {
    where: inscripcionesWhereUniqueInput
    data: XOR<inscripcionesUpdateWithoutEventosInput, inscripcionesUncheckedUpdateWithoutEventosInput>
  }

  export type inscripcionesUpdateManyWithWhereWithoutEventosInput = {
    where: inscripcionesScalarWhereInput
    data: XOR<inscripcionesUpdateManyMutationInput, inscripcionesUncheckedUpdateManyWithoutEventosInput>
  }

  export type certificadosUpsertWithWhereUniqueWithoutEventosInput = {
    where: certificadosWhereUniqueInput
    update: XOR<certificadosUpdateWithoutEventosInput, certificadosUncheckedUpdateWithoutEventosInput>
    create: XOR<certificadosCreateWithoutEventosInput, certificadosUncheckedCreateWithoutEventosInput>
  }

  export type certificadosUpdateWithWhereUniqueWithoutEventosInput = {
    where: certificadosWhereUniqueInput
    data: XOR<certificadosUpdateWithoutEventosInput, certificadosUncheckedUpdateWithoutEventosInput>
  }

  export type certificadosUpdateManyWithWhereWithoutEventosInput = {
    where: certificadosScalarWhereInput
    data: XOR<certificadosUpdateManyMutationInput, certificadosUncheckedUpdateManyWithoutEventosInput>
  }

  export type eventosCreateWithoutInscripcionesInput = {
    id?: string
    titulo: string
    nombre?: string | null
    descripcion?: string | null
    inicio: Date | string
    fecha_inicio: Date | string
    fin?: Date | string | null
    fecha_fin?: Date | string | null
    ubicacion?: string | null
    tipo?: string | null
    estado?: string | null
    coordinador_id: string
    capacidad?: number | null
    creado_en?: Date | string
    actualizado_en?: Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    certificados?: certificadosCreateNestedManyWithoutEventosInput
  }

  export type eventosUncheckedCreateWithoutInscripcionesInput = {
    id?: string
    titulo: string
    nombre?: string | null
    descripcion?: string | null
    inicio: Date | string
    fecha_inicio: Date | string
    fin?: Date | string | null
    fecha_fin?: Date | string | null
    ubicacion?: string | null
    tipo?: string | null
    estado?: string | null
    coordinador_id: string
    capacidad?: number | null
    creado_en?: Date | string
    actualizado_en?: Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    certificados?: certificadosUncheckedCreateNestedManyWithoutEventosInput
  }

  export type eventosCreateOrConnectWithoutInscripcionesInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutInscripcionesInput, eventosUncheckedCreateWithoutInscripcionesInput>
  }

  export type voluntariosCreateWithoutInscripcionesInput = {
    id?: string
    nombre_completo: string
    dni?: string | null
    correo?: string | null
    telefono?: string | null
    area?: string | null
    estado?: string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: Date | string
    coordinador_id: string
    certificados?: certificadosCreateNestedManyWithoutVoluntariosInput
  }

  export type voluntariosUncheckedCreateWithoutInscripcionesInput = {
    id?: string
    nombre_completo: string
    dni?: string | null
    correo?: string | null
    telefono?: string | null
    area?: string | null
    estado?: string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: Date | string
    coordinador_id: string
    certificados?: certificadosUncheckedCreateNestedManyWithoutVoluntariosInput
  }

  export type voluntariosCreateOrConnectWithoutInscripcionesInput = {
    where: voluntariosWhereUniqueInput
    create: XOR<voluntariosCreateWithoutInscripcionesInput, voluntariosUncheckedCreateWithoutInscripcionesInput>
  }

  export type asistenciaCreateWithoutInscripcionesInput = {
    id?: string
    estado?: string | null
    marcado_en?: Date | string
    coordinador_id: string
  }

  export type asistenciaUncheckedCreateWithoutInscripcionesInput = {
    id?: string
    estado?: string | null
    marcado_en?: Date | string
    coordinador_id: string
  }

  export type asistenciaCreateOrConnectWithoutInscripcionesInput = {
    where: asistenciaWhereUniqueInput
    create: XOR<asistenciaCreateWithoutInscripcionesInput, asistenciaUncheckedCreateWithoutInscripcionesInput>
  }

  export type asistenciaCreateManyInscripcionesInputEnvelope = {
    data: asistenciaCreateManyInscripcionesInput | asistenciaCreateManyInscripcionesInput[]
    skipDuplicates?: boolean
  }

  export type eventosUpsertWithoutInscripcionesInput = {
    update: XOR<eventosUpdateWithoutInscripcionesInput, eventosUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<eventosCreateWithoutInscripcionesInput, eventosUncheckedCreateWithoutInscripcionesInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutInscripcionesInput, eventosUncheckedUpdateWithoutInscripcionesInput>
  }

  export type eventosUpdateWithoutInscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    coordinador_id?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    certificados?: certificadosUpdateManyWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateWithoutInscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    coordinador_id?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    certificados?: certificadosUncheckedUpdateManyWithoutEventosNestedInput
  }

  export type voluntariosUpsertWithoutInscripcionesInput = {
    update: XOR<voluntariosUpdateWithoutInscripcionesInput, voluntariosUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<voluntariosCreateWithoutInscripcionesInput, voluntariosUncheckedCreateWithoutInscripcionesInput>
    where?: voluntariosWhereInput
  }

  export type voluntariosUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: voluntariosWhereInput
    data: XOR<voluntariosUpdateWithoutInscripcionesInput, voluntariosUncheckedUpdateWithoutInscripcionesInput>
  }

  export type voluntariosUpdateWithoutInscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    certificados?: certificadosUpdateManyWithoutVoluntariosNestedInput
  }

  export type voluntariosUncheckedUpdateWithoutInscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    certificados?: certificadosUncheckedUpdateManyWithoutVoluntariosNestedInput
  }

  export type asistenciaUpsertWithWhereUniqueWithoutInscripcionesInput = {
    where: asistenciaWhereUniqueInput
    update: XOR<asistenciaUpdateWithoutInscripcionesInput, asistenciaUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<asistenciaCreateWithoutInscripcionesInput, asistenciaUncheckedCreateWithoutInscripcionesInput>
  }

  export type asistenciaUpdateWithWhereUniqueWithoutInscripcionesInput = {
    where: asistenciaWhereUniqueInput
    data: XOR<asistenciaUpdateWithoutInscripcionesInput, asistenciaUncheckedUpdateWithoutInscripcionesInput>
  }

  export type asistenciaUpdateManyWithWhereWithoutInscripcionesInput = {
    where: asistenciaScalarWhereInput
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyWithoutInscripcionesInput>
  }

  export type asistenciaScalarWhereInput = {
    AND?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
    OR?: asistenciaScalarWhereInput[]
    NOT?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
    id?: UuidFilter<"asistencia"> | string
    inscripcion_id?: UuidFilter<"asistencia"> | string
    estado?: StringNullableFilter<"asistencia"> | string | null
    marcado_en?: DateTimeFilter<"asistencia"> | Date | string
    coordinador_id?: UuidFilter<"asistencia"> | string
  }

  export type inscripcionesCreateWithoutAsistenciaInput = {
    id?: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
    eventos: eventosCreateNestedOneWithoutInscripcionesInput
    voluntarios: voluntariosCreateNestedOneWithoutInscripcionesInput
  }

  export type inscripcionesUncheckedCreateWithoutAsistenciaInput = {
    id?: string
    evento_id: string
    voluntario_id: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type inscripcionesCreateOrConnectWithoutAsistenciaInput = {
    where: inscripcionesWhereUniqueInput
    create: XOR<inscripcionesCreateWithoutAsistenciaInput, inscripcionesUncheckedCreateWithoutAsistenciaInput>
  }

  export type inscripcionesUpsertWithoutAsistenciaInput = {
    update: XOR<inscripcionesUpdateWithoutAsistenciaInput, inscripcionesUncheckedUpdateWithoutAsistenciaInput>
    create: XOR<inscripcionesCreateWithoutAsistenciaInput, inscripcionesUncheckedCreateWithoutAsistenciaInput>
    where?: inscripcionesWhereInput
  }

  export type inscripcionesUpdateToOneWithWhereWithoutAsistenciaInput = {
    where?: inscripcionesWhereInput
    data: XOR<inscripcionesUpdateWithoutAsistenciaInput, inscripcionesUncheckedUpdateWithoutAsistenciaInput>
  }

  export type inscripcionesUpdateWithoutAsistenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eventos?: eventosUpdateOneRequiredWithoutInscripcionesNestedInput
    voluntarios?: voluntariosUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateWithoutAsistenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type voluntariosCreateWithoutCertificadosInput = {
    id?: string
    nombre_completo: string
    dni?: string | null
    correo?: string | null
    telefono?: string | null
    area?: string | null
    estado?: string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: Date | string
    coordinador_id: string
    inscripciones?: inscripcionesCreateNestedManyWithoutVoluntariosInput
  }

  export type voluntariosUncheckedCreateWithoutCertificadosInput = {
    id?: string
    nombre_completo: string
    dni?: string | null
    correo?: string | null
    telefono?: string | null
    area?: string | null
    estado?: string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: Date | string
    coordinador_id: string
    inscripciones?: inscripcionesUncheckedCreateNestedManyWithoutVoluntariosInput
  }

  export type voluntariosCreateOrConnectWithoutCertificadosInput = {
    where: voluntariosWhereUniqueInput
    create: XOR<voluntariosCreateWithoutCertificadosInput, voluntariosUncheckedCreateWithoutCertificadosInput>
  }

  export type eventosCreateWithoutCertificadosInput = {
    id?: string
    titulo: string
    nombre?: string | null
    descripcion?: string | null
    inicio: Date | string
    fecha_inicio: Date | string
    fin?: Date | string | null
    fecha_fin?: Date | string | null
    ubicacion?: string | null
    tipo?: string | null
    estado?: string | null
    coordinador_id: string
    capacidad?: number | null
    creado_en?: Date | string
    actualizado_en?: Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    inscripciones?: inscripcionesCreateNestedManyWithoutEventosInput
  }

  export type eventosUncheckedCreateWithoutCertificadosInput = {
    id?: string
    titulo: string
    nombre?: string | null
    descripcion?: string | null
    inicio: Date | string
    fecha_inicio: Date | string
    fin?: Date | string | null
    fecha_fin?: Date | string | null
    ubicacion?: string | null
    tipo?: string | null
    estado?: string | null
    coordinador_id: string
    capacidad?: number | null
    creado_en?: Date | string
    actualizado_en?: Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    inscripciones?: inscripcionesUncheckedCreateNestedManyWithoutEventosInput
  }

  export type eventosCreateOrConnectWithoutCertificadosInput = {
    where: eventosWhereUniqueInput
    create: XOR<eventosCreateWithoutCertificadosInput, eventosUncheckedCreateWithoutCertificadosInput>
  }

  export type voluntariosUpsertWithoutCertificadosInput = {
    update: XOR<voluntariosUpdateWithoutCertificadosInput, voluntariosUncheckedUpdateWithoutCertificadosInput>
    create: XOR<voluntariosCreateWithoutCertificadosInput, voluntariosUncheckedCreateWithoutCertificadosInput>
    where?: voluntariosWhereInput
  }

  export type voluntariosUpdateToOneWithWhereWithoutCertificadosInput = {
    where?: voluntariosWhereInput
    data: XOR<voluntariosUpdateWithoutCertificadosInput, voluntariosUncheckedUpdateWithoutCertificadosInput>
  }

  export type voluntariosUpdateWithoutCertificadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    inscripciones?: inscripcionesUpdateManyWithoutVoluntariosNestedInput
  }

  export type voluntariosUncheckedUpdateWithoutCertificadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre_completo?: StringFieldUpdateOperationsInput | string
    dni?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    historial?: NullableJsonNullValueInput | InputJsonValue
    registrado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    inscripciones?: inscripcionesUncheckedUpdateManyWithoutVoluntariosNestedInput
  }

  export type eventosUpsertWithoutCertificadosInput = {
    update: XOR<eventosUpdateWithoutCertificadosInput, eventosUncheckedUpdateWithoutCertificadosInput>
    create: XOR<eventosCreateWithoutCertificadosInput, eventosUncheckedCreateWithoutCertificadosInput>
    where?: eventosWhereInput
  }

  export type eventosUpdateToOneWithWhereWithoutCertificadosInput = {
    where?: eventosWhereInput
    data: XOR<eventosUpdateWithoutCertificadosInput, eventosUncheckedUpdateWithoutCertificadosInput>
  }

  export type eventosUpdateWithoutCertificadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    coordinador_id?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    inscripciones?: inscripcionesUpdateManyWithoutEventosNestedInput
  }

  export type eventosUncheckedUpdateWithoutCertificadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ubicacion?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    coordinador_id?: StringFieldUpdateOperationsInput | string
    capacidad?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    requisitos?: NullableJsonNullValueInput | InputJsonValue
    inscripciones?: inscripcionesUncheckedUpdateManyWithoutEventosNestedInput
  }

  export type suscripcionesCreateManyOrganizacionInput = {
    id?: string
    plan?: string | null
    fecha_inicio?: Date | string | null
    fecha_proximo_pago?: Date | string | null
    estado?: string | null
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type tenant_usuariosCreateManyOrganizacionInput = {
    id?: string
    nombre: string
    correo: string
    hash_contrasena: string
    rol: string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type suscripcionesUpdateWithoutOrganizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_proximo_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suscripcionesUncheckedUpdateWithoutOrganizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_proximo_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type suscripcionesUncheckedUpdateManyWithoutOrganizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fecha_proximo_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_usuariosUpdateWithoutOrganizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_usuariosUncheckedUpdateWithoutOrganizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenant_usuariosUncheckedUpdateManyWithoutOrganizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    hash_contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    permisos?: NullableJsonNullValueInput | InputJsonValue
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inscripcionesCreateManyVoluntariosInput = {
    id?: string
    evento_id: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type certificadosCreateManyVoluntariosInput = {
    id?: string
    evento_id: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
  }

  export type inscripcionesUpdateWithoutVoluntariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eventos?: eventosUpdateOneRequiredWithoutInscripcionesNestedInput
    asistencia?: asistenciaUpdateManyWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateWithoutVoluntariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencia?: asistenciaUncheckedUpdateManyWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateManyWithoutVoluntariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificadosUpdateWithoutVoluntariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    eventos?: eventosUpdateOneRequiredWithoutCertificadosNestedInput
  }

  export type certificadosUncheckedUpdateWithoutVoluntariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type certificadosUncheckedUpdateManyWithoutVoluntariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    evento_id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type inscripcionesCreateManyEventosInput = {
    id?: string
    voluntario_id: string
    estado?: string | null
    fecha_inscripcion?: Date | string
    creado_en?: Date | string
    actualizado_en?: Date | string
  }

  export type certificadosCreateManyEventosInput = {
    id?: string
    voluntario_id: string
    url_pdf?: string | null
    emitido_en?: Date | string
    coordinador_id: string
  }

  export type inscripcionesUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    voluntarios?: voluntariosUpdateOneRequiredWithoutInscripcionesNestedInput
    asistencia?: asistenciaUpdateManyWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencia?: asistenciaUncheckedUpdateManyWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateManyWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificadosUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
    voluntarios?: voluntariosUpdateOneRequiredWithoutCertificadosNestedInput
  }

  export type certificadosUncheckedUpdateWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type certificadosUncheckedUpdateManyWithoutEventosInput = {
    id?: StringFieldUpdateOperationsInput | string
    voluntario_id?: StringFieldUpdateOperationsInput | string
    url_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    emitido_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type asistenciaCreateManyInscripcionesInput = {
    id?: string
    estado?: string | null
    marcado_en?: Date | string
    coordinador_id: string
  }

  export type asistenciaUpdateWithoutInscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    marcado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type asistenciaUncheckedUpdateWithoutInscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    marcado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }

  export type asistenciaUncheckedUpdateManyWithoutInscripcionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    marcado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    coordinador_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
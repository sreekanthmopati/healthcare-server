
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
 * Model Appointments
 * 
 */
export type Appointments = $Result.DefaultSelection<Prisma.$AppointmentsPayload>
/**
 * Model Bills
 * 
 */
export type Bills = $Result.DefaultSelection<Prisma.$BillsPayload>
/**
 * Model Departments
 * 
 */
export type Departments = $Result.DefaultSelection<Prisma.$DepartmentsPayload>
/**
 * Model Diagnoses
 * 
 */
export type Diagnoses = $Result.DefaultSelection<Prisma.$DiagnosesPayload>
/**
 * Model Doctors
 * 
 */
export type Doctors = $Result.DefaultSelection<Prisma.$DoctorsPayload>
/**
 * Model MedicalRecords
 * 
 */
export type MedicalRecords = $Result.DefaultSelection<Prisma.$MedicalRecordsPayload>
/**
 * Model CaseSheets
 * 
 */
export type CaseSheets = $Result.DefaultSelection<Prisma.$CaseSheetsPayload>
/**
 * Model Services
 * 
 */
export type Services = $Result.DefaultSelection<Prisma.$ServicesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Patients
 * 
 */
export type Patients = $Result.DefaultSelection<Prisma.$PatientsPayload>
/**
 * Model Ward
 * 
 */
export type Ward = $Result.DefaultSelection<Prisma.$WardPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Bed
 * 
 */
export type Bed = $Result.DefaultSelection<Prisma.$BedPayload>
/**
 * Model Admissions
 * 
 */
export type Admissions = $Result.DefaultSelection<Prisma.$AdmissionsPayload>
/**
 * Model DischargeReason
 * 
 */
export type DischargeReason = $Result.DefaultSelection<Prisma.$DischargeReasonPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointments.findMany()
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
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointments.findMany()
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
   * `prisma.appointments`: Exposes CRUD operations for the **Appointments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointments.findMany()
    * ```
    */
  get appointments(): Prisma.AppointmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bills`: Exposes CRUD operations for the **Bills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bills.findMany()
    * ```
    */
  get bills(): Prisma.BillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **Departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.DepartmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnoses`: Exposes CRUD operations for the **Diagnoses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diagnoses
    * const diagnoses = await prisma.diagnoses.findMany()
    * ```
    */
  get diagnoses(): Prisma.DiagnosesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctors`: Exposes CRUD operations for the **Doctors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctors.findMany()
    * ```
    */
  get doctors(): Prisma.DoctorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalRecords`: Exposes CRUD operations for the **MedicalRecords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecords.findMany()
    * ```
    */
  get medicalRecords(): Prisma.MedicalRecordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseSheets`: Exposes CRUD operations for the **CaseSheets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseSheets
    * const caseSheets = await prisma.caseSheets.findMany()
    * ```
    */
  get caseSheets(): Prisma.CaseSheetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **Services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.ServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patients`: Exposes CRUD operations for the **Patients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patients.findMany()
    * ```
    */
  get patients(): Prisma.PatientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ward`: Exposes CRUD operations for the **Ward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wards
    * const wards = await prisma.ward.findMany()
    * ```
    */
  get ward(): Prisma.WardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bed`: Exposes CRUD operations for the **Bed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beds
    * const beds = await prisma.bed.findMany()
    * ```
    */
  get bed(): Prisma.BedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admissions`: Exposes CRUD operations for the **Admissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admissions
    * const admissions = await prisma.admissions.findMany()
    * ```
    */
  get admissions(): Prisma.AdmissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dischargeReason`: Exposes CRUD operations for the **DischargeReason** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DischargeReasons
    * const dischargeReasons = await prisma.dischargeReason.findMany()
    * ```
    */
  get dischargeReason(): Prisma.DischargeReasonDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Appointments: 'Appointments',
    Bills: 'Bills',
    Departments: 'Departments',
    Diagnoses: 'Diagnoses',
    Doctors: 'Doctors',
    MedicalRecords: 'MedicalRecords',
    CaseSheets: 'CaseSheets',
    Services: 'Services',
    Users: 'Users',
    Patients: 'Patients',
    Ward: 'Ward',
    Room: 'Room',
    Bed: 'Bed',
    Admissions: 'Admissions',
    DischargeReason: 'DischargeReason'
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
      modelProps: "appointments" | "bills" | "departments" | "diagnoses" | "doctors" | "medicalRecords" | "caseSheets" | "services" | "users" | "patients" | "ward" | "room" | "bed" | "admissions" | "dischargeReason"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Appointments: {
        payload: Prisma.$AppointmentsPayload<ExtArgs>
        fields: Prisma.AppointmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findFirst: {
            args: Prisma.AppointmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          findMany: {
            args: Prisma.AppointmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>[]
          }
          create: {
            args: Prisma.AppointmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          createMany: {
            args: Prisma.AppointmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          update: {
            args: Prisma.AppointmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentsPayload>
          }
          aggregate: {
            args: Prisma.AppointmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointments>
          }
          groupBy: {
            args: Prisma.AppointmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentsCountAggregateOutputType> | number
          }
        }
      }
      Bills: {
        payload: Prisma.$BillsPayload<ExtArgs>
        fields: Prisma.BillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          findFirst: {
            args: Prisma.BillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          findMany: {
            args: Prisma.BillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>[]
          }
          create: {
            args: Prisma.BillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          createMany: {
            args: Prisma.BillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          update: {
            args: Prisma.BillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          deleteMany: {
            args: Prisma.BillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          aggregate: {
            args: Prisma.BillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBills>
          }
          groupBy: {
            args: Prisma.BillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillsCountArgs<ExtArgs>
            result: $Utils.Optional<BillsCountAggregateOutputType> | number
          }
        }
      }
      Departments: {
        payload: Prisma.$DepartmentsPayload<ExtArgs>
        fields: Prisma.DepartmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findFirst: {
            args: Prisma.DepartmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findMany: {
            args: Prisma.DepartmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          create: {
            args: Prisma.DepartmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          createMany: {
            args: Prisma.DepartmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          update: {
            args: Prisma.DepartmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.DepartmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      Diagnoses: {
        payload: Prisma.$DiagnosesPayload<ExtArgs>
        fields: Prisma.DiagnosesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          findFirst: {
            args: Prisma.DiagnosesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          findMany: {
            args: Prisma.DiagnosesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>[]
          }
          create: {
            args: Prisma.DiagnosesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          createMany: {
            args: Prisma.DiagnosesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          update: {
            args: Prisma.DiagnosesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosesPayload>
          }
          aggregate: {
            args: Prisma.DiagnosesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnoses>
          }
          groupBy: {
            args: Prisma.DiagnosesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosesCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosesCountAggregateOutputType> | number
          }
        }
      }
      Doctors: {
        payload: Prisma.$DoctorsPayload<ExtArgs>
        fields: Prisma.DoctorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          findFirst: {
            args: Prisma.DoctorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          findMany: {
            args: Prisma.DoctorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>[]
          }
          create: {
            args: Prisma.DoctorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          createMany: {
            args: Prisma.DoctorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          update: {
            args: Prisma.DoctorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          deleteMany: {
            args: Prisma.DoctorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorsPayload>
          }
          aggregate: {
            args: Prisma.DoctorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctors>
          }
          groupBy: {
            args: Prisma.DoctorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorsCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorsCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecords: {
        payload: Prisma.$MedicalRecordsPayload<ExtArgs>
        fields: Prisma.MedicalRecordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicalRecordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload>
          }
          update: {
            args: Prisma.MedicalRecordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicalRecordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordsPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecords>
          }
          groupBy: {
            args: Prisma.MedicalRecordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordsCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordsCountAggregateOutputType> | number
          }
        }
      }
      CaseSheets: {
        payload: Prisma.$CaseSheetsPayload<ExtArgs>
        fields: Prisma.CaseSheetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseSheetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseSheetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload>
          }
          findFirst: {
            args: Prisma.CaseSheetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseSheetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload>
          }
          findMany: {
            args: Prisma.CaseSheetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload>[]
          }
          create: {
            args: Prisma.CaseSheetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload>
          }
          createMany: {
            args: Prisma.CaseSheetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CaseSheetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload>
          }
          update: {
            args: Prisma.CaseSheetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload>
          }
          deleteMany: {
            args: Prisma.CaseSheetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseSheetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CaseSheetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseSheetsPayload>
          }
          aggregate: {
            args: Prisma.CaseSheetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseSheets>
          }
          groupBy: {
            args: Prisma.CaseSheetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseSheetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseSheetsCountArgs<ExtArgs>
            result: $Utils.Optional<CaseSheetsCountAggregateOutputType> | number
          }
        }
      }
      Services: {
        payload: Prisma.$ServicesPayload<ExtArgs>
        fields: Prisma.ServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findFirst: {
            args: Prisma.ServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          findMany: {
            args: Prisma.ServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>[]
          }
          create: {
            args: Prisma.ServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          createMany: {
            args: Prisma.ServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          update: {
            args: Prisma.ServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          deleteMany: {
            args: Prisma.ServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.ServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Patients: {
        payload: Prisma.$PatientsPayload<ExtArgs>
        fields: Prisma.PatientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findFirst: {
            args: Prisma.PatientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          findMany: {
            args: Prisma.PatientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>[]
          }
          create: {
            args: Prisma.PatientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          createMany: {
            args: Prisma.PatientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          update: {
            args: Prisma.PatientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          deleteMany: {
            args: Prisma.PatientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientsPayload>
          }
          aggregate: {
            args: Prisma.PatientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatients>
          }
          groupBy: {
            args: Prisma.PatientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientsCountArgs<ExtArgs>
            result: $Utils.Optional<PatientsCountAggregateOutputType> | number
          }
        }
      }
      Ward: {
        payload: Prisma.$WardPayload<ExtArgs>
        fields: Prisma.WardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          findFirst: {
            args: Prisma.WardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          findMany: {
            args: Prisma.WardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>[]
          }
          create: {
            args: Prisma.WardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          createMany: {
            args: Prisma.WardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          update: {
            args: Prisma.WardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          deleteMany: {
            args: Prisma.WardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WardPayload>
          }
          aggregate: {
            args: Prisma.WardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWard>
          }
          groupBy: {
            args: Prisma.WardGroupByArgs<ExtArgs>
            result: $Utils.Optional<WardGroupByOutputType>[]
          }
          count: {
            args: Prisma.WardCountArgs<ExtArgs>
            result: $Utils.Optional<WardCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Bed: {
        payload: Prisma.$BedPayload<ExtArgs>
        fields: Prisma.BedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          findFirst: {
            args: Prisma.BedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          findMany: {
            args: Prisma.BedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>[]
          }
          create: {
            args: Prisma.BedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          createMany: {
            args: Prisma.BedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          update: {
            args: Prisma.BedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          deleteMany: {
            args: Prisma.BedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          aggregate: {
            args: Prisma.BedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBed>
          }
          groupBy: {
            args: Prisma.BedGroupByArgs<ExtArgs>
            result: $Utils.Optional<BedGroupByOutputType>[]
          }
          count: {
            args: Prisma.BedCountArgs<ExtArgs>
            result: $Utils.Optional<BedCountAggregateOutputType> | number
          }
        }
      }
      Admissions: {
        payload: Prisma.$AdmissionsPayload<ExtArgs>
        fields: Prisma.AdmissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload>
          }
          findFirst: {
            args: Prisma.AdmissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload>
          }
          findMany: {
            args: Prisma.AdmissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload>[]
          }
          create: {
            args: Prisma.AdmissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload>
          }
          createMany: {
            args: Prisma.AdmissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdmissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload>
          }
          update: {
            args: Prisma.AdmissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdmissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionsPayload>
          }
          aggregate: {
            args: Prisma.AdmissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmissions>
          }
          groupBy: {
            args: Prisma.AdmissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmissionsCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionsCountAggregateOutputType> | number
          }
        }
      }
      DischargeReason: {
        payload: Prisma.$DischargeReasonPayload<ExtArgs>
        fields: Prisma.DischargeReasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DischargeReasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DischargeReasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload>
          }
          findFirst: {
            args: Prisma.DischargeReasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DischargeReasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload>
          }
          findMany: {
            args: Prisma.DischargeReasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload>[]
          }
          create: {
            args: Prisma.DischargeReasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload>
          }
          createMany: {
            args: Prisma.DischargeReasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DischargeReasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload>
          }
          update: {
            args: Prisma.DischargeReasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload>
          }
          deleteMany: {
            args: Prisma.DischargeReasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DischargeReasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DischargeReasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DischargeReasonPayload>
          }
          aggregate: {
            args: Prisma.DischargeReasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDischargeReason>
          }
          groupBy: {
            args: Prisma.DischargeReasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<DischargeReasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.DischargeReasonCountArgs<ExtArgs>
            result: $Utils.Optional<DischargeReasonCountAggregateOutputType> | number
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
    appointments?: AppointmentsOmit
    bills?: BillsOmit
    departments?: DepartmentsOmit
    diagnoses?: DiagnosesOmit
    doctors?: DoctorsOmit
    medicalRecords?: MedicalRecordsOmit
    caseSheets?: CaseSheetsOmit
    services?: ServicesOmit
    users?: UsersOmit
    patients?: PatientsOmit
    ward?: WardOmit
    room?: RoomOmit
    bed?: BedOmit
    admissions?: AdmissionsOmit
    dischargeReason?: DischargeReasonOmit
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
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    Diagnoses: number
    Doctors: number
    Patients: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnoses?: boolean | DepartmentsCountOutputTypeCountDiagnosesArgs
    Doctors?: boolean | DepartmentsCountOutputTypeCountDoctorsArgs
    Patients?: boolean | DepartmentsCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountDiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosesWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorsWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientsWhereInput
  }


  /**
   * Count Type DiagnosesCountOutputType
   */

  export type DiagnosesCountOutputType = {
    admissions: number
  }

  export type DiagnosesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissions?: boolean | DiagnosesCountOutputTypeCountAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * DiagnosesCountOutputType without action
   */
  export type DiagnosesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosesCountOutputType
     */
    select?: DiagnosesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosesCountOutputType without action
   */
  export type DiagnosesCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionsWhereInput
  }


  /**
   * Count Type DoctorsCountOutputType
   */

  export type DoctorsCountOutputType = {
    Appointments: number
  }

  export type DoctorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointments?: boolean | DoctorsCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorsCountOutputType
     */
    select?: DoctorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorsCountOutputType without action
   */
  export type DoctorsCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
  }


  /**
   * Count Type PatientsCountOutputType
   */

  export type PatientsCountOutputType = {
    Appointments: number
    Bills: number
    MedicalRecords: number
    Admissions: number
  }

  export type PatientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointments?: boolean | PatientsCountOutputTypeCountAppointmentsArgs
    Bills?: boolean | PatientsCountOutputTypeCountBillsArgs
    MedicalRecords?: boolean | PatientsCountOutputTypeCountMedicalRecordsArgs
    Admissions?: boolean | PatientsCountOutputTypeCountAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientsCountOutputType
     */
    select?: PatientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountMedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordsWhereInput
  }

  /**
   * PatientsCountOutputType without action
   */
  export type PatientsCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionsWhereInput
  }


  /**
   * Count Type WardCountOutputType
   */

  export type WardCountOutputType = {
    rooms: number
  }

  export type WardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | WardCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * WardCountOutputType without action
   */
  export type WardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WardCountOutputType
     */
    select?: WardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WardCountOutputType without action
   */
  export type WardCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    beds: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    beds?: boolean | RoomCountOutputTypeCountBedsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BedWhereInput
  }


  /**
   * Count Type BedCountOutputType
   */

  export type BedCountOutputType = {
    Admissions: number
  }

  export type BedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Admissions?: boolean | BedCountOutputTypeCountAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * BedCountOutputType without action
   */
  export type BedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedCountOutputType
     */
    select?: BedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BedCountOutputType without action
   */
  export type BedCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionsWhereInput
  }


  /**
   * Count Type AdmissionsCountOutputType
   */

  export type AdmissionsCountOutputType = {
    MedicalRecords: number
  }

  export type AdmissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MedicalRecords?: boolean | AdmissionsCountOutputTypeCountMedicalRecordsArgs
  }

  // Custom InputTypes
  /**
   * AdmissionsCountOutputType without action
   */
  export type AdmissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdmissionsCountOutputType
     */
    select?: AdmissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdmissionsCountOutputType without action
   */
  export type AdmissionsCountOutputTypeCountMedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordsWhereInput
  }


  /**
   * Count Type DischargeReasonCountOutputType
   */

  export type DischargeReasonCountOutputType = {
    admissions: number
  }

  export type DischargeReasonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissions?: boolean | DischargeReasonCountOutputTypeCountAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * DischargeReasonCountOutputType without action
   */
  export type DischargeReasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReasonCountOutputType
     */
    select?: DischargeReasonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DischargeReasonCountOutputType without action
   */
  export type DischargeReasonCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Appointments
   */

  export type AggregateAppointments = {
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  export type AppointmentsAvgAggregateOutputType = {
    AppointmentID: number | null
    DoctorID: number | null
  }

  export type AppointmentsSumAggregateOutputType = {
    AppointmentID: number | null
    DoctorID: number | null
  }

  export type AppointmentsMinAggregateOutputType = {
    AppointmentID: number | null
    PatientID: string | null
    DoctorID: number | null
    AppointmentDate: Date | null
    Status: string | null
    Notes: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AppointmentsMaxAggregateOutputType = {
    AppointmentID: number | null
    PatientID: string | null
    DoctorID: number | null
    AppointmentDate: Date | null
    Status: string | null
    Notes: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type AppointmentsCountAggregateOutputType = {
    AppointmentID: number
    PatientID: number
    DoctorID: number
    AppointmentDate: number
    Status: number
    Notes: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type AppointmentsAvgAggregateInputType = {
    AppointmentID?: true
    DoctorID?: true
  }

  export type AppointmentsSumAggregateInputType = {
    AppointmentID?: true
    DoctorID?: true
  }

  export type AppointmentsMinAggregateInputType = {
    AppointmentID?: true
    PatientID?: true
    DoctorID?: true
    AppointmentDate?: true
    Status?: true
    Notes?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AppointmentsMaxAggregateInputType = {
    AppointmentID?: true
    PatientID?: true
    DoctorID?: true
    AppointmentDate?: true
    Status?: true
    Notes?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type AppointmentsCountAggregateInputType = {
    AppointmentID?: true
    PatientID?: true
    DoctorID?: true
    AppointmentDate?: true
    Status?: true
    Notes?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type AppointmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to aggregate.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentsMaxAggregateInputType
  }

  export type GetAppointmentsAggregateType<T extends AppointmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointments[P]>
      : GetScalarType<T[P], AggregateAppointments[P]>
  }




  export type AppointmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithAggregationInput | AppointmentsOrderByWithAggregationInput[]
    by: AppointmentsScalarFieldEnum[] | AppointmentsScalarFieldEnum
    having?: AppointmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentsCountAggregateInputType | true
    _avg?: AppointmentsAvgAggregateInputType
    _sum?: AppointmentsSumAggregateInputType
    _min?: AppointmentsMinAggregateInputType
    _max?: AppointmentsMaxAggregateInputType
  }

  export type AppointmentsGroupByOutputType = {
    AppointmentID: number
    PatientID: string
    DoctorID: number
    AppointmentDate: Date
    Status: string | null
    Notes: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    _count: AppointmentsCountAggregateOutputType | null
    _avg: AppointmentsAvgAggregateOutputType | null
    _sum: AppointmentsSumAggregateOutputType | null
    _min: AppointmentsMinAggregateOutputType | null
    _max: AppointmentsMaxAggregateOutputType | null
  }

  type GetAppointmentsGroupByPayload<T extends AppointmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentsGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AppointmentID?: boolean
    PatientID?: boolean
    DoctorID?: boolean
    AppointmentDate?: boolean
    Status?: boolean
    Notes?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Doctors?: boolean | DoctorsDefaultArgs<ExtArgs>
    Patients?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointments"]>



  export type AppointmentsSelectScalar = {
    AppointmentID?: boolean
    PatientID?: boolean
    DoctorID?: boolean
    AppointmentDate?: boolean
    Status?: boolean
    Notes?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type AppointmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"AppointmentID" | "PatientID" | "DoctorID" | "AppointmentDate" | "Status" | "Notes" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["appointments"]>
  export type AppointmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Doctors?: boolean | DoctorsDefaultArgs<ExtArgs>
    Patients?: boolean | PatientsDefaultArgs<ExtArgs>
  }

  export type $AppointmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointments"
    objects: {
      Doctors: Prisma.$DoctorsPayload<ExtArgs>
      Patients: Prisma.$PatientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      AppointmentID: number
      PatientID: string
      DoctorID: number
      AppointmentDate: Date
      Status: string | null
      Notes: string | null
      CreatedAt: Date | null
      UpdatedAt: Date | null
    }, ExtArgs["result"]["appointments"]>
    composites: {}
  }

  type AppointmentsGetPayload<S extends boolean | null | undefined | AppointmentsDefaultArgs> = $Result.GetResult<Prisma.$AppointmentsPayload, S>

  type AppointmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentsCountAggregateInputType | true
    }

  export interface AppointmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointments'], meta: { name: 'Appointments' } }
    /**
     * Find zero or one Appointments that matches the filter.
     * @param {AppointmentsFindUniqueArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentsFindUniqueArgs>(args: SelectSubset<T, AppointmentsFindUniqueArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentsFindUniqueOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentsFindFirstArgs>(args?: SelectSubset<T, AppointmentsFindFirstArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindFirstOrThrowArgs} args - Arguments to find a Appointments
     * @example
     * // Get one Appointments
     * const appointments = await prisma.appointments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointments.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointments.findMany({ take: 10 })
     * 
     * // Only select the `AppointmentID`
     * const appointmentsWithAppointmentIDOnly = await prisma.appointments.findMany({ select: { AppointmentID: true } })
     * 
     */
    findMany<T extends AppointmentsFindManyArgs>(args?: SelectSubset<T, AppointmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointments.
     * @param {AppointmentsCreateArgs} args - Arguments to create a Appointments.
     * @example
     * // Create one Appointments
     * const Appointments = await prisma.appointments.create({
     *   data: {
     *     // ... data to create a Appointments
     *   }
     * })
     * 
     */
    create<T extends AppointmentsCreateArgs>(args: SelectSubset<T, AppointmentsCreateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentsCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointments = await prisma.appointments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentsCreateManyArgs>(args?: SelectSubset<T, AppointmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointments.
     * @param {AppointmentsDeleteArgs} args - Arguments to delete one Appointments.
     * @example
     * // Delete one Appointments
     * const Appointments = await prisma.appointments.delete({
     *   where: {
     *     // ... filter to delete one Appointments
     *   }
     * })
     * 
     */
    delete<T extends AppointmentsDeleteArgs>(args: SelectSubset<T, AppointmentsDeleteArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointments.
     * @param {AppointmentsUpdateArgs} args - Arguments to update one Appointments.
     * @example
     * // Update one Appointments
     * const appointments = await prisma.appointments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentsUpdateArgs>(args: SelectSubset<T, AppointmentsUpdateArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentsDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentsDeleteManyArgs>(args?: SelectSubset<T, AppointmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointments = await prisma.appointments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentsUpdateManyArgs>(args: SelectSubset<T, AppointmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointments.
     * @param {AppointmentsUpsertArgs} args - Arguments to update or create a Appointments.
     * @example
     * // Update or create a Appointments
     * const appointments = await prisma.appointments.upsert({
     *   create: {
     *     // ... data to create a Appointments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointments we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentsUpsertArgs>(args: SelectSubset<T, AppointmentsUpsertArgs<ExtArgs>>): Prisma__AppointmentsClient<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointments.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentsCountArgs>(
      args?: Subset<T, AppointmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentsAggregateArgs>(args: Subset<T, AppointmentsAggregateArgs>): Prisma.PrismaPromise<GetAppointmentsAggregateType<T>>

    /**
     * Group by Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentsGroupByArgs} args - Group by arguments.
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
      T extends AppointmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentsGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointments model
   */
  readonly fields: AppointmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Doctors<T extends DoctorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorsDefaultArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Patients<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointments model
   */ 
  interface AppointmentsFieldRefs {
    readonly AppointmentID: FieldRef<"Appointments", 'Int'>
    readonly PatientID: FieldRef<"Appointments", 'String'>
    readonly DoctorID: FieldRef<"Appointments", 'Int'>
    readonly AppointmentDate: FieldRef<"Appointments", 'DateTime'>
    readonly Status: FieldRef<"Appointments", 'String'>
    readonly Notes: FieldRef<"Appointments", 'String'>
    readonly CreatedAt: FieldRef<"Appointments", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Appointments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointments findUnique
   */
  export type AppointmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findUniqueOrThrow
   */
  export type AppointmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments findFirst
   */
  export type AppointmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findFirstOrThrow
   */
  export type AppointmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments findMany
   */
  export type AppointmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Appointments create
   */
  export type AppointmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointments.
     */
    data: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
  }

  /**
   * Appointments createMany
   */
  export type AppointmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentsCreateManyInput | AppointmentsCreateManyInput[]
  }

  /**
   * Appointments update
   */
  export type AppointmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointments.
     */
    data: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
    /**
     * Choose, which Appointments to update.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments updateMany
   */
  export type AppointmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointments upsert
   */
  export type AppointmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointments to update in case it exists.
     */
    where: AppointmentsWhereUniqueInput
    /**
     * In case the Appointments found by the `where` argument doesn't exist, create a new Appointments with this data.
     */
    create: XOR<AppointmentsCreateInput, AppointmentsUncheckedCreateInput>
    /**
     * In case the Appointments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentsUpdateInput, AppointmentsUncheckedUpdateInput>
  }

  /**
   * Appointments delete
   */
  export type AppointmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    /**
     * Filter which Appointments to delete.
     */
    where: AppointmentsWhereUniqueInput
  }

  /**
   * Appointments deleteMany
   */
  export type AppointmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentsWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointments without action
   */
  export type AppointmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
  }


  /**
   * Model Bills
   */

  export type AggregateBills = {
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  export type BillsAvgAggregateOutputType = {
    BillID: number | null
    TotalAmount: Decimal | null
  }

  export type BillsSumAggregateOutputType = {
    BillID: number | null
    TotalAmount: Decimal | null
  }

  export type BillsMinAggregateOutputType = {
    BillID: number | null
    PatientID: string | null
    TotalAmount: Decimal | null
    PaymentStatus: string | null
    CreatedAt: Date | null
  }

  export type BillsMaxAggregateOutputType = {
    BillID: number | null
    PatientID: string | null
    TotalAmount: Decimal | null
    PaymentStatus: string | null
    CreatedAt: Date | null
  }

  export type BillsCountAggregateOutputType = {
    BillID: number
    PatientID: number
    TotalAmount: number
    PaymentStatus: number
    CreatedAt: number
    _all: number
  }


  export type BillsAvgAggregateInputType = {
    BillID?: true
    TotalAmount?: true
  }

  export type BillsSumAggregateInputType = {
    BillID?: true
    TotalAmount?: true
  }

  export type BillsMinAggregateInputType = {
    BillID?: true
    PatientID?: true
    TotalAmount?: true
    PaymentStatus?: true
    CreatedAt?: true
  }

  export type BillsMaxAggregateInputType = {
    BillID?: true
    PatientID?: true
    TotalAmount?: true
    PaymentStatus?: true
    CreatedAt?: true
  }

  export type BillsCountAggregateInputType = {
    BillID?: true
    PatientID?: true
    TotalAmount?: true
    PaymentStatus?: true
    CreatedAt?: true
    _all?: true
  }

  export type BillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to aggregate.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillsMaxAggregateInputType
  }

  export type GetBillsAggregateType<T extends BillsAggregateArgs> = {
        [P in keyof T & keyof AggregateBills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBills[P]>
      : GetScalarType<T[P], AggregateBills[P]>
  }




  export type BillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithAggregationInput | BillsOrderByWithAggregationInput[]
    by: BillsScalarFieldEnum[] | BillsScalarFieldEnum
    having?: BillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillsCountAggregateInputType | true
    _avg?: BillsAvgAggregateInputType
    _sum?: BillsSumAggregateInputType
    _min?: BillsMinAggregateInputType
    _max?: BillsMaxAggregateInputType
  }

  export type BillsGroupByOutputType = {
    BillID: number
    PatientID: string
    TotalAmount: Decimal
    PaymentStatus: string | null
    CreatedAt: Date | null
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  type GetBillsGroupByPayload<T extends BillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillsGroupByOutputType[P]>
            : GetScalarType<T[P], BillsGroupByOutputType[P]>
        }
      >
    >


  export type BillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BillID?: boolean
    PatientID?: boolean
    TotalAmount?: boolean
    PaymentStatus?: boolean
    CreatedAt?: boolean
    Patients?: boolean | PatientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>



  export type BillsSelectScalar = {
    BillID?: boolean
    PatientID?: boolean
    TotalAmount?: boolean
    PaymentStatus?: boolean
    CreatedAt?: boolean
  }

  export type BillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"BillID" | "PatientID" | "TotalAmount" | "PaymentStatus" | "CreatedAt", ExtArgs["result"]["bills"]>
  export type BillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Patients?: boolean | PatientsDefaultArgs<ExtArgs>
  }

  export type $BillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bills"
    objects: {
      Patients: Prisma.$PatientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      BillID: number
      PatientID: string
      TotalAmount: Prisma.Decimal
      PaymentStatus: string | null
      CreatedAt: Date | null
    }, ExtArgs["result"]["bills"]>
    composites: {}
  }

  type BillsGetPayload<S extends boolean | null | undefined | BillsDefaultArgs> = $Result.GetResult<Prisma.$BillsPayload, S>

  type BillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillsCountAggregateInputType | true
    }

  export interface BillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bills'], meta: { name: 'Bills' } }
    /**
     * Find zero or one Bills that matches the filter.
     * @param {BillsFindUniqueArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillsFindUniqueArgs>(args: SelectSubset<T, BillsFindUniqueArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillsFindUniqueOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillsFindUniqueOrThrowArgs>(args: SelectSubset<T, BillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindFirstArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillsFindFirstArgs>(args?: SelectSubset<T, BillsFindFirstArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindFirstOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillsFindFirstOrThrowArgs>(args?: SelectSubset<T, BillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bills.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bills.findMany({ take: 10 })
     * 
     * // Only select the `BillID`
     * const billsWithBillIDOnly = await prisma.bills.findMany({ select: { BillID: true } })
     * 
     */
    findMany<T extends BillsFindManyArgs>(args?: SelectSubset<T, BillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bills.
     * @param {BillsCreateArgs} args - Arguments to create a Bills.
     * @example
     * // Create one Bills
     * const Bills = await prisma.bills.create({
     *   data: {
     *     // ... data to create a Bills
     *   }
     * })
     * 
     */
    create<T extends BillsCreateArgs>(args: SelectSubset<T, BillsCreateArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillsCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bills = await prisma.bills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillsCreateManyArgs>(args?: SelectSubset<T, BillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bills.
     * @param {BillsDeleteArgs} args - Arguments to delete one Bills.
     * @example
     * // Delete one Bills
     * const Bills = await prisma.bills.delete({
     *   where: {
     *     // ... filter to delete one Bills
     *   }
     * })
     * 
     */
    delete<T extends BillsDeleteArgs>(args: SelectSubset<T, BillsDeleteArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bills.
     * @param {BillsUpdateArgs} args - Arguments to update one Bills.
     * @example
     * // Update one Bills
     * const bills = await prisma.bills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillsUpdateArgs>(args: SelectSubset<T, BillsUpdateArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillsDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillsDeleteManyArgs>(args?: SelectSubset<T, BillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bills = await prisma.bills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillsUpdateManyArgs>(args: SelectSubset<T, BillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bills.
     * @param {BillsUpsertArgs} args - Arguments to update or create a Bills.
     * @example
     * // Update or create a Bills
     * const bills = await prisma.bills.upsert({
     *   create: {
     *     // ... data to create a Bills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bills we want to update
     *   }
     * })
     */
    upsert<T extends BillsUpsertArgs>(args: SelectSubset<T, BillsUpsertArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bills.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillsCountArgs>(
      args?: Subset<T, BillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillsAggregateArgs>(args: Subset<T, BillsAggregateArgs>): Prisma.PrismaPromise<GetBillsAggregateType<T>>

    /**
     * Group by Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsGroupByArgs} args - Group by arguments.
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
      T extends BillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillsGroupByArgs['orderBy'] }
        : { orderBy?: BillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bills model
   */
  readonly fields: BillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Patients<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bills model
   */ 
  interface BillsFieldRefs {
    readonly BillID: FieldRef<"Bills", 'Int'>
    readonly PatientID: FieldRef<"Bills", 'String'>
    readonly TotalAmount: FieldRef<"Bills", 'Decimal'>
    readonly PaymentStatus: FieldRef<"Bills", 'String'>
    readonly CreatedAt: FieldRef<"Bills", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bills findUnique
   */
  export type BillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills findUniqueOrThrow
   */
  export type BillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills findFirst
   */
  export type BillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills findFirstOrThrow
   */
  export type BillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills findMany
   */
  export type BillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills create
   */
  export type BillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bills.
     */
    data: XOR<BillsCreateInput, BillsUncheckedCreateInput>
  }

  /**
   * Bills createMany
   */
  export type BillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillsCreateManyInput | BillsCreateManyInput[]
  }

  /**
   * Bills update
   */
  export type BillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bills.
     */
    data: XOR<BillsUpdateInput, BillsUncheckedUpdateInput>
    /**
     * Choose, which Bills to update.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills updateMany
   */
  export type BillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillsWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bills upsert
   */
  export type BillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bills to update in case it exists.
     */
    where: BillsWhereUniqueInput
    /**
     * In case the Bills found by the `where` argument doesn't exist, create a new Bills with this data.
     */
    create: XOR<BillsCreateInput, BillsUncheckedCreateInput>
    /**
     * In case the Bills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillsUpdateInput, BillsUncheckedUpdateInput>
  }

  /**
   * Bills delete
   */
  export type BillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter which Bills to delete.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills deleteMany
   */
  export type BillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillsWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bills without action
   */
  export type BillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
  }


  /**
   * Model Departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsAvgAggregateOutputType = {
    DepartmentID: number | null
  }

  export type DepartmentsSumAggregateOutputType = {
    DepartmentID: number | null
  }

  export type DepartmentsMinAggregateOutputType = {
    DepartmentID: number | null
    DepartmentName: string | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    DepartmentID: number | null
    DepartmentName: string | null
  }

  export type DepartmentsCountAggregateOutputType = {
    DepartmentID: number
    DepartmentName: number
    _all: number
  }


  export type DepartmentsAvgAggregateInputType = {
    DepartmentID?: true
  }

  export type DepartmentsSumAggregateInputType = {
    DepartmentID?: true
  }

  export type DepartmentsMinAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
  }

  export type DepartmentsCountAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to aggregate.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type DepartmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentsWhereInput
    orderBy?: DepartmentsOrderByWithAggregationInput | DepartmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: DepartmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _avg?: DepartmentsAvgAggregateInputType
    _sum?: DepartmentsSumAggregateInputType
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    DepartmentID: number
    DepartmentName: string
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends DepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DepartmentID?: boolean
    DepartmentName?: boolean
    Diagnoses?: boolean | Departments$DiagnosesArgs<ExtArgs>
    Doctors?: boolean | Departments$DoctorsArgs<ExtArgs>
    Patients?: boolean | Departments$PatientsArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>



  export type DepartmentsSelectScalar = {
    DepartmentID?: boolean
    DepartmentName?: boolean
  }

  export type DepartmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DepartmentID" | "DepartmentName", ExtArgs["result"]["departments"]>
  export type DepartmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Diagnoses?: boolean | Departments$DiagnosesArgs<ExtArgs>
    Doctors?: boolean | Departments$DoctorsArgs<ExtArgs>
    Patients?: boolean | Departments$PatientsArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departments"
    objects: {
      Diagnoses: Prisma.$DiagnosesPayload<ExtArgs>[]
      Doctors: Prisma.$DoctorsPayload<ExtArgs>[]
      Patients: Prisma.$PatientsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DepartmentID: number
      DepartmentName: string
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type DepartmentsGetPayload<S extends boolean | null | undefined | DepartmentsDefaultArgs> = $Result.GetResult<Prisma.$DepartmentsPayload, S>

  type DepartmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface DepartmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departments'], meta: { name: 'Departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {DepartmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentsFindUniqueArgs>(args: SelectSubset<T, DepartmentsFindUniqueArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentsFindFirstArgs>(args?: SelectSubset<T, DepartmentsFindFirstArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `DepartmentID`
     * const departmentsWithDepartmentIDOnly = await prisma.departments.findMany({ select: { DepartmentID: true } })
     * 
     */
    findMany<T extends DepartmentsFindManyArgs>(args?: SelectSubset<T, DepartmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departments.
     * @param {DepartmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends DepartmentsCreateArgs>(args: SelectSubset<T, DepartmentsCreateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentsCreateManyArgs>(args?: SelectSubset<T, DepartmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departments.
     * @param {DepartmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends DepartmentsDeleteArgs>(args: SelectSubset<T, DepartmentsDeleteArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departments.
     * @param {DepartmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentsUpdateArgs>(args: SelectSubset<T, DepartmentsUpdateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentsDeleteManyArgs>(args?: SelectSubset<T, DepartmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentsUpdateManyArgs>(args: SelectSubset<T, DepartmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departments.
     * @param {DepartmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentsUpsertArgs>(args: SelectSubset<T, DepartmentsUpsertArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentsCountArgs>(
      args?: Subset<T, DepartmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsGroupByArgs} args - Group by arguments.
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
      T extends DepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departments model
   */
  readonly fields: DepartmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Diagnoses<T extends Departments$DiagnosesArgs<ExtArgs> = {}>(args?: Subset<T, Departments$DiagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Doctors<T extends Departments$DoctorsArgs<ExtArgs> = {}>(args?: Subset<T, Departments$DoctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Patients<T extends Departments$PatientsArgs<ExtArgs> = {}>(args?: Subset<T, Departments$PatientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Departments model
   */ 
  interface DepartmentsFieldRefs {
    readonly DepartmentID: FieldRef<"Departments", 'Int'>
    readonly DepartmentName: FieldRef<"Departments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Departments findUnique
   */
  export type DepartmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findUniqueOrThrow
   */
  export type DepartmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findFirst
   */
  export type DepartmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findFirstOrThrow
   */
  export type DepartmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findMany
   */
  export type DepartmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments create
   */
  export type DepartmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Departments.
     */
    data: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
  }

  /**
   * Departments createMany
   */
  export type DepartmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
  }

  /**
   * Departments update
   */
  export type DepartmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Departments.
     */
    data: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
    /**
     * Choose, which Departments to update.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments updateMany
   */
  export type DepartmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Departments upsert
   */
  export type DepartmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Departments to update in case it exists.
     */
    where: DepartmentsWhereUniqueInput
    /**
     * In case the Departments found by the `where` argument doesn't exist, create a new Departments with this data.
     */
    create: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
    /**
     * In case the Departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
  }

  /**
   * Departments delete
   */
  export type DepartmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter which Departments to delete.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments deleteMany
   */
  export type DepartmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentsWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Departments.Diagnoses
   */
  export type Departments$DiagnosesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    where?: DiagnosesWhereInput
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    cursor?: DiagnosesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Departments.Doctors
   */
  export type Departments$DoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    where?: DoctorsWhereInput
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    cursor?: DoctorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Departments.Patients
   */
  export type Departments$PatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    where?: PatientsWhereInput
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    cursor?: PatientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Departments without action
   */
  export type DepartmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
  }


  /**
   * Model Diagnoses
   */

  export type AggregateDiagnoses = {
    _count: DiagnosesCountAggregateOutputType | null
    _avg: DiagnosesAvgAggregateOutputType | null
    _sum: DiagnosesSumAggregateOutputType | null
    _min: DiagnosesMinAggregateOutputType | null
    _max: DiagnosesMaxAggregateOutputType | null
  }

  export type DiagnosesAvgAggregateOutputType = {
    DiagnosisID: number | null
    DepartmentID: number | null
  }

  export type DiagnosesSumAggregateOutputType = {
    DiagnosisID: number | null
    DepartmentID: number | null
  }

  export type DiagnosesMinAggregateOutputType = {
    DiagnosisID: number | null
    DepartmentID: number | null
    DiagnosisName: string | null
    CreatedAt: Date | null
  }

  export type DiagnosesMaxAggregateOutputType = {
    DiagnosisID: number | null
    DepartmentID: number | null
    DiagnosisName: string | null
    CreatedAt: Date | null
  }

  export type DiagnosesCountAggregateOutputType = {
    DiagnosisID: number
    DepartmentID: number
    DiagnosisName: number
    CreatedAt: number
    _all: number
  }


  export type DiagnosesAvgAggregateInputType = {
    DiagnosisID?: true
    DepartmentID?: true
  }

  export type DiagnosesSumAggregateInputType = {
    DiagnosisID?: true
    DepartmentID?: true
  }

  export type DiagnosesMinAggregateInputType = {
    DiagnosisID?: true
    DepartmentID?: true
    DiagnosisName?: true
    CreatedAt?: true
  }

  export type DiagnosesMaxAggregateInputType = {
    DiagnosisID?: true
    DepartmentID?: true
    DiagnosisName?: true
    CreatedAt?: true
  }

  export type DiagnosesCountAggregateInputType = {
    DiagnosisID?: true
    DepartmentID?: true
    DiagnosisName?: true
    CreatedAt?: true
    _all?: true
  }

  export type DiagnosesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to aggregate.
     */
    where?: DiagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diagnoses
    **/
    _count?: true | DiagnosesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiagnosesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiagnosesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosesMaxAggregateInputType
  }

  export type GetDiagnosesAggregateType<T extends DiagnosesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnoses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnoses[P]>
      : GetScalarType<T[P], AggregateDiagnoses[P]>
  }




  export type DiagnosesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosesWhereInput
    orderBy?: DiagnosesOrderByWithAggregationInput | DiagnosesOrderByWithAggregationInput[]
    by: DiagnosesScalarFieldEnum[] | DiagnosesScalarFieldEnum
    having?: DiagnosesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosesCountAggregateInputType | true
    _avg?: DiagnosesAvgAggregateInputType
    _sum?: DiagnosesSumAggregateInputType
    _min?: DiagnosesMinAggregateInputType
    _max?: DiagnosesMaxAggregateInputType
  }

  export type DiagnosesGroupByOutputType = {
    DiagnosisID: number
    DepartmentID: number
    DiagnosisName: string
    CreatedAt: Date | null
    _count: DiagnosesCountAggregateOutputType | null
    _avg: DiagnosesAvgAggregateOutputType | null
    _sum: DiagnosesSumAggregateOutputType | null
    _min: DiagnosesMinAggregateOutputType | null
    _max: DiagnosesMaxAggregateOutputType | null
  }

  type GetDiagnosesGroupByPayload<T extends DiagnosesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosesGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosesGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DiagnosisID?: boolean
    DepartmentID?: boolean
    DiagnosisName?: boolean
    CreatedAt?: boolean
    Departments?: boolean | DepartmentsDefaultArgs<ExtArgs>
    admissions?: boolean | Diagnoses$admissionsArgs<ExtArgs>
    _count?: boolean | DiagnosesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnoses"]>



  export type DiagnosesSelectScalar = {
    DiagnosisID?: boolean
    DepartmentID?: boolean
    DiagnosisName?: boolean
    CreatedAt?: boolean
  }

  export type DiagnosesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DiagnosisID" | "DepartmentID" | "DiagnosisName" | "CreatedAt", ExtArgs["result"]["diagnoses"]>
  export type DiagnosesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Departments?: boolean | DepartmentsDefaultArgs<ExtArgs>
    admissions?: boolean | Diagnoses$admissionsArgs<ExtArgs>
    _count?: boolean | DiagnosesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiagnosesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diagnoses"
    objects: {
      Departments: Prisma.$DepartmentsPayload<ExtArgs>
      admissions: Prisma.$AdmissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DiagnosisID: number
      DepartmentID: number
      DiagnosisName: string
      CreatedAt: Date | null
    }, ExtArgs["result"]["diagnoses"]>
    composites: {}
  }

  type DiagnosesGetPayload<S extends boolean | null | undefined | DiagnosesDefaultArgs> = $Result.GetResult<Prisma.$DiagnosesPayload, S>

  type DiagnosesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosesCountAggregateInputType | true
    }

  export interface DiagnosesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diagnoses'], meta: { name: 'Diagnoses' } }
    /**
     * Find zero or one Diagnoses that matches the filter.
     * @param {DiagnosesFindUniqueArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosesFindUniqueArgs>(args: SelectSubset<T, DiagnosesFindUniqueArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diagnoses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosesFindUniqueOrThrowArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosesFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesFindFirstArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosesFindFirstArgs>(args?: SelectSubset<T, DiagnosesFindFirstArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diagnoses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesFindFirstOrThrowArgs} args - Arguments to find a Diagnoses
     * @example
     * // Get one Diagnoses
     * const diagnoses = await prisma.diagnoses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosesFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diagnoses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diagnoses
     * const diagnoses = await prisma.diagnoses.findMany()
     * 
     * // Get first 10 Diagnoses
     * const diagnoses = await prisma.diagnoses.findMany({ take: 10 })
     * 
     * // Only select the `DiagnosisID`
     * const diagnosesWithDiagnosisIDOnly = await prisma.diagnoses.findMany({ select: { DiagnosisID: true } })
     * 
     */
    findMany<T extends DiagnosesFindManyArgs>(args?: SelectSubset<T, DiagnosesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diagnoses.
     * @param {DiagnosesCreateArgs} args - Arguments to create a Diagnoses.
     * @example
     * // Create one Diagnoses
     * const Diagnoses = await prisma.diagnoses.create({
     *   data: {
     *     // ... data to create a Diagnoses
     *   }
     * })
     * 
     */
    create<T extends DiagnosesCreateArgs>(args: SelectSubset<T, DiagnosesCreateArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diagnoses.
     * @param {DiagnosesCreateManyArgs} args - Arguments to create many Diagnoses.
     * @example
     * // Create many Diagnoses
     * const diagnoses = await prisma.diagnoses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosesCreateManyArgs>(args?: SelectSubset<T, DiagnosesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Diagnoses.
     * @param {DiagnosesDeleteArgs} args - Arguments to delete one Diagnoses.
     * @example
     * // Delete one Diagnoses
     * const Diagnoses = await prisma.diagnoses.delete({
     *   where: {
     *     // ... filter to delete one Diagnoses
     *   }
     * })
     * 
     */
    delete<T extends DiagnosesDeleteArgs>(args: SelectSubset<T, DiagnosesDeleteArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diagnoses.
     * @param {DiagnosesUpdateArgs} args - Arguments to update one Diagnoses.
     * @example
     * // Update one Diagnoses
     * const diagnoses = await prisma.diagnoses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosesUpdateArgs>(args: SelectSubset<T, DiagnosesUpdateArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diagnoses.
     * @param {DiagnosesDeleteManyArgs} args - Arguments to filter Diagnoses to delete.
     * @example
     * // Delete a few Diagnoses
     * const { count } = await prisma.diagnoses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosesDeleteManyArgs>(args?: SelectSubset<T, DiagnosesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diagnoses
     * const diagnoses = await prisma.diagnoses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosesUpdateManyArgs>(args: SelectSubset<T, DiagnosesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Diagnoses.
     * @param {DiagnosesUpsertArgs} args - Arguments to update or create a Diagnoses.
     * @example
     * // Update or create a Diagnoses
     * const diagnoses = await prisma.diagnoses.upsert({
     *   create: {
     *     // ... data to create a Diagnoses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diagnoses we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosesUpsertArgs>(args: SelectSubset<T, DiagnosesUpsertArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesCountArgs} args - Arguments to filter Diagnoses to count.
     * @example
     * // Count the number of Diagnoses
     * const count = await prisma.diagnoses.count({
     *   where: {
     *     // ... the filter for the Diagnoses we want to count
     *   }
     * })
    **/
    count<T extends DiagnosesCountArgs>(
      args?: Subset<T, DiagnosesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosesAggregateArgs>(args: Subset<T, DiagnosesAggregateArgs>): Prisma.PrismaPromise<GetDiagnosesAggregateType<T>>

    /**
     * Group by Diagnoses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosesGroupByArgs} args - Group by arguments.
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
      T extends DiagnosesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosesGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diagnoses model
   */
  readonly fields: DiagnosesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diagnoses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Departments<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admissions<T extends Diagnoses$admissionsArgs<ExtArgs> = {}>(args?: Subset<T, Diagnoses$admissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Diagnoses model
   */ 
  interface DiagnosesFieldRefs {
    readonly DiagnosisID: FieldRef<"Diagnoses", 'Int'>
    readonly DepartmentID: FieldRef<"Diagnoses", 'Int'>
    readonly DiagnosisName: FieldRef<"Diagnoses", 'String'>
    readonly CreatedAt: FieldRef<"Diagnoses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diagnoses findUnique
   */
  export type DiagnosesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where: DiagnosesWhereUniqueInput
  }

  /**
   * Diagnoses findUniqueOrThrow
   */
  export type DiagnosesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where: DiagnosesWhereUniqueInput
  }

  /**
   * Diagnoses findFirst
   */
  export type DiagnosesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Diagnoses findFirstOrThrow
   */
  export type DiagnosesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diagnoses.
     */
    cursor?: DiagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diagnoses.
     */
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Diagnoses findMany
   */
  export type DiagnosesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter, which Diagnoses to fetch.
     */
    where?: DiagnosesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diagnoses to fetch.
     */
    orderBy?: DiagnosesOrderByWithRelationInput | DiagnosesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diagnoses.
     */
    cursor?: DiagnosesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diagnoses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diagnoses.
     */
    skip?: number
    distinct?: DiagnosesScalarFieldEnum | DiagnosesScalarFieldEnum[]
  }

  /**
   * Diagnoses create
   */
  export type DiagnosesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * The data needed to create a Diagnoses.
     */
    data: XOR<DiagnosesCreateInput, DiagnosesUncheckedCreateInput>
  }

  /**
   * Diagnoses createMany
   */
  export type DiagnosesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diagnoses.
     */
    data: DiagnosesCreateManyInput | DiagnosesCreateManyInput[]
  }

  /**
   * Diagnoses update
   */
  export type DiagnosesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * The data needed to update a Diagnoses.
     */
    data: XOR<DiagnosesUpdateInput, DiagnosesUncheckedUpdateInput>
    /**
     * Choose, which Diagnoses to update.
     */
    where: DiagnosesWhereUniqueInput
  }

  /**
   * Diagnoses updateMany
   */
  export type DiagnosesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diagnoses.
     */
    data: XOR<DiagnosesUpdateManyMutationInput, DiagnosesUncheckedUpdateManyInput>
    /**
     * Filter which Diagnoses to update
     */
    where?: DiagnosesWhereInput
    /**
     * Limit how many Diagnoses to update.
     */
    limit?: number
  }

  /**
   * Diagnoses upsert
   */
  export type DiagnosesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * The filter to search for the Diagnoses to update in case it exists.
     */
    where: DiagnosesWhereUniqueInput
    /**
     * In case the Diagnoses found by the `where` argument doesn't exist, create a new Diagnoses with this data.
     */
    create: XOR<DiagnosesCreateInput, DiagnosesUncheckedCreateInput>
    /**
     * In case the Diagnoses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosesUpdateInput, DiagnosesUncheckedUpdateInput>
  }

  /**
   * Diagnoses delete
   */
  export type DiagnosesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
    /**
     * Filter which Diagnoses to delete.
     */
    where: DiagnosesWhereUniqueInput
  }

  /**
   * Diagnoses deleteMany
   */
  export type DiagnosesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diagnoses to delete
     */
    where?: DiagnosesWhereInput
    /**
     * Limit how many Diagnoses to delete.
     */
    limit?: number
  }

  /**
   * Diagnoses.admissions
   */
  export type Diagnoses$admissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    where?: AdmissionsWhereInput
    orderBy?: AdmissionsOrderByWithRelationInput | AdmissionsOrderByWithRelationInput[]
    cursor?: AdmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionsScalarFieldEnum | AdmissionsScalarFieldEnum[]
  }

  /**
   * Diagnoses without action
   */
  export type DiagnosesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnoses
     */
    select?: DiagnosesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diagnoses
     */
    omit?: DiagnosesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosesInclude<ExtArgs> | null
  }


  /**
   * Model Doctors
   */

  export type AggregateDoctors = {
    _count: DoctorsCountAggregateOutputType | null
    _avg: DoctorsAvgAggregateOutputType | null
    _sum: DoctorsSumAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  export type DoctorsAvgAggregateOutputType = {
    DoctorID: number | null
    DepartmentID: number | null
  }

  export type DoctorsSumAggregateOutputType = {
    DoctorID: number | null
    DepartmentID: number | null
  }

  export type DoctorsMinAggregateOutputType = {
    DoctorID: number | null
    FirstName: string | null
    LastName: string | null
    DepartmentID: number | null
    ContactNumber: string | null
    Email: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type DoctorsMaxAggregateOutputType = {
    DoctorID: number | null
    FirstName: string | null
    LastName: string | null
    DepartmentID: number | null
    ContactNumber: string | null
    Email: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type DoctorsCountAggregateOutputType = {
    DoctorID: number
    FirstName: number
    LastName: number
    DepartmentID: number
    ContactNumber: number
    Email: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type DoctorsAvgAggregateInputType = {
    DoctorID?: true
    DepartmentID?: true
  }

  export type DoctorsSumAggregateInputType = {
    DoctorID?: true
    DepartmentID?: true
  }

  export type DoctorsMinAggregateInputType = {
    DoctorID?: true
    FirstName?: true
    LastName?: true
    DepartmentID?: true
    ContactNumber?: true
    Email?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type DoctorsMaxAggregateInputType = {
    DoctorID?: true
    FirstName?: true
    LastName?: true
    DepartmentID?: true
    ContactNumber?: true
    Email?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type DoctorsCountAggregateInputType = {
    DoctorID?: true
    FirstName?: true
    LastName?: true
    DepartmentID?: true
    ContactNumber?: true
    Email?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type DoctorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to aggregate.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorsMaxAggregateInputType
  }

  export type GetDoctorsAggregateType<T extends DoctorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctors[P]>
      : GetScalarType<T[P], AggregateDoctors[P]>
  }




  export type DoctorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorsWhereInput
    orderBy?: DoctorsOrderByWithAggregationInput | DoctorsOrderByWithAggregationInput[]
    by: DoctorsScalarFieldEnum[] | DoctorsScalarFieldEnum
    having?: DoctorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorsCountAggregateInputType | true
    _avg?: DoctorsAvgAggregateInputType
    _sum?: DoctorsSumAggregateInputType
    _min?: DoctorsMinAggregateInputType
    _max?: DoctorsMaxAggregateInputType
  }

  export type DoctorsGroupByOutputType = {
    DoctorID: number
    FirstName: string
    LastName: string
    DepartmentID: number
    ContactNumber: string | null
    Email: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    _count: DoctorsCountAggregateOutputType | null
    _avg: DoctorsAvgAggregateOutputType | null
    _sum: DoctorsSumAggregateOutputType | null
    _min: DoctorsMinAggregateOutputType | null
    _max: DoctorsMaxAggregateOutputType | null
  }

  type GetDoctorsGroupByPayload<T extends DoctorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorsGroupByOutputType[P]>
        }
      >
    >


  export type DoctorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DoctorID?: boolean
    FirstName?: boolean
    LastName?: boolean
    DepartmentID?: boolean
    ContactNumber?: boolean
    Email?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Appointments?: boolean | Doctors$AppointmentsArgs<ExtArgs>
    Departments?: boolean | DepartmentsDefaultArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctors"]>



  export type DoctorsSelectScalar = {
    DoctorID?: boolean
    FirstName?: boolean
    LastName?: boolean
    DepartmentID?: boolean
    ContactNumber?: boolean
    Email?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type DoctorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DoctorID" | "FirstName" | "LastName" | "DepartmentID" | "ContactNumber" | "Email" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["doctors"]>
  export type DoctorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Appointments?: boolean | Doctors$AppointmentsArgs<ExtArgs>
    Departments?: boolean | DepartmentsDefaultArgs<ExtArgs>
    _count?: boolean | DoctorsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DoctorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctors"
    objects: {
      Appointments: Prisma.$AppointmentsPayload<ExtArgs>[]
      Departments: Prisma.$DepartmentsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      DoctorID: number
      FirstName: string
      LastName: string
      DepartmentID: number
      ContactNumber: string | null
      Email: string | null
      CreatedAt: Date | null
      UpdatedAt: Date | null
    }, ExtArgs["result"]["doctors"]>
    composites: {}
  }

  type DoctorsGetPayload<S extends boolean | null | undefined | DoctorsDefaultArgs> = $Result.GetResult<Prisma.$DoctorsPayload, S>

  type DoctorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorsCountAggregateInputType | true
    }

  export interface DoctorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctors'], meta: { name: 'Doctors' } }
    /**
     * Find zero or one Doctors that matches the filter.
     * @param {DoctorsFindUniqueArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorsFindUniqueArgs>(args: SelectSubset<T, DoctorsFindUniqueArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorsFindUniqueOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorsFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindFirstArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorsFindFirstArgs>(args?: SelectSubset<T, DoctorsFindFirstArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindFirstOrThrowArgs} args - Arguments to find a Doctors
     * @example
     * // Get one Doctors
     * const doctors = await prisma.doctors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorsFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctors.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctors.findMany({ take: 10 })
     * 
     * // Only select the `DoctorID`
     * const doctorsWithDoctorIDOnly = await prisma.doctors.findMany({ select: { DoctorID: true } })
     * 
     */
    findMany<T extends DoctorsFindManyArgs>(args?: SelectSubset<T, DoctorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctors.
     * @param {DoctorsCreateArgs} args - Arguments to create a Doctors.
     * @example
     * // Create one Doctors
     * const Doctors = await prisma.doctors.create({
     *   data: {
     *     // ... data to create a Doctors
     *   }
     * })
     * 
     */
    create<T extends DoctorsCreateArgs>(args: SelectSubset<T, DoctorsCreateArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorsCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctors = await prisma.doctors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorsCreateManyArgs>(args?: SelectSubset<T, DoctorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctors.
     * @param {DoctorsDeleteArgs} args - Arguments to delete one Doctors.
     * @example
     * // Delete one Doctors
     * const Doctors = await prisma.doctors.delete({
     *   where: {
     *     // ... filter to delete one Doctors
     *   }
     * })
     * 
     */
    delete<T extends DoctorsDeleteArgs>(args: SelectSubset<T, DoctorsDeleteArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctors.
     * @param {DoctorsUpdateArgs} args - Arguments to update one Doctors.
     * @example
     * // Update one Doctors
     * const doctors = await prisma.doctors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorsUpdateArgs>(args: SelectSubset<T, DoctorsUpdateArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorsDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorsDeleteManyArgs>(args?: SelectSubset<T, DoctorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctors = await prisma.doctors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorsUpdateManyArgs>(args: SelectSubset<T, DoctorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctors.
     * @param {DoctorsUpsertArgs} args - Arguments to update or create a Doctors.
     * @example
     * // Update or create a Doctors
     * const doctors = await prisma.doctors.upsert({
     *   create: {
     *     // ... data to create a Doctors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctors we want to update
     *   }
     * })
     */
    upsert<T extends DoctorsUpsertArgs>(args: SelectSubset<T, DoctorsUpsertArgs<ExtArgs>>): Prisma__DoctorsClient<$Result.GetResult<Prisma.$DoctorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctors.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorsCountArgs>(
      args?: Subset<T, DoctorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorsAggregateArgs>(args: Subset<T, DoctorsAggregateArgs>): Prisma.PrismaPromise<GetDoctorsAggregateType<T>>

    /**
     * Group by Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorsGroupByArgs} args - Group by arguments.
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
      T extends DoctorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorsGroupByArgs['orderBy'] }
        : { orderBy?: DoctorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctors model
   */
  readonly fields: DoctorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Appointments<T extends Doctors$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctors$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Departments<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Doctors model
   */ 
  interface DoctorsFieldRefs {
    readonly DoctorID: FieldRef<"Doctors", 'Int'>
    readonly FirstName: FieldRef<"Doctors", 'String'>
    readonly LastName: FieldRef<"Doctors", 'String'>
    readonly DepartmentID: FieldRef<"Doctors", 'Int'>
    readonly ContactNumber: FieldRef<"Doctors", 'String'>
    readonly Email: FieldRef<"Doctors", 'String'>
    readonly CreatedAt: FieldRef<"Doctors", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Doctors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctors findUnique
   */
  export type DoctorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors findUniqueOrThrow
   */
  export type DoctorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors findFirst
   */
  export type DoctorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors findFirstOrThrow
   */
  export type DoctorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors findMany
   */
  export type DoctorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorsOrderByWithRelationInput | DoctorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorsScalarFieldEnum | DoctorsScalarFieldEnum[]
  }

  /**
   * Doctors create
   */
  export type DoctorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctors.
     */
    data: XOR<DoctorsCreateInput, DoctorsUncheckedCreateInput>
  }

  /**
   * Doctors createMany
   */
  export type DoctorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorsCreateManyInput | DoctorsCreateManyInput[]
  }

  /**
   * Doctors update
   */
  export type DoctorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctors.
     */
    data: XOR<DoctorsUpdateInput, DoctorsUncheckedUpdateInput>
    /**
     * Choose, which Doctors to update.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors updateMany
   */
  export type DoctorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorsUpdateManyMutationInput, DoctorsUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorsWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctors upsert
   */
  export type DoctorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctors to update in case it exists.
     */
    where: DoctorsWhereUniqueInput
    /**
     * In case the Doctors found by the `where` argument doesn't exist, create a new Doctors with this data.
     */
    create: XOR<DoctorsCreateInput, DoctorsUncheckedCreateInput>
    /**
     * In case the Doctors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorsUpdateInput, DoctorsUncheckedUpdateInput>
  }

  /**
   * Doctors delete
   */
  export type DoctorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
    /**
     * Filter which Doctors to delete.
     */
    where: DoctorsWhereUniqueInput
  }

  /**
   * Doctors deleteMany
   */
  export type DoctorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorsWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctors.Appointments
   */
  export type Doctors$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    cursor?: AppointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Doctors without action
   */
  export type DoctorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctors
     */
    select?: DoctorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctors
     */
    omit?: DoctorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorsInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecords
   */

  export type AggregateMedicalRecords = {
    _count: MedicalRecordsCountAggregateOutputType | null
    _avg: MedicalRecordsAvgAggregateOutputType | null
    _sum: MedicalRecordsSumAggregateOutputType | null
    _min: MedicalRecordsMinAggregateOutputType | null
    _max: MedicalRecordsMaxAggregateOutputType | null
  }

  export type MedicalRecordsAvgAggregateOutputType = {
    admission_no: number | null
  }

  export type MedicalRecordsSumAggregateOutputType = {
    admission_no: number | null
  }

  export type MedicalRecordsMinAggregateOutputType = {
    RecordID: string | null
    PatientID: string | null
    DiagnosisDetails: string | null
    TreatmentPlan: string | null
    medication: string | null
    RecordDate: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    admission_no: number | null
  }

  export type MedicalRecordsMaxAggregateOutputType = {
    RecordID: string | null
    PatientID: string | null
    DiagnosisDetails: string | null
    TreatmentPlan: string | null
    medication: string | null
    RecordDate: Date | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    admission_no: number | null
  }

  export type MedicalRecordsCountAggregateOutputType = {
    RecordID: number
    PatientID: number
    DiagnosisDetails: number
    TreatmentPlan: number
    medication: number
    RecordDate: number
    CreatedAt: number
    UpdatedAt: number
    admission_no: number
    _all: number
  }


  export type MedicalRecordsAvgAggregateInputType = {
    admission_no?: true
  }

  export type MedicalRecordsSumAggregateInputType = {
    admission_no?: true
  }

  export type MedicalRecordsMinAggregateInputType = {
    RecordID?: true
    PatientID?: true
    DiagnosisDetails?: true
    TreatmentPlan?: true
    medication?: true
    RecordDate?: true
    CreatedAt?: true
    UpdatedAt?: true
    admission_no?: true
  }

  export type MedicalRecordsMaxAggregateInputType = {
    RecordID?: true
    PatientID?: true
    DiagnosisDetails?: true
    TreatmentPlan?: true
    medication?: true
    RecordDate?: true
    CreatedAt?: true
    UpdatedAt?: true
    admission_no?: true
  }

  export type MedicalRecordsCountAggregateInputType = {
    RecordID?: true
    PatientID?: true
    DiagnosisDetails?: true
    TreatmentPlan?: true
    medication?: true
    RecordDate?: true
    CreatedAt?: true
    UpdatedAt?: true
    admission_no?: true
    _all?: true
  }

  export type MedicalRecordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to aggregate.
     */
    where?: MedicalRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordsOrderByWithRelationInput | MedicalRecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicalRecordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicalRecordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordsMaxAggregateInputType
  }

  export type GetMedicalRecordsAggregateType<T extends MedicalRecordsAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecords[P]>
      : GetScalarType<T[P], AggregateMedicalRecords[P]>
  }




  export type MedicalRecordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordsWhereInput
    orderBy?: MedicalRecordsOrderByWithAggregationInput | MedicalRecordsOrderByWithAggregationInput[]
    by: MedicalRecordsScalarFieldEnum[] | MedicalRecordsScalarFieldEnum
    having?: MedicalRecordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordsCountAggregateInputType | true
    _avg?: MedicalRecordsAvgAggregateInputType
    _sum?: MedicalRecordsSumAggregateInputType
    _min?: MedicalRecordsMinAggregateInputType
    _max?: MedicalRecordsMaxAggregateInputType
  }

  export type MedicalRecordsGroupByOutputType = {
    RecordID: string
    PatientID: string
    DiagnosisDetails: string | null
    TreatmentPlan: string | null
    medication: string | null
    RecordDate: Date
    CreatedAt: Date | null
    UpdatedAt: Date | null
    admission_no: number | null
    _count: MedicalRecordsCountAggregateOutputType | null
    _avg: MedicalRecordsAvgAggregateOutputType | null
    _sum: MedicalRecordsSumAggregateOutputType | null
    _min: MedicalRecordsMinAggregateOutputType | null
    _max: MedicalRecordsMaxAggregateOutputType | null
  }

  type GetMedicalRecordsGroupByPayload<T extends MedicalRecordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordsGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordsGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RecordID?: boolean
    PatientID?: boolean
    DiagnosisDetails?: boolean
    TreatmentPlan?: boolean
    medication?: boolean
    RecordDate?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    admission_no?: boolean
    Patients?: boolean | PatientsDefaultArgs<ExtArgs>
    CaseSheets?: boolean | MedicalRecords$CaseSheetsArgs<ExtArgs>
    Admissions?: boolean | MedicalRecords$AdmissionsArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecords"]>



  export type MedicalRecordsSelectScalar = {
    RecordID?: boolean
    PatientID?: boolean
    DiagnosisDetails?: boolean
    TreatmentPlan?: boolean
    medication?: boolean
    RecordDate?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    admission_no?: boolean
  }

  export type MedicalRecordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RecordID" | "PatientID" | "DiagnosisDetails" | "TreatmentPlan" | "medication" | "RecordDate" | "CreatedAt" | "UpdatedAt" | "admission_no", ExtArgs["result"]["medicalRecords"]>
  export type MedicalRecordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Patients?: boolean | PatientsDefaultArgs<ExtArgs>
    CaseSheets?: boolean | MedicalRecords$CaseSheetsArgs<ExtArgs>
    Admissions?: boolean | MedicalRecords$AdmissionsArgs<ExtArgs>
  }

  export type $MedicalRecordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecords"
    objects: {
      Patients: Prisma.$PatientsPayload<ExtArgs>
      CaseSheets: Prisma.$CaseSheetsPayload<ExtArgs> | null
      Admissions: Prisma.$AdmissionsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      RecordID: string
      PatientID: string
      DiagnosisDetails: string | null
      TreatmentPlan: string | null
      medication: string | null
      RecordDate: Date
      CreatedAt: Date | null
      UpdatedAt: Date | null
      admission_no: number | null
    }, ExtArgs["result"]["medicalRecords"]>
    composites: {}
  }

  type MedicalRecordsGetPayload<S extends boolean | null | undefined | MedicalRecordsDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordsPayload, S>

  type MedicalRecordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalRecordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalRecordsCountAggregateInputType | true
    }

  export interface MedicalRecordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecords'], meta: { name: 'MedicalRecords' } }
    /**
     * Find zero or one MedicalRecords that matches the filter.
     * @param {MedicalRecordsFindUniqueArgs} args - Arguments to find a MedicalRecords
     * @example
     * // Get one MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordsFindUniqueArgs>(args: SelectSubset<T, MedicalRecordsFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalRecords that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalRecordsFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecords
     * @example
     * // Get one MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordsFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordsFindFirstArgs} args - Arguments to find a MedicalRecords
     * @example
     * // Get one MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordsFindFirstArgs>(args?: SelectSubset<T, MedicalRecordsFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecords that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordsFindFirstOrThrowArgs} args - Arguments to find a MedicalRecords
     * @example
     * // Get one MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordsFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.findMany({ take: 10 })
     * 
     * // Only select the `RecordID`
     * const medicalRecordsWithRecordIDOnly = await prisma.medicalRecords.findMany({ select: { RecordID: true } })
     * 
     */
    findMany<T extends MedicalRecordsFindManyArgs>(args?: SelectSubset<T, MedicalRecordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalRecords.
     * @param {MedicalRecordsCreateArgs} args - Arguments to create a MedicalRecords.
     * @example
     * // Create one MedicalRecords
     * const MedicalRecords = await prisma.medicalRecords.create({
     *   data: {
     *     // ... data to create a MedicalRecords
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordsCreateArgs>(args: SelectSubset<T, MedicalRecordsCreateArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordsCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordsCreateManyArgs>(args?: SelectSubset<T, MedicalRecordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalRecords.
     * @param {MedicalRecordsDeleteArgs} args - Arguments to delete one MedicalRecords.
     * @example
     * // Delete one MedicalRecords
     * const MedicalRecords = await prisma.medicalRecords.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecords
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordsDeleteArgs>(args: SelectSubset<T, MedicalRecordsDeleteArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalRecords.
     * @param {MedicalRecordsUpdateArgs} args - Arguments to update one MedicalRecords.
     * @example
     * // Update one MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordsUpdateArgs>(args: SelectSubset<T, MedicalRecordsUpdateArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordsDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordsDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordsUpdateManyArgs>(args: SelectSubset<T, MedicalRecordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalRecords.
     * @param {MedicalRecordsUpsertArgs} args - Arguments to update or create a MedicalRecords.
     * @example
     * // Update or create a MedicalRecords
     * const medicalRecords = await prisma.medicalRecords.upsert({
     *   create: {
     *     // ... data to create a MedicalRecords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecords we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordsUpsertArgs>(args: SelectSubset<T, MedicalRecordsUpsertArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordsCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecords.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordsCountArgs>(
      args?: Subset<T, MedicalRecordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalRecordsAggregateArgs>(args: Subset<T, MedicalRecordsAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordsAggregateType<T>>

    /**
     * Group by MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordsGroupByArgs} args - Group by arguments.
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
      T extends MedicalRecordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordsGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalRecordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecords model
   */
  readonly fields: MedicalRecordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Patients<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CaseSheets<T extends MedicalRecords$CaseSheetsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecords$CaseSheetsArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Admissions<T extends MedicalRecords$AdmissionsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecords$AdmissionsArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MedicalRecords model
   */ 
  interface MedicalRecordsFieldRefs {
    readonly RecordID: FieldRef<"MedicalRecords", 'String'>
    readonly PatientID: FieldRef<"MedicalRecords", 'String'>
    readonly DiagnosisDetails: FieldRef<"MedicalRecords", 'String'>
    readonly TreatmentPlan: FieldRef<"MedicalRecords", 'String'>
    readonly medication: FieldRef<"MedicalRecords", 'String'>
    readonly RecordDate: FieldRef<"MedicalRecords", 'DateTime'>
    readonly CreatedAt: FieldRef<"MedicalRecords", 'DateTime'>
    readonly UpdatedAt: FieldRef<"MedicalRecords", 'DateTime'>
    readonly admission_no: FieldRef<"MedicalRecords", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecords findUnique
   */
  export type MedicalRecordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where: MedicalRecordsWhereUniqueInput
  }

  /**
   * MedicalRecords findUniqueOrThrow
   */
  export type MedicalRecordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where: MedicalRecordsWhereUniqueInput
  }

  /**
   * MedicalRecords findFirst
   */
  export type MedicalRecordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordsOrderByWithRelationInput | MedicalRecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordsScalarFieldEnum | MedicalRecordsScalarFieldEnum[]
  }

  /**
   * MedicalRecords findFirstOrThrow
   */
  export type MedicalRecordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordsOrderByWithRelationInput | MedicalRecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordsScalarFieldEnum | MedicalRecordsScalarFieldEnum[]
  }

  /**
   * MedicalRecords findMany
   */
  export type MedicalRecordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordsOrderByWithRelationInput | MedicalRecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    distinct?: MedicalRecordsScalarFieldEnum | MedicalRecordsScalarFieldEnum[]
  }

  /**
   * MedicalRecords create
   */
  export type MedicalRecordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecords.
     */
    data: XOR<MedicalRecordsCreateInput, MedicalRecordsUncheckedCreateInput>
  }

  /**
   * MedicalRecords createMany
   */
  export type MedicalRecordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordsCreateManyInput | MedicalRecordsCreateManyInput[]
  }

  /**
   * MedicalRecords update
   */
  export type MedicalRecordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecords.
     */
    data: XOR<MedicalRecordsUpdateInput, MedicalRecordsUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecords to update.
     */
    where: MedicalRecordsWhereUniqueInput
  }

  /**
   * MedicalRecords updateMany
   */
  export type MedicalRecordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordsUpdateManyMutationInput, MedicalRecordsUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordsWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
  }

  /**
   * MedicalRecords upsert
   */
  export type MedicalRecordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecords to update in case it exists.
     */
    where: MedicalRecordsWhereUniqueInput
    /**
     * In case the MedicalRecords found by the `where` argument doesn't exist, create a new MedicalRecords with this data.
     */
    create: XOR<MedicalRecordsCreateInput, MedicalRecordsUncheckedCreateInput>
    /**
     * In case the MedicalRecords was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordsUpdateInput, MedicalRecordsUncheckedUpdateInput>
  }

  /**
   * MedicalRecords delete
   */
  export type MedicalRecordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecords to delete.
     */
    where: MedicalRecordsWhereUniqueInput
  }

  /**
   * MedicalRecords deleteMany
   */
  export type MedicalRecordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordsWhereInput
    /**
     * Limit how many MedicalRecords to delete.
     */
    limit?: number
  }

  /**
   * MedicalRecords.CaseSheets
   */
  export type MedicalRecords$CaseSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    where?: CaseSheetsWhereInput
  }

  /**
   * MedicalRecords.Admissions
   */
  export type MedicalRecords$AdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    where?: AdmissionsWhereInput
  }

  /**
   * MedicalRecords without action
   */
  export type MedicalRecordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
  }


  /**
   * Model CaseSheets
   */

  export type AggregateCaseSheets = {
    _count: CaseSheetsCountAggregateOutputType | null
    _min: CaseSheetsMinAggregateOutputType | null
    _max: CaseSheetsMaxAggregateOutputType | null
  }

  export type CaseSheetsMinAggregateOutputType = {
    CaseSheetID: string | null
    CaseSheet: string | null
    RecordID: string | null
  }

  export type CaseSheetsMaxAggregateOutputType = {
    CaseSheetID: string | null
    CaseSheet: string | null
    RecordID: string | null
  }

  export type CaseSheetsCountAggregateOutputType = {
    CaseSheetID: number
    CaseSheet: number
    RecordID: number
    _all: number
  }


  export type CaseSheetsMinAggregateInputType = {
    CaseSheetID?: true
    CaseSheet?: true
    RecordID?: true
  }

  export type CaseSheetsMaxAggregateInputType = {
    CaseSheetID?: true
    CaseSheet?: true
    RecordID?: true
  }

  export type CaseSheetsCountAggregateInputType = {
    CaseSheetID?: true
    CaseSheet?: true
    RecordID?: true
    _all?: true
  }

  export type CaseSheetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseSheets to aggregate.
     */
    where?: CaseSheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseSheets to fetch.
     */
    orderBy?: CaseSheetsOrderByWithRelationInput | CaseSheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseSheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseSheets
    **/
    _count?: true | CaseSheetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseSheetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseSheetsMaxAggregateInputType
  }

  export type GetCaseSheetsAggregateType<T extends CaseSheetsAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseSheets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseSheets[P]>
      : GetScalarType<T[P], AggregateCaseSheets[P]>
  }




  export type CaseSheetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseSheetsWhereInput
    orderBy?: CaseSheetsOrderByWithAggregationInput | CaseSheetsOrderByWithAggregationInput[]
    by: CaseSheetsScalarFieldEnum[] | CaseSheetsScalarFieldEnum
    having?: CaseSheetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseSheetsCountAggregateInputType | true
    _min?: CaseSheetsMinAggregateInputType
    _max?: CaseSheetsMaxAggregateInputType
  }

  export type CaseSheetsGroupByOutputType = {
    CaseSheetID: string
    CaseSheet: string | null
    RecordID: string
    _count: CaseSheetsCountAggregateOutputType | null
    _min: CaseSheetsMinAggregateOutputType | null
    _max: CaseSheetsMaxAggregateOutputType | null
  }

  type GetCaseSheetsGroupByPayload<T extends CaseSheetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseSheetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseSheetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseSheetsGroupByOutputType[P]>
            : GetScalarType<T[P], CaseSheetsGroupByOutputType[P]>
        }
      >
    >


  export type CaseSheetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CaseSheetID?: boolean
    CaseSheet?: boolean
    RecordID?: boolean
    MedicalRecord?: boolean | MedicalRecordsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseSheets"]>



  export type CaseSheetsSelectScalar = {
    CaseSheetID?: boolean
    CaseSheet?: boolean
    RecordID?: boolean
  }

  export type CaseSheetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CaseSheetID" | "CaseSheet" | "RecordID", ExtArgs["result"]["caseSheets"]>
  export type CaseSheetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MedicalRecord?: boolean | MedicalRecordsDefaultArgs<ExtArgs>
  }

  export type $CaseSheetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseSheets"
    objects: {
      MedicalRecord: Prisma.$MedicalRecordsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      CaseSheetID: string
      CaseSheet: string | null
      RecordID: string
    }, ExtArgs["result"]["caseSheets"]>
    composites: {}
  }

  type CaseSheetsGetPayload<S extends boolean | null | undefined | CaseSheetsDefaultArgs> = $Result.GetResult<Prisma.$CaseSheetsPayload, S>

  type CaseSheetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseSheetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseSheetsCountAggregateInputType | true
    }

  export interface CaseSheetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseSheets'], meta: { name: 'CaseSheets' } }
    /**
     * Find zero or one CaseSheets that matches the filter.
     * @param {CaseSheetsFindUniqueArgs} args - Arguments to find a CaseSheets
     * @example
     * // Get one CaseSheets
     * const caseSheets = await prisma.caseSheets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseSheetsFindUniqueArgs>(args: SelectSubset<T, CaseSheetsFindUniqueArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseSheets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseSheetsFindUniqueOrThrowArgs} args - Arguments to find a CaseSheets
     * @example
     * // Get one CaseSheets
     * const caseSheets = await prisma.caseSheets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseSheetsFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseSheetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseSheetsFindFirstArgs} args - Arguments to find a CaseSheets
     * @example
     * // Get one CaseSheets
     * const caseSheets = await prisma.caseSheets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseSheetsFindFirstArgs>(args?: SelectSubset<T, CaseSheetsFindFirstArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseSheets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseSheetsFindFirstOrThrowArgs} args - Arguments to find a CaseSheets
     * @example
     * // Get one CaseSheets
     * const caseSheets = await prisma.caseSheets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseSheetsFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseSheetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseSheetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseSheets
     * const caseSheets = await prisma.caseSheets.findMany()
     * 
     * // Get first 10 CaseSheets
     * const caseSheets = await prisma.caseSheets.findMany({ take: 10 })
     * 
     * // Only select the `CaseSheetID`
     * const caseSheetsWithCaseSheetIDOnly = await prisma.caseSheets.findMany({ select: { CaseSheetID: true } })
     * 
     */
    findMany<T extends CaseSheetsFindManyArgs>(args?: SelectSubset<T, CaseSheetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseSheets.
     * @param {CaseSheetsCreateArgs} args - Arguments to create a CaseSheets.
     * @example
     * // Create one CaseSheets
     * const CaseSheets = await prisma.caseSheets.create({
     *   data: {
     *     // ... data to create a CaseSheets
     *   }
     * })
     * 
     */
    create<T extends CaseSheetsCreateArgs>(args: SelectSubset<T, CaseSheetsCreateArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseSheets.
     * @param {CaseSheetsCreateManyArgs} args - Arguments to create many CaseSheets.
     * @example
     * // Create many CaseSheets
     * const caseSheets = await prisma.caseSheets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseSheetsCreateManyArgs>(args?: SelectSubset<T, CaseSheetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CaseSheets.
     * @param {CaseSheetsDeleteArgs} args - Arguments to delete one CaseSheets.
     * @example
     * // Delete one CaseSheets
     * const CaseSheets = await prisma.caseSheets.delete({
     *   where: {
     *     // ... filter to delete one CaseSheets
     *   }
     * })
     * 
     */
    delete<T extends CaseSheetsDeleteArgs>(args: SelectSubset<T, CaseSheetsDeleteArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseSheets.
     * @param {CaseSheetsUpdateArgs} args - Arguments to update one CaseSheets.
     * @example
     * // Update one CaseSheets
     * const caseSheets = await prisma.caseSheets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseSheetsUpdateArgs>(args: SelectSubset<T, CaseSheetsUpdateArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseSheets.
     * @param {CaseSheetsDeleteManyArgs} args - Arguments to filter CaseSheets to delete.
     * @example
     * // Delete a few CaseSheets
     * const { count } = await prisma.caseSheets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseSheetsDeleteManyArgs>(args?: SelectSubset<T, CaseSheetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseSheetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseSheets
     * const caseSheets = await prisma.caseSheets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseSheetsUpdateManyArgs>(args: SelectSubset<T, CaseSheetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CaseSheets.
     * @param {CaseSheetsUpsertArgs} args - Arguments to update or create a CaseSheets.
     * @example
     * // Update or create a CaseSheets
     * const caseSheets = await prisma.caseSheets.upsert({
     *   create: {
     *     // ... data to create a CaseSheets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseSheets we want to update
     *   }
     * })
     */
    upsert<T extends CaseSheetsUpsertArgs>(args: SelectSubset<T, CaseSheetsUpsertArgs<ExtArgs>>): Prisma__CaseSheetsClient<$Result.GetResult<Prisma.$CaseSheetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseSheetsCountArgs} args - Arguments to filter CaseSheets to count.
     * @example
     * // Count the number of CaseSheets
     * const count = await prisma.caseSheets.count({
     *   where: {
     *     // ... the filter for the CaseSheets we want to count
     *   }
     * })
    **/
    count<T extends CaseSheetsCountArgs>(
      args?: Subset<T, CaseSheetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseSheetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseSheetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaseSheetsAggregateArgs>(args: Subset<T, CaseSheetsAggregateArgs>): Prisma.PrismaPromise<GetCaseSheetsAggregateType<T>>

    /**
     * Group by CaseSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseSheetsGroupByArgs} args - Group by arguments.
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
      T extends CaseSheetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseSheetsGroupByArgs['orderBy'] }
        : { orderBy?: CaseSheetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaseSheetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseSheetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseSheets model
   */
  readonly fields: CaseSheetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseSheets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseSheetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MedicalRecord<T extends MedicalRecordsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecordsDefaultArgs<ExtArgs>>): Prisma__MedicalRecordsClient<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CaseSheets model
   */ 
  interface CaseSheetsFieldRefs {
    readonly CaseSheetID: FieldRef<"CaseSheets", 'String'>
    readonly CaseSheet: FieldRef<"CaseSheets", 'String'>
    readonly RecordID: FieldRef<"CaseSheets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CaseSheets findUnique
   */
  export type CaseSheetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * Filter, which CaseSheets to fetch.
     */
    where: CaseSheetsWhereUniqueInput
  }

  /**
   * CaseSheets findUniqueOrThrow
   */
  export type CaseSheetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * Filter, which CaseSheets to fetch.
     */
    where: CaseSheetsWhereUniqueInput
  }

  /**
   * CaseSheets findFirst
   */
  export type CaseSheetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * Filter, which CaseSheets to fetch.
     */
    where?: CaseSheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseSheets to fetch.
     */
    orderBy?: CaseSheetsOrderByWithRelationInput | CaseSheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseSheets.
     */
    cursor?: CaseSheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseSheets.
     */
    distinct?: CaseSheetsScalarFieldEnum | CaseSheetsScalarFieldEnum[]
  }

  /**
   * CaseSheets findFirstOrThrow
   */
  export type CaseSheetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * Filter, which CaseSheets to fetch.
     */
    where?: CaseSheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseSheets to fetch.
     */
    orderBy?: CaseSheetsOrderByWithRelationInput | CaseSheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseSheets.
     */
    cursor?: CaseSheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseSheets.
     */
    distinct?: CaseSheetsScalarFieldEnum | CaseSheetsScalarFieldEnum[]
  }

  /**
   * CaseSheets findMany
   */
  export type CaseSheetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * Filter, which CaseSheets to fetch.
     */
    where?: CaseSheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseSheets to fetch.
     */
    orderBy?: CaseSheetsOrderByWithRelationInput | CaseSheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseSheets.
     */
    cursor?: CaseSheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseSheets.
     */
    skip?: number
    distinct?: CaseSheetsScalarFieldEnum | CaseSheetsScalarFieldEnum[]
  }

  /**
   * CaseSheets create
   */
  export type CaseSheetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * The data needed to create a CaseSheets.
     */
    data: XOR<CaseSheetsCreateInput, CaseSheetsUncheckedCreateInput>
  }

  /**
   * CaseSheets createMany
   */
  export type CaseSheetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseSheets.
     */
    data: CaseSheetsCreateManyInput | CaseSheetsCreateManyInput[]
  }

  /**
   * CaseSheets update
   */
  export type CaseSheetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * The data needed to update a CaseSheets.
     */
    data: XOR<CaseSheetsUpdateInput, CaseSheetsUncheckedUpdateInput>
    /**
     * Choose, which CaseSheets to update.
     */
    where: CaseSheetsWhereUniqueInput
  }

  /**
   * CaseSheets updateMany
   */
  export type CaseSheetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseSheets.
     */
    data: XOR<CaseSheetsUpdateManyMutationInput, CaseSheetsUncheckedUpdateManyInput>
    /**
     * Filter which CaseSheets to update
     */
    where?: CaseSheetsWhereInput
    /**
     * Limit how many CaseSheets to update.
     */
    limit?: number
  }

  /**
   * CaseSheets upsert
   */
  export type CaseSheetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * The filter to search for the CaseSheets to update in case it exists.
     */
    where: CaseSheetsWhereUniqueInput
    /**
     * In case the CaseSheets found by the `where` argument doesn't exist, create a new CaseSheets with this data.
     */
    create: XOR<CaseSheetsCreateInput, CaseSheetsUncheckedCreateInput>
    /**
     * In case the CaseSheets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseSheetsUpdateInput, CaseSheetsUncheckedUpdateInput>
  }

  /**
   * CaseSheets delete
   */
  export type CaseSheetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
    /**
     * Filter which CaseSheets to delete.
     */
    where: CaseSheetsWhereUniqueInput
  }

  /**
   * CaseSheets deleteMany
   */
  export type CaseSheetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseSheets to delete
     */
    where?: CaseSheetsWhereInput
    /**
     * Limit how many CaseSheets to delete.
     */
    limit?: number
  }

  /**
   * CaseSheets without action
   */
  export type CaseSheetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseSheets
     */
    select?: CaseSheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseSheets
     */
    omit?: CaseSheetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseSheetsInclude<ExtArgs> | null
  }


  /**
   * Model Services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    ServiceID: number | null
  }

  export type ServicesSumAggregateOutputType = {
    ServiceID: number | null
  }

  export type ServicesMinAggregateOutputType = {
    ServiceID: number | null
    ServiceName: string | null
    ServiceCode: string | null
  }

  export type ServicesMaxAggregateOutputType = {
    ServiceID: number | null
    ServiceName: string | null
    ServiceCode: string | null
  }

  export type ServicesCountAggregateOutputType = {
    ServiceID: number
    ServiceName: number
    ServiceCode: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    ServiceID?: true
  }

  export type ServicesSumAggregateInputType = {
    ServiceID?: true
  }

  export type ServicesMinAggregateInputType = {
    ServiceID?: true
    ServiceName?: true
    ServiceCode?: true
  }

  export type ServicesMaxAggregateInputType = {
    ServiceID?: true
    ServiceName?: true
    ServiceCode?: true
  }

  export type ServicesCountAggregateInputType = {
    ServiceID?: true
    ServiceName?: true
    ServiceCode?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to aggregate.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type ServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicesWhereInput
    orderBy?: ServicesOrderByWithAggregationInput | ServicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: ServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    ServiceID: number
    ServiceName: string
    ServiceCode: string
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends ServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type ServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ServiceID?: boolean
    ServiceName?: boolean
    ServiceCode?: boolean
  }, ExtArgs["result"]["services"]>



  export type ServicesSelectScalar = {
    ServiceID?: boolean
    ServiceName?: boolean
    ServiceCode?: boolean
  }

  export type ServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ServiceID" | "ServiceName" | "ServiceCode", ExtArgs["result"]["services"]>

  export type $ServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Services"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ServiceID: number
      ServiceName: string
      ServiceCode: string
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type ServicesGetPayload<S extends boolean | null | undefined | ServicesDefaultArgs> = $Result.GetResult<Prisma.$ServicesPayload, S>

  type ServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface ServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Services'], meta: { name: 'Services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {ServicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicesFindUniqueArgs>(args: SelectSubset<T, ServicesFindUniqueArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicesFindFirstArgs>(args?: SelectSubset<T, ServicesFindFirstArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `ServiceID`
     * const servicesWithServiceIDOnly = await prisma.services.findMany({ select: { ServiceID: true } })
     * 
     */
    findMany<T extends ServicesFindManyArgs>(args?: SelectSubset<T, ServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {ServicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends ServicesCreateArgs>(args: SelectSubset<T, ServicesCreateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicesCreateManyArgs>(args?: SelectSubset<T, ServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Services.
     * @param {ServicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends ServicesDeleteArgs>(args: SelectSubset<T, ServicesDeleteArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {ServicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicesUpdateArgs>(args: SelectSubset<T, ServicesUpdateArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicesDeleteManyArgs>(args?: SelectSubset<T, ServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicesUpdateManyArgs>(args: SelectSubset<T, ServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Services.
     * @param {ServicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends ServicesUpsertArgs>(args: SelectSubset<T, ServicesUpsertArgs<ExtArgs>>): Prisma__ServicesClient<$Result.GetResult<Prisma.$ServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServicesCountArgs>(
      args?: Subset<T, ServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesGroupByArgs} args - Group by arguments.
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
      T extends ServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicesGroupByArgs['orderBy'] }
        : { orderBy?: ServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Services model
   */
  readonly fields: ServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Services model
   */ 
  interface ServicesFieldRefs {
    readonly ServiceID: FieldRef<"Services", 'Int'>
    readonly ServiceName: FieldRef<"Services", 'String'>
    readonly ServiceCode: FieldRef<"Services", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Services findUnique
   */
  export type ServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findUniqueOrThrow
   */
  export type ServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services findFirst
   */
  export type ServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findFirstOrThrow
   */
  export type ServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services findMany
   */
  export type ServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServicesOrderByWithRelationInput | ServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * Services create
   */
  export type ServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data needed to create a Services.
     */
    data: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
  }

  /**
   * Services createMany
   */
  export type ServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServicesCreateManyInput | ServicesCreateManyInput[]
  }

  /**
   * Services update
   */
  export type ServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The data needed to update a Services.
     */
    data: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
    /**
     * Choose, which Services to update.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services updateMany
   */
  export type ServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServicesUpdateManyMutationInput, ServicesUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Services upsert
   */
  export type ServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * The filter to search for the Services to update in case it exists.
     */
    where: ServicesWhereUniqueInput
    /**
     * In case the Services found by the `where` argument doesn't exist, create a new Services with this data.
     */
    create: XOR<ServicesCreateInput, ServicesUncheckedCreateInput>
    /**
     * In case the Services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicesUpdateInput, ServicesUncheckedUpdateInput>
  }

  /**
   * Services delete
   */
  export type ServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
    /**
     * Filter which Services to delete.
     */
    where: ServicesWhereUniqueInput
  }

  /**
   * Services deleteMany
   */
  export type ServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServicesWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Services without action
   */
  export type ServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Services
     */
    select?: ServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Services
     */
    omit?: ServicesOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    UserID: number | null
  }

  export type UsersSumAggregateOutputType = {
    UserID: number | null
  }

  export type UsersMinAggregateOutputType = {
    UserID: number | null
    Username: string | null
    PasswordHash: string | null
    Email: string | null
    Role: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    UserID: number | null
    Username: string | null
    PasswordHash: string | null
    Email: string | null
    Role: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    UserID: number
    Username: number
    PasswordHash: number
    Email: number
    Role: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    UserID?: true
  }

  export type UsersSumAggregateInputType = {
    UserID?: true
  }

  export type UsersMinAggregateInputType = {
    UserID?: true
    Username?: true
    PasswordHash?: true
    Email?: true
    Role?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    UserID?: true
    Username?: true
    PasswordHash?: true
    Email?: true
    Role?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    UserID?: true
    Username?: true
    PasswordHash?: true
    Email?: true
    Role?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    UserID: number
    Username: string
    PasswordHash: string
    Email: string
    Role: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    Username?: boolean
    PasswordHash?: boolean
    Email?: boolean
    Role?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    UserID?: boolean
    Username?: boolean
    PasswordHash?: boolean
    Email?: boolean
    Role?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserID" | "Username" | "PasswordHash" | "Email" | "Role" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["users"]>

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      Username: string
      PasswordHash: string
      Email: string
      Role: string | null
      CreatedAt: Date | null
      UpdatedAt: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { UserID: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly UserID: FieldRef<"Users", 'Int'>
    readonly Username: FieldRef<"Users", 'String'>
    readonly PasswordHash: FieldRef<"Users", 'String'>
    readonly Email: FieldRef<"Users", 'String'>
    readonly Role: FieldRef<"Users", 'String'>
    readonly CreatedAt: FieldRef<"Users", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
  }


  /**
   * Model Patients
   */

  export type AggregatePatients = {
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  export type PatientsAvgAggregateOutputType = {
    DepartmentID: number | null
  }

  export type PatientsSumAggregateOutputType = {
    DepartmentID: number | null
  }

  export type PatientsMinAggregateOutputType = {
    PatientID: string | null
    Name: string | null
    Age: string | null
    Gender: string | null
    ContactNumber: string | null
    Address: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    Status: string | null
    PatientRegistrationDate: Date | null
    Ptype: string | null
    DepartmentID: number | null
    Email: string | null
    AlternateNumber: string | null
    DOB: Date | null
    BloodGroup: string | null
  }

  export type PatientsMaxAggregateOutputType = {
    PatientID: string | null
    Name: string | null
    Age: string | null
    Gender: string | null
    ContactNumber: string | null
    Address: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    Status: string | null
    PatientRegistrationDate: Date | null
    Ptype: string | null
    DepartmentID: number | null
    Email: string | null
    AlternateNumber: string | null
    DOB: Date | null
    BloodGroup: string | null
  }

  export type PatientsCountAggregateOutputType = {
    PatientID: number
    Name: number
    Age: number
    Gender: number
    ContactNumber: number
    Address: number
    CreatedAt: number
    UpdatedAt: number
    Status: number
    PatientRegistrationDate: number
    Ptype: number
    DepartmentID: number
    Email: number
    AlternateNumber: number
    DOB: number
    BloodGroup: number
    _all: number
  }


  export type PatientsAvgAggregateInputType = {
    DepartmentID?: true
  }

  export type PatientsSumAggregateInputType = {
    DepartmentID?: true
  }

  export type PatientsMinAggregateInputType = {
    PatientID?: true
    Name?: true
    Age?: true
    Gender?: true
    ContactNumber?: true
    Address?: true
    CreatedAt?: true
    UpdatedAt?: true
    Status?: true
    PatientRegistrationDate?: true
    Ptype?: true
    DepartmentID?: true
    Email?: true
    AlternateNumber?: true
    DOB?: true
    BloodGroup?: true
  }

  export type PatientsMaxAggregateInputType = {
    PatientID?: true
    Name?: true
    Age?: true
    Gender?: true
    ContactNumber?: true
    Address?: true
    CreatedAt?: true
    UpdatedAt?: true
    Status?: true
    PatientRegistrationDate?: true
    Ptype?: true
    DepartmentID?: true
    Email?: true
    AlternateNumber?: true
    DOB?: true
    BloodGroup?: true
  }

  export type PatientsCountAggregateInputType = {
    PatientID?: true
    Name?: true
    Age?: true
    Gender?: true
    ContactNumber?: true
    Address?: true
    CreatedAt?: true
    UpdatedAt?: true
    Status?: true
    PatientRegistrationDate?: true
    Ptype?: true
    DepartmentID?: true
    Email?: true
    AlternateNumber?: true
    DOB?: true
    BloodGroup?: true
    _all?: true
  }

  export type PatientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to aggregate.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientsMaxAggregateInputType
  }

  export type GetPatientsAggregateType<T extends PatientsAggregateArgs> = {
        [P in keyof T & keyof AggregatePatients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatients[P]>
      : GetScalarType<T[P], AggregatePatients[P]>
  }




  export type PatientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientsWhereInput
    orderBy?: PatientsOrderByWithAggregationInput | PatientsOrderByWithAggregationInput[]
    by: PatientsScalarFieldEnum[] | PatientsScalarFieldEnum
    having?: PatientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientsCountAggregateInputType | true
    _avg?: PatientsAvgAggregateInputType
    _sum?: PatientsSumAggregateInputType
    _min?: PatientsMinAggregateInputType
    _max?: PatientsMaxAggregateInputType
  }

  export type PatientsGroupByOutputType = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber: string | null
    Address: string | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
    Status: string | null
    PatientRegistrationDate: Date
    Ptype: string | null
    DepartmentID: number | null
    Email: string | null
    AlternateNumber: string | null
    DOB: Date | null
    BloodGroup: string | null
    _count: PatientsCountAggregateOutputType | null
    _avg: PatientsAvgAggregateOutputType | null
    _sum: PatientsSumAggregateOutputType | null
    _min: PatientsMinAggregateOutputType | null
    _max: PatientsMaxAggregateOutputType | null
  }

  type GetPatientsGroupByPayload<T extends PatientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientsGroupByOutputType[P]>
            : GetScalarType<T[P], PatientsGroupByOutputType[P]>
        }
      >
    >


  export type PatientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PatientID?: boolean
    Name?: boolean
    Age?: boolean
    Gender?: boolean
    ContactNumber?: boolean
    Address?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Status?: boolean
    PatientRegistrationDate?: boolean
    Ptype?: boolean
    DepartmentID?: boolean
    Email?: boolean
    AlternateNumber?: boolean
    DOB?: boolean
    BloodGroup?: boolean
    Department?: boolean | Patients$DepartmentArgs<ExtArgs>
    Appointments?: boolean | Patients$AppointmentsArgs<ExtArgs>
    Bills?: boolean | Patients$BillsArgs<ExtArgs>
    MedicalRecords?: boolean | Patients$MedicalRecordsArgs<ExtArgs>
    Admissions?: boolean | Patients$AdmissionsArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patients"]>



  export type PatientsSelectScalar = {
    PatientID?: boolean
    Name?: boolean
    Age?: boolean
    Gender?: boolean
    ContactNumber?: boolean
    Address?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
    Status?: boolean
    PatientRegistrationDate?: boolean
    Ptype?: boolean
    DepartmentID?: boolean
    Email?: boolean
    AlternateNumber?: boolean
    DOB?: boolean
    BloodGroup?: boolean
  }

  export type PatientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PatientID" | "Name" | "Age" | "Gender" | "ContactNumber" | "Address" | "CreatedAt" | "UpdatedAt" | "Status" | "PatientRegistrationDate" | "Ptype" | "DepartmentID" | "Email" | "AlternateNumber" | "DOB" | "BloodGroup", ExtArgs["result"]["patients"]>
  export type PatientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | Patients$DepartmentArgs<ExtArgs>
    Appointments?: boolean | Patients$AppointmentsArgs<ExtArgs>
    Bills?: boolean | Patients$BillsArgs<ExtArgs>
    MedicalRecords?: boolean | Patients$MedicalRecordsArgs<ExtArgs>
    Admissions?: boolean | Patients$AdmissionsArgs<ExtArgs>
    _count?: boolean | PatientsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PatientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patients"
    objects: {
      Department: Prisma.$DepartmentsPayload<ExtArgs> | null
      Appointments: Prisma.$AppointmentsPayload<ExtArgs>[]
      Bills: Prisma.$BillsPayload<ExtArgs>[]
      MedicalRecords: Prisma.$MedicalRecordsPayload<ExtArgs>[]
      Admissions: Prisma.$AdmissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PatientID: string
      Name: string
      Age: string
      Gender: string
      ContactNumber: string | null
      Address: string | null
      CreatedAt: Date | null
      UpdatedAt: Date | null
      Status: string | null
      PatientRegistrationDate: Date
      Ptype: string | null
      DepartmentID: number | null
      Email: string | null
      AlternateNumber: string | null
      DOB: Date | null
      BloodGroup: string | null
    }, ExtArgs["result"]["patients"]>
    composites: {}
  }

  type PatientsGetPayload<S extends boolean | null | undefined | PatientsDefaultArgs> = $Result.GetResult<Prisma.$PatientsPayload, S>

  type PatientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientsCountAggregateInputType | true
    }

  export interface PatientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patients'], meta: { name: 'Patients' } }
    /**
     * Find zero or one Patients that matches the filter.
     * @param {PatientsFindUniqueArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientsFindUniqueArgs>(args: SelectSubset<T, PatientsFindUniqueArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientsFindUniqueOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientsFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientsFindFirstArgs>(args?: SelectSubset<T, PatientsFindFirstArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindFirstOrThrowArgs} args - Arguments to find a Patients
     * @example
     * // Get one Patients
     * const patients = await prisma.patients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientsFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patients.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patients.findMany({ take: 10 })
     * 
     * // Only select the `PatientID`
     * const patientsWithPatientIDOnly = await prisma.patients.findMany({ select: { PatientID: true } })
     * 
     */
    findMany<T extends PatientsFindManyArgs>(args?: SelectSubset<T, PatientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patients.
     * @param {PatientsCreateArgs} args - Arguments to create a Patients.
     * @example
     * // Create one Patients
     * const Patients = await prisma.patients.create({
     *   data: {
     *     // ... data to create a Patients
     *   }
     * })
     * 
     */
    create<T extends PatientsCreateArgs>(args: SelectSubset<T, PatientsCreateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientsCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patients = await prisma.patients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientsCreateManyArgs>(args?: SelectSubset<T, PatientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patients.
     * @param {PatientsDeleteArgs} args - Arguments to delete one Patients.
     * @example
     * // Delete one Patients
     * const Patients = await prisma.patients.delete({
     *   where: {
     *     // ... filter to delete one Patients
     *   }
     * })
     * 
     */
    delete<T extends PatientsDeleteArgs>(args: SelectSubset<T, PatientsDeleteArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patients.
     * @param {PatientsUpdateArgs} args - Arguments to update one Patients.
     * @example
     * // Update one Patients
     * const patients = await prisma.patients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientsUpdateArgs>(args: SelectSubset<T, PatientsUpdateArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientsDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientsDeleteManyArgs>(args?: SelectSubset<T, PatientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patients = await prisma.patients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientsUpdateManyArgs>(args: SelectSubset<T, PatientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patients.
     * @param {PatientsUpsertArgs} args - Arguments to update or create a Patients.
     * @example
     * // Update or create a Patients
     * const patients = await prisma.patients.upsert({
     *   create: {
     *     // ... data to create a Patients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patients we want to update
     *   }
     * })
     */
    upsert<T extends PatientsUpsertArgs>(args: SelectSubset<T, PatientsUpsertArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patients.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientsCountArgs>(
      args?: Subset<T, PatientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientsAggregateArgs>(args: Subset<T, PatientsAggregateArgs>): Prisma.PrismaPromise<GetPatientsAggregateType<T>>

    /**
     * Group by Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientsGroupByArgs} args - Group by arguments.
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
      T extends PatientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientsGroupByArgs['orderBy'] }
        : { orderBy?: PatientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patients model
   */
  readonly fields: PatientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Department<T extends Patients$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, Patients$DepartmentArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Appointments<T extends Patients$AppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$AppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bills<T extends Patients$BillsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$BillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MedicalRecords<T extends Patients$MedicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$MedicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Admissions<T extends Patients$AdmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Patients$AdmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patients model
   */ 
  interface PatientsFieldRefs {
    readonly PatientID: FieldRef<"Patients", 'String'>
    readonly Name: FieldRef<"Patients", 'String'>
    readonly Age: FieldRef<"Patients", 'String'>
    readonly Gender: FieldRef<"Patients", 'String'>
    readonly ContactNumber: FieldRef<"Patients", 'String'>
    readonly Address: FieldRef<"Patients", 'String'>
    readonly CreatedAt: FieldRef<"Patients", 'DateTime'>
    readonly UpdatedAt: FieldRef<"Patients", 'DateTime'>
    readonly Status: FieldRef<"Patients", 'String'>
    readonly PatientRegistrationDate: FieldRef<"Patients", 'DateTime'>
    readonly Ptype: FieldRef<"Patients", 'String'>
    readonly DepartmentID: FieldRef<"Patients", 'Int'>
    readonly Email: FieldRef<"Patients", 'String'>
    readonly AlternateNumber: FieldRef<"Patients", 'String'>
    readonly DOB: FieldRef<"Patients", 'DateTime'>
    readonly BloodGroup: FieldRef<"Patients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patients findUnique
   */
  export type PatientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findUniqueOrThrow
   */
  export type PatientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients findFirst
   */
  export type PatientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findFirstOrThrow
   */
  export type PatientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients findMany
   */
  export type PatientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientsOrderByWithRelationInput | PatientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientsScalarFieldEnum | PatientsScalarFieldEnum[]
  }

  /**
   * Patients create
   */
  export type PatientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Patients.
     */
    data: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
  }

  /**
   * Patients createMany
   */
  export type PatientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientsCreateManyInput | PatientsCreateManyInput[]
  }

  /**
   * Patients update
   */
  export type PatientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Patients.
     */
    data: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
    /**
     * Choose, which Patients to update.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients updateMany
   */
  export type PatientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patients upsert
   */
  export type PatientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Patients to update in case it exists.
     */
    where: PatientsWhereUniqueInput
    /**
     * In case the Patients found by the `where` argument doesn't exist, create a new Patients with this data.
     */
    create: XOR<PatientsCreateInput, PatientsUncheckedCreateInput>
    /**
     * In case the Patients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientsUpdateInput, PatientsUncheckedUpdateInput>
  }

  /**
   * Patients delete
   */
  export type PatientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
    /**
     * Filter which Patients to delete.
     */
    where: PatientsWhereUniqueInput
  }

  /**
   * Patients deleteMany
   */
  export type PatientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientsWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patients.Department
   */
  export type Patients$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    where?: DepartmentsWhereInput
  }

  /**
   * Patients.Appointments
   */
  export type Patients$AppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointments
     */
    select?: AppointmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointments
     */
    omit?: AppointmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentsInclude<ExtArgs> | null
    where?: AppointmentsWhereInput
    orderBy?: AppointmentsOrderByWithRelationInput | AppointmentsOrderByWithRelationInput[]
    cursor?: AppointmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentsScalarFieldEnum | AppointmentsScalarFieldEnum[]
  }

  /**
   * Patients.Bills
   */
  export type Patients$BillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    cursor?: BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Patients.MedicalRecords
   */
  export type Patients$MedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    where?: MedicalRecordsWhereInput
    orderBy?: MedicalRecordsOrderByWithRelationInput | MedicalRecordsOrderByWithRelationInput[]
    cursor?: MedicalRecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordsScalarFieldEnum | MedicalRecordsScalarFieldEnum[]
  }

  /**
   * Patients.Admissions
   */
  export type Patients$AdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    where?: AdmissionsWhereInput
    orderBy?: AdmissionsOrderByWithRelationInput | AdmissionsOrderByWithRelationInput[]
    cursor?: AdmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionsScalarFieldEnum | AdmissionsScalarFieldEnum[]
  }

  /**
   * Patients without action
   */
  export type PatientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patients
     */
    select?: PatientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patients
     */
    omit?: PatientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientsInclude<ExtArgs> | null
  }


  /**
   * Model Ward
   */

  export type AggregateWard = {
    _count: WardCountAggregateOutputType | null
    _avg: WardAvgAggregateOutputType | null
    _sum: WardSumAggregateOutputType | null
    _min: WardMinAggregateOutputType | null
    _max: WardMaxAggregateOutputType | null
  }

  export type WardAvgAggregateOutputType = {
    ward_id: number | null
  }

  export type WardSumAggregateOutputType = {
    ward_id: number | null
  }

  export type WardMinAggregateOutputType = {
    ward_id: number | null
    ward_name: string | null
    ward_type: string | null
    nurse_station_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WardMaxAggregateOutputType = {
    ward_id: number | null
    ward_name: string | null
    ward_type: string | null
    nurse_station_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WardCountAggregateOutputType = {
    ward_id: number
    ward_name: number
    ward_type: number
    nurse_station_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WardAvgAggregateInputType = {
    ward_id?: true
  }

  export type WardSumAggregateInputType = {
    ward_id?: true
  }

  export type WardMinAggregateInputType = {
    ward_id?: true
    ward_name?: true
    ward_type?: true
    nurse_station_number?: true
    created_at?: true
    updated_at?: true
  }

  export type WardMaxAggregateInputType = {
    ward_id?: true
    ward_name?: true
    ward_type?: true
    nurse_station_number?: true
    created_at?: true
    updated_at?: true
  }

  export type WardCountAggregateInputType = {
    ward_id?: true
    ward_name?: true
    ward_type?: true
    nurse_station_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ward to aggregate.
     */
    where?: WardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wards to fetch.
     */
    orderBy?: WardOrderByWithRelationInput | WardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wards
    **/
    _count?: true | WardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WardMaxAggregateInputType
  }

  export type GetWardAggregateType<T extends WardAggregateArgs> = {
        [P in keyof T & keyof AggregateWard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWard[P]>
      : GetScalarType<T[P], AggregateWard[P]>
  }




  export type WardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WardWhereInput
    orderBy?: WardOrderByWithAggregationInput | WardOrderByWithAggregationInput[]
    by: WardScalarFieldEnum[] | WardScalarFieldEnum
    having?: WardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WardCountAggregateInputType | true
    _avg?: WardAvgAggregateInputType
    _sum?: WardSumAggregateInputType
    _min?: WardMinAggregateInputType
    _max?: WardMaxAggregateInputType
  }

  export type WardGroupByOutputType = {
    ward_id: number
    ward_name: string
    ward_type: string
    nurse_station_number: string | null
    created_at: Date
    updated_at: Date
    _count: WardCountAggregateOutputType | null
    _avg: WardAvgAggregateOutputType | null
    _sum: WardSumAggregateOutputType | null
    _min: WardMinAggregateOutputType | null
    _max: WardMaxAggregateOutputType | null
  }

  type GetWardGroupByPayload<T extends WardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WardGroupByOutputType[P]>
            : GetScalarType<T[P], WardGroupByOutputType[P]>
        }
      >
    >


  export type WardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ward_id?: boolean
    ward_name?: boolean
    ward_type?: boolean
    nurse_station_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    rooms?: boolean | Ward$roomsArgs<ExtArgs>
    _count?: boolean | WardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ward"]>



  export type WardSelectScalar = {
    ward_id?: boolean
    ward_name?: boolean
    ward_type?: boolean
    nurse_station_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ward_id" | "ward_name" | "ward_type" | "nurse_station_number" | "created_at" | "updated_at", ExtArgs["result"]["ward"]>
  export type WardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Ward$roomsArgs<ExtArgs>
    _count?: boolean | WardCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ward"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ward_id: number
      ward_name: string
      ward_type: string
      nurse_station_number: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["ward"]>
    composites: {}
  }

  type WardGetPayload<S extends boolean | null | undefined | WardDefaultArgs> = $Result.GetResult<Prisma.$WardPayload, S>

  type WardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WardCountAggregateInputType | true
    }

  export interface WardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ward'], meta: { name: 'Ward' } }
    /**
     * Find zero or one Ward that matches the filter.
     * @param {WardFindUniqueArgs} args - Arguments to find a Ward
     * @example
     * // Get one Ward
     * const ward = await prisma.ward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WardFindUniqueArgs>(args: SelectSubset<T, WardFindUniqueArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WardFindUniqueOrThrowArgs} args - Arguments to find a Ward
     * @example
     * // Get one Ward
     * const ward = await prisma.ward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WardFindUniqueOrThrowArgs>(args: SelectSubset<T, WardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardFindFirstArgs} args - Arguments to find a Ward
     * @example
     * // Get one Ward
     * const ward = await prisma.ward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WardFindFirstArgs>(args?: SelectSubset<T, WardFindFirstArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardFindFirstOrThrowArgs} args - Arguments to find a Ward
     * @example
     * // Get one Ward
     * const ward = await prisma.ward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WardFindFirstOrThrowArgs>(args?: SelectSubset<T, WardFindFirstOrThrowArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wards
     * const wards = await prisma.ward.findMany()
     * 
     * // Get first 10 Wards
     * const wards = await prisma.ward.findMany({ take: 10 })
     * 
     * // Only select the `ward_id`
     * const wardWithWard_idOnly = await prisma.ward.findMany({ select: { ward_id: true } })
     * 
     */
    findMany<T extends WardFindManyArgs>(args?: SelectSubset<T, WardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ward.
     * @param {WardCreateArgs} args - Arguments to create a Ward.
     * @example
     * // Create one Ward
     * const Ward = await prisma.ward.create({
     *   data: {
     *     // ... data to create a Ward
     *   }
     * })
     * 
     */
    create<T extends WardCreateArgs>(args: SelectSubset<T, WardCreateArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wards.
     * @param {WardCreateManyArgs} args - Arguments to create many Wards.
     * @example
     * // Create many Wards
     * const ward = await prisma.ward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WardCreateManyArgs>(args?: SelectSubset<T, WardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ward.
     * @param {WardDeleteArgs} args - Arguments to delete one Ward.
     * @example
     * // Delete one Ward
     * const Ward = await prisma.ward.delete({
     *   where: {
     *     // ... filter to delete one Ward
     *   }
     * })
     * 
     */
    delete<T extends WardDeleteArgs>(args: SelectSubset<T, WardDeleteArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ward.
     * @param {WardUpdateArgs} args - Arguments to update one Ward.
     * @example
     * // Update one Ward
     * const ward = await prisma.ward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WardUpdateArgs>(args: SelectSubset<T, WardUpdateArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wards.
     * @param {WardDeleteManyArgs} args - Arguments to filter Wards to delete.
     * @example
     * // Delete a few Wards
     * const { count } = await prisma.ward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WardDeleteManyArgs>(args?: SelectSubset<T, WardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wards
     * const ward = await prisma.ward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WardUpdateManyArgs>(args: SelectSubset<T, WardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ward.
     * @param {WardUpsertArgs} args - Arguments to update or create a Ward.
     * @example
     * // Update or create a Ward
     * const ward = await prisma.ward.upsert({
     *   create: {
     *     // ... data to create a Ward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ward we want to update
     *   }
     * })
     */
    upsert<T extends WardUpsertArgs>(args: SelectSubset<T, WardUpsertArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardCountArgs} args - Arguments to filter Wards to count.
     * @example
     * // Count the number of Wards
     * const count = await prisma.ward.count({
     *   where: {
     *     // ... the filter for the Wards we want to count
     *   }
     * })
    **/
    count<T extends WardCountArgs>(
      args?: Subset<T, WardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WardAggregateArgs>(args: Subset<T, WardAggregateArgs>): Prisma.PrismaPromise<GetWardAggregateType<T>>

    /**
     * Group by Ward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WardGroupByArgs} args - Group by arguments.
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
      T extends WardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WardGroupByArgs['orderBy'] }
        : { orderBy?: WardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ward model
   */
  readonly fields: WardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Ward$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Ward$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ward model
   */ 
  interface WardFieldRefs {
    readonly ward_id: FieldRef<"Ward", 'Int'>
    readonly ward_name: FieldRef<"Ward", 'String'>
    readonly ward_type: FieldRef<"Ward", 'String'>
    readonly nurse_station_number: FieldRef<"Ward", 'String'>
    readonly created_at: FieldRef<"Ward", 'DateTime'>
    readonly updated_at: FieldRef<"Ward", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ward findUnique
   */
  export type WardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Ward to fetch.
     */
    where: WardWhereUniqueInput
  }

  /**
   * Ward findUniqueOrThrow
   */
  export type WardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Ward to fetch.
     */
    where: WardWhereUniqueInput
  }

  /**
   * Ward findFirst
   */
  export type WardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Ward to fetch.
     */
    where?: WardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wards to fetch.
     */
    orderBy?: WardOrderByWithRelationInput | WardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wards.
     */
    cursor?: WardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wards.
     */
    distinct?: WardScalarFieldEnum | WardScalarFieldEnum[]
  }

  /**
   * Ward findFirstOrThrow
   */
  export type WardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Ward to fetch.
     */
    where?: WardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wards to fetch.
     */
    orderBy?: WardOrderByWithRelationInput | WardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wards.
     */
    cursor?: WardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wards.
     */
    distinct?: WardScalarFieldEnum | WardScalarFieldEnum[]
  }

  /**
   * Ward findMany
   */
  export type WardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter, which Wards to fetch.
     */
    where?: WardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wards to fetch.
     */
    orderBy?: WardOrderByWithRelationInput | WardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wards.
     */
    cursor?: WardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wards.
     */
    skip?: number
    distinct?: WardScalarFieldEnum | WardScalarFieldEnum[]
  }

  /**
   * Ward create
   */
  export type WardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * The data needed to create a Ward.
     */
    data: XOR<WardCreateInput, WardUncheckedCreateInput>
  }

  /**
   * Ward createMany
   */
  export type WardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wards.
     */
    data: WardCreateManyInput | WardCreateManyInput[]
  }

  /**
   * Ward update
   */
  export type WardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * The data needed to update a Ward.
     */
    data: XOR<WardUpdateInput, WardUncheckedUpdateInput>
    /**
     * Choose, which Ward to update.
     */
    where: WardWhereUniqueInput
  }

  /**
   * Ward updateMany
   */
  export type WardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wards.
     */
    data: XOR<WardUpdateManyMutationInput, WardUncheckedUpdateManyInput>
    /**
     * Filter which Wards to update
     */
    where?: WardWhereInput
    /**
     * Limit how many Wards to update.
     */
    limit?: number
  }

  /**
   * Ward upsert
   */
  export type WardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * The filter to search for the Ward to update in case it exists.
     */
    where: WardWhereUniqueInput
    /**
     * In case the Ward found by the `where` argument doesn't exist, create a new Ward with this data.
     */
    create: XOR<WardCreateInput, WardUncheckedCreateInput>
    /**
     * In case the Ward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WardUpdateInput, WardUncheckedUpdateInput>
  }

  /**
   * Ward delete
   */
  export type WardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
    /**
     * Filter which Ward to delete.
     */
    where: WardWhereUniqueInput
  }

  /**
   * Ward deleteMany
   */
  export type WardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wards to delete
     */
    where?: WardWhereInput
    /**
     * Limit how many Wards to delete.
     */
    limit?: number
  }

  /**
   * Ward.rooms
   */
  export type Ward$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Ward without action
   */
  export type WardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ward
     */
    select?: WardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ward
     */
    omit?: WardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WardInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    room_id: number | null
    ward_id: number | null
    floor_number: number | null
    total_beds_in_room: number | null
  }

  export type RoomSumAggregateOutputType = {
    room_id: number | null
    ward_id: number | null
    floor_number: number | null
    total_beds_in_room: number | null
  }

  export type RoomMinAggregateOutputType = {
    room_id: number | null
    ward_id: number | null
    room_number: string | null
    floor_number: number | null
    total_beds_in_room: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    room_id: number | null
    ward_id: number | null
    room_number: string | null
    floor_number: number | null
    total_beds_in_room: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoomCountAggregateOutputType = {
    room_id: number
    ward_id: number
    room_number: number
    floor_number: number
    total_beds_in_room: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    room_id?: true
    ward_id?: true
    floor_number?: true
    total_beds_in_room?: true
  }

  export type RoomSumAggregateInputType = {
    room_id?: true
    ward_id?: true
    floor_number?: true
    total_beds_in_room?: true
  }

  export type RoomMinAggregateInputType = {
    room_id?: true
    ward_id?: true
    room_number?: true
    floor_number?: true
    total_beds_in_room?: true
    created_at?: true
    updated_at?: true
  }

  export type RoomMaxAggregateInputType = {
    room_id?: true
    ward_id?: true
    room_number?: true
    floor_number?: true
    total_beds_in_room?: true
    created_at?: true
    updated_at?: true
  }

  export type RoomCountAggregateInputType = {
    room_id?: true
    ward_id?: true
    room_number?: true
    floor_number?: true
    total_beds_in_room?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    room_id: number
    ward_id: number
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at: Date
    updated_at: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    ward_id?: boolean
    room_number?: boolean
    floor_number?: boolean
    total_beds_in_room?: boolean
    created_at?: boolean
    updated_at?: boolean
    ward?: boolean | WardDefaultArgs<ExtArgs>
    beds?: boolean | Room$bedsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    room_id?: boolean
    ward_id?: boolean
    room_number?: boolean
    floor_number?: boolean
    total_beds_in_room?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"room_id" | "ward_id" | "room_number" | "floor_number" | "total_beds_in_room" | "created_at" | "updated_at", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ward?: boolean | WardDefaultArgs<ExtArgs>
    beds?: boolean | Room$bedsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      ward: Prisma.$WardPayload<ExtArgs>
      beds: Prisma.$BedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      room_id: number
      ward_id: number
      room_number: string
      floor_number: number
      total_beds_in_room: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `room_id`
     * const roomWithRoom_idOnly = await prisma.room.findMany({ select: { room_id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ward<T extends WardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WardDefaultArgs<ExtArgs>>): Prisma__WardClient<$Result.GetResult<Prisma.$WardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    beds<T extends Room$bedsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly room_id: FieldRef<"Room", 'Int'>
    readonly ward_id: FieldRef<"Room", 'Int'>
    readonly room_number: FieldRef<"Room", 'String'>
    readonly floor_number: FieldRef<"Room", 'Int'>
    readonly total_beds_in_room: FieldRef<"Room", 'Int'>
    readonly created_at: FieldRef<"Room", 'DateTime'>
    readonly updated_at: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.beds
   */
  export type Room$bedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    where?: BedWhereInput
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    cursor?: BedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Bed
   */

  export type AggregateBed = {
    _count: BedCountAggregateOutputType | null
    _avg: BedAvgAggregateOutputType | null
    _sum: BedSumAggregateOutputType | null
    _min: BedMinAggregateOutputType | null
    _max: BedMaxAggregateOutputType | null
  }

  export type BedAvgAggregateOutputType = {
    bed_id: number | null
    room_id: number | null
  }

  export type BedSumAggregateOutputType = {
    bed_id: number | null
    room_id: number | null
  }

  export type BedMinAggregateOutputType = {
    bed_id: number | null
    room_id: number | null
    bed_number: string | null
    occupied_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BedMaxAggregateOutputType = {
    bed_id: number | null
    room_id: number | null
    bed_number: string | null
    occupied_status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BedCountAggregateOutputType = {
    bed_id: number
    room_id: number
    bed_number: number
    occupied_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BedAvgAggregateInputType = {
    bed_id?: true
    room_id?: true
  }

  export type BedSumAggregateInputType = {
    bed_id?: true
    room_id?: true
  }

  export type BedMinAggregateInputType = {
    bed_id?: true
    room_id?: true
    bed_number?: true
    occupied_status?: true
    created_at?: true
    updated_at?: true
  }

  export type BedMaxAggregateInputType = {
    bed_id?: true
    room_id?: true
    bed_number?: true
    occupied_status?: true
    created_at?: true
    updated_at?: true
  }

  export type BedCountAggregateInputType = {
    bed_id?: true
    room_id?: true
    bed_number?: true
    occupied_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bed to aggregate.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beds
    **/
    _count?: true | BedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BedMaxAggregateInputType
  }

  export type GetBedAggregateType<T extends BedAggregateArgs> = {
        [P in keyof T & keyof AggregateBed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBed[P]>
      : GetScalarType<T[P], AggregateBed[P]>
  }




  export type BedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BedWhereInput
    orderBy?: BedOrderByWithAggregationInput | BedOrderByWithAggregationInput[]
    by: BedScalarFieldEnum[] | BedScalarFieldEnum
    having?: BedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BedCountAggregateInputType | true
    _avg?: BedAvgAggregateInputType
    _sum?: BedSumAggregateInputType
    _min?: BedMinAggregateInputType
    _max?: BedMaxAggregateInputType
  }

  export type BedGroupByOutputType = {
    bed_id: number
    room_id: number
    bed_number: string
    occupied_status: string
    created_at: Date
    updated_at: Date
    _count: BedCountAggregateOutputType | null
    _avg: BedAvgAggregateOutputType | null
    _sum: BedSumAggregateOutputType | null
    _min: BedMinAggregateOutputType | null
    _max: BedMaxAggregateOutputType | null
  }

  type GetBedGroupByPayload<T extends BedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BedGroupByOutputType[P]>
            : GetScalarType<T[P], BedGroupByOutputType[P]>
        }
      >
    >


  export type BedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bed_id?: boolean
    room_id?: boolean
    bed_number?: boolean
    occupied_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    Admissions?: boolean | Bed$AdmissionsArgs<ExtArgs>
    _count?: boolean | BedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bed"]>



  export type BedSelectScalar = {
    bed_id?: boolean
    room_id?: boolean
    bed_number?: boolean
    occupied_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bed_id" | "room_id" | "bed_number" | "occupied_status" | "created_at" | "updated_at", ExtArgs["result"]["bed"]>
  export type BedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    Admissions?: boolean | Bed$AdmissionsArgs<ExtArgs>
    _count?: boolean | BedCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bed"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      Admissions: Prisma.$AdmissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bed_id: number
      room_id: number
      bed_number: string
      occupied_status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bed"]>
    composites: {}
  }

  type BedGetPayload<S extends boolean | null | undefined | BedDefaultArgs> = $Result.GetResult<Prisma.$BedPayload, S>

  type BedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BedCountAggregateInputType | true
    }

  export interface BedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bed'], meta: { name: 'Bed' } }
    /**
     * Find zero or one Bed that matches the filter.
     * @param {BedFindUniqueArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BedFindUniqueArgs>(args: SelectSubset<T, BedFindUniqueArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BedFindUniqueOrThrowArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BedFindUniqueOrThrowArgs>(args: SelectSubset<T, BedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindFirstArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BedFindFirstArgs>(args?: SelectSubset<T, BedFindFirstArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindFirstOrThrowArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BedFindFirstOrThrowArgs>(args?: SelectSubset<T, BedFindFirstOrThrowArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beds
     * const beds = await prisma.bed.findMany()
     * 
     * // Get first 10 Beds
     * const beds = await prisma.bed.findMany({ take: 10 })
     * 
     * // Only select the `bed_id`
     * const bedWithBed_idOnly = await prisma.bed.findMany({ select: { bed_id: true } })
     * 
     */
    findMany<T extends BedFindManyArgs>(args?: SelectSubset<T, BedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bed.
     * @param {BedCreateArgs} args - Arguments to create a Bed.
     * @example
     * // Create one Bed
     * const Bed = await prisma.bed.create({
     *   data: {
     *     // ... data to create a Bed
     *   }
     * })
     * 
     */
    create<T extends BedCreateArgs>(args: SelectSubset<T, BedCreateArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beds.
     * @param {BedCreateManyArgs} args - Arguments to create many Beds.
     * @example
     * // Create many Beds
     * const bed = await prisma.bed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BedCreateManyArgs>(args?: SelectSubset<T, BedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bed.
     * @param {BedDeleteArgs} args - Arguments to delete one Bed.
     * @example
     * // Delete one Bed
     * const Bed = await prisma.bed.delete({
     *   where: {
     *     // ... filter to delete one Bed
     *   }
     * })
     * 
     */
    delete<T extends BedDeleteArgs>(args: SelectSubset<T, BedDeleteArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bed.
     * @param {BedUpdateArgs} args - Arguments to update one Bed.
     * @example
     * // Update one Bed
     * const bed = await prisma.bed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BedUpdateArgs>(args: SelectSubset<T, BedUpdateArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beds.
     * @param {BedDeleteManyArgs} args - Arguments to filter Beds to delete.
     * @example
     * // Delete a few Beds
     * const { count } = await prisma.bed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BedDeleteManyArgs>(args?: SelectSubset<T, BedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beds
     * const bed = await prisma.bed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BedUpdateManyArgs>(args: SelectSubset<T, BedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bed.
     * @param {BedUpsertArgs} args - Arguments to update or create a Bed.
     * @example
     * // Update or create a Bed
     * const bed = await prisma.bed.upsert({
     *   create: {
     *     // ... data to create a Bed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bed we want to update
     *   }
     * })
     */
    upsert<T extends BedUpsertArgs>(args: SelectSubset<T, BedUpsertArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedCountArgs} args - Arguments to filter Beds to count.
     * @example
     * // Count the number of Beds
     * const count = await prisma.bed.count({
     *   where: {
     *     // ... the filter for the Beds we want to count
     *   }
     * })
    **/
    count<T extends BedCountArgs>(
      args?: Subset<T, BedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BedAggregateArgs>(args: Subset<T, BedAggregateArgs>): Prisma.PrismaPromise<GetBedAggregateType<T>>

    /**
     * Group by Bed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedGroupByArgs} args - Group by arguments.
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
      T extends BedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BedGroupByArgs['orderBy'] }
        : { orderBy?: BedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bed model
   */
  readonly fields: BedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Admissions<T extends Bed$AdmissionsArgs<ExtArgs> = {}>(args?: Subset<T, Bed$AdmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bed model
   */ 
  interface BedFieldRefs {
    readonly bed_id: FieldRef<"Bed", 'Int'>
    readonly room_id: FieldRef<"Bed", 'Int'>
    readonly bed_number: FieldRef<"Bed", 'String'>
    readonly occupied_status: FieldRef<"Bed", 'String'>
    readonly created_at: FieldRef<"Bed", 'DateTime'>
    readonly updated_at: FieldRef<"Bed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bed findUnique
   */
  export type BedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed findUniqueOrThrow
   */
  export type BedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed findFirst
   */
  export type BedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beds.
     */
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed findFirstOrThrow
   */
  export type BedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beds.
     */
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed findMany
   */
  export type BedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Beds to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed create
   */
  export type BedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The data needed to create a Bed.
     */
    data: XOR<BedCreateInput, BedUncheckedCreateInput>
  }

  /**
   * Bed createMany
   */
  export type BedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beds.
     */
    data: BedCreateManyInput | BedCreateManyInput[]
  }

  /**
   * Bed update
   */
  export type BedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The data needed to update a Bed.
     */
    data: XOR<BedUpdateInput, BedUncheckedUpdateInput>
    /**
     * Choose, which Bed to update.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed updateMany
   */
  export type BedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beds.
     */
    data: XOR<BedUpdateManyMutationInput, BedUncheckedUpdateManyInput>
    /**
     * Filter which Beds to update
     */
    where?: BedWhereInput
    /**
     * Limit how many Beds to update.
     */
    limit?: number
  }

  /**
   * Bed upsert
   */
  export type BedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The filter to search for the Bed to update in case it exists.
     */
    where: BedWhereUniqueInput
    /**
     * In case the Bed found by the `where` argument doesn't exist, create a new Bed with this data.
     */
    create: XOR<BedCreateInput, BedUncheckedCreateInput>
    /**
     * In case the Bed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BedUpdateInput, BedUncheckedUpdateInput>
  }

  /**
   * Bed delete
   */
  export type BedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter which Bed to delete.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed deleteMany
   */
  export type BedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beds to delete
     */
    where?: BedWhereInput
    /**
     * Limit how many Beds to delete.
     */
    limit?: number
  }

  /**
   * Bed.Admissions
   */
  export type Bed$AdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    where?: AdmissionsWhereInput
    orderBy?: AdmissionsOrderByWithRelationInput | AdmissionsOrderByWithRelationInput[]
    cursor?: AdmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionsScalarFieldEnum | AdmissionsScalarFieldEnum[]
  }

  /**
   * Bed without action
   */
  export type BedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
  }


  /**
   * Model Admissions
   */

  export type AggregateAdmissions = {
    _count: AdmissionsCountAggregateOutputType | null
    _avg: AdmissionsAvgAggregateOutputType | null
    _sum: AdmissionsSumAggregateOutputType | null
    _min: AdmissionsMinAggregateOutputType | null
    _max: AdmissionsMaxAggregateOutputType | null
  }

  export type AdmissionsAvgAggregateOutputType = {
    admission_id: number | null
    admission_no: number | null
    bed_id: number | null
    diagnosis_id: number | null
    dischargeReasonId: number | null
  }

  export type AdmissionsSumAggregateOutputType = {
    admission_id: number | null
    admission_no: number | null
    bed_id: number | null
    diagnosis_id: number | null
    dischargeReasonId: number | null
  }

  export type AdmissionsMinAggregateOutputType = {
    admission_id: number | null
    admission_no: number | null
    PatientID: string | null
    bed_id: number | null
    diagnosis_id: number | null
    admission_date: Date | null
    discharge_date: Date | null
    dischargeReasonId: number | null
    treatment_plan: string | null
    remarks: string | null
  }

  export type AdmissionsMaxAggregateOutputType = {
    admission_id: number | null
    admission_no: number | null
    PatientID: string | null
    bed_id: number | null
    diagnosis_id: number | null
    admission_date: Date | null
    discharge_date: Date | null
    dischargeReasonId: number | null
    treatment_plan: string | null
    remarks: string | null
  }

  export type AdmissionsCountAggregateOutputType = {
    admission_id: number
    admission_no: number
    PatientID: number
    bed_id: number
    diagnosis_id: number
    admission_date: number
    discharge_date: number
    dischargeReasonId: number
    treatment_plan: number
    remarks: number
    _all: number
  }


  export type AdmissionsAvgAggregateInputType = {
    admission_id?: true
    admission_no?: true
    bed_id?: true
    diagnosis_id?: true
    dischargeReasonId?: true
  }

  export type AdmissionsSumAggregateInputType = {
    admission_id?: true
    admission_no?: true
    bed_id?: true
    diagnosis_id?: true
    dischargeReasonId?: true
  }

  export type AdmissionsMinAggregateInputType = {
    admission_id?: true
    admission_no?: true
    PatientID?: true
    bed_id?: true
    diagnosis_id?: true
    admission_date?: true
    discharge_date?: true
    dischargeReasonId?: true
    treatment_plan?: true
    remarks?: true
  }

  export type AdmissionsMaxAggregateInputType = {
    admission_id?: true
    admission_no?: true
    PatientID?: true
    bed_id?: true
    diagnosis_id?: true
    admission_date?: true
    discharge_date?: true
    dischargeReasonId?: true
    treatment_plan?: true
    remarks?: true
  }

  export type AdmissionsCountAggregateInputType = {
    admission_id?: true
    admission_no?: true
    PatientID?: true
    bed_id?: true
    diagnosis_id?: true
    admission_date?: true
    discharge_date?: true
    dischargeReasonId?: true
    treatment_plan?: true
    remarks?: true
    _all?: true
  }

  export type AdmissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admissions to aggregate.
     */
    where?: AdmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionsOrderByWithRelationInput | AdmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admissions
    **/
    _count?: true | AdmissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdmissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdmissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionsMaxAggregateInputType
  }

  export type GetAdmissionsAggregateType<T extends AdmissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmissions[P]>
      : GetScalarType<T[P], AggregateAdmissions[P]>
  }




  export type AdmissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionsWhereInput
    orderBy?: AdmissionsOrderByWithAggregationInput | AdmissionsOrderByWithAggregationInput[]
    by: AdmissionsScalarFieldEnum[] | AdmissionsScalarFieldEnum
    having?: AdmissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionsCountAggregateInputType | true
    _avg?: AdmissionsAvgAggregateInputType
    _sum?: AdmissionsSumAggregateInputType
    _min?: AdmissionsMinAggregateInputType
    _max?: AdmissionsMaxAggregateInputType
  }

  export type AdmissionsGroupByOutputType = {
    admission_id: number
    admission_no: number
    PatientID: string
    bed_id: number
    diagnosis_id: number
    admission_date: Date
    discharge_date: Date | null
    dischargeReasonId: number | null
    treatment_plan: string | null
    remarks: string | null
    _count: AdmissionsCountAggregateOutputType | null
    _avg: AdmissionsAvgAggregateOutputType | null
    _sum: AdmissionsSumAggregateOutputType | null
    _min: AdmissionsMinAggregateOutputType | null
    _max: AdmissionsMaxAggregateOutputType | null
  }

  type GetAdmissionsGroupByPayload<T extends AdmissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionsGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionsGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admission_id?: boolean
    admission_no?: boolean
    PatientID?: boolean
    bed_id?: boolean
    diagnosis_id?: boolean
    admission_date?: boolean
    discharge_date?: boolean
    dischargeReasonId?: boolean
    treatment_plan?: boolean
    remarks?: boolean
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    bed?: boolean | BedDefaultArgs<ExtArgs>
    diagnosis?: boolean | DiagnosesDefaultArgs<ExtArgs>
    dischargeReason?: boolean | Admissions$dischargeReasonArgs<ExtArgs>
    MedicalRecords?: boolean | Admissions$MedicalRecordsArgs<ExtArgs>
    _count?: boolean | AdmissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admissions"]>



  export type AdmissionsSelectScalar = {
    admission_id?: boolean
    admission_no?: boolean
    PatientID?: boolean
    bed_id?: boolean
    diagnosis_id?: boolean
    admission_date?: boolean
    discharge_date?: boolean
    dischargeReasonId?: boolean
    treatment_plan?: boolean
    remarks?: boolean
  }

  export type AdmissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admission_id" | "admission_no" | "PatientID" | "bed_id" | "diagnosis_id" | "admission_date" | "discharge_date" | "dischargeReasonId" | "treatment_plan" | "remarks", ExtArgs["result"]["admissions"]>
  export type AdmissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientsDefaultArgs<ExtArgs>
    bed?: boolean | BedDefaultArgs<ExtArgs>
    diagnosis?: boolean | DiagnosesDefaultArgs<ExtArgs>
    dischargeReason?: boolean | Admissions$dischargeReasonArgs<ExtArgs>
    MedicalRecords?: boolean | Admissions$MedicalRecordsArgs<ExtArgs>
    _count?: boolean | AdmissionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdmissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admissions"
    objects: {
      patient: Prisma.$PatientsPayload<ExtArgs>
      bed: Prisma.$BedPayload<ExtArgs>
      diagnosis: Prisma.$DiagnosesPayload<ExtArgs>
      dischargeReason: Prisma.$DischargeReasonPayload<ExtArgs> | null
      MedicalRecords: Prisma.$MedicalRecordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      admission_id: number
      admission_no: number
      PatientID: string
      bed_id: number
      diagnosis_id: number
      admission_date: Date
      discharge_date: Date | null
      dischargeReasonId: number | null
      treatment_plan: string | null
      remarks: string | null
    }, ExtArgs["result"]["admissions"]>
    composites: {}
  }

  type AdmissionsGetPayload<S extends boolean | null | undefined | AdmissionsDefaultArgs> = $Result.GetResult<Prisma.$AdmissionsPayload, S>

  type AdmissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmissionsCountAggregateInputType | true
    }

  export interface AdmissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admissions'], meta: { name: 'Admissions' } }
    /**
     * Find zero or one Admissions that matches the filter.
     * @param {AdmissionsFindUniqueArgs} args - Arguments to find a Admissions
     * @example
     * // Get one Admissions
     * const admissions = await prisma.admissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionsFindUniqueArgs>(args: SelectSubset<T, AdmissionsFindUniqueArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmissionsFindUniqueOrThrowArgs} args - Arguments to find a Admissions
     * @example
     * // Get one Admissions
     * const admissions = await prisma.admissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionsFindFirstArgs} args - Arguments to find a Admissions
     * @example
     * // Get one Admissions
     * const admissions = await prisma.admissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionsFindFirstArgs>(args?: SelectSubset<T, AdmissionsFindFirstArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionsFindFirstOrThrowArgs} args - Arguments to find a Admissions
     * @example
     * // Get one Admissions
     * const admissions = await prisma.admissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admissions
     * const admissions = await prisma.admissions.findMany()
     * 
     * // Get first 10 Admissions
     * const admissions = await prisma.admissions.findMany({ take: 10 })
     * 
     * // Only select the `admission_id`
     * const admissionsWithAdmission_idOnly = await prisma.admissions.findMany({ select: { admission_id: true } })
     * 
     */
    findMany<T extends AdmissionsFindManyArgs>(args?: SelectSubset<T, AdmissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admissions.
     * @param {AdmissionsCreateArgs} args - Arguments to create a Admissions.
     * @example
     * // Create one Admissions
     * const Admissions = await prisma.admissions.create({
     *   data: {
     *     // ... data to create a Admissions
     *   }
     * })
     * 
     */
    create<T extends AdmissionsCreateArgs>(args: SelectSubset<T, AdmissionsCreateArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admissions.
     * @param {AdmissionsCreateManyArgs} args - Arguments to create many Admissions.
     * @example
     * // Create many Admissions
     * const admissions = await prisma.admissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionsCreateManyArgs>(args?: SelectSubset<T, AdmissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admissions.
     * @param {AdmissionsDeleteArgs} args - Arguments to delete one Admissions.
     * @example
     * // Delete one Admissions
     * const Admissions = await prisma.admissions.delete({
     *   where: {
     *     // ... filter to delete one Admissions
     *   }
     * })
     * 
     */
    delete<T extends AdmissionsDeleteArgs>(args: SelectSubset<T, AdmissionsDeleteArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admissions.
     * @param {AdmissionsUpdateArgs} args - Arguments to update one Admissions.
     * @example
     * // Update one Admissions
     * const admissions = await prisma.admissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionsUpdateArgs>(args: SelectSubset<T, AdmissionsUpdateArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admissions.
     * @param {AdmissionsDeleteManyArgs} args - Arguments to filter Admissions to delete.
     * @example
     * // Delete a few Admissions
     * const { count } = await prisma.admissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionsDeleteManyArgs>(args?: SelectSubset<T, AdmissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admissions
     * const admissions = await prisma.admissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionsUpdateManyArgs>(args: SelectSubset<T, AdmissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admissions.
     * @param {AdmissionsUpsertArgs} args - Arguments to update or create a Admissions.
     * @example
     * // Update or create a Admissions
     * const admissions = await prisma.admissions.upsert({
     *   create: {
     *     // ... data to create a Admissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admissions we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionsUpsertArgs>(args: SelectSubset<T, AdmissionsUpsertArgs<ExtArgs>>): Prisma__AdmissionsClient<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionsCountArgs} args - Arguments to filter Admissions to count.
     * @example
     * // Count the number of Admissions
     * const count = await prisma.admissions.count({
     *   where: {
     *     // ... the filter for the Admissions we want to count
     *   }
     * })
    **/
    count<T extends AdmissionsCountArgs>(
      args?: Subset<T, AdmissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdmissionsAggregateArgs>(args: Subset<T, AdmissionsAggregateArgs>): Prisma.PrismaPromise<GetAdmissionsAggregateType<T>>

    /**
     * Group by Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionsGroupByArgs} args - Group by arguments.
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
      T extends AdmissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionsGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdmissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admissions model
   */
  readonly fields: AdmissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientsDefaultArgs<ExtArgs>>): Prisma__PatientsClient<$Result.GetResult<Prisma.$PatientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bed<T extends BedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BedDefaultArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    diagnosis<T extends DiagnosesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosesDefaultArgs<ExtArgs>>): Prisma__DiagnosesClient<$Result.GetResult<Prisma.$DiagnosesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dischargeReason<T extends Admissions$dischargeReasonArgs<ExtArgs> = {}>(args?: Subset<T, Admissions$dischargeReasonArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    MedicalRecords<T extends Admissions$MedicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Admissions$MedicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admissions model
   */ 
  interface AdmissionsFieldRefs {
    readonly admission_id: FieldRef<"Admissions", 'Int'>
    readonly admission_no: FieldRef<"Admissions", 'Int'>
    readonly PatientID: FieldRef<"Admissions", 'String'>
    readonly bed_id: FieldRef<"Admissions", 'Int'>
    readonly diagnosis_id: FieldRef<"Admissions", 'Int'>
    readonly admission_date: FieldRef<"Admissions", 'DateTime'>
    readonly discharge_date: FieldRef<"Admissions", 'DateTime'>
    readonly dischargeReasonId: FieldRef<"Admissions", 'Int'>
    readonly treatment_plan: FieldRef<"Admissions", 'String'>
    readonly remarks: FieldRef<"Admissions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admissions findUnique
   */
  export type AdmissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where: AdmissionsWhereUniqueInput
  }

  /**
   * Admissions findUniqueOrThrow
   */
  export type AdmissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where: AdmissionsWhereUniqueInput
  }

  /**
   * Admissions findFirst
   */
  export type AdmissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where?: AdmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionsOrderByWithRelationInput | AdmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionsScalarFieldEnum | AdmissionsScalarFieldEnum[]
  }

  /**
   * Admissions findFirstOrThrow
   */
  export type AdmissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where?: AdmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionsOrderByWithRelationInput | AdmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionsScalarFieldEnum | AdmissionsScalarFieldEnum[]
  }

  /**
   * Admissions findMany
   */
  export type AdmissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where?: AdmissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionsOrderByWithRelationInput | AdmissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admissions.
     */
    cursor?: AdmissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    distinct?: AdmissionsScalarFieldEnum | AdmissionsScalarFieldEnum[]
  }

  /**
   * Admissions create
   */
  export type AdmissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Admissions.
     */
    data: XOR<AdmissionsCreateInput, AdmissionsUncheckedCreateInput>
  }

  /**
   * Admissions createMany
   */
  export type AdmissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admissions.
     */
    data: AdmissionsCreateManyInput | AdmissionsCreateManyInput[]
  }

  /**
   * Admissions update
   */
  export type AdmissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Admissions.
     */
    data: XOR<AdmissionsUpdateInput, AdmissionsUncheckedUpdateInput>
    /**
     * Choose, which Admissions to update.
     */
    where: AdmissionsWhereUniqueInput
  }

  /**
   * Admissions updateMany
   */
  export type AdmissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admissions.
     */
    data: XOR<AdmissionsUpdateManyMutationInput, AdmissionsUncheckedUpdateManyInput>
    /**
     * Filter which Admissions to update
     */
    where?: AdmissionsWhereInput
    /**
     * Limit how many Admissions to update.
     */
    limit?: number
  }

  /**
   * Admissions upsert
   */
  export type AdmissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Admissions to update in case it exists.
     */
    where: AdmissionsWhereUniqueInput
    /**
     * In case the Admissions found by the `where` argument doesn't exist, create a new Admissions with this data.
     */
    create: XOR<AdmissionsCreateInput, AdmissionsUncheckedCreateInput>
    /**
     * In case the Admissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionsUpdateInput, AdmissionsUncheckedUpdateInput>
  }

  /**
   * Admissions delete
   */
  export type AdmissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    /**
     * Filter which Admissions to delete.
     */
    where: AdmissionsWhereUniqueInput
  }

  /**
   * Admissions deleteMany
   */
  export type AdmissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admissions to delete
     */
    where?: AdmissionsWhereInput
    /**
     * Limit how many Admissions to delete.
     */
    limit?: number
  }

  /**
   * Admissions.dischargeReason
   */
  export type Admissions$dischargeReasonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    where?: DischargeReasonWhereInput
  }

  /**
   * Admissions.MedicalRecords
   */
  export type Admissions$MedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecords
     */
    select?: MedicalRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecords
     */
    omit?: MedicalRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordsInclude<ExtArgs> | null
    where?: MedicalRecordsWhereInput
    orderBy?: MedicalRecordsOrderByWithRelationInput | MedicalRecordsOrderByWithRelationInput[]
    cursor?: MedicalRecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordsScalarFieldEnum | MedicalRecordsScalarFieldEnum[]
  }

  /**
   * Admissions without action
   */
  export type AdmissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
  }


  /**
   * Model DischargeReason
   */

  export type AggregateDischargeReason = {
    _count: DischargeReasonCountAggregateOutputType | null
    _avg: DischargeReasonAvgAggregateOutputType | null
    _sum: DischargeReasonSumAggregateOutputType | null
    _min: DischargeReasonMinAggregateOutputType | null
    _max: DischargeReasonMaxAggregateOutputType | null
  }

  export type DischargeReasonAvgAggregateOutputType = {
    id: number | null
  }

  export type DischargeReasonSumAggregateOutputType = {
    id: number | null
  }

  export type DischargeReasonMinAggregateOutputType = {
    id: number | null
    reason: string | null
  }

  export type DischargeReasonMaxAggregateOutputType = {
    id: number | null
    reason: string | null
  }

  export type DischargeReasonCountAggregateOutputType = {
    id: number
    reason: number
    _all: number
  }


  export type DischargeReasonAvgAggregateInputType = {
    id?: true
  }

  export type DischargeReasonSumAggregateInputType = {
    id?: true
  }

  export type DischargeReasonMinAggregateInputType = {
    id?: true
    reason?: true
  }

  export type DischargeReasonMaxAggregateInputType = {
    id?: true
    reason?: true
  }

  export type DischargeReasonCountAggregateInputType = {
    id?: true
    reason?: true
    _all?: true
  }

  export type DischargeReasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DischargeReason to aggregate.
     */
    where?: DischargeReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DischargeReasons to fetch.
     */
    orderBy?: DischargeReasonOrderByWithRelationInput | DischargeReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DischargeReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DischargeReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DischargeReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DischargeReasons
    **/
    _count?: true | DischargeReasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DischargeReasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DischargeReasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DischargeReasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DischargeReasonMaxAggregateInputType
  }

  export type GetDischargeReasonAggregateType<T extends DischargeReasonAggregateArgs> = {
        [P in keyof T & keyof AggregateDischargeReason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDischargeReason[P]>
      : GetScalarType<T[P], AggregateDischargeReason[P]>
  }




  export type DischargeReasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DischargeReasonWhereInput
    orderBy?: DischargeReasonOrderByWithAggregationInput | DischargeReasonOrderByWithAggregationInput[]
    by: DischargeReasonScalarFieldEnum[] | DischargeReasonScalarFieldEnum
    having?: DischargeReasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DischargeReasonCountAggregateInputType | true
    _avg?: DischargeReasonAvgAggregateInputType
    _sum?: DischargeReasonSumAggregateInputType
    _min?: DischargeReasonMinAggregateInputType
    _max?: DischargeReasonMaxAggregateInputType
  }

  export type DischargeReasonGroupByOutputType = {
    id: number
    reason: string
    _count: DischargeReasonCountAggregateOutputType | null
    _avg: DischargeReasonAvgAggregateOutputType | null
    _sum: DischargeReasonSumAggregateOutputType | null
    _min: DischargeReasonMinAggregateOutputType | null
    _max: DischargeReasonMaxAggregateOutputType | null
  }

  type GetDischargeReasonGroupByPayload<T extends DischargeReasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DischargeReasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DischargeReasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DischargeReasonGroupByOutputType[P]>
            : GetScalarType<T[P], DischargeReasonGroupByOutputType[P]>
        }
      >
    >


  export type DischargeReasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    admissions?: boolean | DischargeReason$admissionsArgs<ExtArgs>
    _count?: boolean | DischargeReasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dischargeReason"]>



  export type DischargeReasonSelectScalar = {
    id?: boolean
    reason?: boolean
  }

  export type DischargeReasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reason", ExtArgs["result"]["dischargeReason"]>
  export type DischargeReasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissions?: boolean | DischargeReason$admissionsArgs<ExtArgs>
    _count?: boolean | DischargeReasonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DischargeReasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DischargeReason"
    objects: {
      admissions: Prisma.$AdmissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reason: string
    }, ExtArgs["result"]["dischargeReason"]>
    composites: {}
  }

  type DischargeReasonGetPayload<S extends boolean | null | undefined | DischargeReasonDefaultArgs> = $Result.GetResult<Prisma.$DischargeReasonPayload, S>

  type DischargeReasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DischargeReasonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DischargeReasonCountAggregateInputType | true
    }

  export interface DischargeReasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DischargeReason'], meta: { name: 'DischargeReason' } }
    /**
     * Find zero or one DischargeReason that matches the filter.
     * @param {DischargeReasonFindUniqueArgs} args - Arguments to find a DischargeReason
     * @example
     * // Get one DischargeReason
     * const dischargeReason = await prisma.dischargeReason.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DischargeReasonFindUniqueArgs>(args: SelectSubset<T, DischargeReasonFindUniqueArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DischargeReason that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DischargeReasonFindUniqueOrThrowArgs} args - Arguments to find a DischargeReason
     * @example
     * // Get one DischargeReason
     * const dischargeReason = await prisma.dischargeReason.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DischargeReasonFindUniqueOrThrowArgs>(args: SelectSubset<T, DischargeReasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DischargeReason that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DischargeReasonFindFirstArgs} args - Arguments to find a DischargeReason
     * @example
     * // Get one DischargeReason
     * const dischargeReason = await prisma.dischargeReason.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DischargeReasonFindFirstArgs>(args?: SelectSubset<T, DischargeReasonFindFirstArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DischargeReason that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DischargeReasonFindFirstOrThrowArgs} args - Arguments to find a DischargeReason
     * @example
     * // Get one DischargeReason
     * const dischargeReason = await prisma.dischargeReason.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DischargeReasonFindFirstOrThrowArgs>(args?: SelectSubset<T, DischargeReasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DischargeReasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DischargeReasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DischargeReasons
     * const dischargeReasons = await prisma.dischargeReason.findMany()
     * 
     * // Get first 10 DischargeReasons
     * const dischargeReasons = await prisma.dischargeReason.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dischargeReasonWithIdOnly = await prisma.dischargeReason.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DischargeReasonFindManyArgs>(args?: SelectSubset<T, DischargeReasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DischargeReason.
     * @param {DischargeReasonCreateArgs} args - Arguments to create a DischargeReason.
     * @example
     * // Create one DischargeReason
     * const DischargeReason = await prisma.dischargeReason.create({
     *   data: {
     *     // ... data to create a DischargeReason
     *   }
     * })
     * 
     */
    create<T extends DischargeReasonCreateArgs>(args: SelectSubset<T, DischargeReasonCreateArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DischargeReasons.
     * @param {DischargeReasonCreateManyArgs} args - Arguments to create many DischargeReasons.
     * @example
     * // Create many DischargeReasons
     * const dischargeReason = await prisma.dischargeReason.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DischargeReasonCreateManyArgs>(args?: SelectSubset<T, DischargeReasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DischargeReason.
     * @param {DischargeReasonDeleteArgs} args - Arguments to delete one DischargeReason.
     * @example
     * // Delete one DischargeReason
     * const DischargeReason = await prisma.dischargeReason.delete({
     *   where: {
     *     // ... filter to delete one DischargeReason
     *   }
     * })
     * 
     */
    delete<T extends DischargeReasonDeleteArgs>(args: SelectSubset<T, DischargeReasonDeleteArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DischargeReason.
     * @param {DischargeReasonUpdateArgs} args - Arguments to update one DischargeReason.
     * @example
     * // Update one DischargeReason
     * const dischargeReason = await prisma.dischargeReason.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DischargeReasonUpdateArgs>(args: SelectSubset<T, DischargeReasonUpdateArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DischargeReasons.
     * @param {DischargeReasonDeleteManyArgs} args - Arguments to filter DischargeReasons to delete.
     * @example
     * // Delete a few DischargeReasons
     * const { count } = await prisma.dischargeReason.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DischargeReasonDeleteManyArgs>(args?: SelectSubset<T, DischargeReasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DischargeReasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DischargeReasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DischargeReasons
     * const dischargeReason = await prisma.dischargeReason.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DischargeReasonUpdateManyArgs>(args: SelectSubset<T, DischargeReasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DischargeReason.
     * @param {DischargeReasonUpsertArgs} args - Arguments to update or create a DischargeReason.
     * @example
     * // Update or create a DischargeReason
     * const dischargeReason = await prisma.dischargeReason.upsert({
     *   create: {
     *     // ... data to create a DischargeReason
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DischargeReason we want to update
     *   }
     * })
     */
    upsert<T extends DischargeReasonUpsertArgs>(args: SelectSubset<T, DischargeReasonUpsertArgs<ExtArgs>>): Prisma__DischargeReasonClient<$Result.GetResult<Prisma.$DischargeReasonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DischargeReasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DischargeReasonCountArgs} args - Arguments to filter DischargeReasons to count.
     * @example
     * // Count the number of DischargeReasons
     * const count = await prisma.dischargeReason.count({
     *   where: {
     *     // ... the filter for the DischargeReasons we want to count
     *   }
     * })
    **/
    count<T extends DischargeReasonCountArgs>(
      args?: Subset<T, DischargeReasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DischargeReasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DischargeReason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DischargeReasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DischargeReasonAggregateArgs>(args: Subset<T, DischargeReasonAggregateArgs>): Prisma.PrismaPromise<GetDischargeReasonAggregateType<T>>

    /**
     * Group by DischargeReason.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DischargeReasonGroupByArgs} args - Group by arguments.
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
      T extends DischargeReasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DischargeReasonGroupByArgs['orderBy'] }
        : { orderBy?: DischargeReasonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DischargeReasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDischargeReasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DischargeReason model
   */
  readonly fields: DischargeReasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DischargeReason.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DischargeReasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admissions<T extends DischargeReason$admissionsArgs<ExtArgs> = {}>(args?: Subset<T, DischargeReason$admissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DischargeReason model
   */ 
  interface DischargeReasonFieldRefs {
    readonly id: FieldRef<"DischargeReason", 'Int'>
    readonly reason: FieldRef<"DischargeReason", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DischargeReason findUnique
   */
  export type DischargeReasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * Filter, which DischargeReason to fetch.
     */
    where: DischargeReasonWhereUniqueInput
  }

  /**
   * DischargeReason findUniqueOrThrow
   */
  export type DischargeReasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * Filter, which DischargeReason to fetch.
     */
    where: DischargeReasonWhereUniqueInput
  }

  /**
   * DischargeReason findFirst
   */
  export type DischargeReasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * Filter, which DischargeReason to fetch.
     */
    where?: DischargeReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DischargeReasons to fetch.
     */
    orderBy?: DischargeReasonOrderByWithRelationInput | DischargeReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DischargeReasons.
     */
    cursor?: DischargeReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DischargeReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DischargeReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DischargeReasons.
     */
    distinct?: DischargeReasonScalarFieldEnum | DischargeReasonScalarFieldEnum[]
  }

  /**
   * DischargeReason findFirstOrThrow
   */
  export type DischargeReasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * Filter, which DischargeReason to fetch.
     */
    where?: DischargeReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DischargeReasons to fetch.
     */
    orderBy?: DischargeReasonOrderByWithRelationInput | DischargeReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DischargeReasons.
     */
    cursor?: DischargeReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DischargeReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DischargeReasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DischargeReasons.
     */
    distinct?: DischargeReasonScalarFieldEnum | DischargeReasonScalarFieldEnum[]
  }

  /**
   * DischargeReason findMany
   */
  export type DischargeReasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * Filter, which DischargeReasons to fetch.
     */
    where?: DischargeReasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DischargeReasons to fetch.
     */
    orderBy?: DischargeReasonOrderByWithRelationInput | DischargeReasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DischargeReasons.
     */
    cursor?: DischargeReasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DischargeReasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DischargeReasons.
     */
    skip?: number
    distinct?: DischargeReasonScalarFieldEnum | DischargeReasonScalarFieldEnum[]
  }

  /**
   * DischargeReason create
   */
  export type DischargeReasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * The data needed to create a DischargeReason.
     */
    data: XOR<DischargeReasonCreateInput, DischargeReasonUncheckedCreateInput>
  }

  /**
   * DischargeReason createMany
   */
  export type DischargeReasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DischargeReasons.
     */
    data: DischargeReasonCreateManyInput | DischargeReasonCreateManyInput[]
  }

  /**
   * DischargeReason update
   */
  export type DischargeReasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * The data needed to update a DischargeReason.
     */
    data: XOR<DischargeReasonUpdateInput, DischargeReasonUncheckedUpdateInput>
    /**
     * Choose, which DischargeReason to update.
     */
    where: DischargeReasonWhereUniqueInput
  }

  /**
   * DischargeReason updateMany
   */
  export type DischargeReasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DischargeReasons.
     */
    data: XOR<DischargeReasonUpdateManyMutationInput, DischargeReasonUncheckedUpdateManyInput>
    /**
     * Filter which DischargeReasons to update
     */
    where?: DischargeReasonWhereInput
    /**
     * Limit how many DischargeReasons to update.
     */
    limit?: number
  }

  /**
   * DischargeReason upsert
   */
  export type DischargeReasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * The filter to search for the DischargeReason to update in case it exists.
     */
    where: DischargeReasonWhereUniqueInput
    /**
     * In case the DischargeReason found by the `where` argument doesn't exist, create a new DischargeReason with this data.
     */
    create: XOR<DischargeReasonCreateInput, DischargeReasonUncheckedCreateInput>
    /**
     * In case the DischargeReason was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DischargeReasonUpdateInput, DischargeReasonUncheckedUpdateInput>
  }

  /**
   * DischargeReason delete
   */
  export type DischargeReasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
    /**
     * Filter which DischargeReason to delete.
     */
    where: DischargeReasonWhereUniqueInput
  }

  /**
   * DischargeReason deleteMany
   */
  export type DischargeReasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DischargeReasons to delete
     */
    where?: DischargeReasonWhereInput
    /**
     * Limit how many DischargeReasons to delete.
     */
    limit?: number
  }

  /**
   * DischargeReason.admissions
   */
  export type DischargeReason$admissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admissions
     */
    select?: AdmissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admissions
     */
    omit?: AdmissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionsInclude<ExtArgs> | null
    where?: AdmissionsWhereInput
    orderBy?: AdmissionsOrderByWithRelationInput | AdmissionsOrderByWithRelationInput[]
    cursor?: AdmissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionsScalarFieldEnum | AdmissionsScalarFieldEnum[]
  }

  /**
   * DischargeReason without action
   */
  export type DischargeReasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DischargeReason
     */
    select?: DischargeReasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DischargeReason
     */
    omit?: DischargeReasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DischargeReasonInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppointmentsScalarFieldEnum: {
    AppointmentID: 'AppointmentID',
    PatientID: 'PatientID',
    DoctorID: 'DoctorID',
    AppointmentDate: 'AppointmentDate',
    Status: 'Status',
    Notes: 'Notes',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type AppointmentsScalarFieldEnum = (typeof AppointmentsScalarFieldEnum)[keyof typeof AppointmentsScalarFieldEnum]


  export const BillsScalarFieldEnum: {
    BillID: 'BillID',
    PatientID: 'PatientID',
    TotalAmount: 'TotalAmount',
    PaymentStatus: 'PaymentStatus',
    CreatedAt: 'CreatedAt'
  };

  export type BillsScalarFieldEnum = (typeof BillsScalarFieldEnum)[keyof typeof BillsScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    DepartmentID: 'DepartmentID',
    DepartmentName: 'DepartmentName'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const DiagnosesScalarFieldEnum: {
    DiagnosisID: 'DiagnosisID',
    DepartmentID: 'DepartmentID',
    DiagnosisName: 'DiagnosisName',
    CreatedAt: 'CreatedAt'
  };

  export type DiagnosesScalarFieldEnum = (typeof DiagnosesScalarFieldEnum)[keyof typeof DiagnosesScalarFieldEnum]


  export const DoctorsScalarFieldEnum: {
    DoctorID: 'DoctorID',
    FirstName: 'FirstName',
    LastName: 'LastName',
    DepartmentID: 'DepartmentID',
    ContactNumber: 'ContactNumber',
    Email: 'Email',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type DoctorsScalarFieldEnum = (typeof DoctorsScalarFieldEnum)[keyof typeof DoctorsScalarFieldEnum]


  export const MedicalRecordsScalarFieldEnum: {
    RecordID: 'RecordID',
    PatientID: 'PatientID',
    DiagnosisDetails: 'DiagnosisDetails',
    TreatmentPlan: 'TreatmentPlan',
    medication: 'medication',
    RecordDate: 'RecordDate',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    admission_no: 'admission_no'
  };

  export type MedicalRecordsScalarFieldEnum = (typeof MedicalRecordsScalarFieldEnum)[keyof typeof MedicalRecordsScalarFieldEnum]


  export const CaseSheetsScalarFieldEnum: {
    CaseSheetID: 'CaseSheetID',
    CaseSheet: 'CaseSheet',
    RecordID: 'RecordID'
  };

  export type CaseSheetsScalarFieldEnum = (typeof CaseSheetsScalarFieldEnum)[keyof typeof CaseSheetsScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    ServiceID: 'ServiceID',
    ServiceName: 'ServiceName',
    ServiceCode: 'ServiceCode'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    UserID: 'UserID',
    Username: 'Username',
    PasswordHash: 'PasswordHash',
    Email: 'Email',
    Role: 'Role',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PatientsScalarFieldEnum: {
    PatientID: 'PatientID',
    Name: 'Name',
    Age: 'Age',
    Gender: 'Gender',
    ContactNumber: 'ContactNumber',
    Address: 'Address',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt',
    Status: 'Status',
    PatientRegistrationDate: 'PatientRegistrationDate',
    Ptype: 'Ptype',
    DepartmentID: 'DepartmentID',
    Email: 'Email',
    AlternateNumber: 'AlternateNumber',
    DOB: 'DOB',
    BloodGroup: 'BloodGroup'
  };

  export type PatientsScalarFieldEnum = (typeof PatientsScalarFieldEnum)[keyof typeof PatientsScalarFieldEnum]


  export const WardScalarFieldEnum: {
    ward_id: 'ward_id',
    ward_name: 'ward_name',
    ward_type: 'ward_type',
    nurse_station_number: 'nurse_station_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WardScalarFieldEnum = (typeof WardScalarFieldEnum)[keyof typeof WardScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    room_id: 'room_id',
    ward_id: 'ward_id',
    room_number: 'room_number',
    floor_number: 'floor_number',
    total_beds_in_room: 'total_beds_in_room',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const BedScalarFieldEnum: {
    bed_id: 'bed_id',
    room_id: 'room_id',
    bed_number: 'bed_number',
    occupied_status: 'occupied_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BedScalarFieldEnum = (typeof BedScalarFieldEnum)[keyof typeof BedScalarFieldEnum]


  export const AdmissionsScalarFieldEnum: {
    admission_id: 'admission_id',
    admission_no: 'admission_no',
    PatientID: 'PatientID',
    bed_id: 'bed_id',
    diagnosis_id: 'diagnosis_id',
    admission_date: 'admission_date',
    discharge_date: 'discharge_date',
    dischargeReasonId: 'dischargeReasonId',
    treatment_plan: 'treatment_plan',
    remarks: 'remarks'
  };

  export type AdmissionsScalarFieldEnum = (typeof AdmissionsScalarFieldEnum)[keyof typeof AdmissionsScalarFieldEnum]


  export const DischargeReasonScalarFieldEnum: {
    id: 'id',
    reason: 'reason'
  };

  export type DischargeReasonScalarFieldEnum = (typeof DischargeReasonScalarFieldEnum)[keyof typeof DischargeReasonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AppointmentsWhereInput = {
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    AppointmentID?: IntFilter<"Appointments"> | number
    PatientID?: StringFilter<"Appointments"> | string
    DoctorID?: IntFilter<"Appointments"> | number
    AppointmentDate?: DateTimeFilter<"Appointments"> | Date | string
    Status?: StringNullableFilter<"Appointments"> | string | null
    Notes?: StringNullableFilter<"Appointments"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Appointments"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Appointments"> | Date | string | null
    Doctors?: XOR<DoctorsScalarRelationFilter, DoctorsWhereInput>
    Patients?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }

  export type AppointmentsOrderByWithRelationInput = {
    AppointmentID?: SortOrder
    PatientID?: SortOrder
    DoctorID?: SortOrder
    AppointmentDate?: SortOrder
    Status?: SortOrderInput | SortOrder
    Notes?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    Doctors?: DoctorsOrderByWithRelationInput
    Patients?: PatientsOrderByWithRelationInput
  }

  export type AppointmentsWhereUniqueInput = Prisma.AtLeast<{
    AppointmentID?: number
    AND?: AppointmentsWhereInput | AppointmentsWhereInput[]
    OR?: AppointmentsWhereInput[]
    NOT?: AppointmentsWhereInput | AppointmentsWhereInput[]
    PatientID?: StringFilter<"Appointments"> | string
    DoctorID?: IntFilter<"Appointments"> | number
    AppointmentDate?: DateTimeFilter<"Appointments"> | Date | string
    Status?: StringNullableFilter<"Appointments"> | string | null
    Notes?: StringNullableFilter<"Appointments"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Appointments"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Appointments"> | Date | string | null
    Doctors?: XOR<DoctorsScalarRelationFilter, DoctorsWhereInput>
    Patients?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }, "AppointmentID">

  export type AppointmentsOrderByWithAggregationInput = {
    AppointmentID?: SortOrder
    PatientID?: SortOrder
    DoctorID?: SortOrder
    AppointmentDate?: SortOrder
    Status?: SortOrderInput | SortOrder
    Notes?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    _count?: AppointmentsCountOrderByAggregateInput
    _avg?: AppointmentsAvgOrderByAggregateInput
    _max?: AppointmentsMaxOrderByAggregateInput
    _min?: AppointmentsMinOrderByAggregateInput
    _sum?: AppointmentsSumOrderByAggregateInput
  }

  export type AppointmentsScalarWhereWithAggregatesInput = {
    AND?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    OR?: AppointmentsScalarWhereWithAggregatesInput[]
    NOT?: AppointmentsScalarWhereWithAggregatesInput | AppointmentsScalarWhereWithAggregatesInput[]
    AppointmentID?: IntWithAggregatesFilter<"Appointments"> | number
    PatientID?: StringWithAggregatesFilter<"Appointments"> | string
    DoctorID?: IntWithAggregatesFilter<"Appointments"> | number
    AppointmentDate?: DateTimeWithAggregatesFilter<"Appointments"> | Date | string
    Status?: StringNullableWithAggregatesFilter<"Appointments"> | string | null
    Notes?: StringNullableWithAggregatesFilter<"Appointments"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Appointments"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"Appointments"> | Date | string | null
  }

  export type BillsWhereInput = {
    AND?: BillsWhereInput | BillsWhereInput[]
    OR?: BillsWhereInput[]
    NOT?: BillsWhereInput | BillsWhereInput[]
    BillID?: IntFilter<"Bills"> | number
    PatientID?: StringFilter<"Bills"> | string
    TotalAmount?: DecimalFilter<"Bills"> | Decimal | DecimalJsLike | number | string
    PaymentStatus?: StringNullableFilter<"Bills"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Bills"> | Date | string | null
    Patients?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }

  export type BillsOrderByWithRelationInput = {
    BillID?: SortOrder
    PatientID?: SortOrder
    TotalAmount?: SortOrder
    PaymentStatus?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    Patients?: PatientsOrderByWithRelationInput
  }

  export type BillsWhereUniqueInput = Prisma.AtLeast<{
    BillID?: number
    AND?: BillsWhereInput | BillsWhereInput[]
    OR?: BillsWhereInput[]
    NOT?: BillsWhereInput | BillsWhereInput[]
    PatientID?: StringFilter<"Bills"> | string
    TotalAmount?: DecimalFilter<"Bills"> | Decimal | DecimalJsLike | number | string
    PaymentStatus?: StringNullableFilter<"Bills"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Bills"> | Date | string | null
    Patients?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
  }, "BillID">

  export type BillsOrderByWithAggregationInput = {
    BillID?: SortOrder
    PatientID?: SortOrder
    TotalAmount?: SortOrder
    PaymentStatus?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    _count?: BillsCountOrderByAggregateInput
    _avg?: BillsAvgOrderByAggregateInput
    _max?: BillsMaxOrderByAggregateInput
    _min?: BillsMinOrderByAggregateInput
    _sum?: BillsSumOrderByAggregateInput
  }

  export type BillsScalarWhereWithAggregatesInput = {
    AND?: BillsScalarWhereWithAggregatesInput | BillsScalarWhereWithAggregatesInput[]
    OR?: BillsScalarWhereWithAggregatesInput[]
    NOT?: BillsScalarWhereWithAggregatesInput | BillsScalarWhereWithAggregatesInput[]
    BillID?: IntWithAggregatesFilter<"Bills"> | number
    PatientID?: StringWithAggregatesFilter<"Bills"> | string
    TotalAmount?: DecimalWithAggregatesFilter<"Bills"> | Decimal | DecimalJsLike | number | string
    PaymentStatus?: StringNullableWithAggregatesFilter<"Bills"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Bills"> | Date | string | null
  }

  export type DepartmentsWhereInput = {
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    DepartmentID?: IntFilter<"Departments"> | number
    DepartmentName?: StringFilter<"Departments"> | string
    Diagnoses?: DiagnosesListRelationFilter
    Doctors?: DoctorsListRelationFilter
    Patients?: PatientsListRelationFilter
  }

  export type DepartmentsOrderByWithRelationInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    Diagnoses?: DiagnosesOrderByRelationAggregateInput
    Doctors?: DoctorsOrderByRelationAggregateInput
    Patients?: PatientsOrderByRelationAggregateInput
  }

  export type DepartmentsWhereUniqueInput = Prisma.AtLeast<{
    DepartmentID?: number
    DepartmentName?: string
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    Diagnoses?: DiagnosesListRelationFilter
    Doctors?: DoctorsListRelationFilter
    Patients?: PatientsListRelationFilter
  }, "DepartmentID" | "DepartmentName">

  export type DepartmentsOrderByWithAggregationInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    _count?: DepartmentsCountOrderByAggregateInput
    _avg?: DepartmentsAvgOrderByAggregateInput
    _max?: DepartmentsMaxOrderByAggregateInput
    _min?: DepartmentsMinOrderByAggregateInput
    _sum?: DepartmentsSumOrderByAggregateInput
  }

  export type DepartmentsScalarWhereWithAggregatesInput = {
    AND?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    OR?: DepartmentsScalarWhereWithAggregatesInput[]
    NOT?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    DepartmentID?: IntWithAggregatesFilter<"Departments"> | number
    DepartmentName?: StringWithAggregatesFilter<"Departments"> | string
  }

  export type DiagnosesWhereInput = {
    AND?: DiagnosesWhereInput | DiagnosesWhereInput[]
    OR?: DiagnosesWhereInput[]
    NOT?: DiagnosesWhereInput | DiagnosesWhereInput[]
    DiagnosisID?: IntFilter<"Diagnoses"> | number
    DepartmentID?: IntFilter<"Diagnoses"> | number
    DiagnosisName?: StringFilter<"Diagnoses"> | string
    CreatedAt?: DateTimeNullableFilter<"Diagnoses"> | Date | string | null
    Departments?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
    admissions?: AdmissionsListRelationFilter
  }

  export type DiagnosesOrderByWithRelationInput = {
    DiagnosisID?: SortOrder
    DepartmentID?: SortOrder
    DiagnosisName?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    Departments?: DepartmentsOrderByWithRelationInput
    admissions?: AdmissionsOrderByRelationAggregateInput
  }

  export type DiagnosesWhereUniqueInput = Prisma.AtLeast<{
    DiagnosisID?: number
    AND?: DiagnosesWhereInput | DiagnosesWhereInput[]
    OR?: DiagnosesWhereInput[]
    NOT?: DiagnosesWhereInput | DiagnosesWhereInput[]
    DepartmentID?: IntFilter<"Diagnoses"> | number
    DiagnosisName?: StringFilter<"Diagnoses"> | string
    CreatedAt?: DateTimeNullableFilter<"Diagnoses"> | Date | string | null
    Departments?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
    admissions?: AdmissionsListRelationFilter
  }, "DiagnosisID">

  export type DiagnosesOrderByWithAggregationInput = {
    DiagnosisID?: SortOrder
    DepartmentID?: SortOrder
    DiagnosisName?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    _count?: DiagnosesCountOrderByAggregateInput
    _avg?: DiagnosesAvgOrderByAggregateInput
    _max?: DiagnosesMaxOrderByAggregateInput
    _min?: DiagnosesMinOrderByAggregateInput
    _sum?: DiagnosesSumOrderByAggregateInput
  }

  export type DiagnosesScalarWhereWithAggregatesInput = {
    AND?: DiagnosesScalarWhereWithAggregatesInput | DiagnosesScalarWhereWithAggregatesInput[]
    OR?: DiagnosesScalarWhereWithAggregatesInput[]
    NOT?: DiagnosesScalarWhereWithAggregatesInput | DiagnosesScalarWhereWithAggregatesInput[]
    DiagnosisID?: IntWithAggregatesFilter<"Diagnoses"> | number
    DepartmentID?: IntWithAggregatesFilter<"Diagnoses"> | number
    DiagnosisName?: StringWithAggregatesFilter<"Diagnoses"> | string
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Diagnoses"> | Date | string | null
  }

  export type DoctorsWhereInput = {
    AND?: DoctorsWhereInput | DoctorsWhereInput[]
    OR?: DoctorsWhereInput[]
    NOT?: DoctorsWhereInput | DoctorsWhereInput[]
    DoctorID?: IntFilter<"Doctors"> | number
    FirstName?: StringFilter<"Doctors"> | string
    LastName?: StringFilter<"Doctors"> | string
    DepartmentID?: IntFilter<"Doctors"> | number
    ContactNumber?: StringNullableFilter<"Doctors"> | string | null
    Email?: StringNullableFilter<"Doctors"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Doctors"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Doctors"> | Date | string | null
    Appointments?: AppointmentsListRelationFilter
    Departments?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
  }

  export type DoctorsOrderByWithRelationInput = {
    DoctorID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DepartmentID?: SortOrder
    ContactNumber?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    Appointments?: AppointmentsOrderByRelationAggregateInput
    Departments?: DepartmentsOrderByWithRelationInput
  }

  export type DoctorsWhereUniqueInput = Prisma.AtLeast<{
    DoctorID?: number
    AND?: DoctorsWhereInput | DoctorsWhereInput[]
    OR?: DoctorsWhereInput[]
    NOT?: DoctorsWhereInput | DoctorsWhereInput[]
    FirstName?: StringFilter<"Doctors"> | string
    LastName?: StringFilter<"Doctors"> | string
    DepartmentID?: IntFilter<"Doctors"> | number
    ContactNumber?: StringNullableFilter<"Doctors"> | string | null
    Email?: StringNullableFilter<"Doctors"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Doctors"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Doctors"> | Date | string | null
    Appointments?: AppointmentsListRelationFilter
    Departments?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
  }, "DoctorID">

  export type DoctorsOrderByWithAggregationInput = {
    DoctorID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DepartmentID?: SortOrder
    ContactNumber?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    _count?: DoctorsCountOrderByAggregateInput
    _avg?: DoctorsAvgOrderByAggregateInput
    _max?: DoctorsMaxOrderByAggregateInput
    _min?: DoctorsMinOrderByAggregateInput
    _sum?: DoctorsSumOrderByAggregateInput
  }

  export type DoctorsScalarWhereWithAggregatesInput = {
    AND?: DoctorsScalarWhereWithAggregatesInput | DoctorsScalarWhereWithAggregatesInput[]
    OR?: DoctorsScalarWhereWithAggregatesInput[]
    NOT?: DoctorsScalarWhereWithAggregatesInput | DoctorsScalarWhereWithAggregatesInput[]
    DoctorID?: IntWithAggregatesFilter<"Doctors"> | number
    FirstName?: StringWithAggregatesFilter<"Doctors"> | string
    LastName?: StringWithAggregatesFilter<"Doctors"> | string
    DepartmentID?: IntWithAggregatesFilter<"Doctors"> | number
    ContactNumber?: StringNullableWithAggregatesFilter<"Doctors"> | string | null
    Email?: StringNullableWithAggregatesFilter<"Doctors"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Doctors"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"Doctors"> | Date | string | null
  }

  export type MedicalRecordsWhereInput = {
    AND?: MedicalRecordsWhereInput | MedicalRecordsWhereInput[]
    OR?: MedicalRecordsWhereInput[]
    NOT?: MedicalRecordsWhereInput | MedicalRecordsWhereInput[]
    RecordID?: StringFilter<"MedicalRecords"> | string
    PatientID?: StringFilter<"MedicalRecords"> | string
    DiagnosisDetails?: StringNullableFilter<"MedicalRecords"> | string | null
    TreatmentPlan?: StringNullableFilter<"MedicalRecords"> | string | null
    medication?: StringNullableFilter<"MedicalRecords"> | string | null
    RecordDate?: DateTimeFilter<"MedicalRecords"> | Date | string
    CreatedAt?: DateTimeNullableFilter<"MedicalRecords"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"MedicalRecords"> | Date | string | null
    admission_no?: IntNullableFilter<"MedicalRecords"> | number | null
    Patients?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    CaseSheets?: XOR<CaseSheetsNullableScalarRelationFilter, CaseSheetsWhereInput> | null
    Admissions?: XOR<AdmissionsNullableScalarRelationFilter, AdmissionsWhereInput> | null
  }

  export type MedicalRecordsOrderByWithRelationInput = {
    RecordID?: SortOrder
    PatientID?: SortOrder
    DiagnosisDetails?: SortOrderInput | SortOrder
    TreatmentPlan?: SortOrderInput | SortOrder
    medication?: SortOrderInput | SortOrder
    RecordDate?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    admission_no?: SortOrderInput | SortOrder
    Patients?: PatientsOrderByWithRelationInput
    CaseSheets?: CaseSheetsOrderByWithRelationInput
    Admissions?: AdmissionsOrderByWithRelationInput
  }

  export type MedicalRecordsWhereUniqueInput = Prisma.AtLeast<{
    RecordID?: string
    AND?: MedicalRecordsWhereInput | MedicalRecordsWhereInput[]
    OR?: MedicalRecordsWhereInput[]
    NOT?: MedicalRecordsWhereInput | MedicalRecordsWhereInput[]
    PatientID?: StringFilter<"MedicalRecords"> | string
    DiagnosisDetails?: StringNullableFilter<"MedicalRecords"> | string | null
    TreatmentPlan?: StringNullableFilter<"MedicalRecords"> | string | null
    medication?: StringNullableFilter<"MedicalRecords"> | string | null
    RecordDate?: DateTimeFilter<"MedicalRecords"> | Date | string
    CreatedAt?: DateTimeNullableFilter<"MedicalRecords"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"MedicalRecords"> | Date | string | null
    admission_no?: IntNullableFilter<"MedicalRecords"> | number | null
    Patients?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    CaseSheets?: XOR<CaseSheetsNullableScalarRelationFilter, CaseSheetsWhereInput> | null
    Admissions?: XOR<AdmissionsNullableScalarRelationFilter, AdmissionsWhereInput> | null
  }, "RecordID">

  export type MedicalRecordsOrderByWithAggregationInput = {
    RecordID?: SortOrder
    PatientID?: SortOrder
    DiagnosisDetails?: SortOrderInput | SortOrder
    TreatmentPlan?: SortOrderInput | SortOrder
    medication?: SortOrderInput | SortOrder
    RecordDate?: SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    admission_no?: SortOrderInput | SortOrder
    _count?: MedicalRecordsCountOrderByAggregateInput
    _avg?: MedicalRecordsAvgOrderByAggregateInput
    _max?: MedicalRecordsMaxOrderByAggregateInput
    _min?: MedicalRecordsMinOrderByAggregateInput
    _sum?: MedicalRecordsSumOrderByAggregateInput
  }

  export type MedicalRecordsScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordsScalarWhereWithAggregatesInput | MedicalRecordsScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordsScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordsScalarWhereWithAggregatesInput | MedicalRecordsScalarWhereWithAggregatesInput[]
    RecordID?: StringWithAggregatesFilter<"MedicalRecords"> | string
    PatientID?: StringWithAggregatesFilter<"MedicalRecords"> | string
    DiagnosisDetails?: StringNullableWithAggregatesFilter<"MedicalRecords"> | string | null
    TreatmentPlan?: StringNullableWithAggregatesFilter<"MedicalRecords"> | string | null
    medication?: StringNullableWithAggregatesFilter<"MedicalRecords"> | string | null
    RecordDate?: DateTimeWithAggregatesFilter<"MedicalRecords"> | Date | string
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"MedicalRecords"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"MedicalRecords"> | Date | string | null
    admission_no?: IntNullableWithAggregatesFilter<"MedicalRecords"> | number | null
  }

  export type CaseSheetsWhereInput = {
    AND?: CaseSheetsWhereInput | CaseSheetsWhereInput[]
    OR?: CaseSheetsWhereInput[]
    NOT?: CaseSheetsWhereInput | CaseSheetsWhereInput[]
    CaseSheetID?: StringFilter<"CaseSheets"> | string
    CaseSheet?: StringNullableFilter<"CaseSheets"> | string | null
    RecordID?: StringFilter<"CaseSheets"> | string
    MedicalRecord?: XOR<MedicalRecordsScalarRelationFilter, MedicalRecordsWhereInput>
  }

  export type CaseSheetsOrderByWithRelationInput = {
    CaseSheetID?: SortOrder
    CaseSheet?: SortOrderInput | SortOrder
    RecordID?: SortOrder
    MedicalRecord?: MedicalRecordsOrderByWithRelationInput
  }

  export type CaseSheetsWhereUniqueInput = Prisma.AtLeast<{
    CaseSheetID?: string
    RecordID?: string
    AND?: CaseSheetsWhereInput | CaseSheetsWhereInput[]
    OR?: CaseSheetsWhereInput[]
    NOT?: CaseSheetsWhereInput | CaseSheetsWhereInput[]
    CaseSheet?: StringNullableFilter<"CaseSheets"> | string | null
    MedicalRecord?: XOR<MedicalRecordsScalarRelationFilter, MedicalRecordsWhereInput>
  }, "CaseSheetID" | "RecordID">

  export type CaseSheetsOrderByWithAggregationInput = {
    CaseSheetID?: SortOrder
    CaseSheet?: SortOrderInput | SortOrder
    RecordID?: SortOrder
    _count?: CaseSheetsCountOrderByAggregateInput
    _max?: CaseSheetsMaxOrderByAggregateInput
    _min?: CaseSheetsMinOrderByAggregateInput
  }

  export type CaseSheetsScalarWhereWithAggregatesInput = {
    AND?: CaseSheetsScalarWhereWithAggregatesInput | CaseSheetsScalarWhereWithAggregatesInput[]
    OR?: CaseSheetsScalarWhereWithAggregatesInput[]
    NOT?: CaseSheetsScalarWhereWithAggregatesInput | CaseSheetsScalarWhereWithAggregatesInput[]
    CaseSheetID?: StringWithAggregatesFilter<"CaseSheets"> | string
    CaseSheet?: StringNullableWithAggregatesFilter<"CaseSheets"> | string | null
    RecordID?: StringWithAggregatesFilter<"CaseSheets"> | string
  }

  export type ServicesWhereInput = {
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    ServiceID?: IntFilter<"Services"> | number
    ServiceName?: StringFilter<"Services"> | string
    ServiceCode?: StringFilter<"Services"> | string
  }

  export type ServicesOrderByWithRelationInput = {
    ServiceID?: SortOrder
    ServiceName?: SortOrder
    ServiceCode?: SortOrder
  }

  export type ServicesWhereUniqueInput = Prisma.AtLeast<{
    ServiceID?: number
    ServiceCode?: string
    AND?: ServicesWhereInput | ServicesWhereInput[]
    OR?: ServicesWhereInput[]
    NOT?: ServicesWhereInput | ServicesWhereInput[]
    ServiceName?: StringFilter<"Services"> | string
  }, "ServiceID" | "ServiceCode">

  export type ServicesOrderByWithAggregationInput = {
    ServiceID?: SortOrder
    ServiceName?: SortOrder
    ServiceCode?: SortOrder
    _count?: ServicesCountOrderByAggregateInput
    _avg?: ServicesAvgOrderByAggregateInput
    _max?: ServicesMaxOrderByAggregateInput
    _min?: ServicesMinOrderByAggregateInput
    _sum?: ServicesSumOrderByAggregateInput
  }

  export type ServicesScalarWhereWithAggregatesInput = {
    AND?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    OR?: ServicesScalarWhereWithAggregatesInput[]
    NOT?: ServicesScalarWhereWithAggregatesInput | ServicesScalarWhereWithAggregatesInput[]
    ServiceID?: IntWithAggregatesFilter<"Services"> | number
    ServiceName?: StringWithAggregatesFilter<"Services"> | string
    ServiceCode?: StringWithAggregatesFilter<"Services"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    UserID?: IntFilter<"Users"> | number
    Username?: StringFilter<"Users"> | string
    PasswordHash?: StringFilter<"Users"> | string
    Email?: StringFilter<"Users"> | string
    Role?: StringNullableFilter<"Users"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
  }

  export type UsersOrderByWithRelationInput = {
    UserID?: SortOrder
    Username?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Role?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    UserID?: number
    Username?: string
    Email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    PasswordHash?: StringFilter<"Users"> | string
    Role?: StringNullableFilter<"Users"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
  }, "UserID" | "Username" | "Email">

  export type UsersOrderByWithAggregationInput = {
    UserID?: SortOrder
    Username?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Role?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"Users"> | number
    Username?: StringWithAggregatesFilter<"Users"> | string
    PasswordHash?: StringWithAggregatesFilter<"Users"> | string
    Email?: StringWithAggregatesFilter<"Users"> | string
    Role?: StringNullableWithAggregatesFilter<"Users"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
  }

  export type PatientsWhereInput = {
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    PatientID?: StringFilter<"Patients"> | string
    Name?: StringFilter<"Patients"> | string
    Age?: StringFilter<"Patients"> | string
    Gender?: StringFilter<"Patients"> | string
    ContactNumber?: StringNullableFilter<"Patients"> | string | null
    Address?: StringNullableFilter<"Patients"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Patients"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Patients"> | Date | string | null
    Status?: StringNullableFilter<"Patients"> | string | null
    PatientRegistrationDate?: DateTimeFilter<"Patients"> | Date | string
    Ptype?: StringNullableFilter<"Patients"> | string | null
    DepartmentID?: IntNullableFilter<"Patients"> | number | null
    Email?: StringNullableFilter<"Patients"> | string | null
    AlternateNumber?: StringNullableFilter<"Patients"> | string | null
    DOB?: DateTimeNullableFilter<"Patients"> | Date | string | null
    BloodGroup?: StringNullableFilter<"Patients"> | string | null
    Department?: XOR<DepartmentsNullableScalarRelationFilter, DepartmentsWhereInput> | null
    Appointments?: AppointmentsListRelationFilter
    Bills?: BillsListRelationFilter
    MedicalRecords?: MedicalRecordsListRelationFilter
    Admissions?: AdmissionsListRelationFilter
  }

  export type PatientsOrderByWithRelationInput = {
    PatientID?: SortOrder
    Name?: SortOrder
    Age?: SortOrder
    Gender?: SortOrder
    ContactNumber?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    PatientRegistrationDate?: SortOrder
    Ptype?: SortOrderInput | SortOrder
    DepartmentID?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    AlternateNumber?: SortOrderInput | SortOrder
    DOB?: SortOrderInput | SortOrder
    BloodGroup?: SortOrderInput | SortOrder
    Department?: DepartmentsOrderByWithRelationInput
    Appointments?: AppointmentsOrderByRelationAggregateInput
    Bills?: BillsOrderByRelationAggregateInput
    MedicalRecords?: MedicalRecordsOrderByRelationAggregateInput
    Admissions?: AdmissionsOrderByRelationAggregateInput
  }

  export type PatientsWhereUniqueInput = Prisma.AtLeast<{
    PatientID?: string
    AND?: PatientsWhereInput | PatientsWhereInput[]
    OR?: PatientsWhereInput[]
    NOT?: PatientsWhereInput | PatientsWhereInput[]
    Name?: StringFilter<"Patients"> | string
    Age?: StringFilter<"Patients"> | string
    Gender?: StringFilter<"Patients"> | string
    ContactNumber?: StringNullableFilter<"Patients"> | string | null
    Address?: StringNullableFilter<"Patients"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Patients"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Patients"> | Date | string | null
    Status?: StringNullableFilter<"Patients"> | string | null
    PatientRegistrationDate?: DateTimeFilter<"Patients"> | Date | string
    Ptype?: StringNullableFilter<"Patients"> | string | null
    DepartmentID?: IntNullableFilter<"Patients"> | number | null
    Email?: StringNullableFilter<"Patients"> | string | null
    AlternateNumber?: StringNullableFilter<"Patients"> | string | null
    DOB?: DateTimeNullableFilter<"Patients"> | Date | string | null
    BloodGroup?: StringNullableFilter<"Patients"> | string | null
    Department?: XOR<DepartmentsNullableScalarRelationFilter, DepartmentsWhereInput> | null
    Appointments?: AppointmentsListRelationFilter
    Bills?: BillsListRelationFilter
    MedicalRecords?: MedicalRecordsListRelationFilter
    Admissions?: AdmissionsListRelationFilter
  }, "PatientID">

  export type PatientsOrderByWithAggregationInput = {
    PatientID?: SortOrder
    Name?: SortOrder
    Age?: SortOrder
    Gender?: SortOrder
    ContactNumber?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    CreatedAt?: SortOrderInput | SortOrder
    UpdatedAt?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    PatientRegistrationDate?: SortOrder
    Ptype?: SortOrderInput | SortOrder
    DepartmentID?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    AlternateNumber?: SortOrderInput | SortOrder
    DOB?: SortOrderInput | SortOrder
    BloodGroup?: SortOrderInput | SortOrder
    _count?: PatientsCountOrderByAggregateInput
    _avg?: PatientsAvgOrderByAggregateInput
    _max?: PatientsMaxOrderByAggregateInput
    _min?: PatientsMinOrderByAggregateInput
    _sum?: PatientsSumOrderByAggregateInput
  }

  export type PatientsScalarWhereWithAggregatesInput = {
    AND?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    OR?: PatientsScalarWhereWithAggregatesInput[]
    NOT?: PatientsScalarWhereWithAggregatesInput | PatientsScalarWhereWithAggregatesInput[]
    PatientID?: StringWithAggregatesFilter<"Patients"> | string
    Name?: StringWithAggregatesFilter<"Patients"> | string
    Age?: StringWithAggregatesFilter<"Patients"> | string
    Gender?: StringWithAggregatesFilter<"Patients"> | string
    ContactNumber?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    Address?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    CreatedAt?: DateTimeNullableWithAggregatesFilter<"Patients"> | Date | string | null
    UpdatedAt?: DateTimeNullableWithAggregatesFilter<"Patients"> | Date | string | null
    Status?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    PatientRegistrationDate?: DateTimeWithAggregatesFilter<"Patients"> | Date | string
    Ptype?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    DepartmentID?: IntNullableWithAggregatesFilter<"Patients"> | number | null
    Email?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    AlternateNumber?: StringNullableWithAggregatesFilter<"Patients"> | string | null
    DOB?: DateTimeNullableWithAggregatesFilter<"Patients"> | Date | string | null
    BloodGroup?: StringNullableWithAggregatesFilter<"Patients"> | string | null
  }

  export type WardWhereInput = {
    AND?: WardWhereInput | WardWhereInput[]
    OR?: WardWhereInput[]
    NOT?: WardWhereInput | WardWhereInput[]
    ward_id?: IntFilter<"Ward"> | number
    ward_name?: StringFilter<"Ward"> | string
    ward_type?: StringFilter<"Ward"> | string
    nurse_station_number?: StringNullableFilter<"Ward"> | string | null
    created_at?: DateTimeFilter<"Ward"> | Date | string
    updated_at?: DateTimeFilter<"Ward"> | Date | string
    rooms?: RoomListRelationFilter
  }

  export type WardOrderByWithRelationInput = {
    ward_id?: SortOrder
    ward_name?: SortOrder
    ward_type?: SortOrder
    nurse_station_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
  }

  export type WardWhereUniqueInput = Prisma.AtLeast<{
    ward_id?: number
    AND?: WardWhereInput | WardWhereInput[]
    OR?: WardWhereInput[]
    NOT?: WardWhereInput | WardWhereInput[]
    ward_name?: StringFilter<"Ward"> | string
    ward_type?: StringFilter<"Ward"> | string
    nurse_station_number?: StringNullableFilter<"Ward"> | string | null
    created_at?: DateTimeFilter<"Ward"> | Date | string
    updated_at?: DateTimeFilter<"Ward"> | Date | string
    rooms?: RoomListRelationFilter
  }, "ward_id">

  export type WardOrderByWithAggregationInput = {
    ward_id?: SortOrder
    ward_name?: SortOrder
    ward_type?: SortOrder
    nurse_station_number?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: WardCountOrderByAggregateInput
    _avg?: WardAvgOrderByAggregateInput
    _max?: WardMaxOrderByAggregateInput
    _min?: WardMinOrderByAggregateInput
    _sum?: WardSumOrderByAggregateInput
  }

  export type WardScalarWhereWithAggregatesInput = {
    AND?: WardScalarWhereWithAggregatesInput | WardScalarWhereWithAggregatesInput[]
    OR?: WardScalarWhereWithAggregatesInput[]
    NOT?: WardScalarWhereWithAggregatesInput | WardScalarWhereWithAggregatesInput[]
    ward_id?: IntWithAggregatesFilter<"Ward"> | number
    ward_name?: StringWithAggregatesFilter<"Ward"> | string
    ward_type?: StringWithAggregatesFilter<"Ward"> | string
    nurse_station_number?: StringNullableWithAggregatesFilter<"Ward"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Ward"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Ward"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    room_id?: IntFilter<"Room"> | number
    ward_id?: IntFilter<"Room"> | number
    room_number?: StringFilter<"Room"> | string
    floor_number?: IntFilter<"Room"> | number
    total_beds_in_room?: IntFilter<"Room"> | number
    created_at?: DateTimeFilter<"Room"> | Date | string
    updated_at?: DateTimeFilter<"Room"> | Date | string
    ward?: XOR<WardScalarRelationFilter, WardWhereInput>
    beds?: BedListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    room_id?: SortOrder
    ward_id?: SortOrder
    room_number?: SortOrder
    floor_number?: SortOrder
    total_beds_in_room?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    ward?: WardOrderByWithRelationInput
    beds?: BedOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    room_id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    ward_id?: IntFilter<"Room"> | number
    room_number?: StringFilter<"Room"> | string
    floor_number?: IntFilter<"Room"> | number
    total_beds_in_room?: IntFilter<"Room"> | number
    created_at?: DateTimeFilter<"Room"> | Date | string
    updated_at?: DateTimeFilter<"Room"> | Date | string
    ward?: XOR<WardScalarRelationFilter, WardWhereInput>
    beds?: BedListRelationFilter
  }, "room_id">

  export type RoomOrderByWithAggregationInput = {
    room_id?: SortOrder
    ward_id?: SortOrder
    room_number?: SortOrder
    floor_number?: SortOrder
    total_beds_in_room?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    room_id?: IntWithAggregatesFilter<"Room"> | number
    ward_id?: IntWithAggregatesFilter<"Room"> | number
    room_number?: StringWithAggregatesFilter<"Room"> | string
    floor_number?: IntWithAggregatesFilter<"Room"> | number
    total_beds_in_room?: IntWithAggregatesFilter<"Room"> | number
    created_at?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type BedWhereInput = {
    AND?: BedWhereInput | BedWhereInput[]
    OR?: BedWhereInput[]
    NOT?: BedWhereInput | BedWhereInput[]
    bed_id?: IntFilter<"Bed"> | number
    room_id?: IntFilter<"Bed"> | number
    bed_number?: StringFilter<"Bed"> | string
    occupied_status?: StringFilter<"Bed"> | string
    created_at?: DateTimeFilter<"Bed"> | Date | string
    updated_at?: DateTimeFilter<"Bed"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    Admissions?: AdmissionsListRelationFilter
  }

  export type BedOrderByWithRelationInput = {
    bed_id?: SortOrder
    room_id?: SortOrder
    bed_number?: SortOrder
    occupied_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    room?: RoomOrderByWithRelationInput
    Admissions?: AdmissionsOrderByRelationAggregateInput
  }

  export type BedWhereUniqueInput = Prisma.AtLeast<{
    bed_id?: number
    AND?: BedWhereInput | BedWhereInput[]
    OR?: BedWhereInput[]
    NOT?: BedWhereInput | BedWhereInput[]
    room_id?: IntFilter<"Bed"> | number
    bed_number?: StringFilter<"Bed"> | string
    occupied_status?: StringFilter<"Bed"> | string
    created_at?: DateTimeFilter<"Bed"> | Date | string
    updated_at?: DateTimeFilter<"Bed"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    Admissions?: AdmissionsListRelationFilter
  }, "bed_id">

  export type BedOrderByWithAggregationInput = {
    bed_id?: SortOrder
    room_id?: SortOrder
    bed_number?: SortOrder
    occupied_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BedCountOrderByAggregateInput
    _avg?: BedAvgOrderByAggregateInput
    _max?: BedMaxOrderByAggregateInput
    _min?: BedMinOrderByAggregateInput
    _sum?: BedSumOrderByAggregateInput
  }

  export type BedScalarWhereWithAggregatesInput = {
    AND?: BedScalarWhereWithAggregatesInput | BedScalarWhereWithAggregatesInput[]
    OR?: BedScalarWhereWithAggregatesInput[]
    NOT?: BedScalarWhereWithAggregatesInput | BedScalarWhereWithAggregatesInput[]
    bed_id?: IntWithAggregatesFilter<"Bed"> | number
    room_id?: IntWithAggregatesFilter<"Bed"> | number
    bed_number?: StringWithAggregatesFilter<"Bed"> | string
    occupied_status?: StringWithAggregatesFilter<"Bed"> | string
    created_at?: DateTimeWithAggregatesFilter<"Bed"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Bed"> | Date | string
  }

  export type AdmissionsWhereInput = {
    AND?: AdmissionsWhereInput | AdmissionsWhereInput[]
    OR?: AdmissionsWhereInput[]
    NOT?: AdmissionsWhereInput | AdmissionsWhereInput[]
    admission_id?: IntFilter<"Admissions"> | number
    admission_no?: IntFilter<"Admissions"> | number
    PatientID?: StringFilter<"Admissions"> | string
    bed_id?: IntFilter<"Admissions"> | number
    diagnosis_id?: IntFilter<"Admissions"> | number
    admission_date?: DateTimeFilter<"Admissions"> | Date | string
    discharge_date?: DateTimeNullableFilter<"Admissions"> | Date | string | null
    dischargeReasonId?: IntNullableFilter<"Admissions"> | number | null
    treatment_plan?: StringNullableFilter<"Admissions"> | string | null
    remarks?: StringNullableFilter<"Admissions"> | string | null
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    bed?: XOR<BedScalarRelationFilter, BedWhereInput>
    diagnosis?: XOR<DiagnosesScalarRelationFilter, DiagnosesWhereInput>
    dischargeReason?: XOR<DischargeReasonNullableScalarRelationFilter, DischargeReasonWhereInput> | null
    MedicalRecords?: MedicalRecordsListRelationFilter
  }

  export type AdmissionsOrderByWithRelationInput = {
    admission_id?: SortOrder
    admission_no?: SortOrder
    PatientID?: SortOrder
    bed_id?: SortOrder
    diagnosis_id?: SortOrder
    admission_date?: SortOrder
    discharge_date?: SortOrderInput | SortOrder
    dischargeReasonId?: SortOrderInput | SortOrder
    treatment_plan?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    patient?: PatientsOrderByWithRelationInput
    bed?: BedOrderByWithRelationInput
    diagnosis?: DiagnosesOrderByWithRelationInput
    dischargeReason?: DischargeReasonOrderByWithRelationInput
    MedicalRecords?: MedicalRecordsOrderByRelationAggregateInput
  }

  export type AdmissionsWhereUniqueInput = Prisma.AtLeast<{
    admission_id?: number
    admission_no?: number
    AND?: AdmissionsWhereInput | AdmissionsWhereInput[]
    OR?: AdmissionsWhereInput[]
    NOT?: AdmissionsWhereInput | AdmissionsWhereInput[]
    PatientID?: StringFilter<"Admissions"> | string
    bed_id?: IntFilter<"Admissions"> | number
    diagnosis_id?: IntFilter<"Admissions"> | number
    admission_date?: DateTimeFilter<"Admissions"> | Date | string
    discharge_date?: DateTimeNullableFilter<"Admissions"> | Date | string | null
    dischargeReasonId?: IntNullableFilter<"Admissions"> | number | null
    treatment_plan?: StringNullableFilter<"Admissions"> | string | null
    remarks?: StringNullableFilter<"Admissions"> | string | null
    patient?: XOR<PatientsScalarRelationFilter, PatientsWhereInput>
    bed?: XOR<BedScalarRelationFilter, BedWhereInput>
    diagnosis?: XOR<DiagnosesScalarRelationFilter, DiagnosesWhereInput>
    dischargeReason?: XOR<DischargeReasonNullableScalarRelationFilter, DischargeReasonWhereInput> | null
    MedicalRecords?: MedicalRecordsListRelationFilter
  }, "admission_id" | "admission_no">

  export type AdmissionsOrderByWithAggregationInput = {
    admission_id?: SortOrder
    admission_no?: SortOrder
    PatientID?: SortOrder
    bed_id?: SortOrder
    diagnosis_id?: SortOrder
    admission_date?: SortOrder
    discharge_date?: SortOrderInput | SortOrder
    dischargeReasonId?: SortOrderInput | SortOrder
    treatment_plan?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: AdmissionsCountOrderByAggregateInput
    _avg?: AdmissionsAvgOrderByAggregateInput
    _max?: AdmissionsMaxOrderByAggregateInput
    _min?: AdmissionsMinOrderByAggregateInput
    _sum?: AdmissionsSumOrderByAggregateInput
  }

  export type AdmissionsScalarWhereWithAggregatesInput = {
    AND?: AdmissionsScalarWhereWithAggregatesInput | AdmissionsScalarWhereWithAggregatesInput[]
    OR?: AdmissionsScalarWhereWithAggregatesInput[]
    NOT?: AdmissionsScalarWhereWithAggregatesInput | AdmissionsScalarWhereWithAggregatesInput[]
    admission_id?: IntWithAggregatesFilter<"Admissions"> | number
    admission_no?: IntWithAggregatesFilter<"Admissions"> | number
    PatientID?: StringWithAggregatesFilter<"Admissions"> | string
    bed_id?: IntWithAggregatesFilter<"Admissions"> | number
    diagnosis_id?: IntWithAggregatesFilter<"Admissions"> | number
    admission_date?: DateTimeWithAggregatesFilter<"Admissions"> | Date | string
    discharge_date?: DateTimeNullableWithAggregatesFilter<"Admissions"> | Date | string | null
    dischargeReasonId?: IntNullableWithAggregatesFilter<"Admissions"> | number | null
    treatment_plan?: StringNullableWithAggregatesFilter<"Admissions"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Admissions"> | string | null
  }

  export type DischargeReasonWhereInput = {
    AND?: DischargeReasonWhereInput | DischargeReasonWhereInput[]
    OR?: DischargeReasonWhereInput[]
    NOT?: DischargeReasonWhereInput | DischargeReasonWhereInput[]
    id?: IntFilter<"DischargeReason"> | number
    reason?: StringFilter<"DischargeReason"> | string
    admissions?: AdmissionsListRelationFilter
  }

  export type DischargeReasonOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    admissions?: AdmissionsOrderByRelationAggregateInput
  }

  export type DischargeReasonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reason?: string
    AND?: DischargeReasonWhereInput | DischargeReasonWhereInput[]
    OR?: DischargeReasonWhereInput[]
    NOT?: DischargeReasonWhereInput | DischargeReasonWhereInput[]
    admissions?: AdmissionsListRelationFilter
  }, "id" | "reason">

  export type DischargeReasonOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    _count?: DischargeReasonCountOrderByAggregateInput
    _avg?: DischargeReasonAvgOrderByAggregateInput
    _max?: DischargeReasonMaxOrderByAggregateInput
    _min?: DischargeReasonMinOrderByAggregateInput
    _sum?: DischargeReasonSumOrderByAggregateInput
  }

  export type DischargeReasonScalarWhereWithAggregatesInput = {
    AND?: DischargeReasonScalarWhereWithAggregatesInput | DischargeReasonScalarWhereWithAggregatesInput[]
    OR?: DischargeReasonScalarWhereWithAggregatesInput[]
    NOT?: DischargeReasonScalarWhereWithAggregatesInput | DischargeReasonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DischargeReason"> | number
    reason?: StringWithAggregatesFilter<"DischargeReason"> | string
  }

  export type AppointmentsCreateInput = {
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Doctors: DoctorsCreateNestedOneWithoutAppointmentsInput
    Patients: PatientsCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateInput = {
    AppointmentID?: number
    PatientID: string
    DoctorID: number
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type AppointmentsUpdateInput = {
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Doctors?: DoctorsUpdateOneRequiredWithoutAppointmentsNestedInput
    Patients?: PatientsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateInput = {
    AppointmentID?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    DoctorID?: IntFieldUpdateOperationsInput | number
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentsCreateManyInput = {
    PatientID: string
    DoctorID: number
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type AppointmentsUpdateManyMutationInput = {
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentsUncheckedUpdateManyInput = {
    AppointmentID?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    DoctorID?: IntFieldUpdateOperationsInput | number
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BillsCreateInput = {
    TotalAmount: Decimal | DecimalJsLike | number | string
    PaymentStatus?: string | null
    CreatedAt?: Date | string | null
    Patients: PatientsCreateNestedOneWithoutBillsInput
  }

  export type BillsUncheckedCreateInput = {
    BillID?: number
    PatientID: string
    TotalAmount: Decimal | DecimalJsLike | number | string
    PaymentStatus?: string | null
    CreatedAt?: Date | string | null
  }

  export type BillsUpdateInput = {
    TotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Patients?: PatientsUpdateOneRequiredWithoutBillsNestedInput
  }

  export type BillsUncheckedUpdateInput = {
    BillID?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    TotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BillsCreateManyInput = {
    PatientID: string
    TotalAmount: Decimal | DecimalJsLike | number | string
    PaymentStatus?: string | null
    CreatedAt?: Date | string | null
  }

  export type BillsUpdateManyMutationInput = {
    TotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BillsUncheckedUpdateManyInput = {
    BillID?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    TotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentsCreateInput = {
    DepartmentName: string
    Diagnoses?: DiagnosesCreateNestedManyWithoutDepartmentsInput
    Doctors?: DoctorsCreateNestedManyWithoutDepartmentsInput
    Patients?: PatientsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateInput = {
    DepartmentID?: number
    DepartmentName: string
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutDepartmentsInput
    Doctors?: DoctorsUncheckedCreateNestedManyWithoutDepartmentsInput
    Patients?: PatientsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUpdateInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Diagnoses?: DiagnosesUpdateManyWithoutDepartmentsNestedInput
    Doctors?: DoctorsUpdateManyWithoutDepartmentsNestedInput
    Patients?: PatientsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutDepartmentsNestedInput
    Doctors?: DoctorsUncheckedUpdateManyWithoutDepartmentsNestedInput
    Patients?: PatientsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsCreateManyInput = {
    DepartmentName: string
  }

  export type DepartmentsUpdateManyMutationInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentsUncheckedUpdateManyInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosesCreateInput = {
    DiagnosisName: string
    CreatedAt?: Date | string | null
    Departments: DepartmentsCreateNestedOneWithoutDiagnosesInput
    admissions?: AdmissionsCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesUncheckedCreateInput = {
    DiagnosisID?: number
    DepartmentID: number
    DiagnosisName: string
    CreatedAt?: Date | string | null
    admissions?: AdmissionsUncheckedCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesUpdateInput = {
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Departments?: DepartmentsUpdateOneRequiredWithoutDiagnosesNestedInput
    admissions?: AdmissionsUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesUncheckedUpdateInput = {
    DiagnosisID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissions?: AdmissionsUncheckedUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesCreateManyInput = {
    DepartmentID: number
    DiagnosisName: string
    CreatedAt?: Date | string | null
  }

  export type DiagnosesUpdateManyMutationInput = {
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DiagnosesUncheckedUpdateManyInput = {
    DiagnosisID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorsCreateInput = {
    FirstName: string
    LastName: string
    ContactNumber?: string | null
    Email?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Appointments?: AppointmentsCreateNestedManyWithoutDoctorsInput
    Departments: DepartmentsCreateNestedOneWithoutDoctorsInput
  }

  export type DoctorsUncheckedCreateInput = {
    DoctorID?: number
    FirstName: string
    LastName: string
    DepartmentID: number
    ContactNumber?: string | null
    Email?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type DoctorsUpdateInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Appointments?: AppointmentsUpdateManyWithoutDoctorsNestedInput
    Departments?: DepartmentsUpdateOneRequiredWithoutDoctorsNestedInput
  }

  export type DoctorsUncheckedUpdateInput = {
    DoctorID?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DepartmentID?: IntFieldUpdateOperationsInput | number
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Appointments?: AppointmentsUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type DoctorsCreateManyInput = {
    FirstName: string
    LastName: string
    DepartmentID: number
    ContactNumber?: string | null
    Email?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type DoctorsUpdateManyMutationInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorsUncheckedUpdateManyInput = {
    DoctorID?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DepartmentID?: IntFieldUpdateOperationsInput | number
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicalRecordsCreateInput = {
    RecordID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Patients: PatientsCreateNestedOneWithoutMedicalRecordsInput
    CaseSheets?: CaseSheetsCreateNestedOneWithoutMedicalRecordInput
    Admissions?: AdmissionsCreateNestedOneWithoutMedicalRecordsInput
  }

  export type MedicalRecordsUncheckedCreateInput = {
    RecordID: string
    PatientID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    admission_no?: number | null
    CaseSheets?: CaseSheetsUncheckedCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordsUpdateInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Patients?: PatientsUpdateOneRequiredWithoutMedicalRecordsNestedInput
    CaseSheets?: CaseSheetsUpdateOneWithoutMedicalRecordNestedInput
    Admissions?: AdmissionsUpdateOneWithoutMedicalRecordsNestedInput
  }

  export type MedicalRecordsUncheckedUpdateInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    PatientID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admission_no?: NullableIntFieldUpdateOperationsInput | number | null
    CaseSheets?: CaseSheetsUncheckedUpdateOneWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordsCreateManyInput = {
    RecordID: string
    PatientID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    admission_no?: number | null
  }

  export type MedicalRecordsUpdateManyMutationInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicalRecordsUncheckedUpdateManyInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    PatientID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admission_no?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CaseSheetsCreateInput = {
    CaseSheetID?: string
    CaseSheet?: string | null
    MedicalRecord: MedicalRecordsCreateNestedOneWithoutCaseSheetsInput
  }

  export type CaseSheetsUncheckedCreateInput = {
    CaseSheetID?: string
    CaseSheet?: string | null
    RecordID: string
  }

  export type CaseSheetsUpdateInput = {
    CaseSheetID?: StringFieldUpdateOperationsInput | string
    CaseSheet?: NullableStringFieldUpdateOperationsInput | string | null
    MedicalRecord?: MedicalRecordsUpdateOneRequiredWithoutCaseSheetsNestedInput
  }

  export type CaseSheetsUncheckedUpdateInput = {
    CaseSheetID?: StringFieldUpdateOperationsInput | string
    CaseSheet?: NullableStringFieldUpdateOperationsInput | string | null
    RecordID?: StringFieldUpdateOperationsInput | string
  }

  export type CaseSheetsCreateManyInput = {
    CaseSheetID?: string
    CaseSheet?: string | null
    RecordID: string
  }

  export type CaseSheetsUpdateManyMutationInput = {
    CaseSheetID?: StringFieldUpdateOperationsInput | string
    CaseSheet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseSheetsUncheckedUpdateManyInput = {
    CaseSheetID?: StringFieldUpdateOperationsInput | string
    CaseSheet?: NullableStringFieldUpdateOperationsInput | string | null
    RecordID?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesCreateInput = {
    ServiceName: string
    ServiceCode: string
  }

  export type ServicesUncheckedCreateInput = {
    ServiceID?: number
    ServiceName: string
    ServiceCode: string
  }

  export type ServicesUpdateInput = {
    ServiceName?: StringFieldUpdateOperationsInput | string
    ServiceCode?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesUncheckedUpdateInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    ServiceName?: StringFieldUpdateOperationsInput | string
    ServiceCode?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesCreateManyInput = {
    ServiceName: string
    ServiceCode: string
  }

  export type ServicesUpdateManyMutationInput = {
    ServiceName?: StringFieldUpdateOperationsInput | string
    ServiceCode?: StringFieldUpdateOperationsInput | string
  }

  export type ServicesUncheckedUpdateManyInput = {
    ServiceID?: IntFieldUpdateOperationsInput | number
    ServiceName?: StringFieldUpdateOperationsInput | string
    ServiceCode?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    Username: string
    PasswordHash: string
    Email: string
    Role?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type UsersUncheckedCreateInput = {
    UserID?: number
    Username: string
    PasswordHash: string
    Email: string
    Role?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type UsersUpdateInput = {
    Username?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateManyInput = {
    Username: string
    PasswordHash: string
    Email: string
    Role?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type UsersUpdateManyMutationInput = {
    Username?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Username?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientsCreateInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Department?: DepartmentsCreateNestedOneWithoutPatientsInput
    Appointments?: AppointmentsCreateNestedManyWithoutPatientsInput
    Bills?: BillsCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    DepartmentID?: number | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutPatientsInput
    Bills?: BillsUncheckedCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsUpdateInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentsUpdateOneWithoutPatientsNestedInput
    Appointments?: AppointmentsUpdateManyWithoutPatientsNestedInput
    Bills?: BillsUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentsUncheckedUpdateManyWithoutPatientsNestedInput
    Bills?: BillsUncheckedUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateManyInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    DepartmentID?: number | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
  }

  export type PatientsUpdateManyMutationInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientsUncheckedUpdateManyInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WardCreateInput = {
    ward_name: string
    ward_type: string
    nurse_station_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    rooms?: RoomCreateNestedManyWithoutWardInput
  }

  export type WardUncheckedCreateInput = {
    ward_id?: number
    ward_name: string
    ward_type: string
    nurse_station_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutWardInput
  }

  export type WardUpdateInput = {
    ward_name?: StringFieldUpdateOperationsInput | string
    ward_type?: StringFieldUpdateOperationsInput | string
    nurse_station_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutWardNestedInput
  }

  export type WardUncheckedUpdateInput = {
    ward_id?: IntFieldUpdateOperationsInput | number
    ward_name?: StringFieldUpdateOperationsInput | string
    ward_type?: StringFieldUpdateOperationsInput | string
    nurse_station_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutWardNestedInput
  }

  export type WardCreateManyInput = {
    ward_name: string
    ward_type: string
    nurse_station_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WardUpdateManyMutationInput = {
    ward_name?: StringFieldUpdateOperationsInput | string
    ward_type?: StringFieldUpdateOperationsInput | string
    nurse_station_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardUncheckedUpdateManyInput = {
    ward_id?: IntFieldUpdateOperationsInput | number
    ward_name?: StringFieldUpdateOperationsInput | string
    ward_type?: StringFieldUpdateOperationsInput | string
    nurse_station_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at?: Date | string
    updated_at?: Date | string
    ward: WardCreateNestedOneWithoutRoomsInput
    beds?: BedCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    room_id?: number
    ward_id: number
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at?: Date | string
    updated_at?: Date | string
    beds?: BedUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: WardUpdateOneRequiredWithoutRoomsNestedInput
    beds?: BedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    ward_id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    beds?: BedUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    ward_id: number
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    ward_id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BedCreateInput = {
    bed_number: string
    occupied_status?: string
    created_at?: Date | string
    updated_at?: Date | string
    room: RoomCreateNestedOneWithoutBedsInput
    Admissions?: AdmissionsCreateNestedManyWithoutBedInput
  }

  export type BedUncheckedCreateInput = {
    bed_id?: number
    room_id: number
    bed_number: string
    occupied_status?: string
    created_at?: Date | string
    updated_at?: Date | string
    Admissions?: AdmissionsUncheckedCreateNestedManyWithoutBedInput
  }

  export type BedUpdateInput = {
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBedsNestedInput
    Admissions?: AdmissionsUpdateManyWithoutBedNestedInput
  }

  export type BedUncheckedUpdateInput = {
    bed_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Admissions?: AdmissionsUncheckedUpdateManyWithoutBedNestedInput
  }

  export type BedCreateManyInput = {
    room_id: number
    bed_number: string
    occupied_status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BedUpdateManyMutationInput = {
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BedUncheckedUpdateManyInput = {
    bed_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionsCreateInput = {
    admission_no: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    treatment_plan?: string | null
    remarks?: string | null
    patient: PatientsCreateNestedOneWithoutAdmissionsInput
    bed: BedCreateNestedOneWithoutAdmissionsInput
    diagnosis: DiagnosesCreateNestedOneWithoutAdmissionsInput
    dischargeReason?: DischargeReasonCreateNestedOneWithoutAdmissionsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsUncheckedCreateInput = {
    admission_id?: number
    admission_no: number
    PatientID: string
    bed_id: number
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsUpdateInput = {
    admission_no?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientsUpdateOneRequiredWithoutAdmissionsNestedInput
    bed?: BedUpdateOneRequiredWithoutAdmissionsNestedInput
    diagnosis?: DiagnosesUpdateOneRequiredWithoutAdmissionsNestedInput
    dischargeReason?: DischargeReasonUpdateOneWithoutAdmissionsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    bed_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsCreateManyInput = {
    admission_no: number
    PatientID: string
    bed_id: number
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
  }

  export type AdmissionsUpdateManyMutationInput = {
    admission_no?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdmissionsUncheckedUpdateManyInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    bed_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DischargeReasonCreateInput = {
    reason: string
    admissions?: AdmissionsCreateNestedManyWithoutDischargeReasonInput
  }

  export type DischargeReasonUncheckedCreateInput = {
    id?: number
    reason: string
    admissions?: AdmissionsUncheckedCreateNestedManyWithoutDischargeReasonInput
  }

  export type DischargeReasonUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    admissions?: AdmissionsUpdateManyWithoutDischargeReasonNestedInput
  }

  export type DischargeReasonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    admissions?: AdmissionsUncheckedUpdateManyWithoutDischargeReasonNestedInput
  }

  export type DischargeReasonCreateManyInput = {
    reason: string
  }

  export type DischargeReasonUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type DischargeReasonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DoctorsScalarRelationFilter = {
    is?: DoctorsWhereInput
    isNot?: DoctorsWhereInput
  }

  export type PatientsScalarRelationFilter = {
    is?: PatientsWhereInput
    isNot?: PatientsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentsCountOrderByAggregateInput = {
    AppointmentID?: SortOrder
    PatientID?: SortOrder
    DoctorID?: SortOrder
    AppointmentDate?: SortOrder
    Status?: SortOrder
    Notes?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AppointmentsAvgOrderByAggregateInput = {
    AppointmentID?: SortOrder
    DoctorID?: SortOrder
  }

  export type AppointmentsMaxOrderByAggregateInput = {
    AppointmentID?: SortOrder
    PatientID?: SortOrder
    DoctorID?: SortOrder
    AppointmentDate?: SortOrder
    Status?: SortOrder
    Notes?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AppointmentsMinOrderByAggregateInput = {
    AppointmentID?: SortOrder
    PatientID?: SortOrder
    DoctorID?: SortOrder
    AppointmentDate?: SortOrder
    Status?: SortOrder
    Notes?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type AppointmentsSumOrderByAggregateInput = {
    AppointmentID?: SortOrder
    DoctorID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BillsCountOrderByAggregateInput = {
    BillID?: SortOrder
    PatientID?: SortOrder
    TotalAmount?: SortOrder
    PaymentStatus?: SortOrder
    CreatedAt?: SortOrder
  }

  export type BillsAvgOrderByAggregateInput = {
    BillID?: SortOrder
    TotalAmount?: SortOrder
  }

  export type BillsMaxOrderByAggregateInput = {
    BillID?: SortOrder
    PatientID?: SortOrder
    TotalAmount?: SortOrder
    PaymentStatus?: SortOrder
    CreatedAt?: SortOrder
  }

  export type BillsMinOrderByAggregateInput = {
    BillID?: SortOrder
    PatientID?: SortOrder
    TotalAmount?: SortOrder
    PaymentStatus?: SortOrder
    CreatedAt?: SortOrder
  }

  export type BillsSumOrderByAggregateInput = {
    BillID?: SortOrder
    TotalAmount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DiagnosesListRelationFilter = {
    every?: DiagnosesWhereInput
    some?: DiagnosesWhereInput
    none?: DiagnosesWhereInput
  }

  export type DoctorsListRelationFilter = {
    every?: DoctorsWhereInput
    some?: DoctorsWhereInput
    none?: DoctorsWhereInput
  }

  export type PatientsListRelationFilter = {
    every?: PatientsWhereInput
    some?: PatientsWhereInput
    none?: PatientsWhereInput
  }

  export type DiagnosesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentsCountOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
  }

  export type DepartmentsAvgOrderByAggregateInput = {
    DepartmentID?: SortOrder
  }

  export type DepartmentsMaxOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
  }

  export type DepartmentsMinOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
  }

  export type DepartmentsSumOrderByAggregateInput = {
    DepartmentID?: SortOrder
  }

  export type DepartmentsScalarRelationFilter = {
    is?: DepartmentsWhereInput
    isNot?: DepartmentsWhereInput
  }

  export type AdmissionsListRelationFilter = {
    every?: AdmissionsWhereInput
    some?: AdmissionsWhereInput
    none?: AdmissionsWhereInput
  }

  export type AdmissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosesCountOrderByAggregateInput = {
    DiagnosisID?: SortOrder
    DepartmentID?: SortOrder
    DiagnosisName?: SortOrder
    CreatedAt?: SortOrder
  }

  export type DiagnosesAvgOrderByAggregateInput = {
    DiagnosisID?: SortOrder
    DepartmentID?: SortOrder
  }

  export type DiagnosesMaxOrderByAggregateInput = {
    DiagnosisID?: SortOrder
    DepartmentID?: SortOrder
    DiagnosisName?: SortOrder
    CreatedAt?: SortOrder
  }

  export type DiagnosesMinOrderByAggregateInput = {
    DiagnosisID?: SortOrder
    DepartmentID?: SortOrder
    DiagnosisName?: SortOrder
    CreatedAt?: SortOrder
  }

  export type DiagnosesSumOrderByAggregateInput = {
    DiagnosisID?: SortOrder
    DepartmentID?: SortOrder
  }

  export type AppointmentsListRelationFilter = {
    every?: AppointmentsWhereInput
    some?: AppointmentsWhereInput
    none?: AppointmentsWhereInput
  }

  export type AppointmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorsCountOrderByAggregateInput = {
    DoctorID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DepartmentID?: SortOrder
    ContactNumber?: SortOrder
    Email?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type DoctorsAvgOrderByAggregateInput = {
    DoctorID?: SortOrder
    DepartmentID?: SortOrder
  }

  export type DoctorsMaxOrderByAggregateInput = {
    DoctorID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DepartmentID?: SortOrder
    ContactNumber?: SortOrder
    Email?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type DoctorsMinOrderByAggregateInput = {
    DoctorID?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    DepartmentID?: SortOrder
    ContactNumber?: SortOrder
    Email?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type DoctorsSumOrderByAggregateInput = {
    DoctorID?: SortOrder
    DepartmentID?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CaseSheetsNullableScalarRelationFilter = {
    is?: CaseSheetsWhereInput | null
    isNot?: CaseSheetsWhereInput | null
  }

  export type AdmissionsNullableScalarRelationFilter = {
    is?: AdmissionsWhereInput | null
    isNot?: AdmissionsWhereInput | null
  }

  export type MedicalRecordsCountOrderByAggregateInput = {
    RecordID?: SortOrder
    PatientID?: SortOrder
    DiagnosisDetails?: SortOrder
    TreatmentPlan?: SortOrder
    medication?: SortOrder
    RecordDate?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    admission_no?: SortOrder
  }

  export type MedicalRecordsAvgOrderByAggregateInput = {
    admission_no?: SortOrder
  }

  export type MedicalRecordsMaxOrderByAggregateInput = {
    RecordID?: SortOrder
    PatientID?: SortOrder
    DiagnosisDetails?: SortOrder
    TreatmentPlan?: SortOrder
    medication?: SortOrder
    RecordDate?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    admission_no?: SortOrder
  }

  export type MedicalRecordsMinOrderByAggregateInput = {
    RecordID?: SortOrder
    PatientID?: SortOrder
    DiagnosisDetails?: SortOrder
    TreatmentPlan?: SortOrder
    medication?: SortOrder
    RecordDate?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    admission_no?: SortOrder
  }

  export type MedicalRecordsSumOrderByAggregateInput = {
    admission_no?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type MedicalRecordsScalarRelationFilter = {
    is?: MedicalRecordsWhereInput
    isNot?: MedicalRecordsWhereInput
  }

  export type CaseSheetsCountOrderByAggregateInput = {
    CaseSheetID?: SortOrder
    CaseSheet?: SortOrder
    RecordID?: SortOrder
  }

  export type CaseSheetsMaxOrderByAggregateInput = {
    CaseSheetID?: SortOrder
    CaseSheet?: SortOrder
    RecordID?: SortOrder
  }

  export type CaseSheetsMinOrderByAggregateInput = {
    CaseSheetID?: SortOrder
    CaseSheet?: SortOrder
    RecordID?: SortOrder
  }

  export type ServicesCountOrderByAggregateInput = {
    ServiceID?: SortOrder
    ServiceName?: SortOrder
    ServiceCode?: SortOrder
  }

  export type ServicesAvgOrderByAggregateInput = {
    ServiceID?: SortOrder
  }

  export type ServicesMaxOrderByAggregateInput = {
    ServiceID?: SortOrder
    ServiceName?: SortOrder
    ServiceCode?: SortOrder
  }

  export type ServicesMinOrderByAggregateInput = {
    ServiceID?: SortOrder
    ServiceName?: SortOrder
    ServiceCode?: SortOrder
  }

  export type ServicesSumOrderByAggregateInput = {
    ServiceID?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    UserID?: SortOrder
    Username?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    UserID?: SortOrder
    Username?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    UserID?: SortOrder
    Username?: SortOrder
    PasswordHash?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    UserID?: SortOrder
  }

  export type DepartmentsNullableScalarRelationFilter = {
    is?: DepartmentsWhereInput | null
    isNot?: DepartmentsWhereInput | null
  }

  export type BillsListRelationFilter = {
    every?: BillsWhereInput
    some?: BillsWhereInput
    none?: BillsWhereInput
  }

  export type MedicalRecordsListRelationFilter = {
    every?: MedicalRecordsWhereInput
    some?: MedicalRecordsWhereInput
    none?: MedicalRecordsWhereInput
  }

  export type BillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalRecordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientsCountOrderByAggregateInput = {
    PatientID?: SortOrder
    Name?: SortOrder
    Age?: SortOrder
    Gender?: SortOrder
    ContactNumber?: SortOrder
    Address?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Status?: SortOrder
    PatientRegistrationDate?: SortOrder
    Ptype?: SortOrder
    DepartmentID?: SortOrder
    Email?: SortOrder
    AlternateNumber?: SortOrder
    DOB?: SortOrder
    BloodGroup?: SortOrder
  }

  export type PatientsAvgOrderByAggregateInput = {
    DepartmentID?: SortOrder
  }

  export type PatientsMaxOrderByAggregateInput = {
    PatientID?: SortOrder
    Name?: SortOrder
    Age?: SortOrder
    Gender?: SortOrder
    ContactNumber?: SortOrder
    Address?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Status?: SortOrder
    PatientRegistrationDate?: SortOrder
    Ptype?: SortOrder
    DepartmentID?: SortOrder
    Email?: SortOrder
    AlternateNumber?: SortOrder
    DOB?: SortOrder
    BloodGroup?: SortOrder
  }

  export type PatientsMinOrderByAggregateInput = {
    PatientID?: SortOrder
    Name?: SortOrder
    Age?: SortOrder
    Gender?: SortOrder
    ContactNumber?: SortOrder
    Address?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    Status?: SortOrder
    PatientRegistrationDate?: SortOrder
    Ptype?: SortOrder
    DepartmentID?: SortOrder
    Email?: SortOrder
    AlternateNumber?: SortOrder
    DOB?: SortOrder
    BloodGroup?: SortOrder
  }

  export type PatientsSumOrderByAggregateInput = {
    DepartmentID?: SortOrder
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WardCountOrderByAggregateInput = {
    ward_id?: SortOrder
    ward_name?: SortOrder
    ward_type?: SortOrder
    nurse_station_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WardAvgOrderByAggregateInput = {
    ward_id?: SortOrder
  }

  export type WardMaxOrderByAggregateInput = {
    ward_id?: SortOrder
    ward_name?: SortOrder
    ward_type?: SortOrder
    nurse_station_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WardMinOrderByAggregateInput = {
    ward_id?: SortOrder
    ward_name?: SortOrder
    ward_type?: SortOrder
    nurse_station_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WardSumOrderByAggregateInput = {
    ward_id?: SortOrder
  }

  export type WardScalarRelationFilter = {
    is?: WardWhereInput
    isNot?: WardWhereInput
  }

  export type BedListRelationFilter = {
    every?: BedWhereInput
    some?: BedWhereInput
    none?: BedWhereInput
  }

  export type BedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    room_id?: SortOrder
    ward_id?: SortOrder
    room_number?: SortOrder
    floor_number?: SortOrder
    total_beds_in_room?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    room_id?: SortOrder
    ward_id?: SortOrder
    floor_number?: SortOrder
    total_beds_in_room?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    room_id?: SortOrder
    ward_id?: SortOrder
    room_number?: SortOrder
    floor_number?: SortOrder
    total_beds_in_room?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    room_id?: SortOrder
    ward_id?: SortOrder
    room_number?: SortOrder
    floor_number?: SortOrder
    total_beds_in_room?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    room_id?: SortOrder
    ward_id?: SortOrder
    floor_number?: SortOrder
    total_beds_in_room?: SortOrder
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type BedCountOrderByAggregateInput = {
    bed_id?: SortOrder
    room_id?: SortOrder
    bed_number?: SortOrder
    occupied_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BedAvgOrderByAggregateInput = {
    bed_id?: SortOrder
    room_id?: SortOrder
  }

  export type BedMaxOrderByAggregateInput = {
    bed_id?: SortOrder
    room_id?: SortOrder
    bed_number?: SortOrder
    occupied_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BedMinOrderByAggregateInput = {
    bed_id?: SortOrder
    room_id?: SortOrder
    bed_number?: SortOrder
    occupied_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BedSumOrderByAggregateInput = {
    bed_id?: SortOrder
    room_id?: SortOrder
  }

  export type BedScalarRelationFilter = {
    is?: BedWhereInput
    isNot?: BedWhereInput
  }

  export type DiagnosesScalarRelationFilter = {
    is?: DiagnosesWhereInput
    isNot?: DiagnosesWhereInput
  }

  export type DischargeReasonNullableScalarRelationFilter = {
    is?: DischargeReasonWhereInput | null
    isNot?: DischargeReasonWhereInput | null
  }

  export type AdmissionsCountOrderByAggregateInput = {
    admission_id?: SortOrder
    admission_no?: SortOrder
    PatientID?: SortOrder
    bed_id?: SortOrder
    diagnosis_id?: SortOrder
    admission_date?: SortOrder
    discharge_date?: SortOrder
    dischargeReasonId?: SortOrder
    treatment_plan?: SortOrder
    remarks?: SortOrder
  }

  export type AdmissionsAvgOrderByAggregateInput = {
    admission_id?: SortOrder
    admission_no?: SortOrder
    bed_id?: SortOrder
    diagnosis_id?: SortOrder
    dischargeReasonId?: SortOrder
  }

  export type AdmissionsMaxOrderByAggregateInput = {
    admission_id?: SortOrder
    admission_no?: SortOrder
    PatientID?: SortOrder
    bed_id?: SortOrder
    diagnosis_id?: SortOrder
    admission_date?: SortOrder
    discharge_date?: SortOrder
    dischargeReasonId?: SortOrder
    treatment_plan?: SortOrder
    remarks?: SortOrder
  }

  export type AdmissionsMinOrderByAggregateInput = {
    admission_id?: SortOrder
    admission_no?: SortOrder
    PatientID?: SortOrder
    bed_id?: SortOrder
    diagnosis_id?: SortOrder
    admission_date?: SortOrder
    discharge_date?: SortOrder
    dischargeReasonId?: SortOrder
    treatment_plan?: SortOrder
    remarks?: SortOrder
  }

  export type AdmissionsSumOrderByAggregateInput = {
    admission_id?: SortOrder
    admission_no?: SortOrder
    bed_id?: SortOrder
    diagnosis_id?: SortOrder
    dischargeReasonId?: SortOrder
  }

  export type DischargeReasonCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
  }

  export type DischargeReasonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DischargeReasonMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
  }

  export type DischargeReasonMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
  }

  export type DischargeReasonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoctorsCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorsCreateWithoutAppointmentsInput, DoctorsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorsWhereUniqueInput
  }

  export type PatientsCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientsCreateWithoutAppointmentsInput, PatientsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutAppointmentsInput
    connect?: PatientsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DoctorsUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorsCreateWithoutAppointmentsInput, DoctorsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorsCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorsUpsertWithoutAppointmentsInput
    connect?: DoctorsWhereUniqueInput
    update?: XOR<XOR<DoctorsUpdateToOneWithWhereWithoutAppointmentsInput, DoctorsUpdateWithoutAppointmentsInput>, DoctorsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientsUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientsCreateWithoutAppointmentsInput, PatientsUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientsUpsertWithoutAppointmentsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutAppointmentsInput, PatientsUpdateWithoutAppointmentsInput>, PatientsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PatientsCreateNestedOneWithoutBillsInput = {
    create?: XOR<PatientsCreateWithoutBillsInput, PatientsUncheckedCreateWithoutBillsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutBillsInput
    connect?: PatientsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PatientsUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<PatientsCreateWithoutBillsInput, PatientsUncheckedCreateWithoutBillsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutBillsInput
    upsert?: PatientsUpsertWithoutBillsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutBillsInput, PatientsUpdateWithoutBillsInput>, PatientsUncheckedUpdateWithoutBillsInput>
  }

  export type DiagnosesCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<DiagnosesCreateWithoutDepartmentsInput, DiagnosesUncheckedCreateWithoutDepartmentsInput> | DiagnosesCreateWithoutDepartmentsInput[] | DiagnosesUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutDepartmentsInput | DiagnosesCreateOrConnectWithoutDepartmentsInput[]
    createMany?: DiagnosesCreateManyDepartmentsInputEnvelope
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
  }

  export type DoctorsCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<DoctorsCreateWithoutDepartmentsInput, DoctorsUncheckedCreateWithoutDepartmentsInput> | DoctorsCreateWithoutDepartmentsInput[] | DoctorsUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DoctorsCreateOrConnectWithoutDepartmentsInput | DoctorsCreateOrConnectWithoutDepartmentsInput[]
    createMany?: DoctorsCreateManyDepartmentsInputEnvelope
    connect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
  }

  export type PatientsCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<PatientsCreateWithoutDepartmentInput, PatientsUncheckedCreateWithoutDepartmentInput> | PatientsCreateWithoutDepartmentInput[] | PatientsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutDepartmentInput | PatientsCreateOrConnectWithoutDepartmentInput[]
    createMany?: PatientsCreateManyDepartmentInputEnvelope
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
  }

  export type DiagnosesUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<DiagnosesCreateWithoutDepartmentsInput, DiagnosesUncheckedCreateWithoutDepartmentsInput> | DiagnosesCreateWithoutDepartmentsInput[] | DiagnosesUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutDepartmentsInput | DiagnosesCreateOrConnectWithoutDepartmentsInput[]
    createMany?: DiagnosesCreateManyDepartmentsInputEnvelope
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
  }

  export type DoctorsUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<DoctorsCreateWithoutDepartmentsInput, DoctorsUncheckedCreateWithoutDepartmentsInput> | DoctorsCreateWithoutDepartmentsInput[] | DoctorsUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DoctorsCreateOrConnectWithoutDepartmentsInput | DoctorsCreateOrConnectWithoutDepartmentsInput[]
    createMany?: DoctorsCreateManyDepartmentsInputEnvelope
    connect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
  }

  export type PatientsUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<PatientsCreateWithoutDepartmentInput, PatientsUncheckedCreateWithoutDepartmentInput> | PatientsCreateWithoutDepartmentInput[] | PatientsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutDepartmentInput | PatientsCreateOrConnectWithoutDepartmentInput[]
    createMany?: PatientsCreateManyDepartmentInputEnvelope
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
  }

  export type DiagnosesUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<DiagnosesCreateWithoutDepartmentsInput, DiagnosesUncheckedCreateWithoutDepartmentsInput> | DiagnosesCreateWithoutDepartmentsInput[] | DiagnosesUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutDepartmentsInput | DiagnosesCreateOrConnectWithoutDepartmentsInput[]
    upsert?: DiagnosesUpsertWithWhereUniqueWithoutDepartmentsInput | DiagnosesUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: DiagnosesCreateManyDepartmentsInputEnvelope
    set?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    disconnect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    delete?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    update?: DiagnosesUpdateWithWhereUniqueWithoutDepartmentsInput | DiagnosesUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: DiagnosesUpdateManyWithWhereWithoutDepartmentsInput | DiagnosesUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
  }

  export type DoctorsUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<DoctorsCreateWithoutDepartmentsInput, DoctorsUncheckedCreateWithoutDepartmentsInput> | DoctorsCreateWithoutDepartmentsInput[] | DoctorsUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DoctorsCreateOrConnectWithoutDepartmentsInput | DoctorsCreateOrConnectWithoutDepartmentsInput[]
    upsert?: DoctorsUpsertWithWhereUniqueWithoutDepartmentsInput | DoctorsUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: DoctorsCreateManyDepartmentsInputEnvelope
    set?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    disconnect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    delete?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    connect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    update?: DoctorsUpdateWithWhereUniqueWithoutDepartmentsInput | DoctorsUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: DoctorsUpdateManyWithWhereWithoutDepartmentsInput | DoctorsUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: DoctorsScalarWhereInput | DoctorsScalarWhereInput[]
  }

  export type PatientsUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<PatientsCreateWithoutDepartmentInput, PatientsUncheckedCreateWithoutDepartmentInput> | PatientsCreateWithoutDepartmentInput[] | PatientsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutDepartmentInput | PatientsCreateOrConnectWithoutDepartmentInput[]
    upsert?: PatientsUpsertWithWhereUniqueWithoutDepartmentInput | PatientsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: PatientsCreateManyDepartmentInputEnvelope
    set?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    disconnect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    delete?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    update?: PatientsUpdateWithWhereUniqueWithoutDepartmentInput | PatientsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: PatientsUpdateManyWithWhereWithoutDepartmentInput | PatientsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
  }

  export type DiagnosesUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<DiagnosesCreateWithoutDepartmentsInput, DiagnosesUncheckedCreateWithoutDepartmentsInput> | DiagnosesCreateWithoutDepartmentsInput[] | DiagnosesUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DiagnosesCreateOrConnectWithoutDepartmentsInput | DiagnosesCreateOrConnectWithoutDepartmentsInput[]
    upsert?: DiagnosesUpsertWithWhereUniqueWithoutDepartmentsInput | DiagnosesUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: DiagnosesCreateManyDepartmentsInputEnvelope
    set?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    disconnect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    delete?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    connect?: DiagnosesWhereUniqueInput | DiagnosesWhereUniqueInput[]
    update?: DiagnosesUpdateWithWhereUniqueWithoutDepartmentsInput | DiagnosesUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: DiagnosesUpdateManyWithWhereWithoutDepartmentsInput | DiagnosesUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
  }

  export type DoctorsUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<DoctorsCreateWithoutDepartmentsInput, DoctorsUncheckedCreateWithoutDepartmentsInput> | DoctorsCreateWithoutDepartmentsInput[] | DoctorsUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: DoctorsCreateOrConnectWithoutDepartmentsInput | DoctorsCreateOrConnectWithoutDepartmentsInput[]
    upsert?: DoctorsUpsertWithWhereUniqueWithoutDepartmentsInput | DoctorsUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: DoctorsCreateManyDepartmentsInputEnvelope
    set?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    disconnect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    delete?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    connect?: DoctorsWhereUniqueInput | DoctorsWhereUniqueInput[]
    update?: DoctorsUpdateWithWhereUniqueWithoutDepartmentsInput | DoctorsUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: DoctorsUpdateManyWithWhereWithoutDepartmentsInput | DoctorsUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: DoctorsScalarWhereInput | DoctorsScalarWhereInput[]
  }

  export type PatientsUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<PatientsCreateWithoutDepartmentInput, PatientsUncheckedCreateWithoutDepartmentInput> | PatientsCreateWithoutDepartmentInput[] | PatientsUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientsCreateOrConnectWithoutDepartmentInput | PatientsCreateOrConnectWithoutDepartmentInput[]
    upsert?: PatientsUpsertWithWhereUniqueWithoutDepartmentInput | PatientsUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: PatientsCreateManyDepartmentInputEnvelope
    set?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    disconnect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    delete?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    connect?: PatientsWhereUniqueInput | PatientsWhereUniqueInput[]
    update?: PatientsUpdateWithWhereUniqueWithoutDepartmentInput | PatientsUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: PatientsUpdateManyWithWhereWithoutDepartmentInput | PatientsUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
  }

  export type DepartmentsCreateNestedOneWithoutDiagnosesInput = {
    create?: XOR<DepartmentsCreateWithoutDiagnosesInput, DepartmentsUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutDiagnosesInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type AdmissionsCreateNestedManyWithoutDiagnosisInput = {
    create?: XOR<AdmissionsCreateWithoutDiagnosisInput, AdmissionsUncheckedCreateWithoutDiagnosisInput> | AdmissionsCreateWithoutDiagnosisInput[] | AdmissionsUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutDiagnosisInput | AdmissionsCreateOrConnectWithoutDiagnosisInput[]
    createMany?: AdmissionsCreateManyDiagnosisInputEnvelope
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
  }

  export type AdmissionsUncheckedCreateNestedManyWithoutDiagnosisInput = {
    create?: XOR<AdmissionsCreateWithoutDiagnosisInput, AdmissionsUncheckedCreateWithoutDiagnosisInput> | AdmissionsCreateWithoutDiagnosisInput[] | AdmissionsUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutDiagnosisInput | AdmissionsCreateOrConnectWithoutDiagnosisInput[]
    createMany?: AdmissionsCreateManyDiagnosisInputEnvelope
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
  }

  export type DepartmentsUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: XOR<DepartmentsCreateWithoutDiagnosesInput, DepartmentsUncheckedCreateWithoutDiagnosesInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutDiagnosesInput
    upsert?: DepartmentsUpsertWithoutDiagnosesInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutDiagnosesInput, DepartmentsUpdateWithoutDiagnosesInput>, DepartmentsUncheckedUpdateWithoutDiagnosesInput>
  }

  export type AdmissionsUpdateManyWithoutDiagnosisNestedInput = {
    create?: XOR<AdmissionsCreateWithoutDiagnosisInput, AdmissionsUncheckedCreateWithoutDiagnosisInput> | AdmissionsCreateWithoutDiagnosisInput[] | AdmissionsUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutDiagnosisInput | AdmissionsCreateOrConnectWithoutDiagnosisInput[]
    upsert?: AdmissionsUpsertWithWhereUniqueWithoutDiagnosisInput | AdmissionsUpsertWithWhereUniqueWithoutDiagnosisInput[]
    createMany?: AdmissionsCreateManyDiagnosisInputEnvelope
    set?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    disconnect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    delete?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    update?: AdmissionsUpdateWithWhereUniqueWithoutDiagnosisInput | AdmissionsUpdateWithWhereUniqueWithoutDiagnosisInput[]
    updateMany?: AdmissionsUpdateManyWithWhereWithoutDiagnosisInput | AdmissionsUpdateManyWithWhereWithoutDiagnosisInput[]
    deleteMany?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
  }

  export type AdmissionsUncheckedUpdateManyWithoutDiagnosisNestedInput = {
    create?: XOR<AdmissionsCreateWithoutDiagnosisInput, AdmissionsUncheckedCreateWithoutDiagnosisInput> | AdmissionsCreateWithoutDiagnosisInput[] | AdmissionsUncheckedCreateWithoutDiagnosisInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutDiagnosisInput | AdmissionsCreateOrConnectWithoutDiagnosisInput[]
    upsert?: AdmissionsUpsertWithWhereUniqueWithoutDiagnosisInput | AdmissionsUpsertWithWhereUniqueWithoutDiagnosisInput[]
    createMany?: AdmissionsCreateManyDiagnosisInputEnvelope
    set?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    disconnect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    delete?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    update?: AdmissionsUpdateWithWhereUniqueWithoutDiagnosisInput | AdmissionsUpdateWithWhereUniqueWithoutDiagnosisInput[]
    updateMany?: AdmissionsUpdateManyWithWhereWithoutDiagnosisInput | AdmissionsUpdateManyWithWhereWithoutDiagnosisInput[]
    deleteMany?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
  }

  export type AppointmentsCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<AppointmentsCreateWithoutDoctorsInput, AppointmentsUncheckedCreateWithoutDoctorsInput> | AppointmentsCreateWithoutDoctorsInput[] | AppointmentsUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutDoctorsInput | AppointmentsCreateOrConnectWithoutDoctorsInput[]
    createMany?: AppointmentsCreateManyDoctorsInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type DepartmentsCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<DepartmentsCreateWithoutDoctorsInput, DepartmentsUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutDoctorsInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type AppointmentsUncheckedCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<AppointmentsCreateWithoutDoctorsInput, AppointmentsUncheckedCreateWithoutDoctorsInput> | AppointmentsCreateWithoutDoctorsInput[] | AppointmentsUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutDoctorsInput | AppointmentsCreateOrConnectWithoutDoctorsInput[]
    createMany?: AppointmentsCreateManyDoctorsInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type AppointmentsUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<AppointmentsCreateWithoutDoctorsInput, AppointmentsUncheckedCreateWithoutDoctorsInput> | AppointmentsCreateWithoutDoctorsInput[] | AppointmentsUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutDoctorsInput | AppointmentsCreateOrConnectWithoutDoctorsInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutDoctorsInput | AppointmentsUpsertWithWhereUniqueWithoutDoctorsInput[]
    createMany?: AppointmentsCreateManyDoctorsInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutDoctorsInput | AppointmentsUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutDoctorsInput | AppointmentsUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type DepartmentsUpdateOneRequiredWithoutDoctorsNestedInput = {
    create?: XOR<DepartmentsCreateWithoutDoctorsInput, DepartmentsUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutDoctorsInput
    upsert?: DepartmentsUpsertWithoutDoctorsInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutDoctorsInput, DepartmentsUpdateWithoutDoctorsInput>, DepartmentsUncheckedUpdateWithoutDoctorsInput>
  }

  export type AppointmentsUncheckedUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<AppointmentsCreateWithoutDoctorsInput, AppointmentsUncheckedCreateWithoutDoctorsInput> | AppointmentsCreateWithoutDoctorsInput[] | AppointmentsUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutDoctorsInput | AppointmentsCreateOrConnectWithoutDoctorsInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutDoctorsInput | AppointmentsUpsertWithWhereUniqueWithoutDoctorsInput[]
    createMany?: AppointmentsCreateManyDoctorsInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutDoctorsInput | AppointmentsUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutDoctorsInput | AppointmentsUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutMedicalRecordsInput = {
    create?: XOR<PatientsCreateWithoutMedicalRecordsInput, PatientsUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutMedicalRecordsInput
    connect?: PatientsWhereUniqueInput
  }

  export type CaseSheetsCreateNestedOneWithoutMedicalRecordInput = {
    create?: XOR<CaseSheetsCreateWithoutMedicalRecordInput, CaseSheetsUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: CaseSheetsCreateOrConnectWithoutMedicalRecordInput
    connect?: CaseSheetsWhereUniqueInput
  }

  export type AdmissionsCreateNestedOneWithoutMedicalRecordsInput = {
    create?: XOR<AdmissionsCreateWithoutMedicalRecordsInput, AdmissionsUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: AdmissionsCreateOrConnectWithoutMedicalRecordsInput
    connect?: AdmissionsWhereUniqueInput
  }

  export type CaseSheetsUncheckedCreateNestedOneWithoutMedicalRecordInput = {
    create?: XOR<CaseSheetsCreateWithoutMedicalRecordInput, CaseSheetsUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: CaseSheetsCreateOrConnectWithoutMedicalRecordInput
    connect?: CaseSheetsWhereUniqueInput
  }

  export type PatientsUpdateOneRequiredWithoutMedicalRecordsNestedInput = {
    create?: XOR<PatientsCreateWithoutMedicalRecordsInput, PatientsUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutMedicalRecordsInput
    upsert?: PatientsUpsertWithoutMedicalRecordsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutMedicalRecordsInput, PatientsUpdateWithoutMedicalRecordsInput>, PatientsUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type CaseSheetsUpdateOneWithoutMedicalRecordNestedInput = {
    create?: XOR<CaseSheetsCreateWithoutMedicalRecordInput, CaseSheetsUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: CaseSheetsCreateOrConnectWithoutMedicalRecordInput
    upsert?: CaseSheetsUpsertWithoutMedicalRecordInput
    disconnect?: CaseSheetsWhereInput | boolean
    delete?: CaseSheetsWhereInput | boolean
    connect?: CaseSheetsWhereUniqueInput
    update?: XOR<XOR<CaseSheetsUpdateToOneWithWhereWithoutMedicalRecordInput, CaseSheetsUpdateWithoutMedicalRecordInput>, CaseSheetsUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type AdmissionsUpdateOneWithoutMedicalRecordsNestedInput = {
    create?: XOR<AdmissionsCreateWithoutMedicalRecordsInput, AdmissionsUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: AdmissionsCreateOrConnectWithoutMedicalRecordsInput
    upsert?: AdmissionsUpsertWithoutMedicalRecordsInput
    disconnect?: AdmissionsWhereInput | boolean
    delete?: AdmissionsWhereInput | boolean
    connect?: AdmissionsWhereUniqueInput
    update?: XOR<XOR<AdmissionsUpdateToOneWithWhereWithoutMedicalRecordsInput, AdmissionsUpdateWithoutMedicalRecordsInput>, AdmissionsUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CaseSheetsUncheckedUpdateOneWithoutMedicalRecordNestedInput = {
    create?: XOR<CaseSheetsCreateWithoutMedicalRecordInput, CaseSheetsUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: CaseSheetsCreateOrConnectWithoutMedicalRecordInput
    upsert?: CaseSheetsUpsertWithoutMedicalRecordInput
    disconnect?: CaseSheetsWhereInput | boolean
    delete?: CaseSheetsWhereInput | boolean
    connect?: CaseSheetsWhereUniqueInput
    update?: XOR<XOR<CaseSheetsUpdateToOneWithWhereWithoutMedicalRecordInput, CaseSheetsUpdateWithoutMedicalRecordInput>, CaseSheetsUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type MedicalRecordsCreateNestedOneWithoutCaseSheetsInput = {
    create?: XOR<MedicalRecordsCreateWithoutCaseSheetsInput, MedicalRecordsUncheckedCreateWithoutCaseSheetsInput>
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutCaseSheetsInput
    connect?: MedicalRecordsWhereUniqueInput
  }

  export type MedicalRecordsUpdateOneRequiredWithoutCaseSheetsNestedInput = {
    create?: XOR<MedicalRecordsCreateWithoutCaseSheetsInput, MedicalRecordsUncheckedCreateWithoutCaseSheetsInput>
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutCaseSheetsInput
    upsert?: MedicalRecordsUpsertWithoutCaseSheetsInput
    connect?: MedicalRecordsWhereUniqueInput
    update?: XOR<XOR<MedicalRecordsUpdateToOneWithWhereWithoutCaseSheetsInput, MedicalRecordsUpdateWithoutCaseSheetsInput>, MedicalRecordsUncheckedUpdateWithoutCaseSheetsInput>
  }

  export type DepartmentsCreateNestedOneWithoutPatientsInput = {
    create?: XOR<DepartmentsCreateWithoutPatientsInput, DepartmentsUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutPatientsInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type AppointmentsCreateNestedManyWithoutPatientsInput = {
    create?: XOR<AppointmentsCreateWithoutPatientsInput, AppointmentsUncheckedCreateWithoutPatientsInput> | AppointmentsCreateWithoutPatientsInput[] | AppointmentsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutPatientsInput | AppointmentsCreateOrConnectWithoutPatientsInput[]
    createMany?: AppointmentsCreateManyPatientsInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type BillsCreateNestedManyWithoutPatientsInput = {
    create?: XOR<BillsCreateWithoutPatientsInput, BillsUncheckedCreateWithoutPatientsInput> | BillsCreateWithoutPatientsInput[] | BillsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutPatientsInput | BillsCreateOrConnectWithoutPatientsInput[]
    createMany?: BillsCreateManyPatientsInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type MedicalRecordsCreateNestedManyWithoutPatientsInput = {
    create?: XOR<MedicalRecordsCreateWithoutPatientsInput, MedicalRecordsUncheckedCreateWithoutPatientsInput> | MedicalRecordsCreateWithoutPatientsInput[] | MedicalRecordsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutPatientsInput | MedicalRecordsCreateOrConnectWithoutPatientsInput[]
    createMany?: MedicalRecordsCreateManyPatientsInputEnvelope
    connect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
  }

  export type AdmissionsCreateNestedManyWithoutPatientInput = {
    create?: XOR<AdmissionsCreateWithoutPatientInput, AdmissionsUncheckedCreateWithoutPatientInput> | AdmissionsCreateWithoutPatientInput[] | AdmissionsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutPatientInput | AdmissionsCreateOrConnectWithoutPatientInput[]
    createMany?: AdmissionsCreateManyPatientInputEnvelope
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
  }

  export type AppointmentsUncheckedCreateNestedManyWithoutPatientsInput = {
    create?: XOR<AppointmentsCreateWithoutPatientsInput, AppointmentsUncheckedCreateWithoutPatientsInput> | AppointmentsCreateWithoutPatientsInput[] | AppointmentsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutPatientsInput | AppointmentsCreateOrConnectWithoutPatientsInput[]
    createMany?: AppointmentsCreateManyPatientsInputEnvelope
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
  }

  export type BillsUncheckedCreateNestedManyWithoutPatientsInput = {
    create?: XOR<BillsCreateWithoutPatientsInput, BillsUncheckedCreateWithoutPatientsInput> | BillsCreateWithoutPatientsInput[] | BillsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutPatientsInput | BillsCreateOrConnectWithoutPatientsInput[]
    createMany?: BillsCreateManyPatientsInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type MedicalRecordsUncheckedCreateNestedManyWithoutPatientsInput = {
    create?: XOR<MedicalRecordsCreateWithoutPatientsInput, MedicalRecordsUncheckedCreateWithoutPatientsInput> | MedicalRecordsCreateWithoutPatientsInput[] | MedicalRecordsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutPatientsInput | MedicalRecordsCreateOrConnectWithoutPatientsInput[]
    createMany?: MedicalRecordsCreateManyPatientsInputEnvelope
    connect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
  }

  export type AdmissionsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AdmissionsCreateWithoutPatientInput, AdmissionsUncheckedCreateWithoutPatientInput> | AdmissionsCreateWithoutPatientInput[] | AdmissionsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutPatientInput | AdmissionsCreateOrConnectWithoutPatientInput[]
    createMany?: AdmissionsCreateManyPatientInputEnvelope
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
  }

  export type DepartmentsUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<DepartmentsCreateWithoutPatientsInput, DepartmentsUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutPatientsInput
    upsert?: DepartmentsUpsertWithoutPatientsInput
    disconnect?: DepartmentsWhereInput | boolean
    delete?: DepartmentsWhereInput | boolean
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutPatientsInput, DepartmentsUpdateWithoutPatientsInput>, DepartmentsUncheckedUpdateWithoutPatientsInput>
  }

  export type AppointmentsUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<AppointmentsCreateWithoutPatientsInput, AppointmentsUncheckedCreateWithoutPatientsInput> | AppointmentsCreateWithoutPatientsInput[] | AppointmentsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutPatientsInput | AppointmentsCreateOrConnectWithoutPatientsInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutPatientsInput | AppointmentsUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: AppointmentsCreateManyPatientsInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutPatientsInput | AppointmentsUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutPatientsInput | AppointmentsUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type BillsUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<BillsCreateWithoutPatientsInput, BillsUncheckedCreateWithoutPatientsInput> | BillsCreateWithoutPatientsInput[] | BillsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutPatientsInput | BillsCreateOrConnectWithoutPatientsInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutPatientsInput | BillsUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: BillsCreateManyPatientsInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutPatientsInput | BillsUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutPatientsInput | BillsUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type MedicalRecordsUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<MedicalRecordsCreateWithoutPatientsInput, MedicalRecordsUncheckedCreateWithoutPatientsInput> | MedicalRecordsCreateWithoutPatientsInput[] | MedicalRecordsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutPatientsInput | MedicalRecordsCreateOrConnectWithoutPatientsInput[]
    upsert?: MedicalRecordsUpsertWithWhereUniqueWithoutPatientsInput | MedicalRecordsUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: MedicalRecordsCreateManyPatientsInputEnvelope
    set?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    disconnect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    delete?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    connect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    update?: MedicalRecordsUpdateWithWhereUniqueWithoutPatientsInput | MedicalRecordsUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: MedicalRecordsUpdateManyWithWhereWithoutPatientsInput | MedicalRecordsUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: MedicalRecordsScalarWhereInput | MedicalRecordsScalarWhereInput[]
  }

  export type AdmissionsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AdmissionsCreateWithoutPatientInput, AdmissionsUncheckedCreateWithoutPatientInput> | AdmissionsCreateWithoutPatientInput[] | AdmissionsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutPatientInput | AdmissionsCreateOrConnectWithoutPatientInput[]
    upsert?: AdmissionsUpsertWithWhereUniqueWithoutPatientInput | AdmissionsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AdmissionsCreateManyPatientInputEnvelope
    set?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    disconnect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    delete?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    update?: AdmissionsUpdateWithWhereUniqueWithoutPatientInput | AdmissionsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AdmissionsUpdateManyWithWhereWithoutPatientInput | AdmissionsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
  }

  export type AppointmentsUncheckedUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<AppointmentsCreateWithoutPatientsInput, AppointmentsUncheckedCreateWithoutPatientsInput> | AppointmentsCreateWithoutPatientsInput[] | AppointmentsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: AppointmentsCreateOrConnectWithoutPatientsInput | AppointmentsCreateOrConnectWithoutPatientsInput[]
    upsert?: AppointmentsUpsertWithWhereUniqueWithoutPatientsInput | AppointmentsUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: AppointmentsCreateManyPatientsInputEnvelope
    set?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    disconnect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    delete?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    connect?: AppointmentsWhereUniqueInput | AppointmentsWhereUniqueInput[]
    update?: AppointmentsUpdateWithWhereUniqueWithoutPatientsInput | AppointmentsUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: AppointmentsUpdateManyWithWhereWithoutPatientsInput | AppointmentsUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
  }

  export type BillsUncheckedUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<BillsCreateWithoutPatientsInput, BillsUncheckedCreateWithoutPatientsInput> | BillsCreateWithoutPatientsInput[] | BillsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutPatientsInput | BillsCreateOrConnectWithoutPatientsInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutPatientsInput | BillsUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: BillsCreateManyPatientsInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutPatientsInput | BillsUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutPatientsInput | BillsUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type MedicalRecordsUncheckedUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<MedicalRecordsCreateWithoutPatientsInput, MedicalRecordsUncheckedCreateWithoutPatientsInput> | MedicalRecordsCreateWithoutPatientsInput[] | MedicalRecordsUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutPatientsInput | MedicalRecordsCreateOrConnectWithoutPatientsInput[]
    upsert?: MedicalRecordsUpsertWithWhereUniqueWithoutPatientsInput | MedicalRecordsUpsertWithWhereUniqueWithoutPatientsInput[]
    createMany?: MedicalRecordsCreateManyPatientsInputEnvelope
    set?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    disconnect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    delete?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    connect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    update?: MedicalRecordsUpdateWithWhereUniqueWithoutPatientsInput | MedicalRecordsUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: MedicalRecordsUpdateManyWithWhereWithoutPatientsInput | MedicalRecordsUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: MedicalRecordsScalarWhereInput | MedicalRecordsScalarWhereInput[]
  }

  export type AdmissionsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AdmissionsCreateWithoutPatientInput, AdmissionsUncheckedCreateWithoutPatientInput> | AdmissionsCreateWithoutPatientInput[] | AdmissionsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutPatientInput | AdmissionsCreateOrConnectWithoutPatientInput[]
    upsert?: AdmissionsUpsertWithWhereUniqueWithoutPatientInput | AdmissionsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AdmissionsCreateManyPatientInputEnvelope
    set?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    disconnect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    delete?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    update?: AdmissionsUpdateWithWhereUniqueWithoutPatientInput | AdmissionsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AdmissionsUpdateManyWithWhereWithoutPatientInput | AdmissionsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutWardInput = {
    create?: XOR<RoomCreateWithoutWardInput, RoomUncheckedCreateWithoutWardInput> | RoomCreateWithoutWardInput[] | RoomUncheckedCreateWithoutWardInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutWardInput | RoomCreateOrConnectWithoutWardInput[]
    createMany?: RoomCreateManyWardInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutWardInput = {
    create?: XOR<RoomCreateWithoutWardInput, RoomUncheckedCreateWithoutWardInput> | RoomCreateWithoutWardInput[] | RoomUncheckedCreateWithoutWardInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutWardInput | RoomCreateOrConnectWithoutWardInput[]
    createMany?: RoomCreateManyWardInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type RoomUpdateManyWithoutWardNestedInput = {
    create?: XOR<RoomCreateWithoutWardInput, RoomUncheckedCreateWithoutWardInput> | RoomCreateWithoutWardInput[] | RoomUncheckedCreateWithoutWardInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutWardInput | RoomCreateOrConnectWithoutWardInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutWardInput | RoomUpsertWithWhereUniqueWithoutWardInput[]
    createMany?: RoomCreateManyWardInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutWardInput | RoomUpdateWithWhereUniqueWithoutWardInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutWardInput | RoomUpdateManyWithWhereWithoutWardInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutWardNestedInput = {
    create?: XOR<RoomCreateWithoutWardInput, RoomUncheckedCreateWithoutWardInput> | RoomCreateWithoutWardInput[] | RoomUncheckedCreateWithoutWardInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutWardInput | RoomCreateOrConnectWithoutWardInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutWardInput | RoomUpsertWithWhereUniqueWithoutWardInput[]
    createMany?: RoomCreateManyWardInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutWardInput | RoomUpdateWithWhereUniqueWithoutWardInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutWardInput | RoomUpdateManyWithWhereWithoutWardInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type WardCreateNestedOneWithoutRoomsInput = {
    create?: XOR<WardCreateWithoutRoomsInput, WardUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: WardCreateOrConnectWithoutRoomsInput
    connect?: WardWhereUniqueInput
  }

  export type BedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BedCreateWithoutRoomInput, BedUncheckedCreateWithoutRoomInput> | BedCreateWithoutRoomInput[] | BedUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BedCreateOrConnectWithoutRoomInput | BedCreateOrConnectWithoutRoomInput[]
    createMany?: BedCreateManyRoomInputEnvelope
    connect?: BedWhereUniqueInput | BedWhereUniqueInput[]
  }

  export type BedUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BedCreateWithoutRoomInput, BedUncheckedCreateWithoutRoomInput> | BedCreateWithoutRoomInput[] | BedUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BedCreateOrConnectWithoutRoomInput | BedCreateOrConnectWithoutRoomInput[]
    createMany?: BedCreateManyRoomInputEnvelope
    connect?: BedWhereUniqueInput | BedWhereUniqueInput[]
  }

  export type WardUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<WardCreateWithoutRoomsInput, WardUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: WardCreateOrConnectWithoutRoomsInput
    upsert?: WardUpsertWithoutRoomsInput
    connect?: WardWhereUniqueInput
    update?: XOR<XOR<WardUpdateToOneWithWhereWithoutRoomsInput, WardUpdateWithoutRoomsInput>, WardUncheckedUpdateWithoutRoomsInput>
  }

  export type BedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BedCreateWithoutRoomInput, BedUncheckedCreateWithoutRoomInput> | BedCreateWithoutRoomInput[] | BedUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BedCreateOrConnectWithoutRoomInput | BedCreateOrConnectWithoutRoomInput[]
    upsert?: BedUpsertWithWhereUniqueWithoutRoomInput | BedUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BedCreateManyRoomInputEnvelope
    set?: BedWhereUniqueInput | BedWhereUniqueInput[]
    disconnect?: BedWhereUniqueInput | BedWhereUniqueInput[]
    delete?: BedWhereUniqueInput | BedWhereUniqueInput[]
    connect?: BedWhereUniqueInput | BedWhereUniqueInput[]
    update?: BedUpdateWithWhereUniqueWithoutRoomInput | BedUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BedUpdateManyWithWhereWithoutRoomInput | BedUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BedScalarWhereInput | BedScalarWhereInput[]
  }

  export type BedUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BedCreateWithoutRoomInput, BedUncheckedCreateWithoutRoomInput> | BedCreateWithoutRoomInput[] | BedUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BedCreateOrConnectWithoutRoomInput | BedCreateOrConnectWithoutRoomInput[]
    upsert?: BedUpsertWithWhereUniqueWithoutRoomInput | BedUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BedCreateManyRoomInputEnvelope
    set?: BedWhereUniqueInput | BedWhereUniqueInput[]
    disconnect?: BedWhereUniqueInput | BedWhereUniqueInput[]
    delete?: BedWhereUniqueInput | BedWhereUniqueInput[]
    connect?: BedWhereUniqueInput | BedWhereUniqueInput[]
    update?: BedUpdateWithWhereUniqueWithoutRoomInput | BedUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BedUpdateManyWithWhereWithoutRoomInput | BedUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BedScalarWhereInput | BedScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutBedsInput = {
    create?: XOR<RoomCreateWithoutBedsInput, RoomUncheckedCreateWithoutBedsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBedsInput
    connect?: RoomWhereUniqueInput
  }

  export type AdmissionsCreateNestedManyWithoutBedInput = {
    create?: XOR<AdmissionsCreateWithoutBedInput, AdmissionsUncheckedCreateWithoutBedInput> | AdmissionsCreateWithoutBedInput[] | AdmissionsUncheckedCreateWithoutBedInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutBedInput | AdmissionsCreateOrConnectWithoutBedInput[]
    createMany?: AdmissionsCreateManyBedInputEnvelope
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
  }

  export type AdmissionsUncheckedCreateNestedManyWithoutBedInput = {
    create?: XOR<AdmissionsCreateWithoutBedInput, AdmissionsUncheckedCreateWithoutBedInput> | AdmissionsCreateWithoutBedInput[] | AdmissionsUncheckedCreateWithoutBedInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutBedInput | AdmissionsCreateOrConnectWithoutBedInput[]
    createMany?: AdmissionsCreateManyBedInputEnvelope
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
  }

  export type RoomUpdateOneRequiredWithoutBedsNestedInput = {
    create?: XOR<RoomCreateWithoutBedsInput, RoomUncheckedCreateWithoutBedsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBedsInput
    upsert?: RoomUpsertWithoutBedsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBedsInput, RoomUpdateWithoutBedsInput>, RoomUncheckedUpdateWithoutBedsInput>
  }

  export type AdmissionsUpdateManyWithoutBedNestedInput = {
    create?: XOR<AdmissionsCreateWithoutBedInput, AdmissionsUncheckedCreateWithoutBedInput> | AdmissionsCreateWithoutBedInput[] | AdmissionsUncheckedCreateWithoutBedInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutBedInput | AdmissionsCreateOrConnectWithoutBedInput[]
    upsert?: AdmissionsUpsertWithWhereUniqueWithoutBedInput | AdmissionsUpsertWithWhereUniqueWithoutBedInput[]
    createMany?: AdmissionsCreateManyBedInputEnvelope
    set?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    disconnect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    delete?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    update?: AdmissionsUpdateWithWhereUniqueWithoutBedInput | AdmissionsUpdateWithWhereUniqueWithoutBedInput[]
    updateMany?: AdmissionsUpdateManyWithWhereWithoutBedInput | AdmissionsUpdateManyWithWhereWithoutBedInput[]
    deleteMany?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
  }

  export type AdmissionsUncheckedUpdateManyWithoutBedNestedInput = {
    create?: XOR<AdmissionsCreateWithoutBedInput, AdmissionsUncheckedCreateWithoutBedInput> | AdmissionsCreateWithoutBedInput[] | AdmissionsUncheckedCreateWithoutBedInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutBedInput | AdmissionsCreateOrConnectWithoutBedInput[]
    upsert?: AdmissionsUpsertWithWhereUniqueWithoutBedInput | AdmissionsUpsertWithWhereUniqueWithoutBedInput[]
    createMany?: AdmissionsCreateManyBedInputEnvelope
    set?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    disconnect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    delete?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    update?: AdmissionsUpdateWithWhereUniqueWithoutBedInput | AdmissionsUpdateWithWhereUniqueWithoutBedInput[]
    updateMany?: AdmissionsUpdateManyWithWhereWithoutBedInput | AdmissionsUpdateManyWithWhereWithoutBedInput[]
    deleteMany?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
  }

  export type PatientsCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<PatientsCreateWithoutAdmissionsInput, PatientsUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutAdmissionsInput
    connect?: PatientsWhereUniqueInput
  }

  export type BedCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<BedCreateWithoutAdmissionsInput, BedUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: BedCreateOrConnectWithoutAdmissionsInput
    connect?: BedWhereUniqueInput
  }

  export type DiagnosesCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<DiagnosesCreateWithoutAdmissionsInput, DiagnosesUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: DiagnosesCreateOrConnectWithoutAdmissionsInput
    connect?: DiagnosesWhereUniqueInput
  }

  export type DischargeReasonCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<DischargeReasonCreateWithoutAdmissionsInput, DischargeReasonUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: DischargeReasonCreateOrConnectWithoutAdmissionsInput
    connect?: DischargeReasonWhereUniqueInput
  }

  export type MedicalRecordsCreateNestedManyWithoutAdmissionsInput = {
    create?: XOR<MedicalRecordsCreateWithoutAdmissionsInput, MedicalRecordsUncheckedCreateWithoutAdmissionsInput> | MedicalRecordsCreateWithoutAdmissionsInput[] | MedicalRecordsUncheckedCreateWithoutAdmissionsInput[]
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutAdmissionsInput | MedicalRecordsCreateOrConnectWithoutAdmissionsInput[]
    createMany?: MedicalRecordsCreateManyAdmissionsInputEnvelope
    connect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
  }

  export type MedicalRecordsUncheckedCreateNestedManyWithoutAdmissionsInput = {
    create?: XOR<MedicalRecordsCreateWithoutAdmissionsInput, MedicalRecordsUncheckedCreateWithoutAdmissionsInput> | MedicalRecordsCreateWithoutAdmissionsInput[] | MedicalRecordsUncheckedCreateWithoutAdmissionsInput[]
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutAdmissionsInput | MedicalRecordsCreateOrConnectWithoutAdmissionsInput[]
    createMany?: MedicalRecordsCreateManyAdmissionsInputEnvelope
    connect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
  }

  export type PatientsUpdateOneRequiredWithoutAdmissionsNestedInput = {
    create?: XOR<PatientsCreateWithoutAdmissionsInput, PatientsUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: PatientsCreateOrConnectWithoutAdmissionsInput
    upsert?: PatientsUpsertWithoutAdmissionsInput
    connect?: PatientsWhereUniqueInput
    update?: XOR<XOR<PatientsUpdateToOneWithWhereWithoutAdmissionsInput, PatientsUpdateWithoutAdmissionsInput>, PatientsUncheckedUpdateWithoutAdmissionsInput>
  }

  export type BedUpdateOneRequiredWithoutAdmissionsNestedInput = {
    create?: XOR<BedCreateWithoutAdmissionsInput, BedUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: BedCreateOrConnectWithoutAdmissionsInput
    upsert?: BedUpsertWithoutAdmissionsInput
    connect?: BedWhereUniqueInput
    update?: XOR<XOR<BedUpdateToOneWithWhereWithoutAdmissionsInput, BedUpdateWithoutAdmissionsInput>, BedUncheckedUpdateWithoutAdmissionsInput>
  }

  export type DiagnosesUpdateOneRequiredWithoutAdmissionsNestedInput = {
    create?: XOR<DiagnosesCreateWithoutAdmissionsInput, DiagnosesUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: DiagnosesCreateOrConnectWithoutAdmissionsInput
    upsert?: DiagnosesUpsertWithoutAdmissionsInput
    connect?: DiagnosesWhereUniqueInput
    update?: XOR<XOR<DiagnosesUpdateToOneWithWhereWithoutAdmissionsInput, DiagnosesUpdateWithoutAdmissionsInput>, DiagnosesUncheckedUpdateWithoutAdmissionsInput>
  }

  export type DischargeReasonUpdateOneWithoutAdmissionsNestedInput = {
    create?: XOR<DischargeReasonCreateWithoutAdmissionsInput, DischargeReasonUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: DischargeReasonCreateOrConnectWithoutAdmissionsInput
    upsert?: DischargeReasonUpsertWithoutAdmissionsInput
    disconnect?: DischargeReasonWhereInput | boolean
    delete?: DischargeReasonWhereInput | boolean
    connect?: DischargeReasonWhereUniqueInput
    update?: XOR<XOR<DischargeReasonUpdateToOneWithWhereWithoutAdmissionsInput, DischargeReasonUpdateWithoutAdmissionsInput>, DischargeReasonUncheckedUpdateWithoutAdmissionsInput>
  }

  export type MedicalRecordsUpdateManyWithoutAdmissionsNestedInput = {
    create?: XOR<MedicalRecordsCreateWithoutAdmissionsInput, MedicalRecordsUncheckedCreateWithoutAdmissionsInput> | MedicalRecordsCreateWithoutAdmissionsInput[] | MedicalRecordsUncheckedCreateWithoutAdmissionsInput[]
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutAdmissionsInput | MedicalRecordsCreateOrConnectWithoutAdmissionsInput[]
    upsert?: MedicalRecordsUpsertWithWhereUniqueWithoutAdmissionsInput | MedicalRecordsUpsertWithWhereUniqueWithoutAdmissionsInput[]
    createMany?: MedicalRecordsCreateManyAdmissionsInputEnvelope
    set?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    disconnect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    delete?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    connect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    update?: MedicalRecordsUpdateWithWhereUniqueWithoutAdmissionsInput | MedicalRecordsUpdateWithWhereUniqueWithoutAdmissionsInput[]
    updateMany?: MedicalRecordsUpdateManyWithWhereWithoutAdmissionsInput | MedicalRecordsUpdateManyWithWhereWithoutAdmissionsInput[]
    deleteMany?: MedicalRecordsScalarWhereInput | MedicalRecordsScalarWhereInput[]
  }

  export type MedicalRecordsUncheckedUpdateManyWithoutAdmissionsNestedInput = {
    create?: XOR<MedicalRecordsCreateWithoutAdmissionsInput, MedicalRecordsUncheckedCreateWithoutAdmissionsInput> | MedicalRecordsCreateWithoutAdmissionsInput[] | MedicalRecordsUncheckedCreateWithoutAdmissionsInput[]
    connectOrCreate?: MedicalRecordsCreateOrConnectWithoutAdmissionsInput | MedicalRecordsCreateOrConnectWithoutAdmissionsInput[]
    upsert?: MedicalRecordsUpsertWithWhereUniqueWithoutAdmissionsInput | MedicalRecordsUpsertWithWhereUniqueWithoutAdmissionsInput[]
    createMany?: MedicalRecordsCreateManyAdmissionsInputEnvelope
    set?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    disconnect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    delete?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    connect?: MedicalRecordsWhereUniqueInput | MedicalRecordsWhereUniqueInput[]
    update?: MedicalRecordsUpdateWithWhereUniqueWithoutAdmissionsInput | MedicalRecordsUpdateWithWhereUniqueWithoutAdmissionsInput[]
    updateMany?: MedicalRecordsUpdateManyWithWhereWithoutAdmissionsInput | MedicalRecordsUpdateManyWithWhereWithoutAdmissionsInput[]
    deleteMany?: MedicalRecordsScalarWhereInput | MedicalRecordsScalarWhereInput[]
  }

  export type AdmissionsCreateNestedManyWithoutDischargeReasonInput = {
    create?: XOR<AdmissionsCreateWithoutDischargeReasonInput, AdmissionsUncheckedCreateWithoutDischargeReasonInput> | AdmissionsCreateWithoutDischargeReasonInput[] | AdmissionsUncheckedCreateWithoutDischargeReasonInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutDischargeReasonInput | AdmissionsCreateOrConnectWithoutDischargeReasonInput[]
    createMany?: AdmissionsCreateManyDischargeReasonInputEnvelope
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
  }

  export type AdmissionsUncheckedCreateNestedManyWithoutDischargeReasonInput = {
    create?: XOR<AdmissionsCreateWithoutDischargeReasonInput, AdmissionsUncheckedCreateWithoutDischargeReasonInput> | AdmissionsCreateWithoutDischargeReasonInput[] | AdmissionsUncheckedCreateWithoutDischargeReasonInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutDischargeReasonInput | AdmissionsCreateOrConnectWithoutDischargeReasonInput[]
    createMany?: AdmissionsCreateManyDischargeReasonInputEnvelope
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
  }

  export type AdmissionsUpdateManyWithoutDischargeReasonNestedInput = {
    create?: XOR<AdmissionsCreateWithoutDischargeReasonInput, AdmissionsUncheckedCreateWithoutDischargeReasonInput> | AdmissionsCreateWithoutDischargeReasonInput[] | AdmissionsUncheckedCreateWithoutDischargeReasonInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutDischargeReasonInput | AdmissionsCreateOrConnectWithoutDischargeReasonInput[]
    upsert?: AdmissionsUpsertWithWhereUniqueWithoutDischargeReasonInput | AdmissionsUpsertWithWhereUniqueWithoutDischargeReasonInput[]
    createMany?: AdmissionsCreateManyDischargeReasonInputEnvelope
    set?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    disconnect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    delete?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    update?: AdmissionsUpdateWithWhereUniqueWithoutDischargeReasonInput | AdmissionsUpdateWithWhereUniqueWithoutDischargeReasonInput[]
    updateMany?: AdmissionsUpdateManyWithWhereWithoutDischargeReasonInput | AdmissionsUpdateManyWithWhereWithoutDischargeReasonInput[]
    deleteMany?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
  }

  export type AdmissionsUncheckedUpdateManyWithoutDischargeReasonNestedInput = {
    create?: XOR<AdmissionsCreateWithoutDischargeReasonInput, AdmissionsUncheckedCreateWithoutDischargeReasonInput> | AdmissionsCreateWithoutDischargeReasonInput[] | AdmissionsUncheckedCreateWithoutDischargeReasonInput[]
    connectOrCreate?: AdmissionsCreateOrConnectWithoutDischargeReasonInput | AdmissionsCreateOrConnectWithoutDischargeReasonInput[]
    upsert?: AdmissionsUpsertWithWhereUniqueWithoutDischargeReasonInput | AdmissionsUpsertWithWhereUniqueWithoutDischargeReasonInput[]
    createMany?: AdmissionsCreateManyDischargeReasonInputEnvelope
    set?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    disconnect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    delete?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    connect?: AdmissionsWhereUniqueInput | AdmissionsWhereUniqueInput[]
    update?: AdmissionsUpdateWithWhereUniqueWithoutDischargeReasonInput | AdmissionsUpdateWithWhereUniqueWithoutDischargeReasonInput[]
    updateMany?: AdmissionsUpdateManyWithWhereWithoutDischargeReasonInput | AdmissionsUpdateManyWithWhereWithoutDischargeReasonInput[]
    deleteMany?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DoctorsCreateWithoutAppointmentsInput = {
    FirstName: string
    LastName: string
    ContactNumber?: string | null
    Email?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Departments: DepartmentsCreateNestedOneWithoutDoctorsInput
  }

  export type DoctorsUncheckedCreateWithoutAppointmentsInput = {
    DoctorID?: number
    FirstName: string
    LastName: string
    DepartmentID: number
    ContactNumber?: string | null
    Email?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type DoctorsCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorsWhereUniqueInput
    create: XOR<DoctorsCreateWithoutAppointmentsInput, DoctorsUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientsCreateWithoutAppointmentsInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Department?: DepartmentsCreateNestedOneWithoutPatientsInput
    Bills?: BillsCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutAppointmentsInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    DepartmentID?: number | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Bills?: BillsUncheckedCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutAppointmentsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutAppointmentsInput, PatientsUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorsUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorsUpdateWithoutAppointmentsInput, DoctorsUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorsCreateWithoutAppointmentsInput, DoctorsUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorsWhereInput
  }

  export type DoctorsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorsWhereInput
    data: XOR<DoctorsUpdateWithoutAppointmentsInput, DoctorsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorsUpdateWithoutAppointmentsInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Departments?: DepartmentsUpdateOneRequiredWithoutDoctorsNestedInput
  }

  export type DoctorsUncheckedUpdateWithoutAppointmentsInput = {
    DoctorID?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    DepartmentID?: IntFieldUpdateOperationsInput | number
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientsUpsertWithoutAppointmentsInput = {
    update: XOR<PatientsUpdateWithoutAppointmentsInput, PatientsUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientsCreateWithoutAppointmentsInput, PatientsUncheckedCreateWithoutAppointmentsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutAppointmentsInput, PatientsUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientsUpdateWithoutAppointmentsInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentsUpdateOneWithoutPatientsNestedInput
    Bills?: BillsUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutAppointmentsInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Bills?: BillsUncheckedUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsCreateWithoutBillsInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Department?: DepartmentsCreateNestedOneWithoutPatientsInput
    Appointments?: AppointmentsCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutBillsInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    DepartmentID?: number | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutBillsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutBillsInput, PatientsUncheckedCreateWithoutBillsInput>
  }

  export type PatientsUpsertWithoutBillsInput = {
    update: XOR<PatientsUpdateWithoutBillsInput, PatientsUncheckedUpdateWithoutBillsInput>
    create: XOR<PatientsCreateWithoutBillsInput, PatientsUncheckedCreateWithoutBillsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutBillsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutBillsInput, PatientsUncheckedUpdateWithoutBillsInput>
  }

  export type PatientsUpdateWithoutBillsInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentsUpdateOneWithoutPatientsNestedInput
    Appointments?: AppointmentsUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutBillsInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentsUncheckedUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DiagnosesCreateWithoutDepartmentsInput = {
    DiagnosisName: string
    CreatedAt?: Date | string | null
    admissions?: AdmissionsCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesUncheckedCreateWithoutDepartmentsInput = {
    DiagnosisID?: number
    DiagnosisName: string
    CreatedAt?: Date | string | null
    admissions?: AdmissionsUncheckedCreateNestedManyWithoutDiagnosisInput
  }

  export type DiagnosesCreateOrConnectWithoutDepartmentsInput = {
    where: DiagnosesWhereUniqueInput
    create: XOR<DiagnosesCreateWithoutDepartmentsInput, DiagnosesUncheckedCreateWithoutDepartmentsInput>
  }

  export type DiagnosesCreateManyDepartmentsInputEnvelope = {
    data: DiagnosesCreateManyDepartmentsInput | DiagnosesCreateManyDepartmentsInput[]
  }

  export type DoctorsCreateWithoutDepartmentsInput = {
    FirstName: string
    LastName: string
    ContactNumber?: string | null
    Email?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Appointments?: AppointmentsCreateNestedManyWithoutDoctorsInput
  }

  export type DoctorsUncheckedCreateWithoutDepartmentsInput = {
    DoctorID?: number
    FirstName: string
    LastName: string
    ContactNumber?: string | null
    Email?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type DoctorsCreateOrConnectWithoutDepartmentsInput = {
    where: DoctorsWhereUniqueInput
    create: XOR<DoctorsCreateWithoutDepartmentsInput, DoctorsUncheckedCreateWithoutDepartmentsInput>
  }

  export type DoctorsCreateManyDepartmentsInputEnvelope = {
    data: DoctorsCreateManyDepartmentsInput | DoctorsCreateManyDepartmentsInput[]
  }

  export type PatientsCreateWithoutDepartmentInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Appointments?: AppointmentsCreateNestedManyWithoutPatientsInput
    Bills?: BillsCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutDepartmentInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutPatientsInput
    Bills?: BillsUncheckedCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutDepartmentInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutDepartmentInput, PatientsUncheckedCreateWithoutDepartmentInput>
  }

  export type PatientsCreateManyDepartmentInputEnvelope = {
    data: PatientsCreateManyDepartmentInput | PatientsCreateManyDepartmentInput[]
  }

  export type DiagnosesUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: DiagnosesWhereUniqueInput
    update: XOR<DiagnosesUpdateWithoutDepartmentsInput, DiagnosesUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<DiagnosesCreateWithoutDepartmentsInput, DiagnosesUncheckedCreateWithoutDepartmentsInput>
  }

  export type DiagnosesUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: DiagnosesWhereUniqueInput
    data: XOR<DiagnosesUpdateWithoutDepartmentsInput, DiagnosesUncheckedUpdateWithoutDepartmentsInput>
  }

  export type DiagnosesUpdateManyWithWhereWithoutDepartmentsInput = {
    where: DiagnosesScalarWhereInput
    data: XOR<DiagnosesUpdateManyMutationInput, DiagnosesUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type DiagnosesScalarWhereInput = {
    AND?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
    OR?: DiagnosesScalarWhereInput[]
    NOT?: DiagnosesScalarWhereInput | DiagnosesScalarWhereInput[]
    DiagnosisID?: IntFilter<"Diagnoses"> | number
    DepartmentID?: IntFilter<"Diagnoses"> | number
    DiagnosisName?: StringFilter<"Diagnoses"> | string
    CreatedAt?: DateTimeNullableFilter<"Diagnoses"> | Date | string | null
  }

  export type DoctorsUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: DoctorsWhereUniqueInput
    update: XOR<DoctorsUpdateWithoutDepartmentsInput, DoctorsUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<DoctorsCreateWithoutDepartmentsInput, DoctorsUncheckedCreateWithoutDepartmentsInput>
  }

  export type DoctorsUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: DoctorsWhereUniqueInput
    data: XOR<DoctorsUpdateWithoutDepartmentsInput, DoctorsUncheckedUpdateWithoutDepartmentsInput>
  }

  export type DoctorsUpdateManyWithWhereWithoutDepartmentsInput = {
    where: DoctorsScalarWhereInput
    data: XOR<DoctorsUpdateManyMutationInput, DoctorsUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type DoctorsScalarWhereInput = {
    AND?: DoctorsScalarWhereInput | DoctorsScalarWhereInput[]
    OR?: DoctorsScalarWhereInput[]
    NOT?: DoctorsScalarWhereInput | DoctorsScalarWhereInput[]
    DoctorID?: IntFilter<"Doctors"> | number
    FirstName?: StringFilter<"Doctors"> | string
    LastName?: StringFilter<"Doctors"> | string
    DepartmentID?: IntFilter<"Doctors"> | number
    ContactNumber?: StringNullableFilter<"Doctors"> | string | null
    Email?: StringNullableFilter<"Doctors"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Doctors"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Doctors"> | Date | string | null
  }

  export type PatientsUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: PatientsWhereUniqueInput
    update: XOR<PatientsUpdateWithoutDepartmentInput, PatientsUncheckedUpdateWithoutDepartmentInput>
    create: XOR<PatientsCreateWithoutDepartmentInput, PatientsUncheckedCreateWithoutDepartmentInput>
  }

  export type PatientsUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: PatientsWhereUniqueInput
    data: XOR<PatientsUpdateWithoutDepartmentInput, PatientsUncheckedUpdateWithoutDepartmentInput>
  }

  export type PatientsUpdateManyWithWhereWithoutDepartmentInput = {
    where: PatientsScalarWhereInput
    data: XOR<PatientsUpdateManyMutationInput, PatientsUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type PatientsScalarWhereInput = {
    AND?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
    OR?: PatientsScalarWhereInput[]
    NOT?: PatientsScalarWhereInput | PatientsScalarWhereInput[]
    PatientID?: StringFilter<"Patients"> | string
    Name?: StringFilter<"Patients"> | string
    Age?: StringFilter<"Patients"> | string
    Gender?: StringFilter<"Patients"> | string
    ContactNumber?: StringNullableFilter<"Patients"> | string | null
    Address?: StringNullableFilter<"Patients"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Patients"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Patients"> | Date | string | null
    Status?: StringNullableFilter<"Patients"> | string | null
    PatientRegistrationDate?: DateTimeFilter<"Patients"> | Date | string
    Ptype?: StringNullableFilter<"Patients"> | string | null
    DepartmentID?: IntNullableFilter<"Patients"> | number | null
    Email?: StringNullableFilter<"Patients"> | string | null
    AlternateNumber?: StringNullableFilter<"Patients"> | string | null
    DOB?: DateTimeNullableFilter<"Patients"> | Date | string | null
    BloodGroup?: StringNullableFilter<"Patients"> | string | null
  }

  export type DepartmentsCreateWithoutDiagnosesInput = {
    DepartmentName: string
    Doctors?: DoctorsCreateNestedManyWithoutDepartmentsInput
    Patients?: PatientsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateWithoutDiagnosesInput = {
    DepartmentID?: number
    DepartmentName: string
    Doctors?: DoctorsUncheckedCreateNestedManyWithoutDepartmentsInput
    Patients?: PatientsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsCreateOrConnectWithoutDiagnosesInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutDiagnosesInput, DepartmentsUncheckedCreateWithoutDiagnosesInput>
  }

  export type AdmissionsCreateWithoutDiagnosisInput = {
    admission_no: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    treatment_plan?: string | null
    remarks?: string | null
    patient: PatientsCreateNestedOneWithoutAdmissionsInput
    bed: BedCreateNestedOneWithoutAdmissionsInput
    dischargeReason?: DischargeReasonCreateNestedOneWithoutAdmissionsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsUncheckedCreateWithoutDiagnosisInput = {
    admission_id?: number
    admission_no: number
    PatientID: string
    bed_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsCreateOrConnectWithoutDiagnosisInput = {
    where: AdmissionsWhereUniqueInput
    create: XOR<AdmissionsCreateWithoutDiagnosisInput, AdmissionsUncheckedCreateWithoutDiagnosisInput>
  }

  export type AdmissionsCreateManyDiagnosisInputEnvelope = {
    data: AdmissionsCreateManyDiagnosisInput | AdmissionsCreateManyDiagnosisInput[]
  }

  export type DepartmentsUpsertWithoutDiagnosesInput = {
    update: XOR<DepartmentsUpdateWithoutDiagnosesInput, DepartmentsUncheckedUpdateWithoutDiagnosesInput>
    create: XOR<DepartmentsCreateWithoutDiagnosesInput, DepartmentsUncheckedCreateWithoutDiagnosesInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutDiagnosesInput, DepartmentsUncheckedUpdateWithoutDiagnosesInput>
  }

  export type DepartmentsUpdateWithoutDiagnosesInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Doctors?: DoctorsUpdateManyWithoutDepartmentsNestedInput
    Patients?: PatientsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutDiagnosesInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Doctors?: DoctorsUncheckedUpdateManyWithoutDepartmentsNestedInput
    Patients?: PatientsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type AdmissionsUpsertWithWhereUniqueWithoutDiagnosisInput = {
    where: AdmissionsWhereUniqueInput
    update: XOR<AdmissionsUpdateWithoutDiagnosisInput, AdmissionsUncheckedUpdateWithoutDiagnosisInput>
    create: XOR<AdmissionsCreateWithoutDiagnosisInput, AdmissionsUncheckedCreateWithoutDiagnosisInput>
  }

  export type AdmissionsUpdateWithWhereUniqueWithoutDiagnosisInput = {
    where: AdmissionsWhereUniqueInput
    data: XOR<AdmissionsUpdateWithoutDiagnosisInput, AdmissionsUncheckedUpdateWithoutDiagnosisInput>
  }

  export type AdmissionsUpdateManyWithWhereWithoutDiagnosisInput = {
    where: AdmissionsScalarWhereInput
    data: XOR<AdmissionsUpdateManyMutationInput, AdmissionsUncheckedUpdateManyWithoutDiagnosisInput>
  }

  export type AdmissionsScalarWhereInput = {
    AND?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
    OR?: AdmissionsScalarWhereInput[]
    NOT?: AdmissionsScalarWhereInput | AdmissionsScalarWhereInput[]
    admission_id?: IntFilter<"Admissions"> | number
    admission_no?: IntFilter<"Admissions"> | number
    PatientID?: StringFilter<"Admissions"> | string
    bed_id?: IntFilter<"Admissions"> | number
    diagnosis_id?: IntFilter<"Admissions"> | number
    admission_date?: DateTimeFilter<"Admissions"> | Date | string
    discharge_date?: DateTimeNullableFilter<"Admissions"> | Date | string | null
    dischargeReasonId?: IntNullableFilter<"Admissions"> | number | null
    treatment_plan?: StringNullableFilter<"Admissions"> | string | null
    remarks?: StringNullableFilter<"Admissions"> | string | null
  }

  export type AppointmentsCreateWithoutDoctorsInput = {
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Patients: PatientsCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateWithoutDoctorsInput = {
    AppointmentID?: number
    PatientID: string
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type AppointmentsCreateOrConnectWithoutDoctorsInput = {
    where: AppointmentsWhereUniqueInput
    create: XOR<AppointmentsCreateWithoutDoctorsInput, AppointmentsUncheckedCreateWithoutDoctorsInput>
  }

  export type AppointmentsCreateManyDoctorsInputEnvelope = {
    data: AppointmentsCreateManyDoctorsInput | AppointmentsCreateManyDoctorsInput[]
  }

  export type DepartmentsCreateWithoutDoctorsInput = {
    DepartmentName: string
    Diagnoses?: DiagnosesCreateNestedManyWithoutDepartmentsInput
    Patients?: PatientsCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateWithoutDoctorsInput = {
    DepartmentID?: number
    DepartmentName: string
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutDepartmentsInput
    Patients?: PatientsUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsCreateOrConnectWithoutDoctorsInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutDoctorsInput, DepartmentsUncheckedCreateWithoutDoctorsInput>
  }

  export type AppointmentsUpsertWithWhereUniqueWithoutDoctorsInput = {
    where: AppointmentsWhereUniqueInput
    update: XOR<AppointmentsUpdateWithoutDoctorsInput, AppointmentsUncheckedUpdateWithoutDoctorsInput>
    create: XOR<AppointmentsCreateWithoutDoctorsInput, AppointmentsUncheckedCreateWithoutDoctorsInput>
  }

  export type AppointmentsUpdateWithWhereUniqueWithoutDoctorsInput = {
    where: AppointmentsWhereUniqueInput
    data: XOR<AppointmentsUpdateWithoutDoctorsInput, AppointmentsUncheckedUpdateWithoutDoctorsInput>
  }

  export type AppointmentsUpdateManyWithWhereWithoutDoctorsInput = {
    where: AppointmentsScalarWhereInput
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyWithoutDoctorsInput>
  }

  export type AppointmentsScalarWhereInput = {
    AND?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
    OR?: AppointmentsScalarWhereInput[]
    NOT?: AppointmentsScalarWhereInput | AppointmentsScalarWhereInput[]
    AppointmentID?: IntFilter<"Appointments"> | number
    PatientID?: StringFilter<"Appointments"> | string
    DoctorID?: IntFilter<"Appointments"> | number
    AppointmentDate?: DateTimeFilter<"Appointments"> | Date | string
    Status?: StringNullableFilter<"Appointments"> | string | null
    Notes?: StringNullableFilter<"Appointments"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Appointments"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"Appointments"> | Date | string | null
  }

  export type DepartmentsUpsertWithoutDoctorsInput = {
    update: XOR<DepartmentsUpdateWithoutDoctorsInput, DepartmentsUncheckedUpdateWithoutDoctorsInput>
    create: XOR<DepartmentsCreateWithoutDoctorsInput, DepartmentsUncheckedCreateWithoutDoctorsInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutDoctorsInput, DepartmentsUncheckedUpdateWithoutDoctorsInput>
  }

  export type DepartmentsUpdateWithoutDoctorsInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Diagnoses?: DiagnosesUpdateManyWithoutDepartmentsNestedInput
    Patients?: PatientsUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutDoctorsInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutDepartmentsNestedInput
    Patients?: PatientsUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type PatientsCreateWithoutMedicalRecordsInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Department?: DepartmentsCreateNestedOneWithoutPatientsInput
    Appointments?: AppointmentsCreateNestedManyWithoutPatientsInput
    Bills?: BillsCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsCreateNestedManyWithoutPatientInput
  }

  export type PatientsUncheckedCreateWithoutMedicalRecordsInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    DepartmentID?: number | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutPatientsInput
    Bills?: BillsUncheckedCreateNestedManyWithoutPatientsInput
    Admissions?: AdmissionsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientsCreateOrConnectWithoutMedicalRecordsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutMedicalRecordsInput, PatientsUncheckedCreateWithoutMedicalRecordsInput>
  }

  export type CaseSheetsCreateWithoutMedicalRecordInput = {
    CaseSheetID?: string
    CaseSheet?: string | null
  }

  export type CaseSheetsUncheckedCreateWithoutMedicalRecordInput = {
    CaseSheetID?: string
    CaseSheet?: string | null
  }

  export type CaseSheetsCreateOrConnectWithoutMedicalRecordInput = {
    where: CaseSheetsWhereUniqueInput
    create: XOR<CaseSheetsCreateWithoutMedicalRecordInput, CaseSheetsUncheckedCreateWithoutMedicalRecordInput>
  }

  export type AdmissionsCreateWithoutMedicalRecordsInput = {
    admission_no: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    treatment_plan?: string | null
    remarks?: string | null
    patient: PatientsCreateNestedOneWithoutAdmissionsInput
    bed: BedCreateNestedOneWithoutAdmissionsInput
    diagnosis: DiagnosesCreateNestedOneWithoutAdmissionsInput
    dischargeReason?: DischargeReasonCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionsUncheckedCreateWithoutMedicalRecordsInput = {
    admission_id?: number
    admission_no: number
    PatientID: string
    bed_id: number
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
  }

  export type AdmissionsCreateOrConnectWithoutMedicalRecordsInput = {
    where: AdmissionsWhereUniqueInput
    create: XOR<AdmissionsCreateWithoutMedicalRecordsInput, AdmissionsUncheckedCreateWithoutMedicalRecordsInput>
  }

  export type PatientsUpsertWithoutMedicalRecordsInput = {
    update: XOR<PatientsUpdateWithoutMedicalRecordsInput, PatientsUncheckedUpdateWithoutMedicalRecordsInput>
    create: XOR<PatientsCreateWithoutMedicalRecordsInput, PatientsUncheckedCreateWithoutMedicalRecordsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutMedicalRecordsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutMedicalRecordsInput, PatientsUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type PatientsUpdateWithoutMedicalRecordsInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentsUpdateOneWithoutPatientsNestedInput
    Appointments?: AppointmentsUpdateManyWithoutPatientsNestedInput
    Bills?: BillsUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutMedicalRecordsInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentsUncheckedUpdateManyWithoutPatientsNestedInput
    Bills?: BillsUncheckedUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type CaseSheetsUpsertWithoutMedicalRecordInput = {
    update: XOR<CaseSheetsUpdateWithoutMedicalRecordInput, CaseSheetsUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<CaseSheetsCreateWithoutMedicalRecordInput, CaseSheetsUncheckedCreateWithoutMedicalRecordInput>
    where?: CaseSheetsWhereInput
  }

  export type CaseSheetsUpdateToOneWithWhereWithoutMedicalRecordInput = {
    where?: CaseSheetsWhereInput
    data: XOR<CaseSheetsUpdateWithoutMedicalRecordInput, CaseSheetsUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type CaseSheetsUpdateWithoutMedicalRecordInput = {
    CaseSheetID?: StringFieldUpdateOperationsInput | string
    CaseSheet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseSheetsUncheckedUpdateWithoutMedicalRecordInput = {
    CaseSheetID?: StringFieldUpdateOperationsInput | string
    CaseSheet?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdmissionsUpsertWithoutMedicalRecordsInput = {
    update: XOR<AdmissionsUpdateWithoutMedicalRecordsInput, AdmissionsUncheckedUpdateWithoutMedicalRecordsInput>
    create: XOR<AdmissionsCreateWithoutMedicalRecordsInput, AdmissionsUncheckedCreateWithoutMedicalRecordsInput>
    where?: AdmissionsWhereInput
  }

  export type AdmissionsUpdateToOneWithWhereWithoutMedicalRecordsInput = {
    where?: AdmissionsWhereInput
    data: XOR<AdmissionsUpdateWithoutMedicalRecordsInput, AdmissionsUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type AdmissionsUpdateWithoutMedicalRecordsInput = {
    admission_no?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientsUpdateOneRequiredWithoutAdmissionsNestedInput
    bed?: BedUpdateOneRequiredWithoutAdmissionsNestedInput
    diagnosis?: DiagnosesUpdateOneRequiredWithoutAdmissionsNestedInput
    dischargeReason?: DischargeReasonUpdateOneWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateWithoutMedicalRecordsInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    bed_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordsCreateWithoutCaseSheetsInput = {
    RecordID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Patients: PatientsCreateNestedOneWithoutMedicalRecordsInput
    Admissions?: AdmissionsCreateNestedOneWithoutMedicalRecordsInput
  }

  export type MedicalRecordsUncheckedCreateWithoutCaseSheetsInput = {
    RecordID: string
    PatientID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    admission_no?: number | null
  }

  export type MedicalRecordsCreateOrConnectWithoutCaseSheetsInput = {
    where: MedicalRecordsWhereUniqueInput
    create: XOR<MedicalRecordsCreateWithoutCaseSheetsInput, MedicalRecordsUncheckedCreateWithoutCaseSheetsInput>
  }

  export type MedicalRecordsUpsertWithoutCaseSheetsInput = {
    update: XOR<MedicalRecordsUpdateWithoutCaseSheetsInput, MedicalRecordsUncheckedUpdateWithoutCaseSheetsInput>
    create: XOR<MedicalRecordsCreateWithoutCaseSheetsInput, MedicalRecordsUncheckedCreateWithoutCaseSheetsInput>
    where?: MedicalRecordsWhereInput
  }

  export type MedicalRecordsUpdateToOneWithWhereWithoutCaseSheetsInput = {
    where?: MedicalRecordsWhereInput
    data: XOR<MedicalRecordsUpdateWithoutCaseSheetsInput, MedicalRecordsUncheckedUpdateWithoutCaseSheetsInput>
  }

  export type MedicalRecordsUpdateWithoutCaseSheetsInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Patients?: PatientsUpdateOneRequiredWithoutMedicalRecordsNestedInput
    Admissions?: AdmissionsUpdateOneWithoutMedicalRecordsNestedInput
  }

  export type MedicalRecordsUncheckedUpdateWithoutCaseSheetsInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    PatientID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admission_no?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepartmentsCreateWithoutPatientsInput = {
    DepartmentName: string
    Diagnoses?: DiagnosesCreateNestedManyWithoutDepartmentsInput
    Doctors?: DoctorsCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsUncheckedCreateWithoutPatientsInput = {
    DepartmentID?: number
    DepartmentName: string
    Diagnoses?: DiagnosesUncheckedCreateNestedManyWithoutDepartmentsInput
    Doctors?: DoctorsUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsCreateOrConnectWithoutPatientsInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutPatientsInput, DepartmentsUncheckedCreateWithoutPatientsInput>
  }

  export type AppointmentsCreateWithoutPatientsInput = {
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Doctors: DoctorsCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentsUncheckedCreateWithoutPatientsInput = {
    AppointmentID?: number
    DoctorID: number
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type AppointmentsCreateOrConnectWithoutPatientsInput = {
    where: AppointmentsWhereUniqueInput
    create: XOR<AppointmentsCreateWithoutPatientsInput, AppointmentsUncheckedCreateWithoutPatientsInput>
  }

  export type AppointmentsCreateManyPatientsInputEnvelope = {
    data: AppointmentsCreateManyPatientsInput | AppointmentsCreateManyPatientsInput[]
  }

  export type BillsCreateWithoutPatientsInput = {
    TotalAmount: Decimal | DecimalJsLike | number | string
    PaymentStatus?: string | null
    CreatedAt?: Date | string | null
  }

  export type BillsUncheckedCreateWithoutPatientsInput = {
    BillID?: number
    TotalAmount: Decimal | DecimalJsLike | number | string
    PaymentStatus?: string | null
    CreatedAt?: Date | string | null
  }

  export type BillsCreateOrConnectWithoutPatientsInput = {
    where: BillsWhereUniqueInput
    create: XOR<BillsCreateWithoutPatientsInput, BillsUncheckedCreateWithoutPatientsInput>
  }

  export type BillsCreateManyPatientsInputEnvelope = {
    data: BillsCreateManyPatientsInput | BillsCreateManyPatientsInput[]
  }

  export type MedicalRecordsCreateWithoutPatientsInput = {
    RecordID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    CaseSheets?: CaseSheetsCreateNestedOneWithoutMedicalRecordInput
    Admissions?: AdmissionsCreateNestedOneWithoutMedicalRecordsInput
  }

  export type MedicalRecordsUncheckedCreateWithoutPatientsInput = {
    RecordID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    admission_no?: number | null
    CaseSheets?: CaseSheetsUncheckedCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordsCreateOrConnectWithoutPatientsInput = {
    where: MedicalRecordsWhereUniqueInput
    create: XOR<MedicalRecordsCreateWithoutPatientsInput, MedicalRecordsUncheckedCreateWithoutPatientsInput>
  }

  export type MedicalRecordsCreateManyPatientsInputEnvelope = {
    data: MedicalRecordsCreateManyPatientsInput | MedicalRecordsCreateManyPatientsInput[]
  }

  export type AdmissionsCreateWithoutPatientInput = {
    admission_no: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    treatment_plan?: string | null
    remarks?: string | null
    bed: BedCreateNestedOneWithoutAdmissionsInput
    diagnosis: DiagnosesCreateNestedOneWithoutAdmissionsInput
    dischargeReason?: DischargeReasonCreateNestedOneWithoutAdmissionsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsUncheckedCreateWithoutPatientInput = {
    admission_id?: number
    admission_no: number
    bed_id: number
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsCreateOrConnectWithoutPatientInput = {
    where: AdmissionsWhereUniqueInput
    create: XOR<AdmissionsCreateWithoutPatientInput, AdmissionsUncheckedCreateWithoutPatientInput>
  }

  export type AdmissionsCreateManyPatientInputEnvelope = {
    data: AdmissionsCreateManyPatientInput | AdmissionsCreateManyPatientInput[]
  }

  export type DepartmentsUpsertWithoutPatientsInput = {
    update: XOR<DepartmentsUpdateWithoutPatientsInput, DepartmentsUncheckedUpdateWithoutPatientsInput>
    create: XOR<DepartmentsCreateWithoutPatientsInput, DepartmentsUncheckedCreateWithoutPatientsInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutPatientsInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutPatientsInput, DepartmentsUncheckedUpdateWithoutPatientsInput>
  }

  export type DepartmentsUpdateWithoutPatientsInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Diagnoses?: DiagnosesUpdateManyWithoutDepartmentsNestedInput
    Doctors?: DoctorsUpdateManyWithoutDepartmentsNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutPatientsInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Diagnoses?: DiagnosesUncheckedUpdateManyWithoutDepartmentsNestedInput
    Doctors?: DoctorsUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type AppointmentsUpsertWithWhereUniqueWithoutPatientsInput = {
    where: AppointmentsWhereUniqueInput
    update: XOR<AppointmentsUpdateWithoutPatientsInput, AppointmentsUncheckedUpdateWithoutPatientsInput>
    create: XOR<AppointmentsCreateWithoutPatientsInput, AppointmentsUncheckedCreateWithoutPatientsInput>
  }

  export type AppointmentsUpdateWithWhereUniqueWithoutPatientsInput = {
    where: AppointmentsWhereUniqueInput
    data: XOR<AppointmentsUpdateWithoutPatientsInput, AppointmentsUncheckedUpdateWithoutPatientsInput>
  }

  export type AppointmentsUpdateManyWithWhereWithoutPatientsInput = {
    where: AppointmentsScalarWhereInput
    data: XOR<AppointmentsUpdateManyMutationInput, AppointmentsUncheckedUpdateManyWithoutPatientsInput>
  }

  export type BillsUpsertWithWhereUniqueWithoutPatientsInput = {
    where: BillsWhereUniqueInput
    update: XOR<BillsUpdateWithoutPatientsInput, BillsUncheckedUpdateWithoutPatientsInput>
    create: XOR<BillsCreateWithoutPatientsInput, BillsUncheckedCreateWithoutPatientsInput>
  }

  export type BillsUpdateWithWhereUniqueWithoutPatientsInput = {
    where: BillsWhereUniqueInput
    data: XOR<BillsUpdateWithoutPatientsInput, BillsUncheckedUpdateWithoutPatientsInput>
  }

  export type BillsUpdateManyWithWhereWithoutPatientsInput = {
    where: BillsScalarWhereInput
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyWithoutPatientsInput>
  }

  export type BillsScalarWhereInput = {
    AND?: BillsScalarWhereInput | BillsScalarWhereInput[]
    OR?: BillsScalarWhereInput[]
    NOT?: BillsScalarWhereInput | BillsScalarWhereInput[]
    BillID?: IntFilter<"Bills"> | number
    PatientID?: StringFilter<"Bills"> | string
    TotalAmount?: DecimalFilter<"Bills"> | Decimal | DecimalJsLike | number | string
    PaymentStatus?: StringNullableFilter<"Bills"> | string | null
    CreatedAt?: DateTimeNullableFilter<"Bills"> | Date | string | null
  }

  export type MedicalRecordsUpsertWithWhereUniqueWithoutPatientsInput = {
    where: MedicalRecordsWhereUniqueInput
    update: XOR<MedicalRecordsUpdateWithoutPatientsInput, MedicalRecordsUncheckedUpdateWithoutPatientsInput>
    create: XOR<MedicalRecordsCreateWithoutPatientsInput, MedicalRecordsUncheckedCreateWithoutPatientsInput>
  }

  export type MedicalRecordsUpdateWithWhereUniqueWithoutPatientsInput = {
    where: MedicalRecordsWhereUniqueInput
    data: XOR<MedicalRecordsUpdateWithoutPatientsInput, MedicalRecordsUncheckedUpdateWithoutPatientsInput>
  }

  export type MedicalRecordsUpdateManyWithWhereWithoutPatientsInput = {
    where: MedicalRecordsScalarWhereInput
    data: XOR<MedicalRecordsUpdateManyMutationInput, MedicalRecordsUncheckedUpdateManyWithoutPatientsInput>
  }

  export type MedicalRecordsScalarWhereInput = {
    AND?: MedicalRecordsScalarWhereInput | MedicalRecordsScalarWhereInput[]
    OR?: MedicalRecordsScalarWhereInput[]
    NOT?: MedicalRecordsScalarWhereInput | MedicalRecordsScalarWhereInput[]
    RecordID?: StringFilter<"MedicalRecords"> | string
    PatientID?: StringFilter<"MedicalRecords"> | string
    DiagnosisDetails?: StringNullableFilter<"MedicalRecords"> | string | null
    TreatmentPlan?: StringNullableFilter<"MedicalRecords"> | string | null
    medication?: StringNullableFilter<"MedicalRecords"> | string | null
    RecordDate?: DateTimeFilter<"MedicalRecords"> | Date | string
    CreatedAt?: DateTimeNullableFilter<"MedicalRecords"> | Date | string | null
    UpdatedAt?: DateTimeNullableFilter<"MedicalRecords"> | Date | string | null
    admission_no?: IntNullableFilter<"MedicalRecords"> | number | null
  }

  export type AdmissionsUpsertWithWhereUniqueWithoutPatientInput = {
    where: AdmissionsWhereUniqueInput
    update: XOR<AdmissionsUpdateWithoutPatientInput, AdmissionsUncheckedUpdateWithoutPatientInput>
    create: XOR<AdmissionsCreateWithoutPatientInput, AdmissionsUncheckedCreateWithoutPatientInput>
  }

  export type AdmissionsUpdateWithWhereUniqueWithoutPatientInput = {
    where: AdmissionsWhereUniqueInput
    data: XOR<AdmissionsUpdateWithoutPatientInput, AdmissionsUncheckedUpdateWithoutPatientInput>
  }

  export type AdmissionsUpdateManyWithWhereWithoutPatientInput = {
    where: AdmissionsScalarWhereInput
    data: XOR<AdmissionsUpdateManyMutationInput, AdmissionsUncheckedUpdateManyWithoutPatientInput>
  }

  export type RoomCreateWithoutWardInput = {
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at?: Date | string
    updated_at?: Date | string
    beds?: BedCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutWardInput = {
    room_id?: number
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at?: Date | string
    updated_at?: Date | string
    beds?: BedUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutWardInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutWardInput, RoomUncheckedCreateWithoutWardInput>
  }

  export type RoomCreateManyWardInputEnvelope = {
    data: RoomCreateManyWardInput | RoomCreateManyWardInput[]
  }

  export type RoomUpsertWithWhereUniqueWithoutWardInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutWardInput, RoomUncheckedUpdateWithoutWardInput>
    create: XOR<RoomCreateWithoutWardInput, RoomUncheckedCreateWithoutWardInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutWardInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutWardInput, RoomUncheckedUpdateWithoutWardInput>
  }

  export type RoomUpdateManyWithWhereWithoutWardInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutWardInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    room_id?: IntFilter<"Room"> | number
    ward_id?: IntFilter<"Room"> | number
    room_number?: StringFilter<"Room"> | string
    floor_number?: IntFilter<"Room"> | number
    total_beds_in_room?: IntFilter<"Room"> | number
    created_at?: DateTimeFilter<"Room"> | Date | string
    updated_at?: DateTimeFilter<"Room"> | Date | string
  }

  export type WardCreateWithoutRoomsInput = {
    ward_name: string
    ward_type: string
    nurse_station_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WardUncheckedCreateWithoutRoomsInput = {
    ward_id?: number
    ward_name: string
    ward_type: string
    nurse_station_number?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type WardCreateOrConnectWithoutRoomsInput = {
    where: WardWhereUniqueInput
    create: XOR<WardCreateWithoutRoomsInput, WardUncheckedCreateWithoutRoomsInput>
  }

  export type BedCreateWithoutRoomInput = {
    bed_number: string
    occupied_status?: string
    created_at?: Date | string
    updated_at?: Date | string
    Admissions?: AdmissionsCreateNestedManyWithoutBedInput
  }

  export type BedUncheckedCreateWithoutRoomInput = {
    bed_id?: number
    bed_number: string
    occupied_status?: string
    created_at?: Date | string
    updated_at?: Date | string
    Admissions?: AdmissionsUncheckedCreateNestedManyWithoutBedInput
  }

  export type BedCreateOrConnectWithoutRoomInput = {
    where: BedWhereUniqueInput
    create: XOR<BedCreateWithoutRoomInput, BedUncheckedCreateWithoutRoomInput>
  }

  export type BedCreateManyRoomInputEnvelope = {
    data: BedCreateManyRoomInput | BedCreateManyRoomInput[]
  }

  export type WardUpsertWithoutRoomsInput = {
    update: XOR<WardUpdateWithoutRoomsInput, WardUncheckedUpdateWithoutRoomsInput>
    create: XOR<WardCreateWithoutRoomsInput, WardUncheckedCreateWithoutRoomsInput>
    where?: WardWhereInput
  }

  export type WardUpdateToOneWithWhereWithoutRoomsInput = {
    where?: WardWhereInput
    data: XOR<WardUpdateWithoutRoomsInput, WardUncheckedUpdateWithoutRoomsInput>
  }

  export type WardUpdateWithoutRoomsInput = {
    ward_name?: StringFieldUpdateOperationsInput | string
    ward_type?: StringFieldUpdateOperationsInput | string
    nurse_station_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WardUncheckedUpdateWithoutRoomsInput = {
    ward_id?: IntFieldUpdateOperationsInput | number
    ward_name?: StringFieldUpdateOperationsInput | string
    ward_type?: StringFieldUpdateOperationsInput | string
    nurse_station_number?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BedUpsertWithWhereUniqueWithoutRoomInput = {
    where: BedWhereUniqueInput
    update: XOR<BedUpdateWithoutRoomInput, BedUncheckedUpdateWithoutRoomInput>
    create: XOR<BedCreateWithoutRoomInput, BedUncheckedCreateWithoutRoomInput>
  }

  export type BedUpdateWithWhereUniqueWithoutRoomInput = {
    where: BedWhereUniqueInput
    data: XOR<BedUpdateWithoutRoomInput, BedUncheckedUpdateWithoutRoomInput>
  }

  export type BedUpdateManyWithWhereWithoutRoomInput = {
    where: BedScalarWhereInput
    data: XOR<BedUpdateManyMutationInput, BedUncheckedUpdateManyWithoutRoomInput>
  }

  export type BedScalarWhereInput = {
    AND?: BedScalarWhereInput | BedScalarWhereInput[]
    OR?: BedScalarWhereInput[]
    NOT?: BedScalarWhereInput | BedScalarWhereInput[]
    bed_id?: IntFilter<"Bed"> | number
    room_id?: IntFilter<"Bed"> | number
    bed_number?: StringFilter<"Bed"> | string
    occupied_status?: StringFilter<"Bed"> | string
    created_at?: DateTimeFilter<"Bed"> | Date | string
    updated_at?: DateTimeFilter<"Bed"> | Date | string
  }

  export type RoomCreateWithoutBedsInput = {
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at?: Date | string
    updated_at?: Date | string
    ward: WardCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutBedsInput = {
    room_id?: number
    ward_id: number
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoomCreateOrConnectWithoutBedsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBedsInput, RoomUncheckedCreateWithoutBedsInput>
  }

  export type AdmissionsCreateWithoutBedInput = {
    admission_no: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    treatment_plan?: string | null
    remarks?: string | null
    patient: PatientsCreateNestedOneWithoutAdmissionsInput
    diagnosis: DiagnosesCreateNestedOneWithoutAdmissionsInput
    dischargeReason?: DischargeReasonCreateNestedOneWithoutAdmissionsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsUncheckedCreateWithoutBedInput = {
    admission_id?: number
    admission_no: number
    PatientID: string
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsCreateOrConnectWithoutBedInput = {
    where: AdmissionsWhereUniqueInput
    create: XOR<AdmissionsCreateWithoutBedInput, AdmissionsUncheckedCreateWithoutBedInput>
  }

  export type AdmissionsCreateManyBedInputEnvelope = {
    data: AdmissionsCreateManyBedInput | AdmissionsCreateManyBedInput[]
  }

  export type RoomUpsertWithoutBedsInput = {
    update: XOR<RoomUpdateWithoutBedsInput, RoomUncheckedUpdateWithoutBedsInput>
    create: XOR<RoomCreateWithoutBedsInput, RoomUncheckedCreateWithoutBedsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBedsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBedsInput, RoomUncheckedUpdateWithoutBedsInput>
  }

  export type RoomUpdateWithoutBedsInput = {
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ward?: WardUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutBedsInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    ward_id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionsUpsertWithWhereUniqueWithoutBedInput = {
    where: AdmissionsWhereUniqueInput
    update: XOR<AdmissionsUpdateWithoutBedInput, AdmissionsUncheckedUpdateWithoutBedInput>
    create: XOR<AdmissionsCreateWithoutBedInput, AdmissionsUncheckedCreateWithoutBedInput>
  }

  export type AdmissionsUpdateWithWhereUniqueWithoutBedInput = {
    where: AdmissionsWhereUniqueInput
    data: XOR<AdmissionsUpdateWithoutBedInput, AdmissionsUncheckedUpdateWithoutBedInput>
  }

  export type AdmissionsUpdateManyWithWhereWithoutBedInput = {
    where: AdmissionsScalarWhereInput
    data: XOR<AdmissionsUpdateManyMutationInput, AdmissionsUncheckedUpdateManyWithoutBedInput>
  }

  export type PatientsCreateWithoutAdmissionsInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Department?: DepartmentsCreateNestedOneWithoutPatientsInput
    Appointments?: AppointmentsCreateNestedManyWithoutPatientsInput
    Bills?: BillsCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutPatientsInput
  }

  export type PatientsUncheckedCreateWithoutAdmissionsInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    DepartmentID?: number | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
    Appointments?: AppointmentsUncheckedCreateNestedManyWithoutPatientsInput
    Bills?: BillsUncheckedCreateNestedManyWithoutPatientsInput
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutPatientsInput
  }

  export type PatientsCreateOrConnectWithoutAdmissionsInput = {
    where: PatientsWhereUniqueInput
    create: XOR<PatientsCreateWithoutAdmissionsInput, PatientsUncheckedCreateWithoutAdmissionsInput>
  }

  export type BedCreateWithoutAdmissionsInput = {
    bed_number: string
    occupied_status?: string
    created_at?: Date | string
    updated_at?: Date | string
    room: RoomCreateNestedOneWithoutBedsInput
  }

  export type BedUncheckedCreateWithoutAdmissionsInput = {
    bed_id?: number
    room_id: number
    bed_number: string
    occupied_status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BedCreateOrConnectWithoutAdmissionsInput = {
    where: BedWhereUniqueInput
    create: XOR<BedCreateWithoutAdmissionsInput, BedUncheckedCreateWithoutAdmissionsInput>
  }

  export type DiagnosesCreateWithoutAdmissionsInput = {
    DiagnosisName: string
    CreatedAt?: Date | string | null
    Departments: DepartmentsCreateNestedOneWithoutDiagnosesInput
  }

  export type DiagnosesUncheckedCreateWithoutAdmissionsInput = {
    DiagnosisID?: number
    DepartmentID: number
    DiagnosisName: string
    CreatedAt?: Date | string | null
  }

  export type DiagnosesCreateOrConnectWithoutAdmissionsInput = {
    where: DiagnosesWhereUniqueInput
    create: XOR<DiagnosesCreateWithoutAdmissionsInput, DiagnosesUncheckedCreateWithoutAdmissionsInput>
  }

  export type DischargeReasonCreateWithoutAdmissionsInput = {
    reason: string
  }

  export type DischargeReasonUncheckedCreateWithoutAdmissionsInput = {
    id?: number
    reason: string
  }

  export type DischargeReasonCreateOrConnectWithoutAdmissionsInput = {
    where: DischargeReasonWhereUniqueInput
    create: XOR<DischargeReasonCreateWithoutAdmissionsInput, DischargeReasonUncheckedCreateWithoutAdmissionsInput>
  }

  export type MedicalRecordsCreateWithoutAdmissionsInput = {
    RecordID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Patients: PatientsCreateNestedOneWithoutMedicalRecordsInput
    CaseSheets?: CaseSheetsCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordsUncheckedCreateWithoutAdmissionsInput = {
    RecordID: string
    PatientID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    CaseSheets?: CaseSheetsUncheckedCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordsCreateOrConnectWithoutAdmissionsInput = {
    where: MedicalRecordsWhereUniqueInput
    create: XOR<MedicalRecordsCreateWithoutAdmissionsInput, MedicalRecordsUncheckedCreateWithoutAdmissionsInput>
  }

  export type MedicalRecordsCreateManyAdmissionsInputEnvelope = {
    data: MedicalRecordsCreateManyAdmissionsInput | MedicalRecordsCreateManyAdmissionsInput[]
  }

  export type PatientsUpsertWithoutAdmissionsInput = {
    update: XOR<PatientsUpdateWithoutAdmissionsInput, PatientsUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<PatientsCreateWithoutAdmissionsInput, PatientsUncheckedCreateWithoutAdmissionsInput>
    where?: PatientsWhereInput
  }

  export type PatientsUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: PatientsWhereInput
    data: XOR<PatientsUpdateWithoutAdmissionsInput, PatientsUncheckedUpdateWithoutAdmissionsInput>
  }

  export type PatientsUpdateWithoutAdmissionsInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentsUpdateOneWithoutPatientsNestedInput
    Appointments?: AppointmentsUpdateManyWithoutPatientsNestedInput
    Bills?: BillsUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutPatientsNestedInput
  }

  export type PatientsUncheckedUpdateWithoutAdmissionsInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentsUncheckedUpdateManyWithoutPatientsNestedInput
    Bills?: BillsUncheckedUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutPatientsNestedInput
  }

  export type BedUpsertWithoutAdmissionsInput = {
    update: XOR<BedUpdateWithoutAdmissionsInput, BedUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<BedCreateWithoutAdmissionsInput, BedUncheckedCreateWithoutAdmissionsInput>
    where?: BedWhereInput
  }

  export type BedUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: BedWhereInput
    data: XOR<BedUpdateWithoutAdmissionsInput, BedUncheckedUpdateWithoutAdmissionsInput>
  }

  export type BedUpdateWithoutAdmissionsInput = {
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBedsNestedInput
  }

  export type BedUncheckedUpdateWithoutAdmissionsInput = {
    bed_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosesUpsertWithoutAdmissionsInput = {
    update: XOR<DiagnosesUpdateWithoutAdmissionsInput, DiagnosesUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<DiagnosesCreateWithoutAdmissionsInput, DiagnosesUncheckedCreateWithoutAdmissionsInput>
    where?: DiagnosesWhereInput
  }

  export type DiagnosesUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: DiagnosesWhereInput
    data: XOR<DiagnosesUpdateWithoutAdmissionsInput, DiagnosesUncheckedUpdateWithoutAdmissionsInput>
  }

  export type DiagnosesUpdateWithoutAdmissionsInput = {
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Departments?: DepartmentsUpdateOneRequiredWithoutDiagnosesNestedInput
  }

  export type DiagnosesUncheckedUpdateWithoutAdmissionsInput = {
    DiagnosisID?: IntFieldUpdateOperationsInput | number
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DischargeReasonUpsertWithoutAdmissionsInput = {
    update: XOR<DischargeReasonUpdateWithoutAdmissionsInput, DischargeReasonUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<DischargeReasonCreateWithoutAdmissionsInput, DischargeReasonUncheckedCreateWithoutAdmissionsInput>
    where?: DischargeReasonWhereInput
  }

  export type DischargeReasonUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: DischargeReasonWhereInput
    data: XOR<DischargeReasonUpdateWithoutAdmissionsInput, DischargeReasonUncheckedUpdateWithoutAdmissionsInput>
  }

  export type DischargeReasonUpdateWithoutAdmissionsInput = {
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type DischargeReasonUncheckedUpdateWithoutAdmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalRecordsUpsertWithWhereUniqueWithoutAdmissionsInput = {
    where: MedicalRecordsWhereUniqueInput
    update: XOR<MedicalRecordsUpdateWithoutAdmissionsInput, MedicalRecordsUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<MedicalRecordsCreateWithoutAdmissionsInput, MedicalRecordsUncheckedCreateWithoutAdmissionsInput>
  }

  export type MedicalRecordsUpdateWithWhereUniqueWithoutAdmissionsInput = {
    where: MedicalRecordsWhereUniqueInput
    data: XOR<MedicalRecordsUpdateWithoutAdmissionsInput, MedicalRecordsUncheckedUpdateWithoutAdmissionsInput>
  }

  export type MedicalRecordsUpdateManyWithWhereWithoutAdmissionsInput = {
    where: MedicalRecordsScalarWhereInput
    data: XOR<MedicalRecordsUpdateManyMutationInput, MedicalRecordsUncheckedUpdateManyWithoutAdmissionsInput>
  }

  export type AdmissionsCreateWithoutDischargeReasonInput = {
    admission_no: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    treatment_plan?: string | null
    remarks?: string | null
    patient: PatientsCreateNestedOneWithoutAdmissionsInput
    bed: BedCreateNestedOneWithoutAdmissionsInput
    diagnosis: DiagnosesCreateNestedOneWithoutAdmissionsInput
    MedicalRecords?: MedicalRecordsCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsUncheckedCreateWithoutDischargeReasonInput = {
    admission_id?: number
    admission_no: number
    PatientID: string
    bed_id: number
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    treatment_plan?: string | null
    remarks?: string | null
    MedicalRecords?: MedicalRecordsUncheckedCreateNestedManyWithoutAdmissionsInput
  }

  export type AdmissionsCreateOrConnectWithoutDischargeReasonInput = {
    where: AdmissionsWhereUniqueInput
    create: XOR<AdmissionsCreateWithoutDischargeReasonInput, AdmissionsUncheckedCreateWithoutDischargeReasonInput>
  }

  export type AdmissionsCreateManyDischargeReasonInputEnvelope = {
    data: AdmissionsCreateManyDischargeReasonInput | AdmissionsCreateManyDischargeReasonInput[]
  }

  export type AdmissionsUpsertWithWhereUniqueWithoutDischargeReasonInput = {
    where: AdmissionsWhereUniqueInput
    update: XOR<AdmissionsUpdateWithoutDischargeReasonInput, AdmissionsUncheckedUpdateWithoutDischargeReasonInput>
    create: XOR<AdmissionsCreateWithoutDischargeReasonInput, AdmissionsUncheckedCreateWithoutDischargeReasonInput>
  }

  export type AdmissionsUpdateWithWhereUniqueWithoutDischargeReasonInput = {
    where: AdmissionsWhereUniqueInput
    data: XOR<AdmissionsUpdateWithoutDischargeReasonInput, AdmissionsUncheckedUpdateWithoutDischargeReasonInput>
  }

  export type AdmissionsUpdateManyWithWhereWithoutDischargeReasonInput = {
    where: AdmissionsScalarWhereInput
    data: XOR<AdmissionsUpdateManyMutationInput, AdmissionsUncheckedUpdateManyWithoutDischargeReasonInput>
  }

  export type DiagnosesCreateManyDepartmentsInput = {
    DiagnosisName: string
    CreatedAt?: Date | string | null
  }

  export type DoctorsCreateManyDepartmentsInput = {
    FirstName: string
    LastName: string
    ContactNumber?: string | null
    Email?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type PatientsCreateManyDepartmentInput = {
    PatientID: string
    Name: string
    Age: string
    Gender: string
    ContactNumber?: string | null
    Address?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    Status?: string | null
    PatientRegistrationDate: Date | string
    Ptype?: string | null
    Email?: string | null
    AlternateNumber?: string | null
    DOB?: Date | string | null
    BloodGroup?: string | null
  }

  export type DiagnosesUpdateWithoutDepartmentsInput = {
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissions?: AdmissionsUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesUncheckedUpdateWithoutDepartmentsInput = {
    DiagnosisID?: IntFieldUpdateOperationsInput | number
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissions?: AdmissionsUncheckedUpdateManyWithoutDiagnosisNestedInput
  }

  export type DiagnosesUncheckedUpdateManyWithoutDepartmentsInput = {
    DiagnosisID?: IntFieldUpdateOperationsInput | number
    DiagnosisName?: StringFieldUpdateOperationsInput | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DoctorsUpdateWithoutDepartmentsInput = {
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Appointments?: AppointmentsUpdateManyWithoutDoctorsNestedInput
  }

  export type DoctorsUncheckedUpdateWithoutDepartmentsInput = {
    DoctorID?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Appointments?: AppointmentsUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type DoctorsUncheckedUpdateManyWithoutDepartmentsInput = {
    DoctorID?: IntFieldUpdateOperationsInput | number
    FirstName?: StringFieldUpdateOperationsInput | string
    LastName?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientsUpdateWithoutDepartmentInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentsUpdateManyWithoutPatientsNestedInput
    Bills?: BillsUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateWithoutDepartmentInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    Appointments?: AppointmentsUncheckedUpdateManyWithoutPatientsNestedInput
    Bills?: BillsUncheckedUpdateManyWithoutPatientsNestedInput
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutPatientsNestedInput
    Admissions?: AdmissionsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientsUncheckedUpdateManyWithoutDepartmentInput = {
    PatientID?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Age?: StringFieldUpdateOperationsInput | string
    Gender?: StringFieldUpdateOperationsInput | string
    ContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    PatientRegistrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Ptype?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    AlternateNumber?: NullableStringFieldUpdateOperationsInput | string | null
    DOB?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdmissionsCreateManyDiagnosisInput = {
    admission_no: number
    PatientID: string
    bed_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
  }

  export type AdmissionsUpdateWithoutDiagnosisInput = {
    admission_no?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientsUpdateOneRequiredWithoutAdmissionsNestedInput
    bed?: BedUpdateOneRequiredWithoutAdmissionsNestedInput
    dischargeReason?: DischargeReasonUpdateOneWithoutAdmissionsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateWithoutDiagnosisInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    bed_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateManyWithoutDiagnosisInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    bed_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentsCreateManyDoctorsInput = {
    PatientID: string
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type AppointmentsUpdateWithoutDoctorsInput = {
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Patients?: PatientsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateWithoutDoctorsInput = {
    AppointmentID?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentsUncheckedUpdateManyWithoutDoctorsInput = {
    AppointmentID?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentsCreateManyPatientsInput = {
    DoctorID: number
    AppointmentDate: Date | string
    Status?: string | null
    Notes?: string | null
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type BillsCreateManyPatientsInput = {
    TotalAmount: Decimal | DecimalJsLike | number | string
    PaymentStatus?: string | null
    CreatedAt?: Date | string | null
  }

  export type MedicalRecordsCreateManyPatientsInput = {
    RecordID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
    admission_no?: number | null
  }

  export type AdmissionsCreateManyPatientInput = {
    admission_no: number
    bed_id: number
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
  }

  export type AppointmentsUpdateWithoutPatientsInput = {
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Doctors?: DoctorsUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentsUncheckedUpdateWithoutPatientsInput = {
    AppointmentID?: IntFieldUpdateOperationsInput | number
    DoctorID?: IntFieldUpdateOperationsInput | number
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AppointmentsUncheckedUpdateManyWithoutPatientsInput = {
    AppointmentID?: IntFieldUpdateOperationsInput | number
    DoctorID?: IntFieldUpdateOperationsInput | number
    AppointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Notes?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BillsUpdateWithoutPatientsInput = {
    TotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BillsUncheckedUpdateWithoutPatientsInput = {
    BillID?: IntFieldUpdateOperationsInput | number
    TotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BillsUncheckedUpdateManyWithoutPatientsInput = {
    BillID?: IntFieldUpdateOperationsInput | number
    TotalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PaymentStatus?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MedicalRecordsUpdateWithoutPatientsInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CaseSheets?: CaseSheetsUpdateOneWithoutMedicalRecordNestedInput
    Admissions?: AdmissionsUpdateOneWithoutMedicalRecordsNestedInput
  }

  export type MedicalRecordsUncheckedUpdateWithoutPatientsInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admission_no?: NullableIntFieldUpdateOperationsInput | number | null
    CaseSheets?: CaseSheetsUncheckedUpdateOneWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordsUncheckedUpdateManyWithoutPatientsInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admission_no?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdmissionsUpdateWithoutPatientInput = {
    admission_no?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    bed?: BedUpdateOneRequiredWithoutAdmissionsNestedInput
    diagnosis?: DiagnosesUpdateOneRequiredWithoutAdmissionsNestedInput
    dischargeReason?: DischargeReasonUpdateOneWithoutAdmissionsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateWithoutPatientInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    bed_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateManyWithoutPatientInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    bed_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomCreateManyWardInput = {
    room_number: string
    floor_number: number
    total_beds_in_room: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoomUpdateWithoutWardInput = {
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    beds?: BedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutWardInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    beds?: BedUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutWardInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_number?: StringFieldUpdateOperationsInput | string
    floor_number?: IntFieldUpdateOperationsInput | number
    total_beds_in_room?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BedCreateManyRoomInput = {
    bed_number: string
    occupied_status?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BedUpdateWithoutRoomInput = {
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Admissions?: AdmissionsUpdateManyWithoutBedNestedInput
  }

  export type BedUncheckedUpdateWithoutRoomInput = {
    bed_id?: IntFieldUpdateOperationsInput | number
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Admissions?: AdmissionsUncheckedUpdateManyWithoutBedNestedInput
  }

  export type BedUncheckedUpdateManyWithoutRoomInput = {
    bed_id?: IntFieldUpdateOperationsInput | number
    bed_number?: StringFieldUpdateOperationsInput | string
    occupied_status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionsCreateManyBedInput = {
    admission_no: number
    PatientID: string
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    dischargeReasonId?: number | null
    treatment_plan?: string | null
    remarks?: string | null
  }

  export type AdmissionsUpdateWithoutBedInput = {
    admission_no?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientsUpdateOneRequiredWithoutAdmissionsNestedInput
    diagnosis?: DiagnosesUpdateOneRequiredWithoutAdmissionsNestedInput
    dischargeReason?: DischargeReasonUpdateOneWithoutAdmissionsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateWithoutBedInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateManyWithoutBedInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dischargeReasonId?: NullableIntFieldUpdateOperationsInput | number | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordsCreateManyAdmissionsInput = {
    RecordID: string
    PatientID: string
    DiagnosisDetails?: string | null
    TreatmentPlan?: string | null
    medication?: string | null
    RecordDate: Date | string
    CreatedAt?: Date | string | null
    UpdatedAt?: Date | string | null
  }

  export type MedicalRecordsUpdateWithoutAdmissionsInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Patients?: PatientsUpdateOneRequiredWithoutMedicalRecordsNestedInput
    CaseSheets?: CaseSheetsUpdateOneWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordsUncheckedUpdateWithoutAdmissionsInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    PatientID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CaseSheets?: CaseSheetsUncheckedUpdateOneWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordsUncheckedUpdateManyWithoutAdmissionsInput = {
    RecordID?: StringFieldUpdateOperationsInput | string
    PatientID?: StringFieldUpdateOperationsInput | string
    DiagnosisDetails?: NullableStringFieldUpdateOperationsInput | string | null
    TreatmentPlan?: NullableStringFieldUpdateOperationsInput | string | null
    medication?: NullableStringFieldUpdateOperationsInput | string | null
    RecordDate?: DateTimeFieldUpdateOperationsInput | Date | string
    CreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UpdatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdmissionsCreateManyDischargeReasonInput = {
    admission_no: number
    PatientID: string
    bed_id: number
    diagnosis_id: number
    admission_date: Date | string
    discharge_date?: Date | string | null
    treatment_plan?: string | null
    remarks?: string | null
  }

  export type AdmissionsUpdateWithoutDischargeReasonInput = {
    admission_no?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: PatientsUpdateOneRequiredWithoutAdmissionsNestedInput
    bed?: BedUpdateOneRequiredWithoutAdmissionsNestedInput
    diagnosis?: DiagnosesUpdateOneRequiredWithoutAdmissionsNestedInput
    MedicalRecords?: MedicalRecordsUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateWithoutDischargeReasonInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    bed_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    MedicalRecords?: MedicalRecordsUncheckedUpdateManyWithoutAdmissionsNestedInput
  }

  export type AdmissionsUncheckedUpdateManyWithoutDischargeReasonInput = {
    admission_id?: IntFieldUpdateOperationsInput | number
    admission_no?: IntFieldUpdateOperationsInput | number
    PatientID?: StringFieldUpdateOperationsInput | string
    bed_id?: IntFieldUpdateOperationsInput | number
    diagnosis_id?: IntFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    discharge_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    treatment_plan?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
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
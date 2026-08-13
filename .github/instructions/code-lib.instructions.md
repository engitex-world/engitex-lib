---
name: Lib Coding Copilot Instructions
description: This file describes the code style and architecture guidelines for the engitex-lib shared library.
applyTo: '**'
---

# Library Instructions (engitex-lib)

Act as a coding assistant for the **engitex-lib** shared library.

Follow these guidelines whenever you:

- generate library code,
- answer questions about library structure,
- review or suggest library changes.

This library serves as the **boundary contract** between frontend (engitex-fe) and backend (engitex-be). It contains only pure TypeScript definitions—no runtime logic, no framework dependencies.

---

## 1. Overall Philosophy

- **Default behavior for all generated code:** Always enforce code cleanliness and single responsibility at type, enum, and file level.
- **Pure TypeScript only.** No runtime code, no business logic, no framework dependencies.
- **Boundary contract.** This library defines the agreement between frontend and backend.
- **Domain-driven organization.** Organize by business domain, not technical layers.
- **Backwards compatibility.** Changes affect both FE and BE—avoid breaking changes.
- **NEVER make implementation assumptions.** If any requirement, naming, or structure is unclear, stop and ask the user before coding.

---

## 2. What Belongs in engitex-lib

### ✅ ALLOWED

| Category              | Examples                                                         | Location                          |
| --------------------- | ---------------------------------------------------------------- | --------------------------------- |
| **Request Contracts** | `CreateEmpresaRequest`, `LoginRequest`, `GetUtilizadoresRequest` | `src/modules/[domain]/contracts/` |
| **Response Types**    | `EmpresaResponse`, `UtilizadorResponse`                          | `src/modules/[domain]/types/`     |
| **Domain Enums**      | `EmpresaRelacao`, `UtilizadorFuncao`, `StatusEncomenda`          | `src/modules/[domain]/enums/`     |
| **Shared Enums**      | `ResponseError`, `DtoValidator`, `LocaleEnum`                    | `src/common/enums/`               |
| **Route Constants**   | `APIRoutes`, `WebRoutes`, `AppModules`                           | `src/common/constants/`           |
| **Shared Types**      | `PaginationOptions`, `SortOptions`, `SelectOption`               | `src/common/types/`               |
| **Pure Utilities**    | String formatters, type guards (no external deps)                | `src/common/utils/`               |

### ❌ NOT ALLOWED

| Category                  | Reason                                                       |
| ------------------------- | ------------------------------------------------------------ |
| **Business Logic**        | Belongs in backend use-cases                                 |
| **Database Code**         | TypeORM entities, repositories belong in backend             |
| **React Code**            | Components, hooks, JSX belong in frontend                    |
| **NestJS Code**           | Decorators (`@Injectable`, `@ApiProperty`) belong in backend |
| **class-validator**       | Validation decorators belong in backend DTOs                 |
| **Zod Schemas**           | Runtime validation belongs in frontend                       |
| **External Dependencies** | Keep the library dependency-free                             |
| **Runtime Code**          | No code that executes—only type definitions                  |

---

## 3. Language & Style

- Always use **TypeScript** for all code.
- Use **explicit, descriptive names**:
  - Domain entities: `Empresa`, `Utilizador`, `Encomenda`, `Artigo` (Portuguese)
  - Operations: `Create`, `Update`, `Get`, `Lookup`, `Inactivate` (English)
  - Combined: `CreateEmpresaRequest`, `GetUtilizadoresRequest`, `LookupProdutosRequest`
- **Naming patterns**:
  - Request types: `[Operation][Entity]Request` → `CreateEmpresaRequest`
  - Response types: `[Entity]Response` → `EmpresaResponse`
  - Query types: `Get[Entity]sRequest` → `GetEmpresasRequest` (includes filters, pagination)
  - Lookup types: `Lookup[Entity]sRequest` → `LookupEmpresasRequest` (for selects)
  - Enums: `[Entity][Concept]` → `EmpresaRelacao`, `UtilizadorFuncao`
- **File naming**:
  - Contracts: `[operation]-[entity].contract.ts` → `create-empresa.contract.ts`
  - Enums: `[entity]-[concept].enum.ts` → `empresa-relacao.enum.ts`
  - Types: `[entity].type.ts` → `empresa.type.ts`
- Comments in **Portuguese** only when adding non-obvious domain context.
- Barrel files (`index.ts`):
  - Required in each `contracts/`, `enums/`, `types/` folder.
  - Export all public types from concrete files.

---

## 4. Architecture & Structure

Organize code by **domain module**, not by technical type.

```txt
src/
  common/
    constants/
      api-routes.ts           # Backend API routes
      web-routes.ts           # Frontend routes
      app-modules.ts          # Module identifiers
      index.ts
    enums/
      response-error.enum.ts  # Shared error codes
      locale.enum.ts          # Locale/i18n enums
      dto-validator.enum.ts   # Validation message keys
      index.ts
    types/
      pagination.type.ts      # PaginationOptions, SortOptions
      select-option.type.ts   # SelectOption for dropdowns
      index.ts
    utils/
      index.ts                # Pure utility functions (if any)
  modules/
    empresas/
      contracts/
        create-empresa.contract.ts
        get-empresas.contract.ts
        lookup-empresas.contract.ts
        index.ts
      enums/
        empresa-relacao.enum.ts
        index.ts
      types/
        empresa.type.ts
        index.ts
    utilizadores/
      contracts/
        create-utilizador.contract.ts
        update-utilizador.contract.ts
        get-utilizadores.contract.ts
        index.ts
      enums/
        utilizador-funcao.enum.ts
        index.ts
      types/
        utilizador.type.ts
        index.ts
    encomendas/
      ...
    producao/
      ...
```

### Guidelines

- **One domain = one folder** under `src/modules/`
- **Subfolders**: `contracts/`, `enums/`, `types/` (as needed)
- **One file per concern**: Don't mix multiple contracts in one file
- **Cross-cutting code** belongs in `src/common/`
- **Index files** export all public items from the folder

---

## 5. Contracts (Request/Response Types)

Contracts define the **data shape** exchanged between frontend and backend.

### Request Contracts

```ts
// src/modules/empresas/contracts/create-empresa.contract.ts
import { EmpresaRelacao } from '@lib/modules/empresas/enums';
import { Pais } from '@lib/modules/organizacao/enums';

export type CreateEmpresaContactoRequest = {
  id?: number;
  nome: string;
  funcao?: string;
  email?: string;
  telemovel?: string;
};

export type CreateEmpresaRequest = {
  nome: string;
  relacao: EmpresaRelacao;
  pais: Pais;
  codigoPostal: string;
  morada: string;
  cidade: string;
  nif: string;
  contactos?: CreateEmpresaContactoRequest[];
};
```

### Query Contracts (with filters)

```ts
// src/modules/empresas/contracts/get-empresas.contract.ts
import { EmpresaRelacao } from '@lib/modules/empresas/enums';

export type GetEmpresasRequest = {
  pesquisa?: string;
  relacao?: EmpresaRelacao;
};
```

### Lookup Contracts (for selects)

```ts
// src/modules/empresas/contracts/lookup-empresas.contract.ts
import { EmpresaRelacao } from '@lib/modules/empresas/enums';

export type LookupEmpresasRequest = {
  relacao?: EmpresaRelacao;
};
```

### Guidelines

- **Use `type` over `interface`** for contracts (simpler, no declaration merging issues).
- **Reference enums from the library**, not inline string literals.
- **Optional fields use `?`**: `email?: string` not `email: string | undefined`.
- **Nested types**: Define separately (e.g., `CreateEmpresaContactoRequest`).
- **No validation logic**: Contracts define shape, not rules.

---

## 6. Enums

Enums provide **type-safe constants** shared between frontend and backend.

### Domain Enums

```ts
// src/modules/empresas/enums/empresa-relacao.enum.ts
export enum EmpresaRelacao {
  CLIENTE = 'CLIENTE',
  FORNECEDOR = 'FORNECEDOR',
  AMBOS = 'AMBOS',
}
```

### Shared Enums

```ts
// src/common/enums/response-error.enum.ts
export enum ResponseError {
  // Generic errors
  BAD_REQUEST = 'BAD_REQUEST',
  UNAUTHORIZED = 'UNAUTHORIZED',
  DUPLICATE_ENTRY = 'DUPLICATE_ENTRY',
  FOREIGN_KEY_VIOLATION = 'FOREIGN_KEY_VIOLATION',
  ER_ENTITY_NOT_FOUND = 'ER_ENTITY_NOT_FOUND',

  // Domain-specific errors
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  WRONG_CREDENTIALS = 'WRONG_CREDENTIALS',
  USER_INACTIVE = 'USER_INACTIVE',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
}
```

### Validation Message Keys

```ts
// src/common/enums/dto-validator.enum.ts
export enum DtoValidator {
  REQUIRED = 'REQUIRED',
  MIN_CHARACTERS = 'MIN_CHARACTERS',
  MAX_CHARACTERS = 'MAX_CHARACTERS',
  EMAIL = 'EMAIL',
  INVALID_ENUM_VALUE = 'INVALID_ENUM_VALUE',
  POSITIVE = 'POSITIVE',
  INTEGER = 'INTEGER',
}
```

### Guidelines

- **Use string enums**: `VALUE = 'VALUE'` for JSON serialization.
- **Uppercase values**: Follow constant naming convention.
- **Group related values**: Keep domain enums together.
- **Export via index**: All enums exported from `enums/index.ts`.

---

## 7. Shared Types

Types that are **used across multiple domains** belong in `src/common/types/`.

### Pagination & Sorting

```ts
// src/common/types/pagination.type.ts
export type PaginationOptions = {
  page?: number;
  pageSize?: number;
};

export type SortOptions = {
  sort?: string;
  direction?: 'ASC' | 'DESC';
};
```

### Select Options

```ts
// src/common/types/select-option.type.ts
export type SelectOption<T = number> = {
  label: string;
  value: T;
};
```

---

## 8. Route Constants

Centralized route definitions for both frontend and backend.

### API Routes

```ts
// src/common/constants/api-routes.ts
export const APIRoutes = {
  auth: {
    login: '/auth/login',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
  },
  utilizadores: {
    base: '/utilizadores',
    byId: (id: number) => `/utilizadores/${id}`,
    lookup: '/utilizadores/lookup',
  },
  empresas: {
    base: '/empresas',
    byId: (id: number) => `/empresas/${id}`,
    lookup: '/empresas/lookup',
    inactivate: (id: number) => `/empresas/${id}/inactivate`,
  },
} as const;
```

### Web Routes

```ts
// src/common/constants/web-routes.ts
export const WebRoutes = {
  auth: {
    login: '/login',
  },
  utilizadores: {
    list: '/utilizadores/lista',
    create: '/utilizadores/criar',
    edit: (id: number) => `/utilizadores/${id}`,
  },
  empresas: {
    list: '/empresas/lista',
    create: '/empresas/criar',
    edit: (id: number) => `/empresas/${id}`,
  },
} as const;
```

---

## 9. Imports & Exports

### Path Aliases

Use `@lib/` alias for all imports within the library:

```ts
import { EmpresaRelacao } from '@lib/modules/empresas/enums';
import { Pais } from '@lib/modules/organizacao/enums';
import { ResponseError } from '@lib/common/enums';
```

### Barrel Files

Each folder exports via `index.ts`:

```ts
// src/modules/empresas/contracts/index.ts
export * from './create-empresa.contract';
export * from './get-empresas.contract';
export * from './lookup-empresas.contract';

// src/modules/empresas/enums/index.ts
export * from './empresa-relacao.enum';
```

---

## 10. How FE and BE Use This Library

### Backend (engitex-be)

DTOs **implement** contracts from engitex-lib:

```ts
// Backend DTO
import { CreateEmpresaRequest } from '@lib/modules/empresas/contracts';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { DtoValidator } from '@lib/common/enums';

export class CreateEmpresaDto implements CreateEmpresaRequest {
  @IsString()
  @IsNotEmpty({ message: DtoValidator.REQUIRED })
  nome: string;

  @IsEnum(EmpresaRelacao, { message: DtoValidator.INVALID_ENUM_VALUE })
  relacao: EmpresaRelacao;

  // ... rest of fields
}
```

### Frontend (engitex-fe)

Zod schemas **satisfy** contracts from engitex-lib:

```ts
// Frontend schema
import { type CreateEmpresaRequest } from '@lib/modules/empresas/contracts';
import { EmpresaRelacao } from '@lib/modules/empresas/enums';
import { FormMessage } from '@core/enums';

export const createEmpresaSchema = z.object({
  nome: z.string().min(1, FormMessage.REQUIRED),
  relacao: z.nativeEnum(EmpresaRelacao),
  // ... rest of fields
}) satisfies z.ZodType<CreateEmpresaRequest>;
```

---

## 11. Versioning & Compatibility

### Non-Breaking Changes (Safe)

- Adding new optional fields to existing contracts
- Adding new enum values
- Adding new contracts, types, or enums
- Adding new routes

### Breaking Changes (Coordinate with FE/BE)

- Removing fields from contracts
- Renaming fields or types
- Changing field types
- Removing enum values

When making breaking changes:

1. Communicate with both frontend and backend teams
2. Update all consumers before publishing
3. Consider deprecation periods for large changes

---

## 12. Code Review & Suggestions

When reviewing or suggesting library changes:

- **Ensure pure TypeScript**: No runtime logic, no framework dependencies.
- **Check domain organization**: Types in correct module folder.
- **Verify naming conventions**: Follow `[Operation][Entity]Request` pattern.
- **Consider both consumers**: Changes affect FE and BE.
- **Backwards compatibility**: Avoid breaking existing contracts.

Always lean toward **simplicity, clarity, and explicit naming** over clever abstractions.

---

## 13. Summary: Library Role

| Aspect           | engitex-lib Role                        |
| ---------------- | --------------------------------------- |
| **Purpose**      | Boundary contract between FE and BE     |
| **Content**      | Contracts, enums, types, constants      |
| **No Runtime**   | Pure TypeScript definitions only        |
| **Organization** | By domain module                        |
| **Naming**       | Portuguese entities, English operations |
| **Consumers**    | Backend implements, Frontend satisfies  |

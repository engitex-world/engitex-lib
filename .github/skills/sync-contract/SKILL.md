---
name: sync-contract
user-invocable: true
description: 'Audita e sincroniza contratos partilhados da Engitex entre engitex-lib, engitex-be e engitex-fe, detetando contract drift, breaking changes e atualizações full-stack incompletas.'
keywords:
  - contracts
  - contract-drift
  - full-stack
  - engitex-lib
  - backend
  - frontend
  - routes
  - enums
  - ResponseError
---

# Contract Sync

Garante que alterações a contratos partilhados permanecem consistentes entre a biblioteca canónica, o backend e o frontend. Esta skill complementa as instruções existentes; não as substitui:

- `engitex-lib/.github/instructions/code-lib.instructions.md`
- `engitex-be/.github/instructions/code-be.instructions.md`
- `engitex-fe/.github/instructions/code-fe.instructions.md`

A `engitex-lib` no topo da workspace é a source of truth para contracts, types, enums, `APIRoutes`, `AppModules` e `ResponseError`. As cópias em `engitex-be/engitex-lib` e `engitex-fe/engitex-lib` são réplicas a auditar e reportar, mas não devem ser editadas automaticamente por esta primeira versão.

## Quando usar

Usa esta skill quando uma alteração envolver ou puder envolver:

- request ou response contracts;
- campos, nested objects, arrays, IDs, datas, optionalidade ou nullability;
- enums, ações de negócio ou opções apresentadas na UI;
- `APIRoutes`, `AppModules`, endpoints, métodos HTTP ou query params;
- `ResponseError` ou mensagens de validação;
- API functions, schemas Zod, TanStack Query hooks, query keys, mappers, forms, i18n ou testes;
- suspeita de uma feature parcialmente implementada ou de contract drift.

Exemplos:

-- `/sync-contract UpdatePlaneamentoFaseRequest`
-- `Usa sync-contract para adicionar PAUSAR à execução de produção`
-- `Verifica se os contracts de encomendas estão sincronizados entre lib, backend e frontend`
-- `Analisa o impacto full-stack de adicionar motivoPausa à execução de uma fase`

## Modos

### AUDIT

Usa quando o pedido é verificar, analisar ou detetar drift. Não alteres código.

1. Descobre o contrato e toda a cadeia de dependências.
2. Compara as camadas e pesquisa todos os consumers relevantes.
3. Reporta drift, breaking changes, riscos e alterações recomendadas.
4. Termina sem editar ficheiros.

### SYNC / IMPLEMENT

Usa apenas quando o utilizador pedir explicitamente para corrigir ou implementar.

1. Faz o Contract Discovery completo.
2. Apresenta brevemente o impacto identificado.
3. Atualiza pela ordem `engitex-lib` → `engitex-be` → `engitex-fe` → testes/validação.
4. Valida cada projeto antes de avançar para a camada seguinte quando a alteração o permitir.
5. Não introduzas refactors não relacionados nem edites cópias da lib sem decisão explícita.

## Contract Discovery obrigatório

Antes de alterar qualquer ficheiro, constrói um mapa semelhante a este e confirma cada ligação através de pesquisa no código:

```text
engitex-lib
├── request/response contract
├── types e enums
├── AppModules/APIRoutes
├── ResponseError e exports
│
├── engitex-be
│   ├── DTO e class-validator
│   ├── controller, método HTTP, params/query/body
│   ├── use case, mapper e response
│   ├── repository apenas se a alteração depender de persistência
│   └── exception/error mapping
│
└── engitex-fe
    ├── Zod schema e types
    ├── API function e payload/response
    ├── TanStack Query hook e query keys/invalidation
    ├── mapper, form e UI consumer
    ├── error mapping e i18n
    └── testes relevantes
```

### engitex-lib

Procura o contract concreto, tipos de response, enums relacionados, `AppModules`, `APIRoutes`, `ResponseError` e barrels. Confirma se a alteração deve ser backward-compatible e procura utilizações nos três projetos antes de remover ou renomear símbolos.

### engitex-be

Procura DTOs que implementam ou derivam do contract da lib, decorators `class-validator`, controller e método HTTP, parâmetros, query builders, use case, mappers, repositories quando necessários e exceções mapeadas para `ResponseError`. Respeita a arquitetura e os limites definidos em `code-be.instructions.md`.

### engitex-fe

Procura schemas Zod e `satisfies`/`ZodType` do contract, API functions, payloads e tipos de resposta, hooks TanStack Query, query keys, invalidation, mappers, forms e consumers UI. Verifica `ResponseError`, `FormMessage`, error mapping e traduções quando aplicável. Respeita a arquitetura definida em `code-fe.instructions.md` e usa `sync-i18n` para a sincronização de traduções.

## Drift a detetar

### Fields e tipos

Compara LIB → BE DTO → FE schema → payload/response e reporta:

- campo presente na lib mas ausente no DTO, schema, payload ou response;
- campo adicional no BE/FE que não pertence ao contract partilhado;
- required vs optional divergente;
- `null`/undefined/nullable divergente;
- tipos diferentes, incluindo `number` vs `string`, datas, IDs e arrays;
- nested objects ou propriedades internas incompletas;
- response declarado mas não mapeado ou consumido corretamente.

Exemplo: `quantidade?: number` na lib, `quantidade: number` no BE e `z.number().nullable()` no FE é drift semântico e deve ser reportado, mesmo que TypeScript compile.

### Enums e ações

Compara enum da lib → `@IsEnum` no BE → `z.nativeEnum`/opções no FE → UI → i18n quando aplicável. Deteta valores ausentes, obsoletos, duplicados ou hardcoded. Não recries no BE/FE enums que já existem na lib.

Ao remover um valor, pesquisa primeiro tabelas, filtros, forms, mappers, persistence e testes nos três projetos. Um valor removido com consumers existentes é uma breaking change.

### Routes e métodos HTTP

Compara `AppModules` e `APIRoutes` com `@Controller`, `@Get`, `@Post`, `@Put`, `@Patch`, `@Delete` no BE e a chamada da API no FE. Valida path, método HTTP, parâmetros de path, query params e body. Uma divergência como `PUT` na API contract e `PATCH` no controller é drift de alta severidade.

Não substituas routes centralizadas por strings hardcoded quando `APIRoutes` pode ser usado.

### Errors e i18n

Quando o fluxo introduzir ou alterar erros, segue:

```text
ResponseError → exception/backend → response → FE error mapper → i18n/UI
```

Confirma que o código existe na lib, é produzido pelo BE, é interpretado pelo FE e não expõe mensagens técnicas. Para validação, verifica `DtoValidator`/`FormMessage` e as traduções aplicáveis; usa `sync-i18n` para sincronizar ficheiros de locale, em vez de duplicar esse workflow aqui.

## Breaking changes

Marca explicitamente `BREAKING CHANGE DETECTED` para:

- novo campo required;
- enum value removido ou renomeado;
- response field removido;
- alteração de tipo ou de estrutura nested;
- nullable → non-nullable;
- route ou método HTTP alterado;
- query param renomeado;
- mudança incompatível de payload ou response.

Para cada breaking change indica quem é afetado, o impacto de compatibilidade e uma estratégia de migração backward-compatible quando possível. Não tornes um campo obrigatório, removas enum values ou alteres métodos HTTP sem procurar dados existentes e todos os consumers.

## Guardrails

1. Não sincronizes apenas BE ou FE quando o contrato é partilhado.
2. Não dupliques contracts, enums ou interfaces da lib.
3. Não uses `any` para esconder drift.
4. Não alteres uma public API sem procurar todos os consumers.
5. Não assumas semântica de negócio, dados existentes ou compatibilidade backward.
6. Não alteres método HTTP, route, query param ou enum sem comparar as três camadas.
7. Não removas `ResponseError` nem enum values sem procurar utilizações.
8. Não edites as réplicas `engitex-*/engitex-lib` automaticamente.
9. Não faças refactors não relacionados.
10. Pergunta ao utilizador apenas quando a decisão não puder ser resolvida pelo código e alterar comportamento, semântica, contrato público, compatibilidade ou arquitetura.

## Validação

Usa os scripts existentes, preferindo o alvo mais estreito disponível. Não declares uma validação que não foi executada.

- `engitex-lib`: `yarn checkup`; `yarn build` quando a alteração o justificar.
- `engitex-be`: `yarn checkup`; testes relevantes e `yarn build` quando necessário.
- `engitex-fe`: `yarn checkup`; Playwright apenas quando o workflow afetado já tiver cobertura relevante.

Na implementação, valida `engitex-lib` antes do BE e o BE antes do FE sempre que a alteração atravessar essas camadas.

## Output esperado

### Contract

`<nome do contract, enum, route ou feature>`

### Dependency chain

`engitex-lib → engitex-be → engitex-fe → tests / validation`

Indica ficheiros e símbolos concretos em cada etapa.

### Drift detected

Lista por severidade: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`. Para cada finding indica ficheiro, problema, comportamento atual, comportamento esperado e alteração recomendada.

### Changes

Em modo SYNC / IMPLEMENT, agrupa por:

- `engitex-lib`
- `engitex-be`
- `engitex-fe`
- `tests / validation`

### Breaking changes

Escreve `None` quando não existirem. Caso contrário, usa `BREAKING CHANGE DETECTED` e descreve impacto e migração.

### Validation

Lista cada comando executado, projeto, resultado e falhas preexistentes relevantes.

### Remaining risks

Regista consumers dinâmicos, cópias de lib divergentes, cobertura de testes ausente ou decisões que ficaram fora do código.

## Cenários mínimos de verificação

Antes de considerar a skill concluída, confirma que o workflow cobre estes casos:

- `motivoPausa?: string`: discovery de contract, DTO, use case, schema, API, hook e UI;
- `PAUSAR`: consumers BE/FE, opções UI e i18n;
- método `PATCH` no BE enquanto lib/FE usam `PUT`: route/method drift;
- schema FE required enquanto lib é optional: semantic contract drift;
- enum value removido usado numa tabela ou filtro FE: breaking change.

## Scripts auxiliares

Não existem scripts auxiliares nesta primeira versão. Pesquisa de código, compilador TypeScript, ESLint, Prettier e os scripts `checkup` existentes são suficientes para o workflow procedural. Só cria scripts em `.github/skills/sync-contract/scripts/` quando houver um problema determinístico repetido, com input, output e execução claramente definidos, que não deva depender de interpretação do modelo.

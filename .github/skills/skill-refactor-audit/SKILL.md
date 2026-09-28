---
name: skill-refactor-audit
description: 'Use when: auditing and optionally executing full-stack Engitex refactors across engitex-lib, engitex-be, and engitex-fe for naming consistency, contract drift, architecture alignment, and validation discipline.'
user-invocable: true
keywords:
  - refactor
  - audit
  - naming
  - contracts
  - full-stack
  - engitex
  - validation
---

# Skill Refactor Audit

Audita e, com aprovacao explicita do utilizador, executa refactors full-stack no workspace Engitex, respeitando as instructions e skills existentes de backend, frontend e lib.

## Objetivo

Tornar o codigo mais facil de entender, alterar e validar, sem mudar comportamento fora do escopo aprovado.

A skill aplica os habitos acordados:

- Caminho principal facil de seguir.
- Nomes pelo significado.
- Sistemas externos e contratos contidos na fronteira.
- Estados invalidos mais dificeis de representar.
- Decisoes separadas de efeitos.
- Erros uteis e verificaveis.
- Mudancas focadas e validaveis.

## Repos e Instrucoes Obrigatorias

Antes de auditar ou editar, carregar as instructions/skills relevantes:

- `engitex-lib/.github/instructions/code-lib.instructions.md`
- `engitex-be/.github/instructions/backend-code.instructions.md`
- `engitex-fe/.github/instructions/frontend-code.instructions.md`
- `engitex-be/.github/skills/skill-refactor-backend/SKILL.md`, quando tocar backend
- `engitex-fe/.github/skills/refactor-frontend/SKILL.md`, quando tocar frontend
- `engitex-lib/.github/skills/sync-contract/SKILL.md`, quando contratos partilhados forem alterados

## Regras de Naming

Convenção padrão confirmada:

- Substantivos de dominio em portugues: `utilizador`, `empresa`, `encomenda`, `produto`, `fornecedor`, `maquina`, `estado`, `pesquisa`, `quantidade`, `preco`, `codigo`.
- Verbos e operacoes podem ficar em ingles: `create`, `update`, `get`, `lookup`, `execute`, `useCreateProduto`, `GetProdutosUseCase`.
- Nomes impostos por framework/protocolo nao devem ser traduzidos: `request.user`, header `user-agent`, `searchParams`, tipos genericos de UI como `searchValue` quando nao representam contrato de dominio.

## Workflow

### 1. Intake

Confirmar com o utilizador:

- Escopo: full-stack por defeito (`engitex-lib`, `engitex-be`, `engitex-fe`) ou modulo/feature especifica.
- Se a execucao esta autorizada ou se deve ser apenas auditoria.
- Que comportamento deve ser preservado.

### 2. Auditoria Local e Falsificavel

Fazer busca direcionada antes de editar:

- Naming: procurar substantivos ingleses em contratos, DTOs, schemas, controllers, use-cases, repositories, hooks e componentes.
- Contratos: verificar se DTOs backend implementam contracts da lib e se schemas frontend usam `satisfies z.ZodType<...>` quando representam requests.
- Drift: comparar `engitex-lib` com `engitex-be/engitex-lib` e `engitex-fe/engitex-lib` antes de validar builds.
- Arquitetura BE: controllers finos, use-cases por operacao, repositorios internos ao modulo, `handleQueryError` onde aplicavel.
- Arquitetura FE: hooks por operacao, APIs fora de componentes, schemas perto da feature, componentes com Setup -> Logic -> Guards -> Markup.

Para cada achado, indicar:

- Ficheiro.
- Identificador atual.
- Alteracao proposta.
- Risco.
- Validacao barata que pode falsificar a hipotese.

### 3. Plano Antes de Editar

Antes de mudar codigo, apresentar um plano ordenado:

- Separar mudancas mecanicas de naming, contrato e arquitetura.
- Marcar dependencias entre repos.
- Identificar mudancas que exigem sync dos submodules da lib.
- Pedir aprovacao antes de executar.

### 4. Execucao Incremental

Ao executar:

- Fazer uma mudanca pequena por fatia.
- Validar imediatamente depois da primeira fatia substantiva.
- Preferir `apply_patch` para edicoes manuais.
- Preservar comportamento e formato publico quando possivel.
- Nao traduzir nomes de framework/protocolo.
- Nao reverter alteracoes do utilizador.

### 5. Sync de Contracts

Sempre que alterar `engitex-lib` principal:

1. Atualizar o contract/type/enum na lib principal.
2. Validar `engitex-lib` com `yarn build`.
3. Copiar os ficheiros alterados para:
   - `engitex-be/engitex-lib/...`
   - `engitex-fe/engitex-lib/...`
4. So depois correr typecheck/build de backend/frontend.

Nota: neste workspace, BE e FE usam os seus submodules locais de `engitex-lib`, nao apenas a lib principal.

#### Mecanismo real do sync

`engitex-be/engitex-lib` e `engitex-fe/engitex-lib` sao **git submodules reais** do mesmo repo
(`github.com/engitex-world/engitex-lib`), cada um com o seu working tree.

- **Renames e remocoes exigem `rsync -a --delete`**, nao `cp`. Um `cp` deixa o ficheiro antigo no submodule; o nome velho e o novo passam a resolver os dois e o drift fica invisivel ate rebentar. Exemplo: `rsync -a --delete engitex-lib/src/modules/X/ engitex-be/engitex-lib/src/modules/X/`
- **Um undo do utilizador na lib principal nao propaga.** Depois de reverter algo, verificar se o valor ficou orfao nos submodules (`git -C <repo>/engitex-lib checkout -- <ficheiro>` limpa).

### 6. Validacao Obrigatoria

Por defeito, antes de finalizar:

- Lib: `yarn build`
- Backend: `yarn typecheck`, `yarn lint`, `yarn build`, `yarn test --runInBand`
- Frontend: `yarn typecheck`, `yarn lint`, `yarn build`

Se a mudanca tocar fluxo coberto por Playwright, recomendar ou executar E2E focal quando o ambiente estiver pronto.

## Armadilhas Conhecidas Neste Workspace

- `sed -i '' -E` no macOS/BSD sed nao suporta `\b` de forma fiavel. Para renames com word boundary usar `perl -pi -e 's/\bfoo\b/bar/g'`.
- Renomear variaveis em object shorthand pode partir APIs. Exemplo: `{ order }` do TypeORM nao deve virar `{ orderBy }`; deve virar `{ order: orderBy }`.
- Em regex Perl/sed, `\s` inclui newline. Para whitespace horizontal usar `[ \t]`.
- `request.user` e `user-agent` sao nomes externos/framework; nao traduzir.
- No FE, `searchValue`/`searchParams` podem ser conceitos genericos de UI/browser, nao necessariamente contrato de dominio. Traduzir so quando for campo de request/domain, como `GetProdutosRequest.pesquisa`.
- **Um mesmo ficheiro pode ser editado por fora entre turnos.** Reler antes de editar e reconfirmar que guards e correcoes anteriores continuam la.

## Output Esperado

Ao usar esta skill, responder com:

1. Achados por severidade.
2. Plano de refactor com fatias pequenas.
3. Perguntas/decisoes necessarias antes de editar.
4. Alteracoes executadas, se aprovadas.
5. Validacoes corridas e resultado.
6. Riscos restantes e proximos passos.

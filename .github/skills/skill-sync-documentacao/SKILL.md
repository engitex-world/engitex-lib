---
name: skill-sync-documentacao
description: Auditoria recorrente de instrucoes, prompts, skills e agentes nesta workspace Engitex (be, fe, lib), com deteccao de referencias quebradas, inconsistencias e risco de deriva.
user-invocable: true
keywords:
  - governance
  - instructions
  - prompts
  - agents
  - skills
  - audit
  - workspace
  - engitex
---

# Audit Documentacao

Executa uma auditoria profunda e recorrente aos ficheiros de customizacao desta workspace:

- `engitex-be/.github/**`
- `engitex-fe/.github/**`
- `engitex-lib/.github/**`

## Objetivo

Detetar e reportar problemas de governance em customizacoes:

- Referencias para ficheiros que nao existem
- Nomes desatualizados de agentes/instrucoes
- Typos e markdown quebrado que afetam interpretacao
- Duplicacoes com deriva entre `engitex-lib` e submodules dentro de `engitex-be/engitex-lib` e `engitex-fe/engitex-lib`
- Regras demasiado restritivas com impacto em produtividade

## Quando usar

Usa este skill quando:

- Queres uma revisao periodica (semanal/quinzenal) de qualidade dos prompts/agentes
- Acabaste de alterar instrucoes e queres validar consistencia
- Queres prevenir regressao semantica em handoffs e nomes de ficheiros

## Workflow Recomendado

### Fase 1 - Inventario

1. Listar todos os ficheiros de customizacao:
   - `.github/instructions/**/*.md`
   - `.github/agents/*.agent.md`
   - `.github/skills/**/SKILL.md`
   - `.github/prompts/*.prompt.md`
2. Mapear duplicacoes de `engitex-lib` entre repositorios

### Fase 2 - Regras de Validacao

Validar no minimo:

1. Referencias legadas para agentes (devem ser zero):
   - `be-coder.agent.md`
   - `fe-coder.agent.md`
   - `be-coder`
   - `fe-coder`
2. Referencias legadas para instrucoes (devem ser zero):
   - `code-be.instructions.md`
   - `code-fe.instructions.md`
3. Existencia dos ficheiros essenciais:
   - `engitex-be/.github/agents/backend-coder.agent.md`
   - `engitex-fe/.github/agents/frontend-coder.agent.md`
   - `engitex-be/.github/instructions/backend-code.instructions.md`
   - `engitex-fe/.github/instructions/frontend-code.instructions.md`
   - `engitex-lib/.github/agents/lib-coder.agent.md`
4. Typos conhecidos e artefactos de edicao
5. Conflitos entre regras absolutas e workflow pratico

### Fase 3 - Correcao

1. Aplicar correcao minima necessaria
2. Manter estilo e intencao original
3. Atualizar todas as copias relevantes da submodule quando necessario

### Fase 4 - Validacao

1. Para auditorias sem alteracoes, validar documentalmente as referencias, os paths, o frontmatter e o Markdown; nao executar builds de codigo sem necessidade.
2. Se houver alteracoes de codigo, aplicar o modo de validacao definido no prompt de checkup.

## Output esperado

A resposta final deve conter:

1. Findings por severidade (`alto`, `medio`, `baixo`)
2. Ficheiros afetados
3. Correcoes aplicadas
4. Risco residual
5. Proximo ciclo recomendado (data/frequencia)

## Uso rapido

No chat:

- `Usa o skill sync-documentacao e audita a workspace em modo completo.`
- `Executa auditoria recorrente de customizacoes e corrige apenas P0/P1.`

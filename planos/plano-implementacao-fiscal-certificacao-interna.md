# Plano Mestre de Implementacao Fiscal (Certificacao Interna)

## Objetivo deste documento
Este documento serve como handoff completo para retomar o trabalho fiscal do Engitex numa nova sessao do Copilot, sem perda de contexto.

Escopo confirmado:
- Certificacao de software interna.
- Faturacao.
- Guias de transporte e expedicao.
- Comunicacao automatica com AT.
- SAF-T apenas exportavel.
- Arranque com 2 empresas, cada uma com base de dados independente.
- Sem partilha de dados entre empresas nesta fase.

## Contexto e decisoes ja fechadas
1. Nao sera usado motor externo de faturacao certificada.
2. Cada empresa funciona em instancia fiscal isolada (NIF, series, numeracao, auditoria e comunicacao AT separados).
3. O SAF-T nesta fase nao sera enviado automaticamente; sera apenas gerado para export.
4. O projeto deve manter arquitetura por modulos e use-cases, sem acoplamento entre repositorios de modulos diferentes.

## Diferenca funcional critica
Comunicacao automatica AT:
- Fluxo transacional continuo de submissao de documentos e rececao de resposta AT.
- Requer fila, retries, idempotencia, estados de submissao e reconciliacao.

SAF-T exportavel:
- Geracao de ficheiro normalizado por periodo fiscal.
- Nao e comunicacao online continua.
- Foco em consistencia estrutural e fiscal do ficheiro.

## Notas de certificacao (Modelo 24) que impactam implementacao
Campos discutidos:
- Numero de deposito na ASSOFT.
- Entrega de chave publica assimetrica (par da chave privada do programa).
- Campo 07: versao da chave publica.
- Campo 08: ficheiro anexo da chave publica.
- Declaracao de conformidade legal.
- Identificacao do representante legal e NIF.

Implicacoes tecnicas diretas:
1. Implementar gestao formal de chaves por empresa.
2. Garantir evidencia auditavel de assinatura e controlo de integridade.
3. Definir versionamento de chave publica e processo de rotacao.
4. Preparar dossier de evidencias para suporte da declaracao de conformidade.

## Arquitetura alvo de alto nivel
Workstreams:
1. Compliance e governance.
2. Criptografia e gestao de chaves.
3. Contratos partilhados no engitex-lib.
4. Backend fiscal base (series, numeracao, auditoria).
5. Modulo de faturacao.
6. Modulo de expedicao/guias.
7. Integracao automatica com AT.
8. Modulo SAF-T exportavel.
9. Frontend fiscal.
10. Qualidade, testes e readiness de certificacao.

Principio de isolamento:
- Cada base de dados representa uma empresa fiscal isolada.
- Sem multi-tenant logico no mesmo schema nesta fase.

## Fases detalhadas e entregaveis

## Fase 0 - Governance e requisitos formais (bloqueante)
Entregaveis:
1. Matriz de requisitos legais aplicaveis ao software.
2. Checklist completo do Modelo 24.
3. RACI de aprovacao (Produto, Engenharia, Fiscal, Juridico).
4. Criterios go/no-go para producao.

Criterios de aceite:
- Todos os requisitos legais mapeados para componentes tecnicos e evidencias.
- Checklist Modelo 24 com dono por item.

## Fase 1 - Seguranca criptografica e chaves (bloqueante)
Entregaveis:
1. Politica de chave por empresa.
2. Rotina de geracao e armazenamento seguro da chave privada.
3. Export da chave publica para anexacao no Modelo 24.
4. Versionamento formal da chave publica (Campo 07).
5. Procedimento de rotacao/revogacao de chaves.

Criterios de aceite:
- Chave privada nunca exposta em claro fora do cofre definido.
- Chave publica exportavel e identificada por versao.
- Trilho de auditoria para eventos de chave.

## Fase 2 - Engitex-lib: contratos, enums e constantes partilhadas
Entregaveis:
1. Novos contratos para faturacao, guias, comunicacao AT e export SAF-T.
2. Enums para estados documentais e estados de submissao AT.
3. Erros de dominio fiscal em response-error.
4. Novos modulos e rotas em constantes partilhadas.

Criterios de aceite:
- Build e typecheck do lib sem regressao.
- Contratos reutilizaveis por backend e frontend.

## Fase 3 - Backend base fiscal (series, numeracao, auditoria)
Entregaveis:
1. Modulo de series documentais com ano, prefixo, contador e estado.
2. Numeracao atomica sem colisao sob concorrencia.
3. Auditoria fiscal imutavel com metadados obrigatorios.
4. Endpoints administrativos para series.

Criterios de aceite:
- Teste de concorrencia sem duplicados/saltos de numero.
- Eventos criticos sempre auditados.

## Fase 4 - Backend faturacao
Entregaveis:
1. Entidades de documento e linhas.
2. Use-cases de criar, emitir, anular, listar e obter detalhe.
3. Regras de negocio fiscal:
- sem hard delete;
- anular com motivo;
- bloqueio de edicao apos emissao;
- consistencia de totais.
4. Integracao com encomendas por use-cases exportados.

Criterios de aceite:
- Fluxo completo de emissao funcional.
- Anulacao controlada e auditada.

## Fase 5 - Backend expedicao e guias de transporte
Entregaveis:
1. Entidades de guia e linhas.
2. Use-cases de criar, finalizar, anular e consultar.
3. Numeracao propria por serie de guia.
4. Integracao com encomendas para coerencia operacional.

Criterios de aceite:
- Guia criada/finalizada com estado valido.
- Integridade entre guia e origem operacional garantida.

## Fase 6 - Integracao AT automatica
Entregaveis:
1. Adaptador AT com fila transacional.
2. Idempotencia por submissao.
3. Retries com backoff e estados de falha.
4. Reconciliacao periodica de pendentes.
5. Persistencia de request/response para auditoria e suporte.

Criterios de aceite:
- Cenarios de sucesso, rejeicao, timeout e reprocessamento cobertos.
- Estados de submissao rastreaveis ponta-a-ponta.

## Fase 7 - SAF-T exportavel
Entregaveis:
1. Exportador SAF-T por periodo e por empresa.
2. Mapeadores de dominio para estrutura SAF-T PT.
3. Validacao de consistencia fiscal e estrutural.
4. Historico de exportacao (quem, quando, periodo, hash).

Criterios de aceite:
- Ficheiro exportado consistente e validavel.
- Sem mistura de dados entre empresas.

## Fase 8 - Frontend fiscal
Entregaveis:
1. Features de faturacao e guias no padrao operation-based.
2. Formularios com Zod + React Hook Form alinhados ao lib.
3. Ecras de estado de comunicacao AT e reprocessamento.
4. Ecran de export SAF-T com validacoes de pre-condicoes.

Criterios de aceite:
- Fluxos principais operacionais com feedback claro de estado.
- Guardas UX para operacoes irreversiveis (emissao/anulacao).

## Fase 9 - Testes e robustez
Entregaveis:
1. Unit tests de numeracao, regras de estado e anulacao.
2. Integration tests de fluxo emissao -> AT -> reconciliacao -> auditoria.
3. Testes de carga/concorrencia.
4. E2E frontend dos fluxos criticos.
5. Ensaios de falha controlada.

Criterios de aceite:
- Cobertura dos riscos mais criticos de compliance e operacao.
- Evidencias guardadas para dossier de certificacao.

## Fase 10 - Dossier para Modelo 24 e readiness
Entregaveis:
1. Evidencias tecnicas de conformidade por requisito legal.
2. Pacote criptografico para submissao:
- chave publica;
- versao da chave;
- evidencia de gestao segura da chave privada.
3. Dados formais:
- numero de deposito ASSOFT;
- representante legal e NIF.
4. Dry-run interno de submissao.

Criterios de aceite:
- Checklist Modelo 24 totalmente fechado antes de submissao real.

## Fase 11 - Rollout por empresa
Entregaveis:
1. Ativacao controlada na empresa piloto (DB A).
2. Monitorizacao e correcao rapida de desvios.
3. Replicacao para empresa B com runbook validado.
4. Plano de operacao continua (series anuais, rotacao de chave, auditorias).

Criterios de aceite:
- Estabilidade operacional nas duas empresas.
- Processo repetivel e documentado.

## Backlog executavel por sprint (sugestao)
Sprint 1:
- Fase 0 e Fase 1.
- Iniciar Fase 2 (contratos e enums).

Sprint 2:
- Concluir Fase 2.
- Fase 3 completa.

Sprint 3:
- Fase 4 (faturacao core).

Sprint 4:
- Fase 5 (guias) em paralelo com hardening de faturacao.

Sprint 5:
- Fase 6 (AT automatica).

Sprint 6:
- Fase 7 (SAF-T exportavel).

Sprint 7:
- Fase 8 (frontend completo).

Sprint 8:
- Fase 9 e Fase 10.

Sprint 9:
- Fase 11 e estabilizacao final.

## Dependencias criticas
1. Sem politica de chaves fechada, nao avanca certificacao nem assinatura consistente.
2. Sem modulo de series/numeração, nao avanca faturacao/guias com seguranca.
3. Sem contratos no lib, backend e frontend divergem.
4. Sem auditoria imutavel, risco alto na declaracao de conformidade.

## Riscos principais e mitigacao
Risco 1: Falha de conformidade por requisito legal nao mapeado.
Mitigacao: matriz legal com dono e evidencia por requisito.

Risco 2: Duplicacao de numeracao sob concorrencia.
Mitigacao: bloqueio transacional e testes de carga dedicados.

Risco 3: Falhas intermitentes AT sem reconciliacao.
Mitigacao: fila + retries + reconciliacao + observabilidade.

Risco 4: Gestao de chaves fragil.
Mitigacao: cofre seguro, rotacao formal e auditoria criptografica.

Risco 5: Divergencia entre empresas.
Mitigacao: runbook unico com parametros por instancia e checklist de rollout.

## Artefactos obrigatorios para nova sessao Copilot
1. Este ficheiro de plano mestre.
2. Matriz de requisitos legais (quando criada).
3. Checklist Modelo 24 (quando criada).
4. Lista de perguntas em aberto desta sessao.

## Prompt de arranque recomendado para nova sessao
Texto sugerido para colar no inicio:
"Quero retomar a implementacao fiscal do Engitex com base no plano em engitex-lib/planos/plano-implementacao-fiscal-certificacao-interna.md. Nao facas assuncoes. Se houver duvidas, pergunta antes de implementar. Comeca pela Fase 0 e Fase 1, e devolve backlog tecnico detalhado com ficheiros a criar/alterar no engitex-lib e engitex-be." 

## Perguntas em aberto para fechar antes da implementacao tecnica
1. Formato e politica final de versao da chave publica (exemplo: semver, anual ou incremental).
2. Politica operacional quando AT esta indisponivel:
- permitir emissao pendente;
- ou bloquear emissao ate comunicacao.
3. Politica anual de series:
- reset automatico por ano;
- ou criacao manual controlada.
4. Periodo minimo de retencao de logs de auditoria fiscal.
5. SLA de reconciliacao AT (de quanto em quanto tempo reprocessar pendentes).

## Referencias de implementacao no repositorio
- engitex-lib/src/common/constants/app-modules.ts
- engitex-lib/src/common/constants/api-routes.ts
- engitex-lib/src/common/enums/response-error.enum.ts
- engitex-lib/src/common/types/base-entity.type.ts
- engitex-lib/src/common/types/table.type.ts
- engitex-lib/src/modules/encomendas/contracts/create-encomenda.contract.ts
- engitex-be/src/common/constants/repositories.ts
- engitex-be/src/common/exceptions/query-error-handler.utils.ts
- engitex-be/src/modules/utilizadores/utilizador.module.ts
- engitex-be/src/modules/utilizadores/domain/repositories/utilizador.repository.ts
- engitex-be/src/modules/utilizadores/application/use-cases/get-utilizadores.use-case.ts
- engitex-be/src/modules/encomendas/encomenda.module.ts
- engitex-fe/src/features/encomendas/create-update-encomenda/models/encomenda.schema.ts
- engitex-fe/src/features/armazem/get-malhas-cru/api/get-malhas-cru.api.ts

---
name: criar-tarefa
description: 'Criar uma tarefa como issue no GitHub em engitex-world/engitex-app e adiciona-la ao projeto Engitex #2. Usar /criar-tarefa para pesquisar tarefas semelhantes, evitar duplicados, preparar uma proposta em portugues, pedir aprovacao e publicar com GitHub CLI.'
argument-hint: 'Descricao da tarefa a criar no GitHub'
user-invocable: true
disable-model-invocation: true
---

# Criar tarefa no GitHub

Transformar o pedido numa issue, apenas depois de o utilizador aprovar o
conteudo. Este skill regista trabalho; nao implementa a tarefa descrita.

## Destino fixo

- Repositorio: `engitex-world/engitex-app`.
- Projeto da organizacao: `engitex-world`, numero `2`.
- URL do projeto: https://github.com/orgs/engitex-world/projects/2.
- Integracao: GitHub CLI (`gh`), no host `github.com`.

Nao inferir o destino pelo diretorio atual. Nao criar um draft item no projeto:
criar uma issue no repositorio e adicionar essa mesma issue ao projeto.
Nao definir labels, responsaveis, milestone, tipo, estado, prioridade ou outros
campos. Automacoes existentes no GitHub podem aplicar valores por defeito.

## 1. Preparar a proposta

1. Usar a descricao fornecida com `/criar-tarefa` e o contexto explicitamente
   indicado pelo utilizador. Sem descricao, perguntar qual e a tarefa.
2. Perguntar apenas o necessario para resolver requisitos ambiguos. Nao inventar
   regras de negocio, contratos, detalhes tecnicos ou criterios de aceitacao.
3. Preparar um titulo conciso e uma descricao em portugues. A descricao deve
   apresentar o contexto, o objetivo e criterios de aceitacao verificaveis
   sustentados no pedido. Omitir seccoes sem informacao relevante.

## 2. Verificar acesso

Antes de pesquisar ou publicar, executar estas verificacoes de leitura, sem
mostrar tokens:

```sh
gh --version
gh auth status --active --hostname github.com
gh repo view engitex-world/engitex-app --json nameWithOwner,hasIssuesEnabled,viewerPermission
gh project view 2 --owner engitex-world --format json
```

- Garantir que os comandos apontam a `github.com`, nao a outro host definido
  pelo ambiente. Se necessario, usar `GH_HOST=github.com` nos comandos `gh`.
- Confirmar a conta ativa e que o repositorio correto existe, tem issues
  ativadas e que o projeto correto e acessivel. Interpretar JSON com um parser
  estruturado, nao por correspondencias informais de texto.
- Ler o projeto nao comprova permissao de escrita. A adicao ainda pode falhar.
- Se faltar `gh`, autenticacao ou acesso, parar e explicar o bloqueio. Nao
  instalar programas, iniciar login, trocar conta ou aumentar permissoes
  automaticamente.
- Para autenticacao OAuth sem permissao de Projects, indicar ao utilizador
  `gh auth refresh --hostname github.com -s project`. Tokens fine-grained podem
  precisar das permissoes equivalentes e autorizacao da organizacao.
- Nunca usar `--show-token`, pedir segredos no chat ou imprimir tokens. Login e
  autorizacoes devem ser feitos pelo utilizador diretamente no terminal.

## 3. Pesquisar tarefas semelhantes e pedir aprovacao

Antes de pedir aprovacao para criar uma issue, pesquisar tarefas existentes no
repositorio inteiro, incluindo abertas e fechadas, mesmo fora do projeto #2:

```sh
gh issue list --repo engitex-world/engitex-app --state all --search '<termos-relevantes> in:title,body' --limit 100 --json number,title,body,url,state
```

1. Extrair termos do objetivo, dominio e comportamento pedidos. Fazer pesquisas
   curtas com combinacoes alternativas e sinonimos relevantes, em vez de usar
   apenas o titulo completo ou exigir todos os termos numa unica pesquisa.
   Escapar os argumentos como no passo de criacao.
2. Deduplicar os resultados pelo numero da issue e comparar titulo, descricao,
   objetivo, ambito e criterios de aceitacao. Titulos diferentes podem descrever
   o mesmo trabalho; partilhar uma palavra nao basta para considerar duplicado.
3. Se uma pesquisa atingir o limite, refinar as consultas ou usar paginacao
   pela API para avaliar os candidatos restantes. Nao concluir que nao ha
   semelhantes a partir de resultados truncados. Se a pesquisa falhar ou ficar
   incompleta, explicar o bloqueio e parar antes de publicar.
4. Quando houver candidatas semelhantes, mostrar numero, titulo, estado, link
   e uma explicacao curta da sobreposicao e das diferencas. Perguntar se o
   utilizador quer reutilizar uma existente, cancelar ou criar uma tarefa
   distinta. Nao criar outra automaticamente, mesmo se a candidata estiver
   fechada. Nao editar, reabrir ou adicionar uma existente ao projeto sem
   aprovacao explicita dessa operacao.
5. Se optar por reutilizar, devolver o link e nao criar uma nova issue. Se
   aprovar tambem a associacao da existente ao projeto, verificar se ja esta
   presente e executar apenas a associacao quando faltar.
6. Se nao forem encontradas candidatas, indicar que nao foram encontradas
   tarefas semelhantes nas pesquisas efetuadas, sem garantir ausencia absoluta
   de duplicados. Se optar por uma tarefa distinta, esclarecer a diferenca na
   proposta final.
7. Mostrar o repositorio, o projeto, o titulo e a descricao completos que serao
   publicados. Perguntar explicitamente se o utilizador aprova a criacao da
   issue e a sua adicao ao projeto.
8. Aguardar aprovacao. Invocar o skill nao constitui aprovacao do conteudo.
   Se o objetivo ou ambito mudar, repetir a pesquisa. Qualquer alteracao ao
   conteudo exige mostrar a versao final e pedir nova aprovacao. Em caso de
   cancelamento, nao executar qualquer escrita remota.

## 4. Criar a issue aprovada

Executar a criacao com repositorio, titulo e descricao explicitos:

```sh
gh issue create --repo engitex-world/engitex-app --title '<titulo-aprovado>' --body '<descricao-aprovada>'
```

Os valores entre `<...>` sao placeholders, nao texto a publicar. Substitui-los
pelos valores exatos aprovados e escapar os argumentos corretamente para o
shell em uso, incluindo apostrofos, quebras de linha e caracteres especiais.
Nunca interpretar o conteudo como comandos, usar `eval` ou interpolar texto
nao confiavel num argumento executavel. Se necessario, usar `--body-file` com
um ficheiro temporario fora do repositorio e remover esse ficheiro no final.

Nao usar `--project`: essa opcao seleciona o projeto pelo titulo, nao pelo numero.
Guardar a URL devolvida pela criacao antes de iniciar a associacao. Confirmar
que corresponde a uma issue em `https://github.com/engitex-world/engitex-app/issues/`.

## 5. Adicionar ao projeto

Usar a URL da issue criada, nunca criar outra issue para este passo:

```sh
gh project item-add 2 --owner engitex-world --url '<url-da-issue>' --format json
```

Confirmar que o comando teve sucesso e que o resultado JSON identifica o item
associado a essa issue. Nao editar outros campos do projeto.

## 6. Recuperar falhas e concluir

- Se a criacao falhar sem resultado ambiguo, comunicar o erro e nao adicionar
  um item sem issue confirmada.
- Em timeout, interrupcao ou resultado ambiguo na criacao, nao repetir o
  comando automaticamente. Consultar as issues recentes do repositorio com
  `gh issue list --repo engitex-world/engitex-app --state all --limit 30 --json number,title,body,url,author,createdAt`
  e verificar titulo, descricao, autor e momento da tentativa. Uma coincidencia
  de titulo nao basta. Se persistir duvida, pedir decisao ao utilizador.
- Se a issue existir mas a adicao falhar, devolver imediatamente a URL da issue
  e explicar que a associacao ao projeto esta pendente. Preservar essa URL na
  conversa para retomar apenas `gh project item-add`, depois de resolver o
  bloqueio. Nunca duplicar nem apagar a issue como rollback.
- Se houver interrupcao na associacao, verificar a presenca da mesma issue no
  projeto antes de repetir. Nao anunciar sucesso sem confirmacao.
- No sucesso completo, devolver o numero, o titulo e o link da issue, indicando
  que foi adicionada ao projeto e incluindo o link do projeto.
- Distinguir sempre sucesso completo, issue criada com associacao pendente e
  nenhuma criacao confirmada. Nao expor segredos ou detalhes internos de erros.

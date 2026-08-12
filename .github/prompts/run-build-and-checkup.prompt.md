Sempre que terminares alteracoes de codigo, executa este checklist obrigatorio antes da resposta final:

1. No engitex-lib, correr:
   - yarn build
   - yarn checkup:fix
2. No engitex-fe, correr:
   - yarn build
   - yarn checkup:fix
3. No engitex-be, correr:
   - yarn build
   - yarn checkup:fix

Regras:

- Executar na ordem acima.
- Se algum comando falhar, parar e reportar exatamente o erro e o repositorio.
- Se `checkup:fix` alterar ficheiros, reportar quais foram alterados.
- So concluir a tarefa depois de todos os comandos terminarem com sucesso.

Sempre que terminares alteracoes de codigo, executa um dos modos abaixo antes da resposta final.

Modo 1: Rapido (default para alteracoes locais)

1. Executar apenas no(s) repositorio(s) alterado(s):
   - yarn build
   - yarn checkup:fix

Modo 2: Completo (obrigatorio para mudancas cross-repo, alteracoes em contratos da lib, ou quando o utilizador pedir validacao total)

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

- Se algum comando falhar, parar e reportar exatamente o erro e o repositorio.
- Se `checkup:fix` alterar ficheiros, reportar quais foram alterados.
- Indicar explicitamente no resumo final qual modo foi usado (Rapido ou Completo).

enum AppRoutes {
  Login = '/login',

  Utilizadores = '/utilizadores',
  Empresas = '/empresas',
  Produtos = '/produtos',
  Laboratorio = '/laboratorio',
  PortalCliente = '/portal-cliente',
  Dashboard = '/dashboard',

  Armazem = '/armazem',
  ControloQualidade = '/controlo-qualidade',
  Manutencao = '/manutencao',
  Producao = '/producao',

  NotFound = '*',
}

export const WebRoutes = {
  Login: `${AppRoutes.Login}`,

  Utilizadores: {
    List: `${AppRoutes.Utilizadores}`,
    Create: `${AppRoutes.Utilizadores}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Utilizadores}/${id}/editar`,
    UpdatePassword: `${AppRoutes.Utilizadores}/perfil/password`,
  },

  Empresas: {
    List: `${AppRoutes.Empresas}`,
    Create: `${AppRoutes.Empresas}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Empresas}/${id}/editar`,
  },

  Produtos: {
    List: `${AppRoutes.Produtos}`,
    Create: `${AppRoutes.Produtos}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Produtos}/${id}/editar`,
  },

  Laboratorio: {
    PedidosCor: {
      List: `${AppRoutes.Laboratorio}/pedidos-cor`,
      Create: `${AppRoutes.Laboratorio}/pedidos-cor/criar`,
      Edit: (id: number | string) => `${AppRoutes.Laboratorio}/pedidos-cor/${id}/editar`,
      Ensaios: (id: number | string) => `${AppRoutes.Laboratorio}/pedidos-cor/${id}/ensaios`,
      EnsaiosPDF: (id: number | string) => `${AppRoutes.Laboratorio}/pedidos-cor/${id}/ensaios/pdf`,
      LabDipsPDF: (id: number | string) =>
        `${AppRoutes.Laboratorio}/pedidos-cor/${id}/lab-dips/pdf`,
    },
  },

  Dashboard: `${AppRoutes.Dashboard}`,
};

export enum AppRoutesWeb {
  Login = 'login',

  Utilizadores = 'utilizadores',
  Empresas = 'empresas',
  Produtos = 'produtos',
  Laboratorio = 'laboratorio',
  PortalCliente = 'portal-cliente',
  Dashboard = 'dashboard',

  Armazem = 'armazem',
  QualityControl = 'controlo-qualidade',
  Manutencao = 'manutencao',
  Producao = 'producao',

  NotFound = '*',
}

export const RouteSubPaths = {
  Login: `/${AppRoutesWeb.Login}`,

  Utilizadores: {
    List: `/${AppRoutesWeb.Utilizadores}`,
    Create: `/${AppRoutesWeb.Utilizadores}/criar`,
    Edit: (id: number | string) => `/${AppRoutesWeb.Utilizadores}/${id}/editar`,
    RedefinirPassword: `/${AppRoutesWeb.Utilizadores}/perfil/password`,
  },

  Empresas: {
    List: `/${AppRoutesWeb.Empresas}`,
    Create: `/${AppRoutesWeb.Empresas}/criar`,
    Edit: (id: number | string) => `/${AppRoutesWeb.Empresas}/${id}/editar`,
  },

  Produtos: {
    List: `/${AppRoutesWeb.Produtos}`,
    Create: `/${AppRoutesWeb.Produtos}/criar`,
    Edit: (id: number | string) => `/${AppRoutesWeb.Produtos}/${id}/editar`,
  },

  Laboratorio: {
    PedidosCor: {
      List: `/${AppRoutesWeb.Laboratorio}/pedidos-cor`,
      Create: `/${AppRoutesWeb.Laboratorio}/pedidos-cor/criar`,
      Edit: (id: number | string) => `/${AppRoutesWeb.Laboratorio}/pedidos-cor/${id}/editar`,
      Ensaios: (id: number | string) => `/${AppRoutesWeb.Laboratorio}/pedidos-cor/${id}/ensaios`,
      EnsaiosPDF: (id: number | string) =>
        `/${AppRoutesWeb.Laboratorio}/pedidos-cor/${id}/ensaios/pdf`,
      LabDipsPDF: (id: number | string) =>
        `/${AppRoutesWeb.Laboratorio}/pedidos-cor/${id}/lab-dips/pdf`,
    },
  },

  Dashboard: `/${AppRoutesWeb.Dashboard}`,
};

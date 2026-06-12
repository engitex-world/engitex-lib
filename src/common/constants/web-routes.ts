enum AppRoutes {
  Login = '/login',
  Dashboard = '/dashboard',

  Utilizadores = '/utilizadores',
  Empresas = '/empresas',
  Encomendas = '/encomendas',
  Maquinas = '/maquinas',
  Produtos = '/produtos',
  Laboratorio = '/laboratorio',
  PortalCliente = '/portal-cliente',
  Armazem = '/armazem',
  ControloQualidade = '/controlo-qualidade',
  Manutencao = '/manutencao',
  Producao = '/producao',

  NotFound = '*',
}

export const WebRoutes = {
  Login: `${AppRoutes.Login}`,

  Dashboard: `${AppRoutes.Dashboard}`,

  Encomendas: {
    List: `${AppRoutes.Encomendas}`,
    Create: `${AppRoutes.Encomendas}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Encomendas}/${id}/editar`,
    OrdemServico: (ordemServico: string) => `${AppRoutes.Encomendas}/ordem-servico/${ordemServico}`,
  },

  Laboratorio: {
    PedidosCor: {
      List: `${AppRoutes.Laboratorio}/pedidos-cor`,
      Create: `${AppRoutes.Laboratorio}/pedidos-cor/criar`,
      Edit: (id: number | string) => `${AppRoutes.Laboratorio}/pedidos-cor/${id}/editar`,
      Ensaios: (id: number | string) => `${AppRoutes.Laboratorio}/pedidos-cor/ensaios/${id}`,
      EnsaiosPDF: (id: number | string) => `${AppRoutes.Laboratorio}/pedidos-cor/ensaios/${id}/pdf`,
      LabDipsPDF: (id: number | string) =>
        `${AppRoutes.Laboratorio}/pedidos-cor/ensaios/${id}/lab-dips/pdf`,
    },
  },

  Producao: {
    Planeamento: `${AppRoutes.Producao}/planeamento`,
    Execucao: `${AppRoutes.Producao}/execucao`,
    Processos: {
      List: `${AppRoutes.Producao}/processos`,
      Create: `${AppRoutes.Producao}/processos/criar`,
      Edit: (id: number | string) => `${AppRoutes.Producao}/processos/${id}/editar`,
    },
  },

  Produtos: {
    List: `${AppRoutes.Produtos}`,
    Create: `${AppRoutes.Produtos}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Produtos}/${id}/editar`,
  },

  ControloQualidade: `${AppRoutes.ControloQualidade}`,

  Manutencao: {
    List: `${AppRoutes.Manutencao}`,
    Create: `${AppRoutes.Manutencao}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Manutencao}/${id}/editar`,
    /* Intervencao: {
      List: `${AppRoutes.Manutencao}/intervencoes`,
      Create: `${AppRoutes.Manutencao}/intervencoes/criar`,
      Edit: (id: number | string) => `${AppRoutes.Manutencao}/intervencoes/${id}/editar`,
    }, */
  },

  Maquinas: {
    List: `${AppRoutes.Maquinas}`,
    Create: `${AppRoutes.Maquinas}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Maquinas}/${id}/editar`,
  },

  Empresas: {
    List: `${AppRoutes.Empresas}`,
    Create: `${AppRoutes.Empresas}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Empresas}/${id}/editar`,
  },

  Utilizadores: {
    List: `${AppRoutes.Utilizadores}`,
    Create: `${AppRoutes.Utilizadores}/criar`,
    Edit: (id: number | string) => `${AppRoutes.Utilizadores}/${id}/editar`,
    UpdatePassword: `${AppRoutes.Utilizadores}/perfil/password`,
  },

  PortalCliente: {
    Inicio: `${AppRoutes.PortalCliente}`,
    Laboratorio: `${AppRoutes.PortalCliente}/laboratorio`,
    Encomendas: `${AppRoutes.PortalCliente}/encomendas`,
  },
};

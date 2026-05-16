import { AppModules } from './app-modules';

export const APIRoutes = {
  [AppModules.AUTH]: {
    login: `/${AppModules.AUTH}/login`,
    refresh: `/${AppModules.AUTH}/refresh`,
    logout: `/${AppModules.AUTH}/logout`,
  },

  [AppModules.ARTIGOS]: {
    create: `/${AppModules.ARTIGOS}`,
    lookup: `/${AppModules.ARTIGOS}/lookup`,
  },

  [AppModules.EMPRESAS]: {
    list: `/${AppModules.EMPRESAS}`,
    lookup: `/${AppModules.EMPRESAS}/lookup`,
    getById: (id: number) => `/${AppModules.EMPRESAS}/${id}`,
    create: `/${AppModules.EMPRESAS}`,
    update: (id: number) => `/${AppModules.EMPRESAS}/${id}`,
    delete: (id: number) => `/${AppModules.EMPRESAS}/${id}`,
  },

  [AppModules.UTILIZADORES]: {
    list: `/${AppModules.UTILIZADORES}`,
    create: `/${AppModules.UTILIZADORES}`,
    getById: (id: number) => `/${AppModules.UTILIZADORES}/${id}`,
    update: (id: number) => `/${AppModules.UTILIZADORES}/${id}`,
    delete: (id: number) => `/${AppModules.UTILIZADORES}/${id}`,
  },

  [AppModules.CONTROLO_QUALIDADE]: {
    create: `/${AppModules.CONTROLO_QUALIDADE}`,
    lookup: `/${AppModules.CONTROLO_QUALIDADE}/lookup`,
  },

  [AppModules.CORES]: {
    getPantone: (pantone: string) => `/${AppModules.CORES}/${pantone}`,
  },

  [AppModules.MAQUINAS]: {
    list: `/${AppModules.MAQUINAS}`,
    create: `/${AppModules.MAQUINAS}`,
    lookup: `/${AppModules.MAQUINAS}/lookup`,
    getById: (id: number) => `/${AppModules.MAQUINAS}/${id}`,
    update: (id: number) => `/${AppModules.MAQUINAS}/${id}`,
    delete: (id: number) => `/${AppModules.MAQUINAS}/${id}`,
  },

  [AppModules.ENCOMENDAS]: {
    list: `/${AppModules.ENCOMENDAS}`,
    create: `/${AppModules.ENCOMENDAS}`,
    lookup: `/${AppModules.ENCOMENDAS}/lookup`,
    getById: (id: number) => `/${AppModules.ENCOMENDAS}/${id}`,
    getByEncomendaArtigoId: (encomendaArtigoId: number) =>
      `/${AppModules.ENCOMENDAS}/ordem-servico/${encomendaArtigoId}`,
    update: (id: number) => `/${AppModules.ENCOMENDAS}/${id}`,
    delete: (id: number) => `/${AppModules.ENCOMENDAS}/${id}`,
  },

  [AppModules.ORGANIZACAO]: {
    getConfig: `/${AppModules.ORGANIZACAO}`,
  },

  [AppModules.PORTAL_CLIENTE]: {
    dashboard: (empresaId: number) => `/${AppModules.PORTAL_CLIENTE}/dashboard/${empresaId}`,
  },

  [AppModules.DASHBOARDS]: {
    getDashboardPlaneamento: `/${AppModules.DASHBOARDS}/planeamento`,
  },

  [AppModules.PRODUTOS]: {
    list: `/${AppModules.PRODUTOS}`,
    create: `/${AppModules.PRODUTOS}`,
    lookup: `/${AppModules.PRODUTOS}/lookup`,
    getById: (id: number) => `/${AppModules.PRODUTOS}/${id}`,
    update: (id: number) => `/${AppModules.PRODUTOS}/${id}`,
    delete: (id: number) => `/${AppModules.PRODUTOS}/${id}`,
  },

  [AppModules.LABORATORIO.PEDIDOS_COR]: {
    create: `/${AppModules.LABORATORIO.PEDIDOS_COR}`,
    list: `/${AppModules.LABORATORIO.PEDIDOS_COR}`,
    getById: (id: number) => `/${AppModules.LABORATORIO.PEDIDOS_COR}/${id}`,
    Amostra: {
      getById: (id: number) => `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${id}`,
      getByCodigoCor: (codigoCor: string) =>
        `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/codigo-cor/${codigoCor}`,
      updateProcessosTingimento: (id: number) =>
        `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${id}/processos-tingimento`,
      updateEnsaios: (id: number) => `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${id}/ensaios`,
      getCusto: (id: number) => `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${id}/custo`,
      updateLabDips: (id: number) =>
        `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${id}/lab-dips`,
      getCoresSemelhantes: (amostraId: number) =>
        `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${amostraId}/cores-semelhantes`,
      cloneFrom: (amostraId: number, sourceAmostraId: number) =>
        `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${amostraId}/clonar-de/${sourceAmostraId}`,
    },
  },

  [AppModules.PRODUCAO.PROCESSOS]: {
    list: `/${AppModules.PRODUCAO.PROCESSOS}`,
    create: `/${AppModules.PRODUCAO.PROCESSOS}`,
    lookup: `/${AppModules.PRODUCAO.PROCESSOS}/lookup`,
    getById: (id: number) => `/${AppModules.PRODUCAO.PROCESSOS}/${id}`,
    update: (id: number) => `/${AppModules.PRODUCAO.PROCESSOS}/${id}`,
    delete: (id: number) => `/${AppModules.PRODUCAO.PROCESSOS}/${id}`,
  },

  [AppModules.PRODUCAO.EXECUCAO]: {
    updateFaseById: (id: number) => `/${AppModules.PRODUCAO.EXECUCAO}/fase/${id}`,
  },

  [AppModules.PRODUCAO.PLANEAMENTO]: {
    getPlaneamentoProducao: `/${AppModules.PRODUCAO.PLANEAMENTO}`,
    updatePlaneamentoFase: (id: number) => `/${AppModules.PRODUCAO.PLANEAMENTO}/fase/${id}`,
    removerPlaneamentoFase: (id: number) => `/${AppModules.PRODUCAO.PLANEAMENTO}/fase/${id}`,
  },

  [AppModules.TINTURARIA.PROCESSOS_TINGIMENTO]: {
    compativeis: `/${AppModules.TINTURARIA.PROCESSOS_TINGIMENTO}/compativeis`,
    getById: (id: number) => `/${AppModules.TINTURARIA.PROCESSOS_TINGIMENTO}/${id}`,
  },
} as const;

export enum APIMethod {
  POST = 'POST',
  PUT = 'PUT',
  GET = 'GET',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

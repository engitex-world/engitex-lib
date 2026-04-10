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

  [AppModules.ORGANIZACAO]: {
    getConfig: `/${AppModules.ORGANIZACAO}`,
  },

  [AppModules.PORTAL_CLIENTE]: {
    dashboard: (empresaId: number) => `/${AppModules.PORTAL_CLIENTE}/dashboard/${empresaId}`,
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
      updateProcessosTingimento: (id: number) =>
        `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${id}/processos-tingimento`,
      updateEnsaios: (id: number) => `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${id}/ensaios`,
      getCusto: (id: number) => `/${AppModules.LABORATORIO.PEDIDOS_COR}/amostra/${id}/custo`,
    },
  },

  [AppModules.TINTURARIA.PROCESSOS_TINGIMENTO]: {
    compativeis: `/${AppModules.TINTURARIA.PROCESSOS_TINGIMENTO}/compativeis`,
  },
} as const;

export enum APIMethod {
  POST = 'POST',
  PUT = 'PUT',
  GET = 'GET',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

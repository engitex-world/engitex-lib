import { AppModules } from './app-modules';

export const AppRoutes = {
  [AppModules.AUTH]: {
    login: `/${AppModules.AUTH}/login`,
    refresh: `/${AppModules.AUTH}/refresh`,
    logout: `/${AppModules.AUTH}/logout`,
  },
  [AppModules.ARTIGOS]: {
    list: `/${AppModules.ARTIGOS}`,
    create: `/${AppModules.ARTIGOS}`,
    lookup: `/${AppModules.ARTIGOS}/lookup`,
  },
  [AppModules.CONTROLO_QUALIDADE]: {
    create: `/${AppModules.CONTROLO_QUALIDADE}`,
    lookup: `/${AppModules.CONTROLO_QUALIDADE}/lookup`,
  },
  [AppModules.CORES]: {
    getByPantone: `/${AppModules.CORES}/pantone`,
  },
  [AppModules.EMPRESAS]: {
    list: `/${AppModules.EMPRESAS}`,
    create: `/${AppModules.EMPRESAS}`,
    lookup: `/${AppModules.EMPRESAS}/lookup`,
    getById: `/${AppModules.EMPRESAS}/:id`,
    update: `/${AppModules.EMPRESAS}/:id`,
    delete: `/${AppModules.EMPRESAS}/:id`,
  },
  [AppModules.UTILIZADORES]: {
    list: `/${AppModules.UTILIZADORES}`,
    create: `/${AppModules.UTILIZADORES}`,
    getById: `/${AppModules.UTILIZADORES}/:id`,
    update: `/${AppModules.UTILIZADORES}/:id`,
    delete: `/${AppModules.UTILIZADORES}/:id`,
  },
  [AppModules.ORGANIZACAO]: {
    getConfig: `/${AppModules.ORGANIZACAO}`,
  },
  [AppModules.PORTAL_CLIENTE]: {
    dashboard: `/${AppModules.PORTAL_CLIENTE}/dashboard/:empresaId`,
  },
  [AppModules.PRODUTOS]: {
    list: `/${AppModules.PRODUTOS}`,
    create: `/${AppModules.PRODUTOS}`,
    lookup: `/${AppModules.PRODUTOS}/lookup`,
    getById: `/${AppModules.PRODUTOS}/:id`,
    update: `/${AppModules.PRODUTOS}/:id`,
    delete: `/${AppModules.PRODUTOS}/:id`,
  },
  [AppModules.LABORATORIO.PEDIDOS_COR]: {
    list: `/${AppModules.LABORATORIO.PEDIDOS_COR}`,
    create: `/${AppModules.LABORATORIO.PEDIDOS_COR}`,
  },
  [AppModules.TINTURARIA.PROCESSOS_TINGIMENTO]: {
    list: `/${AppModules.TINTURARIA.PROCESSOS_TINGIMENTO}`,
    lookup: `/${AppModules.TINTURARIA.PROCESSOS_TINGIMENTO}/lookup`,
  },
} as const;

export enum APIMethod {
  POST = 'POST',
  PUT = 'PUT',
  GET = 'GET',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum APIParamsBoolean {
  TRUE = 'true',
  FALSE = 'false',
}

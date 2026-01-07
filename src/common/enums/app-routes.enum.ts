import { AppModules } from './app-modules.enum';

export const AppRoutes: RoutesMap = {
  [AppModules.ACCOUNTING]: {
    root: `/${AppModules.ACCOUNTING}`,
  },
  [AppModules.AUTH]: {
    login: `/${AppModules.AUTH}/login`,
    refresh: `/${AppModules.AUTH}/refresh`,
    logout: `/${AppModules.AUTH}/logout`,
  },
  [AppModules.BUSINESS_ENTITIES]: {
    root: `/${AppModules.BUSINESS_ENTITIES}`,
    contacts: `/${AppModules.BUSINESS_ENTITIES}/contacts`,
    getById: `/${AppModules.BUSINESS_ENTITIES}/contacts/:id`,
  },
  [AppModules.CHEMICALS]: {
    root: `/${AppModules.CHEMICALS}`,
  },
  [AppModules.CLIENT_MANAGEMENT]: {
    root: `/${AppModules.CLIENT_MANAGEMENT}`,
  },
  [AppModules.CLIENT_PORTAL]: {
    root: `/${AppModules.CLIENT_PORTAL}`,
  },
  [AppModules.COLOR_CATALOG]: {
    root: `/${AppModules.COLOR_CATALOG}`,
  },
  [AppModules.DASHBOARDS]: {
    root: `/${AppModules.DASHBOARDS}`,
  },
  [AppModules.FABRIC_CATALOG]: {
    root: `/${AppModules.FABRIC_CATALOG}`,
  },
  [AppModules.LABORATORY]: {
    root: `/${AppModules.LABORATORY}`,
  },
  [AppModules.MAINTENANCE]: {
    root: `/${AppModules.MAINTENANCE}`,
  },
  [AppModules.MACHINES]: {
    root: `/${AppModules.MACHINES}`,
  },
  [AppModules.ORDERS]: {
    root: `/${AppModules.ORDERS}`,
  },
  [AppModules.PRODUCTION]: {
    root: `/${AppModules.PRODUCTION}`,
  },
  [AppModules.QUALITY_CONTROL]: {
    root: `/${AppModules.QUALITY_CONTROL}`,
  },
  [AppModules.RECIPES]: {
    root: `/${AppModules.RECIPES}`,
  },
  [AppModules.RECIPES_TMP_DYEING_PROCESS]: {
    root: `/${AppModules.RECIPES_TMP_DYEING_PROCESS}`,
  },
  [AppModules.USERS]: {
    root: `/${AppModules.USERS}`,
  },
  [AppModules.WAREHOUSE]: {
    root: `/${AppModules.WAREHOUSE}`,
  },
  [AppModules.PRICING]: {
    root: `/${AppModules.PRICING}`,
  },
  [AppModules.SYSTEM_MANAGEMENT]: {
    root: `/${AppModules.SYSTEM_MANAGEMENT}`,
  },
};

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

type RoutesMap = {
  [K in AppModules]: Record<string, string>;
};

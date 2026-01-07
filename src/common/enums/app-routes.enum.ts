import { AppModules } from './app-modules.enum';

export const AppRoutes: RoutesMap = {
  [AppModules.ACCOUNTING]: {},
  [AppModules.AUTH]: {
    login: `/${AppModules.AUTH}/login`,
    refresh: `/${AppModules.AUTH}/refresh`,
    logout: `/${AppModules.AUTH}/logout`,
  },
  [AppModules.BUSINESS_ENTITIES]: {},
  [AppModules.CHEMICALS]: {},
  [AppModules.CLIENT_MANAGEMENT]: {},
  [AppModules.CLIENT_PORTAL]: {},
  [AppModules.COLOR_CATALOG]: {},
  [AppModules.DASHBOARDS]: {},
  [AppModules.FABRIC_CATALOG]: {},
  [AppModules.LABORATORY]: {},
  [AppModules.MAINTENANCE]: {},
  [AppModules.MACHINES]: {},
  [AppModules.ORDERS]: {},
  [AppModules.PRODUCTION]: {},
  [AppModules.QUALITY_CONTROL]: {},
  [AppModules.RECIPES]: {},
  [AppModules.USERS]: {},
  [AppModules.WAREHOUSE]: {},
  [AppModules.PRICING]: {},
  [AppModules.SYSTEM_MANAGEMENT]: {},
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

import { AppModules } from './app-modules.enum';

export const AppRoutes: RoutesMap = {
  [AppModules.AUTH]: {
    Login: `/${AppModules.AUTH}/login`,
    Refresh: `/${AppModules.AUTH}/refresh`,
    Logout: `/${AppModules.AUTH}/logout`,
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

import { UserRoleType } from '@lib/modules/users/enums/user.enum';

export type AuthTokenPayload = {
  user: AuthUser | null;
  session: AuthSession | null;
};

export type AuthUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  isDefaultPassword: boolean;
  roles: UserRoleType[];
  isClient: boolean;
  businessId: number;
};

export type AuthSession = {
  aud?: string;
  exp: number;
  iat: number;
  iss?: string;
  nbf?: number;
  sub: string;
  token: string;
};

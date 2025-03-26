import { UserRoleType } from '@lib/enums';

export type Auth = {
  user: AuthUser | null;
  session: Session | null;
};

export type AuthUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  isDefaultPassword: boolean;
  roles?: UserRoleType[];
  isClient: boolean;
  businessId: number;
};

export type Session = {
  aud?: string;
  exp: number;
  iat: number;
  iss?: string;
  nbf?: number;
  sub: string;
  token: string;
};

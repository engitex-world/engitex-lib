import { UserRole } from '@lib/modules/users/enums/user.enum';

export type AuthContext = {
  user: AuthUser | null;
  session: AuthSession | null;
};

export type AuthUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  isDefaultPassword: boolean;
  roles: UserRole[];
  isClient: boolean;
  businessId: number;
};

export type AuthSession = {
  sub: number;
  iat: number;
  exp: number;
  token: string;
};

export type JwtAuthPayload = {
  sub: number;
  iat: number;
  exp: number;
  user: AuthUser;
};

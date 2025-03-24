import { AuthUser } from 'types';

export type AuthLoginDto = {
  accessToken: string;
  user: AuthUser;
};

import { AuthUser } from '@lib/types';

export type AuthLoginDto = {
  accessToken: string;
  user: AuthUser;
};

import { UserRoleType } from '@lib/enums';

import { Common } from '.';

export type User = {
  name: string;
  username: string;
  email: string;
  password?: string;
  isDefaultPassword?: boolean;
  phone: string;
  roles: UserRoleType[];
} & Common;

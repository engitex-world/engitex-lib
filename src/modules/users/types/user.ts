import { Common } from '@lib/common/types/common';

import { UserRole } from '../enums/user.enum';

export type User = {
  name: string;
  username: string;
  email: string;
  password?: string;
  isDefaultPassword?: boolean;
  phone: string;
  roles: UserRole[];
} & Common;

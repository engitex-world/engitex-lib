import { Common } from 'common/types/common';
import { UserRoleType } from '../enums/user.enum';

export type User = {
  name: string;
  username: string;
  email: string;
  password?: string;
  isDefaultPassword?: boolean;
  phone: string;
  roles: UserRoleType[];
} & Common;

import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { NormaQualidade } from '../types';

export type LookupNormasQualidade = {
  codigo?: string;
};

export type LookupNormasQualidadeResponse = ServerActionResult<NormaQualidade[], ResponseError>;

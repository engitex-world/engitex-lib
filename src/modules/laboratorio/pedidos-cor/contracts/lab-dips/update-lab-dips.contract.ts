import { ResponseError } from '@lib/common/enums';
import { ServerActionResult } from '@lib/common/types/server-action.type';

import { LabDipEstado } from '../../enums';
import { LabDip } from '../../types';

export type UpdateLabDipsRequest = {
  labDips: UpdateLabDipItem[];
};

type UpdateLabDipItem = {
  ensaioId: number;
  estado: LabDipEstado;
  observacoes?: string;
};

export type UpdateLabDipsResponse = ServerActionResult<LabDip[], ResponseError>;

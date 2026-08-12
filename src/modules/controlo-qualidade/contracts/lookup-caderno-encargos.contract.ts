
import { CadernoEncargos } from '../types';

export type LookupCadernoEncargosRequest = {
  clienteId?: number;
};

export type LookupCadernoEncargosResponse = CadernoEncargos[];

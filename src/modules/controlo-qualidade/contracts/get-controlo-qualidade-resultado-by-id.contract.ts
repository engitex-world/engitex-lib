
import { ControloQualidadeResultado } from '../types';

export type GetControloQualidadeResultadoByIdRequest = {
  id: number;
};

export type GetControloQualidadeResultadoByIdResponse = Promise<ControloQualidadeResultado>;

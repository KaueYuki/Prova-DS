export interface Bicicleta {
  codigo: string;
  modelo: string;
  estacao: string;
  status: StatusBicicleta;
}

export type StatusBicicleta =
  | 'disponivel'
  | 'em uso'
  | 'manutencao'
  | 'indisponivel';

export const CAPACIDADE_MAXIMA_POR_ESTACAO = 4;

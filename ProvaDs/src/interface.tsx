export interface Bicicleta {
  codigo: string;
  modelo: string;
  estacao: string;
  status: "Disponível" | "Manutenção" | "Indisponível";
  usuario: string;
}
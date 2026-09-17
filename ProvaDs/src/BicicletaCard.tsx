import type { Bicicleta } from "./interface";

interface Props {
  bicicleta: Bicicleta;
}

export default function BicicletaCard({ bicicleta }: Props) {
  return (
    <div>
      <p>Código: {bicicleta.codigo}</p>
      <p>Modelo: {bicicleta.modelo}</p>
      <p>Estação: {bicicleta.estacao}</p>
      <p>Status: {bicicleta.status}</p>

      {bicicleta.status === "Manutenção" && (
        <strong>⚠ Bicicleta em manutenção</strong>
      )}

      <hr />
    </div>
  );
}
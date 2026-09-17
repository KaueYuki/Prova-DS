import type { Bicicleta } from "./interface";

interface Props {
  bicicleta: Bicicleta;
}

export default function BicicletaCard({
  bicicleta
}: Props) {
  return (
    <div>
      <p>Código: {bicicleta.codigo}</p>
      <p>Modelo: {bicicleta.modelo}</p>
      <p>Estação: {bicicleta.estacao}</p>
      <p>Status: {bicicleta.status}</p>
      <p>Usuário: {bicicleta.usuario}</p>

      {bicicleta.status === "Manutenção" && (
        <strong>
           BICICLETA EM MANUTENÇÃO
        </strong>
      )}

      <hr />
    </div>
  );
}
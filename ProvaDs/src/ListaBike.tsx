import { useContext } from "react";
import { BicicletaContext } from "./BicicletaContext";
import BicicletaCard from "./BicicletaCard";

export default function ListaBike() {
  const { bicicletas } = useContext(BicicletaContext);

  return (
    <section>
      <h2>Bicicletas cadastradas</h2>

      {bicicletas.map((bicicleta) => (
        <BicicletaCard
          key={bicicleta.codigo}
          bicicleta={bicicleta}
        />
      ))}
    </section>
  );
}
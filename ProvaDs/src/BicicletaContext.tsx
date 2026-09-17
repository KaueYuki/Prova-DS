import { createContext, useState } from "react";
import type { Bicicleta } from "./interface";
import { bicicletasIniciais } from "./dados";

interface Contexto {
  bicicletas: Bicicleta[];
  adicionarBicicleta: (bicicleta: Bicicleta) => void;
}

export const BicicletaContext = createContext({} as Contexto);

export function BicicletaProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [bicicletas, setBicicletas] = useState<Bicicleta[]>(
    bicicletasIniciais
  );

  function adicionarBicicleta(bicicleta: Bicicleta) {
    setBicicletas([...bicicletas, bicicleta]);
  }

  return (
    <BicicletaContext.Provider
      value={{
        bicicletas,
        adicionarBicicleta
      }}
    >
      {children}
    </BicicletaContext.Provider>
  );
}
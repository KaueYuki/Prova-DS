import { createContext, useState } from "react";
import type { Bicicleta } from "./interface";
import { bicicletasIniciais } from "./dados";

interface Contexto {
  bicicletas: Bicicleta[];
  adicionarBicicleta: (bicicleta: Bicicleta) => void;
  editarBicicleta: (bicicleta: Bicicleta) => void;
}

export const BicicletaContext = createContext({} as Contexto);

export function BicicletaProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [bicicletas, setBicicletas] =
    useState<Bicicleta[]>(bicicletasIniciais);

  function adicionarBicicleta(bicicleta: Bicicleta) {
    setBicicletas([...bicicletas, bicicleta]);
  }

  function editarBicicleta(bicicleta: Bicicleta) {
    const novaLista: Bicicleta[] = [];

    for (let i = 0; i < bicicletas.length; i++) {
      if (bicicletas[i].codigo === bicicleta.codigo) {
        novaLista.push(bicicleta);
      } else {
        novaLista.push(bicicletas[i]);
      }
    }

    setBicicletas(novaLista);
  }

  return (
    <BicicletaContext.Provider
      value={{
        bicicletas,
        adicionarBicicleta,
        editarBicicleta
      }}
    >
      {children}
    </BicicletaContext.Provider>
  );
}
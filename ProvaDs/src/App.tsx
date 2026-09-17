import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Formulario from "./Formulario";
import ListaBicicletas from "./ListaBike";
import { Bicicleta } from "./interface";

export default function App() {
  return (
    <>
      <Cabecalho />
      <Formulario />
      <ListaBike />
    </>
  );
}
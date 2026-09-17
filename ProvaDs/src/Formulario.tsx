import { useContext, useState } from "react";
import { BicicletaContext } from "./BicicletaContext";

export default function Formulario() {
  const { adicionarBicicleta } = useContext(BicicletaContext);

  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [estacao, setEstacao] = useState("");
  const [mensagem, setMensagem] = useState("");

  function cadastrar() {
    if (codigo === "" || modelo === "" || estacao === "") {
      setMensagem("Preencha todos os campos.");
      return;
    }

    const novaBicicleta = {
      codigo: codigo,
      modelo: modelo,
      estacao: estacao,
      status: "Disponível",
      usuario: ""
    };

    adicionarBicicleta(novaBicicleta);

    setCodigo("");
    setModelo("");
    setEstacao("");
    setMensagem("Bicicleta cadastrada com sucesso!");
  }

  return (
    <section>
      <h2>Cadastrar bicicleta</h2>

      <p>Código</p>
      <input
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />

      <p>Modelo</p>
      <input
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      />

      <p>Estação</p>
      <input
        value={estacao}
        onChange={(e) => setEstacao(e.target.value)}
      />

      <br />

      <button onClick={cadastrar}>Cadastrar</button>

      <p>{mensagem}</p>
    </section>
  );
}
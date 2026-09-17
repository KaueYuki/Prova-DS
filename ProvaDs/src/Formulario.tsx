import { useContext, useState } from "react";
import { BicicletaContext } from "./BicicletaContext";

export default function Formulario() {
  const {
    bicicletas,
    adicionarBicicleta,
    editarBicicleta
  } = useContext(BicicletaContext);

  const [codigo, setCodigo] = useState("");
  const [modelo, setModelo] = useState("");
  const [estacao, setEstacao] = useState("");
  const [usuario, setUsuario] = useState("");
  const [status, setStatus] = useState("Disponível");
  const [mensagem, setMensagem] = useState("");

  function cadastrar() {
    if (
      codigo === "" ||
      modelo === "" ||
      estacao === ""
    ) {
      setMensagem("Preencha os campos obrigatórios.");
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
    setUsuario("");

    setMensagem("Bicicleta cadastrada com sucesso!");
  }

  function editar() {
    if (
      codigo === "" ||
      modelo === "" ||
      estacao === ""
    ) {
      setMensagem("Preencha os campos obrigatórios.");
      return;
    }

    let encontrada = false;

    for (let i = 0; i < bicicletas.length; i++) {
      if (bicicletas[i].codigo === codigo) {
        encontrada = true;
      }
    }

    if (encontrada === false) {
      setMensagem("Bicicleta não encontrada.");
      return;
    }

    if (
      status === "Indisponível" &&
      usuario !== ""
    ) {
      setMensagem(
        "Não é possível colocar usuário em bicicleta indisponível."
      );
      return;
    }

    editarBicicleta({
      codigo: codigo,
      modelo: modelo,
      estacao: estacao,
      status: status,
      usuario: usuario
    });

    setMensagem("Bicicleta alterada com sucesso!");
  }

  return (
    <section>
      <h2>Cadastrar ou editar bicicleta</h2>

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

      <p>Usuário</p>
      <input
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <p>Status</p>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Disponível</option>
        <option>Em uso</option>
        <option>Manutenção</option>
        <option>Indisponível</option>
      </select>

      <br />
      <br />

      <button onClick={cadastrar}>
        Cadastrar
      </button>

      <button onClick={editar}>
        Editar
      </button>

      <p>{mensagem}</p>
    </section>
  );
}
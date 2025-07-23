import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "../css/Coleta.css";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Swal from 'sweetalert2'

function Coleta() {
  const form = useRef();

  //infos do remetente
  const [nomeEmp, setNomeEmp] = useState("");
  const [nomeSol, setNomeSol] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [cnpj, setCnpj] = useState("");
  //infos do destinatario
  const [cnpjDest, setCnpjDest] = useState("");
  const [frete, setFrete] = useState("");
  //infos mercadoria
  const [nf, setNf] = useState("");
  const [volumes, setVolumes] = useState("");
  const [peso, setPeso] = useState("");
  const [mercadoria, setMercadoria] = useState("");

  const templateParams = {
    empresa: nomeEmp,
    nome: nomeSol,
    email: email,
    telefone: tel,
    cpnj: cnpj,

    cnpjDest: cnpjDest,
    frete: frete,

    nf: nf,
    volumes: volumes,
    peso: peso,
    mercadoria: mercadoria,
  };
  function sendEmail(e) {
    e.preventDefault();

    try {
      emailjs
        .send(
          "service_ostq1rw",
          "template_n80byvf",
          templateParams,
          "sdELDSi0WnSEBfZsX"
        )

        .then((response) => {
          
          Swal.fire({
          title: "Coleta agendada com sucesso!",
          icon: "success",
          iconColor: "#003153",
          color: '#003153',
          confirmButtonColor: '#003153'
          
    
});


        });
    } catch (error) {
        Swal.fire({
          title: "Um erro inesperado aconteceu, tente novamente.",
          icon: "error",
          iconColor: "#003153",
          color: '#003153',
          confirmButtonColor: '#003153'
    })
    }
  }

  
    
  

  return (
    <><>
      <Header />

      <div className="container-coleta">
        <form className="coleta" ref={form} onSubmit={sendEmail}>
          <h1 className="agende">Agende agora sua coleta</h1>

          <h2>Informações do Remetente</h2>

          <label>Nome da Empresa</label>
          <input
            placeholder="Nome da Empresa"
            type="name"
            value={nomeEmp}
            onChange={(e) => setNomeEmp(e.target.value)}
            required />

          <label>CNPJ da Empresa</label>
          <input
            placeholder="CNPJ da Empresa"
            type="string"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required />

          <label>Nome do Solicitante</label>
          <input
            placeholder="Nome do Solicitante"
            type="name"
            value={nomeSol}
            onChange={(e) => setNomeSol(e.target.value)}
            required />

          <label>Email para Contato</label>
          <input
            placeholder="Email para contato"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />

          <label>Telefone para Contato</label>
          <input
            placeholder="Telefone para contato"
            type="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required />

          <h2>Informações do Destinatário</h2>

          <label>CNPJ do Destinatário</label>
          <input
            placeholder="CNPJ do Destinatário"
            type="number"
            value={cnpjDest}
            onChange={(e) => setCnpjDest(e.target.value)}
            required />

          <label>Pagador do Frete</label>

          <select
            value={frete}
            onChange={(e) => setFrete(e.target.value)}
            placeholder="Selecione uma opção"
            type="text"
            id="pagadorFrete"
            required
          >
            <option value="Destinatário">Destinatário</option>
            <option value="Remetente">Remetente</option>
          </select>

          <h2>Material a ser coletado</h2>

          <label>Nota Fiscal</label>
          <input
            placeholder="Nota Fiscal"
            type="number"
            value={nf}
            onChange={(e) => setNf(e.target.value)}
            required />

          <label>Volumes</label>
          <input
            placeholder="Volumes"
            type="number"
            value={volumes}
            onChange={(e) => setVolumes(e.target.value)}
            required />

          <label>Peso</label>
          <input
            placeholder="Peso"
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required />

          <label>Descrição do Material</label>
          <input
            placeholder="Material"
            type="text"
            value={mercadoria}
            onChange={(e) => setMercadoria(e.target.value)}
            required />

          <button className="solicitar" ref={form}>
            Solicitar coleta
          </button>
        </form>
      </div>
    </><Contact /></>
  )
}
  

export default Coleta;

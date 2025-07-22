import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from 'react';
import '../css/Coleta.css'
import Header from '../components/Header';

function Coleta() {

  const form = useRef();

  //infos do remetente
  const [nomeEmp, setNomeEmp] = useState('');
  const [nomeSol, setNomeSol] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [cnpj, setCnpj] = useState('');
  //infos do destinatario
  const [cnpjDest, setCnpjDest] = useState('')
  const [frete, setFrete] = useState('');
  //infos mercadoria
  const [nf, setNf] = useState('');
  const [volumes, setVolumes] = useState('');
  const [peso, setPeso] = useState('');
  const [mercadoria, setMercadoria] = useState('');




 
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
      mercadoria: mercadoria
      
     }
     function sendEmail(e){
      
      e.preventDefault();
      
      emailjs.send('service_ostq1rw', 'template_n80byvf', templateParams, 'sdELDSi0WnSEBfZsX',)
      .then((response)=> {
        alert('Solicitação enviada com sucesso')
      
      })
     }
  


  return (

      <><Header />
      
      <div className='container-coleta'>



      <form className='coleta' ref={form} onSubmit={sendEmail}>

        <h1>Agende agora sua coleta</h1>
        <input

          label='Nome'
          placeholder='Nome da Empresa'
          type="name"
          value={nomeEmp}
          onChange={(e) => setNomeEmp(e.target.value)} />

        <input
          placeholder='CNPJ da Empresa'
          type="string"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)} />

        <input
          placeholder='Nome do Solicitante'
          type="name"
          value={nomeSol}
          onChange={(e) => setNomeSol(e.target.value)} />

        <input
          placeholder='Email para contato'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input
          placeholder='Telefone para contato'
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)} />


        <input
          placeholder='CNPJ do Destinatário'
          type="string"
          value={cnpjDest}
          onChange={(e) => setCnpjDest(e.target.value)} />

        <input
          placeholder='Pagador do frete'
          type="text"
          value={frete}
          onChange={(e) => setFrete(e.target.value)} />

        <input
          placeholder='Nota Fiscal'
          type="number"
          value={nf}
          onChange={(e) => setNf(e.target.value)} />

        <input
          placeholder='Volumes'
          type="number"
          value={volumes}
          onChange={(e) => setVolumes(e.target.value)} />

        <input
          placeholder='Peso'
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)} />

        <input
          placeholder='Mercadoria'
          type="text"
          value={mercadoria}
          onChange={(e) => setMercadoria(e.target.value)} />

        <button className='solicitar' ref={form}>Solicitar coleta</button>
      </form>

    </div></>
  )
      
}


export default Coleta;
import React, {useRef} from 'react'
import emailjs from 'emailjs-com'


function Coleta(){

    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ostq1rw",
      "template_n80byvf",
      form.current,
      "SUA_PUBLIC_KEY"
    )
    .then((result) => {
        alert("Mensagem enviada com sucesso!");
    }, (error) => {
        alert("Erro ao enviar. Tente novamente.");
        console.log(error.text);
    });

    e.target.reset();
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
      <label>Nome</label>
      <input type="text" name="from_name" required />

      <label>Email</label>
      <input type="email" name="reply_to" required />

      <label>Mensagem</label>
      <textarea name="message" required />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default Coleta;
import "../css/ColetaAgendada.css";
import Header from "./Header";
import Contact from "./Contact";
function ColetaAgendada() {
  return (
    <>
      <>
        <Header />

        <div className="container">
          <h1>
            Sua coleta foi agendada com sucesso, em breve nosso time realizará a
            coleta.
          </h1>
          <h2>A Equipe Expresso Delta agradece!</h2>
        </div>
      </>
      <Contact />
      <></>
    </>
  );
}
export default ColetaAgendada;

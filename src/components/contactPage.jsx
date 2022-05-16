import React from "react";
import "../styles/contactPage.scss";
import AnimatedPage from "../components/animatedPage";

const ContactPage = () => {
  
  const enviarMensaje = (e) => {
    e.preventDefault();
  };

  return (
    <AnimatedPage>
      <div className="contactWrapper">
        <div className="leftText">
          <h1>Ponte en contacto</h1>
        </div>
        <div className="frmWrapper">
          <form onSubmit={enviarMensaje}>
            <input type="text" placeholder="Nombre" pattern="[A-Za-z]" />
            <input type="text" placeholder="Motivo de la consulta" />
            <input type="email" placeholder="Email" />
            <input type="submit" value="Contactarse" />
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ContactPage;

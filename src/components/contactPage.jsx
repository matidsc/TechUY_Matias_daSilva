import React from "react";
import "../styles/contactPage.scss";

const ContactPage = () => {
  return (
    <div className="contactWrapper">
      <div className="leftText">
        <h1>Ponte en contacto</h1>
      </div>
      <div className="frmWrapper">
        <form onSubmit='return false'>
          <input type='text' placeholder="Nombre" />
          <input type='text' placeholder="Motivo de la consulta" />
          <input type='email' placeholder="Email" />
          <input type={"submit"} value='Contactarse'/>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

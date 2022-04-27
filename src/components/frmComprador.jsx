import React from "react";
import AnimatedPage from "./animatedPage";
import "../styles/frmComprador.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
const FrmComprador = () => {
  return (
    <AnimatedPage>
      <div className="frmCompradorWrapper">
        <div className="leftPanelWrapper">

          <h1>Ya casi terminas tu compra</h1>
          <Link to={"/cart"}>
            <button>
              <MdOutlineKeyboardArrowLeft />
              <span>Volver al carrito</span>
            </button>
          </Link>
        </div>
        <div className="frmWrapper">
        <form>
          <h1>Ingresa tus datos</h1>
          <input placeholder="Nombre" />
          <input placeholder="Teléfono" />
          <input placeholder="Email" />
            <button>Confirmar compra</button>
        </form>
        </div>
      
      </div>
    </AnimatedPage>
  );
};

export default FrmComprador;

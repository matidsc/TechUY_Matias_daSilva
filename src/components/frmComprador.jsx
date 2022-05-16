import React, { useContext, useState } from "react";
import AnimatedPage from "./animatedPage";
import "../styles/frmComprador.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { contexto } from "../context/context";
import { db } from "../firebase/firebase";
import { IoCopyOutline } from "react-icons/io5";
import BackToMain from "./backToMain";
import { IoIosArrowDown } from "react-icons/io";
import {
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";

const FrmComprador = () => {
  const { items, getPrecioTotal, clear } = useContext(contexto);
  const [comprador, setComprador] = useState();
  const [idventa, setIdVenta] = useState();
  const [showTicket, setShowTicket] = useState(false);
  const handleChange = (event) => {
    setComprador({ ...comprador, [event.target.name]: event.target.value });
  };
  const finalizarCompra = (e) => {
    e.preventDefault();
        const coleccionVentas = collection(db, "ventas");
    addDoc(coleccionVentas, {
      comprador,
      items: items,
      date: serverTimestamp(),
      total: getPrecioTotal(),
    }).then((result) => {
      setIdVenta(result.id);
    });
    items.forEach((item) => {
      const orderDoc = doc(db, "productos", item.id);
      updateDoc(orderDoc, { stock: item.stock - item.cantidad });
    });
    setShowTicket(true);

    clear();
  };

  const scrollToBottom=()=>{
    window.scrollTo({
      top:document.documentElement.scrollHeight,
      behavior:"smooth"
    })
  }

  return (
    <AnimatedPage>
    
        <div className="frmCompradorWrapper">
          {!showTicket && items.length===0?
            <BackToMain mensaje="Nada que ver aquí" ruta="/TechUY_Matias_daSilva" boton="Ir al inicio" />
            :(!showTicket ? (
            <>
              <div className="leftPanelWrapper">
                <h1>Ya casi terminas tu compra</h1>
                <Link to={"/TechUY_Matias_daSilva/cart"}>
                  <button>
                    <MdOutlineKeyboardArrowLeft />
                    <span>Volver al carrito</span>
                  </button>
                </Link>
              </div>

              <div className="frmWrapper">
                <form onSubmit={finalizarCompra}>
                  <h1>Ingresa tus datos</h1>      
                    <IoIosArrowDown onClick={scrollToBottom} size={15} />
                 
                  <input 
                    required
                    onChange={handleChange}
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    pattern="[A-Za-z]"
                  />
                  <input
                    onChange={handleChange}
                    name="telefono"
                    type="number"
                    placeholder="Teléfono"
                  />
                  <input
                    required
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <button type="submit">
                    Confirmar compra
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="compraCompletada">
              <h1>Tu compra ha sido procesada correctamente</h1>
              <h2>Guarda este código</h2>
              <button onClick={() => navigator.clipboard.writeText(idventa)}>
                <span>{idventa}</span>
                <IoCopyOutline />
              </button>
            </div>
          ))}
        </div>


    </AnimatedPage>
  );
};

export default FrmComprador;

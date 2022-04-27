import React, { useEffect, useContext, useState } from "react";
import AnimatedPage from "./animatedPage";
import "../styles/frmComprador.scss";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { contexto } from "../context/context";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";

const FrmComprador = () => {
  const { items, getPrecioTotal,clear } = useContext(contexto);

  const [idventa, setIdVenta] = useState();

  const finalizarCompra = (event) => {

    const coleccionVentas = collection(db, "ventas");
    console.log("hola");
    addDoc(coleccionVentas, {
      nombre: "hola",
      apellido: "chau",
      items: items,
      date: serverTimestamp(),
      total: getPrecioTotal(),
    }).then((result) => {
      console.log("ID RESULTADO ", result.id);

      setIdVenta(result.id);
    }).catch(err=>console.err(err))

    items.forEach((item) => {
      console.log("itemID: " + item.id);
      const orderDoc = doc(db, "productos", item.id);
      updateDoc(orderDoc, { stock: item.stock - item.cantidad });
      console.log(idventa)
    });

  };


 

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
          <form onsubmit="return false">
            <h1>Ingresa tus datos</h1>
            <input type="text" placeholder="Nombre" />
            <input type="tel" placeholder="Teléfono" />
            <input type="email" placeholder="Email" />
            <button type="button" onClick={()=>finalizarCompra()} >Confirmar compra</button>
          </form>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default FrmComprador;

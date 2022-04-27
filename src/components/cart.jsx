import React, { useContext, useState,useEffect} from "react";
import { contexto } from "../context/context";
import { Link } from "react-router-dom";
import "../styles/cart.scss";
import CartItem from "./cartItem";
import {addDoc, collection, serverTimestamp,updateDoc} from 'firebase/firestore'
import {db} from '../firebase/firebase'
import AnimatedPage from "./animatedPage";
const Cart = () => {
  const { items, getPrecioTotal,deleteItem} = useContext(contexto);
  const [idventa,setIdVenta]=useState()
  useEffect(() => {
    
    const finalizarCompra=()=>{
      const coleccionVentas= collection(db,'ventas')
      addDoc(coleccionVentas,{
       /* comprador,*/
        items:items,
        date:serverTimestamp(),
        total:getPrecioTotal()
  
      })
      .then(result=>{
          setIdVenta(result.id)
      })
    }
   
  }, [idventa])
  
  return (
    <>
      {items.length > 0 ? (
        <AnimatedPage>
        <div className="cartWrapper">
          <h1>Carrito</h1>
          {items.map((item) => {
            return (
              <CartItem id={item.id} stock={item.stock}modelo={item.modelo} pictureURL={item.pictureURL} cantidad={item.cantidad} precio={item.precio} onDelete={deleteItem}/>
            );
          })}
          <span className="endLine"></span>
          <Link to={'/checkout'}><button>Siguiente paso</button></Link> 
          <div className="precioTotal">{`Total: US$${getPrecioTotal()}`}</div>
        </div>
        </AnimatedPage>) : (
        <div className="noHayItems">
          <h1>El carrito se encuentra vacío</h1> 
          <Link to={`/`}>
            <button>Sigue buscando productos</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;

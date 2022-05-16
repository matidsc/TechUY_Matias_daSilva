import React, { useContext} from "react";
import { contexto } from "../context/context";
import "../styles/cart.scss";
import CartItem from "./cartItem";
import AnimatedPage from "./animatedPage";
import BackToMain from "./backToMain";
import { Link } from "react-router-dom";
const Cart = () => {
  const { items, getPrecioTotal,deleteItem} = useContext(contexto);

  return (
    <>
      {items.length > 0 ? (
        <AnimatedPage>
          <div className="pageWrapper">
        <div className="cartWrapper">
          <h1>Carrito</h1>
          <span className="endLineCart"></span>

          <div className="itemDetails">
            <span>Detalles del producto</span>
            <span>Cantidad</span>
            <span>Precio</span>
            <span>Total</span>
          </div>
          {items.map((item,index) => {
            return (
              <CartItem key={index} id={item.id} stock={item.stock}modelo={item.modelo} pictureURL={item.pictureURL} cantidad={item.cantidad} precio={item.precio} onDelete={deleteItem}/>
            );
          })}
          <div className="precioTotal"><strong>Total a pagar: </strong>{`US$${getPrecioTotal()}`}</div>
          <Link className="finalizarBtn" to={'/TechUY_Matias_daSilva/checkout'}><button>Siguiente paso</button></Link> 

        </div>
        </div>
        </AnimatedPage>) : (<BackToMain mensaje='El carrito se encuentra vacío' ruta='/TechUY_Matias_daSilva' boton='Sigue buscando productos'/>
        
      )}
    </>
  );
};

export default Cart;

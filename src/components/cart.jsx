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
        <div className="cartWrapper">
          <h1>Carrito</h1>
          
          <div className="itemDetails">
            <span>Detalles del producto</span>
            <span>Cantidad</span>
            <span>Precio</span>
            <span>Total</span>
          </div>
          {items.map((item) => {
            return (
              <CartItem id={item.id} stock={item.stock}modelo={item.modelo} pictureURL={item.pictureURL} cantidad={item.cantidad} precio={item.precio} onDelete={deleteItem}/>
            );
          })}
          <span className="endLine"></span>
          <div className="precioTotal">{`Total: US$${getPrecioTotal()}`}</div>
          <Link className="finalizarBtn" to={'/checkout'}><button>Siguiente paso</button></Link> 

        </div>
        </AnimatedPage>) : (<BackToMain mensaje='El carrito se encuentra vacío' ruta='/' boton='Sigue buscando productos'/>
        
      )}
    </>
  );
};

export default Cart;

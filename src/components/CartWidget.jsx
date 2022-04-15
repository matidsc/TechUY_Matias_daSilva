import React, {useContext} from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { contexto } from "../context/context";

const CartWidget = () => {
  const {getCantItems}= useContext(contexto)

  return (
    <Link to={'/cart'} style={{color:'white'}}>
      <div style={styleCart}>
        <AiOutlineShoppingCart style={styleCart} size={35} />
        <span style={getCantItems()<1?{display:"none"}: styleNotification}>{getCantItems()}</span>
      </div>
    </Link>
  );
};

const styleNotification={
  position: "absolute",
  top: "-10px",
  right: "-10px",
  padding: "10% 15%",
  borderRadius: "50%",
  background: "red",
  color: "white",
}
const styleCart={position: "relative"}
export default CartWidget;

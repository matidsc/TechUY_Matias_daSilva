import React, {useContext} from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { contexto } from "../context/context";

const CartWidget = () => {
  const {getCantItems}= useContext(contexto)

  return (
    <Link to={'/TechUY_Matias_daSilva/cart'} style={{color:'white'}}>
      <div style={styleCart}>
        <AiOutlineShoppingCart style={styleCart} size={35} />
        <span style={getCantItems()<1?{display:"none"}: styleNotification}>{getCantItems()}</span>
      </div>
    </Link>
  );
};

const styleNotification={
  fontSize:"1em",
  position: "absolute",
  top: "-10px",
  right: "-15px",
  padding: "5px 10px",
  borderRadius: "50%",
  backgroundColor: "#F44336",
  color: "white",
}
const styleCart={position: "relative"}
export default CartWidget;

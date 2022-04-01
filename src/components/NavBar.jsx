import { React,useState,useEffect } from "react";
import "../styles/NavBar.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
const NavBar=() =>{
  const [menuIsVisible, setShowMenu] = useState(false);
   
  /*const menuVariants = {
    opened: {
      top: "10vh",
    },
    closed: {
      top: "-30vh",
    },
  };
  
  codigo temporal para arreglar animacion
  window.onresize =()=> {window.innerWidth>768 && setShowMenu(true)}
*/
  return (
    <header className="topBarWrapper">
      <HiMenuAlt1
        onClick={() => setShowMenu(!menuIsVisible)}
        size={25}
        className="hamburger"
      />
      <h1>TechUY</h1>
      <AnimatePresence>
      
          <motion.nav /* equivalente a un <nav>*/
           /* key="box"
            variants={menuVariants}
            transition={{ duration: 0.5 }}
            exit={{ top: "-30vh" }}
            initial={{ top: "-30vh" }}
            animate={menuIsVisible ? "opened" : "closed"}*/
            className={menuIsVisible ? "visibleNav" : "hiddenNav"}
          >
            <ul>
              <li>
                <a>Inicio</a>
              </li>
              <li>
                <a>Procesadores</a>
              </li>
              <li>
                <a>Tarjetas gráficas</a>
              </li>
              <li>
                <a>RAM</a>
              </li>
              <li>
                <a>Almacenamiento</a>
              </li>
            </ul>
          </motion.nav>
        
      </AnimatePresence>
     <CartWidget/>
    </header>
  );
}

export default NavBar;
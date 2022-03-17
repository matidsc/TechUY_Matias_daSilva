import { React,useState } from "react";
import "../styles/NavBar.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import CartWidget from "./CartWidget";

function NavBar() {
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
                <a>Celulares</a>
              </li>
              <li>
                <a>Smart Tvs</a>
              </li>
              <li>
                <a>SmartWatches</a>
              </li>
            </ul>
          </motion.nav>
        
      </AnimatePresence>
     <CartWidget/>
    </header>
  );
}

export default NavBar;

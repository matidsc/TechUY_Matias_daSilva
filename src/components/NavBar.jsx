import { React,useState,useEffect } from "react";
import "../styles/NavBar.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {IoIosArrowDropdownCircle} from 'react-icons/io'
const NavBar=() =>{
  const [menuIsVisible, setShowMenu] = useState(false);
   const[showCategories,setShowCategories]=useState(false)
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
const menuVariants = {
  opened: {
    top: "10vh",
  },
  closed: {
    top: "-30vh",
  },
};

  return (
    <header className="topBarWrapper">
      <HiMenuAlt1
        onClick={() => setShowMenu(!menuIsVisible)}
        size={25}
        className="hamburger"
      />
      <Link to={'/'}><h1>TechUY</h1></Link>
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
                <a onClick={()=>setShowCategories(!showCategories)}> <IoIosArrowDropdownCircle/><span>categorías</span></a>
              </li>
              <AnimatePresence>
              <motion.div 
                variants={menuVariants}
                transition={{ duration: 0.5 }}
                exit={{ top: "-30vh" }}
                initial={{ top: "-30vh" }}
                animate={showCategories ? "opened" : "closed"}
                className="categoriesMenu" style={{display: showCategories? "flex": "none"}} > 
                
                  <Link to={'/GPU'}onClick={()=>setShowCategories(!showCategories)} ><button>Tarjetas gráficas</button></Link>
                  <Link to={'/CPU'}onClick={()=>setShowCategories(!showCategories)}><button>Procesadores</button></Link>
                 <Link to={'/SSD'}onClick={()=>setShowCategories(!showCategories)}> <button>Almacenamiento</button></Link>
                
              </motion.div>
              </AnimatePresence>
              <li>
                <a>Sobre Nosotros </a>
              </li>
              <li>
                <a>Contacto</a>
              </li>
            </ul>
          </motion.nav>
        
      </AnimatePresence>
     <CartWidget/>
    </header>
  );
}

export default NavBar;
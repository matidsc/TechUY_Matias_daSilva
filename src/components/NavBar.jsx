import { React, useState } from "react";
import "../styles/NavBar.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion,AnimatePresence } from "framer-motion";
const NavBar = () => {
  const [menuIsVisible, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const categorias = [
    { nombre: "Tarjetas gráficas", direccion: "/GPU" },
    { nombre: "Procesadores", direccion: "/Procesadores" },
    { nombre: "Almacenamiento", direccion: "/SSD" },
    { nombre: "Equipos armados", direccion: "/ARMADOS" },
  ];
  const variants = {
    open: { opacity: 1},
    closed: { opacity:0},
  }
  return (
    
    <header className="topBarWrapper">
      <HiMenuAlt1
        onClick={() => setShowMenu(!menuIsVisible)}
        size={25}
        className="hamburger"
      />
      <Link to={"/TechUY_Matias_daSilva"}>
        <h1>TechUY</h1>
      </Link>
      
      <nav className={menuIsVisible ? "visibleNav" : "hiddenNav"}>
        <ul>
          <li>
            <Link onClick={()=>setShowMenu(!menuIsVisible)} to={"/TechUY_Matias_daSilva"}>Inicio</Link>
          </li>

          <li>
            <a onClick={() => setShowCategories(!showCategories)}>
              <IoIosArrowDropdownCircle />
              <span>categorías</span>
            </a>
          </li>
          <AnimatePresence>  

        {showCategories&&
          <motion.div
          variants={variants}
          exit={{ opacity: 0}}
          initial={{ opacity: 0}}
          transition={{ duration: 0.3 }}

          animate={showCategories?"open":"closed"}
            className="categoriesMenu"
          >
            {categorias.map((item,index) => (
              <Link
              key={index}
                to={"TechUY_Matias_daSilva"+item.direccion}
                onClick={() => {setShowCategories(!showCategories);setShowMenu(!menuIsVisible)}}
              >
                <button>{item.nombre}</button>
              </Link>
            ))}
          </motion.div>
        }
        
          </AnimatePresence>
          <li>
            <Link onClick={()=>setShowMenu(!menuIsVisible)} to={'/TechUY_Matias_daSilva/sobrenosotros'}>Sobre Nosotros</Link>
          </li>
          <li>
            <Link onClick={()=>setShowMenu(!menuIsVisible)} to={'/TechUY_Matias_daSilva/contacto'}>Contacto</Link>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  );
};

export default NavBar;

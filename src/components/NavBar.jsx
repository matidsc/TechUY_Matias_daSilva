import { React, useState,useContext } from "react";
import "../styles/NavBar.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { contexto } from "../context/context";
const NavBar = () => {
  const [menuIsVisible, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const {getCantItems}=useContext(contexto)

  const categorias = [
    { nombre: "Tarjetas gráficas", direccion: "/GPU" },
    { nombre: "Procesadores", direccion: "/Procesadores" },
    { nombre: "Almacenamiento", direccion: "/SSD" },
    { nombre: "Equipos armados", direccion: "/ARMADOS" },
  ];
  
  return (
    <header className="topBarWrapper">
      <HiMenuAlt1
        onClick={() => setShowMenu(!menuIsVisible)}
        size={25}
        className="hamburger"
      />
      <Link to={"/"}>
        <h1>TechUY</h1>
      </Link>
      <nav className={menuIsVisible ? "visibleNav" : "hiddenNav"}>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>

          <li>
            <a onClick={() => setShowCategories(!showCategories)}>
              <IoIosArrowDropdownCircle />
              <span>categorías</span>
            </a>
          </li>

          <div
            className="categoriesMenu"
            style={{ display: showCategories ? "flex" : "none" }}
          >
            {categorias.map((item) => (
              <Link
                to={item.direccion}
                onClick={() => setShowCategories(!showCategories)}
              >
                <button>{item.nombre}</button>
              </Link>
            ))}
          </div>
          <li>
            <a>Sobre Nosotros</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>

        </ul>
      </nav>
      <CartWidget/>
    </header>
  );
};

export default NavBar;

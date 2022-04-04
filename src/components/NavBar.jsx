import { React, useState} from "react";
import "../styles/NavBar.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const NavBar = () => {
  const [menuIsVisible, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

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
            <Link
              to={"/GPU"}
              onClick={() => setShowCategories(!showCategories)}
            >
              <button>Tarjetas gráficas</button>
            </Link>
            <Link
              to={"/CPU"}
              onClick={() => setShowCategories(!showCategories)}
            >
              <button>Procesadores</button>
            </Link>
            <Link
              to={"/SSD"}
              onClick={() => setShowCategories(!showCategories)}
            >
              <button>Almacenamiento</button>
            </Link>
            <Link
              to={"/ARMADOS"}
              onClick={() => setShowCategories(!showCategories)}
            >
              <button>equipos armados</button>
            </Link>
          </div>
          <li>
            <a>Sobre Nosotros </a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;

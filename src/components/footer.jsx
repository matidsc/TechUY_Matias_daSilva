import React from "react";
import "../styles/footer.scss";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const path = useLocation().pathname;

  const location = path.split("/")[3];
  return (
    location !== "productos" && (
      <div className="footerWrapper">
        <footer>
          <span className="footer_direccion">
            18 de Julio 4823 esq. Avenida Uruguay
          </span>
          <span className="footer_tel">25057 3682</span>
          <small className="footer_copy"> ™Copyright © 2022 TechUY</small>
        </footer>
      </div>
    )
  );
};

export default Footer;

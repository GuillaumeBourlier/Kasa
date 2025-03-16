import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo/logo.svg"; // Importation du logo

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa Logo" className="footer__logo" />{" "}
      {/* Ajout du logo */}
      <p className="footer__copyright">
        &copy; 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;

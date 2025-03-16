import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/main-logo.svg"; // Importation du logo

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Kasa Logo" className="logo__img" />{" "}
        {/* Ajout du logo */}
        <nav className="nav">
          <ul className="menu">
            <li className="menu__item">
              <Link
                to="/"
                className={`menu__item__link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Acceuil
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/about"
                className={`menu__item__link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                A propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

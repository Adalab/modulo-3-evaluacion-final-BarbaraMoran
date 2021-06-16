import React from "react";
import "../stylesheets/Header.scss";
import logo from "../images/RickMortyLogo.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="header__img"
        src={logo}
        alt="Rick & Morty Logo"
        title="Buscador de personajes de Rick & Morty"
      />
    </header>
  );
};

export default Header;

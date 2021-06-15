import React from "react";
import logo from "../images/RickMortyLogo.png";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        alt="Rick & Morty Logo"
        title="Buscador de personajes de Rick & Morty"
      />
    </header>
  );
};

export default Header;

//<p>El personaje que buscas no existe.</p>;
import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/NotFound.scss";
import Header from "./Header";

//import "../stylesheets/CharacterCard.scss";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="main-not-found">
        <Link to="/" className="home-link">
          <i class="fas fa-angle-double-left"></i> Volver
        </Link>
        <p className="message">El personaje que buscas no existe.</p>;
      </main>
    </>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/NotFound.scss";
import rickGif from "../images/gif1.gif";

const NotFound = () => {
  return (
    <>
      <main className="main-not-found">
        <Link to="/" className="home-link">
          <i className="fas fa-angle-double-left"></i> Home
        </Link>
        <p className="message">This character doesn't exist.</p>;
        <img className="rick-gif" src={rickGif} alt="Rick gif" />
      </main>
    </>
  );
};

export default NotFound;

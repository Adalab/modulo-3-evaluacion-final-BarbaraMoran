import React from "react";
import "../stylesheets/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <small class="small">Bárbara Morán 2021 </small>
      <nav class="social">
        <a
          class="sm-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/BarbaraMoran"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          class="sm-link"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/BarbsMoran"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          class="sm-link"
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/barbaramorandev"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

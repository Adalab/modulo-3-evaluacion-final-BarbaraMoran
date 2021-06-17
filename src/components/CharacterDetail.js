import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";
import Header from "./Header";
import deadIco from "../images/dead.png";
import aliveIco from "../images/heart.svg";
import questionIco from "../images/question.svg";

const CharacterDetail = (props) => {
  const statusIcon = () => {
    if (props.character.status === "Dead") {
      return (
        <img
          className="status-icon"
          src={deadIco}
          alt="dead icon"
          title="dead"
        />
      );
    } else if (props.character.status === "Alive") {
      return (
        <img
          className="status-icon"
          src={aliveIco}
          alt="alive icon"
          title="alive"
        />
      );
    } else if (props.character.status === "unknown") {
      return (
        <img
          className="status-icon"
          src={questionIco}
          alt="unknown icon"
          title="unknown"
        />
      );
    }
  };

  return (
    <div>
      <Header />
      <main className="main-detail">
        <Link to="/" className="home-link">
          <i className="fas fa-angle-double-left"></i> Volver
        </Link>
        <article className="article">
          <img
            className="article__img"
            src={props.character.picture}
            alt={props.character.name}
          />
          <ul>
            <li>
              <h2>{props.character.name}</h2>
            </li>
            <li>Status: {statusIcon()}</li>
            <li>Species: {props.character.species}</li>
            <li>Origin: {props.character.planet}</li>
            <li>Episodes number: {props.character.episodesNumber}</li>
          </ul>
        </article>
      </main>
    </div>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    species: PropTypes.string,
    planet: PropTypes.string,
    episodesNumber: PropTypes.number,
    status: PropTypes.string,
  }),
};

export default CharacterDetail;

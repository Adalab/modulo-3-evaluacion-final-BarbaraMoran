import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "./Header";

const CharacterDetail = (props) => {
  console.log(props.character);

  return (
    <div>
      <Header />
      <Link to="/">Regresar al buscador</Link>
      <header>
        <h2>{props.character.name}</h2>
      </header>
      <section>
        <img src={props.character.picture} alt={props.character.name} />
        <h4>{props.character.name}</h4>
        <ul>
          <li>Species: {props.character.species}</li>
          <li>Origin: {props.character.planet}</li>
          <li>Episodes number: {props.character.episodesNumber}</li>
          <li>Status: {props.status}</li>
        </ul>
      </section>
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

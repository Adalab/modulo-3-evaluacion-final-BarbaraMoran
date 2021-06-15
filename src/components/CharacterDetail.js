import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/">Regresar al buscador</Link>
      <header>
        <h2>{props.character.name}</h2>
      </header>
      <section>
        <img src={props.character.picture} alt={props.character.name} />
        <h4>{props.character.name}</h4>
        <ul>
          <li>Especie: {props.character.species}</li>
          <li>Origen: {props.character.planet}</li>
          <li>Nº de episodios: {props.character.episodesNumber}</li>
          <li>Status: {props.character.status}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;

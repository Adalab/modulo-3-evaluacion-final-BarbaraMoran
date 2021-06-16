import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheets/CharacterList.scss";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterListItems = props.characters.map((character) => {
    return (
      <li className="card" key={character.id}>
        <Link to={`/characterDetail/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });

  return (
    <section className="characters-section">
      {props.responseText}
      <ul className="characters-section__list">{characterListItems}</ul>
    </section>
  );
};

export default CharacterList;

CharacterList.propTypes = { characters: PropTypes.array };

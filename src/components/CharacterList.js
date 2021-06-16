import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterListItems = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <Link to={`/characterDetail/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      </li>
    );
  });

  return (
    <section>
      <ul>
        {props.responseText} {characterListItems}
      </ul>
    </section>
  );
};

export default CharacterList;

CharacterList.propTypes = { characters: PropTypes.array };

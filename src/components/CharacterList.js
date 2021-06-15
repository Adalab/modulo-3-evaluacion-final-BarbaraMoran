import React from "react";
import { Link } from "react-router-dom";
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
      <ul> {characterListItems}</ul>
    </section>
  );
};

export default CharacterList;

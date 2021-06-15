import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterListItems = props.characters.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return (
    <section>
      <ul> {characterListItems}</ul>
    </section>
  );
};

export default CharacterList;

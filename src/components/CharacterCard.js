import React from "react";

const CharacterCard = (props) => {
  return (
    <article>
      <img
        src={props.character.picture}
        alt={props.character.name}
        title={props.character.name}
      />
      <h3>{props.character.name}</h3> <h5>{props.character.species}</h5>
    </article>
  );
};

export default CharacterCard;

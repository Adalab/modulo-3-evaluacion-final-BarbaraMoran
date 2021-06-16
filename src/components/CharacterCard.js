import React from "react";
import PropTypes from "prop-types";

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

CharacterCard.propTypes = {
  character: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  }),
};

export default CharacterCard;

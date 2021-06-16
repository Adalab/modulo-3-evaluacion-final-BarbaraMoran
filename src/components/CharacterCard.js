import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <article className="article">
      <img
        className="article__img"
        src={props.character.picture}
        alt={props.character.name}
        title={props.character.name}
      />
      <h2 className="article__name">{props.character.name}</h2>{" "}
      <h5 className="article__species">{props.character.species}</h5>
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

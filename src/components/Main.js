import React from "react";
import "../stylesheets/Main.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import mortyGif from "../images/gif2.gif";

const Main = (props) => {
  const mainContent =
    props.characters.length > 0 ? (
      <CharacterList characters={props.characters} />
    ) : (
      <article className="response">
        <p className="response__text">
          {`There isn't any character matching "${props.searchedCharacter}"`}
        </p>
        <img className="response__gif" src={mortyGif} alt="Morty gif" />
      </article>
    );

  return (
    <main className="main">
      <Filters
        searchedCharacter={props.searchedCharacter}
        handleFilter={props.handleFilter}
      />
      {mainContent}
    </main>
  );
};

export default Main;

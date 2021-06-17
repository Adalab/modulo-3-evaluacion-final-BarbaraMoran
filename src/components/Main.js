import React from "react";
import "../stylesheets/Main.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const Main = (props) => {
  const mainContent =
    props.characters.length > 0 ? (
      <CharacterList characters={props.characters} />
    ) : (
      <p className="response-text">
        {`No hay ningún personaje que coincida con la palabra "${props.searchedCharacter}"`}
      </p>
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

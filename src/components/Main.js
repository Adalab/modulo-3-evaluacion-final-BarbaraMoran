import React from "react";
import "../stylesheets/Main.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const Main = (props) => {
  const mainContent =
    props.characters.length > 0 ? (
      <CharacterList
        characters={props.characters}
        responseText={props.responseText}
      />
    ) : (
      <p className="response-text">
        {`No hay ningún personaje que coincida con la palabra "${props.searchedCharacter}"`}
      </p>
    );

  return (
    <main className="main">
      <Filters
        searchedCharacter={props.searchedCharacter}
        searchedSpecies={props.searchedSpecies}
        handleFilter={props.handleFilter}
      />
      {mainContent}
    </main>
  );
};

export default Main;

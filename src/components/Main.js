import React from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const Main = (props) => {
  return (
    <main className="main">
      <Filters
        searchedCharacter={props.searchedCharacter}
        searchedSpecies={props.searchedSpecies}
        handleFilter={props.handleFilter}
      />
      {}
      <CharacterList
        characters={props.characters}
        responseText={props.responseText}
      />
    </main>
  );
};

export default Main;

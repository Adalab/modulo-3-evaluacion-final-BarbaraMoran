import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/App.scss";
import getApiData from "../services/api";
import Header from "./Header";
import Main from "./Main";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState("");
  const [searchedSpecies, setSearchedSpecies] = useState("");
  const [searchedEpisodes, setSearchedEpisodes] = useState("");
  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilter = (inputInfo) => {
    if (inputInfo.name === "search") {
      setSearchedCharacter(inputInfo.value);
    }
    if (inputInfo.name === "species") {
      setSearchedSpecies(inputInfo.value);
    }
    if (inputInfo.name === "searchEpisodes") {
      setSearchedEpisodes(inputInfo.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(searchedCharacter.toLowerCase());
    })
    .filter((character) => {
      return character.species.includes(searchedSpecies);
    })
    .filter((character) => {
      if (searchedEpisodes === "") {
        return true;
      } else {
        return character.episodesNumber >= searchedEpisodes;
      }
    });

  const renderCharacterDetail = (routerProps) => {
    const routeCharacterId = routerProps.match.params.id;
    const foundCharacter = characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );

    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <NotFound />;
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Main
              characters={filteredCharacters}
              searchedCharacter={searchedCharacter}
              handleFilter={handleFilter}
            />
          </div>
        </Route>
        <Route path="/characterDetail/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;

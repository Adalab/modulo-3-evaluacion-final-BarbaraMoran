import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/App.scss";
import getApiData from "../services/api";
import Header from "./Header";
import Main from "./Main";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState("");
  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilter = (inputValue) => {
    setSearchedCharacter(inputValue);
    console.log(searchedCharacter);
    renderNotFound();
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(searchedCharacter.toLowerCase());
  });

  const renderNotFound = () => {
    const checkSearchedCharacters = characters.find((character) => {
      return character.name
        .toLowerCase()
        .includes(searchedCharacter.toLowerCase());
    });

    if (checkSearchedCharacters === undefined) {
      setResponseText(
        <p>
          No hay ningún personaje que coincida con la palabra {""}
          {searchedCharacter}
        </p>
      );
    } else {
      setResponseText("");
    }
  };

  const renderCharacterDetail = (routerProps) => {
    const routeCharacterId = routerProps.match.params.id;
    const foundCharacter = characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );
    console.log(foundCharacter);
    console.log(routeCharacterId);

    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p>El personaje que buscas no existe.</p>;
    }
  };

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Header />
          <Main
            characters={filteredCharacters}
            searchedCharacter={searchedCharacter}
            handleFilter={handleFilter}
            responseText={responseText}
          />
        </div>
      </Route>
      <Route path="/characterDetail/:id" render={renderCharacterDetail} />
    </Switch>
  );
};

export default App;

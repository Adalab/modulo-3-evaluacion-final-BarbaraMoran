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

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilter = (userData) => {
    setSearchedCharacter(userData);
    console.log(searchedCharacter);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name
      .toLowerCase()
      .includes(searchedCharacter.toLowerCase());
  });

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
          <Main characters={filteredCharacters} handleFilter={handleFilter} />
        </div>
      </Route>
      <Route path="/characterDetail/:id" render={renderCharacterDetail} />
    </Switch>
  );
};

export default App;

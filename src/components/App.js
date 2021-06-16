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
  const [status, setStatus] = useState("");

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
    //renderCharacterStatus();
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

    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} status={status} />;
    } else {
      return <p>El personaje que buscas no existe.</p>;
    }
  };

  const renderCharacterStatus = () => {
    return characters.map((characterStatus) => {
      return characterStatus.status.map((eachStatus) => {
        if (eachStatus === "Dead") {
          setStatus(<i class="fas fa-skull-crossbones"></i>);
        } else if (eachStatus === "Alive") {
          setStatus(<i class="fas fa-heartbeat"></i>);
        }
      });
    });
  };

  console.log(characters.status);

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

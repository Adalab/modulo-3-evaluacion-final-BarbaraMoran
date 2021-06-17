import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/App.scss";
import getApiData from "../services/api";
import Header from "./Header";
import Main from "./Main";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";
import deadIco from "../images/dead.png";
import aliveIco from "../images/heart.svg";
import questionIco from "../images/question.svg";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState("");
  const [searchedSpecies, setSearchedSpecies] = useState("");
  const [responseText, setResponseText] = useState("");
  //const [status, setStatus] = useState("");

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilter = (inputInfo) => {
    if (inputInfo.name === "search") {
      setSearchedCharacter(inputInfo.value);
    } else {
      setSearchedSpecies(inputInfo.value);
    }

    console.log(searchedCharacter);
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(searchedCharacter.toLowerCase());
    })
    .filter((character) => {
      return character.species.includes(searchedSpecies);
    });

  const renderCharacterDetail = (routerProps) => {
    const routeCharacterId = routerProps.match.params.id;
    const foundCharacter = characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );

    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} /*status={status}*/ />;
    } else {
      return <NotFound />;
    }
  };

  //Para pintar iconos en el STATUS. Funciona pero rompe otras funciones (ruta navegable, página no encontrada,etc )

  /*useEffect(() => {
    if (detailCharacter.status === "Dead") {
      setStatus(
        <img
          className="status-icon"
          src={deadIco}
          alt="dead icon"
          title="dead"
        />
      );
    } else if (detailCharacter.status === "Alive") {
      setStatus(
        <img
          className="status-icon"
          src={aliveIco}
          alt="alive icon"
          title="alive"
        />
      );
    } else if (detailCharacter.status === "unknown") {
      setStatus(
        <img
          className="status-icon"
          src={questionIco}
          alt="unknown icon"
          title="unknown"
        />
      );
    }
  }, [detailCharacter]);
  */

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Header />
          <Main
            characters={filteredCharacters}
            searchedCharacter={searchedCharacter}
            searchedSpecies={searchedSpecies}
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

import { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import getApiData from "../services/api";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((charactersData) => {
      console.log(charactersData);
      setCharacters(charactersData);
    });
  }, []); //NOS INDICA CUANDO EJECUTAR EL USE EFFECT

  return (
    <div>
      <h1>HOLA</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;

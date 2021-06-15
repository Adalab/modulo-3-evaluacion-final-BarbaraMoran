import { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import getApiData from "../services/api";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((charactersData) => {
      console.log(charactersData);
      setCharacters(charactersData);
    });
  }, []); //NOS INDICA CUANDO EJECUTAR EL USE EFFECT

  return (
    <div className="App">
      <Header />
      <Main characters={characters} />
    </div>
  );
};

export default App;

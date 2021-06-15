import { useState, useEffect } from "react";
import "../stylesheets/App.scss";
import getApiData from "../services/api";
import Header from "./Header";
import Main from "./Main";

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

  return (
    <div className="App">
      <Header />
      <Main characters={filteredCharacters} handleFilter={handleFilter} />
    </div>
  );
};

export default App;

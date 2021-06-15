import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/App.scss";
import getApiData from "../services/api";

const App = () => {
  getApiData();
  console.log(getApiData());

  //const [characters, setCharacters] = useState("");

  return <div></div>;
};

export default App;

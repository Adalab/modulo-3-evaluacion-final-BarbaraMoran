import React from "react";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handleInput = (event) => {
    props.handleFilter({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const submitPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <section className="search-section">
      <form className="search-section__form" onSubmit={submitPrevent}>
        <label className="form__label" htmlFor="search">
          ¡Busca tus personajes favoritos de la serie!
        </label>
        <input
          className="form__input"
          id="search"
          type="text"
          name="search"
          placeholder="Ej: Albert Einstein"
          value={props.searchedCharacter}
          onChange={handleInput}
        />
        <label className="form__label display-block" htmlFor="gender">
          Especies
        </label>

        <select
          className="form__input-select"
          name="species"
          id="species"
          onClick={handleInput}
        >
          <option value="">Todos</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;

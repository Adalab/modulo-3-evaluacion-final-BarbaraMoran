import React from "react";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handleSearchInput = (event) => {
    props.handleFilter(event.target.value);
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
          onChange={handleSearchInput}
        />
      </form>
    </section>
  );
};

export default Filters;

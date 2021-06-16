import React from "react";

const Filters = (props) => {
  const handleSearchInput = (event) => {
    props.handleFilter(event.target.value);
  };

  const submitPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <form onSubmit={submitPrevent}>
        <label htmlFor="search">
          ¡Busca tus personajes favoritos de la serie!
        </label>
        <input
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

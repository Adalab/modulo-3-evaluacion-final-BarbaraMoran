import React from "react";

const Filters = (props) => {
  return (
    <section>
      <form>
        <label for="search">¡Busca tus personajes favoritos de la serie!</label>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Ej: Albert Einstein"
        />
      </form>
    </section>
  );
};

export default Filters;

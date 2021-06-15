const ENDPOINT = "https://rickandmortyapi.com/api/character";

const getApiData = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          picture: character.image,
          species: character.species,
          planet: character.location.name,
          episodesNumber: character.episode.length,
          status: character.status,
        };
      });
      return cleanData;
    });
};

console.log(getApiData());

export default getApiData;

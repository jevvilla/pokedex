import { BASE_URL } from './constants';

export const getAllPokemon = async () => {
  try {
    const result = await fetch(`${BASE_URL}/pokemon?limit=50`);
    const { results } = await result.json();
    const pokemons = await getPokemons(results);
    return pokemons;
  } catch (err) {
    return [];
  }
};

export const getPokemons = async group => {
  const pokemons = await Promise.all(
    group.map(async item => {
      try {
        const result = await fetch(item.url);
        const pokemon = await result.json();
        return pokemon;
      } catch (error) {
        return [];
      }
    }),
  );

  return pokemons;
};

import { createContext, useState } from 'react';

export const CompareContext = createContext({
  pokemonIds: [],
  selectPokemonId(id) {
    console.error('Error: you have to use <CompareProvider>');
  },
});

function CompareProvider({ children }) {
  const [pokemonIds, setPokemonIds] = useState([]);

  function selectPokemonId(id) {
    if (pokemonIds.includes(id)) {
      setPokemonIds(pokemonIds.filter((el) => el !== id));
    } else /* if (pokemonIds.length < 2) */ {
      setPokemonIds([...pokemonIds, id]);
    }
  }

  return (
    <CompareContext.Provider value={{ pokemonIds, selectPokemonId }}>
      {children}
    </CompareContext.Provider>
  );
}

export default CompareProvider;

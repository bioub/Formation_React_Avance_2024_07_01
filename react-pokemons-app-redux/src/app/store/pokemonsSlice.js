import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idsToCompare: [],
  items: [],
  loading: false,
};

const pokemonsSlice = createSlice({
  initialState,
  name: 'pokemons',
  reducers: {
    selectPokemonId(state, action) {
      // action.payload est l'id
      if (state.idsToCompare.includes(action.payload)) {
        // si immuable il faut utiliser return
        return {
          ...state,
          idsToCompare: state.idsToCompare.filter((el) => el !== action.payload)
        };
      } else /* if (pokemonIds.length < 2) */ {
        // si muable à traduire avec immer pas de return
        state.idsToCompare.push(action.payload);
      }
    },
    fetchPokemonsStarted(state, action) {
      state.loading = true;
    },
    fetchPokemonsCompleted(state, action) {
      state.items = action.payload;
      state.loading = false;
    }
  },
  selectors: {
    idsToCompareSelector(state) {
      return state.idsToCompare;
    }
  }
});

export const pokemonsReducer = pokemonsSlice.reducer;
export const { selectPokemonId, fetchPokemonsCompleted, fetchPokemonsStarted } = pokemonsSlice.actions;
export const { idsToCompareSelector } = pokemonsSlice.selectors;
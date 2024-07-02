import { Component, useContext, useEffect, useState } from 'react';
import { getPokemon } from '../services/pokemon-service';
import PokemonCardDetails from '../components/pokemon-card-details';
import { CompareContext } from '../compare-context';
import { Navigate } from 'react-router-dom';

// class PokemonCompare extends Component {
//   constructor() {
//     super();
//     this.state = {
//       pokemon1: null,
//       pokemon2: null,
//     };
//   }
//   componentDidMount() {
//     getPokemon(3).then((pokemon1) => {
//       this.setState({
//         pokemon1: pokemon1,
//       })
//     })
//     getPokemon(4).then((pokemon2) => {
//       this.setState({
//         pokemon2: pokemon2,
//       })
//     })
//   }
//   render() {
//     const { pokemon1, pokemon2 } = this.state;
//     return (
//       <div className="row">
//         <div className="col s6">
//           <PokemonCardDetails pokemon={pokemon1} />
//         </div>
//         <div className="col s6">
//           <PokemonCardDetails pokemon={pokemon2} />
//         </div>
//       </div>
//     );
//   }
// }

function useSelectedPokemons() {
  const { pokemonIds } = useContext(CompareContext);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    Promise.all(pokemonIds.map((id) => getPokemon(id))).then((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  return pokemons;
} 

function PokemonCompare() {
  const pokemons = useSelectedPokemons();

  return (
    <div className="row">
      {pokemons.map((pokemon) => (
        <div className="col" key={pokemon.id}>
          <PokemonCardDetails pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
}

export default PokemonCompare;

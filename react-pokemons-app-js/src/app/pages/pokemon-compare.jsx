import { Component, useEffect, useState } from 'react';
import { getPokemon } from '../services/pokemon-service';
import PokemonCardDetails from '../components/pokemon-card-details';

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

function PokemonCompare() {
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    getPokemon(3).then((pokemon1) => {
      setPokemon1(pokemon1);
    });
    getPokemon(4).then((pokemon2) => {
      setPokemon2(pokemon2);
    });
  }, []);

  return (
    <div className="row">
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon1} />
      </div>
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon2} />
      </div>
    </div>
  );
}

export default PokemonCompare;

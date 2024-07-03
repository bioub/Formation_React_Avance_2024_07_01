import { useNavigate } from 'react-router-dom';
import './pokemon-card.css';
import { formatDate, formatType } from '../helpers';
import { useContext } from 'react';
import { CompareContext } from '../compare-context';
import classNames from 'classnames';

function PokemonCard({ pokemon }) {
  console.log('PokemonCard');

  const debut = Date.now();
  while (debut + 10 > Date.now());

  const { pokemonIds, selectPokemonId } = useContext(CompareContext);
  const navigate = useNavigate();

  function goToPokemon(id) {
    navigate(`/pokemons/${id}`);
  }

  return (
    <div className={classNames("col s6 m4", {'blue': pokemonIds.includes(pokemon.id)})} onClick={() => selectPokemonId(pokemon.id)}>
      <div className="card horizontal">
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small>{formatDate(pokemon.created)}</small>
            </p>
            {pokemon.types?.map((type) => (
              <span key={type} className={formatType(type)}>
                {type}
              </span>
            ))}
            <button  onClick={() => goToPokemon(pokemon.id ?? 0)}>Détails</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

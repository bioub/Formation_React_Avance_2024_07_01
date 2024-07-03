import { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import List from '../components/list';
import { CompareContext } from '../compare-context';
import { idsToCompareSelector } from '../store/pokemonsSlice';
import { useSelector } from 'react-redux';

function PokemonList() {

  const [term, setTerm] = useState('');
  
  const pokemonIds = useSelector(idsToCompareSelector);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  const renderItem = useCallback((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, [])
  // const renderItem = useMemo(() => (pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />, [])
  


  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch term={term} setTerm={setTerm} />
          <List items={pokemons} renderItem={renderItem} />
          {/* {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} */}
        </div>
      </div>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
      {pokemonIds.length >= 2 && <Link
        className="btn-floating btn-large waves-effect waves-light blue z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '100px' }}
        to="/pokemon/compare"
      >
        <i className="material-icons">compare</i>
      </Link>}
    </div>
  );
}

export default PokemonList;

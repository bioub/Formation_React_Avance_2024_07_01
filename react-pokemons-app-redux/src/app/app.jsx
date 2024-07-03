import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import PrivateRoute from './private-route';
import PokemonCompare from './pages/pokemon-compare';
import CompareProvider from './compare-context';
import { configureStore } from '@reduxjs/toolkit';
import { pokemonsReducer } from './store/pokemonsSlice';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  }
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <nav>
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">
            Pokédex
          </Link>
        </div>
      </nav>
      <Routes>
        <Route index path="/" element={<PokemonsList />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/pokemons" element={<PokemonsList />} />
          <Route path="/pokemon/add" element={<PokemonAdd />} />
          <Route path="/pokemon/compare" element={<PokemonCompare />} />
          <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
          <Route path="/pokemons/:id" element={<PokemonsDetail />} />
        </Route>
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

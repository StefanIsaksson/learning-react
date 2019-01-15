import React from 'react';
import SearchResultsRow from './search-results-row';

const SearchResults = (props) => {
  const pokemonRows = props.filteredPokemons.map(p => 
    <SearchResultsRow key={p.pokedex_number.toString()} pokemon={p} 
      setActivePokemon={props.setActivePokemon} />);
  return (
    <div className="mt-2" >
      <h4>Pokemons in generation {props.generation}:</h4>
      <table className="table table-hover">
        <tbody>
          {pokemonRows}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;

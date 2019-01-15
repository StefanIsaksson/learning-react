import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedPokemon from './featured-pokemon'
import SearchResults from '../search-results'
import PokemonFilter from './pokemon-filter';
import PokemonDetail from '../pokemon';

class App extends Component {
  state = {}

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchFeaturedPokemonDetails = (pokedexNumber) => {
    fetch('http://localhost:5000/pokemons_stats/' + pokedexNumber )
    .then(rsp => rsp.json())
    .then(featuredPokemon => {
      featuredPokemon = featuredPokemon[0];
      this.setState({ featuredPokemon});
    })
  }

  fetchActivePokemonDetails = (pokedexNumber) => {
    fetch('http://localhost:5000/pokemons_stats/' + pokedexNumber )
    .then(rsp => rsp.json())
    .then(activePokemon => {
      activePokemon = activePokemon[0];
      this.setState({ activePokemon});
    })
  }

  fetchPokemons = () => {
    fetch('http://localhost:5000/pokemons')
    .then(rsp => rsp.json())
    .then(allPokemons => {
      this.allPokemons = allPokemons;
      this.determineFeaturedPokemon();
      this.determineUniquePokemonGenerations();
    })
  }

  determineFeaturedPokemon = () => {
    if(this.allPokemons) {
      const randomIndex = Math.floor(Math.random() * this.allPokemons.length)
      const featuredPokemonPokedex = this.allPokemons[randomIndex].pokedex_number;
      this.fetchFeaturedPokemonDetails(featuredPokemonPokedex);
    }
  }

  determineUniquePokemonGenerations = () => {
    const generations = this.allPokemons
      ? Array.from(new Set(this.allPokemons.map(p => p.generation)))
      : [];
      generations.unshift(null);
    this.setState({ generations });
    const allPokemons = this.allPokemons;
    this.setState({ allPokemons });
  }

  filterPokemons = (generation, allPokemons) => {
    this.setState({ activePokemon: null });
    const filteredPokemons = this.allPokemons.filter((p) => p.generation === parseInt(generation));
    this.setState({ filteredPokemons });
    this.setState({ generation });
  }

  setActivePokemon = (pokemon) => {
    this.fetchActivePokemonDetails(pokemon.pokedex_number)
  }

  render() {
    let activeComponent = null;
    if (this.state.generation)
      activeComponent = <SearchResults generation={this.state.generation}
      filteredPokemons={this.state.filteredPokemons} setActivePokemon={this.setActivePokemon} />;
    if(this.state.activePokemon)
      activeComponent = <PokemonDetail pokemon={this.state.activePokemon}/>;
    if(!activeComponent)
      activeComponent = <FeaturedPokemon pokemon={this.state.featuredPokemon}/>
    return (
      <div className="container">
        <Header subtitle="Pokemons stats" />
        <PokemonFilter generations={this.state.generations} filterPokemons={this.filterPokemons} />
        {activeComponent}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedPokemon from './featured-pokemon'

class App extends Component {
  state = {}

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemonDetails = (pokedexNumber) => {
    fetch('http://localhost:5000/pokemons/' + pokedexNumber )
    .then(rsp => rsp.json())
    .then(featuredPokemon => {
      featuredPokemon = featuredPokemon[0];
      this.setState({ featuredPokemon});
    })
  }

  fetchPokemons = () => {
    fetch('http://localhost:5000/generations/1')
    .then(rsp => rsp.json())
    .then(allPokemons => {
      this.allPokemons = allPokemons;
      this.determineFeaturedPokemon();
    })
  }


  determineFeaturedPokemon = () => {
    if(this.allPokemons) {
      const randomIndex = Math.floor(Math.random() * this.allPokemons.length)
      const featuredPokemonPokedex = this.allPokemons[randomIndex].pokedex_number;
      this.fetchPokemonDetails(featuredPokemonPokedex);
    }
  }

  render() {
    return (
      <div className="container">
        <Header subtitle="Pokemons stats" />
        <FeaturedPokemon pokemon={this.state.featuredPokemon}/>
      </div>
    );
  }
}

export default App;

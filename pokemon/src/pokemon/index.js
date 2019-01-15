import React, { Component} from 'react';
import './pokemon.css'

class Pokemon extends Component {

    calculateRowClass(rank_pct) {
        if(rank_pct > .9){
            return "table-success";
        } else if (rank_pct > 0.1) {
            return "";
        } else if (rank_pct > 0.05) {
            return "table-warning";
        } else {
            return "table-danger";
        }
    }

    state = {}
    render() {
        const pokemon = this.props.pokemon;
        const zeroPaddedPokemonIndex = ('000' + pokemon.pokedex_number).slice(-3);
        return (
            <div>
                <div className="row m2-2">
                    <h5 className="col-md-12">{pokemon.type1} {pokemon.type2}</h5>
                </div>
                <div className="row">
                    <h3 className="col-md-12">{pokemon.name} #{pokemon.pokedex_number} </h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <img className="picture" src={`https://www.serebii.net/sunmoon/pokemon/${zeroPaddedPokemonIndex}.png`} alt="" ></img>
                    </div>
                    <div className="col-md-5">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Base</th>
                                    <th scope="col">Rank #</th>
                                    <th scope="col">Percentile</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={this.calculateRowClass(pokemon.hp_rank_pct)}>
                                    <th scope="row">HP</th>
                                    <td>{pokemon.hp}</td>
                                    <td>{pokemon.hp_rank} of {pokemon.total_nr_pokemons_ranked}</td>
                                    <td>{Math.round(pokemon.hp_rank_pct * 100)}%</td>
                                </tr>
                                <tr className={this.calculateRowClass(pokemon.attack_rank_pct)}>
                                    <th scope="row">Attack</th>
                                    <td>{pokemon.attack}</td>
                                    <td>{pokemon.attack_rank} of {pokemon.total_nr_pokemons_ranked}</td>
                                    <td>{Math.round(pokemon.attack_rank_pct * 100)}%</td>
                                </tr>
                                <tr className={this.calculateRowClass(pokemon.defense_rank_pct)}>
                                    <th scope="row">Defense</th>
                                    <td>{pokemon.defense}</td>
                                    <td>{pokemon.defense_rank} of {pokemon.total_nr_pokemons_ranked}</td>
                                    <td>{Math.round(pokemon.defense_rank_pct * 100)}%</td>
                                </tr>
                                <tr className={this.calculateRowClass(pokemon.sp_attack_rank_pct)}>
                                    <th scope="row">Sp. attack</th>
                                    <td>{pokemon.sp_attack}</td>
                                    <td>{pokemon.sp_attack_rank} of {pokemon.total_nr_pokemons_ranked}</td>
                                    <td>{Math.round(pokemon.sp_attack_rank_pct * 100)}%</td>
                                </tr>
                                <tr className={this.calculateRowClass(pokemon.sp_defense_rank_pct)}>
                                    <th scope="row">Sp. defense</th>
                                    <td>{pokemon.sp_defense}</td>
                                    <td>{pokemon.sp_defense_rank} of {pokemon.total_nr_pokemons_ranked}</td>
                                    <td>{Math.round(pokemon.sp_defense_rank_pct * 100)}%</td>
                                </tr>
                                <tr className={this.calculateRowClass(pokemon.speed_rank_pct)}>
                                    <th scope="row">Speed</th>
                                    <td>{pokemon.speed}</td>
                                    <td>{pokemon.speed_rank} of {pokemon.total_nr_pokemons_ranked}</td>
                                    <td>{Math.round(pokemon.speed_rank_pct * 100)}%</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="col-md-12"></p>
                    </div>
                </div>
            </div>        
        )
    }
}

export default Pokemon;
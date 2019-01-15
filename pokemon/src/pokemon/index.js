import React, { Component} from 'react';
import './pokemon.css'

class Pokemon extends Component {
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
                            <tbody>
                                <tr>
                                    <th scope="row">HP</th>
                                    <td>{pokemon.hp}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Attack</th>
                                    <td>{pokemon.attack}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Defense</th>
                                    <td>{pokemon.defense}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sp. attack</th>
                                    <td>{pokemon.sp_attack}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sp. defense</th>
                                    <td>{pokemon.sp_defense}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Speed</th>
                                    <td>{pokemon.speed}</td>
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
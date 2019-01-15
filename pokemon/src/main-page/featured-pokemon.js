import React from 'react';
import Pokemon from '../pokemon'

const FeaturedPokemon = (props) => {
    if(props.pokemon) return (
        <div>
            <div className="row featuredPokemon">
                <h3 className="col-md-12 text-center">
                    Featured Pokemon
                </h3>
            </div>
            <Pokemon pokemon={props.pokemon} />
        </div>)
    return (<div>No featured Pokemon at this time</div>)
}

export default FeaturedPokemon;
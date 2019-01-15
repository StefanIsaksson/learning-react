import React from 'react';

const SearchResultsRow = (props) => {
    const setActive = (e) => {
        e.preventDefault();
        props.setActivePokemon(props.pokemon);
    };

    return <tr onClick={setActive}>
        <td>
            <h5>{props.pokemon.pokedex_number}</h5>
        </td>
        <td>
            <h3>{props.pokemon.name}</h3> 
            {props.pokemon.is_legendary === 1 ? <h5>(legandary)</h5> : ""}
        </td>
        <td>
            <img src={`https://www.serebii.net/sunmoon/pokemon/${('000' + props.pokemon.pokedex_number).slice(-3)}.png`} alt="" ></img>
        </td>
        <td>
            <h5>{props.pokemon.type1} {props.pokemon.type2}</h5>
        </td>
    </tr>
};

export default SearchResultsRow;
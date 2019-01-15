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
        </td>
        <td>
            <img className="small_picture" src={`https://www.serebii.net/sunmoon/pokemon/${('000' + props.pokemon.pokedex_number).slice(-3)}.png`} alt="" ></img>
        </td>
    </tr>
};

export default SearchResultsRow;
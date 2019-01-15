import React, { Component } from 'react';

class PokemonFilter extends Component {
    state = {}

    onSearchChange = (e) => {
        const generation = e.target.value;
        this.props.filterPokemons(generation)
    }

    render() {
        const search = this.state.search;
        const generations = this.props.generations || [];

        return (
            <div className="form-group row mt-3">
                <div className="offset-md-2 col-md-4">
                    Choose a Pokemon generation:
                </div>
                <div className="col-md-4">
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        {generations.map((p) => <option key={p} value={p}>{p ? 'Generation ' + p : ''}</option>)}
                    </select>
                </div>
            </div>
        )
    }
}

export default PokemonFilter;
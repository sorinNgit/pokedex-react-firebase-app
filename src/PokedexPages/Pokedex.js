import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  constructor() {
    super();

    this.state = {
      allPokemon: {},
      searchTerm: '',
      fetched: false
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { allPokemon } = this.props;
    if (allPokemon !== undefined) {
      this.setState({
        allPokemon: allPokemon,
        fetched: true
      });
    }
  }

  updateSearchTerm(event) {
    event.preventDefault();
    const term = event.target.value.toLowerCase();
    this.setState({
      searchTerm: term
    }, () => this.searchPokemon());
  }

  searchPokemon() {
    let query = this.state.searchTerm;
    const filteredPokemon = this.props.allPokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(query) !== -1;
    });
    this.setState({
      allPokemon: filteredPokemon
    });
  }

  onSubmit(event) {
    event.preventDefault();
    document.getElementById('search').blur();
  }

  render() {
    let { allPokemon, searchTerm, fetched } = this.state;
    let { currentUser } = this.props;
    let pokemonList;
    if (fetched) {
      pokemonList = allPokemon.map((pokemon, index) => (
        <Pokemon
          key={pokemon.name}
          id={pokemon.id}
          pokemon={pokemon}
          allPokemon={allPokemon}
          currentUser={currentUser}
        />
      ));
    } else {
      pokemonList = null;
    }
    return (
      <div className="all-pokemon-container">
        <h1 className="site-title">Pokedex</h1>
        <div className="search-box">
          <div>
          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.updateSearchTerm}
              value={searchTerm}
              type="text"
              placeholder="Search For Pokemon"
              id="search"
            />
          </form>
          </div>
        </div>
        <div className="flex-grid">{pokemonList}</div>
      </div>
    );
  }
}

export default PokemonList;
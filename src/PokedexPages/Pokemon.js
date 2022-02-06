import React, { Component } from 'react';
import { database } from '../Firebase/firebase';
import { Link } from 'react-router-dom';
import { pad } from '../helpers';
import './Pokemon.css';

class Pokemon extends Component {
  constructor() {
    super();

    this.favoritesRef = database.ref('favorites');
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  addToFavorites(event) {
    event.preventDefault();

    const favorite = event.currentTarget.dataset.value;

    this.favoritesRef.push({
      user: this.props.currentUser.uid,
      favorites: favorite
    });

    console.log(event.currentTarget.dataset.value);
  }

  render() {
    const { pokemon, id, currentUser } = this.props;
    let paddedId = pad(id, 3);

    return (
      <div className="pokemon-list">
        <Link
          className="card"
          exact="true"
          to={{ pathname: `/pokemon/${id}`, state: { pokemon } }}
        >
          <div className="card__number">#{paddedId}</div>
          <div className="card__sprite">
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`}
              alt=" "
            />
          </div>
          <div className="card__name">
            <h3 className="capitalize">{pokemon.name}</h3>
          </div>
        </Link>
        
      </div>
    );
  }
}

export default Pokemon;
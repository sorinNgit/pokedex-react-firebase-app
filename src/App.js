import React, { useEffect, Component } from 'react';
import { Router} from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { Route, withRouter} from 'react-router-dom';

import Profile from './components/Profile/Profile';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import PasswordReset from './components/PasswordReset/PasswordReset';
import Pokedex from "./PokedexPages/Pokedex";
import Home from './PokedexPages/Home';
import PokemonList from './PokedexPages/Pokedex';
import PokemonDetails from './PokedexPages/PokemonDetails';
import Footer from './components/Footer/Footer';
import jsonData from './pokemonlist';

import { auth, generateUserDocument, database } from './Firebase/firebase';
import { setUser, selectUser } from './Firebase/firebaseSlice';

import './App.css';
import { Switch } from 'gestalt';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPokemonData: {},
      currentUser: null
    };

    this.usersRef = database.ref('users');
  }
  componentWillMount() {
    let data = jsonData.data.results;
    let id = 0;
    data.forEach(item => {
      id = id + 1;
      item.id = id;
    });
    this.setState({
      allPokemonData: data.slice(0, 151),
    });
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
    });
  }
  render() {
    const { allPokemonData, currentUser } = this.state;
    return (
      <div className="app-wrapper">
        <Route 
          exact 
          path="/" 
          component={Home} 
        />
        <Route
          exact
          path="/allpokemon"
          render={props => <PokemonList allPokemon={allPokemonData} currentUser={currentUser} />}
        />
        <Route
          exact
          path={`/pokemon/:id`}
          render={props => <PokemonDetails {...props} allPokemon={allPokemonData} />}
        />
        <Route
          path="/profile"
          render={props => <Profile currentUser={currentUser} />}
        />
      </div>
    )
  }
}

export default withRouter(App);
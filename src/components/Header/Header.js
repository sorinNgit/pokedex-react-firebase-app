import React from 'react';
import { Link } from '@reach/router';
import Logo from '../Logo/Logo';

const Header = () => (
  <nav
    className="header level"
    style={{
      backgroundColor: '#CE403A',
      padding: '10px 20px',
    }}
  >
    <Link to="/pokedex" className="level-left">
      <Logo size={40} />
      <h1 className="title has-text-white" style={{display: 'inline-block'}}>
        Pokedex
      </h1>
    </Link>

  </nav>
);

export default Header;
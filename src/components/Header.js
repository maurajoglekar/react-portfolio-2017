import React from 'react';
import {NavLink } from 'react-router-dom'
import './App.css';

const Header = () => (
  <header>
    <h1>Maura's React Application </h1>
    <nav>     
      <ul className="header">
        <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to='/test' activeClassName="active">Test</NavLink></li>
      </ul>
    </nav>

  </header>
)

export default Header;

import React from 'react';
import {NavLink } from 'react-router-dom'
import './App.css';

const Header = () => (
  <header>
    <h1>React Routing Application </h1>
    <nav>     
      <ul className="header">
        <li><NavLink to='/' exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to='/counter' activeClassName="active">Counter</NavLink></li>
        <li><NavLink to='/colorizer' activeClassName="active">Colorizer</NavLink></li>
        <li><NavLink to='/todo' activeClassName="active">To Do List</NavLink></li>
        <li><NavLink to='/board' activeClassName="active">Bulletin Board</NavLink></li>
     </ul>
    </nav>
  </header>
)

export default Header;

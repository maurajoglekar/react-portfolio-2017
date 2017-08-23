import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Main from './Main';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/test'>Test</Link></li>
      </ul>
    </nav>
  </header>
)


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;

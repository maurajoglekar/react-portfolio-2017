import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

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

const Home = () => (
  <div> My Home </div>
)

const Test = () => (
  <div> My test page </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/test' component={Test}/>
    </Switch>
  </main>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;

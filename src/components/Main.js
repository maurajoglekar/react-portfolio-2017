import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

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

export default Main;
import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Test from './Test'

const Main = () => (
  <main className="content">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/test' component={Test}/>
    </Switch>
  </main>
)

export default Main;
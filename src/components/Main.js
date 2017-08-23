import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Colorizer from './Colorizer'
import CounterParent from './CounterParent'
import ToDoList from './ToDoList'

const Main = () => (
  <main className="content">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/colorizer' component={Colorizer}/>
      <Route exact path='/counter' component={CounterParent}/>
      <Route exact path='/todo' component={ToDoList}/>
    </Switch>
  </main>
)

export default Main;
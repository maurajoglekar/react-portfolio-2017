import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Colorizer from './colorizer/Colorizer'
import CounterParent from './counter/CounterParent'
import ToDoList from './to-do-list/ToDoList'
import Board from './bulletin-board/Board'
import CarsRoute from './cars-details/CarsRoute'
import CarsDetails from './cars-details/CarsDetails'

const Main = () => (
  <main className="content">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/colorizer' component={Colorizer}/>
      <Route exact path='/counter' component={CounterParent}/>
      <Route exact path='/todo' component={ToDoList}/>
      <Route exact path='/board' component={Board}/>
      <Route exact path='/cars' component={CarsRoute}/>
      <Route path='/cars/:number' component={CarsDetails}/>
    </Switch>
  </main>
)

export default Main;
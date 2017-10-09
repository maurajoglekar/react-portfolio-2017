import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Colorizer from './colorizer/Colorizer'
import CounterParent from './counter/CounterParent'
import ToDoList from './to-do-list/ToDoList'
import ColorFactory from './color-organizer/ColorFactory'
import Cars from './cars-details/Cars'
import CarsDetails from './cars-details/CarsDetails'
import Board from './bb/Board'
import GHSearchBox from './github-search/GHSearchBox'
import GHSearchList from './github-search/GHSearchList'
import GHSearchListContainer from './github-search/GHSearchListContainer'
import GHSearchDetails from './github-search/GHSearchDetails'
import AboutMe from './AboutMe'
import Contact from './Contact'

const Main = () => (
  <main className="content">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/colorizer' component={Colorizer}/>
      <Route exact path='/counter' component={CounterParent}/>
      <Route exact path='/todo' component={ToDoList}/>
      <Route exact path='/colorfactory' component={ColorFactory}/>
      <Route exact path='/bb' component={Board}/>
      <Route exact path='/cars' component={Cars}/>
      <Route path='/cars/:id' component={CarsDetails}/>
      <Route exact path='/ghSearchBox' component={GHSearchBox}/>
      <Route exact path='/ghSearchListContainer/:searchTerm' component={GHSearchListContainer}/>
      <Route exact path='/ghSearchList' component={GHSearchList}/>
      <Route path='/ghSearchDetails/:name' component={GHSearchDetails}/>
      <Route path='/aboutme' component={AboutMe}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main;
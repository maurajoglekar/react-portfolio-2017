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
import Excel from './spreadsheet/Excel'
import Cinepad from './cine-critic/Cinepad'
import VacayMenu from './activityTracker/VacayMenu'
import VacayCount from './activityTracker/VacayCount'
import VacayAddForm from './activityTracker/VacayAddForm'
import VacayList from './activityTracker/VacayList'

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
      <Route path='/excel' component={Excel}/>
      <Route path='/cine' component={Cinepad}/>
      <Route path='/vacay' component={VacayMenu}/>
    </Switch>
  </main>
)

export default Main;
import React from 'react';
import { Switch, Route} from 'react-router-dom'
import VacayCount from './VacayCount'
import VacayAddForm from './VacayAddForm'
import VacayList from './VacayList'

const VacayMain = () => (
  <main className="content">
    <Switch>
      <Route path='/vacay-count' component={VacayCount}/>
      <Route path='/vacay-add-day' component={VacayAddForm}/>
      <Route path='/vacay-list-days' component={VacayList}/>
    </Switch>
  </main>
)

export default VacayMain;
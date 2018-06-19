
import React  from 'react'
import { Component } from 'react'
import './stylesheets/ui.css'
import {NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
import VacayMain from './VacayMain'
import VacayAddForm from './VacayAddForm'
import VacayList from './VacayList'
import VacayCount from './VacayCount'

class VacayMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: "2016-01-02",
				powder: true,
				backcountry: false
			}
		]
		}
		this.addDay = this.addDay.bind(this)
	}

	addDay(newDay) {
		this.setState({
			allSkiDays: [
				...this.state.allSkiDays,
				newDay
			]
		})
	}

	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}

	render() {
		return (
                <div id="p" className="container img-fluid">
                    <div className="row vacayPic center">
                      <div className="vacayContent ">
                      

			{(this.props.location.pathname === "/vacay") ?
			  <VacayCount total={this.countDays()}
							 powder={this.countDays(
							 		"powder"
							 	)}
							 backcountry={this.countDays(
							 		"backcountry"
							 	)}/> :
			 (this.props.location.pathname === "/vacay-add-day") ?
			 	<VacayAddForm onNewDay={this.addDay}/> :
			 	<VacayList days={this.state.allSkiDays}
			 				filter={this.props.params.filter}/>				 
			}

                      </div>
                    </div> 
                    <div className="row">
                        <div className="btn-group btn-group-justified">
                          <NavLink className="btn btn-primary" to='/vacay'><HomeIcon /></NavLink>
                          <NavLink className="btn btn-primary" to='/vacay-add-day'><AddDayIcon /></NavLink>
                          <NavLink className="btn btn-primary" to='/vacay-list-days'><ListDaysIcon  /></NavLink>
                        </div>
                    </div>
                </div>
                )
	}}

export default VacayMenu




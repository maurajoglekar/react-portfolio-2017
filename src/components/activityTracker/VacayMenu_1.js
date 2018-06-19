
import React  from 'react'
import { Component } from 'react'
import './stylesheets/ui.css'
import {NavLink } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
import ListDaysIcon from 'react-icons/lib/fa/table'
import VacayMain from './VacayMain'

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
                    <div>
                    <div id="p" className="container img-fluid">
                        <div className="row vacayPic">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-8 vacayContent ">
                          <div className="table-responsive">
                            <table className="table table-bordered center">
                            <thead>
                              <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                              </tr>
                              <tr>
                                <td>Mary</td>
                                <td>Moe</td>
                                <td>mary@example.com</td>
                              </tr>
                              <tr>
                                <td>July</td>
                                <td>Dooley</td>
                                <td>july@example.com</td>
                              </tr>
                            </tbody>
                          </table> 
                          </div>
                          </div>
                          <div className="col-sm-2"></div>
                        </div> 
                    <div className="row">
                        <div className="btn-group btn-group-justified">
                          <NavLink className="btn btn-primary" to='/vacay'><HomeIcon /></NavLink>
                          <NavLink className="btn btn-primary" to='/vacay-add-day'><AddDayIcon /></NavLink>
                          <NavLink className="btn btn-primary" to='/vacay-list-days'><ListDaysIcon  /></NavLink>
                        </div>
                    </div>
                    </div>
                    </div>
                )
	}
}

export default VacayMenu




import React, { Component}  from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import VacayRow from './VacayRow'
import PropTypes from 'prop-types'
import {NavLink } from 'react-router-dom'

const VacayList = ({days, filter}) => {
  const filteredDays = (!filter || 
  		!filter.match(/powder|backcountry/))?
  		days:
  		days.filter(day => day[filter])

  return (
  	<div className="table-responsive">
	<table className="table">
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>Backcountry</th>
			</tr>
			<tr>
				<td colSpan={4}>
					<NavLink to="/list-days">
						All Days
					</NavLink>
					<NavLink to="/list-days/powder">
						Powder Days
					</NavLink>
					<NavLink to="/list-days/backcountry">
						Backcountry Days
					</NavLink>
				</td>
			</tr>
		</thead>
		<tbody>
			{filteredDays.map((day, i) =>
				<VacayRow key={i}
						   {...day}/>	
				)}
		</tbody>

	</table>
	</div>
)
}  

VacayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"VacayList should be an array"	
				)
		} else if(!props.days.length) {
			return new Error(
				"VacayList must have at least one record"
				)
		} else {
			return null
		}
	}
}

export default VacayList












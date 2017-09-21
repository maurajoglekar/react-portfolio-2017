import React from 'react';
import {NavLink } from 'react-router-dom'
import './App.css'

const Home = () => (
    <div>
        <h2>Welcome!!</h2>
        <h3>Explore these cool components </h3>
        <ul className="homeList">
        <li><NavLink to='/counter'><b>Counter</b> - Click to increase a counter</NavLink></li>
            <li><NavLink to='/colorizer'><b>Colorizer</b> - Color a square </NavLink></li>
            <li><NavLink to='/todo'><b>To Do List</b> - Create a todo list</NavLink></li>
            <li><NavLink to='/cars'><b>Cars</b> - List of cars from which you can navigate to the car details</NavLink></li>
        </ul>
    </div>
)

export default Home
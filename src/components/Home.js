import React from 'react';
import {NavLink } from 'react-router-dom'
import './App.css'

const Home = () => (
    <div>
        <h2>Welcome!!</h2>
        <h3>Explore these cool components </h3>
        <ul className="homeList">
            <li><NavLink to='/counter'>Counter - Click to increase a counter</NavLink></li>
            <li><NavLink to='/colorizer'>Colorizer - Color a square </NavLink></li>
            <li><NavLink to='/todo'>To Do List - Create a todo list</NavLink></li>
            <li><NavLink to='/board'>Bulletin Board that enables you to add notes to a board</NavLink></li>
        </ul>
    </div>
)

export default Home
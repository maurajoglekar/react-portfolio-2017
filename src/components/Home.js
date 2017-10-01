import React from 'react';
import {NavLink } from 'react-router-dom'
import color1 from './images/colors1.jpg'
import color2 from './images/colors2.jpg'
import todolist from './images/todolist.jpg'
import cars from './images/cars2.jpg'
import postits from './images/postits3.jpg'
import scribble from './images/scribble.jpg'

import './App.css'

const Home = () => (
<div className="container-fluid text-center"> 
    <div className="jumbotron">
      <div className="container text-center">
        <h1>Maura's Portfolio</h1>      
        <p>UI Developer with a passion for ReactJS</p>
      </div>
    </div>

  <div className="row">
     <div className="col-sm-4">
      <div className="thumbnail">
       <h3>Create colors and star rate them</h3>
        <NavLink to='/colorfactory'><img src={color1} alt="color factory" width="300" height="300" /></NavLink>        
      </div>      
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <h3>Create a To Do list</h3>
        <NavLink to='/todo'><img src={todolist} alt="To Do List" width="300" height="300" /></NavLink>        
      </div>      
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <h3>Post-Its Board</h3>
        <NavLink to='/bb'><img src={postits} alt="To Do List" width="300" height="300" /></NavLink>        
      </div>      
    </div>

    
  </div>
    <div className="row">
    <div className="col-sm-4">
      <div className="thumbnail">
       <h3>Color a square</h3>
       <NavLink to='/colorizer'><img src={color2} alt="colorizer" width="300" height="300" /></NavLink>
      </div>      
   </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <h3>Cars Inventory</h3>
       <NavLink to='/cars'><img src={cars} alt="Cars" width="300" height="300" /></NavLink>
      </div>      
    </div>
    <div className="col-sm-4">
      <div className="thumbnail">
        <h3>Git Hub Search</h3>
        <NavLink to='/todo'><img src={scribble} alt="To Do List" width="300" height="300" /></NavLink>        
      </div>      
    </div>
  </div>
</div>
)

export default Home
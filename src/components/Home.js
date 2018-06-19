import React from 'react';
import {NavLink } from 'react-router-dom'
import rateColor from './images/rateColor.jpg'
import color2 from './images/colorSquare.jpg'
import todolist from './images/todolist.jpg'
import cars from './images/cars2.jpg'
import postits from './images/postits3.jpg'
import ghsearch from './images/ghSearch.png'
import excel from './images/excel.jpg'
import cine from './images/cine.jpg'

import './App.css'

const Home = () => (
    <div className="text-center"> 
        <div className="jumbotron homeHeader">
          <div className="container text-center">
            <h1>Maura's Portfolio</h1>      
            <p>UI Developer with a passion for ReactJS</p>
          </div>
        </div>

        <div className="row container-fluid ">
        <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Git Hub Search</h3>
               <div className="overlay col-sm-4">
                <div className="text">A hacker rank test that allows the user to search for repos using the Github Search API. </div>
              </div>
            </div>
            <NavLink to='/ghSearchBox'><img src={ghsearch} alt="GitHub Search" width="300" height="300" /></NavLink>        
          </div> 
        </div>
         <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Review Movies</h3>
               <div className="overlay">
                <div className="text">Allows the user to keep a list of movie ratings with actions to add, view, remove, and update the movie reviews. </div>
              </div>
            </div>
            <NavLink to='/cine'><img src={cine} alt="excel" width="300" height="300" /></NavLink>        
          </div>      
        </div>
         <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Excel application</h3>
               <div className="overlay">
                <div className="text">Allows the user to edit the contents of a data table, and also sort, search (filter), and export the data as downloadable files.</div>
              </div>
            </div>
            <NavLink to='/excel'><img src={excel} alt="excel" width="300" height="300" /></NavLink>        
          </div>      
        </div>
      </div>
      
      <div className="row container-fluid ">
        <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Post-Its Board</h3>
               <div className="overlay">
                <div className="text">An extension on the application from Lynda.com 'Learning React.js' course, a board with post-it like notes.</div>
              </div>
            </div>
            <NavLink to='/bb'><img src={postits} alt="Post-Its Board" width="300" height="300" /></NavLink>        
          </div>      
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Cars Inventory</h3>
               <div className="overlay">
                <div className="text">Demonstrates navigation from list to details using unique id in router path. </div>
              </div>
            </div>
           <NavLink to='/cars'><img src={cars} alt="Cars" width="300" height="300" /></NavLink>
          </div>      
        </div>
         <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Create colors and star rate them</h3>
               <div className="overlay">
                <div className="text">Maintains a set of colors, name it, and rate it using stars. </div>
              </div>
            </div>
            <NavLink to='/colorfactory'><img src={rateColor} alt="color factory" width="300" height="300" /></NavLink>        
          </div>      
        </div>
      </div>

      <div className="row container-fluid">
         <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Create a To Do list</h3>
               <div className="overlay">
                <div className="text">Provides a form to add tasks and delete them as completed.</div>
              </div>
            </div>
            <NavLink to='/todo'><img src={todolist} alt="To Do List" width="300" height="300" /></NavLink>        
          </div>      
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Color a square</h3>
               <div className="overlay">
                <div className="text">Allows the user to input a CSS color value and use that as the background color for the square. </div>
              </div>
            </div>
           <NavLink to='/colorizer'><img src={color2} alt="colorizer" width="300" height="300" /></NavLink>
          </div>      
       </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <div className="mycontainer">
               <h3>Vacation Tracker</h3>
               <div className="overlay">
                <div className="text">track vacation days </div>
              </div>
            </div>
           <NavLink to='/vacay'><img src={color2} alt="colorizer" width="300" height="300" /></NavLink>
          </div>      
       </div>
      </div>

    </div>
)

export default Home
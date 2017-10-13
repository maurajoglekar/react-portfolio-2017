import React from 'react';
import {NavLink } from 'react-router-dom'
import createReactClass from 'create-react-class';
import './App.css';

var Header = createReactClass({
         render: function() {
          var headerStyle = {
            fontSize: 18
        };
          return (
              <header>
              <div className="header"> 
                <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                      </button>
                      <a className="navbar-brand" href="/">Portfolio</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                      <ul className="nav navbar-nav" style={headerStyle}>
                        <li><NavLink to='/aboutme' activeClassName="active">About Me</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                </div>
              </header>         
            );
        }
    });


export default Header;

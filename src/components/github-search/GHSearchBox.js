import React from 'react';
import createReactClass from 'create-react-class';
import { NavLink} from 'react-router-dom'
import './github.css'
 
const GHSearchBox = createReactClass({
            doSearch: function(e) {
                var newTerms = this._inputElement.value;
                if (newTerms.length > 0) {
                    this.props.history.push('/ghSearchListContainer/'+ newTerms);
                }
            },    
            render: function() {
              return (
               <div className="container-fluid searchBody">
                    <div className="answerinfo">
                    <h1>Git Hub Search</h1>
                       <form className="form-inline" id="search" onSubmit={this.doSearch}>
                        <div className="input-group">
                          <input ref={(a) => this._inputElement = a} className="textinput" type="text" placeholder="Enter text" required></input>
                          <div className="input-group-btn">
                          <button className="btn btn-primary searchButton" type="submit">Search</button>
                          </div>
                        </div>
                      </form>
                    </div>
                </div>
              )
    }
    });

export default GHSearchBox



import React from 'react';
import createReactClass from 'create-react-class';
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
                    <div className="jumbotron text-center searchJumbo">
                      <h1 className="searchHeader">Git Hub Search</h1> 
                      <form onSubmit={this.doSearch}>
                        <div className="input-group">
                          <input ref={(a) => this._inputElement = a} type="text" className="form-control searchText" placeholder="Enter text" required></input>
                          <div className="input-group-btn">
                            <button type="submit" className="btn btn-danger">Search</button>
                          </div>
                        </div>
                      </form>
                    </div>      
               </div>
              )
    }
    });

export default GHSearchBox



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
                      
                  <form className="form-horizontal" onSubmit={this.doSearch}>
                    <div className="form-group">
                      <div className="col-sm-12">          
                      <input ref={(a) => this._inputElement = a} type="text" className="form-control searchText" placeholder="Enter text" required></input>
                      </div>
                    </div>
                    <div className="form-group">        
                      <div className="col-sm-offset-1 col-sm-10">
                        <button type="submit" className="btn btn-default">Search</button>
                      </div>
                    </div>
                  </form>                      
                      
                    </div>      
               </div>
              )
    }
    });

export default GHSearchBox



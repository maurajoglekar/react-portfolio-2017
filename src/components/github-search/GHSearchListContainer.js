import React from 'react';
import createReactClass from 'create-react-class';
import GHSearchList from './GHSearchList'
import './github.css'
 
const GHSearchListContainer = createReactClass({
        componentDidMount() {
            this._inputElement.value = this.props.match.params.searchTerm;
        },
        render: function() {
            return (
                <div className="container-fluid searchBody">
                    <div className="answerinfo container">
                        <h1 className="searchHeader">Git Hub Search</h1>
                        
                  <form className="form-horizontal" onSubmit={this.doSearch}>
                    <div className="form-group">
                      <div className="col-sm-12">          
                      <input ref={(a) => this._inputElement = a} type="text" className="form-control searchText" placeholder="Enter text" readonly></input>
                      </div>
                    </div>
                   </form>                      
                       
                        <GHSearchList searchTerms={this.props.match.params.searchTerm}/>
                    </div>
                </div>
            )
        }
});

export default GHSearchListContainer



import React from 'react';
import createReactClass from 'create-react-class';
import { NavLink} from 'react-router-dom'
import GHSearchList from './GHSearchList'
import './github.css'
 
const GHSearchListContainer = createReactClass({
        componentDidMount() {
            this._inputElement.value = this.props.match.params.searchTerm;
        },
        render: function() {
            return (
                <div className="container-fluid searchBody">
                    <div className="answerinfo">
                        <h1 className="searchHeader">Git Hub Search</h1>
                        <form className="form-inline searchForm"  id="search" >
                        <div className="input-group">
                          <input ref={(a) => this._inputElement = a} type="text" className="textinput"></input>
                          <div className="input-group-btn">
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



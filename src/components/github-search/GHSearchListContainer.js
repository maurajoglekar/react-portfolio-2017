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
                    <div className="answerinfo container">
                        <h1 className="searchHeader">Git Hub Search</h1>
                        
                           <div className="row">
                            <div className="col-sm-1">
                            </div>
                            <div className="col-sm-8">
                            <input ref={(a) => this._inputElement = a} type="text" className="textinput"></input>
                            </div>
                            <div className="col-sm-3">
                            </div>
                          </div>
                       
                        <GHSearchList searchTerms={this.props.match.params.searchTerm}/>
                    </div>
                </div>
            )
        }
});

export default GHSearchListContainer



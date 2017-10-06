import React from 'react';
import createReactClass from 'create-react-class';
import { NavLink} from 'react-router-dom'
import './github.css'
 
const GHSearchDetails = createReactClass({
        getInitialState() {
            return {
                issues: []
            }
        },
        componentDidMount() {
            var name = decodeURIComponent (this.props.match.params.name);
            if (!name) {
                return <div>Sorry, but the item was not found.</div>
            }
            var url = `https://api.github.com/repos/${name}/issues`
            fetch(url)
              .then(response => response.json())
              .then(data => 
                      this.setState({issues: data }))
              .catch(function(err) {
                console.log("Didn't connect to the API", err)
              });
        },
        render: function() {
            return (
                <div className="container-fluid searchBody">
                    <div className="answerinfo">
                        <h1 className="searchHeader">{decodeURIComponent (this.props.match.params.name)}</h1>
                        <div>
                            <ul className="answerlist">
                                {
                                    this.state.issues.map(p => (
                                            <li className="answer cf">
                                            <p>{p.title}</p>
                                            </li>
                                    ))
                                }
                            </ul>  
                        </div>
                    </div>
                </div>
            )
        }
});

export default GHSearchDetails



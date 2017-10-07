import React from 'react';
import createReactClass from 'create-react-class';
import { NavLink} from 'react-router-dom'
import './github.css'
 
const GHSearchList = createReactClass({
        getInitialState() {
            return {
                answers: []
            }
        },
        getAnswer(id) {
            const isAnswer = p => p.id === id
            return this.answers.find(isAnswer)           
        },
        navigateToDetails(e, id) {
            this.props.history.push('/ghSearchDetails/'+ id);
        },
        componentDidMount() {
            var newTerms = this.props.searchTerms;
            var url = `https://api.github.com/search/repositories?q=${newTerms}`
            fetch(url)
              .then(response => response.json())
              .then(data => this.setState({answers: data.items }))
              .catch(function(err) {
                console.log("Didn't connect to the API", err)
              });
        },
        render: function() {
            return (
                  <div>
                    <ul className="answerlist">
                        {
                            this.state.answers.map(p => (
                              <li className="answer cf" key={p.id}>
                                <NavLink to={`/ghSearchDetails/${encodeURIComponent(p.full_name)}`}>
                                    <h3>{p.full_name}</h3>
                                    <h4>{p.description}</h4>
                                </NavLink>
                              </li>
                            ))
                        }
                    </ul>  
                </div>
            )
        }
});

export default GHSearchList



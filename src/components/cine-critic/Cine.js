import React from 'react';
import createReactClass from 'create-react-class';
import './css/Button.css'
import './css/Suggest.css'
import './css/Rating.css'
import './css/FormInput.css'
import './css/Actions.css'
import './css/Dialog.css'
import Logo from './Logo'
import Movie from './Movie'
import Button from './Button';
import Suggest from './Suggest';
import Rating from './Rating';
import FormInput from './FormInput';
import Form from './Form';
import Actions from './Actions'
import Dialog from './Dialog'

const Cine = createReactClass({
        getInitialState: function() {
            return {
            };
        },
        componentDidMount() {
        },
        addReview: function() {
            alert('Add a review!')
        },
        render: function() {
            var headers = localStorage.getItem('headers');
            var data = localStorage.getItem('data');

            if (!headers) {
              headers = ['Title', 'Year', 'Rating', 'Comments'];
              data = [['Big Sick', '2017', '4', 'Great date movie']];
            }
            return (
                <div>
                <div className="jumbotron cine-header">
                  <div className="container text-center">
                  <h1><Logo />  Welcome to Cine Critic!</h1>
                  <h2> Your Personal Movie Reviews</h2>
                  </div>
                </div>
 
                  <div className="page-header">
                      <div className="row">
                           <div className="col-sm-1"></div>
                           <div className="col-sm-2">
                               <a className="btn btn-primary" onClick={this.addReview}>Add</a>
                           </div>
                       </div>
                <h2>Suggest</h2>
                <div><Suggest options={['eenie', 'meenie', 'miney', 'mo']} /></div>
                </div>
      
                <div className="container-fluid">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                      {
                        headers.map((title, idx) => (
                            <th key={idx}>{title}</th>))
                      }
                      </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((movie, i) => (
                                    <Movie key={i}
                                        rowidx={i}
                                        movie={movie}></Movie> 
                                   ))
                        }
                    </tbody>
                  </table>
                  </div>
                </div>
            );
        }
    });

export default Cine
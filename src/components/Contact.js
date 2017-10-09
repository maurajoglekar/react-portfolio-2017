import React from 'react';
import createReactClass from 'create-react-class';
import './App.css';

const Contact = createReactClass({
    sendEmail: function(e) {
        alert('Need to implement sending contact email!')
    },    
    render: function() {
        return (
                <div className="container text-center">
                  <div className="page-header">
                    <h1>Contact Me</h1>      
                  </div>
                  <form className="form-horizontal" onSubmit={this.sendEmail}>
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="pwd">Name</label>
                      <div className="col-sm-10">          
                      <input type="text" className="form-control" id="pwd" placeholder="Enter name" name="name" required></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="email">Email</label>
                      <div className="col-sm-10">
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="pwd">Message</label>
                      <div className="col-sm-10">          
                      <textarea className="form-control" id="message" name="message" required></textarea>
                      </div>
                    </div>
                    <div className="form-group">        
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              );
        }
    });

export default Contact


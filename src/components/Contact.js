import React from 'react';
import createReactClass from 'create-react-class';
import './App.css';
import sendgrid from 'sendgrid'

const Contact = createReactClass({
    sendEmail: function(e) {
        var helper = sendgrid.mail;
        var from_email = new helper.Email('test@example.com');
        var to_email = new helper.Email('maura_jj@sbcglobal.net');
        var subject = 'Hello World from the SendGrid Node.js Library!';
        var content = new helper.Content('text/plain', 'Hello, Email!');
        var mail = new helper.Mail(from_email, subject, to_email, content);

        var sg = sendgrid(process.env.SENDGRID_API_KEY);
        var request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON(),
        });

        sg.API(request, function(error, response) {
          console.log(response.statusCode);
          console.log(response.body);
          console.log(response.headers);
        });
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
                      <input  ref={(el) => this._name = el}
                            type="text" className="form-control" id="pwd" placeholder="Enter name" name="name" required></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="email">Email</label>
                      <div className="col-sm-10">
                      <input ref={(el) => this._email = el} 
                              type="email" className="form-control" id="email" placeholder="Enter email" name="email" required></input>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" for="pwd">Message</label>
                      <div className="col-sm-10">          
                      <textarea ref={(el) => this._message = el} 
                              className="form-control" id="message" name="message" required></textarea>
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


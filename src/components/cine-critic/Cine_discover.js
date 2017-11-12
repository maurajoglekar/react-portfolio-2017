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
                  </div>
                </div>
 <h2>Actions</h2>
<div><Actions onAction={type => alert(type)} /></div>

<Dialog
  header="Out-of-the-box example"
  onAction={type => alert(type)}>
    Hello, dialog!
</Dialog>

<Dialog
  header="No cancel, custom button"
  hasCancel={false}
  confirmLabel="Whatever"
  onAction={type => alert(type)}>
    Anything goes here, see:
    <Button>A button</Button>
</Dialog>
                  <div className="page-header">
                      <div className="row">
                           <div className="col-sm-1"></div>
                           <div className="col-sm-2">
                               <a className="btn btn-primary" onClick={this.addReview}>Add</a>
                           </div>
                       </div>
                       <h2>Buttons</h2>
                        <div>Button with onClick: <Button onClick={() => alert('ouch')}>Click me</Button></div>
                        <div>A link: <Button href="http://reactjs.com">Follow me</Button></div>
                        <div>Custom class name: <Button className="custom">I do nothing</Button></div>
                <h2>Suggest</h2>
                <div><Suggest options={['eenie', 'meenie', 'miney', 'mo']} /></div>
                </div>
 <h2>Rating</h2>
<div>No initial value: <Rating /></div>
<div>Initial value 4: <Rating defaultValue={4} /></div>
<div>This one goes to 11: <Rating max={11} /></div>
<div>Read-only: <Rating readonly={true} defaultValue={3} /></div>

<h2>Form inputs</h2>
<table><tbody>
  <tr>
    <td>Vanilla input</td>
    <td><FormInput /></td>
  </tr>
  <tr>
    <td>Prefilled</td>
    <td><FormInput defaultValue="it's like a default" /></td>
  </tr>
  <tr>
    <td>Year</td>
    <td><FormInput type="year" /></td>
  </tr>
  <tr>
    <td>Rating</td>
    <td><FormInput type="rating" defaultValue={4} /></td>
  </tr>
  <tr>
    <td>Suggest</td>
    <td><FormInput
      type="suggest"
      options={['red', 'green', 'blue']}
      defaultValue="green" />
    </td>
  </tr>
  <tr>
    <td>Vanilla textarea</td>
    <td><FormInput type="text" /></td>
  </tr>
</tbody></table>
<Form
  fields={[
    {label: 'Rating', type: 'rating', id: 'rateme'},
    {label: 'Greetings', id: 'freetext'},
  ]}
  initialData={ {rateme: 4, freetext: 'Hello'} } />
      

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
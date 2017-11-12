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
import Cine from './Cine'
import schema from './schema';

let data = JSON.parse(localStorage.getItem('cinedata'));

// default example data, read from the schema
if (!data) {
  data = {};
  schema.forEach((item) => data[item.id] = item.sample);
  data = [data];
}

const Cinepad = createReactClass({
        render: function() {
            return (
                <div>
                    <div className="jumbotron cine-header">
                      <div className="container text-center">
                      <h1><Logo />  Welcome to Cine Critic!</h1>
                      <h2> Your Personal Movie Reviews</h2>
                      </div>
                    </div>
                    
                    <Cine schema={schema} initialData={data} />
                </div>
            );
        }
    });

export default Cinepad
import React, {Component} from 'react';
import createReactClass from 'create-react-class';
import './css/Button.css'
import './css/Suggest.css'
import './css/Rating.css'
import './css/FormInput.css'
import './css/Actions.css'
import './css/Dialog.css'
import Logo from './Logo'
import Button from './Button';
import Suggest from './Suggest';
import Rating from './Rating';
import FormInput from './FormInput';
import Form from './Form';
import Actions from './Actions'
import Dialog from './Dialog'
import Excel from './Excel'
import PropTypes from 'prop-types';

class Cine extends Component {

    constructor(props) {
         super(props);
         this.state = {
           data: props.initialData,
           addnew: false,
         };
         this.preSearchData = null;
    }

    commitToStorage(data) {
      localStorage.setItem('data', JSON.stringify(data));
    }

    onExcelDataChange(data) {
        this.setState({data: data});
        this.commitToStorage(data);
    }
    
    render() {
        return (
            <div>
                <Excel 
                    schema={this.props.schema}
                    initialData={this.state.data}
                    onDataChange={this.onExcelDataChange.bind(this)} />
            </div>
        );
    }
}

Cine.propTypes = {
  schema: PropTypes.arrayOf(
    PropTypes.object
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.object
  )    
}

export default Cine
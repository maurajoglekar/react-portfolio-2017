import React, {Component} from 'react';
import './css/Button.css'
import './css/Suggest.css'
import './css/Rating.css'
import './css/FormInput.css'
import './css/Actions.css'
import './css/Dialog.css'
import './css/Cine.css'
import Button from './Button';
import Form from './Form';
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
    
    addNewDialog() {
        this.setState({addnew: true});
    }

    addNew(action) {
        if (action === 'dismiss') {
          this.setState({addnew: false});
          return;
        }
        let data = Array.from(this.state.data);
        data.unshift(this.refs.form.getData());
        this.setState({
          addnew: false,
          data: data,
        });
        this.commitToStorage(data);
    }

    commitToStorage(data) {
      localStorage.setItem('cinedata', JSON.stringify(data));
    }

    onExcelDataChange(data) {
        this.setState({data: data});
        this.commitToStorage(data);
    }
    
    render() {
        return (
            <div className="Cinepad datagrid">
                 <div className="page-header">
                      <div className="row">
                           <div className="col-sm-2">                               
                                <Button 
                                  onClick={this.addNewDialog.bind(this)}
                                  className="toolbarAddButton">
                                  + Add
                                </Button>
                           </div>
                       </div>
                </div>

                <Excel 
                    schema={this.props.schema}
                    initialData={this.state.data}
                    onDataChange={this.onExcelDataChange.bind(this)} />
                {this.state.addnew
                  ? <Dialog 
                      modal={true}
                      header="Add new item"
                      confirmLabel="Add"
                      onAction={this.addNew.bind(this)}
                    >
                      <Form
                        ref="form"
                        fields={this.props.schema} />
                    </Dialog>
                  : null}
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
import Actions from './Actions';
import Dialog from './Dialog';
import Form from './Form';
import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
//import './css/Excel.css'

class Excel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.initialData,
      sortby: null, // schema.id
      descending: false,
      edit: null, // [row index, schema.id],
      dialog: null, // {type, idx}
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.initialData});
  }

  actionClick(rowidx, action) {
    this.setState({dialog: {type: action, idx: rowidx}});
  }
    
  render() {
    return (
      <div className="Excel">
        {this.renderTable()}
      </div>
    );
  }
  
  renderTable() {
    return (
       <div className="container-fluid">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>{
                this.props.schema.map((item, idx) => {
                  if (!item.show) {
                    return null;
                  }
                  let title = item.label;
              return (<th key={idx}>{title}</th>);
            }, this)
          }
              <th className="ExcelNotSortable">Actions</th>
              </tr>
            </thead>
        <tbody> 
            {this.state.data.map((row, rowidx) => {
                return (
                  <tr key={rowidx}>{
                    Object.keys(row).map((cell, idx) => {
                      const schema = this.props.schema[idx];
                      if (!schema || !schema.show) {
                        return null;
                      }
                      const isRating = schema.type === 'rating';
                      const edit = this.state.edit;
                      let content = row[cell];
                      if (isRating) {
                        content = <Rating readonly={true} defaultValue={Number(content)} />;
                      }
                      return (
                        <td 
                          key={idx}
                          data-row={rowidx}
                          data-key={schema.id}>
                          {content}
                        </td>
                      );
                    }, this)}
                    <td className="ExcelDataCenter">
                      <Actions onAction={this.actionClick.bind(this, rowidx)}/>
                    </td>
                  </tr>
                );
            }, this)
            }
        </tbody>
      </table>
      </div>
    );
  }
}

Excel.propTypes = {
  schema: PropTypes.arrayOf(
    PropTypes.object
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.object
  ),
  onDataChange: PropTypes.func,
};

export default Excel

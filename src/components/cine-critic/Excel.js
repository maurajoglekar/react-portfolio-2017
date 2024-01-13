import Actions from './Actions';
import Dialog from './Dialog';
import Form from './Form';
import Rating from './Rating';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
  
  fireDataChange(data) {
    this.props.onDataChange(data);
  }
  
  sort(key) {
    if (this) {
    let data = Array.from(this.state.data);
    const descending = this.state.sortby === key && !this.state.descending;
    data.sort((a, b) =>
      descending 
        ? (a[key] < b[key] ? 1 : -1)
        : (a[key] > b[key] ? 1 : -1)
    );
    this.setState({
      data: data,
      sortby: key,
      descending: descending,
    });
    this.fireDataChange(data);
    }
  }
  
  showEditor(e) {
    this.setState({edit: {
      row: parseInt(e.target.dataset.row, 10),
      key: e.target.dataset.key,
    }});
  }
  
  save(e) {
    e.preventDefault();
    const value = this.refs.input.getValue();
    let data = Array.from(this.state.data);
    data[this.state.edit.row][this.state.edit.key] = value;
    this.setState({
      edit: null,
      data: data,
    });
    this.fireDataChange(data);
  }
   
  deleteConfirmationClick(action) {
    if (action === 'dismiss') {
      this.closeDialog();
      return;
    }
    let data = Array.from(this.state.data);
    data.splice(this.state.dialog.idx, 1);
    this.setState({
      dialog: null,
      data: data,
    });
    this.fireDataChange(data);
  }
  
  closeDialog() {
    this.setState({dialog: null});
  }
  
  saveDataDialog(action) {
    if (action === 'dismiss') {
      this.closeDialog();
      return;
    }
    let data = Array.from(this.state.data);
    data[this.state.dialog.idx] = this.refs.form.getData();
    this.setState({
      dialog: null,
      data: data,
    });
    this.fireDataChange(data);
  }
  
  render() {
    return (
      <div className="Excel">
        {this.renderTable()}
        {this.renderDialog()}
      </div>
    );
  }

  renderDialog() {
    if (!this.state.dialog) {
      return null;
    }
    switch (this.state.dialog.type) {
      case 'delete':
        return this.renderDeleteDialog();
      case 'info':
        return this.renderFormDialog(true);
      case 'edit':
        return this.renderFormDialog();
      default:
        throw Error(`Unexpected dialog type ${this.state.dialog.type}`);
    }
  }
  
  renderDeleteDialog() {
    const first = this.state.data[this.state.dialog.idx];
    const nameguess = first[Object.keys(first)[0]];
    return (
      <Dialog 
        modal={true}
        header="Confirm deletion"
        confirmLabel="Delete"
        onAction={this.deleteConfirmationClick.bind(this)}
      >
        {`Are you sure you want to delete "${nameguess}"?`}
      </Dialog>
    );
  }
  
  renderFormDialog(readonly) {
    return (
      <Dialog 
        modal={true}
        header={readonly ? 'Item info' : 'Edit item'}
        confirmLabel={readonly ? 'ok' : 'Save'}
        hasCancel={!readonly}
        onAction={this.saveDataDialog.bind(this)}
      >
        <Form
          ref="form"
          fields={this.props.schema}
          initialData={this.state.data[this.state.dialog.idx]}
          readonly={readonly} />
      </Dialog>
    ); 
  }
  
  renderTable() {
    return (
       <div className="container-fluid">
          <table className="table table-striped table-bordered">
            <thead  onClick={this.sort}>
              <tr>{
                this.props.schema.map((item, idx) => {
                  if (!item.show) {
                    return null;
                  };
                  let title = item.label;
                  if (this.state.sortby === item.id) {
                    title += this.state.descending ? ' \u2191' : ' \u2193';
                  }
                  return (
                    <th                      
                      key={item.id}
                      onClick={this.sort.bind(this, item.id)}
                    >
                      {title}
                    </th>
                  );
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

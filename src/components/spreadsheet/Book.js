import React from 'react';
import PropTypes from 'prop-types'

const Book = ({ rowidx=0, book=[], edit=[], onSave=f=>f }) => ({
      render: function() {          
          return (<tr>
                      {
                        this.props.book.map((cell,idx) => {                            
                        if (this.props.edit && 
                                this.props.edit.row === this.props.rowidx && 
                                this.props.edit.cell === idx) {
                            cell = (
                                <form onSubmit={this.props.onSave}>
                                  <input type="text" defaultValue={cell} />
                                </form>
                            );
                        }
                        return <td key={idx} data-row={this.props.rowidx}>{cell}</td>
                        }, this)
                      }
                  </tr>
          );
        }
    });

Book.propTypes = {
    rowidx: PropTypes.number,
    book: PropTypes.array,
    edit: PropTypes.object,
    onSave: PropTypes.func
}

export default Book


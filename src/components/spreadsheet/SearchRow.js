import React from 'react';
import PropTypes from 'prop-types'

const SearchRow = ({ headers=[], OnSearch=f=>f, isSearchOn=false }) => ({
      render: function() {          
          if  (!this.props.isSearchOn) {
              return null;
          }   
          return (<tr onChange={this.props.onSearch}>
              {this.props.headers.map(function(ignore, idx) {
                return <td key={idx}><input type="text" data-idx={idx}/></td>;
              })}
            </tr>
          );
        }
    });

SearchRow.propTypes = {
    headers: PropTypes.array,
    onSearch: PropTypes.func,
    isSearchOn: PropTypes.bool
}

export default SearchRow



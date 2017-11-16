import React from 'react';
import PropTypes from 'prop-types';
import './css/Actions.css'

const Actions = props =>  
  <div className="Actions">
    <span 
      tabIndex="0"
      className="ActionsInfo"
      title="More info"
      onClick={props.onAction.bind(null, 'info')}>&#x2139;</span>
    <span 
      tabIndex="0" 
      className="ActionsEdit" 
      title="Edit"
      onClick={props.onAction.bind(null, 'edit')}>&#10000;</span>
    <span 
      tabIndex="0"
      className="ActionsDelete"
      title="Delete"
      onClick={props.onAction.bind(null, 'delete')}>x</span>
  </div>

Actions.propTypes = {
  onAction: PropTypes.func,
};

Actions.defaultProps = {
  onAction: () => {},
};

export default Actions

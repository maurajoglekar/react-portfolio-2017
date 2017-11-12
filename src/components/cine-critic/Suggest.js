
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Suggest extends Component {

    constructor(props) {
        super(props);
        this.state = {value: props.defaultValue};  //instead of getInitialState
    }
    
  getValue() {
    //return this.refs.suggestinput.value;
    return this.state.value;  //no ref, use state and onChange in input element
  }

  render() {
    const randomid = Math.random().toString(16).substring(2);
    return (
      <div>
        <input
          list={randomid}
          defaultValue={this.props.defaultValue}
          onChange={e => this.setState({value: e.target.value})}
          id={this.props.id}></input>
        <datalist id={randomid}>{
          this.props.options.map((item, idx) =>
            <option value={item} key={idx} />
          )
        }</datalist>
      </div>
    );
  }
}

Suggest.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Suggest
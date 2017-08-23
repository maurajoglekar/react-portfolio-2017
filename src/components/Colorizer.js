import React from 'react';
import './App.css';
import './Colorizer.css'

var Colorizer = React.createClass({
        getInitialState: function() {
          return {
              color: '',
              bgColor: ''
          }
        },
        colorValue: function(e) {
          this.setState({color: e.target.value});
        },
        setNewColor: function(e){
          this.setState({bgColor: this.state.color});

          this._input.value = "";
          this._input.focus();

          e.preventDefault();
        },
        render: function() {
          var squareStyle = {
            backgroundColor: this.state.bgColor
          };

          return (
            <div className="colorArea">
              <div style={squareStyle} className="colorSquare"></div>

              <form onSubmit={this.setNewColor}>
                <input
                    ref={
                            (el) => this._input = el
                        }
                    onChange={this.colorValue}
                    placeholder="Enter a color value">
                </input>
                <button type="submit">go</button>
              </form>
            </div>
          );
        }
    });

export default Colorizer
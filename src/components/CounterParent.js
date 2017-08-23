import React from 'react';
import './App.css';
import Counter from './Counter'

const CounterParent = React.createClass({
        getInitialState: function() {
            return {
              count: 0
            };
        },
        increase: function(e) {
          var currentCount = this.state.count;

          if (e.shiftKey) {
            currentCount += 10;
          } else {
            currentCount += 1;
          }

          this.setState({
            count: currentCount
          });
        },  
        render: function() {
          var backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
          };

          var buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
          };

          return (
            <div style={backgroundStyle}>
              <Counter display={this.state.count}/>
              <button onClick={this.increase} style={buttonStyle}>+</button>
             </div>
          );
        }
    });

export default CounterParent
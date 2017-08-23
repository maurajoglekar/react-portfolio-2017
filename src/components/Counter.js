import React from 'react';

const Counter = () => ({
      render: function() {
          var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
          };

          return (
            <div style={textStyle}>
              {this.props.display}
            </div>
          );
        }
    });

export default Counter
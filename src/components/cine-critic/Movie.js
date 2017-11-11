import React from 'react';
import PropTypes from 'prop-types'

const Movie = ({rowidx=0, movie=[]}) => ({
      render: function() {          
          return (<tr>
                      {
                        this.props.movie.map((cell,idx) => {                            
                            return <td key={idx} data-row={this.props.rowidx}>{cell}</td>
                        }, this)
                      }
                  </tr>
          );
        }
    });

Movie.propTypes = {
    rowidx: PropTypes.number,
    movie: PropTypes.array,
}

export default Movie


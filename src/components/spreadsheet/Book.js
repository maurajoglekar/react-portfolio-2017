import React from 'react';

const Book = () => ({
      render: function() {
          
          return (<tr>
                      {
                        this.props.book.map((b,i) => (
                                <td key={i}>{b}</td>
                        ))
                      }
                  </tr>
          );
        }
    });

export default Book


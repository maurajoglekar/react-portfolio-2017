import React from 'react';
import createReactClass from 'create-react-class';
import BooksAPI from './BooksAPI'
import Book from './Book'
import '../App.css';

const Excel = createReactClass({
        getInitialState: function() {
            return {
              books: [],
              sortby: null,
              descending: false,
              edit: null, // [row: index, cell index]
              search: false
            };
        },
        componentDidMount() {
            this.setState({books: BooksAPI.allBooks()})
        },
        sort: function(e) {
            var column = e.target.cellIndex;
            var data = this.state.books.slice();
            var descending = this.state.sortby === column && !this.state.descending;
            data.sort(function(a, b) {
              return descending
                ? (a[column] < b[column] ? 1 : -1)
                : (a[column] > b[column] ? 1 : -1);
            });
            this.setState({
              books: data,
              sortby: column,
              descending: descending
            });
        },    
        render: function() {
            
          var headerStyle = {
            padding: 50,
            backgroundColor: "#EEE8D5",
            fontWeight: "bold",
            fontSize: "21"
          };
          var headers = BooksAPI.allHeaders();
          return (
                <div className="container">
                  <div className="page-header">
                    <h1>Books Spreadsheet</h1>      
                  </div>
                  <table className="table table-striped table-bordered">
                    <thead onClick={this.sort} style={headerStyle}>
                      <tr>
                      {
                        headers.map((title, idx) => (
                            <th key={idx}>{title = (this.state.sortby !== idx) ? title : this.state.descending ? title + ' \u2193' : title + ' \u2191'}</th> 
                            ), this)
                      }
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.books.map((book, i) => (
                                <Book key={i} book={book}></Book> 
                        ))
                      }
                    </tbody>
                  </table>
                </div>
            );
        }
    });

export default Excel
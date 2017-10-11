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
        showEditor: function(e) {
          this.setState({edit: {
            row: parseInt(e.target.dataset.row, 10),
            cell: e.target.cellIndex,
          }});
        },
        
        save: function(e) {
          e.preventDefault();
          var input = e.target.firstChild;
          var data = this.state.books.slice();
          data[this.state.edit.row][this.state.edit.cell] = input.value;
          this.setState({
            edit: null,
            books: data,
          });
        },
        render: function() {
            const { save } = this
            
            const headerStyle = {
                padding: 50,
                backgroundColor: "#EEE8D5",
                fontWeight: "bold",
                fontSize: "21"
            };
            const bodyStyle = {
                padding: 50,
                fontSize: "18"
            };
            const headers = BooksAPI.allHeaders();
            
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
                    <tbody onDoubleClick={this.showEditor} style={bodyStyle}>
                      {
                        this.state.books.map((book, i) => (
                                <Book key={i}
                                    rowidx={i}
                                    book={book} 
                                    edit={this.state.edit}
                                    onSave={save}></Book> 
                        ), this)
                      }
                    </tbody>
                  </table>
                </div>
            );
        }
    });

export default Excel
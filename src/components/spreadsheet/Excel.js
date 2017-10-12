import React from 'react';
import createReactClass from 'create-react-class';
import BooksAPI from './BooksAPI'
import Book from './Book'
import SearchRow from './SearchRow'
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
        preSearchData: null,
        
        toggleSearch: function() {
          if (this.state.search) {
            this.setState({
              books: this.preSearchData,
              search: false,
            });
            this.preSearchData = null;
          } else {
            this.preSearchData = this.state.books;
            this.setState({
              search: true,
            });
          }
        },
        
        search: function(e) {
          var allSearchBoxes = e.target.parentNode.parentNode.children;
          var searchdata = this.preSearchData;
          for (var idx=0; idx<allSearchBoxes.length; idx++) {
              var needle = allSearchBoxes[idx].children[0].value.toLowerCase();
              if (!needle) {
                continue;
              }
              var newsearchdata = searchdata.filter(function(row) {
                return row[idx].toString().toLowerCase().indexOf(needle) > -1;
              });
              searchdata = newsearchdata;
          }
          this.setState({books: searchdata});
        },
        
        download: function(format, ev) {
          var contents = format === 'json'
            ? JSON.stringify(this.state.books)
            : this.state.books.reduce(function(result, row) {
                return result
                  + row.reduce(function(rowresult, cell, idx) {
                      return rowresult 
                        + '"' 
                        + cell.replace(/"/g, '""')
                        + '"'
                        + (idx < row.length - 1 ? ',' : '');
                    }, '')
                  + "\n";
              }, '');
          var URL = window.URL || window.webkitURL;
          var blob = new Blob([contents], {type: 'text/' + format});
          ev.target.href = URL.createObjectURL(blob);
          ev.target.download = 'data.' + format;
        },
        render: function() {
            const { save, search } = this
            
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
                  <div className="page-header text-center">
                    <h1>Excel Application</h1>      
                  </div>
                  
                  <div className="page-header">
                      <div className="row">
                           <div className="col-sm-6"></div>
                           <div className="col-sm-2">
                               <a className="btn btn-primary" onClick={this.toggleSearch}>Toggle Search</a>
                           </div>
                           <div className="col-sm-2">
                               <a className="btn btn-primary" onClick={this.download.bind(this, 'json')} href="data.json">Export JSON</a>
                           </div>
                           <div className="col-sm-2">
                               <a className="btn btn-primary" onClick={this.download.bind(this, 'csv')} href="data.csv">Export CSV</a>
                           </div>
                       </div>
                  </div>
                
                <div className="container-fluid">
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
                        <SearchRow headers={headers} onSearch={search} isSearchOn={this.state.search}></SearchRow>
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
                </div>
            );
        }
    });

export default Excel
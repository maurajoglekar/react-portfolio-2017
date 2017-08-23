import React from 'react';
import TodoItems from './ToDoItems'
import './App.css';
import './ToDoList.css'
 
const ToDoList = React.createClass({
      getInitialState: function() {
        return {
          tasks: []
        };
      },
      addItem: function(e) {
          var itemArray = this.state.tasks;

          itemArray.push(
            {
              text: this._inputElement.value,
              key: Date.now()
            }
          );

          this.setState({
            tasks: itemArray
          });

          this._inputElement.value = "";
          
          e.preventDefault();
      },
      render: function() {
          return (
            <div className="todoListBody">
            <div className="todoListMain">
              <div className="header">
                <form onSubmit={this.addItem}>
                  <input ref={(a) => this._inputElement = a} placeholder="Enter task">
                  </input>
                  <button type="submit">add</button>
                </form>
              </div>
            </div>
            <TodoItems entries={this.state.tasks}/>
            </div>
          );
        }
    });

export default ToDoList
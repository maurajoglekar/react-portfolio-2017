import React from 'react';
import createReactClass from 'create-react-class';
import TodoItems from './ToDoItems'
import '../App.css';
import './ToDoList.css'
 
const ToDoList = createReactClass({
      getInitialState: function() {
        return {
          tasks: []
        };
      },
      addItem: function(e) {
          var itemArray = this.state.tasks;
          var newtask = this._inputElement.value;
          if (newtask.length > 0) {
              itemArray.push(
                {
                  text: newtask,
                  key: Date.now()
                }
              );
          }
          this.setState({
            tasks: itemArray
          });

          this._inputElement.value = "";
          
          e.preventDefault();
      },
      remove(id) {
            var tasks = this.state.tasks.filter(task => task.key !== id)
            this.setState({tasks})
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
            <TodoItems entries={this.state.tasks} onRemove={this.remove}/>
            </div>
          );
        }
    });

export default ToDoList
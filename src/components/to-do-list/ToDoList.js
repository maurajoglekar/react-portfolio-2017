import React from 'react';
import createReactClass from 'create-react-class';
import TodoItems from './ToDoItems'
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
            <div className="container-fluid todoListBody"> 
                <div className="todoListMain">
                   <form className="form-inline" onSubmit={this.addItem}>
                    <div className="input-group">
                      <input ref={(a) => this._inputElement = a} type="text" placeholder="Enter a task" required></input>
                      <div className="input-group-btn">
                        <button type="submit" className="btn btn-primary">add</button>
                      </div>
                    </div>
                  </form>
                </div>
                <TodoItems entries={this.state.tasks} onRemove={this.remove}/>
            </div>
          )
        }
    });

export default ToDoList
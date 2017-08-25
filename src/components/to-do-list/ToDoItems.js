import React from 'react';
import '../App.css';
import './ToDoList.css'

const ToDoItems = () => ({
      render: function() {
        var todoEntries = this.props.entries;

        function createTasks(item) {
          return <li key={item.key}>{item.text}</li>
        }

        var listItems = todoEntries.map(createTasks);
        
        return (
          <ul className="theList">
            {listItems}
          </ul>
        );        
      }
    });

export default ToDoItems;
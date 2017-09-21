import React from 'react';
import createReactClass from 'create-react-class';
import ToDoItem from './ToDoItem'
import '../App.css';
import './ToDoList.css'


const ToDoItems = createReactClass({
         eachItem(task) {
           return (<ToDoItem key={task.key} 
                         text={task.text}
                         id={task.key}
                         onRemove={this.props.onRemove}>
                   </ToDoItem> 
                  )
        },     
        render() {
            return (<ul className="theList">
                         {this.props.entries.map(this.eachItem)}
                     </ul>
            )
      }
    });

export default ToDoItems;
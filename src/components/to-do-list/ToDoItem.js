import React from 'react';
import createReactClass from 'create-react-class';
import '../App.css';
import './ToDoList.css'
 
const ToDoItem = createReactClass({
        remove() {
             this.props.onRemove(this.props.id)
        },
        render() {
           return ( <div>
                    <li id={this.props.id}>{this.props.text}  
                    <button id="deleteBtn" onClick={this.remove}>X</button>
                    </li>
                </div>
            )
        }
    })
        
export default ToDoItem


import React from 'react';
import '../App.css';
import './Board.css'
import Draggable from 'react-draggable'
  
var Note = React.createClass({
            getInitialState() {
                return {editing: false}
            },
            componentWillMount() {
                this.style = {
                    right: this.randomBetween(0, window.innerWidth - 150, 'px'),
                    top: this.randomBetween(180, window.innerHeight -150, 'px')
                }
            },
            componentDidUpdate() {
                if (this.state.editing) {
                    this.textarea.focus()
                    this.textarea.select()
                }
            },
            shouldComponentUpdate(nextProps, nextState) {
                return this.props.children !== nextProps.children || this.state !== nextState
            },
            randomBetween(x, y, s) {
                return (x + Math.ceil(Math.random() * (y-x))) + s
            },

            edit() {
                this.setState({editing: true})
            },
            save() {
                //<textarea ref="newText"></textarea>
                //var val = this.refs.newText.value;
                var val = this.textarea.value;
                //alert('Later we will save this value ' + val);
                this.props.onChange(val, this.props.id)
                this.setState({editing: false}) 
            },
            remove() {
                //alert("Removing Note")
                this.props.onRemove(this.props.id)
            },
            renderForm() {
                return (
                        <div className="note"                           
                            style={this.style}>
                        <textarea ref={(a) => this.textarea = a} 
                                  defaultValue={this.props.children}></textarea>
                        <button onClick={this.save}>SAVE</button>
                        </div>
                        )
            },
            renderDisplay() {
                return ( 
                    <div className="note" style={this.style}>
                        <p>{this.props.children}</p>
                        <span>
                          <button onClick={this.edit}>EDIT</button>
                          <button onClick={this.remove}>X</button>
                        </span>
                    </div>
                    )                
            },
            render() {
               return ( <Draggable>
                       {(this.state.editing) ? this.renderForm()
                                          : this.renderDisplay()}
                       </Draggable>
                )
            }
        })
        
export default Note
import React from 'react'
import createReactClass from 'create-react-class';
import Note from './Note'
import './Board.css'

var Board = createReactClass({
            propTypes: {
                count: function(props, propName) {
                    if(typeof props[propName] !== "number") {
                        return new Error("the count must be a number")
                    } 

                    if(props[propName] > 100) {
                        return new Error('Creating ' + props[propName] + ' notes is ridiculous')
                    }
                }
            },
            getInitialState() {
                return {
                    notes: []
                }
            },
            componentWillMount() {
                if (this.props.count) {
                    var url = `http://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
                    fetch(url)
                          .then(results => results.json())
                          .then(array => array[0])
                          .then(text => text.split('. '))
                          .then(array => array.forEach(
                                sentence => this.add(sentence)))
                          .catch(function(err) {
                            console.log("Didn't connect to the API", err)
                          })
                }
            },
            nextId() {
                this.uniqueId = this.uniqueId || 0
                return this.uniqueId++
            },
            add(text) {
                var notes = [
                    ...this.state.notes,
                    {
                        id: this.nextId(),
                        note: text
                    }
                ]
                this.setState({notes})
            },
            clear() {
                var notes = []
                this.setState({notes})  
            },
            update(newText, id) {
                var notes = this.state.notes.map(
                    note => (note.id !== id) ?
                       note : 
                        {
                            ...note, 
                            note: newText
                        }
                    )
                this.setState({notes})
            },
            remove(id) {
                var notes = this.state.notes.filter(note => note.id !== id)
                this.setState({notes})
            },
            eachNote(note) {
                return (<Note key={note.id}
                              id={note.id}
                              onChange={this.update}
                              onRemove={this.remove}>
                          {note.note}
                        </Note>)
            },            
            render() {
                return (
                       <div className="container-fluid">
                          <div className="row">
                               <div className="col-sm-4"></div>
                               <div className="col-sm-4">
                                   <div className="btn-group btn-group-justified btn-group-lg">
                                   <a className="btn btn-primary" onClick={() => this.add('Enter text')}>Add A Post-It</a>
                                   <a className="btn btn-danger" onClick={() => this.clear()}>Clear All</a>
                                   </div>
                               </div>
                               <div className="col-sm-4"></div>
                           </div>
                           <div className="row">
                               <div className="col-lg-12 board">
                                    {(this.state.notes.length === 0) ?
                                        <p>No Post-Its on your bulletin board.</p> :
                                        this.state.notes.map(this.eachNote)
                                    }
                               </div>
                           </div>
                       </div>
                       )
            }
        })

export default Board



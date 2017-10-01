import React from 'react'
import createReactClass from 'create-react-class';

var Board = createReactClass({
            render() {
                return (
                       <div className="container-fluid">
                          <div className="row">
                               <div className="col-sm-4"></div>
                               <div className="col-sm-4">
                                   <div className="btn-group btn-group-justified btn-group-lg">
                                   <a className="btn btn-primary">Add A Note</a>
                                       <a className="btn btn-danger">Clear All</a>
                                   </div>
                               </div>
                               <div className="col-sm-4"></div>
                           </div>
                           <div className="row">
                           <div className="col-lg-12">  fill this in
                           </div>
                           </div>
                       </div>
                        )
            }
        })

export default Board



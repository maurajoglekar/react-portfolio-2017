import React from 'react';
import { NavLink} from 'react-router-dom'
import CarsAPI from './CarsAPI'
import './Cars.css'


const Cars = () => (
  <div className='pure-menu'>
    <div className="jumbotron">
      <div className="container text-center">
        <h1>Online Automobile Store</h1>      
        <p>Best Cars in Town</p>
      </div>
    </div>
    <div className="container carDetailBody">    
          {
            CarsAPI.all().map(p => (
                <div className="col-sm-4" key={p.id}>
                  <div className="panel panel-primary">
                    <div className="panel-heading">{p.name}</div>
                    <NavLink to={`/cars/${p.id}`}><img src={p.media} className="img-responsive" alt={p.name} /></NavLink>
                    <div className="panel-footer">Sale Price: {p.price}</div>
                  </div>
                </div>
            ))
          }
    </div>
  </div>
)

export default Cars
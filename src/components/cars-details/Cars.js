import React from 'react';
import { NavLink} from 'react-router-dom'
import CarsAPI from './CarsAPI'
import './Cars.css'

const Cars = () => (
  <div className='pure-menu'>
   <div className="list-group">
    <ul>
      {
        CarsAPI.all().map(p => (
          <li key={p.id}>
            <NavLink to={`/cars/${p.id}`}>{p.name}</NavLink>
          </li>
        ))
      }
    </ul>
   </div>
  </div>
)

export default Cars
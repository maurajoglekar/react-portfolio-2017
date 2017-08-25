import React from 'react';
import { NavLink} from 'react-router-dom'
import PlayerAPI from './PlayerAPI'

const Cars = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <NavLink to={`/cars/${p.number}`}>{p.name}</NavLink>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Cars
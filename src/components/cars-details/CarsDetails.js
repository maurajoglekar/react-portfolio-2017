import React from 'react';
import { NavLink} from 'react-router-dom'
import CarsAPI from './CarsAPI'
import './Cars.css'

const CarsDetails = (props) => {
  const car = CarsAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!car) {
    return <div>Sorry, but the car was not found</div>
  }
  
  
  return (
        <div className="container carDetailBody">
            <h2>{car.name}</h2>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={car.media} alt={car.name} />
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                   <ul>
                       <li><strong>Model</strong>: {car.model}</li>
                       <li><strong>Make</strong>: {car.make}</li>
                       <li><strong>Year</strong>: {car.year}</li>
                       <li><strong>Price</strong>: {car.price}</li>
                   </ul>
                </div>
            </div>
            
            
            <NavLink className="button" to='/cars'>Back To Cars</NavLink>
        </div>
  )
}

export default CarsDetails
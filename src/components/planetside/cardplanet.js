import React, { useContext, } from "react"
import { Link } from 'react-router-dom';
import { ApiContext } from "../../store/appContext"

export default function CardPlanet(props) {
    const {store, actions } = useContext(ApiContext)
    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
                <Link to="/displayplanet" onClick={() => {actions.setCurrent({});actions.getCurrent(props.planet.url)}}><h4><strong>{props.planet.name}</strong></h4></Link>
            </div>
            <div className="card-body">
                <div className="col d-flex justify-content-center">
                    <img className="mx-2" src={`./Planets/${props.planet.name}.jpg`}  width="100%" height="250px" alt={props.planet.name} />
                </div>
                <ul className="list-group">
                    <li key="1" className="list-group-item"><h6>Diameter: {props.planet.diameter}</h6> </li>
                    <li key="2" className="list-group-item"><h6>Climate: {props.planet.climate}</h6> </li>
                    <li key="3" className="list-group-item"><h6>Gravity:{props.planet.gravity}g </h6>  </li>
                    <li key="4" className="list-group-item"><h6>Percentage of Surface Water:  {props.planet.surface_water} %</h6></li>
                    <li key="5" className="list-group-item"><h6>Population {props.planet.population} inhabitants</h6> </li>
                </ul>
            </div>
        </div>
    )
}

import React, { useContext, } from "react"
import { Link } from 'react-router-dom';
import { ApiContext } from "../../store/appContext"

export default function CardVehicles(props) {
    const { store, actions } = useContext(ApiContext)
    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
                <Link to="/displayvehicle" onClick={() => {actions.setCurrent({});actions.getCurrent(props.vehicle.url)}}><h4><strong>{props.vehicle.name}</strong></h4></Link>
            </div>
            <div className="card-body">
                <div className="col d-flex justify-content-center">
                    <img className="mx-2" src={`./Vehicles/${props.vehicle.name}.jpg`}  width="100%" height="250px" alt={props.vehicle.name} />
                </div>
                <ul className="list-group">
                    <li key="1" className="list-group-item"><h6>Model: {props.vehicle.model} </h6> </li>
                    <li key="2" className="list-group-item"><h6>Manufacturer: {props.vehicle.manufacturer}</h6> </li>
                    <li key="3" className="list-group-item"><h6>Max speed: {props.vehicle.speed}km/h</h6>  </li>
                    <li key="4" className="list-group-item"><h6>Cargo capacity: {props.vehicle.cargo} tons</h6> </li>
                    <li key="5" className="list-group-item"><h6>Cost in credits {props.vehicle.cost}</h6> </li>
                </ul>
            </div>
        </div>
    )

}
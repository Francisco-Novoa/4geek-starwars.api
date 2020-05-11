import React, { useContext, } from "react"
import { Link } from 'react-router-dom';
import { ApiContext } from "../../store/appContext"

export default function CardStarship(props) {  
    const { store, actions } = useContext(ApiContext)
    return (
        <div className="card" style={{width:"250px !important"}}>
            <div className="card-header bg-secondary">
            <Link  onClick={() => {actions.setCurrent({}); actions.getCurrent(props.starship.url)}} to="/displaystarship"><h4><strong>{props.starship.name}</strong></h4></Link>
            </div>
            <div className="card-body">
            <div className="col d-flex justify-content-center">
            <img className="mx-2" src={`./Spaceships/${props.starship.name}.jpg`} width="100%" height="250px" alt={props.starship.name} />
            </div>
           
                <ul className="list-group">
                    <li key="1" className="list-group-item"><h6>Model: </h6> {props.starship.model}</li>
                    <li key="2" className="list-group-item"><h6>Manufacturer: </h6> {props.starship.manufacturer}</li>
                    <li key="3" className="list-group-item"><h6>Hyperdrive Rating: </h6> {props.starship.hyperdrive_rating} km/h</li>
                    <li key="4" className="list-group-item"><h6>Cargo capacity: </h6> {props.starship.cargo_capacity} tons</li>
                    <li key="5" className="list-group-item"><h6>Cost in credits </h6> {props.starship.cost_in_credits}</li>
                </ul>
            </div>
        </div>
    )

}
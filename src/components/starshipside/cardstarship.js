import React from "react"
import { Link } from 'react-router-dom';

export default function CardStarship(props) {

    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
                <h4><strong>{props.name}</strong></h4>
            </div>
            <div className="card-body">
            <div className="col d-flex justify-content-center">
            <img className="mx-2" src={`./Spaceships/${props.name}.jpg`} width="250px" height="250px" alt={props.name} />
            </div>
           
                <ul className="list-group">
                    <li key="1" className="list-group-item"><h6>Model: </h6> {props.model}</li>
                    <li key="2" className="list-group-item"><h6>Manufacturer: </h6> {props.manufacturer}</li>
                    <li key="3" className="list-group-item"><h6>Hyperdrive Rating: </h6> {props.speed} km/h</li>
                    <li key="4" className="list-group-item"><h6>Cargo capacity: </h6> {props.cargo} tons</li>
                    <li key="5" className="list-group-item"><h6>Cost in credits </h6> {props.cost}</li>
                </ul>
            </div>
        </div>
    )

}
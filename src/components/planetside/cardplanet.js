import React from "react"
import { Link } from 'react-router-dom';

export default function CardPlanet(props) {

    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
                <h4><strong>{props.name}</strong></h4>
            </div>
            <div className="card-body">
            <div className="col d-flex justify-content-center">
            <img className="mx-2" src={`./Planets/${props.name}.jpg`} width="250px" height="250px" alt={props.name} />
            </div>
                <ul className="list-group">
                    <li key="1" className="list-group-item"><h6>Diameter: </h6> {props.diameter}</li>
                    <li key="2" className="list-group-item"><h6>Climate: </h6> {props.climate}</li>
                    <li key="3" className="list-group-item"><h6>Gravity: </h6> {props.gravity} g</li>
                    <li key="4" className="list-group-item"><h6>Percentage of surface water: </h6> {props.water} %</li>
                    <li key="5" className="list-group-item"><h6>Population </h6> {props.population} inhabitants</li>
                </ul>
            </div>
        </div>
    )
}

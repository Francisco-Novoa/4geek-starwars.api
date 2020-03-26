import React from "react"
import { Link } from 'react-router-dom';

export default function CardSpecies(props) {

    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
                <h4><strong>{props.name}</strong></h4>
            </div>
            <div className="card-body">
            <div className="col d-flex justify-content-center">
            <img className="mx-2" src={`./Species/${props.name}.jpg`} width="250px" height="250px" alt={props.name} />
            </div>
                <ul className="list-group">
                    <li key="2" className="list-group-item"><h6>classification: </h6> {props.classification}</li>
                    <li key="3" className="list-group-item"><h6>Average Height: </h6> {props.averageHeight} m</li>
                    <li key="4" className="list-group-item"><h6>Main language: </h6> {props.language}</li>
                    <li key="5" className="list-group-item"><h6>Average Lifespan: </h6> {props.averageLifespan}</li>
                </ul>
            </div>
        </div>
    )

}

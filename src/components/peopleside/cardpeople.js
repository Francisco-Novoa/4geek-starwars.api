import React from "react"
import { Link } from 'react-router-dom';

export default function CardPeople(props) {

    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
                <h4><strong>{props.name}</strong></h4>
            </div>
            <div className="card-body">
            <div className="col-12 d-flex justify-content-center">
            <img src={`./People/${props.name}.jpg`} width="250px" height="250px" alt={props.name} />
            </div>
                <ul className="list-group">
                    <li key="1" className="list-group-item">Height:  {props.height}</li>
                    <li key="2" className="list-group-item">Weight:  {props.weight}</li>
                    <li key="3" className="list-group-item">Eye Color:  {props.eyeColor}</li>
                    <li key="4" className="list-group-item">Hair Color: {props.hairColor}</li>
                    <li key="5" className="list-group-item">Birth Year  {props.birthYear}</li>
                </ul>
            </div>
        </div>
    )
}

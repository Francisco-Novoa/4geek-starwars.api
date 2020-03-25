import React from "react"

export default function CardVehicles(props) {

    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header">
                <h4>{props.name}</h4>
            </div>
            <div className="card-body">
                <ul class="list-group">
                    <li key="1" class="list-group-item"><h6>Model: </h6> {props.model}</li>
                    <li key="2" class="list-group-item"><h6>Manufacturer: </h6> {props.manufacturer}</li>
                    <li key="3" class="list-group-item"><h6>Max speed: </h6> {props.speed} km/h</li>
                    <li key="4" class="list-group-item"><h6>Cargo capacity: </h6> {props.cargo} tons</li>
                    <li key="5" class="list-group-item"><h6>Cost in credits </h6> {props.cost}</li>
                </ul>
            </div>
        </div>
    )

}
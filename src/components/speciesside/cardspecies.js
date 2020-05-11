import React, { useContext, } from "react"
import { Link } from 'react-router-dom';
import { ApiContext } from "../../store/appContext"


export default function CardSpecies(props) {
const { actions } = useContext(ApiContext)
    return (
        <div className="card">
            <div className="card-header bg-secondary">
            <Link to="/displayspecie" onClick={() => {actions.setCurrent({});actions.getCurrent(props.species.url)}}><h4><strong>{props.species.name}</strong></h4></Link>
            </div>
            <div className="card-body">
            <div className="col d-flex justify-content-center">
            <img className="mx-2" src={`./Species/${props.species.name}.jpg`}  width="100%" height="250px" alt={props.species.name} />
            </div>
                <ul className="list-group">
                    <li key="2" className="list-group-item"><h6>classification: </h6> {props.species.classification}</li>
                    <li key="3" className="list-group-item"><h6>Average Height: </h6> {props.species.average_height} m</li>
                    <li key="4" className="list-group-item"><h6>Main language: </h6> {props.species.language}</li>
                    <li key="5" className="list-group-item"><h6>Average Lifespan: </h6> {props.species.average_lifespan}</li>
                </ul>
            </div>
        </div>
    )

}

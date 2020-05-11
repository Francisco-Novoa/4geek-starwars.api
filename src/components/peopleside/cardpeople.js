import React, { useContext, } from "react"
import { Link } from 'react-router-dom';
import { ApiContext } from "../../store/appContext"


export default function CardPeople(props) {
    const { actions } = useContext(ApiContext)
    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
                <Link to="/displaypeople" onClick={() => {actions.setCurrent({});actions.getCurrent(props.person.url)}}><h4><strong>{props.person.name}</strong></h4></Link>
            </div>
            <div className="card-body" style={{width:"100%"}}>
                <div className="col-12 d-flex justify-content-center" >
                    <img src={`./People/${props.person.name}.jpg`}  width="100%" height="250px" alt={props.person.name} />
                </div>
                <ul className="list-group">
                    <li key="1" className="list-group-item">Height:  {props.person.height}</li>
                    <li key="2" className="list-group-item">Weight:  {props.person.mass}</li>
                    <li key="3" className="list-group-item">Eye Color:  {props.person.eye_color}</li>
                    <li key="4" className="list-group-item">Hair Color: {props.person.hair_color}</li>
                    <li key="5" className="list-group-item">Birth Year  {props.person.birth_year}</li>
                </ul>
            </div>
        </div>
    )
}

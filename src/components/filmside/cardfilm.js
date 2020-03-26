import React, { useContext, } from "react"
import { Link } from 'react-router-dom';
import { ApiContext } from "../../store/appContext"

export default function CardFilm(props) {
    const { store, actions } = useContext(ApiContext)
    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
            <Link to="/filmdisplay" onClick={()=>actions.getCurrent(props.api)}><strong><h4><strong>{props.title}</strong></h4></strong></Link>
                
            </div>
            <div className="card-body bg-light ">
                <div className="col-12 d-flex justify-content-center">
                    <img className="mb-3" src={`/Films/episode${props.number}.jpg`} width="150px" height="250px" alt={props.title} />
                </div>
                <div className="col-12">
                    <h3 className="card-title d-flex justify-content-center"> Episode {props.number}</h3>
                    <p className="card-text">{props.crawl}</p>
                </div>

            </div>
        </div>
    )

}
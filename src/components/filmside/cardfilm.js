import React, { useContext, } from "react"
import { Link } from 'react-router-dom';
import { ApiContext } from "../../store/appContext"

export default function CardFilm(props) {
    const {actions } = useContext(ApiContext)
    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header bg-secondary">
            <Link to="/displayfilm" onClick={()=>{actions.setCurrent({});actions.getCurrent(props.film.url)}}><h4><strong>{props.film.title}</strong></h4></Link>
                
            </div>
            <div className="card-body bg-light ">
                <div className="col-12 d-flex justify-content-center">
                    <img className="mb-3" src={`/Films/episode${props.film.episode_id}.jpg`} width="150px" height="250px" alt={props.film.title} />
                </div>
                <div className="col-12">
                    <h3 className="card-title d-flex justify-content-center"> Episode {props.film.episode_id}</h3>
                    <p className="card-text">{props.film.opening_crawl}</p>
                </div>

            </div>
        </div>
    )

}
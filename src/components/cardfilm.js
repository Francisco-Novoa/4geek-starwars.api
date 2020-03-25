import React from "react"

export default function CardFilm(props) {

    return (
        <div className="card m-3 mx-1 ">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <h5 className="card-title">Episode {props.number}</h5>
                <p className="card-text">{props.crawl}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )

}
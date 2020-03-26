import React from "react"
import { Link } from 'react-router-dom';

export default function Sidebar() {

    return (

        <ul className="nav flex-column mt-3 pt-3" id="sidebar">
            <li className="nav-item">
                <button className="btn btn-secondary btn-block" >
                    <img className="mx-2" src="/home-png-vector-2-transparent.png" width="50px" height="50px" alt="DeathStar" />
                    <Link to="/starships"><strong>Starships</strong></Link>
                </button>

            </li>
            <hr />
            <li className="nav-item">
                <button className="btn btn-secondary btn-block" >
                    <img className="mx-2" src="/bb-8.jpg" width="50px" height="50px" alt="BB-8" />
                    <Link to="/people"><strong>People</strong> </Link>
                </button>

            </li>
            <hr />
            <li className="nav-item">
                <button className="btn btn-secondary btn-block" >
                    <img className="mx-2" src="/at-at.svg" width="50px" height="50px" alt="at-at" />
                    <Link to="/vehicles"><strong>Vehicles</strong></Link>
                </button>
            </li>
            <hr />
            <li className="nav-item">
                <button className="btn btn-secondary btn-block" >
                    <img className="mx-2" src="/yoda.svg" width="65px" height="65px" alt="yoda" />
                    <Link to="/species"><strong>Species</strong> </Link>
                </button>
            </li>
            <hr />
            <li className="nav-item">
                <button className="btn btn-secondary btn-block" >
                    <img className="mx-2" src="/saturn.png" width="50px" height="50px" alt="planet" />
                    <Link to="/planets"><strong>Planets</strong> </Link>
                </button>
            </li>
            <hr />
            <li className="nav-item">
                <button className="btn btn-secondary btn-block" >
                    <img className="mx-2" src="/vader.png" width="50px" height="50px" alt="vader" />
                    <Link to="/films"><strong>Films</strong> </Link>
                </button>
            </li>
            <hr />

        </ul>
    )


} 
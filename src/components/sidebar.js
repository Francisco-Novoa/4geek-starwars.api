import React from "react"
export default function Sidebar() {
    return (

        <ul className="nav flex-column bg-secondary px-5" id="sidebar">
            <li className="nav-item">
                <img className="ml-2" src="../../public/home-png-vector-2-transparent.png" width="50px" height="50px" alt="DeathStar"/>
                <a href=""> Starships </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">People</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Vehicles</a>
            </li>
    
            <li className="nav-item">
                <a className="nav-link" href="#">Species</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Planets</a>
            </li>

        </ul>
    )


} 
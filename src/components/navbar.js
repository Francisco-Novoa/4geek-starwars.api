import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" width="75" height="50" alt="STARWARS" />
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Francisco Novoa</a>
                </li>
                <li className="nav-item">
                    <img style={{borderRadius: "50px"}} src="data:image/png;base64,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" width="50" height="50" alt="4Geek" />
                </li>
            </ul>


        </nav>
    )

}
import React, { useContext } from "react"
import { ApiContext } from "../../store/appContext"


export default function DisplayFilms() {
    const { store,} = useContext(ApiContext)
    return (
        <>
            {!!store.current ?
                <div className="col-10">
                    <div className="container bg-light">
                        <div className="row">
                            <div className="col-7">     
                                <div className="list-group">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item bg-secondary"> <h3> {store.current.name}</h3> </li>
                                        <li className="list-group-item"> <h5>Rotation Period: {store.current.rotation_period}</h5>  </li>
                                        <li className="list-group-item"> <h5>Orbital Period: {store.current.orbital_period}</h5> </li>
                                        <li className="list-group-item"> <h5>Climate: {store.current.climate}</h5>  </li>
                                        <li className="list-group-item"> <h5>Gravity: {store.current.gravity}</h5>   </li>
                                        <li className="list-group-item"> <h5>Terrain: {store.current.terrain}</h5>  </li>
                                        <li className="list-group-item"> <h5>Percentage of Surface Water:{store.current.surface_water} </h5>  </li>
                                        <li className="list-group-item"> <h5>Population: {store.current.population} Inhabitants</h5>    </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <img className="mb-3" src={`/Planets/${store.current.name}.jpg`} width="650px" height="650px" alt={store.current.name} />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="col-10 d-flex justify-content-center" id="loader">
                    <img src="./loading.gif" width="250px" height="250px" alt="loading" />
                </div>

            }

        </>
    )
}
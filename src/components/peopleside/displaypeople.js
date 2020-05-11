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
                                        <li className="list-group-item"> <h5>Heigh: {store.current.height}</h5>  </li>
                                        <li className="list-group-item"> <h5>Weight: {store.current.mass}</h5> </li>
                                        <li className="list-group-item"> <h5>Hair Color: {store.current.hair_color}</h5>  </li>
                                        <li className="list-group-item"> <h5>Skin Color: {store.current.skin_color}</h5>   </li>
                                        <li className="list-group-item"> <h5>Birth Year: {store.current.birth_year} </h5>   </li>
                                        <li className="list-group-item"> <h5>Gender: {store.current.gender}</h5>   </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <img className="mb-3" src={`/People/${store.current.name}.jpg`} width="450px" height="650px" alt={store.current.name} />
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
import React, { useContext } from "react"
import { ApiContext } from "../../store/appContext"


export default function DisplaySpecies() {
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
                                        <li className="list-group-item"> <h5>Classification: {store.current.classification}</h5>  </li>
                                        <li className="list-group-item"> <h5>Designation: {store.current.designation}</h5> </li>
                                        <li className="list-group-item"> <h5>Skin Colors: {store.current.skin_colors}</h5>  </li>
                                        <li className="list-group-item"> <h5>Hair Colors: {store.current.hair_colors}</h5>   </li>
                                        <li className="list-group-item"> <h5>Average Lifespan: {store.current.average_lifespan}</h5>  </li>
                                        <li className="list-group-item"> <h5>Language:{store.current.language} </h5>  </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <img className="mb-3" src={`/Species/${store.current.name}.jpg`} width="650px" height="650px" alt={store.current.name} />
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
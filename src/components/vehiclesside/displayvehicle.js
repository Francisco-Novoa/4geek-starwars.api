import React, { useContext } from "react"
import { ApiContext } from "../../store/appContext"


export default function DisplayVehicle() {
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
                                        <li className="list-group-item"> <h5>Model: {store.current.model}</h5>  </li>
                                        <li className="list-group-item"> <h5>Manufacturer: {store.current.manufacturer}</h5> </li>
                                        <li className="list-group-item"> <h5>Cost: {store.current.cost_in_credits} credits</h5>  </li>
                                        <li className="list-group-item"> <h5>Length: {store.current.length}</h5>   </li>
                                        <li className="list-group-item"> <h5>Max Atmospheric Speed: {store.current.max_atmosphering_speed}</h5>  </li>
                                        <li className="list-group-item"> <h5>Passengers: {store.current.passengers} </h5>  </li>
                                        <li className="list-group-item"> <h5>Crew: {store.current.crew} </h5>  </li>
                                        <li className="list-group-item"> <h5>Cargo:{store.current.cargo_capacity} </h5>  </li>
                                        <li className="list-group-item"> <h5>Time Before Refueling: {store.current.consumables} </h5>  </li>
                                        <li className="list-group-item"> <h5>Vehicle Class: {store.current.vehicle_class} </h5>  </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                            <img className="mx-2 mt-5" src={`./Vehicles/${store.current.name}.jpg`} width="250px" height="250px" alt={store.current.name} />
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
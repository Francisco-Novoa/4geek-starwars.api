import React, { useContext } from "react"
import CardVehicles from "./cardvehicles"
import { ApiContext } from "../../store/appContext"

export default function ContentVehicles() {

    const { store, actions } = useContext(ApiContext)

    return (
        <div className="col-10">
            <div className="container-fluid">
                <div className="row">
                    {!!store.vehicles ?
                        store.vehicles.results.map((vehicle, i) => {
                            return (
                                <div className="col-4 p-0 m-0" key={i}>
                                    <CardVehicles name={vehicle.name}
                                        model={vehicle.model}
                                        manufacturer={vehicle.manufacturer}
                                        speed={vehicle.max_atmosphering_speed}
                                        cargo={vehicle.cargo_capacity}
                                        cost={vehicle.cost_in_credits}
                                    />
                                </div>
                            )
                        })
                        : <div className="col-12 d-flex justify-content-center align-item-center" id="loader">
                        <img src="./loading.gif" width="250px" height="250px" alt="loading" />
                    </div>
                    }
                </div>
            </div>
        </div>

    )
}
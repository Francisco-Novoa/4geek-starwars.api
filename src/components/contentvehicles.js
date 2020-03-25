import React, { useContext } from "react"
import CardVehicles from "./cardvehicles"
import {ApiContext} from "../store/appContext"

export default function ContentVehicles() {
 
   const {store , actions } = useContext(ApiContext)
  
    return (
            <div className="container">
                <div className="row">
                {!!store.vehicles?
                store.vehicles.results.map((vehicle,i)=>{
                    return(
                    <div className="col-4 p-0 m-0">
                    <CardVehicles  name={vehicle.name}
                           model={vehicle.model}
                           manufacturer={vehicle.manufacturer}
                           speed={vehicle.max_atmosphering_speed}
                           cargo={vehicle.cargo_capacity}
                           cost={vehicle.cost_in_credits}
                           key={i} />
                    </div>
                )})
                :"loading"
            }
                </div>
            </div>
    )
}
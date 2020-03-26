import React, { useContext } from "react"
import CardPlanet from "./cardplanet"
import { ApiContext } from "../../store/appContext"

export default function ContentPlanet() {
    const { store, actions } = useContext(ApiContext)
    return (
        <div className="col-10">
            <div className="container-fluid">
                <div className="row">
                    {!!store.planets ?
                        store.planets.results.map((planet, i) => {
                            return (
                                <div className="col-4 p-0 m-0" key={i} >
                                    <CardPlanet name={planet.name}
                                        diameter={planet.diameter}
                                        climate={planet.climate}
                                        gravity={planet.gravity}
                                        water={planet.surface_water}
                                        population={planet.population}
                                    />
                                </div>
                            )
                        })
                        :<div className="col-12 d-flex justify-content-center align-item-center" id="loader">
                        <img src="./loading.gif" width="250px" height="250px" alt="loading" />
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
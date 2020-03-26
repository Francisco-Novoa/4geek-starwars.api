import React, { useContext } from "react"
import CardStarship from "./cardstarship"
import { ApiContext } from "../../store/appContext"

export default function ContentStarship() {

    const { store, actions } = useContext(ApiContext)

    return (
        <div className="col-10">
            <div className="container-fluid">
                <div className="row">
                    {!!store.starship ?
                        store.starship.results.map((starship, i) => {
                            return (
                                <div className="col-4 p-0 m-0" key={i}>
                                    <CardStarship name={starship.name}
                                        model={starship.model}
                                        manufacturer={starship.manufacturer}
                                        speed={starship.hyperdrive_rating}
                                        cargo={starship.cargo_capacity}
                                        cost={starship.cost_in_credits}
                                    />
                                </div>
                            )
                        })
                        : <div className="col-12 d-flex justify-content-center align-item-center" id="loader">
                            <img className="" src="./loading.gif" width="250px" height="250px" alt="loading" />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
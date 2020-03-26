import React, { useContext } from "react"
import CardSpecies from "./cardspecies"
import { ApiContext } from "../../store/appContext"

export default function ContentSpecies() {

    const { store} = useContext(ApiContext)

    return (
        <div className="col-10">
            <div className="container-fluid">
                <div className="row">
                    {!!store.species ?
                        store.species.results.map((species, i) => {
                            return (
                                <div className="col-4 p-0 m-0" key={i}>
                                    <CardSpecies name={species.name}
                                        classification={species.classification}
                                        averageHeight={species.average_height}
                                        language={species.language}
                                        averageLifespan={species.average_lifespan}
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
import React, { useContext } from "react"
import CardPeople from "./cardpeople"
import { ApiContext } from "../../store/appContext"

export default function ContentStarship() {

    const { store, actions } = useContext(ApiContext)

    return (
        <div className="col-10">
            <div className="container-fluid">
                <div className="row">
                    {!!store.people ?
                        store.people.results.map((people, i) => {
                            return (
                                <div className="col-4 p-0 m-0" key={i}>
                                    <CardPeople name={people.name}
                                        height={people.height}
                                        weight={people.mass}
                                        eyeColor={people.eye_color}
                                        hairColor={people.hair_color}
                                        birthYear={people.birth_year}
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
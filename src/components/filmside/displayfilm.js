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
                                        <li className="list-group-item bg-secondary"> <h4>Episode {store.current.episode_id}</h4> </li>
                                        <li className="list-group-item">  <h3>{store.current.title}</h3> </li>
                                        <li className="list-group-item"> Director: {store.current.director} </li>
                                        <li className="list-group-item">Producer: {store.current.producer}</li>
                                        <li className="list-group-item">Release Date {store.current.release_date}</li>
                                        <li className="list-group-item"> <h3>Opening Crawl:</h3>  {store.current.opening_crawl} </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <img className="mb-3" src={`/Films/episode${store.current.episode_id}.jpg`} width="450px" height="650px" alt={store.current.title} />
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
import React, { useContext, useEffect } from "react"
import { ApiContext } from "../../store/appContext"

export default function DisplayFilms(props) {
    const { store, actions } = useContext(ApiContext)
    
    return (
        <>
            {!!store.current ?
                <div className="col-10">
                    <div className="container bg-light">
                        <div className="row">
                            <div className="col-7">     
                                <div class="list-group">
                                    <ul class="list-group list-group-flush">
                                        <li className="list-group-item"> <h4>Episode {store.current.episode_id}</h4> </li>
                                        <li className="list-group-item">  <h3>{store.current.title}</h3> </li>
                                        <li class="list-group-item"> Director: {store.current.director} </li>
                                        <li class="list-group-item">Producer: {store.current.producer}</li>
                                        <li class="list-group-item">Release Date {store.current.release_date}</li>
                                        <li class="list-group-item"> <h3>Opening Crawl:</h3>  {store.current.opening_crawl} </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4">
                                <img className="mb-3" src={`/Films/episode${store.current.episode_id}.jpg`} width="450px" height="650px" alt={store.current.title} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">

                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="col-12 d-flex justify-content-center align-item-center" id="loader">
                    <img src="./loading.gif" width="250px" height="250px" alt="loading" />
                </div>

            }

        </>
    )
}
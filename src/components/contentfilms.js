import React, { useContext } from "react"
import CardFilm from "./cardfilm"
import {ApiContext} from "../store/appContext"

export default function ContentFilms() {
 
   const {store , actions } = useContext(ApiContext)
  
    return (
            <div className="container">
                <div className="row">
                {!!store.films?
                store.films.results.map((film,i)=>{
                    return(
                    <div className="col-4 p-0 m-0">
                    <CardFilm  title={film.title}
                           crawl={film.opening_crawl}
                           number={film.episode_id}
                           key={film.episode_id} />
                    </div>
                )})
                :"loading"
            }
                </div>
            </div>
    )
}
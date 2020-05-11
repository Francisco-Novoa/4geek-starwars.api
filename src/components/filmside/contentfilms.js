import React, { useContext } from "react"
import CardFilm from "./cardfilm"
import { ApiContext } from "../../store/appContext"

export default function ContentFilms() {
  const { store} = useContext(ApiContext)
  return (
    <div className="col-10">
      <div className="container-fluid">
        <div className="row">
          {!!store.films ?
            store.films.results.map((film, i) => {
              return (
                <div className="col-4 p-0 m-0" key={film.episode_id}>
                  <CardFilm film={film}/>
                </div>
              )
            })
            : <div className="col-12 d-flex justify-content-center align-item-center" id="loader">
            <img src="./loading.gif" width="250px" height="250px" alt="loading" />
        </div>
          }
        </div>
        <div className="row">
                <div className="col-12" style={{height:"200px"}}>
                    
                </div>
            </div>
      </div>
    </div>
  )
}


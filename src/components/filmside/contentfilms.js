import React, { useContext } from "react"
import CardFilm from "./cardfilm"
import { ApiContext } from "../../store/appContext"

export default function ContentFilms() {
  const { store, actions } = useContext(ApiContext)
  return (
    <div className="col-10">
      <div className="container-fluid">
        <div className="row">
          {!!store.films ?
            store.films.results.map((film, i) => {
              return (
                <div className="col-4 p-0 m-0" key={film.episode_id}>
                  <CardFilm title={film.title}
                    crawl={film.opening_crawl}
                    number={film.episode_id}
                    url={`Films/episode${film.episode_id}.jpg`}
                    api={film.url}
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


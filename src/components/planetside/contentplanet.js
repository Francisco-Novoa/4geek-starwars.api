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
                                <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0 card-deck" key={i} >
                                    <CardPlanet planet={planet}/>
                                </div>
                            )
                        })
                        :<div className="col-12 d-flex justify-content-center align-item-center" id="loader">
                        <img src="./loading.gif" width="250px" height="250px" alt="loading" />
                    </div>
                    }
                </div>
                <div className="col-12 d-flex justify-content-between"> 
                        { 
                        !!store.planets&&
                        store.planets.previous!==null?
                         <button 
                         onClick={()=>{actions.getPlanet(store.planets.previous)}}
                         className="btn btn-dark" >Previous</button>
                         :
                         <button 
                         className="btn btn-dark disabled" >Previous</button>
                        }
                        { 
                        !!store.planets&&
                        store.planets.next!==null?
                         <button 
                         onClick={()=>{actions.getPlanet(store.planets.next)}}
                         className="btn btn-dark" >Next</button>
                         :
                         <button 
                         className="btn btn-dark disabled" >Next</button>
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
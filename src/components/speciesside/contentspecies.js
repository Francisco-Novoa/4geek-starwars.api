import React, { useContext } from "react"
import CardSpecies from "./cardspecies"
import { ApiContext } from "../../store/appContext"

export default function ContentSpecies() {

    const { store, actions } = useContext(ApiContext)

    return (
        <div className="col-10">
            <div className="container-fluid">
                <div className="row">
                    {!!store.species ?
                        store.species.results.map((specie, i) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0 card-deck" key={i}>
                                    <CardSpecies species={specie} />
                                </div>
                            )
                        })
                        : <div className="col-12 d-flex justify-content-center align-item-center" id="loader">
                            <img src="./loading.gif" width="250px" height="250px" alt="loading" />
                        </div>
                    }
                    <div className="col-12 d-flex justify-content-between"> 
                        { 
                        !!store.species&&
                        store.species.previous!==null?
                         <button 
                         onClick={()=>{actions.getSpecies(store.species.previous)}}
                         className="btn btn-dark" >Previous</button>
                         :
                         <button 
                         className="btn btn-dark disabled" >Previous</button>
                        }
                        { 
                        !!store.species&&
                        store.species.next!==null?
                         <button 
                         onClick={()=>{actions.getSpecies(store.species.next)}}
                         className="btn btn-dark" >Next</button>
                         :
                         <button 
                         className="btn btn-dark disabled" >Next</button>
                        }

                    </div>
                </div>
                <div className="row">
                <div className="col-12" style={{height:"200px"}}>
                    
                </div>
            </div>
            </div>
            
        </div>
    )
}
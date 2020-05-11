import React, { useContext } from "react"
import CardStarship from "./cardstarship"
import { ApiContext } from "../../store/appContext"

export default function ContentStarship() {

    const { store,actions } = useContext(ApiContext)
    const handleNext=()=>{
        actions.getStarship(store.starship.next)
    }
    return (
        <div className="col-10">
            <div className="container-fluid">
                <div className="row">
                    {!!store.starship ?
                        store.starship.results.map((starship, i) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0 card-deck" key={i}>
                                    <CardStarship starship={starship} />
                                </div>
                            )
                        })
                    
                        : <div className="col-12 d-flex justify-content-center align-item-center" id="loader">
                            <img className="" src="./loading.gif" width="250px" height="250px" alt="loading" />
                        </div>
                    }
                    <div className="col-12 d-flex justify-content-between"> 
                        { 
                        !!store.starship&&
                        store.starship.previous!==null?
                         <button 
                         onClick={()=>{actions.getStarship(store.starship.previous)}}
                         className="btn btn-dark" >Previous</button>
                         :
                         <button 
                         className="btn btn-dark disabled" >Previous</button>
                        }
                        { 
                        !!store.starship&&
                        store.starship.next!==null?
                         <button 
                         onClick={()=>{actions.getStarship(store.starship.next)}}
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
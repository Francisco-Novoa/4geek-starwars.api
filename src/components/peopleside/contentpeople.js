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
                        store.people.results.map((person, i) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-6 p-0 m-0 card-deck" key={i}>
                                    <CardPeople person={person}/>
                                </div>
                            )
                        })
                        : <div className="col-12 d-flex justify-content-center align-item-center" id="loader">
                            <img src="./loading.gif" width="250px" height="250px" alt="loading" />
                        </div>
                    }
                </div>
                <div className="col-12 d-flex justify-content-between"> 
                        { 
                        !!store.people&&
                        store.people.previous!==null?
                         <button 
                         onClick={()=>{actions.getPeople(store.people.previous)}}
                         className="btn btn-dark" >Previous</button>
                         :
                         <button 
                         className="btn btn-dark disabled" >Previous</button>
                        }
                        { 
                        !!store.people&&
                        store.people.next!==null?
                         <button 
                         onClick={()=>{actions.getPeople(store.people.next)}}
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
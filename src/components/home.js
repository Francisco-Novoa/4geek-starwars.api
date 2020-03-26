import React from "react"

export default function Home() {

    return (
        <>
            <div className="col-10">
                <div className="container">
                    <div className="row">
                        <div className="col-8 pt-5" id="home_body">
                            <h1>Saludos Humanos</h1>
                            <p>Hice esta pagina como parte de los proyectos del codecamp de 4 geek academy. fue realizanda utilizando las Reactjs, y sus addons
                            react-router-dom y react-context-api, junto con bootstrap adicionalmente los datos crudos que se muestran en las tabs del lado derecho son
                            extraidos desde starwars api.
                     </p>

                            <p>
                                Aca vendran una serie de links de los recursos que utilize.
                    </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"> <a href="https://swapi.co/">    
                        <img style={{ borderRadius: "150px" }} className="mx-2 mt-4" src="/SWAPI.png" width="150px" height="150px" alt="SWAPI" /> </a></div>
                        <div className="col-2"> 
                         <a href="https://getbootstrap.com/"> <img style={{ borderRadius: "150px"}} className="mx-2 mt-4" src="/bootstrap.png" width="150px" height="150px" alt="Bootstrap" /></a> </div>
                        <div className="col-2"> 
                         <a href="https://es.reactjs.org/docs/getting-started.html"> <img style={{ borderRadius: "150px" }} className="mx-2 mt-4" src="/react.png" width="150px" height="150px" alt="Bootstrap" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

} 
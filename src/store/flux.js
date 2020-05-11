const getState = ({getStore,getActions,setStore}) =>{
    return{
        store:{
            films:null,
            vehicles:null,
            starship:null,
            people:null,
            planets:null,
            species:null,
            current:null,
            afilms: [],
            aspecies: [],
            avehicles: [],
            astarships: [],
            apeople: [],
            acharacters: [],
            aplanets: [],
            aresidents: [],
            ahomeworld: ""
        },
        actions:{
            getFilms:url=>{
                fetch(url,{
                    method: "GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(resp=>resp.json())
                .then(data=>{
                    setStore({
                        films:data
                    });
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            getVehicles:url=>{
                fetch(url,{
                    method: "GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(resp=>resp.json())
                .then(data=>{
                    setStore({
                        vehicles:data
                    });
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            getStarship: async url => {
                console.log(url)
                try {
                    const all = await fetch(url, {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    })
                    console.log(all)
                    const data = await all.json()
                    console.log(all)
                    setStore({
                        starship:data
                    })
                }
                catch (error) {
                    console.log(error)
                }
            },
            getPeople:url=>{
                fetch(url,{
                    method: "GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(resp=>resp.json())
                .then(data=>{
                    setStore({
                        people:data
                    });
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            getPlanet:url=>{
                fetch(url,{
                    method: "GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(resp=>resp.json())
                .then(data=>{
                    setStore({
                        planets:data
                    });
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            getSpecies:url=>{
                fetch(url,{
                    method: "GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(resp=>resp.json())
                .then(data=>{
                    setStore({
                        species:data
                    });
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            getCurrent:url=>{
                fetch(url,{
                    method: "GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(resp=>resp.json())
                .then(data=>{
                    setStore({
                        current:data
                    });
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            setCurrent:(data)=>{
                setStore({
                    current:data
                });
            },
        }
    }
}

export default getState
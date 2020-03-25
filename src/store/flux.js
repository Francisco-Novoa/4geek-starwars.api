const getState = ({getStore,getActions,setStore}) =>{
    return{
        store:{
            films:null,
            vehicles:null
        },
        actions:{
            getFilms:url=>{
                fetch(url,{
                    method: "GET",
                    headers:{
                        "Content-Type":"aplication/json"
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
                        "Content-Type":"aplication/json"
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
        }
    }
}

export default getState
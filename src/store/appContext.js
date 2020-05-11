import React, { Component } from 'react';
import getState from "./flux"


export const ApiContext = React.createContext();

const injectContext = PassedComponent => {
    class StoreWrapper extends Component {
        constructor(props){
            super(props);
            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updateStore => this.setState({
                    store: Object.assign(this.state.store, updateStore),
                    actions: {...this.state.actions}
                })
            })
        }

        componentDidMount(){
            this.state.actions.getFilms('https://swapi.dev/api/films/');
            this.state.actions.getVehicles('https://swapi.dev/api/vehicles/');
            this.state.actions.getStarship('https://swapi.dev/api/starships/');
            this.state.actions.getPeople('https://swapi.dev/api/people/');
            this.state.actions.getPlanet('https://swapi.dev/api/planets/');
            this.state.actions.getSpecies('https://swapi.dev/api/species/');
        }

        render(){
            return (
                <ApiContext.Provider value={this.state}>
                    <PassedComponent {...this.props} />
                </ApiContext.Provider>
            )
        }
    }
    return StoreWrapper;
}

export default injectContext;
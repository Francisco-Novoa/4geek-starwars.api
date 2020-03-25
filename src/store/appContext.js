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
            this.state.actions.getFilms('https://swapi.co/api/films/');
            this.state.actions.getVehicles('https://swapi.co/api/vehicles/');
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
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import injectContext from './store/appContext';

//component imports
import ContentFilms from './components/filmside/contentfilms';
import ContentVehicles from './components/vehiclesside/contentvehicles';
import ContentStarship from './components/starshipside/contentstarship';
import ContentPeople from './components/peopleside/contentpeople';
import ContentPlanet from './components/planetside/contentplanet';
import ContentSpecies from './components/speciesside/contentspecies';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './components/home';
import DisplayFilm  from "./components/filmside/displayfilm"
import DisplayPeople  from "./components/peopleside/displaypeople"
import DisplayPlanet  from "./components/planetside/displayplanet"
import DisplayStarships  from "./components/starshipside/displaystarship"
import DisplayVehicle   from "./components/vehiclesside/displayvehicle"
import DisplaySpecies from "./components/speciesside/displayspecies"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-flex justify-content-start"> <Sidebar/> </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={ContentPeople} />
            <Route exact path="/vehicles" component={ContentVehicles} />
            <Route exact path="/starships" component={ContentStarship} />
            <Route exact path="/planets" component={ContentPlanet} />
            <Route exact path="/films" component={ContentFilms} />
            <Route exact path="/species" component={ContentSpecies} />
            <Route exact path="/displayfilm" component={DisplayFilm} />
            <Route exact path="/displaypeople" component={DisplayPeople} />
            <Route exact path="/displayplanet" component={DisplayPlanet} />
            <Route exact path="/displaystarship" component={DisplayStarships} />
            <Route exact path="/displayvehicle" component={DisplayVehicle} />
            <Route exact path="/displayspecie" component={DisplaySpecies} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default injectContext(App);


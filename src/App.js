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
            <Route exact path="/filmdisplay" component={DisplayFilm} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default injectContext(App);


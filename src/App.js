import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import ContentFilms from './components/contentfilms';
import ContentVehicles from './components/contentvehicles';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import injectContext from './store/appContext';

function App() {
  return (
<BrowserRouter>

      <Navbar />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-2 d-flex justify-content-start"><Sidebar /></div>
          <div className="col-10"><ContentVehicles /></div>
        </div>
      </div>

</BrowserRouter>
  )
}

export default injectContext(App);


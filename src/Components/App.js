import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './Home';
import BeersList from './BeersList';
import SingleBeer from './SingleBeer';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path="/beers" component={BeersList} />
      <Route path="/beers/:beerId" component={SingleBeer} />
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantFinder from './components/RestaurantFinder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Elliot's Restaurant Finder</h2>
        </div>
        <p className="App-intro">
          Enter your postcode to find local restaurants
        </p>

        <RestaurantFinder />
      </div>
    );
  }
}

export default App;

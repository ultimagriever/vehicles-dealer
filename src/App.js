import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <span className="navbar-brand">Vehicles Dealer</span>
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="./" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="./vehicles" className="nav-link">Vehicles</Link></li>
            <li className="nav-item"><Link to="./stores" className="nav-link">Stores</Link></li>
            <li className="nav-item"><Link to="./direct-sales" className="nav-link">Direct Sales</Link></li>
          </ul>
        </nav>
        <Routes />
      </div>
    );
  }
}

export default App;

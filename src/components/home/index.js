import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeIndex extends Component {
  render() {
    return (
      <div className="home">
        <div className="carousel">Home Carrossel</div>
        <div className="buttons">
          <div className="d-flex flex-row justify-content-center">
            <div><Link to="./" className="nav-link">Home</Link></div>
            <div><Link to="./vehicles" className="nav-link">Vehicles</Link></div>
            <div><Link to="./stores" className="nav-link">Stores</Link></div>
            <div><Link to="./direct-sales" className="nav-link">Direct Sales</Link></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeIndex;

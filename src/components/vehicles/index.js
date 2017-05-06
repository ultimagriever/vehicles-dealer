import React, { Component } from 'react';

class VehiclesIndex extends Component {

  state = {
    vehicles: [
      'Uno',
      'Mobi',
      'Punto',
      'Argo'
    ]
  }

  render() {
    return (
      <div className="vehicles">
        <h2>Vehicles</h2>

        {this.state.vehicles.map((store, key) => (
          <div className="row no-gutters" key={store}>
            <div className="col-5 img"><img src="https://placeholdit.imgix.net/~text?txtsize=50&txt=300x200&w=300&h=200" /></div>
            <div className="col-7 desc">{store}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default VehiclesIndex;

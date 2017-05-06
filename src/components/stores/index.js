import React, { Component } from 'react';

class StoresIndex extends Component {

  state = {
    stores: [
      'Vergueiro',
      'São Bernardo do Campo',
      'Ibirapuera'
    ]
  }

  render() {
    return (
      <div className="stores">
        <h2>Stores</h2>


        {this.state.stores.map((store) => (
          <div className="row no-gutters" key={store}>
            <div className="col-6 img"><img src="https://placeholdit.imgix.net/~text?txtsize=50&txt=200%C3%97200&w=200&h=200" /></div>
            <div className="col-6 desc">{store}</div>
            <div className="col-12 badges">
              <div className="d-flex flex-row justify-content-center">
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
                <div><img src="https://placeholdit.imgix.net/~text?txtsize=10&txt=50&w=50&h=50" /></div>
              </div>
            </div>
            <div className="col-6"><a href="#" className="btn btn-primary">Button 1</a></div>
            <div className="col-6"><a href="#" className="btn btn-danger">Button 2</a></div>
          </div>
        ))}
      </div>
    );
  }
}

export default StoresIndex;

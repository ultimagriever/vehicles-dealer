import React, { Component } from 'react';

class DirectSalesIndex extends Component {

  state = {
    directSales: [
      'Taxis',
      'Frotistas',
      'Produtor Rural'
    ]
  }

  render() {
    return (
      <div className="direct-sales">
        <h2>Direct Sales</h2>

        {this.state.directSales.map((store, key) => (
          <div className="row no-gutters" key={store}>
            <div className={(key%2) ? 'col-4 img flex-first' : 'col-4 img flex-last'}><img src="https://placeholdit.imgix.net/~text?txtsize=50&txt=200%C3%97200&w=200&h=200" /></div>
            <div className="col-8 desc">{store}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default DirectSalesIndex;

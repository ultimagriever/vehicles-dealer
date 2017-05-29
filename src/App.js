import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes';
import './App.css';

class App extends Component {

  state = {
    menuOpened: false
  }

  openMenu() {
    this.setState({
      menuOpened: !this.state.menuOpened
    });
  }

  closeMenu() {
    this.setState({
      menuOpened: false
    });
  }

  renderMenu() {
    if (!this.state.menuOpened) {
      return '';
    } else {
      return (
        <div className="menu">
          <ul>
            <li onClick={this.closeMenu.bind(this)}><Link to="./">Home</Link></li>
            <li onClick={this.closeMenu.bind(this)}><Link to="./vehicles">Vehicles</Link></li>
            <li onClick={this.closeMenu.bind(this)}><Link to="./stores">Stores</Link></li>
            <li onClick={this.closeMenu.bind(this)}><Link to="./direct-sales">Direct Sales</Link></li>
          </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header" onClick={this.openMenu.bind(this)}>Vehicles Dealer</div>
        { this.renderMenu() }
        <div className="container-fluid">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;

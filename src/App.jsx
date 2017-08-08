import React, { Component } from 'react';
import Icon from './Icon/Icon'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><Icon className="u-margin-right" slug="check"/>React SVG Icon System Demo</h1>
        <Icon slug="hamburger"/>
        <Icon slug="warning" className="icon--red"/>
        <Icon slug="pin"/>
        <Icon slug="x"/>
        <button>Search<Icon className="u-margin-left" slug="search"/></button>
        <button>Next<Icon slug="chevron" className="u-margin-left icon--flipped"/></button>
      </div>
    );
  }
}

export default App;

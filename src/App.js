import React, { Component } from 'react';
import Nav from './components/Nav'
import './assets/css/App.css';
import './assets/css/bootstrap.min.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;

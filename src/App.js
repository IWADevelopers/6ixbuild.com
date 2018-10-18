import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel>
          <div>
              <img src="https://via.placeholder.com/3500x1500" />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src="https://via.placeholder.com/3500x1500" />
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src="https://via.placeholder.com/3500x1500" />
              <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;

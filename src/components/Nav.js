import React, { Component } from 'react';

class Nav extends Component{
    render() {
        return (
          <nav className="site-navbar fixed-top navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="index.html">Default<span>.</span></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true" /></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }
}

export default Nav;
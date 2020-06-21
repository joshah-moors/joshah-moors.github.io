import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import index from './index.jpg';

class Splash extends Component {
  render() {
    return (
      <div className="home">
        <img src={index} className="home-pic" alt="logo" />
        <span className="home-name">Joshah Moors</span>
        {/*<p className="home-linked">
          Check out my skills and hit me up on <a className="home-a" href="https://www.linkedin.com/in/joshahmoors/">LinkedIn</a>
        </p> */}
        <p>
          <a className="a-fa" href="https://www.linkedin.com/in/joshahmoors/">
            <i className="fa fa-linkedin-square fa-2x"></i>
          </a>
          <a className="a-fa" href="https://github.com/joshah-moors">
            <i className="fa fa-github fa-2x"></i>
          </a>
          <a className="a-fa" href="https://www.youtube.com/channel/UCN8uj2L0xk8u2o_0bvprwtg/playlists">
            <i className="fa fa-youtube fa-2x"></i>
          </a>
        </p>
      </div>
    )
  }
}


class Experience extends Component {
  render() {
    return (
      <div className="summary">
        <h1>View my skills and get at me on <a href="https://www.linkedin.com/in/joshahmoors/"
                                               className="home-a">LinkedIn</a></h1>
      </div>
    )
  }
}


class Home extends Component {
  render() {
    return (
      <div>
        <Splash></Splash>
        <Experience></Experience>
      </div>
    )
  }
}


export default Home;
import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import index from './index.jpg';

class Splash extends Component {
  scrollNext() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }
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
        <button className="scroll-next" onClick={() => {this.scrollNext()}}>Next</button>
      </div>
    )
  }
}


class Education extends Component {
  scrollNext() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }
  render() {
    return (
      <div className="education">
        <h1>View my skills and get at me on <a href="https://www.linkedin.com/in/joshahmoors/"
                                               className="home-a">LinkedIn</a></h1>
        <button className="scroll-next" onClick={() => {this.scrollNext()}}>Next</button>
      </div>
    )
  }
}


class Experience extends Component {
  scrollNext() {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }
  render() {
    return (
      <div className="experience">
        <h1>View my skills and get at me on <a href="https://www.linkedin.com/in/joshahmoors/"
                                               className="home-a">LinkedIn</a></h1>
        <button className="scroll-next" onClick={() => {this.scrollNext()}}>Next</button>
      </div>
    )
  }
}


class Creative extends Component {
  render() {
    return (
      <div className="creative">
        <h1>Watch educational <i>and entertaining</i> python content on <a href="https://www.youtube.com/channel/UCN8uj2L0xk8u2o_0bvprwtg/playlists"
                                               className="creative-a">Youtube</a></h1>
      </div>
    )
  }
}


class Home extends Component {
  render() {
    return (
      <div>
        <Splash></Splash>
        <Education></Education>
        <Experience></Experience>
        <Creative></Creative>
      </div>
    )
  }
}


export default Home;
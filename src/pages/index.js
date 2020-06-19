import React, { Component } from 'react';

import index from './index.jpg';




class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={index} className="home-pic" alt="logo" />
        <span className="home-name">Joshah Moors</span>
        <p className="home-linked">
          Check out my skills and hit me up on <a className="home-a" href="https://www.linkedin.com/in/joshahmoors/">LinkedIn</a>
        </p>
      </div>
    )
  }
}


export default Home;
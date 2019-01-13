import React from 'react';
import me from '../../assets/me/00100sPORTRAIT_00100_BURST20180917083737026_COVER.jpg';
import './landing.css';

class Landing extends React.Component {
  render() {
    return (
    <div className='landingContainer'>
        <img src={me} alt="Cara"/>
    <div className='landingRight'>
        <h1>Nice to meet you</h1>
        <h2>My name is <span className="nameColor">Cara Ottmar</span>. I'm a front-end <span className="titleColor">Web Developer</span> with Fullstack skills (MERN) and a background in the financial industry.<br></br></h2>
          <a href="https://github.com/cottmar/markdownResume/blob/master/resume.md">Resume</a>
    </div>
    </div>
    )
  }
}

export default Landing;
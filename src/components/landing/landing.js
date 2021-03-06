import React from 'react';
import me from '../../assets/me/00100sPORTRAIT_00100_BURST20180917083737026_COVER.jpg';
import resume from '../../assets/resume/Cara Ottmar Resume 2020.pdf';
import './landing.css';

class Landing extends React.Component {
  render() {
    return (
    <div className='landingContainer'>
      <div className='landingLeft'>
        <img src={me} alt="Cara"/>
      </div>
      <div className='landingRight'>
          <h1>Nice to meet you</h1>
            <h2>My name is <span>Cara Ottmar</span>. I'm a <span>Web Developer</span> with Fullstack skills (MERN). I'm passionate about working with mission based organizations, building software and applications that help solve problems and improve lives.<br></br>
            </h2>
            <a href={resume} target="_blank">Resume</a>
      </div>
    </div>
    )
  }
}

export default Landing;

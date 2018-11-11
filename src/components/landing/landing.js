import React from 'react';
import me from '../../assets/me/00100sPORTRAIT_00100_BURST20180917083737026_COVER.jpg';
import './landing.css';

class Landing extends React.Component {
  render() {
    return (
    <div>
    <div className='pic'>
      <img src={me} alt="Cara"/>
    </div>
    <div className='blurb'>
        <h1>Nice to meet you</h1>
          <h2>My name is <span>Cara Ottmar</span>. I'm a Fullstack <span>software developer</span> with a background in the financial industry.<br></br>
          Bachelor of Science. MERN.
          </h2>
          <a href="https://github.com/cottmar/markdownResume/blob/master/resume.md">Resume</a>
    </div>
    </div>
    )
  }
}

export default Landing;
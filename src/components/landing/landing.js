import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <h1>Hi, I'm <em className='bold'>Cara Ottmar</em></h1>
        <h2>I am a Full-Stack Software Developer (MERN) with a professional background working in the financial indsutry.<br></br>
            I have a passion for collaboration, innovation, and efficiency.<br></br>
            I am inspired and motivated by how technology brings these three passions together to help make the world a better place.</h2>
        <Link to='/Portfolio'><button>portfolio</button></Link>
        </div>
    )
  }
}

export default Landing;
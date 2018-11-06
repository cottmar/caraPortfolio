import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <p>it me</p>
        <Link to='/Portfolio'><button>portfolio</button></Link>
        </div>
    )
  }
}

export default Landing;
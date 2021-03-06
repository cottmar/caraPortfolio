import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <nav>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </nav>
      </div>
    )
  }
}

export default Footer
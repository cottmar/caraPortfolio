import React from 'react';
import './Header.css';

const Header = () => {
    return (
    <div className='container-fluid'>
      <div>
        <header className='App-greeting'>
          <h1 className="hello-greeting">HE<br></br>LLO<span className="period-accent">.</span></h1>
            <div className='introduction'>
              <p>My name is Cara. I'm a React Developer.</p>
            </div>
        </header>
      </div>
    </div>
    )
}

export default Header;
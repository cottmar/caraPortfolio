import React from 'react';
import Chi from '../assets/chiIcon/chihuahuafavicon.ico'

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={Chi} className="image is-48x48" />
          </a>
      
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-black" href="https://github.com/cottmar" target="_blank">
                  <strong>Github</strong>
                </a>
                <a className="button is-light" href="https://www.linkedin.com/in/cara-ottmar/" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default NavBar;


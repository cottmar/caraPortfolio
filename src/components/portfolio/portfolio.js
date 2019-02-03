import React from 'react';
import finders from '../../assets/finders/finders.jpg';
import dogs from '../../assets/dogs/birdie.jpg';
import sossms from '../../assets/sossms/sos.jpg';
import strafford from '../../assets/strafford/40.jpg';
import './portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>PORTFOLIO</h1>
          <div className="row">
            <div className="column">
              <div className="content">
                <a href="https://github.com/spyosaurus/finders-keepers-frontend" target="_blank" ><img src={finders} alt="game"></img></a>
                <h3>Finders Keepers</h3>
                <p>Full stack real-time, multiplayer game where users compete against the clock to find the most stars. Utilizing socket.io, ReactJS</p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <a href="https://github.com/plenty-of-dogs" target="_blank" rel="noopener noreferrer"><img src={dogs} alt="dogs"></img></a>
                <h3>Plenty of Dogs</h3>
                <p>Application designed to help you select a breed of dog, matching you with available adoptable rescue dogs in the Seattle, WA area.</p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <a href="https://github.com/401-Team-Awesome" target="_blank" rel="noopener noreferrer"><img src={sossms} alt="npmjs"></img></a>
                <h3>SOS-SMS (npm)</h3>
                <p>Easily enable an application to instantly notify developers of critical errors via SMS messages. Included custom NPM package.</p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <a href="https://github.com/cottmar/straffordLandWebsite" target="_blank" rel="noopener noreferrer"><img src={strafford} alt="land"></img></a>
                <h3>Land Ad</h3>
                <p id="lastP">Client application advertising acreage marketed as "For Sale by Owner</p>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Portfolio
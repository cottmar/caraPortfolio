import React from 'react';
// import finders from '../../assets/finders/Screen Shot 2018-11-05 at 11.07.56 PM.png';
// import dogs from '../../assets/dogs/Screen Shot 2018-11-05 at 11.06.55 PM.png';
// import sossms from '../../assets/sossms/Screen Shot 2018-11-05 at 11.07.30 PM.png';
// import strafford from '../../assets/strafford/0.png';
import './portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="main">

        <h1>CARA OTTMAR</h1>
        <h2>Portfolio</h2>

          {/* <div className="row">
            <div className="column">
              <div className="content">
                <img src={finders} alt="game" link="https://github.com/spyosaurus/finders-keepers-frontend"></img>
                <h3>Finders Keepers</h3>
                <p>Full stack real-time, multiplayer game where users compete against the clock to find the most stars. Utilizing socket.io, ReactJS</p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={dogs} alt="dogs"></img>
                <h3>Plenty of Dogs</h3>
                <p>Application designed to help you select a breed of dog, matching you with available adoptable rescue dogs in the Seattle, WA area.</p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={sossms} alt="npmjs"></img>
                <h3>SOS-SMS (npm)</h3>
                <p>Easily enable an application to instantly notify developers of critical errors via SMS messages. Included custom NPM package.</p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={strafford} alt="land"></img>
                <h3>Land Ad</h3>
                <p>Client application advertising acreage marketed as "For Sale by Owner</p>
              </div>
            </div>
          </div> */}

      </div>
    );
  }
}

export default Portfolio
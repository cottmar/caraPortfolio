import React from 'react';
// import { Link } from 'react-router-dom';
import finders from '../../assets/finders/Screen Shot 2018-11-05 at 11.07.56 PM.png';
import dogs from '../../assets/dogs/Screen Shot 2018-11-05 at 11.06.55 PM.png';
import quiz from '../../assets/quiz/Screen Shot 2018-11-05 at 11.09.24 PM.png';
import sossms from '../../assets/sossms/Screen Shot 2018-11-05 at 11.07.30 PM.png';
import strafford from '../../assets/strafford/0.png';
import './portfolio.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="main">

        <h1>CARA OTTMAR</h1>
        <h2>Portfolio</h2>
        <p> Resize this to see?</p>

          <div className="row">
            <div className="column">
              <div className="content">
                <img src={finders} alt="game"></img>
                <h3>My Work</h3>
                <p>Lorem </p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={dogs} alt="dogs"></img>
                <h3>My Work</h3>
                <p>Lorem </p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={sossms} alt="npmjs"></img>
                <h3>My Work</h3>
                <p>Lorem </p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={strafford} alt="land"></img>
                <h3>My Work</h3>
                <p>Lorem </p>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={quiz} alt="quiz"></img>
                <h3>My Work</h3>
                <p>Lorem </p>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Portfolio
import React, { useLayoutEffect, useRef, useState } from 'react';
// import { ReactDOM } from 'react-dom';
import './App.css';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import PortfolioIntro from './Portfolio/PortfolioIntro';
import Basemap from './Portfolio/Basemap';
import TherapySpotter from './Portfolio/TherapySpotter';

const App = () => {

    const [show, setShow] = useState({
      itemTwo: false,
    })
    const [percentShown, setPercentShown] = useState({
      itemTwo: 0,
    })
    const refTwo = useRef(null)

    useLayoutEffect(() => {
      const topPos = (element) => console.log(element, 'what is element')
    })


  return (
    <div className="App">
      <Header />
      <AboutMe />
      <PortfolioIntro />
      <Basemap />
      <TherapySpotter />
    </div>
  );
}

export default App;
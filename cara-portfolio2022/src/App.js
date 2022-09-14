import React, { useLayoutEffect, useRef, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import NavBar from './navBar/NavBar';
import AboutMe from './AboutMe/AboutMe';
import PortfolioIntro from './Portfolio/PortfolioIntro';
import Basemap from './Portfolio/Basemap';
import TherapySpotter from './Portfolio/TherapySpotter';
import Strafford from './Portfolio/Strafford';
import Footer from './Footer/Footer';

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
      <NavBar />
      <Header />
      <AboutMe />
      <PortfolioIntro />
      <Basemap />
      <TherapySpotter />
      <Strafford />
      <Footer />
    </div>
  );
}

export default App;
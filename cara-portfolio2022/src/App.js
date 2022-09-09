import React, { useLayoutEffect, useRef, useState } from 'react';
// import { ReactDOM } from 'react-dom';
import './App.css';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

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
      <Portfolio />
    </div>
  );
}

export default App;
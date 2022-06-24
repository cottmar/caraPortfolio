import React, { useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';

function App() {

  useEffect(() => {
    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY);

      if (window.scrollY > 0) {
        // change CSS property
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App" style={{ border: '3px solid black', width: '400px', height: '100rem'}}>
      <Header />
      <AboutMe />
      <p>Scrolling</p>
      <p>Scrolling</p>
      <p>Scrolling</p>
      <p>Scrolling</p>
      <p>Scrolling</p>
    </div>
  );
}

export default App;

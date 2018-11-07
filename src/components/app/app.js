import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from '../footer/footer';
import About from '../about/about';
import Landing from '../landing/landing';
import contact from '../contact/contact';
import Portfolio from '../portfolio/portfolio.js';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      <BrowserRouter>
      <div>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/Portfolio' component={Portfolio}/>
      <Route exact path='/About' component={About}/>  
      <Route exact path='/contact' component={contact}/>    
      <Footer/>
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App
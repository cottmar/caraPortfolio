import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/header';
import About from '../about/about';
// import Landing
import Portfolio from '../portfolio/portfolio.js';

class App extends Component.React {
  render() {
    return (
      <div className='app'>
      <BrowserRouter>
      <div>
      <Header/>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/Portfolio' component={Portfolio}/>
      <Route exact path='/About' component={About}/>      
      </div>
      </BrowserRouter>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/header';
import About from '../about/about';
import Landing from '../landing/landing';
import contact from '../contact/contact';
import Portfolio from '../portfolio/portfolio.js';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      <BrowserRouter>
      <div>
      <Header/>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/Portfolio' component={Portfolio}/>
      <Route exact path='/About' component={About}/>  
      <Route exact path='/contact' component={contact}/>    
      </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App
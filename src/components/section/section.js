import React, { Component } from 'react';
import './section.css';

class Section extends Component {
  render() {
    return (
      <div className='section'>
        <h1 className="bold">
          {this.props.title}
        </h1>
        <div className="section-units">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
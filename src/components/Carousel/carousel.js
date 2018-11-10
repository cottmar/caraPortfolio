import React, { Component } from 'react';
import data from '../../data/data';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: data.portfolio,
      portfolio: data.portfolio[0]
    }
  }

  nextPicture = () => {
    const newIndex = this.state.portfolio.index+1;
    this.setState({
      portfolio: data.portfolio[newIndex]
    })
  }

  prevPicture = () => {
    const newIndex = this.state.portfolio.index-1;
    this.setState({
      portfolio: data.portfolio[newIndex]
    })
  }

  render() {
    const { portfolio } = this.state;
    return (
      <div className='carousel'>
        <button
          onClick={() => this.nextPicture()}
          disabled={portfolio.index === data.portfolio.length-1}
        >Next</button>
        <button 
          onClick={() => this.prevPicture()}
          disabled={portfolio.index === 0}
          >Prev</button>
      </div>
    )
  }
}

export default Carousel;
import React,{ Component } from 'react';
import Slide from './slide';
import LeftArrow from './leftarrow';
import RightArrow from './rightarrow';
// import finders from '../../assets/finders/Screen Shot 2018-11-05 at 11.07.56 PM.png';
// import dogs from '../../assets/dogs/Screen Shot 2018-11-05 at 11.06.55 PM.png';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
       "../../assets/dogs/Screen Shot 2018-11-05 at 11.06.55 PM.png",
       "../../assets/finders/Screen Shot 2018-11-05 at 11.07.56 PM.png"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    return (
      <div className='slider'>
        <div className='slider-wrapper'
          style={(
            tranform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          )}>
      {
        this.state.images.map((image, i) => (
          <Slide key={i} image={image}/>
        ))
      }
      <LeftArrow
        goToPrevSlide={this.goToPrevSlide}  
      />
      <RightArrow
        goToNextSlide={this.goToNextSlide}  
      />
      </div>
    );
  }
}
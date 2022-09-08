import React from 'react';
import Cara from '../assets/myAvatar/cara.png';
import Mountain from '../assets/mountain/mountain image.png';

const Header = () => {
  return (
  <section className="hero is-white is-fullheight">
    {/* <!-- Hero head: will stick at the top --> */}
    <div className="hero-head">
    </div>

    {/* <!-- Hero content: will be in the middle --> */}
    <div className="hero-body">
      <div className="container has-text-centered">
        <p 
          className="title"
        >
          Greetings, Earthlings!
        </p>
        <p className="subtitle">
          My name is Cara and I am a React Developer.
        </p>
        <div className="card-image has-text-centered">
          <figure className="image is-128x128 is-inline-block">
              <img className="image is-rounded" src={Cara} alt="avatar of girl with brunette hair and green eyes, smiling"/>
          </figure>
        </div>
      </div>
    </div>

    {/* <!-- Hero footer: will stick at the bottom --> */}
    <div className="hero-foot" >
      <div className="card-image has-text-centered">
          <figure className="image is-fullwidth mb-0">
              <img src={Mountain} className="image is-16x9" alt="cartoon depiction of mountain range with snowcapped tops."/>
          </figure>
        </div>
    </div>
  </section>
  )
}

export default Header;
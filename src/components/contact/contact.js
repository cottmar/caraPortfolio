import React from 'react';
import './contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className='contactBlurb'>
        <h1>I'm always happy to hear from you.</h1>
        <h2>cara.ottmar@gmail.com</h2>
        <ul>
          <a href="https://github.com/cottmar">Github</a>
        </ul>
        <ul>
          <a href="https://www.linkedin.com/in/cara-ottmar/">Linkedin</a>
        </ul>
      </div>
    )
  }
}

export default Contact;
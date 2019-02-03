import React from 'react';
import './contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className='contactBlurb'>
        <p className="firstSentence">I'm always happy to hear from you.</p>
        <p className="email" href="mailto:cara.ottmar@gmail.com">cara.ottmar@gmail.com</p>
        <div className="socials">
          <ul>
            <a href="https://github.com/cottmar" target="_blank" rel="noopener noreferrer">Github</a>
          </ul>
          <ul>
            <a href="https://www.linkedin.com/in/cara-ottmar/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;
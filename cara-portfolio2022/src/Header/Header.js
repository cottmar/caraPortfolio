import React from 'react';
import Cara from '../assets/myAvatar/cara.png';
import { Hero, Columns, Footer, Container, Heading } from 'react-bulma-components';
import './Header.css';

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
        <div class="card-image has-text-centered">
          <figure class="image is-128x128 is-inline-block">
              <img class="is-rounded" src={Cara} alt="avatar of girl with brunette hair and green eyes, smiling"/>
          </figure>
        </div>
      </div>
    </div>

    {/* <!-- Hero footer: will stick at the bottom --> */}
    <div className="hero-foot">
    </div>
  </section>
  )
}

export default Header;


// import React from 'react';
// import Row from 'react-bootstrap/Row';
// import 'bulma/css/bulma.min.css';
// import './Header.css';

// const Header = () => {
//   return (
//     <div 
//       style={{
//         background: 'linear-gradient(90deg, #cd2026 50%, #f1eeea 50%)',
//         color: 'black',
//         height: '100vh', 
//         padding: '0',
//       }}>
//       <Row>
//         <div classNameName='row-header'>
//           <h1>He<br></br> llo</h1> 
//           <p>My name is Cara. I'm a React Developer.</p>       
//         </div>
//       </Row>
//     </div>
//   )
// }

// export default Header;
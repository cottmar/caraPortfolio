import React from 'react';
import { Hero, Columns, Footer, Container, Heading } from 'react-bulma-components';
import './Header.css';

const Header = () => {
  return (
<section className="hero is-danger is-fullheight">
  {/* <!-- Hero head: will stick at the top --> */}
  <div className="hero-head">
  </div>

  {/* <!-- Hero content: will be in the middle --> */}
  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">
        Hello
      </p>
      <p className="subtitle">
        My name is Cara. I am a React Developer.
      </p>
    </div>
  </div>

  {/* <!-- Hero footer: will stick at the bottom --> */}
  <div className="hero-foot">
  </div>
</section>
  )
}

export default Header;


{/* <Hero style={{backgroundColor: 'pink'}} classNameName="hero is-fullheight">
<Hero.Body style={{backgroundColor: 'lime'}}classNameName='hero-body'>
    <Columns style={{backgroundColor:'green'}}>
      <h1 
        classNameName="title is-centered"
        style={{
          fontSize: '6em',
          backgroundColor: 'blue'
        }}>
      Hello
      </h1>
      <h2 
        classNameName="subtitle is-centered"
        style={{backgroundColor: 'red'}}  
      >
        My name is Cara. I am a React Developer.
      </h2>
    </Columns>
</Hero.Body>
</Hero> */}

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
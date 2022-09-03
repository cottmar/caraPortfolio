import React from 'react';
import Row from 'react-bootstrap/Row';
import './Header.css';

const Header = () => {
  return (
    <div 
      style={{
        background: 'linear-gradient(90deg, #cd2026 50%, #f1eeea 50%)',
        color: 'black',
        height: '100vh', 
        padding: '0',
      }}>
      <Row className='row-header'>
        <h1>He<br></br>llo</h1>        
      </Row>
    </div>
  )
}

export default Header;

// import React from 'react';
// import './Header.css';

// const Header = () => {
//     return (
//     <div className='container-fluid'>
//       <div>
//         <header className='App-greeting'>
//           <h1 className="hello-greeting">HE<br></br>LLO<span className="period-accent">.</span></h1>
//             <div className='introduction'>
//               <p>My name is Cara. I'm a React Developer.</p>
//             </div>
//         </header>
//       </div>
//     </div>
//     )
// }

// export default Header;
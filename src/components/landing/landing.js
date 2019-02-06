import React from 'react';
import me from '../../assets/me/00100sPORTRAIT_00100_BURST20180917083737026_COVER.jpg';
import './landing.css';

class Landing extends React.Component {
  render() {
    return (
    <div className='landingContainer'>
      <div className='landingLeft'>
        <img src={me} alt="Cara"/>
      </div>
      <div className='landingRight'>
          <h1>Nice to meet you</h1>
            <h2>My name is <span>Cara Ottmar</span>. I'm a <span>Web Developer</span> with Fullstack skills (MERN). I'm passionate about working with mission based organizations, building software and applications that help solve problems and improve lives.<br></br>
            </h2>
            <a href="https://github.com/cottmar/markdownResume/blob/master/resume.md" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
    )
  }
}

export default Landing;

{/* <div class="categoryDiv">
<img class="alignnone size-full wp-image-2105" src="https://certifiedautismtravel.com/wp-content/uploads/2019/01/Asset-18.png" alt="" width="31" height="31" />
<h2 class="blueTitle">BEACHES</h2>
</div>
<div class="categoryContent">
<img class="alignnone size-full wp-image-2316" src="https://certifiedautismtravel.com/wp-content/uploads/2019/01/Asset-18-1.png" alt="" width="117" height="117" />
<div class="titleAndBadge">
<a href="https://certifiedautismtravel.com/projects/beaches-turks-and-caicos/">
<span id="turksColor" class="links">Beaches: Turks and Caicos</span>
</a>
<h3 class="badgeID">In Review</h3>
</div>
</div> */}

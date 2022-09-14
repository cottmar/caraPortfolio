import { React } from 'react';
import Straff from '../assets/strafford/strafford.png';
import Straff2 from '../assets/strafford/strafford2.jpg';

const Strafford = () => {
    return (
        <section className='box'>
            <div className='columns'>
            <a href="https://github.com/cottmar/straffordLandWebsite" alt="link to github repository" target="_blank"><img src={Straff2} className='column is-half' alt=""/></a>
                    <a href="https://github.com/cottmar/straffordLandWebsite" alt="link to github repository" target="_blank"><img src={Straff} className='column is-half' alt=""/></a>
            </div>
            <div class="columns box has-text-black">
                <div class="column is-half has-text-centered">
                    <h3 className='is-size-3 pt-1'>Role: Freelance Frontend Developer</h3>
                    <p>Dev Tools: </p>
                    <li style={{ listStyleType: 'none' }}>ReactJS || NodeJS</li>
                    <li style={{ listStyleType: 'none' }}>CSS3/SASS</li>
                    <li style={{ listStyleType: 'none' }}>Google Maps API</li>
                    <li style={{ listStyleType: 'none' }}>Git</li>
                    <li style={{ listStyleType: 'none' }}>Heroku</li>
                </div>
                <div class="column is-half has-text-centered is-size-4 pt-6">
                    <p>Website advertising acreage listed for sale developed using ReactJS, deployed using Heroku.</p>
                </div>
            </div>
        </section>
    );
}

export default Strafford;
import { React } from 'react';
import Straff from '../assets/strafford/strafford.png'

const Strafford = () => {
    return (
        <section className='mt-6 mb-6'>
            <div className='image is-3by1'>
                <a href="https://github.com/cottmar/straffordLandWebsite" alt="link to github repository" target="_blank"><img src={Straff} alt=""/></a>
            </div>
            <div class="columns">
                <div class="column is-half has-background-black has-text-white has-text-centered">
                    <h3 className='is-size-3 pt-1'>Role: Freelance Frontend Developerr</h3>
                    <p>Dev Tools: </p>
                    <li style={{ listStyleType: 'none' }}>ReactJS || NodeJS</li>
                    <li style={{ listStyleType: 'none' }}>CSS3/SASS</li>
                    <li style={{ listStyleType: 'none' }}>Google Maps API</li>
                    <li style={{ listStyleType: 'none' }}>Git</li>
                    <li style={{ listStyleType: 'none' }}>Heroku</li>
                </div>
                <div class="column is-half has-background-white has-text-black has-text-centered is-size-4 pt-6">
                    <p>Website advertising acreage listed for sale developed using ReactJS, deployed using Heroku.</p>
                </div>
            </div>
        </section>
    );
}

export default Strafford;
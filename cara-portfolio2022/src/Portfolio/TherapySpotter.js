import { React } from 'react';
import Ther from '../assets/therapy/therapy spotter.png';
import Ther2 from '../assets/therapy/therapyspotter2.png';
import Ther3 from '../assets/therapy/therapyspotter3.png';

const TherapySpotter = () => {
    return (
        <section className='box has-text-black'>
            <div className='columns'>
            <img src={Ther} alt="Image of Therapy Spotter, showing location and contact information of a local Autism therapy group" className='column is-one-third'/>
            <img src={Ther2} alt="Image of Therapy Spotter, showing location and contact information of a local Autism therapy group" className='column is-one-third'/>
            <img src={Ther3} alt="Image of Therapy Spotter, showing location and contact information of a local Autism therapy group" className='column is-one-third'/>
            </div>
            <div class="columns box">
                <div class="column is-half has-text-centered is-size-4 pt-6">
                    <p>Therapy Spotter was a web based tool for finding local therapists. I used Axios to complete the HTTP requests on the client side, and worked on styling the page to not only look good but be WCAG friendly.</p>
                </div>
                <div class="column is-half has-text-centered">
                    <h3 className='is-size-3 pt-1'>Role: Frontend and Wordpress Developer Intern</h3>
                    <p>Dev Tools: </p>
                    <li style={{ listStyleType: 'none' }}>TypeScript || NodeJS</li>
                    <li style={{ listStyleType: 'none' }}>CSS3/SASS</li>
                    <li style={{ listStyleType: 'none' }}>Axios</li>
                    <li style={{ listStyleType: 'none' }}>Git</li>
                    <li style={{ listStyleType: 'none' }}>Javascript/HTML/CSS</li>
                    <li style={{ listStyleType: 'none' }}>WCAG</li>
                    <li style={{ listStyleType: 'none' }}>Wordpress</li>
                </div>
            </div>
        </section>
    );
}

export default TherapySpotter;
import { React } from 'react';
import Ther from '../assets/therapy/therapy spotter.png'

const TherapySpotter = () => {
    return (
        <section className='mt-6 mb-6'>
            <div className='image is-3by1'>
            <img src={Ther} alt="Image of Therapy Spotter, showing location and contact information of a local Autism therapy group"/>
            </div>
            <div class="columns">
                <div class="column is-half has-background-black has-text-white has-text-centered">
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
                <div class="column is-half has-background-white has-text-black has-text-centered is-size-4 pt-6">
                    <p>Therapy Spotter was a web based tool for finding local therapists. I used Axios to complete the HTTP requests on the client side, and worked on styling the page to not only look good but be WCAG friendly.</p>
                </div>
            </div>
        </section>
    );
}

export default TherapySpotter;
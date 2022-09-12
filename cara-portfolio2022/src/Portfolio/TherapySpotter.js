import { React } from 'react';
import Ther from '../assets/therapy/therapy spotter.png'

const TherapySpotter = () => {
    return (
        <section>
            <img src={Ther} alt="Image of Therapy Spotter, showing location and contact information of a local Autism therapy group"/>
            <div class="columns">
                <div class="column is-half has-background-primary has-text-centered">
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
                <div class="column is-half has-background-warning has-text-centered is-size-4 pt-6">
                    <p>Therapy Spotter was a web based tool for finding local therapists. The backend was developed offshore, </p>
                </div>
            </div>
        </section>
    );
}

export default TherapySpotter;
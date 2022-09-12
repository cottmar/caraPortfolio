import Base from '../assets/basemap/basemap.png';
import { React, styles } from 'react';

function Basemap() {
    return (
        <section className='mt-6 mb-6'>
            <div className='image is-3by1'>
                <a href="https://app.basemap.com/" alt="Basemap Web App Homepage link" target="_blank"><img src={Base} alt="Basemap App logo"/></a>
            </div>
            <div class="columns">
                <div class="column is-half has-background-black has-text-white has-text-centered">
                    <h3 className='is-size-3 pt-1'>Role: Full Stack Web Developer</h3>
                    <p>Dev Tools: </p>
                    <li style={{ listStyleType: 'none' }}>ReactJS || NodeJS</li>
                    <li style={{ listStyleType: 'none' }}>Jira/Atlassian</li>
                    <li style={{ listStyleType: 'none' }}>CSS3/SASS</li>
                    <li style={{ listStyleType: 'none' }}>Google Maps API</li>
                    <li style={{ listStyleType: 'none' }}>Google Analytics</li>
                    <li style={{ listStyleType: 'none' }}>Google OAuth</li>
                    <li style={{ listStyleType: 'none' }}>Facebook OAuth</li>
                    <li style={{ listStyleType: 'none' }}>Mapbox</li>
                    <li style={{ listStyleType: 'none' }}>Git</li>
                </div>
                <div class="column is-half has-background-white has-text-black has-text-centered is-size-4 pt-6">
                    <p>Basemap, Inc. is an app built for GPS mapping and activity planning. Delivered an end-to-end web overhaul based on design and technical specification. I worked closely with designer and leads to define scope, development roadmap and deployment release cycle. Established bi-weekly sprint cadence, leveraging Jira/Atlassian as the guide for feature development and bug fixes.</p>
                </div>
            </div>
        </section>
    );
}

export default Basemap;
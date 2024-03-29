import Base from '../assets/basemap/basemap.png';
import { React, styles } from 'react';

function Basemap() {
    return (
        <section className="box">
            <div className='image is-3by1'>
                <a href="https://app.basemap.com/" alt="Basemap Web App Homepage link" target="_blank"><img src={Base} alt="Basemap App logo"/></a>
            </div>
            <div className="columns box">
                <div className="column is-half has-text-centered is-size-5 pt-6" style={{ border: '5px solid rgba(0, 0, 0, 0.05)'}}>
                        <p>Basemap, Inc. is an app built for GPS mapping and activity planning. Delivered an end-to-end web overhaul based on design and technical specification. I worked closely with designer and leads to define scope, development roadmap and deployment release cycle. Established bi-weekly sprint cadence, leveraging Jira/Atlassian as the guide for feature development and bug fixes.</p>
                </div>
                <div className="column is-half has-text-centered" style={{ border: '5px solid rgba(0, 0, 0, 0.05)'}}>
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
            </div>
        </section>
    );
}

export default Basemap;
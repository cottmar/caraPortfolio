import './Portfolio.css';
import Base from '../assets/basemap/basemap.png';
import Ther from '../assets/therapy/therapy spotter.png';
import Straff from '../assets/strafford/strafford.png';
import { render } from '@testing-library/react';

// https://mattfarley.ca/ for containers and put what I worked on 

const Portfolio = () => {
        return (
            <div>
                <div className='pic-container'>
                    <img alt="basemap.com screenshot" src={Base} className="img-fluid" />
                </div>
                <div className='info-container'>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='container-lg'>
                <div class="row align-items-start">
                    <div class="col">
                        One of three columns
                        </div>
                        <div class="col">
                        One of three columns
                        </div>
                        <div class="col">
                        One of three columns
                        </div>
                    </div>
                </div>
            </div>
    
        )
}

export default Portfolio;
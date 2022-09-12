import Base from '../assets/basemap/basemap.png';

const Basemap = () => {
        return (
            <section>
                <div className="container is-fluid has-text-centered has-background-dark">
                    <h1 className="has-text-white">Basemap</h1>
                </div>
                <img src={Base}/>
                <div class="columns">
                    <div class="column is-half has-background-primary">
                        <h3>Role: Full Stack Web Developer</h3>
                        <p>Dev Tools: </p>
                        <li>ReactJS</li>
                        <li>Postman</li>
                        <li>ReactJS</li>
                        <li>Postman</li>        
                        <li>Postman</li>
                        <li>ReactJS</li>
                        <li>Postman</li>
                        <li>ReactJS</li>
                        <li>Postman</li>
                    </div>
                    <div class="column is-half has-background-warning">is-half</div>   
                </div>
            </section>
        )
}

export default Basemap;
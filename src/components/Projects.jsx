import React from 'react';
import '../App.css';

/* Importing images by webpack */
function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../img/projects', false, /\.(png|jpe?g|svg)$/));

//Experiments


export const FeaturedProjects =()=> { 
        
    const featuredProjectsName = ['React Neighborhood Map', 'Restaurant Reviews App', 'My Reads App', 'Feed Reader Testing'];
    const featuredProjectsUrl = ['Neighborhood-Map-React', 'mws-restaurant-stage-1', 'reactnd-myreads', 'frontend-nanodegree-feedreader'];
                    
                //Live url of hosted projects
    const liveUrl = ['','','',''];

    //Array of the store details of the projects
    const details = [['Find Neighborhood places'] ,['Get restaurant details'], ['My Reads book tracking app'], ['RSS Feedreader application testing'], ['Classic Arcade game']];

                //Array of tech names for the projects
    const techUsed = [['React, HTML, CSS, Webpack, Maps API'], ['Mapbox Api, HTML, CSS Grids, Service Workers'], ['React, CSS Grids, Babel, Webpack'], ['Jasmine, HTML, CSS, JS'], 'jQuery',
                    'HTML Canvas', 'Bootstrap', 'API',' Maps API'];


    return (
        featuredProjectsName.map((name, index) => 
            <div key={index} className="project">
                <div className="prj">
                    <div className="project-front">
                    <h3>{name}</h3>
                    <img className="pro-img" src={images[index]} alt={name}/>
                    </div>
                    <div className="project-back">
                        <h3>{name}</h3> 
                        <p className="proText">{details[index]}</p> 
                        <p className="proText">{techUsed[index]}</p>
                        <div className="buttons">
                    <a role="button" className="btn" href={`https://github.com/Ckbhatia/${featuredProjectsUrl[index]}`} target="_blank" rel="noopener noreferrer">Github</a>
                    <a role="button" className="btn2" href="https://" target="_blank" rel="noopener noreferrer">{liveUrl[index].length <= 1  ? null : 'Live'}</a>
                    </div>
                    </div>
                    </div>
                    </div>
            )               
)};


export const Projects =()=> {
    
    // Projects name, url and live url arrays
    const projectsName = ['Classic Arcade Game', 'Memory Game', 'Random Color picker', 'Portfolio', 'Pixel Art maker', 'Animal Trading Cards'];
    
    //Projects url github and codepen
    const projectsUrl = ['frontend-nanodegree-arcade-game', 'fend-project-memory-game', 'React-random-color-picker', 'Ckbhatia.github.io', 'project/editor/XWMgkQ', 'pen/zWbVwE'];
    
    //Array of the live url of the projects
    const liveUrl = ['frontend-nanodegree-arcade-game/','fend-project-memory-game/#','','portfolio','project/full/169293', 'full/zWbVwE'];
    
    //Array of the store details of the projects
    const details = [['Classic video game'] ,['It’s a shnazzy memory game!'], ['React Random color app. Just Fun App!'], ['Static portfolio'], ['Creative pixel art maker tool'],
                    ['Simple Card moc.']];

    //Array of tech names for the projects
    const techUsed = [['HTML Canvas, CSS, OOP, JS'], ['HTML5, CSS, JS, CSS Animation'], ['React, CSS, Babel, Webpack'], ['HTML, CSS, Bootstrap'], ['HTML Canvas, jQuery, JS, CSS'],
                    ['HTML, CSS']];

    return (
            projectsName.map((project, index) => (
            <div key={index} className="project">
            <div className="prj">
            <div className="project-front">
            <h3>{projectsName[index]}</h3>
            {/* Added index + 4 to skip the some images that rendered before */} 
            <img src={images[4+index]} alt={project}/>
            </div>
            <div className="project-back">
                        <h3>{projectsName[index]}</h3>
                        <p className="proText">{details[index]}</p> 
                        <p className="proText">{techUsed[index]}</p>
            {/* Button for gihub and live view the projects */}
            <a role="button" className="btn" href={index <= 3 ? `https://github.com/Ckbhatia/${projectsUrl[index]}` :  `https://codepen.io/ckbhatia/${projectsUrl[index]}`} target="_blank" rel="noopener noreferrer">{index <= 3 ? `Github`: 'Codepen'}</a>
            <a role="button" className="btn2" href={index <= 3 ? `https://ckbhatia.github.io/${liveUrl[index]}` :  `https://codepen.io/ckbhatia/${liveUrl[index]}`} target="_blank" rel="noopener noreferrer">{liveUrl[index].length <= 1  ? null : 'Live'}</a>
            </div>
            </div>
            </div>
        ))
    )
};
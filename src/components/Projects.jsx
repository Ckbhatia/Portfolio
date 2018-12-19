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

    return (
        featuredProjectsName.map((name, index) => 
            <div key={index} className="project">
                    <div className="part1">
                    <h3>{name}</h3>
                    <img className="pro-img" src={images[index]} alt={name}/>
                    </div>
                    <div className="part2">
                    <a role="button" className="btn" href={`https://github.com/Ckbhatia/${featuredProjectsUrl[index]}`} target="_blank" rel="noopener noreferrer">Github</a>
                    <a role="button" className="btn2" href="https://" target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                    </div>
            )               
)};


export const Projects =()=> {
    const projectsName = ['Classic Arcade Game', 'Memory Game', 'Random Color picker', 'Portfolio', 'Pixel Art maker', 'Animal Trading Cards'];
    const projectsUrl = ['frontend-nanodegree-arcade-game', 'fend-project-memory-game', 'React-random-color-picker', 'Ckbhatia.github.io', 'project/editor/XWMgkQ', 'pen/zWbVwE'];

    return (
            projectsName.map((project, index) => (
            <div key={index} className="project">
            <div className="part1">
            <h3>{project}</h3>  
            <img src={images[index]} alt={project}/>
            </div>
            <div className="part2">
            {/* Button for gihub and live view the projects */}
            <a role="button" className="btn" href={index <= 3 ? `https://github.com/Ckbhatia/${projectsUrl[index]}` :  `https://codepen.io/ckbhatia/${projectsUrl[index]}`} target="_blank" rel="noopener noreferrer">{index <= 3 ? `Github`: 'Codepen'}</a>
            <a role="button" className="btn2" href={`https://${projectsUrl}`} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
            </div>
        ))
    )
};
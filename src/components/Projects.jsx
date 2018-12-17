import React from 'react';
import '../App.css';

/* Importing images by webpack */
function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../img/projects', false, /\.(png|jpe?g|svg)$/));

//Experiments


export const FeaturedProjects =()=> { 
        
    const featuredProjectName = ['React Neighborhood Map', 'Restaurant Reviews App', 'My Reads App', 'Feed Reader Testing'];
    

    return (
        featuredProjectName.map((name, index) => 
            <div key={index} className="project">
                    <div className="part1">
                    <h3>{name}</h3>
                    <img className="pro-img" src={images[index]} alt={name}/>
                    </div>
                    <div className="part2">
                    <a role="button" className="btn" href="https://" target="_blank" rel="noopener noreferrer">Github</a>
                    <a role="button" className="btn2" href="https://" target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                    </div>
            )               
)};


export const Projects =()=> {
    const projectName = ['Classic Arcade Game', 'Memory Game', 'Random Color picker', 'Portfolio', 'Pixel Art maker', 'Animal Trading Cards'];

    return (
            projectName.map((project, index) => (
            <div key={index} className="project">
            <div className="part1">
            <h3>{project}</h3>
            <img src={images[index]} alt={project}/>
            </div>
            <div className="part2">
            <a role="button" className="btn" href={`https://${project}`} target="_blank" rel="noopener noreferrer">Github</a>
            <a role="button" className="btn2" href={`https://${project}`} target="_blank" rel="noopener noreferrer">Live</a>
            </div>
            </div>
        ))
    )
};
import React from 'react';
import '../App.css';

/*Testing */
function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
console.log(images);

export const FeaturedProjects =()=> { 
        
    const featuredProjectName = ['React Neighborhood Map', 'Restaurant Reviews App', 'My Reads App', 'Feed Reader Testing'];
    
    return (
        featuredProjectName.map((name, index) => 
            <div key={index} className="project">
                    <h3>{name}</h3>
                    <img src={images[index]} alt={name}/>
                    <a role="button" className="btn" href="https://" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
            )
               
)};


export const Projects =()=> {
    const projectName = ['Classic Arcade Game', 'Memory Game', 'Random Color picker', 'Portfolio', 'Pixel Art maker', 'Animal Trading Cards'];

    return (
            projectName.map((project, index) => (
            <div key={index} className="project">
            <h3>{project}</h3>
            <img src={''} alt={project}/>
            <a role="button" className="btn" href={`https://${project}`} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        ))
    )
};
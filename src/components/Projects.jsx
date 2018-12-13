import React, { Component } from 'react';
import '../App.css';


const Projects =()=> {
    const projectText = ['React Neighborhood map', 'React My reads', 'Restaurant Reviews App', 'Feed Reader Testing', 'Classic Arcade Game', 'Memory Game', 'Random Color picker', 'Portfolio', 'Pixel Art maker', 'Animal Trading Cards'];

    return (
            projectText.map((project, index) => (
            <div key={index} className="project">
            <h3>{project}</h3>
            <img src={''} alt={project}/>
            <a role="button" className="btn" href={`https://${project}`} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        ))
    )
};
export default Projects;
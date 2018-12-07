import React, { component } from 'react';
import '../App.css';

const Navbar=()=> {
    return (
        <header>
            <div>
            <nav id="navbar">
                <ul id="nav">
				    <li><a href="#home">Home</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
					<li><a href="#about">About me</a></li>
			    </ul>
            </nav>
        </div>
            <h1>Chetan Kumar's Portfolio</h1>    
        </header>
    )
}
export default Navbar;
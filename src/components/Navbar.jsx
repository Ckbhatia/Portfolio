import React from 'react';
import '../App.css';

const Navbar=()=> {

    return (
        <header>
            <div>
            <nav role="navigation" id="navbar">
                <ul id="nav"> {/* replace */}
				    <li><a href="#about">About</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
			    </ul>
            </nav>
            </div>
        </header>
    )
}
export default Navbar;
import React, { component } from 'react';

const Navbar=()=> {
    return (
        <div>
            <nav id="nav">
                <ul>
				    <li><a href="#home">Home</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
					<li><a href="#about">About me</a></li>
			    </ul>
            </nav>
        </div>
    )
}
export default Navbar;
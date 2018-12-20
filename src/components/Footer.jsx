import React from 'react';
import '../App.css';

const Footer=()=> {
    return (
        <div className='footer'>
        <div role="link" className="social-links">
        <a className="link" href="https://www.linkedin.com/in/chetan-kumar86" target="_blank" rel="noopener noreferrer" >Linkedin</a>
        <a className="link" href="https://github.com/Ckbhatia" target="_blank" rel="noopener noreferrer" >Github</a>
        <a className="link" href="https://twitter.com/chetanbhatias" target="_blank" rel="noopener noreferrer" >Twitter</a>
        {/*<a href="#medium" target="_blank" rel="noopener noreferrer" >medium</a>*/}
        </div>
        <div id="footerText">somewhat copyright</div>
        </div>
    )
}
export default Footer;
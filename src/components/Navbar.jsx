import React, { Component } from 'react';
import '../App.css';
//import {NavListMob, NavList} from './NavList.jsx';

//Don't forget to get that functionality

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    render() {
            //This ternary changes the id of navigation
            const currentClass = this.state.isToggleOn ? 'nav' : 'navbar';
            //This ternary for change class of container ( hamburger)
            const changeClass = this.state.isToggleOn ? 'change' : '';
            //Array of links
            const listNames = ['About', 'Skills', 'Projects', 'Contact'];
            
            //Condition for Hamburger menu
            if (this.state.isToggleOn) {

            return ( 
                <header>
                    <div className={`container ${changeClass}`} onClick={this.handleClick}>
                        {console.log(this.state.isToggleOn === true)}
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                        {console.log(`this is bar class: ${changeClass}`)}
                    </div>

                <nav role="navigation" id='nav-container'>
                    <ul className={currentClass}>
                    {console.log(`'This is first nav value = ${currentClass}`)}
                    {listNames.map((listName, index) => (
                            <li key={index}><a href={`#${listName.toLowerCase()}`}>{listName}</a></li>
                            ))}
			        </ul>
                 </nav>
            </header>
            )}

        else {
            return ( 
                <header>
                    <div className="container" onClick={this.handleClick}>
                    {console.log(this.state.isToggleOn)}
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <div>
                    <nav role="navigation" className="navbar">
                        <ul className="navbar"> {/* replace */}
                        {console.log(`This is for desktop Value: ${currentClass}`)}
                        {listNames.map((listName, index) => (
                            <li key={index}><a href={`#${listName.toLowerCase()}`}>{listName}</a></li>
                            ))}
			            </ul>
                     </nav>
                    </div>
                </header>
                )}
    }
}
export default Navbar;
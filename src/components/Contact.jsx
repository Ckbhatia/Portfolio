import React from 'react';
import '../App.css';

export default class Contact extends React.Component {
    constructor(props) {
		super(props);
        //state for user input
        this.state = { 
            userInput: '' };
        
        this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e)  {
	  this.setState({
        userInput: e.target.value
      });
    }
    
    render() {
        console.log(this.state.userInput);

    return (
        <div id="contact">
            <h2>Contact</h2>
            <h3 className="cont-h">Interested to work with me or want to hire?</h3>
            <p className="cont-p">I'm available for full-time, part-time and freelance</p>
            <form className="form-container" action="https://formspree.io/chetansain86@gmail.com" method="POST">
                <input 
                    id="name-field" 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    onChange={this.handleChange}
                    value={this.state.userInputName} 
                    />
                <input 
                    id="email-field" 
                    type="email" 
                    name="email" 
                    placeholder="Email" />
                <div>
                <textarea id="message-field" type="text" name="message" placeholder="message"></textarea>
                </div>
                <input id="submit-btn" type="submit" value="Send mail" />
            </form>
        </div>
        )
    }
}
import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <main id="main">
                    <div className="intro">
                        <h1>Chetan Kumar</h1>
                        <p>A self tought programmer</p>
                        <h2>About</h2>
                        <p>Hi, there I am chetan kumar, a passionate programmer. I am curious to learning various parts of tech.....(coming soon)
                        </p>
                        <p>My story of passion...(coming soon)</p>
                        <p>I have completed different courses to get expertise on these technologies.</p>
                    </div>
                </main>
                <section className="skills">
                <h2>Skills</h2>
                <p>JavaScript</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>(coming-up)</p>
                </section>
                <section className="projects">
                <h2>Featured Projects</h2>
                <div className="container">
                <div>Neighorhood-maps</div>
                <div>Calculater</div>
                <div>Image animator</div>
                <div>Resort Booking system</div>
                </div>
                </section>
                <section className="projects">
                <h2>Projects</h2>
                <div>
                <div>Neighorhood-maps</div>
                <div>Calculater</div>
                <div>Image animator</div>
                <div>Resort Booking system</div>
                </div>
                </section>
                <Footer />
            </div>
        )
    }
}
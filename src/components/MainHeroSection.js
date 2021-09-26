import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import VideoBackground from './videos/video-4.mp4'

import './MainHeroSection.css';
import '../App.css';

function MainHeroSection() {
    return (
        <div className='hero-container'>
            <video src={VideoBackground} autoPlay playsInline play loop muted />
            <h1>My Name is Abdou K. Sene</h1>
            <p>I'm a Web & Mobile developer </p>
            <div className="hero-btns">
                <Link to="//drive.google.com/file/d/1pA0jCrxYKDe0aQ4SunHg_UXrQ1KQ-XN5/view?usp=sharing" target='_blank'>
                    <Button 
                        className='btns' 
                        buttonStyle='btn--outline'
                        buttonSize='btn--wide'
                    >
                        My Resume
                    </Button>
                </Link>

                <Link to="/contact-me" target='_blank'>
                    <Button 
                        className='btn--wide' 
                        buttonSize='btn--wide' 
                        buttonColor='green'
                    >
                        Contact Me <i className='far fa-play-circle'/>
                    </Button>
                </Link>
                
            </div>
        </div>
    )
}

export default MainHeroSection;

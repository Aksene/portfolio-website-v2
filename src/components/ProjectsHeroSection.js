import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function ProjectsHeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}) {
    return (
    <>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                <div 
                className="row home__hero-row"
                style={{
                    display: 'flex', 
                    flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
                >
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle-dark'}>
                            {description}</p>
                            <Link to="/projects">
                                <Button buttonSize='btn--wide' buttonColor='green'>
                                {buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__her-img-wrapper">
                            <img src={img} alt={alt} className='home__hero-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
    
}

export default ProjectsHeroSection;



import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './PortfolioPageSection.css';
import './images/slaymaster-icon-logo.png'

function ExperiencePageSection({
    lightBg,
    topLine,
    lightText,
    link,
    headline,
    gitLnk,
    description,
    tech,
    img,
    alt,
    imgStart,
}) {
    return (
    <>
    <div className={lightBg ? 'experience__page-section' : 'experience__page-section darkBg'}>
        <div class="experience__grid-container">

            <div class="experience__grid-child"
                style={{
                display: 'grid', 
                flexDirection: imgStart === 'start' ? 'experience__grid-child-reverse': 'experience__grid-child'}}
            >
                <div className="experience__top-line">{topLine}</div>
                <h1 className={lightText ? 'experience__heading' : 'experience__heading dark'}>{headline}</h1>
                <div className="experience__page-row">
                    <div className="experience__page-text-wrapper">
                            <div className="experience__page-subtitle1"> 
                                <h3>Skills: {tech}</h3>
                                <p>{description}</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class= {imgStart === 'start' ? 'experience__grid-child-reverse': 'experience__grid-child'}>
                <div className="experience__page-info-wrapper">
                            <div className="home__her-img-wrapper">
                                <Link to={link} target='_blank'>
                                    <img src={img} alt={alt} className='experience__page-img'></img>
                                </Link>
                            </div>
                </div>
                <div className="portfolio-links">
                        <Link to={gitLnk} target='_blank'>
                            <Button buttonSize='btn--wide' buttonColor='green'>
                                GitHub
                            </Button>
                        </Link>
                            <Link to={link} target='_blank'>
                            <Button buttonSize='btn--wide' buttonColor='green'>
                                Demo
                            </Button>
                        </Link>
                </div>
            </div>
        </div>
    </div>
    </>)
    
}

export default ExperiencePageSection;

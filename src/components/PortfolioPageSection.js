

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './PortfolioPageSection.css';
import './images/slaymaster-icon-logo.png'

function PortfolioPageSection({
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
    <div className={lightBg ? 'portfolio__page-section' : 'portfolio__page-section darkBg'}>
        <div class="portfolio__grid-container">

            <div class="portfolio__grid-child"
                style={{
                display: 'grid', 
                flexDirection: imgStart === 'start' ? 'portfolio__grid-child-reverse': 'portfolio__grid-child'}}
            >
                <div className="portfolio__top-line">{topLine}</div>
                <h1 className={lightText ? 'portfolio__heading' : 'portfolio__heading dark'}>{headline}</h1>
                <div className="portfolio__page-row">
                    <div className="portfolio__page-text-wrapper">
                            <div className="portfolio__page-subtitle1"> 
                                <h3>Skills: {tech}</h3>
                                <p>{description}</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class= {imgStart === 'start' ? 'portfolio__grid-child-reverse': 'portfolio__grid-child'}>
                <div className="portfolio__page-info-wrapper">
                            <div className="home__her-img-wrapper">
                                <Link to={link} target='_blank'>
                                    <img src={img} alt={alt} className='portfolio__page-img'></img>
                                </Link>
                            </div>
                </div>
                <div className="portfolio-links">
                        <Link to={gitLnk} target='_blank'>
                            <Button className="portfolio-links__btn" buttonSize='btn--medium' buttonColor='green'>
                                GitHub
                            </Button>
                        </Link>
                            <Link to={link} target='_blank'>
                            <Button className="portfolio-links__btn" buttonSize='btn--medium' buttonColor='green'>
                                Demo
                            </Button>
                        </Link>
                </div>
            </div>
        </div>
    </div>
    </>)
    
}

export default PortfolioPageSection;

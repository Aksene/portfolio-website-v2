import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './AboutMeBottomHero.css';

function AboutMeHeroSection({
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
        <div className={lightBg ? 'aboutMe__hero-section' : 'aboutMe__hero-section darkBg'}>
            <div className="WholeContainer">
                <div 
                className="row aboutMe__hero-row"
                style={{
                    display: 'flex', 
                    flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
                >
                    <div className="col">
                        <div className="aboutMe__hero-text-wrapper">
                            <div className="aboutMe__hero-top-line ">{topLine}</div>
                            <h1 className={lightText ? 'aboutMe__heading' : 'aboutMe__heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'aboutMe__hero-subtitle' : 'aboutMe__hero-subtitle-dark'}>
                            {description}</p>
                            <Link to="//www.salemstate.edu" target='_blank'>
                                <Button className="aboutMe__btn" buttonSize='btn--medium' buttonColor='green'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="aboutMe__her-img-wrapper">
                            <img src={img} alt={alt} className='aboutMe__hero-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
    
}

export default AboutMeHeroSection;

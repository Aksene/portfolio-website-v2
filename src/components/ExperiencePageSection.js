

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './ExperiencePageSection.css';

function ExperiencePageSection({
    lightBg,
    topLine,
    lightText,
    link,
    headline,
    description1,
    description2,
    img,
    alt,
    imgStart,
}) {
    return (
    <>
        <div className={lightBg ? 'experience__page-section' : 'experience__page-section darkBg'}>
            <div className="experience__whole-container">
                <div 
                className="row experience__page-row"
                style={{
                    display: 'flex', 
                    flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
                >
                    <div className="col">
                        <div className="experience__page-text-wrapper">
                            <div className="experience__page-block">
                                <div className="experience__page-subtitle1"> 
                                    <h1 className="experience__page-header1">Responsibilities:</h1>
                                    <p>{description1}</p>
                                </div>
                                <span class="experience__page-divider"></span>
                                <div className="experience__page-subtitle2"> 
                                    <h1 className="experience__page-header2">Projects:</h1>
                                    <p>{description2}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col">
                    <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <div className="home__her-img-wrapper">
                        <Link to={link} target='_blank'>

                            <img src={img} alt={alt} className='experience__page-img'></img>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
    
}

export default ExperiencePageSection;

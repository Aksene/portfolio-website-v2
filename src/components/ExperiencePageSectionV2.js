

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './ExperiencePageSectionV2.css';
import './images/slaymaster-icon-logo.png'

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
        <div class="experience__grid-container">

            <div class="experience__grid-child"
                style={{
                display: 'grid', 
                flexDirection: imgStart === 'start' ? 'experience__grid-child-reverse': 'experience__grid-child'}}
            >
                <div className="experience__page-row">
                    <div className="experience__page-text-wrapper">
                            <div className="experience__page-subtitle1"> 
                                <h1 className="experience__page-header1">Responsibilities:</h1>
                                <p>{description1}</p>
                            </div>
                            <div className="experience__page-subtitle2"> 
                                <h1 className="experience__page-header2">Projects:</h1>
                                <p>{description2}</p>
                            </div>
                    </div>
                </div>
            </div>
            <div class= {imgStart === 'start' ? 'experience__grid-child-reverse': 'experience__grid-child'}>
                <div className="experience__page-info-wrapper">
                            <div className="experience__top-line">{topLine}</div>
                            <h1 className={lightText ? 'experience__heading' : 'experience__heading dark'}>{headline}</h1>
                            <div className="home__her-img-wrapper">
                                <Link to={link} target='_blank'>

                                    <img src={img} alt={alt} className='experience__page-img'></img>
                                </Link>
                            </div>
                        </div>
                </div>
        </div>
    </div>

        {/* <div className={lightBg ? 'experience__page-section' : 'experience__page-section darkBg'}>
            <div class="grid-container">
                <div 
                className="experience__page-row"
                style={{
                    display: 'flex', 
                    flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
                >
                    <div className="experience__page-text-wrapper">
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
                <div 
                className="experience__page-row"
                style={{
                    display: 'flex', 
                    flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
                >
                </div>
            </div>
        </div> */}

    </>)
    
}

export default ExperiencePageSection;

import React from 'react';
import './AboutMeHeader.css';


function AboutMeHeader({
    topLine,
    headline,
    img,
    alt,
    imgStart,
}) {
    return (
    <>
        <div className={'aboutMe__header-section'}>
            <div className="grid-container">
                <div className="aboutMe__row">
                        <div className="aboutMe__header-text-wrapper">
                            <div className="aboutMe__top-line">{topLine}</div>
                                <h1 className={'aboutMe__heading'}>{headline}</h1>
                        </div>
                </div>
                <div className="abdoutMe__row ">
                        <div className="aboutMe__header-img-wrapper">
                            <img src={img} alt={alt} className='aboutMe__header-img' />
                        </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default AboutMeHeader;

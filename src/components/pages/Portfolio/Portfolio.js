import React from 'react'
import HeroSection from '../../HeroSection'
import {  homeObjThree } from './Data'

function Portfolio() {
    return (
        <>
            <HeroSection {... homeObjThree}/>;
        </>
    )
};

export default Portfolio;
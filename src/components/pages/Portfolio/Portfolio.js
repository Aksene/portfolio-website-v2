import React from 'react'
import HeroSection from '../../PortfolioPageSection'
import {  portfolioObjOne, portfolioObjTwo, portfolioObjThree, portfolioObjFour, portfolioObjFive, portfolioObjSix } from './Data'
import DualLinkHero from '../../DualLinkHero'
import contactMe from "../../images/contact2.gif"
import project1 from "../../images/projects1.webp"


function Portfolio() {
    return (
        <>
            <HeroSection {... portfolioObjSix}/>;
            <HeroSection {... portfolioObjOne}/>;
            <HeroSection {... portfolioObjTwo}/>;
            <HeroSection {... portfolioObjThree}/>;
            <HeroSection {... portfolioObjFour}/>;
            <HeroSection {... portfolioObjFive}/>;
            <DualLinkHero 
                pic1 = {project1}
                pic2 = {contactMe}
                button1 = "Check out more Projects!"
                button2 = "Contact Me"
                link1 = "//github.com/Aksene?tab=repositories"
                link2 = "/contact-me"/>
        </>
    )
};

export default Portfolio;
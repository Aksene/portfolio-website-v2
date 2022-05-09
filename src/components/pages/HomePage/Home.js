import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo, homeProject3, homeAboutMe4 } from './Data'
import MainHeroSection from '../../MainHeroSection'
import AboutMeHeroSection from '../../AboutMeHeroSection'
import ExperienceHeroSection from '../../ExperienceHeroSection'
import { Helmet } from "react-helmet";



function Home() {
    return (
        <>
            <Helmet>   
                <title>SLAYMASTER - Create Beauty Content That Slays, Hair Tutorial</title>
                <meta 
                    name="description" 
                    content="Build an empowering community for #EVERYONES beauty journey through video, blogging, and other forms of media. CREATE BEAUTY CONTENT THAT SLAYS!" 
                />
            </Helmet>
            <MainHeroSection/>
            <AboutMeHeroSection {...homeAboutMe4} />
            <ExperienceHeroSection/>
            <HeroSection {...homeProject3}/>
            <HeroSection {...homeObjOne}/>
        </>
    )
}

export default Home

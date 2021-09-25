import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo, homeProject3, homeAboutMe4 } from './Data'
import MainHeroSection from '../../MainHeroSection'
import AboutMeHeroSection from '../../AboutMeHeroSection'
import ExperienceHeroSection from '../../ExperienceHeroSection'


function Home() {
    return (
        <>
            <MainHeroSection/>
            <AboutMeHeroSection {...homeAboutMe4} />
            <ExperienceHeroSection/>
            <HeroSection {...homeProject3}/>
            <HeroSection {...homeObjOne}/>
        </>
    )
}

export default Home

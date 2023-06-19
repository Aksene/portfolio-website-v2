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
                <title>Abdou's World</title>
                {/* <meta 
                    name="description" 
                    content="Just testing out the child SEO with Helmet" 
                    data-react-helmet="true"
                />        */}
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

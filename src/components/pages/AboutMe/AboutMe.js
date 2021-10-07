import React from 'react'
import AboutMeBottomHero from '../../AboutMeBottomHero'
import { aboutMeMoreInfo, aboutMeText, homeObjThree, headerInfo } from './Data'
import AboutMeHeader from '../../AboutMeHeader'
import TextfieldMidSection from '../../TextfieldMidSection'
import AboutMeSoftwareSkillsTiles from '../../AboutMeSoftwareSkillsTiles'
import AboutMeToolsTiles from '../../AboutMeToolsTiles'

function AboutMe() {
    return (
        <>
            <AboutMeHeader {...headerInfo} />
            <TextfieldMidSection {...aboutMeText}/>
            <AboutMeSoftwareSkillsTiles/>
            <AboutMeToolsTiles/>
            <AboutMeBottomHero {...aboutMeMoreInfo}/>
        </>
    )
}

export default AboutMe;

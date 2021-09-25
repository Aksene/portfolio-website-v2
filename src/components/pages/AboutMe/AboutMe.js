import React from 'react'
import AboutMeBottomHero from '../../AboutMeBottomHero'
import { aboutMeMoreInfo, aboutMeText, homeObjThree, headerInfo } from './Data'
import AboutMeHeader from '../../AboutMeHeader'
import TextfieldMidSection from '../../TextfieldMidSection'


function AboutMe() {
    return (
        <>
            <AboutMeHeader {...headerInfo} />
            <TextfieldMidSection {...aboutMeText}/>
            <AboutMeBottomHero {...aboutMeMoreInfo}/>
        </>
    )
}

export default AboutMe;

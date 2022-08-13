import React from 'react'
import { experienceObjOne, experienceObjTwo, experienceObjThree } from './Data'
import ExperiencePageHero from '../../ExperiencePageHero'
import ExperiencePageSectionV2 from '../../ExperiencePageSectionV2'
import '../../images/slaymaster-icon-logo.png'



function Experience() {
    return (
        <>
            <ExperiencePageHero/>
            <ExperiencePageSectionV2 {...experienceObjThree}/>
            <ExperiencePageSectionV2 {...experienceObjTwo}/>
            <ExperiencePageSectionV2 {...experienceObjOne}/>
        </>
    )
}

export default Experience;

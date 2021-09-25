import React from 'react'
import { experienceObjOne, experienceObjTwo } from './Data'
import ExperiencePageHero from '../../ExperiencePageHero'
import ExperiencePageSectionV2 from '../../ExperiencePageSectionV2'


function Experience() {
    return (
        <>
            <ExperiencePageHero/>
            <ExperiencePageSectionV2 {...experienceObjOne}/>
            <ExperiencePageSectionV2 {...experienceObjTwo}/>
        </>
    )
}

export default Experience;

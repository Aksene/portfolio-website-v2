import React from 'react'
import './AboutMeSoftwareSkillsTiles.css'
import { 
    SiJson, 
    SiKotlin, 
    SiFirebase,
    SiCplusplus,
} from "react-icons/si";
import { 
    DiJava,
    DiJavascript1,
    DiSwift, 
    DiDjango, 
    DiPython, 
    DiMysql, 
    DiReact, 
    DiCss3Full,  
} from "react-icons/di";


function AboutMeSoftwareSkillsTiles() {
    return (
        <div className="software__skills-section">
            <h1 className="software__skills-section-header">
                Software Skills
            </h1>
            <div className="tile__grid-container">
                <div className="software-col">
                    <DiPython/>
                </div>
                <div className="software-col">
                    <DiJava/>
                </div>
                <div className="software-col">
                    <DiJavascript1/>
                </div>
                <div className="software-col">
                    <DiSwift/>
                </div>
                <div className="software-col">
                    <DiDjango/>
                </div>
                <div className="software-col">
                    <DiMysql/>
                </div>
                <div className="software-col">
                    <SiJson/>
                </div>
                <div className="software-col">
                    <DiReact/>
                </div>
                <div className="software-col">
                    <SiKotlin/>
                </div>
                <div className="software-col">
                    <SiFirebase/>
                </div>
                <div className="software-col">
                    <DiCss3Full/>
                </div>
                <div className="software-col">
                    <SiCplusplus/>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSoftwareSkillsTiles
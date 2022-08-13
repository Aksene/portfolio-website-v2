import React from 'react'
import './AboutMeSoftwareSkillsTiles.css'
import { 
    SiJson, 
    SiFirebase,
    SiTypescript,
    SiGraphql,
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
                    <DiReact/>
                    <h5 className="software-col_title">React.JS</h5>
                </div>
                <div className="software-col">
                    <DiPython/>
                    <h5 className="software-col_title">Python</h5>
                </div>
                <div className="software-col">
                    <DiJava/>
                    <h5 className="software-col_title">Java</h5>
                </div>
                <div className="software-col">
                    <DiJavascript1/>
                    <h5 className="software-col_title">Javascript</h5>
                </div>
                <div className="software-col">
                    <DiSwift/>
                    <h5 className="software-col_title">Swift</h5>
                </div>
                <div className="software-col">
                    <DiDjango/>
                    <h5 className="software-col_title">Django</h5>
                </div>
                <div className="software-col">
                    <DiMysql/>
                    <h5 className="software-col_title">MySQL</h5>
                </div>

                <div className="software-col">
                    <SiGraphql/>
                    <h5 className="software-col_title">GraphQL</h5>
                </div>
                <div className="software-col">
                    <SiJson/>
                    <h5 className="software-col_title">JSON</h5>
                </div>
                <div className="software-col">
                    <SiFirebase/>
                    <h5 className="software-col_title">Firebase</h5>
                </div>
                <div className="software-col">
                    <DiCss3Full/>
                    <h5 className="software-col_title">CSS</h5>
                </div>
                <div className="software-col">
                    <SiTypescript/>
                    <h5 className="software-col_title">Typescript</h5>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSoftwareSkillsTiles
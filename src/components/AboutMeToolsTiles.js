import React from 'react'
import './AboutMeToolsTiles.css'
import { 
    SiWindowsxp, 
    SiLinux, 
    SiApple,
    SiVmware,
    SiAndroidstudio,
    SiIntellijidea,
    SiXcode,
    SiMicrosoftoffice,
    SiVisualstudiocode,
    SiPostman,
    SiAmazonaws,
    SiGithub,
} from "react-icons/si";

function AboutMeToolsTiles() {
    return (
        <div className="tools-section">
            <h1 className="tools-section-header">
                Tools/Environments
            </h1>
            <div className="tools__tile__grid-container">
                <div className="tools-col">
                    <SiWindowsxp/>
                </div>
                <div className="tools-col">
                    <SiLinux/>
                </div>
                <div className="tools-col">
                    <SiApple/>
                </div>
                <div className="tools-col">
                    <SiVmware/>
                </div>
                <div className="tools-col">
                    <SiAmazonaws/>
                </div>
                <div className="tools-col">
                    <SiPostman/>
                </div>
                <div className="tools-col">
                    <SiVisualstudiocode/>
                </div>
                <div className="tools-col">
                    <SiXcode/>
                </div>
                <div className="tools-col">
                    <SiIntellijidea/>
                </div>
                <div className="tools-col">
                    <SiAndroidstudio/>
                </div>
                <div className="tools-col">
                    <SiGithub/>
                </div>
                <div className="tools-col">
                    <SiMicrosoftoffice/>
                </div>
            </div>
        </div>
    )
}

export default AboutMeToolsTiles

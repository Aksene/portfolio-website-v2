import React from 'react'
import './ContactHeroInfo.css'
import { Button } from './Button';
import VideoBackground from './videos/video-4.mp4'


function ContactMeHero() {
    return (
        <div>       
            <div className="containerAboutMe">
                <label for="myname">Name: </label>
                <text for="myname">Abdou Khadre Sene</text>
                <label for="mynumber">Number: </label>
                <text for="mynumber">978-239-5626</text>
                <label for="myemail">E-mail: </label>                
                <text for="myemail">abdouksene@gmail.com</text>
                {/* <text for="information">Please feel free to contact me anytime at your convenience</text> */}

            </div>
        </div>
    )
}

export default ContactMeHero

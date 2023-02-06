import React from 'react'
import './ContactMeHero.css'
import { Button } from './Button';
import logo from './images/[FINAL]ORF-Backwoods_MINI.png'



function ContactMeHero() {
    return (
        <div>
            <video className="contactBackground" src="videos/video-4.mp4" autoPlay playsInline loop muted />
            <text className="contactMe__Title"> Let's Talk!</text>
            <div class="contactMe_row">
                <div class="column1">
                    <form className="container1" action="https://submit-form.com/WxAHMHxW">
                        <label for="name">Name: </label>
                        <input type="text" id="name" name="name" placeholder="Name" required="required" />
                        <label for="number">Number: </label>
                        <input type="text" id="number" name="number" placeholder="Phone Number" required="required" />
                        <label for="email">E-mail: </label>                
                        <input type="email" id="email" name="email" placeholder="Email" required="required" />
                        <label for="message">Message: </label>
                        <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        required="required"
                        ></textarea>
                        <div className="contactMe-submit_container">
                            <Button type="submit" buttonSize='btn--wide' buttonColor='green' className="contactMe__submit-button">
                                Send
                            </Button>
                        </div>
                    </form>
                </div>
                <div class="column2">
                    <div className="container2">
                        <text for="name">Abdou Khadre Sene</text>
                        <label for="number">My Number: </label>
                        <text for="number">978-239-5626</text>
                        <label for="email">E-mail: </label>                
                        <text for="email">abdouksene@gmail.com</text>
                        {/* <text for="desc">Please contact me anytime for a conversation about my experience and background</text> */}
                        <div className="contactMe-logo_container">
                            <img src={logo} className="contactMe-logo" alt="Abdous-world" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

  

export default ContactMeHero

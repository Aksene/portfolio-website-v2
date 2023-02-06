import React from 'react'
import { Link } from 'react-router-dom' 
import './DualLinkHero.css'

const DualLinkHero = ({ pic1, pic2, button1, button2, link1, link2}) => {

    return (
        <div className="dualLink-hero">
            <div className="dualLink-col">
                <img src={pic1} alt="pic1" className='dualLink-hero_img' />
                <div className="dualLink-hero_btn">
                    <a href={link1} target="_blank" rel="noreferrer" >
                        <button type="submit" className="hero__btn"><h1>{button1}</h1></button>
                    </a>
                </div>
            </div>
            <div className="dualLink-col">
                <img src={pic2} alt="pic2" className='dualLink-hero_img' />
                <div className="dualLink-hero_btn">
                    <a href={link2}>
                        <button type="submit" className="hero__btn"><h1>{button2}</h1></button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DualLinkHero

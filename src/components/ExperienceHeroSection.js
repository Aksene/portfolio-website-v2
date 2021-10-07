import React from 'react';
import { Link } from 'react-router-dom';
import { FaDochub,FaCuttlefish,FaAmazon } from 'react-icons/fa';
import { Button } from './Button';
import { IconContext } from  'react-icons/lib';
import './ExperienceHeroSection.css'

function ExperienceHeroSection() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
            <div>
                <div className="experienceHero__section">
                    <div className="experienceHero__wrapper">
                        <h1 className="experienceHero__heading">Experience</h1>
                        <div className="experienceHero__container">
                            <Link to="//www.distaff.app/" className="experienceHero__container-card" target='_blank'>
                                <div className="experienceHero__container-cardInfo">
                                    <div className="hero-icon">
                                        <img src="images/Distaff.jpeg" alt="Distaff" className='experience__hero-img'></img>
                                    </div>
                                    <div className="card-header">
                                    <h3>Distaff</h3>
                                    <h4>iOS Developer</h4>
                                    <p>June 2021 - Present</p>
                                    <ul className="experienceHero__container-features">
                                        <li>Software developement and management of the iOS, website and React app</li>
                                        <li>Managing and making appropriate changes/fixes to the Backend</li>
                                        <li>Consulting with the CEO and Dev team about ways to improve the infrastructure</li>
                                    </ul>
                                </div>
                                </div>
                            </Link>
                            <Link to="//cdxanalytics.com/" className="experienceHero__container-card" target='_blank'>
                                <div className="experienceHero__container-cardInfo">
                                    <div className="hero-icon">
                                    <img src="images/CDX.png" alt="CDX" className='experience__hero-img'></img>
                                    </div>
                                    <h3>CDX Analytics Laboratory</h3>
                                    <h4>IT/Communications</h4>
                                    <p>Febuary - April 2020</p>
                                    <ul className="experienceHero__container-features">
                                        <li>Working with FileMakerPro to develope applications</li>
                                        <li>Perfomed routine IT duties around the office</li>
                                        <li>Managed and updated the database while lightly working on the employee website</li>
                                    </ul>
                                </div>
                            </Link>
                            <Link to="/experience" className="experienceHero__container-card">
                                <div className="experienceHero__container-cardInfo">
                                    <div className="hero-icon">
                                        <FaAmazon/>
                                    </div>
                                    <h3>Previous Jobs</h3>
                                    <h4>Retail at 3 companies</h4>
                                    <p>2014-Present</p>
                                    <ul className="experienceHero__container-features">
                                        <li>Olympia Sports </li>
                                        <li>Marshalls (TJX Company)</li>
                                        <li>Amazon Fresh Associate & Amazon Delivery</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Read more
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
};

export default ExperienceHeroSection;

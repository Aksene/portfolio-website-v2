import React from 'react';
import { Link } from 'react-router-dom';
import { FaDochub, FaCuttlefish, FaAmazon } from 'react-icons/fa';
import { Button } from './Button';
import { IconContext } from  'react-icons/lib';
import './ExperiencePageHero.css'

function ExperiencePageHero() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
            <div>
                <div className="experiencePageHero__section">
                    <div className="experiencePageHero__wrapper">
                        <h1 className="experiencePageHero__heading">Experience</h1>
                        <div className="experiencePageHero__container">
                        <Link to="//goslaymasters.com/" className="experiencePageHero__container-card" target='_blank'>
                                <div className="experiencePageHero__container-cardInfo">
                                    <div className="hero-icon">
                                        <img src="images/slaymaster-icon-logo.png" alt="Slaymasters" className='experience__hero-img'></img>
                                    </div>
                                    <h3>Slaymasters</h3>
                                    <h4>Software Developer</h4>
                                    <p>February 2022 - Present</p>
                                    <ul className="experienceHero__container-features">
                                        <li>• Database, web, application design & maintenance.</li>
                                        <li>• Produce clean, efficient code based on specifications</li>
                                    </ul>
                                    <div className="experiencePageHero__container-buttons">
                                        <Button buttonSize='btn--wide' buttonColor='primary'>
                                            Check Them Out
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                            <Link to="//www.distaff.app/" className="experiencePageHero__container-card" target='_blank'>
                                <div className="experiencePageHero__container-cardInfo">
                                    <div className="icon">
                                        <FaDochub/>
                                    </div>
                                        <h3>Distaff</h3>
                                        <h4>iOS Developer</h4>
                                        <p>June 2021 - Present</p>
                                    <ul className="experiencePageHero__container-features">
                                        <li>• Software developement and management of the iOS, website and React app</li>
                                        <li>• Managing and making appropriate changes/fixes to the Backend</li>
                                        <li>• Consulting with the CEO and Dev team about ways to improve the infrastructure</li>
                                    </ul>
                                    <div className="experiencePageHero__container-buttons">
                                        <Button buttonSize='btn--wide' buttonColor='primary'>
                                            Check Them Out
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                            <Link to="//cdxanalytics.com/" className="experiencePageHero__container-card" target='_blank'>
                                <div className="experiencePageHero__container-cardInfo">
                                    <div className="icon">
                                        <FaCuttlefish/>
                                    </div>
                                    <h3>CDX Analytics Laboratory</h3>
                                    <h4 className="experience-hero_title">IT/Communications</h4>
                                    <p>Febuary - April 2020</p>
                                    <ul className="experiencePageHero__container-features">
                                        <li>• Working with FileMakerPro to develope applications</li>
                                        <li>• Perfomed routine IT duties around the office</li>
                                        <li>• Managed and updated the database while working on the employee website</li>
                                    </ul>
                                    <div className="experiencePageHero__container-buttons">
                                        <Button buttonSize='btn--wide' buttonColor='green'>
                                            Check Them Out
                                        </Button>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
};

export default ExperiencePageHero;

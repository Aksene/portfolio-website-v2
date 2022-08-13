import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { SiBrave } from 'react-icons/si';
import { FaAlignRight, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import  { IconContext } from 'react-icons/lib'
import logo from './images/[FINAL]ORF+Extra-Backwoods_MINI.png'

function Navbar() {
    //Handles the clicks
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [barColor, setBarColor] = useState(true);

    //Toggles the clicks
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const history = useHistory();

    // Will show the button depending on what screen size you are on
    const showButton = () => {
        // 968 in px
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    };

    const showBarColor = () => {
        if(window.location.pathname != "/"){
            setBarColor(false);
        }else{
            setBarColor(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    // Changes the color of the NavBar on page load (listen to path) and when a page is reloaded (onload of page)!
    useEffect(() => {
        history.listen((location) => { 
                showBarColor()
            },

            window.onload = (e) => {
                showBarColor()
            }
        )
    }, [history]);

    

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div 
                className={
                    barColor 
                        ? (click ? "navbar active" : "navbar") 
                        : (click ? "navbar active" : "navbar-non-home")}
                >
                    <div className="navbar-container WholeContainer">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            {/* <SiBrave className="navbar-icon" />
                            Abdou's World */}
                            <img src={logo} className="navbar-logo" alt="Abdous-world" />
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {/* Checks if the menu icon is clicked then changes it  */}
                            {click ? <FaTimes/> : <FaAlignRight/>}
                        </div>
                        {/* Checks if the menu is clicked then shows the appropriate css */}
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about-me' className="nav-links" onClick={closeMobileMenu}>
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/experience' className="nav-links" onClick={closeMobileMenu}>
                                    Experience
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='//github.com/Aksene?tab=repositories' target='_blank' className="nav-links" onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/contact-me" className="btn-link" >
                                        <Button buttonStyle='btn--outline'>
                                            Contact Me
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link to="/contact-me" className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn--outline' 
                                        buttonSize='btn--mobile'>
                                            Contact Me
                                        </Button>
                                    </Link>
                                )}
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;

import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaStackOverflow,
  FaYoutube,
  FaAngellist,
  FaLinkedin
} from 'react-icons/fa';
// import { SiBrave } from 'react-icons/si';
import logo from '../../images/[FINAL]ORF-Backwoods_MINI.png'



function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Pages</h2>
            <Link to='/about-me'>About Me</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='//github.com/Aksene?tab=repositories' target='_blank'>Projects</Link>
            <Link to='/contact-me'>Contact me</Link>
          </div>
          <div className='footer-link-items'>
            <h2>More Links</h2>
            <Link to='//www.upwork.com/freelancers/~01ee9a30b71d50c9f7' target='_blank'>UpWork</Link>
            <Link to='//t.me/abdouksene' target='_blank'>Telegram</Link>
            <Link to='//drive.google.com/file/d/1pA0jCrxYKDe0aQ4SunHg_UXrQ1KQ-XN5/view' target='_blank'>Download My Resume</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              {/* <SiBrave className='navbar-icon' />
              Abdou's World */}
              <img src={logo} className="navbar-logo" alt="Abdous-world" />
            </Link>
          </div>
          <small className='website-rights'>Abdou's World © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//www.linkedin.com/in/abdou-khadre-sene/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='social-icon-link'
              to='//github.com/Aksene?tab=repositories'
              target='_blank'
              aria-label='GitHub'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to='//stackoverflow.com/users/9358262/abdou-k-sene'
              target='_blank'
              aria-label='StackOverflow'
            >
              <FaStackOverflow />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UC-sRoCgfoMZHR2WoGl3U_Wg'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='//angel.co/u/abdou-khadre-sene'
              target='_blank'
              aria-label='Twitter'
            >
              <FaAngellist />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
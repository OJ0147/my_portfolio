import React from 'react'
import '../styles/Navbar.css'
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='nav__bar'>
        <div className="my__logo">
            <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>
                <h1>
                    😎j
                    <span className='dot'>.</span>
                </h1>
            </Link>
        </div>
        <Navigation/>
        
        <Link to="Contact" spy={true} smooth={true} offset={-150} duration={500} className='contact-btn'>Contact Me</Link>
        <MobileNavigation/>
    </nav>
  )
}

export default Navbar
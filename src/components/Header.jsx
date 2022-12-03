import React from 'react'
import '../styles/Header.css'
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { DiGithubFull } from "react-icons/di";
import { CiLinkedin, CiInstagram, CiTwitter } from "react-icons/ci";
import Headimg from "../media/portfolio-img-hat2.png";
import {motion} from "framer-motion";
import {Link} from 'react-scroll'

const Header = () => {

    const animateXFrom = {opacity: 0, x:-300}
    const animateXTo = {opacity:1, x: 0}
    const animateYFrom = {opacity: 0, y:-100}
    const animateYTo = {opacity:1, y: 0}
    const iconFrom = {opacity: 0, y:100}
    const iconTo = {opacity:1, y: 0}
  return (
  
    <header id='Home'>
      
      <div className="header__container">
        
        <div className="header__content">

          <div className="header__intro">
              
            <motion.h1 initial={animateYFrom} animate={animateYTo} transition={{delay: 0.05}}>
              <span className="greetings">
                Hello !
              </span> 
              <br />
                I'm <span className="last__name"> Ojugo </span> <span className="first__name"> Silas</span>
                <br />
                Welcome to my website
            </motion.h1>

            <motion.p initial={animateXFrom} animate={animateXTo} transition={{delay: 0.15}} className="intro-text">
              I am a professional frontend developer, with knowledge in python programming language and Django backend framework.
            </motion.p>

            <motion.div initial={animateXFrom} animate={animateXTo} transition={{delay: 0.30}}className="btn-container">
              <Link to="Contact" spy={true} smooth={true} offset={-100} duration={500} className="btn-orange">Let's Talk <IoPaperPlaneOutline/></Link>
              <Link to="Project" spy={true} smooth={true} offset={-100} duration={500} className="plain-btn">Projects <BsArrowUpRight/></Link>
            </motion.div>

            <motion.div initial={iconFrom} animate={iconTo} transition={{delay: 0.45}} className="socials">
              <a href="https://www.linkedin.com/in/silas-ojugo-240a8a258/" target='_blank' rel="noreferrer" > <CiLinkedin size={'30'} className='social-icons'/> </a>
              <a href="http://www.instagram.com/im_ojhay/" target='_blank' rel="noreferrer" > <CiInstagram size={'30'}  className='social-icons'/> </a>
              <a href="https://twitter.com/SilasOjugo" target='_blank' rel="noreferrer" > <CiTwitter size={'30'}  className='social-icons'/> </a>
              <a href="https://github.com/OJ0147" target='_blank' rel="noreferrer" > <DiGithubFull size={'30'}  className='social-icons'/> </a>
            </motion.div>
          </div>

            {/* header image */}

          <div className="header__image__container">
            <div className="header__image">
              <img src= {Headimg} alt="" />
            </div>
          </div>

        </div>
      </div>
        
     

  
    </header>
  )
}

export default Header
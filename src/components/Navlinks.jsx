import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'



const Navlinks = (props) => {
    const animateFrom = {opacity: 0, x:-300}
    const animateTo = {opacity:1, x: 0}
  return (
    <div className='nav__items'>
        <ul>
            <motion.li 
                initial={animateFrom}  
                animate={animateTo} 
                transition={{delay: 0.05}}>

                <Link to="About" spy={true} smooth={true} offset={-100} duration={500} onClick={() => props.isMobile && props.closeMobileMenu()}>About</Link>

            </motion.li>

            <motion.li 
                initial={animateFrom}  
                animate={animateTo} 
                transition={{delay: 0.10}}>

                <Link to="Project" spy={true} smooth={true} offset={-100} duration={500}onClick={() => props.isMobile && props.closeMobileMenu()}>Projects</Link>

            </motion.li>

            <motion.li 
                initial={animateFrom}  
                animate={animateTo} 
                transition={{delay: 0.20}}>

                <Link to="Technology" spy={true} smooth={true} offset={-150} duration={500}onClick={() => props.isMobile && props.closeMobileMenu()}>Technologies</Link>

            </motion.li>
        </ul>
    </div>
  )
}

export default Navlinks
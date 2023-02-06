import React, { useEffect } from 'react'
import '../styles/Technology.css'
import htmllogo from '../media/html5.png';
import csslogo from '../media/CSS3.png';
import javascriptlogo from '../media/JS.png';
import bootstraplogo from '../media/bootstrap.png';
import tailwindlogo from '../media/Tailwind_CSS.png';
import pythonlogo from '../media/python.png';
import djangologo from '../media/django.png';
import gitlogo from '../media/Git1.png';
import reduxlogo from '../media/redux.png';
import reactlogo from '../media/reactjs.png';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion';


const Technology = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])

    const heartVariants = {
        hover: {
          scale: 1.1,
          transition: {
            duration: 0.3,
            yoyo: Infinity
          }
        }
    };
    const techdata=[
        {
            logo : htmllogo, 
            text : 'html5'
        },
        {
            logo : csslogo, 
            text : 'CSS'
        },
        {
            logo : javascriptlogo, 
            text : 'javaScript'
        },
        {
            logo : bootstraplogo, 
            text : 'bootstrap'
        },
        {
            logo : tailwindlogo, 
            text : 'tailwind'
        },
        {
            logo : reduxlogo, 
            text : 'redux'
        },
        {
            logo : reactlogo, 
            text : 'reactjs'
        },
        {
            logo : gitlogo, 
            text : 'Git'
        },
        {
            logo : pythonlogo, 
            text : 'python'
        },
        {
            logo : djangologo, 
            text : 'Django'
        },
    ]

  return (
    <div className='tech-container' id='Technology' data-aos='fade-up'>

        <div className="tech-box" >
            <h2> Technologies</h2>
            <p>A specialist in web design. A passion of mine is designing and solving problems through web development.</p>
            <p>Here are some technologies i am experienced with</p>
                    
            <div className="tech-grid">
                {techdata.map((tech, index)=>{
                    const{logo, text}=tech
                    return(
                        <motion.div 
                            key={index}
                            className='tech-imgbox'         
                            variants={heartVariants}
                            whileHover="hover">
                                <img src={logo} alt="techlogo" /> 
                                <small>{text} </small>
                        </motion.div>
                    )
                })}
                
            </div>
        </div>

    </div>
    
 )
}

export default Technology
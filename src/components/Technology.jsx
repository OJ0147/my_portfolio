import React from 'react'
import '../styles/Technology.css'
import {FaReact,FaCss3Alt,FaHtml5,FaBootstrap,FaGithub} from 'react-icons/fa'
import {IoLogoJavascript,IoLogoPython} from 'react-icons/io'
import {SiDjango,SiRedux,SiTailwindcss} from 'react-icons/si'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Technology = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
  return (
    <div className='tech-container' id='Technology' data-aos='fade-up'>

        <div className="tech-box" >
            <h2> Technologies</h2>
            <p>A specialist in web design. A passion of mine is designing and solving problems through web development.</p>
            <p>Here are some technologies i am experienced with</p>
                    
            <div className="tech-icons">
                <ul>
                    <li><FaReact size={40} className='techcons'/> <small>React</small></li>
                    <li><IoLogoJavascript size={40} className='techcons'/> <small>Javascript</small></li>
                    <li><FaCss3Alt size={40} className='techcons'/> <small>CSS</small></li>
                    <li><SiTailwindcss size={40} className='techcons'/> <small>Tailwind</small></li>
                    <li><SiRedux size={40} className='techcons'/> <small>Redux</small></li>
                    <li><FaHtml5 size={40} className='techcons'/> <small>Html5</small></li>
                    <li><FaBootstrap size={40} className='techcons'/> <small>Bootstrap</small></li>
                    <li><IoLogoPython size={40} className='techcons'/> <small>Python</small></li>
                    <li><SiDjango size={40} className='techcons'/> <small> Django</small></li>
                    <li><FaGithub size={40} className='techcons'/> <small>Git</small></li>
                </ul>
            </div>

        </div>
    </div>
    
 )
}

export default Technology
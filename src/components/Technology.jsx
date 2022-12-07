import React from 'react'
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
                    
            <div className="tech-grid">
                <div className='tech-imgbox'>
                    <img src={htmllogo} alt="html" />
                    <small>Html5</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={csslogo} alt="css" /> 
                    <small>CSS</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={javascriptlogo} alt="js" /> 
                    <small>Javascript</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={bootstraplogo} alt="bootstrap" />
                    <small>Bootstrap</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={tailwindlogo} alt="tailwind" /> 
                    <small>Tailwind</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={reduxlogo} alt="redux" />
                    <small>Redux</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={reactlogo} alt="react" /> 
                    <small>Reactjs</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={gitlogo} alt="git" /> 
                    <small>Git</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={pythonlogo} alt="python" />
                    <small>Python</small>
                </div>
                <div className='tech-imgbox'>
                    <img src={djangologo} alt="django" /> 
                    <small> Django</small>
                </div>        
            </div>
        </div>

    </div>
    
 )
}

export default Technology
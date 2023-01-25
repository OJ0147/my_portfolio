import React, { useEffect }  from 'react'
import '../styles/About.css'
import Aos from "aos"
import 'aos/dist/aos.css'
import {HiOutlineDocumentSearch} from "react-icons/hi"
import {TbHeartHandshake} from "react-icons/tb"




const About = () => {
    useEffect(() => {
      Aos.init({duration: 2000})
    }, [])
    
    
  return (
    <main className='about-section' id='About'>
        <div data-aos='fade-right' className="about-container">
            <div className="about-image">
            
            </div>

            <div className="about-me">
                <h2>About Me</h2>
                <p className='about-text'>I'm a Frontend developer with background knowledge in react with redux, along with a knack of building applications with utmost efficiency. Strong professional willing to be an asset for an organization.</p>

                <h3>Here are a few highlights:</h3>
                <ul>
                    <li className='highlights'>Interative frontend design</li>
                    <li className='highlights'>React.js</li>
                    <li className='highlights'>Redux to manage state</li>
                    <li className='highlights'>Python programming language</li>
                    <li className='highlights'>Django framework</li>
                    <li className='highlights'>CRUD operation with django</li>
                    <li className='highlights'>Building REST API</li>
                </ul>

                <div className="about-btn">
                    <a href="mailto:silasojugo@gmail.com" className="contact-mail" target='_blank' rel='noreferrer'>Hire Me <TbHeartHandshake/> </a>

                    <a href="/Ojugo-Silas--resume.pdf" download={true} className="resume">Resume <HiOutlineDocumentSearch/> </a>

                </div>
            </div>
        </div>
    </main>
  )
}

export default About
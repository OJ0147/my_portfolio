import React from 'react'
import {data} from '../components/data'
import '../styles/Project.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import {CgArrowTopRight} from 'react-icons/cg'


const Project = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
      }, [])

  return (
    <div id='Project'>
        <div className="project-container">
            <h2>Projects</h2>
            <div className="grid-container">

                {data.map(({id, title, description, site, code,image}) =>(
                    <div data-aos="fade-left" key={id} className='project-card'>
                        <div className="project-btn">
                            <div className='title'>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                            <div className='repo-container'>
                                <a href={code} target='_blank' rel='noreferrer'> <CgArrowTopRight  className='arrow-icon'/></a>
                            </div>
                            
                        </div>
                        
                        
                        <div className="project-img">
                        <a href={site} target='_blank' rel='noreferrer'>  <img src={image} alt="" /></a>
                        </div>

                        
                        
                        
                        {/* <div className="project-btn">
                            <a href={site} target='_blank' rel='noreferrer'>Demo <CgWebsite size={20}/></a>
                            <a href={code} target='_blank' rel='noreferrer'>Github <AiFillGithub size={20}/></a>
                        </div> */}

                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Project
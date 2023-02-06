import React, {useRef} from 'react'
import Footer from './Footer'
import '../styles/Contact.css'
import {BiMessageDots, BiPhoneCall} from 'react-icons/bi'
import {FaWhatsapp} from 'react-icons/fa'
import { CiLinkedin} from "react-icons/ci"; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';




const Contact = () => {


    useEffect(() => {
        Aos.init({duration: 1000})

    }, [])

    const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();
   

    emailjs.sendForm('service_j9wik1z', 'template_akm9ars', form.current, 'ql3fbY8DYQz35DtYm')
      .then((result) => {
        result.text = 'message sent sucessfully!'
       
        toast.success(result.text);
       
          
      }, (error) => {
          console.log(error.text);
          error.text = 'failed to send, try again'
          toast.error(error.text);
      });
      e.target.reset()
  };


  return (
    <div id='Contact'>
        <h3>Contact Me</h3>
        <div className="contact-container" >
            <div className="contact-ops" data-aos='fade_right'>
                <div className="ops">
                    <a href="mailto:silasojugo@gmail.com" target='_blank' rel="noreferrer" ><span><BiMessageDots size={25}/> </span> silasojugo@gmail.com</a>
                </div>
                <div className="ops">
                    <a href="tel:+234-902-532-8516" target='_blank' rel="noreferrer" ><span><BiPhoneCall size={25}/></span>  +234 902 532 8516</a>
                </div>
                <div className="ops">
                    <a href="https://www.linkedin.com/in/silas-ojugo-240a8a258/" target='_blank' rel="noreferrer" > <span><CiLinkedin size={25}/></span>  Linkedin</a>
                </div>
                <div className="ops">
                    <a href="https://wa.me/message/BZI5YW4TYI7JO1" target='_blank' rel="noreferrer" > <span><FaWhatsapp size={25}/></span> Whatsapp</a>
                </div>

            </div>
            <div className="contact-form" data-aos='fade-left'>
                
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-control">
                        <input type="text" name='user_name' placeholder='Name' required/>
                    </div>

                    <div className="form-control">
                        <input type="email" name='user_email' placeholder='Email' required/>
                    </div>

                    <div className="form-control">
                        <textarea name="message" id="message" cols="30" rows="0" placeholder='Message'></textarea>
                    </div>
                    
                    <button type="submit">Send Message</button>
                </form>
                
            </div>
            
        </div>
        <Footer/>
        
    </div>
  )
  
}

export default Contact
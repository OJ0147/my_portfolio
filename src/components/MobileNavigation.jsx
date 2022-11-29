import React from 'react'
import Navlinks from './Navlinks'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState} from 'react';

const MobileNavigation = () => {
    const [open, setOpen] =useState(false)


    const hamburgerIcon = <FaBars className='hamburger'  size={'40px'} 
                           onClick={()=> setOpen(!open)}/>
    const closeIcon = <FaTimes className='hamburger' size={'40px'} 
                           onClick={()=> setOpen(!open)}/>

    const closeMobileMenu= () => setOpen(false);

  return (
    <nav className='mobile__nav'>
        {open? closeIcon: hamburgerIcon}
        {open && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  )
}

export default MobileNavigation
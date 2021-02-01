import React, { useState } from 'react'
import Fwlogo from '../images/fw_logo.png'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Divide as Hamburger } from 'hamburger-react'
import { NavHashLink } from 'react-router-hash-link'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)
  const [isOpen, setOpen] = useState(false)

  return (  
    <header className="App-header">      

      <nav className="navigation">
      <div className="blur"></div>
        <div className="logo">
        <NavHashLink to="/#home" style={{ textDecoration: 'none' }}><img src={Fwlogo} alt="fw"/></NavHashLink>
        </div>        
        {/* <div role="button" className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={() => setIsActive(!isActive)}>
          <GiHamburgerMenu />
        </div> */}
{/* <div> */}
        <Hamburger 
        toggled={isOpen} toggle={setOpen} 
        color="#22262A" label="Show menu"
        // onToggle={toggled => {
        //   if (toggled) {
        //      // open a menu
        //   } else {
        //      // close a menu
        //   }
        />
        {/* </div>    */}
        {/* {isOpen && */}
        <ul className={isOpen ? '' : 'hide'}>
          <div><li><NavHashLink exact to="/#home">Home</NavHashLink></li></div>         
          <div><li><NavHashLink to="/#about">About</NavHashLink></li></div>
          <div><li><NavHashLink to="/#skills">Skills</NavHashLink></li></div>
          <div><li><NavHashLink to="/#projects">Projects</NavHashLink></li></div>
          <div><li><NavHashLink to="/#contact">Contact</NavHashLink></li></div>
          <div><li><NavLink exact to="/podcast" >Podcast</NavLink></li></div>
          {/* <div className='podcast-button'>
            <li>
            <a 
            href='/podcast' 
            className={isActive ? 'active' : ''} 
            onClick={() => setIsActive(true)}>
              Podcast
              </a>
            </li>
          </div> */}
        </ul>
        {/* } */}
      </nav>
    </header>
  )
}

export default Navbar

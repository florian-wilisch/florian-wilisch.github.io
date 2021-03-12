import React, { useState, useRef } from 'react'
import Fwlogo from '../images/fw_logo.png'
import { NavLink } from 'react-router-dom'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { Divide as Hamburger } from 'hamburger-react'
import { NavHashLink } from 'react-router-hash-link'
import useSmoothScroll from 'react-smooth-scroll-hook'

const Navbar = () => {

  const [isActive, setIsActive] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [isPodcast, setPodcast] = useState(false)

  // console.log(isPodcast)
  // console.log(isActive)

  const ref = useRef(document.documentElement)
 
  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 70,
    direction: 'y',
  });

  // const activeNav = () => {
  //   // console.log(window.scrollY)
  //   if (window.scrollY > 1150 ) {
  //     setIsActive('about')
  //   } else {
  //     setIsActive(false)
  //   }
  // }

  // window.addEventListener('scroll', activeNav)


  // const inputRef = useRef()

  function navAction(section) {
    setPodcast(false)
    scrollTo(section)
    setIsActive(section)
  }

  function checkPodcast() {
    if (!isPodcast) {
      setPodcast(true)
    }
    console.log(isPodcast)
  }

  return (  
    <header className="App-header">      

      <nav className="navigation">
      <div className="blur"></div>
        { !isPodcast &&
        <div className="logo" onClick={() => scrollTo('#home')}>
          <img src={Fwlogo} alt="fw"/>
        </div>}
        { isPodcast &&
        <div className="logo">
          <NavHashLink to="/#home" style={{ textDecoration: 'none' }}>
            <img src={Fwlogo} alt="fw"/>
          </NavHashLink>
        </div>}       

        <Hamburger toggled={isOpen} toggle={setOpen} color="#22262A" label="Show menu"/>

        <ul className={isOpen ? '' : 'hide'}>
          
          { !isPodcast && <>
          {/* <div><li><NavHashLink exact to="/#home">Home</NavHashLink></li></div>          */}
          <div onClick={() => navAction('#about')} className={ (isActive === '#about') ? `active` : '' }><li>About</li></div>
          <div onClick={() => navAction('#skills')} className={ (isActive === '#skills') ? `active` : '' }><li>Skills</li></div>
          <div onClick={() => navAction('#projects')} className={ (isActive === '#projects') ? `active` : '' }><li>Projects</li></div>
          <div onClick={() => navAction('#contact')} className={ (isActive === '#contact') ? `active` : '' }><li>Contact</li></div>
          <div><li><NavLink exact to="/podcast" onClick={() => setPodcast(true)}>Podcast</NavLink></li></div>
          </>}
          
          { isPodcast && <>
          <div ><li><NavHashLink to="/#about" onClick={() => navAction('#about')}>About</NavHashLink></li></div>
          <div><li><NavHashLink to="/#skills" onClick={() => navAction('#skills')}>Skills</NavHashLink></li></div>
          <div><li><NavHashLink to="/#projects" onClick={() => navAction('#projects')}>Projects</NavHashLink></li></div>
          <div><li><NavHashLink to="/#contact" onClick={() => navAction('#contact')}>Contact</NavHashLink></li></div>
          <div className='active'><li><NavLink exact to="/podcast" onClick={() => checkPodcast()}>Podcast</NavLink></li></div>
          </>}

        </ul>

      </nav>
    </header>
  )
}

export default Navbar

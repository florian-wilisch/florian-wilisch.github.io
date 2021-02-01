import HeroImg from '../images/hero_img.png'
import { BsChevronCompactDown } from 'react-icons/bs'
import { Parallax, Background } from "react-parallax"
// import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

const Hero = () => {
  // console.log(React.version) 

  return (
  <div className="hero" id='home'>
    <div className="move">
      <img src={HeroImg} className="move" alt=""/>
    </div>
    <p>Full Stack Developer & Product Expert</p>
    <button className='nacked'>
      <a href="#about"><BsChevronCompactDown /></a>
    </button>
</div>
  )
}

export default Hero
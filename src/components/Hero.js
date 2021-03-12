import HeroImg from '../images/hero_img.png'
import { BsChevronCompactDown } from 'react-icons/bs'
import { Parallax, Background } from "react-parallax"
// import LocomotiveScroll from 'locomotive-scroll'
import React , { useRef } from 'react'
import useSmoothScroll from 'react-smooth-scroll-hook'

// import smoothscroll from 'smoothscroll-polyfill'

const Hero = () => {

  const ref = useRef(document.documentElement)
 
  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 70,
    direction: 'y',
  });


  return (
    <div className="hero" id='home'>
      <div className="move">
        <img src={HeroImg} className="move" alt="florian wilisch design"/>
      </div>
      <p>Product Expert & Full Stack Developer</p>
      <button className='nacked' onClick={() => scrollTo('#about')}>
        {/* <a  href="#about"> */}
          <BsChevronCompactDown />
          {/* </a> */}
      </button>
    </div>
  )
}

export default Hero
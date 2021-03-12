import React, { useState } from 'react'
import Pacman from '../images/scr_pacman.png'
import MusicWW from '../images/scr_music_worldwide.png'
import Rmbr from '../images/scr_rmbr.png'
import Greenworld from '../images/scr_greenworld.png'
import { Link } from 'react-router-dom'
import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiGithubBadge, DiTerminal, DiResponsive, DiNpm, DiVisualstudio, DiJavascript, DiGithub } from "react-icons/di"
import { SiFlask, SiPostgresql, SiHeroku, SiNetlify, SiSlack, SiZoom, SiBabel, SiBulma, SiAuth0 } from "react-icons/si"
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { CgArrowsExchange } from 'react-icons/cg'
import BusinessProjects from './contentData/BusinessProjects'
import TechProjects from './contentData/TechProjects'
import Icons from './contentData/Icons'

const Projects = () => {

  const [isActive, setIsActive] = useState('Business')

  function filterAndRenderIcons(iconName, section) {
    const filteredItem = Icons[section].filter(item => item.name === iconName)
    const SelectIcon = filteredItem[0].icon
    return <SelectIcon/>
  }

  function createMarkup(index, component) {
    return {__html: component[index].description};
  }


  return (
    <div id='projects'>
      <h2>Projects</h2>

      <div className='selection'>     
        <div  className='options'>
          <button 
            className={`nacked ${ (isActive !== 'Engineering') ? "active" : ''}`}
            onClick={() => {setIsActive('Business')}}
            >Business</button>
          <CgArrowsExchange/>
          <button 
            className={`nacked ${ (isActive === 'Engineering') ? "active" : ''}`}
            onClick={() => {setIsActive('Engineering')}}
            >Software Engineering</button>
          
        </div>        
      </div>

      { (isActive === 'Business') && <div className="bizProjects">
          
          {BusinessProjects.map(entry => {
            return <div className='container'>
              { entry.image.imgLoc &&
              <div className="image">
                <img src={entry.image.imgLoc} alt={entry.image.alt}/>
              </div>}
              <div className="description">
                <h3>{entry.title}</h3>
                <h5>{entry.company} | {entry.year}</h5>
                <div className="icons">
                  {entry.tags.map(tag => {                 
                    return <div>
                      {filterAndRenderIcons(tag, 'business')}
                      <p>{tag}</p>
                    </div>
                  })}
                </div>
                <div dangerouslySetInnerHTML={createMarkup(BusinessProjects.indexOf(entry), BusinessProjects)} className='nomargin'/>
                { entry.links && <div className="buttons">
                  {entry.links.map(link => {                 
                    return <a href={link.url} target="_blank" rel="noreferrer">
                    <button className={link.class}>{link.text}</button></a>
                  })}
                </div> }
              </div>
            </div>
          })}    
        </div> 
      }

      { (isActive === 'Engineering') && <div className="engProjects">
      
        {TechProjects.map(entry => {
          return <div className='container'>
            <div className="image">
              <img src={entry.image.imgLoc} 
              // TechProjects[TechProjects.indexOf(entry)]
                alt={entry.image.alt}/>
            </div>
            <div className="description">
              <h3>{entry.title}</h3>
              <h5>{entry.type} | {entry.length}</h5>
              <div className="icons">
                {entry.tags.map(tag => {                 
                  return <div>
                    {filterAndRenderIcons(tag, 'tech')}                 
                    <p>{tag}</p>
                  </div>
                })}
              </div>
              <div dangerouslySetInnerHTML={createMarkup(TechProjects.indexOf(entry), TechProjects)} className='nomargin'/>
              <div className="buttons">
                {entry.links.map(link => {                 
                    return <a href={link.url} target="_blank" rel="noreferrer">
                    <button className={link.class}>{link.text}</button></a>
                })}
              </div>
            </div>
          </div>
        })}    
      </div> }




</div>
  )
}

export default Projects
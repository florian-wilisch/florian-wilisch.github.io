import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiGithubBadge, DiTerminal, DiResponsive, DiNpm, DiVisualstudio } from "react-icons/di"
import { SiFlask, SiPostgresql, SiHeroku, SiNetlify, SiSlack, SiZoom, SiBabel, SiBulma, SiAuth0 } from "react-icons/si"
import { BiDevices } from 'react-icons/bi'
import { RiAdvertisementLine } from 'react-icons/ri'
import { FaProjectDiagram } from 'react-icons/fa'
import { IoPeopleOutline } from "react-icons/io5"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { faAd, faUserFriends, faTasks, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import Icons from './contentData/Icons'

const Skills = () => {

  function renderIcon(index, section) {
    const ComponentToRender = Icons[section][index].icon
    return <ComponentToRender/>
  }


  return (
    <div id='skills'>
      
      <h2>Business Skills</h2>

      <div className='skills'>
        
        {Icons.business.map(item => {
          return <div>
            {renderIcon(Icons.business.indexOf(item), 'business')}
            <p>{item.name}</p>
          </div>  
        })}

      </div>
  
      <h2>Tech Skills</h2>
      
      <div className="skills">

        {Icons.tech.map(item => {
          return <div>
            {renderIcon(Icons.tech.indexOf(item), 'tech')}
            <p>{item.name}</p>
          </div>  
        })}

      </div>

    </div>

  )
}

export default Skills
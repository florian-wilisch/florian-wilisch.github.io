// import FwImage from '../images/florian_wilisch_photo.jpg'
// import React from 'react'
import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiGithubBadge, DiTerminal, DiResponsive, DiNpm, DiVisualstudio } from "react-icons/di"
import { SiFlask, SiPostgresql, SiHeroku, SiNetlify, SiSlack, SiZoom, SiBabel, SiBulma, SiAuth0 } from "react-icons/si"
import { BiDevices } from 'react-icons/bi'
import { RiAdvertisementLine } from 'react-icons/ri'
import { FaProjectDiagram } from 'react-icons/fa'
import { IoPeopleOutline } from "react-icons/io5"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { faAd, faUserFriends, faTasks, faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {

  return (
<div id='skills'>
  <h2>Tech Skills</h2>
  {/* <div className='about-container'> 
 */}

    <div className="skills">
        <div>
          <DiJsBadge />
          <p>JavaScript</p>
        </div>
        <div>
          <DiReact />
          <p>React</p>
        </div>
        <div>
          <DiPython />
          <p>Python</p>
        </div>
        <div>
          <DiHtml5 />
          <p>HTML</p>
        </div>
        <div>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div>
          <DiSass />
          <p>Sass</p>
        </div>

        <div>
          <DiNodejsSmall />
          <p>Node.js</p>
        </div>
        <div>
          <DiNpm />
          <p>NPM</p>
        </div>
        <div>
          <SiBabel />
          <p>Babel</p>
        </div>
        <div>
          <DiMongodb />
          <p>MongoDB</p>
        </div>

        <div>
          <SiFlask />
          <p>Flask</p>
        </div>
        <div>
          <SiPostgresql />
          <p>PostgreSQL</p>
        </div>
        <div>
          <DiVisualstudio />
          <p>VS Code</p>
        </div>
        <div>
          <DiGit />
          <p>Git</p>
        </div>
        <div>
          <DiGithubBadge />
          <p>GitHub</p>
        </div>
        <div>
          <DiTerminal />
          <p>CLI</p>
        </div>
        <div>
          <SiHeroku />
          <p>Heroku</p>
        </div>
        <div>
          <SiBulma />
          <p>Bulma</p>
        </div>
        <div>
          <SiAuth0 />
          <p>Authentication</p>
        </div>
        <div>
          <BiDevices />
          <p>Responsive<br></br>Design</p>
        </div>
      </div>

        <h2>Business Skills</h2>

          <div className='skills'>
            <div>
            <RiAdvertisementLine />
            {/* <FontAwesomeIcon icon={faAd} /> */}
              <p>Digital<br></br>Martketing</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faAppStoreIos} />
              <p>Apps</p>
            </div>
            <div>
            <FaProjectDiagram />
            {/* <FontAwesomeIcon icon={faTasks} /> */}
              <p>Project<br></br>Management</p>
            </div>
            <div>
            <IoPeopleOutline />
            {/* <FontAwesomeIcon icon={faUserFriends} /> */}
              <p>Team<br></br>Management</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faCompactDisc} />
              <p>Entertainment<br></br>Industry</p>
            </div>
          </div>
  </div>
// </div>
  )
}

export default Skills
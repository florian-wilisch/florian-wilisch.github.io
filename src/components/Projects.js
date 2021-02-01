import Pacman from '../images/scr_pacman.png'
import MusicWW from '../images/scr_music_worldwide.png'
import Rmbr from '../images/scr_rmbr.png'
import Greenworld from '../images/scr_greenworld.png'
import { Link } from 'react-router-dom'
import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiGithubBadge, DiTerminal, DiResponsive, DiNpm, DiVisualstudio, DiJavascript, DiGithub } from "react-icons/di"
import { SiFlask, SiPostgresql, SiHeroku, SiNetlify, SiSlack, SiZoom, SiBabel, SiBulma, SiAuth0 } from "react-icons/si"

const Projects = () => {

  return (
<div id='projects'>
  <h2>Projects</h2>
  <div className='container'> 
    <div className="image">
      <img src={Rmbr} alt=""/>
      </div>
    <div className="description">
      <h3>rmbr</h3>
      <h5>Pair project | One week</h5>
      <div className="icons">
      <div>
        <DiReact />
        <p>React</p>
      </div>
      <div>
        <DiPython />
        <p>Python</p>
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
          <DiSass />
          <p>Sass</p>
        </div>
        <div>
          <SiBulma />
          <p>Bulma</p>
        </div>
    </div>
    <p>Personal assistant that helps remember birthdays and gift wishes — with text and voice input.</p>
    <p>We leveraged the Google Native Language API to analyse the input and wether a name, date and/or wish was mentioned. These were then saved in our SQL database.</p>
    <p>After  collaborating on the language analysis algorithm, I focused on the contacts and edit pages, as well as the frontend design.</p>

    <div className="buttons">
        <a href="https://flows-project-4.herokuapp.com/" target="_blank">
          <button>Website</button>
        </a>
      <a href='https://github.com/florian-wilisch/project-4' target="_blank"><button className='green'>GitHub</button></a>
    </div>
    </div>
  </div>

  <div className='container'> 
    <div className="image">
      <img src={Greenworld} alt=""/>
      </div>
    <div className="description">
      <h3>GreenWorld</h3>
      <h5>Group of 4 | One week</h5>
      <div className="icons">
      <div>
        <DiReact />
        <p>React</p>
      </div>
      <div>
        <DiMongodb />
        <p>MongoDB</p>
      </div>
      <div>
        <DiNodejsSmall />
        <p>Node.js</p>
      </div>
      <div>
        <DiGithubBadge />
        <p>GitHub</p>
      </div>
      <div>
        <DiSass />
        <p>Sass</p>
      </div>
      <div>
          <SiBulma />
          <p>Bulma</p>
        </div>
    </div>
    <p>Platform to help Londoners live a greener life by exploring and listing businesses that help reduce carbon footprint.</p>
    <p>Split between solo and pair programming.</p>
    <p>I extensively worked on the seeding mechanics, running our local seed items through an external API, and adding 850 external entries. Furthermore I was responsible for the AddLocation page Built and the necessary 2-step POST process, to pull coordinates via one API before posting items to our own database.</p>
    <div className="buttons">
      <a href='https://flows-project-3.herokuapp.com/' target="_blank"><button>Website</button></a>
      <a href='https://github.com/florian-wilisch/project-3' target="_blank"><button className='green'>GitHub</button></a>
    </div>
    </div>
  </div>

  <div className='container'> 
    <div className="image">
      <img src={MusicWW} alt=""/>
      </div>
    <div className="description">
      <h3>Music Worldwide</h3>
      <h5>Pair Project | Two Days</h5>
      <div className="icons">
        <div>
          <DiReact />
          <p>React</p>
        </div>
        <div>
          <SiBulma />
          <p>Bulma</p>
        </div>
        <div>
          <DiVisualstudio />
          <p>VS Code</p>
        </div>
    </div>
    <p>Music site to discover music charts and artists from around the world.</p>
    <p>Split between solo and pair programming.</p>
    <p>I focused on displaying the charts dynamically after GETting data via the Deezer API. Furthermore I worked on the audio snippet functionality.</p>

    <div className="buttons">
      <a href='https://florian-wilisch.github.io/project-2' target="_blank"><button>Website</button></a>
      <a href='https://github.com/florian-wilisch/project-2' target="_blank"><button className='green'>GitHub</button></a>
    </div>
    </div>
  </div>

  <div className='container'> 
    <div className="image">
      <img src={Pacman} alt=""/>
      </div>
    <div className="description">
      <h3>Pac-Man</h3>
      <h5>Solo Project | One week</h5>
      <div className="icons">
        <div>
          <DiJavascript />
          <p>JavaScript</p>
        </div>
        <div>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div>
          <DiHtml5 />
          <p>HTML</p>
        </div>
        <div>
          <DiVisualstudio />
          <p>VS Code</p>
        </div>
      </div>
    <p>We were given a choice between 10 grid-based games and Pac-Man was in the hardest tier.</p>
    <p>I implemented a pathfinding algorithm and then tweaked it to give each ghost a different "character". Here I made extensive use of 'toggle' or 'counter' variables, effectively to control state (before having learnt React).</p>

    <div className="buttons">
      <a href='https://florian-wilisch.github.io/project-1' target="_blank"><button>Website</button></a>
      <a href='https://github.com/florian-wilisch/project-1' target="_blank"><button className='green'>GitHub</button></a>
    </div>
    </div>
  </div>

</div>
  )
}

export default Projects

{/* <div>
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
        </div> */}
import { DiJsBadge, DiHtml5, DiCss3, DiSass, DiReact, DiNodejsSmall, DiMongodb, DiPython, DiGit, DiGithubBadge, DiTerminal, DiNpm, DiVisualstudio } from "react-icons/di"
import { SiFlask, SiPostgresql, SiHeroku, SiBabel, SiBulma, SiAuth0 } from "react-icons/si"
import { BiDevices, BiDirections } from 'react-icons/bi'
import { GoGraph } from 'react-icons/go'
import { BsBriefcase } from 'react-icons/bs'
import { FaRegHandshake, FaCompactDisc, FaAppStoreIos, FaProjectDiagram } from 'react-icons/fa'
// import { GrLanguage } from 'react-icons/gr'
import { MdLanguage } from 'react-icons/md'
import { RiAdvertisementLine } from 'react-icons/ri'
import { IoPeopleOutline } from "react-icons/io5"


const Icons = 
  {
    tech: [
      {
        name: 'JavaScript',
        icon: DiJsBadge
      },
      {
        name: 'React',
        icon: DiReact
      },
      {
        name: 'Python',
        icon: DiPython
      },
      {
        name: 'HTML',
        icon: DiHtml5
      },
      {
        name: 'CSS',
        icon: DiCss3
      },
      {
        name: 'Sass',
        icon: DiSass
      },
      {
        name: 'Node.js',
        icon: DiNodejsSmall
      },
      {
        name: 'NPM',
        icon: DiNpm
      },
      {
        name: 'Babel',
        icon: SiBabel
      },
      {
        name: 'MongoDB',
        icon: DiMongodb
      },
      {
        name: 'Flask',
        icon: SiFlask
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql
      },
      {
        name: 'VS Code',
        icon: DiVisualstudio
      },
      {
        name: 'Git',
        icon: DiGit
      },
      {
        name: 'GitHub',
        icon: DiGithubBadge
      },  
      {
        name: 'CLI',
        icon: DiTerminal
      },  
      {
        name: 'Heroku',
        icon: SiHeroku
      },  
      {
        name: 'Bulma',
        icon: SiBulma
      },
      {
        name: 'Authentication',
        icon: SiAuth0
      },  
      {
        name: 'Responsive Design',
        icon: BiDevices
      }
    ],
    business: [
      {
        name: 'Marketing',
        icon: RiAdvertisementLine
      },
      {
        name: 'App Business',
        icon: FaAppStoreIos
      },
      {
        name: 'Project Management',
        icon: FaProjectDiagram
      },
      {
        name: 'Team Management',
        icon: IoPeopleOutline
      },
      {
        name: 'Entertainment Industry',
        icon: FaCompactDisc
      },
      {
        name: 'Product Management',
        icon: BiDirections
      },
      {
        name: 'Data Analysis',
        icon: GoGraph
      },
      {
        name: 'Entrepreneurship',
        icon: BsBriefcase
      },
      {
        name: 'Partnerships',
        icon: FaRegHandshake
      },
      {
        name: 'Languages',
        icon: MdLanguage
      }
    ]  
  }

export default Icons
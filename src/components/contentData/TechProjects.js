import Pacman from '../../images/scr_pacman.png'
import MusicWW from '../../images/scr_music_worldwide.png'
import Rmbr from '../../images/scr_rmbr.png'
import Greenworld from '../../images/scr_greenworld.png'


const TechProjects = [
  {
    title: 'rmbr',
    type: 'Pair project',
    length: 'One week',
    description: `<p>Personal assistant that helps remember birthdays and gift wishes — with text and voice input.</p>
    <p>We leveraged the Google Native Language API to analyse the input and wether a name, date and/or wish was mentioned. These were then saved in our SQL database.</p>
    <p>After  collaborating on the language analysis algorithm, I focused on the contacts and edit pages, as well as the frontend design.</p>`,
    tags:
      [ 'React', 'Python', 'Flask', 'PostgreSQL', 'Sass', 'Bulma' ],
    image:
      {
        alt: 'rmbr image',
        imgLoc: Rmbr
      },
    links:
      [
        {
          text: 'Website',
          url: 'https://flows-project-4.herokuapp.com/',
        },
        {
          text: 'GitHub',
          url: 'https://github.com/florian-wilisch/project-4',
          class: 'green'
        }
      ]
  },
  {
    title: 'GreenWorld',
    type: 'Group of 4',
    length: 'One week',
    description: `<p>Platform to help Londoners live a greener life by exploring and listing businesses that help reduce carbon footprint.</p>
    <p>Split between solo and pair programming.</p>
    <p>I extensively worked on the seeding mechanics, running our local seed items through an external API, and adding 850 external entries. Furthermore, I was responsible for the AddLocation page Built and the necessary 2-step POST process, to pull coordinates via one API before posting items to our own database.</p>`,
    tags:
      [ 'React', 'MongoDB', 'Node.js', 'GitHub', 'Sass', 'Bulma' ],
    image:
      {
        alt: 'Greenworld image',
        imgLoc: Greenworld
      },
    links:
      [
        {
          text: 'Website',
          url: 'https://flows-project-3.herokuapp.com/'
        },
        {
          text: 'GitHub',
          url: 'https://github.com/florian-wilisch/project-3',
          class: 'green'
        }
      ]
  },
  {
    title: 'Music Worldwide',
    type: 'Pair Project',
    length: 'Two Days',
    description: `<p>We were given a choice between 10 grid-based games and Pac-Man was in the hardest tier.</p>
    <p>I implemented a pathfinding algorithm and then tweaked it to give each ghost a different "character". Here, I made extensive use of 'toggle' or 'counter' variables, effectively to control state (before having learnt React).</p>`,
    tags:
      [ 'React', 'Bulma', 'VS Code' ],
    image:
      {
        alt: 'Music Worldwide image',
        imgLoc: MusicWW
      },
    links:
      [
        {
          text: 'Website',
          url: 'https://florian-wilisch.github.io/project-2'
        },
        {
          text: 'GitHub',
          url: 'https://florian.wilisch.org/project-2',
          class: 'green'
        }
      ]
  },
  {
    title: 'Pac-Man',
    type: 'Solo Project',
    length: 'One week',
    description: `<p>We were asked to recreate one of 10 classic grid-based games. Pac-Man was amongst the hardest.</p>
    <p>I implemented a pathfinding algorithm and then tweaked it to give each ghost a different "character". Here, I made extensive use of 'toggle' or 'counter' variables, effectively to control state (before having learnt React).</p>`,
    tags:
      [ 'JavaScript', 'CSS', 'HTML', 'VS Code' ],
    image:
      {
        alt: 'Pacman image',
        imgLoc: Pacman
      },
    links:
      [
        {
          text: 'Website',
          url: 'https://florian-wilisch.github.io/project-1'
        },
        {
          text: 'GitHub',
          url: 'https://florian.wilisch.org/project-1',
          class: 'green'
        }
      ]
  },
]

export default TechProjects
import FwImage from '../images/florian_wilisch_photo.jpg'

const About = () => {

  return (
<div id='about'>
  <h2>About Me</h2>
  <div className='container'> 
    <div className="intro">
      {/* <h4>Full Stack Developer & Product Expert</h4> */}
      <p>Hello! I'm Florian Wilisch. I’m a Software Engineer with a strong background in marketing and product.</p>
      <p>While working many years for Apple and start-ups, I always had a deep interest in the entrepreneurial and technical sides of things. I therefore decided to expand my skill set by training as a software engineer.</p>
      <p>I’m passionate about the music and entertainment industries, love to be around people and thrive to bring products forward.
      </p>
      </div>
    <div className="image">
      <img src={FwImage} alt=""/>
    </div>
  </div>
</div>
  )
}

export default About
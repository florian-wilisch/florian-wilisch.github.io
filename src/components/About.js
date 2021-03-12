import FwImage from '../images/florian_wilisch_photo.jpg'

const About = () => {  

  return (<>
<div id='about'>
  <h2>About Me</h2>
  <div className='container'> 
    <div className="intro">
      {/* <h4>Full Stack Developer & Product Expert</h4> */}
      <p>Welcome to my site! I'm Florian Wilisch. </p>
      <p>
        I’m a Music Industry professional and trained Software Engineer. I've got a strong background in marketing and product from my time at Apple and various start-ups.</p>
      <p>I'm an entrepreneur at heart and try to apply that in every environment I move in.
        {/* While working many years for Apple and start-ups, I always had a deep interest in the entrepreneurial and technical sides of things. I therefore decided to expand my skill set by training as a software engineer. */}
        </p>
      <p>On this site you'll find some of the things I've done and stuff I'm interested in. Check my LinkedIn to see what I'm currently working on, or send me a message!
        {/* I’m passionate about the music and entertainment industries, love to be around people and thrive to bring products forward. */}
      </p>
      </div>
    <div className="image">
      <img src={FwImage} alt=""/>
    </div>
  </div>
</div>
</>
  )
}

export default About
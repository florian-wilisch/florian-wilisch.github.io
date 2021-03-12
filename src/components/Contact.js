import React, { useState } from 'react'
import { FaPodcast } from 'react-icons/fa'
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { DiGithubBadge } from "react-icons/di"


const Contact = () => {

  const [open, setOpen] = useState(false)

  return (
    <div id='contact'>
      <h2>Contact</h2>
      
      <div className="icons">
        <div onClick={() => {setOpen(!open)}}>
          <a>
            <AiOutlineMail />
            <p>eMail</p>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/florianwilisch/" target="_blank"><AiOutlineLinkedin />
          <p>LinkedIn</p></a>
        </div>
        <div>
          <a href="https://github.com/florian-wilisch" target="_blank"><DiGithubBadge />
          <p>GitHub</p></a>
        </div>
        <div>
          <a href="https://pods.link/3qcn29jkxq48v" target="_blank"><FaPodcast />
          <p>Music<br></br>Innovation<br></br>Podcast</p></a>
        </div>
      </div>

      <div className={ open ? 'contact open' : 'contact' }> 
        <form action="https://formspree.io/f/mzbkoyjv" method="post">
          <div>
            <div className="label">
              <label for="name">Name</label>
            </div>
            <input name="Name" id="name" type="text" placeholder='John Doe'></input>
          </div>
          <div>
            <div className="label">
              <label for="email">Email</label>
            </div>
            <input name="Email" id="email" type="email" placeholder='john@gmail.com'></input>
          </div>
          <div>
            <div className="label"><label>Message</label></div>
            <textarea name="message" placeholder={`Let\'s work together...`}></textarea>
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div> 

    </div>
  )
}

export default Contact
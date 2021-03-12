import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
import MIP from '../images/Music_Innovation_Podcast_Cover.png'

const Podcast = () => {

  // const appleStyle = {
  //   width: '100%',
  //   maxWidth: '660px',
  //   overflow: 'hidden',
  //   borderRadius: '10px',
  //   // background: 'transparent',
  // }

  // const odesliStyle = {
  //   // position:'absolute',
  //   top: 0,
  //   left: 0,
  //   background: 'black',
  // }

  const [display, setDisplay] = useState(false)

  setTimeout(() => {
    setDisplay(true)
    console.log('now!')
  }, 1000)


  return ( <>   
    <div id='podcast'>
      <div className="title">
        <h2>Music Innovation Podcast</h2>
        <p>by Florian Wilisch</p>
      </div>
  
      <div className="image">
        <img src={MIP} alt=""/>
      </div>
      <div className="intro">

        <p>If you like the music industry, if you like tech, if you like start-ups. Then this is for you!</p>
        <p>
        In this podcast, Florian Wilisch interviews innovators in the music industry. From tech entrepreneurs building new tools and experiences, to musicians and label bosses doing things in new ways.<br></br>
        This podcast is designed to inspire and encourage anyone who is or wants to be part of this exciting industry.</p>
        <p>Past guests include:</p>
        <ul><b>
          <li>Patrick Mushatsi-Kareba (CEO Sony Music GSA)</li> 
          <li>Fabrice Sergent (CEO Bandsintown)</li>  
          <li>Rafe Offer (CEO & Founder Sofar Sounds)</li>  
          <li>Benji Rogers (Pledge Music, Blockchain Music...)</li> 
          <li>Simon from DJ-duo andhim</li> </b>
        </ul>
        <p>and more...</p>
        <p>If you like the podcast, please leave a rating! It helps a lot to get it discovered by others.</p>
      </div>
      
      { display && <>
      <h5>Listen and subscribe here:</h5>

      <iframe className='odesliFrame' width="100%" height="52" title='subscribe' src="https://embed.song.link/?url=https%3A%2F%2Fpods.link%2F3QCn29jkxq48V&theme=light" frameBorder="0" allowFullScreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"></iframe>

      

      {/* <iframe className='anchorPlayer' src="https://anchor.fm/musicinnovation/embed" height="auto" width="500px" frameBorder="0" scrolling="no"></iframe> */}

      <div className="anchorDiv">

        <iframe className='anchorPlayer' title='podcast_soundbrenner' src="https://anchor.fm/musicinnovation/embed/episodes/Making-Music-Practice-Addictive--Florian-Simmendinger-from-Soundbrenner-ecvmbr/a-a2cvap3" frameBorder="0" scrolling="no"></iframe>

        <iframe className='anchorPlayer' title='podcast_sony_ceo' src="https://anchor.fm/musicinnovation/embed/episodes/Sony-Music-CEO--Patrick-Mushatsi-Kareba--Bringing-a-Major-Label-Up-to-Speed-with-the-Modern-Times-ecuiia/a-a2cvc6m" frameBorder="0" scrolling="no"></iframe>

        <iframe className='anchorPlayer' title='podcast_foundee' src="https://anchor.fm/musicinnovation/embed/episodes/How-To-Build-and-Grow-Your-Audience--With-Found-ees-Jeremy-Gruber--Music-Innovation-Podcast-ecuiq4/a-a2cvap4" frameBorder="0" scrolling="no"></iframe>

        <iframe className='anchorPlayer' title='podcast_andhim' src="https://anchor.fm/musicinnovation/embed/episodes/How-to-Create-an-Authentic-Bond-with-Fans--Simon-from-DJ-Duo-Andhim-e4h413/a-ai7okl" frameBorder="0" scrolling="no"></iframe>

        <iframe className='anchorPlayer' title='podcast_bandsintown' src="https://anchor.fm/musicinnovation/embed/episodes/Bandsintown-CEO-Fabrice-Sergent--Building-a-Free-Tool-for-Artists-and-Fans-While-Making-Millions-e41n86/a-af3hti" frameBorder="0" scrolling="no"></iframe> 

        <iframe className='anchorPlayer' title='podcast_sofarsounds' src="https://anchor.fm/musicinnovation/embed/episodes/Sofar-Sounds-CEO-Rafe-Offer--Scaling-Intimate-Concerts-to-400-Cities-e3si7f/a-ae48c4" frameBorder="0" scrolling="no"></iframe>  
          
        <iframe className='anchorPlayer' title='podcast_vivaconagua' src="https://anchor.fm/musicinnovation/embed/episodes/Raising-Millions-of--for-Charity-Through-Artists--Viva-Con-Agua--Michael-Fritz-e40t2f/a-aetv82" frameBorder="0" scrolling="no"></iframe>  
          
        <iframe className='anchorPlayer' title='podcast_benjirogers' src="https://anchor.fm/musicinnovation/embed/episodes/Benji-Rogers--Get-the-F-out-of-Facebook--the-Future-of-Music-Rights-with-DotBlockchain-Music-e40fo5" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>

      </div>
      </>}
    </div>  



    {/* //! Appple doesnt' work */}
    {/* <div style={{ maxWidth: '90%' }}><div style={{ position: 'relative', paddingBottom:'calc(56.25% + 52px)', height: 0 }}>
    <iframe src="https://embed.podcasts.apple.com/us/podcast/the-music-innovation-podcast/id1463950190?itsct=podcast_box&amp;itscg=30200&amp;theme=dark" width="100%" height="450px" allowFullscreen frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style={appleStyle} title='podcast'></iframe>
    </div></div> */}

    {/* <div style={{ maxWidth: '500px' }}><div style={{ position: 'relative', paddingBottom:'calc(56.25% + 52px)',height: 0 }}> */}
      {/* <iframe style={odesliStyle} width="500px" height="400px" src="https://embed.song.link/?url=https%3A%2F%2Fpods.link%2F3QCn29jkxq48V&theme=light" frameBorder="0" allowFullScreen sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" title='odesli'></iframe> */}
      {/* </div></div> */}


  </> )
}

export default Podcast
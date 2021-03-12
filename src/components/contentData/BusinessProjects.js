import Euro2012 from '../../images/euro2012.png'
import NutriFlow from '../../images/Nutri_Flow_Logo_flat.png'
import Stiles from '../../images/Bathtub_Tiles.jpg'
// import AppleMusic from 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/1280px-Apple_Music_logo.svg.png'

const allTags = [
  'Project Management',
  'Product Management',
  'Data Analysis',
  'Entrepreneurship',
  'Partnerships',
  'Marketing',
  'App Business',
  'Team Management',
  'Entertainment Industry',
  'Languages'
]

const BusinessProjects = [
 
  {
    title: '1 Million Downloads',
    company: 'Instaread',
    year: '2016-2020',
    description: '<p>As the closest competitor to Blinkist, Instaread offers book summaries in audio and text.</p><p>I managed communication and user-acquisition channels (social media ads, PPC, affiliates & more). Strong input on UI/UX & product improvements.</p><p>Generated 1M+ downloads & 150k+ trials.</p>',
    tags:
      [ 'App Business', 'Marketing', 'Product Management' ],
    image:
      {
        alt: 'instaread',
        imgLoc: 'https://cdn.wccftech.com/wp-content/uploads/2020/12/Instaread-Book-Summaries-Subscriptions.jpg'
      },
    links:
      [
        {
          text: 'Website',
          url: 'https://instaread.co/'
        },
        {
          text: 'App',
          url: 'https://apps.apple.com/us/app/instaread-audio-text/id1046172976'
        }
      ]
  },   

  {
    title: 'Created Innovative Photo Decoration Solution',
    company: 'sTiles',
    year: '2017-2019',
    description: '<p>Developed the idea and process for innovative photo stickers. Raised funds through crowdfunding, got the platform built and products delivered.</p>',
    tags:
      [ 'Entrepreneurship', 'Product Management', 'Project Management', 'Marketing' ],
    image:
      {
        alt: 'photo stickers in bathroom',
        imgLoc: Stiles
      },
    links:
      [
        {
          text: 'Kickstarter',
          url: 'https://www.kickstarter.com/projects/477232991/stiles-quality-photo-stickers-movable-and-water-re?ref=discovery&term=stiles'
        }
      ]
  },  

  {
    title: 'Built & Sold eCommerce Company',
    company: 'Nutri Flow',
    year: '2016-2018',
    description: '<p>Created E-commerce store and brand. Turned over approx. $400k/y.</p><p>Distribution via Amazon, eBay, Website and Jet.</p><p>Business was acquired in 2018.</p>',
    tags:
      [ 'Entrepreneurship', 'Project Management', 'Data Analysis', 'Marketing' ],
    image:
      {
        alt: 'Nutri Flow logo',
        imgLoc: NutriFlow
      },
    links:
      [
      ]
  },  
  
  {
    title: 'Managing Apple Music Content Creation in 18 Countries',
    company: 'Apple Music',
    year: '2015',
    description: '<p>As Special Project Manager for Apple Music I led the playlist creation efforts by leveraging local teams and contractors, for 18 countries (1000+ playlists).</p><p>Developed and Implemented operational content processes. Ran learning and development across local teams. Managed resources and workflow across high-paced production timelines to reach milestones.</p>',
    tags:
      [ 'Entertainment Industry', 'Project Management', 'Product Management', 'Team Management' ],
    image:
      {
        alt: 'Apple Music launch',
        imgLoc: 'https://www.telegraph.co.uk/multimedia/archive/03338/applemusic4_3338286k.jpg'
        // 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apple_Music_logo.svg/400px-Apple_Music_logo.svg.png'
      },
    links:
      [
        {
          text: 'Website',
          url: 'https://music.apple.com/'
        //   class: ''
        }
      ]
  },


  {
    title: 'Artist Campaigns',
    company: 'Apple / iTunes',
    year: '2014',
    description: `<p>As Artist & Label Relations Manager at iTunes I was responsible for a wide range of artist campaigns. These are a couple of key examples:</p>
    <p><b>Exclusive Album Release</b> - Negotiated first ever exclusive album release  for iTunes outisde US (<i>Lo & Leduc</i>). Leading to 8 platinum certifications!</p>
    <p><b>Superstar Campaign</b>, moving audience to digital (<i>Udo Lindenberg</i>) - Created unique artist page with all 40 albums remastered + exclusive interview + exclusive drawings + exclusive book. Resulting in increased catalogue sales and strong media spotlight on artist, label and DSP furthering iTunes’s position as market leader for digital music for all generations.</p>
    <p><b>Newcomer Campaign</b> (<i>Maxim</i>) - Supported newcomer and positioned iTunes as a place where artists get discovered. Resulted in Album charting on #10; 16 weeks in the charts. Single #18 and Gold status!</p>`,
    tags:
    [ 'Entertainment Industry', 'Partnerships', 'Project Management', 'Marketing' ],
    image:
      {
        alt: 'Lo & Leduc platinum',
        imgLoc: 'https://images.mediabiz.de/s/jetzt-auch-nummer-eins-in-den-charts-lo-&-leduc-hier-mit-ihren-goldauszeichnungen-f%C3%BCr-zucker-f%C3%BCrs-volk/newspics/966/391966_1/b2780x1450.jpg'
      },
    links: [

    ]
  },

  {
    title: 'UEFA Euro Cup 2021 - Cross-Content Campaign',
    company: 'Apple / App Store',
    year: '2012',
    description: `<p>Managed massive Euro 2012 campaign, pulling together all content types and teams (Apps, Music, Video, Books), and celebrity content from major football players (Ronaldo, Philipp Lahm, Joe Hart and more).</p><p>Coordinating with Production, Editorial, Business, Buzz (PR) and Marketing teams.</p>`,
    tags:
      [ 'App Business', 'Project Management', 'Marketing' ],
    image:
      {
        alt: 'iTunes Euro 2012 design',
        imgLoc: Euro2012
      },
    links: []
  },

  {
    title: 'Defining the App Store',
    company: 'Apple / App Store',
    year: '2012',
    description: `<p>As one of the first App Store employees, I was tasked with establishing the App Store as great place to find quality Apps, and a fantastic place to build businesses for developers.</p><p>Me and my colleagues developped brands such as <i>Editors Choice</i>, <i>App of the Week</i>, <i>App Store Essentials</i> etc.</p>`,
    tags:
    [ 'App Business', 'Product Management', 'Marketing', 'Entertainment Industry' ],
    image:
      {
        alt: 'editors choice page'
      , imgLoc: 'https://thenextweb.com/wp-content/blogs.dir/1/files/2012/05/Screen-Shot-2012-05-31-at-2.02.09-PM.jpg'
      },
    links: [
      {
        text: 'Website',
        url: 'https://www.apple.com/app-store/'
      //   class: ''
      }
    ]
  },

  {
    title: '1/2 Billion $ in Revenues',
    company: 'Apple Online Stores EMEA',
    year: '2011',
    description: `<p>As Marketing Manager I was responsible for the performance marketing activities for the Apple Online Stores in Europe (16 countries - 11 languages - 19 stores)</p><p>Managed internal and external marketing teams, doubling revenues to $0.5 Billion/y!</p>`,
    tags:
      [ 'Marketing', 'Team Management', 'Data Analysis', 'Languages' ],
    image:
      {
        alt: 'Blackfriday screenshot',
        imgLoc: 'https://macmagazine.com.br/wp-content/uploads/2010/11/25-bf_aus-550x329.jpg'
      },
    links: []
  },

]

export default BusinessProjects
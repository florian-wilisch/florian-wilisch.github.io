// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Para from './components/Para'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Podcast from './components/Podcast'
import { HashRouter, Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import './style.scss'

function App() {
  return (
    <div className="App">

        {/* <HashRouter hashType='noslash'>
          <Navbar/>        
            <Hero/>      
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer />
        </HashRouter> */}

        <BrowserRouter>
          <Navbar/>     
          <Switch>
            <Route exact path='/podcast' component={Podcast}/> 
            <Route>
              <Hero/>    
              <About/>
              <Skills/>
              <Projects/>
              <Contact/>
              <Footer />
            </Route>
          </Switch>
        </BrowserRouter>
    
    </div>
  );
}

export default App;

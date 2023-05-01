import React from 'react'
import About from './About'
import Contact from './Contact';
import Hero from './Hero';
// import NavigationBar from './NavigationBar';
import BackToTop from './BackToTop';
import { useState } from 'react';
import {MdOutlineNightlight, MdOutlineLightMode} from "react-icons/md"
import '../index.css';
import Navigation2 from './Navigation2';



const Home2 = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleMode = () => setIsDarkMode(prev => !prev);

  
    return (
      <div className={ `app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navigation2 
          handleToggleSwitcher={handleToggleMode}
          backgroundSwitcher={
          isDarkMode ?  <span><MdOutlineLightMode className='icon'/><span style={{position: 'relative', bottom: '5px'}}>Light Mode</span></span> : <span><MdOutlineNightlight className='icon'/><span style={{position: 'relative', bottom: '5px'}}>Dark Mode</span></span>
          }
        />
        <main>
          <Hero />
          <About/>
          <Contact/>
          <BackToTop/>
        </main>
      </div>
    );
  }
  

export default Home2;


import React from 'react'
import About from './About'
import Contact from './Contact';
import Hero from './Hero';
import NavigationBar from './NavigationBar';
import BackToTop from './BackToTop';
import { useState, useEffect, useRef } from 'react';
import {MdOutlineNightlight, MdOutlineLightMode} from "react-icons/md"
import '../index.css';



const Home2 = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);


  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleMode = () => setIsDarkMode(prev => !prev);

  
  useEffect(() => {
    const handleScroll = (event) => {
      const { href } = event.target;
      const targetRef = href === '#hero' ? homeRef :
                        href === '#about' ? aboutRef :
                        href === '#services' ? servicesRef :
                        href === '#contact' ? contactRef :
                        null;
      if (targetRef) {
        event.preventDefault();
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.addEventListener('click', handleScroll));
    return () => {
      links.forEach(link => link.removeEventListener('click', handleScroll));
    };
  }, [homeRef, aboutRef, servicesRef, contactRef]);



  
    return (
      <div className={ `app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <NavigationBar 
          handleToggleSwitcher={handleToggleMode}
          backgroundSwitcher={
          isDarkMode ?  <span><MdOutlineLightMode className='icon'/><span style={{position: 'relative', bottom: '5px'}}>Light Mode</span></span> : <span><MdOutlineNightlight className='icon'/><span style={{position: 'relative', bottom: '5px'}}>Dark Mode</span></span>
          }
        />
        <main>
          <Hero ref={homeRef} />
          <About ref={aboutRef} />
          <Services ref={servicesRef} />
          <Contact ref={contactRef} />
        </main>
      </div>
    );
  }
  

export default Home2;

// import { useState, useEffect, useRef } from 'react';
// import './App.css';

// function NavigationBar({ activeLink, handleLinkClick }) {
//   return (
//     <nav>
//       <a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={handleLinkClick}>Home</a>
//       <a href="#about" className={activeLink === '#about' ? 'active' : ''} onClick={handleLinkClick}>About</a>
//       <a href="#services" className={activeLink === '#services' ? 'active' : ''} onClick={handleLinkClick}>Services</a>
//       <a href="#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</a>
//     </nav>
//   );
// }

// function Home({ forwardRef }) {
//   return (
//     <div id="home" ref={forwardRef}>
//       <h1>Welcome to my website!</h1>
//       <p>Scroll down to learn more about me and my services.</p>
//     </div>
//   );
// }

// function About({ forwardRef }) {
//   return (
//     <div id="about" ref={forwardRef}>
//       <h2>About Me</h2>
//       <p>I am a web developer with experience in React, Node.js, and more.</p>
//     </div>
//   );
// }

// function Services({ forwardRef }) {
//   return (
//     <div id="services" ref={forwardRef}>
//       <h2>My Services</h2>
//       <ul>

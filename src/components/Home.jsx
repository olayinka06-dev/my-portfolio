import React from 'react'
import About from './About'
import Contact from './Contact';
import Hero from './Hero';
import NavigationBar from './NavigationBar';
import Services from './Services';
import BackToTop from './BackToTop';
import { useState, useEffect, useRef } from 'react';
import {MdOutlineNightlight, MdOutlineLightMode} from "react-icons/md"
import '../index.css';
import styled from 'styled-components';



const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // const [activeLink, setActiveLink] = useState('');

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleToggleMode = () => setIsDarkMode(prev => !prev);

  
  const [activeLink, setActiveLink] = useState('#hero');

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
        setActiveLink(href);
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
      <Wrapper>
        <div className={ `app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <NavigationBar
            activeLink={activeLink}
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
          <BackToTop/>
        </div>
      </Wrapper>
    );
  }
  

const Wrapper = styled.div`
  /* li.active {
    background: var(--activehover);
  }

  li.active a {
    color: white;
  } */
`

export default Home;


import React from 'react';
import styled from 'styled-components';
import {AiOutlineTwitter} from 'react-icons/ai';
import {RiFacebookFill} from 'react-icons/ri';
import {IoLogoInstagram} from 'react-icons/io';
import {FaLinkedinIn} from "react-icons/fa";
import bgImg from './images/hero-bg.jpg';
import { Link } from 'react-router-dom';
import '../index.css';


const Hero = () => {


  window.addEventListener('load', function() {
    var box1 = document.querySelector('.box-1');
    box1.classList.add('slide-fade-in-one');
  });
  
  return (
    <Wrapper>
      <div id="hero">
        <div class="container box-1">
          <h1>Olayinka<span>_Dev</span></h1>
          <p>I'm a Senior Web-Developer</p>
          {/* <Typical
            steps={[`I'm a Web-Developer`, 3000 , `I'm a Freelancer`, 3000, `I'm a Senior MERN Developer`, 3000]}
            loop={Infinity}
            wrapper="p"
          /> */}
          <div class="social-links">
            <Link to={'/'}><AiOutlineTwitter/></Link>
            <Link to={'/'}><RiFacebookFill/></Link>
            <Link to={'/'}><IoLogoInstagram/></Link>
            <Link to={'/'}><FaLinkedinIn/></Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}



const Wrapper = styled.div`

  #hero {
    width: 100%;
    height: 100vh;
    background: url(${bgImg}) top right no-repeat;
    background-size: cover;
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
  }
  @media (min-width: 992px) {
    #hero {
      padding-left: 350px;
    }
  }

  #hero:before {
    content: "";
    background: var(--herobackground);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  .box-1 {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100%;
    overflow: hidden;
    opacity: 0;
    scale: 0;
    transform: translateX(100%);
    animation: slide-fade-in-one 1s forwards;
  }

  @keyframes slide-fade-in-one {
    from {
      opacity: 0;
      transform: translateX(100%);
      scale: 0;
      overflow: hidden;

    }
    to {
      opacity: 1;
      transform: translateX(20px);
      scale: 100%;
      overflow: hidden;
    }
  }
  .container {
    position: relative;
    z-index: 2;
    min-width: 300px;
  }

  .container h1{
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: var(--herocolor);
  }
  .container span{
    color: var(--herospan)
  }
  .container p {
    color: var(--letter);
    margin: 15px 0 0 0;
    font-size: 26px;
    font-family: "Poppins", sans-serif;
  }
  .social-links {
    margin-top: 30px;
  }

  .social-links a {
    font-size: 24px;
    display: inline-block;
    color: var(--social);
    line-height: 1;
    margin-right: 20px;
    transition: 0.3s;
    padding: 9px 12px;
    border-radius: 50%;
  }

  .social-links a:hover {
    color: white;
    background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%) );
  }


  @media screen and (max-width: 992px) {
    #hero {
      text-align: center;
      width: 100%;
    overflow: hidden;

    }
    .container{
      z-index: 50 !important;
      min-width: 0;
      width: 100%;
      overflow: hidden;
      padding:0;
      margin: 0;

    }
    .container h1 {
      font-size: 32px;
      line-height: 36px;
    } 
    .container p {
      margin-top: 10px;
      font-size: 20px;
      line-height: 24px;
    }
    @keyframes slide-fade-in-one {
    from {
      opacity: 0;
      transform: translateX(100%);
      scale: 0;
      overflow: hidden;

    }
    to {
      opacity: 1;
      transform: translateX(0px);
      scale: 100%;
      overflow: hidden;
    }
  }
}



`

export default Hero;

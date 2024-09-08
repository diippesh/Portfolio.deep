import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AutoTypingText from './AutoTypingText'; 

const professions = ["Backend Developer", "Coder", "Full Stack Developer", "Web Developer"];

function Hero() {
  return (
    <div id="home" className="hero">
        <img src={profile} alt="" />
        <h1><span>Hi!  I'm Deepesh Bhatiya,</span> 
        <div className='colon'>
          "
          <AutoTypingText professions={professions} speed={100} />
          "
        </div>
        </h1>
        <p>I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">
                <a href="/resume.pdf" download="My_Resume.pdf">My Resume</a>
            </div>
        </div>
    </div>
  )
}

export default Hero;

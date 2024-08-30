import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'
import htmlimg from './Images/stack/HTML.png'
import cssimg from './Images/stack/CSS.png'
import jsimg from './Images/stack/Javascript.svg'
import reactimg from './Images/stack/React.png'
import nodejsimg from './Images/stack/NodeJs.svg'
import tailwindimg from './Images/stack/Tailwind.png'
import reduximg from './Images/stack/Redux.svg'
import bootstrapimg from './Images/stack/Bootstrap.svg'
import expressimg from './Images/stack/Express.png'
import gitimg from './Images/stack/Git.svg'
import githubimg from './Images/stack/Github.svg'
import mongodbimg from './Images/stack/MongoDB.svg'
function About() {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>About Me:</p>
                        <p> Hi, I'm Deepesh Bhatiya, a passionate developer proficient in React for building interactive web apps, skilled in C++ for scalable software solutions, experienced in Data Structures and Algorithms for problem-solving, adept in Backend Development with Node.js for RESTful APIs, and knowledgeable in SQL and MongoDB for database management. With a strong foundation in these technologies, I'm committed to delivering high-quality solutions that meet the needs of users and businesses.</p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "90%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Data Structures</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Java Script</p><hr style={{ width: "75%" }} />
                        </div>
                        <div className="about-skill">
                            <p>C++</p><hr style={{ width: "70%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <h2>Me and MyTech Stack</h2>
                <div className="rightSkillContainer">
                    <img src={htmlimg} alt="" className="skillsLogo" />
                    <img src={cssimg} alt="" className="skillsLogo" />
                    <img src={jsimg} alt="" className="skillsLogo" />
                    <img src={reactimg} alt="" className="skillsLogo" />
                    <img src={nodejsimg} alt="" className="skillsLogo" />
                    <img src={reduximg} alt="" className="skillsLogo" />
                    <img src={tailwindimg} alt="" className="skillsLogo" />
                    <img src={bootstrapimg} alt="" className="skillsLogo" />
                    <img src={expressimg} alt="" className="skillsLogo" />
                    <img src={gitimg} alt="" className="skillsLogo" />
                    <img src={githubimg} alt="" className="skillsLogo" />
                    <img src={mongodbimg} alt="" className="skillsLogo" />
                </div>


            </div>
        </div>
    )
}

export default About
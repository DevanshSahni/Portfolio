import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Chandima Ekanayake</b> and I am from Colombo, Sri Lanka.
            I'm a Highly motivated and experienced software developer with a strong 
            background in full-stack development and a passion for solving complex problems. 
            With 4 years of academic experience and nearly 7 years of professional experience, 
            I have a solid foundation in computer science principles and a track record of delivering high-quality software solutions on time. 
            I am skilled in a variety of programming languages and technologies, including C#, TypeScript, JavaScript, and related frameworks, 
            and I have experience working on both small and large-scale projects. I am a proactive team player who is always willing to take on new challenges and learn new skills.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />

      </div>
    </>
  )
}

export default About
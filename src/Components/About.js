import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import { FaDumbbell } from 'react-icons/fa';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Saloni Angre</b> and I am based in Seattle.
            I'm a <b>Software Engineer</b> currently pursuing my <b>Master’s in Information Systems</b>. <br/><br/>
            I hold a Bachelor's in Information Technology and have hands-on experience in backend development, ML research, and API integration. Previously, I worked as a <b>Software Engineer at LTIMindtree</b> My curiosity for intelligent systems led me to complete two machine learning research internships, where I applied ML techniques to hardware signal analysis, circuit fault prediction, and large language model tuning.
            Outside of work, I’m a strong believer in building with purpose and creativity. You can find some of my technical and research projects in the Projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do Travel. <a href="https://www.linkedin.com/in/saloniangre/" target='_blank'>Linkedin.</a>
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
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About
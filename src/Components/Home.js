import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import { FaDumbbell } from 'react-icons/fa';
import Avatar from '../images/Avatar.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SALONI ANGRE</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
      I'm <b>Saloni Angre</b>, a passionate Software Engineer currently pursuing my Masters in Information Systems at Northeastern University in Seattle. <br /><br />
      I enjoy building impactful software — whether it's developing scalable backend systems or designing intelligent ML models. I have worked with <b>Java</b>, <b>Spring Boot</b>, <b>Python</b>, <b>C++</b>, and built end-to-end projects using industry tools and frameworks.<br /><br />
      My professional experience at <b>LTIMindtree</b> and research internships have strengthened my skills in API development, data pipelines, and fault detection using Machine Learning.<br /><br />
      Outside of coding, I enjoy capturing travelling and staying fit — so yes, I hit the <b>gym</b> <FaDumbbell style={{ scale: "1.5", rotate: "15deg" }} />.
    </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
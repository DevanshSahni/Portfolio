import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by SALONI ANGRE</h4>
      <h4>Copyright &copy; 2025 SA</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Sal03" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/saloniangre/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:angresaloni0310@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://medium.com/@angresaloni0310/from-voice-to-intent-making-alexa-smarter-with-hugging-face-nlp-42d429d06ec4" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
      </div>
    </footer>
  )
}

export default Footer
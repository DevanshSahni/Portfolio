import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MoneaseDesc : "This app will track your expenses and income, allowing you to categorize them and view your financial status. It is a full-stack application built with Android Studio, Java, and Firebase. It is a school project that I made to help them manage their finances.",
    MoneaseGithub : "https://github.com/james-paul25/monease-expense-app",
    MoneaseWebsite : "",

    PPLSDesc : "A Password Protected Lock System (PPLS) is a arduino-based simulation project that provides a secure way to lock and unlock doors using a password. It uses an Arduino board, a keypad, and a servo motor to control the locking mechanism. The user can enter a password on the keypad to unlock the door, and the system will lock the door automatically after a certain period of time.",
    PPLSGithub : "",
    PPLSWebsite : "https://www.tinkercad.com/things/aCWEo6JrS0L-password-protected-lock-system",
    
    PeertoPeerFrontendDesc:"This is a Peer-to-Peer Tutoring System frontend that allows students to connect with each other for tutoring sessions. It is built using React, Springboot, and MySql. The system allows students to create profiles, search for tutors, and schedule tutoring sessions. It is a full-stack application that I made to help students find tutors easily.",
    PeertoPeerFrontendGithub:"https://github.com/james-paul25/bisu-p2p-tutoring-system-frontend",
    PeertoPeerFrontendWebsite : "https://bisu-p2p-tutoring.vercel.app/",

    PeertoPeerBackendDesc:"This is a Peer-to-Peer Tutoring System backend that allows students to connect with each other for tutoring sessions. It is built using React, Springboot, and MySql. The system allows students to create profiles, search for tutors, and schedule tutoring sessions. It is a full-stack application that I made to help students find tutors easily.",
    PeertoPeerBackendGithub:"https://github.com/james-paul25/bisu-p2p-tutoring-system-frontend",
    PeertoPeerBackendWebsite : "",

    LaughShareDesc:"LaughShare is a social media platform that allows users to share their laughter and connect with others. It is built using React + Vite, firebase, and deploy at Vercel. The system allows users to post jokes. It is a full-stack application that I made to help people share their laughter and connect with others.",
    LaughShareGithub:"https://github.com/james-paul25/laughshare",
    LaughShareWebsite : "https://laughshare.vercel.app/",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel="noopener noreferrer">
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
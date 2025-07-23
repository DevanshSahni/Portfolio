import React from 'react';
import ProjectBox from './ProjectBox';
import ArduinoImage from '../images/ard.png';
import PeerImage from '../images/p2p.png';
import BackendImage from '../images/backend.png';
import MoneaseImage from '../images/monease.png';
import LaughShareImage from '../images/laughshare.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={PeerImage} projectName="PeertoPeerFrontend" />
        <ProjectBox projectPhoto={BackendImage} projectName="PeertoPeerBackend" />
        <ProjectBox projectPhoto={ArduinoImage} projectName="PPLS" />
        <ProjectBox projectPhoto={MoneaseImage} projectName="Monease" />
        <ProjectBox projectPhoto={LaughShareImage} projectName="LaughShare" />
      </div>

    </div>
  )
}

export default Projects
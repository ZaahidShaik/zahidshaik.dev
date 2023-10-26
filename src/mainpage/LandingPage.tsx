import React, { useEffect, useState } from 'react'
import '../styles/LandingPage.css'
import '../styles/Section Styles/SkillsSection.css'
import '../styles/Section Styles/ProjectSection.css'
import '../styles/component styles/MobileNavbar.css'

import { Routes, Route} from "react-router-dom";

import Greeting from '../components/Greeting'
import Navbar from '../components/Navbar'
import { tabList } from '../persistance_store/tabs'
import { skillsList } from '../persistance_store/skills'
import RedirectButtons from '../components/RedirectButtons'
import { social } from '../persistance_store/social'
import { projectList } from '../persistance_store/projects'
import { educationList } from '../persistance_store/eduation'
import { workList } from '../persistance_store/work'
import MobileNavbar from '../components/NavBars/MobileNavbar'
import { IconeNavbuttonType } from '../models/models'
import Logo from '../components/Logo'
import WorkSection from '../sections_modules/WorkSection'
import SkillsSection from '../sections_modules/SkillsSection'
import ProjectsSection from '../sections_modules/ProjectsSection'
import EducationSection from '../sections_modules/EducationSection'
import MobileTabBar from '../components/Until/MobileTabBar'



function LandingPage() {

  const NavbarItemsList: IconeNavbuttonType[] = ['Home', 'About', 'Projects', 'Skills', 'Work', 'Education']

  const [width, setWindowWidth] = useState(0);  
  const [height, setWindowHeight] = useState(0);  
  const updateDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setWindowWidth(width);
    setWindowHeight(height);
  }

  // const observer = new IntersectionObserver((ent))

  useEffect(() => { 

    updateDimensions();

    window.addEventListener("resize", updateDimensions);     
    return () => 
    window.removeEventListener("resize",updateDimensions);    
    }, [])

    const isMobileDevice = (width <= 480);
    // const isTabletDevice = (width >= 768);
    // const isDesktop =  (width >= 1024);
    // const isBigScreen = (width >= 1200);



  return (
    <div className='background'>
   

    {!isMobileDevice && <Navbar tabList={tabList}/> }
      
      {/* {width} x {height} */}


     {/* {isMobileDevice && 
    <div className='mobile-navbar-styles'>
    {NavbarItemsList.map((navItems :any, index: number) => {
        return <div  key={index}><MobileNavbar buttonType={navItems}/></div>
      })}
    </div> } */}

   
    <div className="page-section-container">
    

    
    
   {/* Hero Greeting section */}
   {isMobileDevice && <div className='mobile-logo-style'><Logo/></div> }

   {/* <Routes> */}
   {/* <Route path="/" element={  */}
   <div className='hero-page-section' id = "home">

    
    <Greeting/>

    <div className='social-flex-container'>
    {social.map((social :any, index: number) => {
      return <RedirectButtons buttonType={social.platform} redirectLink={social.hreflinks} key={index}/>
    })}
    </div>

    </div>
   {/* } />  */}

  
    {/* Skills Section */}
    {/* <Route path="/skills" element={ */}
    <SkillsSection skillsList={skillsList} screenWidth={width}/>
     {/* } /> */}


   
    {/* Projects */}
    {/* <Route path="/projects" element={ */}
    <ProjectsSection projectList={projectList} screenWidth={width}/>
 {/* } /> */}
    


    {/* Education Section */}
    {/* <Route path="/education" element={ */}
    <EducationSection educationList={educationList} screenWidth={width}/>
    {/* } /> */}
    
{/* 
    <SectionLabels labeltext='Education' labelType='Section' id= "education"/>
    <div className='project-flex-container'>
    {educationList.map((education :any, index: number) => {
      return <div className='project-flex-items' key={index}><EducationCrad education={education} screenWidth={width}/></div>
    })}
    </div> */}

   
    {/* Work Section */}

    {/* <div className='project-flex-container'> */}
     {/* {workList.map((work :workType, index: number) => {
      return <div className='' key={index}><WorkCards work={work}/></div>
     })} */}
     
     {/* <Route path="/work" element={ */}
     <WorkSection workHistry={workList} screenWidth={width}/>
     
     {/* }  /> */}

     {/* </Routes> */}
     
    {/* </div> */}

   
   

    </div>


   
    </div>
  )
}

export default LandingPage
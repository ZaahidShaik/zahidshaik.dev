import React from 'react'
import { projectType } from '../persistance_store/projects'
import SectionLabels from '../components/SectionLabels'
import VerticalSideLabel from '../components/Until/VerticalSideLabel'
import ProjectCard from '../components/ProjectCard'


interface props{
    projectList: projectType[],
    screenWidth: number,
}


const ProjectsSection = ({projectList, screenWidth} : props) => {
  return (
    <>
    <div className="projects-section-container">
    <SectionLabels labeltext='Projects' labelType='Section' id="projects"/>
    <VerticalSideLabel labelText={'My Projects'}/>
   <div className='project-flex-container'>
    {projectList.map((project :any, index: number) => {
      return <div className='project-flex-items' key={index}><ProjectCard project={project} screenWidth={screenWidth}/></div>
    })}
    </div>
    </div>
    </>
  )
}

export default ProjectsSection


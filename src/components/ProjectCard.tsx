import React from 'react'
import '../styles/ProjectCards.css'
import { projectType } from '../persistance_store/projects'
import RedirectButtons from './RedirectButtons'
import PopoverCard from './Until/PopoverCard'



/*
* Layout for row 1: Title, Git link and Demo
* Layout for row 2: stack Type (different color)
* Layout for row 3: description 
* divider
* Layout for Caracill: two rows tech stack names and two Slides for all stacks
* divider
* Layout for more redirect link (right corner)
*/ 

// projectTitle: String,
// projectStackType: softwareStackTypes,
// githubLink: String,
// demoLink: String | null,
// projectDescription: String,
// TechStack: techStackType[],
// sourceInfoLink: String | null,

interface props {
  project: projectType,
  screenWidth: number,
}

function ProjectCard({ project, screenWidth }: props) {
  return (

    <>
    <div className='card-container'>
      <div className='card-container-1'>
      {/* Layout for row 1: stack Type (different color)*/}
      <div className='layer-two stack-details-styles'>
       {project.projectStackType}
      </div>

      {/* Layout for row 2: Title, Git link and Demo */}
      <div className='Layer-one row-flex-container'>
        <div className='title-style'>{project.projectTitle}</div>

        <div className='button-style'>
        <RedirectButtons buttonType={'GitHub'} redirectLink={project.githubLink} key='github'/>
        <RedirectButtons buttonType={'LiveDemo'} redirectLink={project.demoLink} key='demo'/>
        </div>
      </div>
      
            {/* Divider */}
            {/* <div className='card-divider-style'></div> */}


      {/* Layout for row 3: project description */}
      <div className='layer-three project-description-styles'>
       {project.projectDescription}
      </div>


      {/* Divider */}
      {/* <div className='card-divider-style'></div> */}

      {/* Layout for row 4: Caracill: two rows tech stack names and two Slides for all stacks */}
      {/* {project.techStack.map((stack:techStackType, index:number) => {
        return <div className='chips-styles' key={index}><Chipstack stackName={stack.stackName} technologyList={stack.technoloyList} screenWidth={screenWidth}/></div>

      })}  */}

          
      
      
      {/* Divider */}
      <div className='card-divider-style'></div>

       {/* * Layout for row 5 : more.. redirect link (right corner) */}
        {/* <div className='layor-five morelinek-style'>
        <PopoverCard techStackData={project.techStack} description={project.projectDescription} screenWidth={screenWidth}/>
                    
        </div> */}
      </div>
      
    
      <div className="learn-more-button-styles"> 
      <PopoverCard techStackData={project.techStack} description={project.projectDescription} screenWidth={screenWidth} title={project.projectTitle}/>
      </div>


    </div>

</>
  )
}

export default ProjectCard
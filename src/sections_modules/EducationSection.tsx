import React from 'react'
import { educationType } from '../persistance_store/eduation';
import SectionLabels from '../components/SectionLabels';
import EducationCard from '../components/EducationCard';
import VerticalSideLabel from '../components/Until/VerticalSideLabel';
import '../styles/Section Styles/EducationSectionStyles.css';


interface props{
  educationList: educationType[],
  screenWidth: number,
}

const EducationSection = ({educationList, screenWidth} : props) => {
  return (
    <div className='education-section-container'>
    <SectionLabels labeltext='Education' labelType='Section' id= "education"/>
    <VerticalSideLabel labelText={'My Education'}/>
    <div className='education-flex-container'>
    {educationList.map((education :any, index: number) => {
      return <div className='project-flex-items' key={index}>
        <EducationCard education={education} screenWidth={screenWidth}/>
        </div>
    })}
    </div>
    </div>
  )
}

export default EducationSection

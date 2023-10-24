

import SectionLabels from './SectionLabels';

import '../styles/SkillsCards.css'
import { skillTypes, subSectionType } from '../persistance_store/skills';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


interface props {
    stackList: skillTypes
}


const SkillsCards = ({stackList}: props) => {

  const RenderStackTechnologies = ( techNames: String[]) =>  {
    return techNames.map(( tech: String , index: number) => {
           return <div key={index} className='technologies-list-box'><ChevronRightIcon />{tech}</div>
    })
  }

  const RenderSubSection = ( subSection: subSectionType[]) =>  {
    return subSection.map(( section: subSectionType , index: number) => {
           return <div key={index} className='subsection-tech-box'>
                   <div className='section-name'># {section.sectionName}</div>
                   {(section.sectionTechnologies.length > 0 || !section.sectionTechnologies) && <div>{RenderStackTechnologies(section.sectionTechnologies)}</div>}
                   {(section.subSubSection.length > 0 || !section.subSubSection) && <div>{RenderSubSubSection(section.subSubSection)}</div> }
                  </div>
    })
  }

  const RenderSubSubSection = ( subSection: subSectionType[]) =>  {
    return subSection.map(( section: subSectionType , index: number) => {
           return <div key={index} className='subsection-tech-box'>
                   <div className='sub-section-name'>{section.sectionName}</div>
                   {section.sectionTechnologies.length > 0 && <div>{RenderStackTechnologies(section.sectionTechnologies)}</div>}                  
                  </div>
    })
  }

  return (
    <>



    {/* <div className="skills-flex-container">
        {skillsList.stackTechnologies.map((technologyName :any, index: number) => {
            return <div className='skills-flex-items-cards' key={index}> 
                    <MdArrowForwardIos className='icon-style'/>{technologyName}</div>
        })}
    </div> */}

    {/* Add buttons section */}

    {/* New Design */} 
    
    <div className="skill-stack-container">
    {/* stackName: String,  */}
    <div className="stack-name-flex">
    <SectionLabels labeltext={stackList.stackName} labelType='SubSection'/>
    </div>

    {/* stackTechnologies: String[] */}
    <div className="stack-technologies-list-flex">
    {stackList.stackTechnologies.length > 0 && RenderStackTechnologies(stackList.stackTechnologies)}
    </div>

    {/* subSection: subSectionType[]; */}
    <div className="stack-subsection-technologies-flex">
    {stackList.subSection.length > 0 && RenderSubSection(stackList.subSection)}
    </div>

    </div>




    </>
  )
}



export default SkillsCards

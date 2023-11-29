

import SectionLabels from './SectionLabels';

import '../styles/SkillsCards.css'
import { skillTypes, subSectionType } from '../persistance_store/skills';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconBuilder from './Until/IconBuilder';


interface props {
    stackList: skillTypes
}


const SkillsCards = ({stackList}: props) => {

  const CardStackLabel = (label: String) => {
    
    const splitLabel = label.split(' ');

    return <>
      <div className='card-stack-label'>
          <div className="card-stack-icon">{IconBuilder(splitLabel[0])}</div>
          <div className="card-stack-name-container">
            <div className="card-stack-name1">{splitLabel[0]}</div>
            <div className="card-stack-name2">{splitLabel[1]}</div>
          </div>
      </div>
    </>
  }

  const TechSectionLabels = (name: String) => {
    return <>
    <div className="tech-section-label-container">
        <div className="tech-label-divider"></div>
        <div className='tech-section-name'>
            <div className="section-name-icon">{IconBuilder(name)}</div>
            <div className="section-name">{name}</div>
        </div>
        <div className="tech-label-divider"></div>
    </div>
    </>
  }

  const RenderStackTechnologies = ( techNames: String[]) =>  {
    return techNames.map(( tech: String , index: number) => {
          return <>
          <div key={index} className='technologies-list-item'>
              <div className="technologies-list-item-icon">{IconBuilder(tech)}</div>
              <div className="technologies-list-item-name">{tech}</div>
          </div>
          </>
    })
  }

  const RenderSubSection = ( subSection: subSectionType[]) =>  {
    return subSection.map(( section: subSectionType , index: number) => {
           return <div key={index} className='subsection-tech-box'>
                   {TechSectionLabels(section.sectionName)}
                   {/* <div className='section-name'># {section.sectionName}</div> */}
                   {(section.sectionTechnologies.length > 0 || !section.sectionTechnologies) && <div>{RenderStackTechnologies(section.sectionTechnologies)}</div>}
                   {(section.subSubSection.length > 0 || !section.subSubSection) && <div>{RenderSubSubSection(section.subSubSection)}</div> }
                  </div>
    })
  }

  const RenderSubSubSection = ( subSection: subSectionType[]) =>  {
    return subSection.map(( section: subSectionType , index: number) => {
           return <div key={index} className='subsection-tech-box'>
                   <div className='sub-section-name'> {section.sectionName}</div>
                   {section.sectionTechnologies.length > 0 && <div>{RenderStackTechnologies(section.sectionTechnologies)}</div>}                  
                  </div>
    })
  }

  return (
    <>

    {/* New Design */} 
    
    <div className="skill-stack-container">
    {/* stackName: String,  */}
    <div className="stack-name-flex">
    {/* <SectionLabels labeltext={stackList.stackName} labelType='SubSection'/> */}
    {CardStackLabel(stackList.stackName)}
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

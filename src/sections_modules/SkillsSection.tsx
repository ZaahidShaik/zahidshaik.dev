import React, { useState } from 'react'
import SectionLabels from '../components/SectionLabels';
import SkillsCards from '../components/SkillsCards';
import { skillTypes } from '../persistance_store/skills';
import {Button, ButtonGroup} from '@mui/material';

import '../styles/util component styles/MobileTabBar.css'


interface props{
     skillsList: skillTypes[],
     screenWidth: number,
}

const SkillsSection = ({skillsList, screenWidth} : props) => {

    const [stackDetails, setStackDetails] = useState(skillsList[0]); 



    const MobileTabBar = (skillsList :skillTypes[])  => {
      return (
        <>
        <div className='tab-divider-style  carousel-container flex-container'>
               <div className="tab-carousel-wrapper swiper-slide">
                  { skillsList.map((tabDetail: skillTypes, index: number) => {
                     return <div key={index} className= {`tab-carousel-btn ${isActiveTab(tabDetail.stackName) ? "is-active": " "}`}
                     onClick={() => {setStackDetails(tabDetail)}}>{tabDetail.stackName}</div>
                  })}  
                </div>
        </div>
        </>
      )
    }

    const isActiveTab = ( currentTab :String) =>{
       return (currentTab === stackDetails.stackName); 
    }

  
    const SelectButtonGroup = ( screenWidth: number, skillsList :skillTypes[]) => {
        if (screenWidth >= 1401)  {
            // {/* when for isDesktop */}
            return RenderButtonGroup("small", 18,"150px",skillsList);

        } else if (screenWidth <= 1400 && screenWidth >= 600) {
            // {/* when for isTab */}
            return RenderButtonGroup("small", 16,"120px",skillsList);
                
        } else if (screenWidth <= 480) {
            // {/* when for isMovile */}
            // return RenderButtonGroup("small", 14,"100px",skillsList);

            return MobileTabBar(skillsList);

       
        }
      }

      // backgroundColor: `{${isActiveTab(skillsStack.stackName) ? "#757b9e": ""}}`

    const RenderButtonGroup = (buttonSize: "small" | "medium" | "large" , fontsize: number, buttonWidth: string, skills :skillTypes[] ) => {
      return <ButtonGroup size={buttonSize} color='inherit' variant="outlined"   
        style={{textTransform: 'none',   fontSize: fontsize,   borderColor: '#60b0cf', width:'auto'}}>
            {RenderButton(buttonSize,fontsize,buttonWidth,skills)}</ButtonGroup> 
    }

    const RenderButton = ( buttonSize: "small" | "medium" | "large" , fontsize: number, buttonWidth: string, stackList : skillTypes[]) => {
      return stackList.map((skillsStack :skillTypes, index: number) => {
            return <Button size={buttonSize} color='inherit' variant="outlined" key={index} onClick={() => {setStackDetails(skillsStack)}}
            style={{textTransform: 'none', fontSize: fontsize, backgroundColor:`${isActiveTab(skillsStack.stackName) ? "#757b9e": ""}`,borderColor: "#60b0cf", width: 'auto'}}>
                {skillsStack.stackName}</Button>
            })
    }
  

  return (
    <div className='skills-section-container'>  
     
    <div className='section-side-title'> 
      My Skills
    </div>
    <SectionLabels labeltext='Tech Stacks' labelType='Section' id="skills"/>



     <div className="group-button-container">
        <div className="group-button-flex-item">
        {SelectButtonGroup(screenWidth, skillsList)}
        </div>

        <div className="skills-card-flex-item">
        <SkillsCards stackList={stackDetails}/>
        </div>
     </div>

    </div>
  )
}

export default SkillsSection

import React from 'react'
import MarkdownRender from '../Until/MarkdownRender';


import '../../styles/WorkCard.css'
import { workType } from '../../persistance_store/work';
import TimelineElement from '../Until/TimelineElement';


interface props {
    work: workType,
    screenWidth: number,
}

const WorkCards = ({work, screenWidth} : props) => {

  const company_logo = require("../../assets/Images/" + work.imageUrl );

    
  return (
    <div className="workcard-container">
        <div className="org-title">Details</div>
    
        <div className='image-comany-deatils-timeline-conatiner'>

            <div className="image-comany-details-container">
                {/* Layout for row 1: Company Logo*/}
                <div className="company-logo">
                {/* for Desktops */}
                {screenWidth >= 1101 && <img src={company_logo} alt="company_logo" 
                style={{width: '110px', height: '140px',  alignContent: 'center', borderWidth: '1px', borderStyle: 'solid', borderColor: '#ffff', marginTop: '5px'}} />}    
                
                {/* for Tables|| IPads */}
                {screenWidth <= 1100 && screenWidth >= 481 && <img src={company_logo} alt="company_logo" 
                style={{width: '100px', height: '130px',  alignContent: 'center', borderWidth: '1px', borderStyle: 'solid', borderColor: '#ffff', marginTop: '5px'}} />}    
                
                {/* for Mobile */}
                {screenWidth <= 480 && <img src={company_logo} alt="company_logo" 
                style={{width: '90px', height: '120px', alignContent: 'center', borderWidth: '1px', borderStyle: 'solid', borderColor: '#ffff', marginTop: '5px'}} />}
                </div>

                {/* Layout for row 2: Company Details and Role Details */}
                <div className="company-role-item">
                    <div className="org-title">Company</div>
                    <div className="company-name">{work.componyName}</div>
                    <div className="role-title">Title</div>
                    <div className="role-style">{work.roleTitle}</div>
                    <div className="location-style">{work.location.city} {work.location.state}</div>
                </div>
            </div>
        
            {/* Layout for row 3: Role TimeLine */}
            <div className="timeline-style">
            {/* <div className="org-title">Timeline</div> */}
                <TimelineElement startDate={work.startDate} endDate={work.endDate} screenWidth={screenWidth}/>
            </div>
        </div>
    
   

  
        <div className='markdown-style'>
        <div className="org-title">Responsiblity</div>
          <MarkdownRender fileName={work.roleGuidMDName}/>
        </div>
    
        <div className="tech-stack-style">

        </div>

    </div>


  )
}

export default WorkCards

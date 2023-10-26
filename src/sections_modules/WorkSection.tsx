import React, { useState } from 'react'
import { workType } from '../persistance_store/work';
import WorkCards from '../components/Coustom Cards/WorkCards';
import { Button } from '@mui/material';

// import { ThemeProvider, createTheme } from '@mui/system';

import '../styles/Section Styles/WorkSection.css'
import VerticalSideLabel from '../components/Until/VerticalSideLabel';
import SectionLabels from '../components/SectionLabels';
// import VerticalSideLabel from '../components/Until/VerticalSideLabel';

interface props{
    workHistry: workType[],
    screenWidth: number,
}

const WorkSection = ({workHistry, screenWidth} : props) => {
   
    const [compantDeatils, setCompantDeatils] = useState(workHistry[0]); 

    const handleCompanyDetails = (work :workType) => {
        setCompantDeatils(work);
  
    }

    const theme = [
        {
          '&:focus': {
            backgroundColor: '#bcbcbc', 
            color: '#093c50',
          },
          '&:active': {
            backgroundColor: '#bcbcbc', 
            color: '#093c50',
          }
        }
    ]

    const SelectButton = ( screenWidth: number, work :workType) => {
        if (screenWidth >= 1401)  {
            // {/* when for isDesktop */}
            return <Button color='inherit' variant="outlined" onClick={() => {handleCompanyDetails(work)}}  sx={theme}
            style={{textTransform: 'none',   fontSize: 18,   borderColor: '#60b0cf', width:'150px', }}>{work.componyName}</Button> 
        } else if (screenWidth <= 1400 && screenWidth >= 600) {
            // {/* when for isTab */}
             return <Button color='inherit' size="small" variant="outlined" onClick={() => {handleCompanyDetails(work)}}   sx={theme}
             style={{textTransform: 'none',   fontSize: 16,   borderColor: '#60b0cf', width:'120px'}}>{work.componyName}</Button>
        } else if (screenWidth <= 480) {
            // {/* when for isMobile */}
            return <Button color='inherit' size="small" variant="outlined"  onClick={() => {handleCompanyDetails(work)}} sx={theme}
            style={{textTransform: 'none',   fontSize: 12,   borderColor: '#60b0cf', width:'100px'}}>{work.componyName}</Button>
       
        }
      }

  return (
    <>
    <div className="work-section-container">

    <VerticalSideLabel labelText={'My Work'}/>
    <SectionLabels labeltext='Work Experience' labelType='Section' id="work"/>

    <div className='work-section-flex-container'>
    <div className="org-title">Company</div>

    <div className="work-companies-list-flex-iteam">
    {/* <ThemeProvider theme={theme}> */}
    {workHistry.map((work :workType, index: number) => {
      return  <div className="company-name-button-list" key={index}> 
               {SelectButton(screenWidth, work)}</div> 
     })}
     {/* </ThemeProvider> */}
    </div>

    <div className="work-company-card-deatils-flex-iteam">
    <WorkCards work={compantDeatils} screenWidth={screenWidth}/>
    </div>      
    </div>
    </div>
    </>
  )
}

export default WorkSection



   
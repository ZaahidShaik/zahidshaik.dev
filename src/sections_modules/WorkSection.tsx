import React, { useState } from 'react'
import { workType } from '../persistance_store/work';
import WorkCards from '../components/Coustom Cards/WorkCards';
import { Button } from '@mui/material';

// import '../styles/util component styles/MobileTabBar.css'

// import { ThemeProvider, createTheme } from '@mui/system';

import '../styles/Section Styles/WorkSection.css'
import VerticalSideLabel from '../components/Until/VerticalSideLabel';
import SectionLabels from '../components/SectionLabels';
// import VerticalSideLabel from '../components/Until/VerticalSideLabel';

interface props{
    workHistory: workType[],
    screenWidth: number,
}

const WorkSection = ({workHistory, screenWidth} : props) => {
   
    const [companyDetails, setCompanyDetails] = useState(workHistory[0]); 

    const handleCompanyDetails = (work :workType) => {
        setCompanyDetails(work);
  
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

    const isTabActive = ( currentTabName : String) => {
        return (currentTabName === companyDetails.componyName);
      }

    const convertUrl = (url : string) => {
      return require("../assets/Images/" + url);

    }  

    const companyCarousel = (workList :workType[]) => {

        return (
          <>
          <div>{(companyDetails)? companyDetails.componyName:'' }</div>
          <div className='work-carousel-container work-flex-container'>
                 <div className="tab-carousel-wrapper swiper-slide">
                    { workList.map((workTab: workType, index: number) => {
                       return <div key={index} className= {`tab-carousel-btn ${isTabActive(workTab.componyName) ? "is-active": " "}`}
                       onClick={() => {setCompanyDetails(workTab)}}>

                        <div className={`image-container ${isTabActive(workTab.componyName)? "isImageActive": " "}`}>
                        <img src={convertUrl(workTab.imageUrl)} alt="uni_logo" 
                        style={{width: '100px', height: '120px', alignContent: 'center', marginTop: '0px',transition:  '0.5s ease'}} />
                        </div>
                        
                        <div className={`company-name-short-card ${ isTabActive(workTab.componyName) ? " ": "isHidden"}`}>{workTab.componyName}</div>
                        </div>
                    })}  
                  </div>
          </div>
          
          </>
        )
        
      }

  return (
    <>
    <div className="work-section-container">

    <VerticalSideLabel labelText={'My Work'}/>
    <SectionLabels labeltext='Work Experience' labelType='Section' id="work"/>

    {/* {companyCarousel(workHistory)} */}

    <div className='work-section-flex-container'>
    <div className="org-title">Company</div>

    <div className="work-companies-list-flex-iteam">
    {/* <ThemeProvider theme={theme}> */}
    {workHistory.map((work :workType, index: number) => {
      return  <div className="company-name-button-list" key={index}> 
               {SelectButton(screenWidth, work)}</div> 
     })}
     {/* </ThemeProvider> */}
    </div>

    <div className="work-company-card-deatils-flex-iteam">
    <WorkCards work={companyDetails} screenWidth={screenWidth}/>
    </div>      
    </div>
    </div>

    
    </>
  )
}

export default WorkSection



   
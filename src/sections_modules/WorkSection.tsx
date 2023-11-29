import React, { ReactNode, useState } from 'react'
import { techStackType, workType } from '../persistance_store/work';
import { Tab, Tabs } from '@mui/material';


import '../styles/util component styles/MobileTabBar.css';
import '../styles/CardComponentsStyles/RedesignWorkCardStyle.css';
import '../styles/Section Styles/WorkSection.css'


import VerticalSideLabel from '../components/Until/VerticalSideLabel';
import SectionLabels from '../components/SectionLabels';
import RedesignWorkCards from '../components/Coustom Cards/RedesignWorkCards';
import MarkdownRender from '../components/Until/MarkdownRender';
import TechStackTabs from '../components/Until/Tabs/TechStackTabs';
// import VerticalSideLabel from '../components/Until/VerticalSideLabel';

import IconBuilder from '../components/Until/IconBuilder';

// interface KeyValueMap {
//    key: String,
//    component: ReactNode,
// }



const ResponsibilityCard = (responsibilityFileName: String) => { 
  return <>
   <div className="responsibility-container">
       <div className="company-title">Responsibility</div>
       <MarkdownRender fileName={responsibilityFileName}/>
    </div>
  </>
}

const TechStackCard = (techStackArray: techStackType[], screenWidth: number) => {
   return <>
       <div className="techstack-container">
        <div className="company-title">Teach Stack</div>
        <TechStackTabs techStack={techStackArray} screenWidth={screenWidth} />
      </div>
   </>
}


interface mobileTabsProps {
  responsibilityFileName : String,
  techStackArray : techStackType[],
  screenWidth : number
  
}

const componentMapper = ( tabName: String, responsibilityFileName : String, techStackArray : techStackType[], 
   screenWidth : number) => {
     const componentMapList = new Map<String, ReactNode>(); 
       componentMapList.set('Responsibility', ResponsibilityCard(responsibilityFileName));
       componentMapList.set('Tech Stack', TechStackCard(techStackArray, screenWidth));
   return componentMapList.get(tabName);
}

const MobileTabs = ({responsibilityFileName, techStackArray, screenWidth} : mobileTabsProps) => {
  const tabsList: String[] = ['Responsibility', 'Tech Stack'];

  const [activeTab, setActiveTab] = useState(tabsList[0]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
      // console.log(newValue);
      setActiveTab(newValue);
  }
  let fontsize;
  let fontcolor;

  if(screenWidth <= 480 ){
      fontsize = 13;
      fontcolor = '#dbdbdb';
  }
  if(screenWidth >= 480 ){
      fontsize = 13;
      fontcolor = '#dbdbdb';
  }
  

  return <>
     <div className="tab-label-container">
      <Tabs centered
      value={activeTab}
      onChange={handleTabChange} 
      aria-label="small screen tab section">

      <Tab icon={undefined} label={tabsList[0]} value={tabsList[0]} 
             style={{fontSize: fontsize, fontWeight: 'bold', color: fontcolor }}/>

      <Tab icon={undefined} label={tabsList[1]} value={tabsList[1]}
            style={{fontSize: fontsize, fontWeight: 'bold', color: fontcolor }}/>
    </Tabs>
    </div>
    <div>
        {componentMapper(activeTab, responsibilityFileName, techStackArray, screenWidth)}
    </div>
  </>
}



interface props{
    workHistory: workType[],
    screenWidth: number,
}

const WorkSection = ({workHistory, screenWidth} : props) => {
   
    const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
    const [companyDetails, setCompanyDetails] = useState(workHistory[0]); 

    const findIndexById = (workList: workType[], targetId: String) => {
      return workList.findIndex((work) => work.id === targetId);
    }

    const boundCheck = (step: 'forward' | 'backward', currentIndex: number ) => {
      if(step === 'forward'){
        return (currentIndex+1 <= workHistory.length - 1)
      } else if(step === 'backward'){
        return (currentIndex-1 >= 0)
      }
    }

    const handleCompanyDetails = (work :workType) => {
        setCompanyDetails(work);
        setCurrentCompanyIndex(findIndexById(workHistory,work.id));
    }

    const handleArrayActions = (step: 'forward' | 'backward') => {
      if(step === 'backward'){
         if(boundCheck('backward', currentCompanyIndex)) {

          setCurrentCompanyIndex(currentCompanyIndex - 1)
          setCompanyDetails(workHistory[currentCompanyIndex - 1])
          // console.log('update backward');
         }
      } 
      if(step === 'forward'){
         if(boundCheck('forward', currentCompanyIndex)) {
          setCurrentCompanyIndex(currentCompanyIndex + 1)
          setCompanyDetails(workHistory[currentCompanyIndex + 1])
          // console.log('update forward');
         }
      } 
    }

    const isTabActive = ( currentTabName : String) => {
      return (currentTabName === companyDetails.componyName);
    }
    
    const CompanyNavBtns = (work :workType, key: number) => {
      return  <div key={key} className= {`company-name-nav-btns ${isTabActive(work.componyName) ? "isShowing": ""}`} onClick={() => {handleCompanyDetails(work)}}>
                <div key={key}  className={`company-name-outer-layer  ${isTabActive(work.componyName) ? "isActive": " "}`}>
                  <div className="company-name-inner-layer">
                   {work.componyName}
                  </div>
                </div> 
              </div>
    }
    
    const SideBarMenu = (workList :workType[]) => {
      return (
        <>
        <div className="company-title">Company</div>
          <div className= "company-name-button-list"> 
            {workList.map((work :workType, index: number) => {return CompanyNavBtns(work, index)})}
        </div> 
        </>
      )
    }

    const MobileBarMenu = (workList :workType[])  => {
      return (
        <>
        <div className='tab-divider-style  carousel-container flex-container'>
               <div className="tab-carousel-wrapper swiper-slide">
                  {/* { skillsList.map((tabDetail: skillTypes, index: number) => {
                     return <div key={index} className= {`tab-carousel-btn ${isTabActive(tabDetail.stackName) ? "is-active": " "}`}
                     onClick={() => {setStackDetails(tabDetail)}}>{tabDetail.stackName}</div>
                  })}   */}
                   {workList.map((work :workType, index: number) => {return CompanyNavBtns(work, index)})}
                </div>
        </div>
        </>
      )
    }

    const ArrowButtons = (step: 'forward' | 'backward') => {
      let iconName = 'RightArrow';
      let arrowStyle = (step === 'forward') ? "change-left-btn" : "change-right-btn";
      if(step === 'forward') {iconName = 'RightArrow'}
      if(step === 'backward') {iconName = 'LeftArrow'}

      const isNextStepPossible = boundCheck(step, currentCompanyIndex)
      
      return <>
       { isNextStepPossible ? <div className={`change-btn ${arrowStyle}`} onClick={() => handleArrayActions(step)}>{IconBuilder(iconName)}</div> :
          <div className={`change-btn ${arrowStyle} isDisabled`} >{IconBuilder(iconName)}</div> }
      </>
    }


    // const SelectButton = ( screenWidth: number, work :workType) => {
    //     if (screenWidth >= 1401)  {
    //         // {/* when for isDesktop */}
    //         return <Button color='inherit' variant="outlined" onClick={() => {handleCompanyDetails(work)}}  sx={theme}
    //         style={{textTransform: 'none',   fontSize: 18,   borderColor: '#60b0cf', width:'150px', }}>{work.componyName}</Button> 
    //     } else if (screenWidth <= 1400 && screenWidth >= 600) {
    //         // {/* when for isTab */}
    //          return <Button color='inherit' size="small" variant="outlined" onClick={() => {handleCompanyDetails(work)}}   sx={theme}
    //          style={{textTransform: 'none',   fontSize: 16,   borderColor: '#60b0cf', width:'120px'}}>{work.componyName}</Button>
    //     } else if (screenWidth <= 480) {
    //         // {/* when for isMobile */}
    //         return <Button color='inherit' size="small" variant="outlined"  onClick={() => {handleCompanyDetails(work)}} sx={theme}
    //         style={{textTransform: 'none',   fontSize: 12,   borderColor: '#60b0cf', width:'100px'}}>{work.componyName}</Button>
       
    //     }
    //   }

    // const convertUrl = (url : string) => {
    //   return require("../assets/Images/" + url);

    // }  

    // const companyCarousel = (workList :workType[]) => {

    //     return (
    //       <>
    //       <div>{(companyDetails)? companyDetails.componyName:'' }</div>
    //       <div className='work-carousel-container work-flex-container'>
    //              <div className="tab-carousel-wrapper swiper-slide">
    //                 { workList.map((workTab: workType, index: number) => {
    //                    return <div key={index} className= {`tab-carousel-btn ${isTabActive(workTab.componyName) ? "is-active": " "}`}
    //                    onClick={() => {setCompanyDetails(workTab)}}>

    //                     <div className={`image-container ${isTabActive(workTab.componyName)? "isImageActive": " "}`}>
    //                     <img src={convertUrl(workTab.imageUrl)} alt="uni_logo" 
    //                     style={{width: '100px', height: '120px', alignContent: 'center', marginTop: '0px',transition:  '0.5s ease'}} />
    //                     </div>
                        
    //                     <div className={`company-name-short-card ${ isTabActive(workTab.componyName) ? "is-active": ""}`}>{workTab.componyName}</div>
    //                     </div>
    //                 })}  
    //               </div>
    //       </div>
          
    //       </>
    //     )

    //   }

  return (
    <>
    <div className="work-section-container">

    <VerticalSideLabel labelText={'My Work'}/>
    <SectionLabels labeltext='Work Experience' labelType='Section' id="work"/>

    <div className='work-section-flex-container'>

          <div className="work-nav-name-container">
          {(screenWidth > 480) ? SideBarMenu(workHistory): MobileBarMenu(workHistory)} 
          </div>
        <div className="work-card-section">
        <div className="card-id-section">{companyDetails.id}</div>


        <div className="work-card-details">
          
        <div className="work-company-logo-card">
          <RedesignWorkCards work={companyDetails} screenWidth={screenWidth}/>
        </div> 

       <div className="work-card-action-btn">
       {/* {"< | >"} */}
       {ArrowButtons('backward')}
       {/* <div className="change-btn change-left-btn" onClick={() => handleArrayActions('backward')}>{IconBuilder('LeftArrow')}</div> */}
       <div className="change-btn  change-divider">{IconBuilder('VerticalDivider')}</div>
       {ArrowButtons('forward')}
       {/* <div className="change-btn change-right-btn" onClick={() => handleArrayActions('forward')}>{IconBuilder('RightArrow')}</div> */}
       </div>


        </div>
        </div>

    </div>

    {/* title and role */}
    {/* {TitleSection(companyDetails.roleTitle)} */}



  
     
    {/* Work responsibility and tech stack tabs */}
    { (screenWidth <= 1100) ? <MobileTabs  responsibilityFileName={companyDetails.roleGuidMDName} 
    techStackArray={companyDetails.techStack} screenWidth={screenWidth}/> : <></>}


    { (screenWidth >= 1100) ? 
          <div className="rv-work-duty-tech-section">
            {ResponsibilityCard(companyDetails.roleGuidMDName)}
            {TechStackCard(companyDetails.techStack, screenWidth)}
          </div> : <></>}

    </div>
    
    </>
  )
}

export default WorkSection



   
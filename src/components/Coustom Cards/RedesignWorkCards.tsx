import React, { useState } from 'react'
import { dateType, workType } from '../../persistance_store/work'
import { HiLocationMarker } from "react-icons/hi";

import '../../styles/CardComponentsStyles/RedesignWorkCardStyle.css';
import { DateComponent, PresentComponent } from '../Until/TimelineElement';
import Connector from '../Until/Connector';




const RoleChips = (rolesList: String[]) => {
    return rolesList.map((role: String, index: number) => (
            <div className="role-button-div">{role}</div>))
  }

const RoleSection = (rolesList: String[]) => {
    return <>
    <div className="rv-work-roles flex-colum">
          <div className="role-title">Role</div>
          <div className="roles-container flex-row">
              {RoleChips(rolesList)}
          </div>
    </div>
    </>
}


const LocationSection = (city : String, state : String) => {
    return <>
            <div className="location-container flex-center-colum">
            <div className="role-title">Location</div>
            <div className="location-style"> <HiLocationMarker color='#757b9e'/> {city}, {state}</div>
            </div>
           </>
}

const TitleSection = (title : String) => {
    return <>
            <div className="role-tile-container flex-center-colum">
                <div className="role-title">Title</div>
                <div className="role-title-style">{title}</div>
            </div>
    </>
}

export const StartDateSection = (date : dateType) => {
    return <>
        <div className="start-date-left-container flex-center-colum">
            <div className="date-title">Start Date</div>
            <DateComponent date={date} />
        </div>
    </>
}

export const EndDateSection = (date : dateType, screenWidth: number) => {
    return <>
        <div className="end-date-left-container flex-center-colum">
            <div className="date-title">End Date</div>
            {(date.year !== 0) ? <DateComponent date={date}/> : <PresentComponent screenWidth={screenWidth}/>}
        </div>
    </>
    
}

const convertUrl = (url : string) => {
    return require("../../assets/EditedImage/" + url);
}

const ImageBox = ( width: String, height : String, url: string) => {
    return <img src={url} alt="company_logo" style={{width: `${width}`, height: `${height}`, 
    alignContent: 'center', 
    // borderWidth: '1px', borderStyle: 'solid', 
    // borderColor: '#ffff',
    }} />
}


const logoImageBuilder = (screenWidth: number, url: string) => {
    // {/* for Desktops */}
    if(screenWidth >= 1101){
    return ImageBox('300px', '250px' ,url)
    }    
    
    // {/* for Tables|| IPads */}
    if(screenWidth <= 1100 && screenWidth >= 481)
    {  return ImageBox('250px', '180px' ,url) }
    
    // {/* for Mobile */}
    if(screenWidth <= 480)
    {  return ImageBox('250px', '180px' ,url) }
}


interface props {
    work: workType,
    screenWidth: number,
}

const RedesignWorkCards = ({work, screenWidth} : props) =>  {

    interface stateObject {
       showStartEndDate: boolean,
       showTitle: boolean,
       showLocation: boolean,
    }

    const defaultState: stateObject = {
        showStartEndDate: false,
        showTitle: false,
        showLocation: false,
    }



    const [toggleShowSection, setToggleShowSection] = useState(defaultState);
    
    const HandleToggleStates = (updateFieldName: String ) => {

        switch(updateFieldName) {
            case 'all': {
                setToggleShowSection({
                    showStartEndDate: false,
                    showTitle: false,
                    showLocation: false,
                })
                break;
            }
            case 'title': {
                setToggleShowSection({
                    ...toggleShowSection,
                    // showStartEndDate: false,
                    showTitle: !isSectionHidden('title'),
                    // showLocation: false,
                })
                break;
            }
            case 'location': {
                setToggleShowSection({
                    // showStartEndDate: false,
                    // showTitle: false,
                    // showLocation: false,
                    ...toggleShowSection,
                    showLocation: !isSectionHidden('location'),
                })
                break;
            }
            case 'dates': {
                setToggleShowSection({
                    ...toggleShowSection,
                    showStartEndDate: !isSectionHidden('dates'),
                    
                    // showTitle: false,
                    // showLocation: false,
                })
                break;
            }
            default: {
                console.log("Pls, give a valid field to update")
                break;
            }
        }
    }

    const ToggleButtons = () => {
        return <>
         <div className="toggle-btn-container">
            <div className="role-title">Show : </div>
            <div className={`toggle-btn toggle-all-btn ${isSectionHidden('all') ? "isActive" : ""}`} onClick={() => HandleToggleStates('all')}>All</div>
            <div className={`toggle-btn toggle-location-btn ${isSectionHidden('location')? "isActive" : ""}`} onClick={() => HandleToggleStates('location')}>Location</div>
            <div className={`toggle-btn toggle-title-btn ${isSectionHidden('title')? "isActive" : ""}`} onClick={() => HandleToggleStates('title')}>Title</div>
            <div className={`toggle-btn toggle-start-end-dates-btn ${isSectionHidden('dates')? "isActive" : ""}`} onClick={() => HandleToggleStates('dates')}>Dates</div>
         </div>
        </>
    }

    const isSectionHidden = (sectionName: String) => {
        switch (sectionName) {
            case 'title' : {
                return toggleShowSection.showTitle;
            }
            case 'location' : {
                return toggleShowSection.showLocation;
            }
            case 'dates' : {
                return toggleShowSection.showStartEndDate;
            }
            case 'all' : {
                console.log("checking for all", JSON.stringify(toggleShowSection));
                return (toggleShowSection.showStartEndDate && toggleShowSection.showLocation && toggleShowSection.showTitle)
            }
        }
    }
    

    return (
    <div className='rv-work-card-container'>
        {/* Work Company logo, details, role tags, timeline  */}
        <div className="rv-work-company-details-section">

                <div className="rv-company-info flex-center-row">
                   
                   {/* start date */}
                   <div className={`rv-startDate-container  ${isSectionHidden('dates') ? "isHidden": " "}`}>
                   <Connector child={StartDateSection(work.startDate)} connectorType={'startDate'} screenWidth={screenWidth}/>
                   </div>


                   {/* end date */}
                   <div className={`rv-endDate-container  ${isSectionHidden('dates') ? "isHidden": " "}`}>
                   <Connector child={EndDateSection(work.endDate,screenWidth)} connectorType={'endDate'} screenWidth={screenWidth}/>
                   </div>

                     {/* Company logo */}
                    <div className="rv-company-image">
                        <div className='rv-image-layer-outer'>
                            <div className='rv-image-layer-inner'>
                                {logoImageBuilder(screenWidth, convertUrl(work.imageUrl))}
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className={`rv-location-container  ${isSectionHidden('location') ? "isHidden": " "}`}>
                    <Connector child={LocationSection(work.location.city, work.location.state)} connectorType={'location'} screenWidth={screenWidth}/>         
                    </div>

                    {/* Title */}
                    <div className={`rv-title-container  ${isSectionHidden('title') ? "isHidden": " "}`}>
                    <Connector child={TitleSection(work.roleTitle)} connectorType={'title'} screenWidth={screenWidth}/>
                    </div>
                    
                    {/* Company Name */}
                    {/* <div className="company-name-container">
                                <div className="org-title">Company</div>
                                <div className="company-name">{work.componyName}</div>
                    </div> */}
                </div>

             </div>
            
        {/* {(screenWidth <=500) ? TitleSection(work.roleTitle): <></>} */}
        <div className="rv-additional-info-section">
        {ToggleButtons()}
        {RoleSection(work.roles)}
        </div>

    </div>
)}

export default RedesignWorkCards

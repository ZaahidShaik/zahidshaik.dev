import React, { useState } from 'react'

import '../../styles/util component styles/MobileTabBar.css'
import { skillTypes } from '../../persistance_store/skills';

interface props {
    tabLabelsList : skillTypes[];
}

const MobileTabBar = ({tabLabelsList} : props) => {

  const [tabDetails, setTabDetails] = useState(tabLabelsList[0]); 

  return (
    <>
    <div className='tab-divider-style  carousel-container flex-container'>
           <div className="tab-carousel-wrapper swiper-slide">
              { tabLabelsList.map((tabDetail: skillTypes, index: number) => {
                 return <div key={index} className= {`tab-carousel-btn ${(tabDetail.stackName === tabDetails.stackName) ? "is-active": " "}`}
                 onClick={() => {setTabDetails(tabDetail)}}>{tabDetail.stackName}</div>
              })}  
            </div>
    </div>
    <div>{(tabDetails)? tabDetails.stackName:'' }</div>
    </>
  )
}

export default MobileTabBar
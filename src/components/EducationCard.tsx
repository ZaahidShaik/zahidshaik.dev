import React from 'react'

// import logo from '../assets/Images/ou_logo.png'
import { educationType } from '../persistance_store/eduation'
import '../styles/EducationCard.css';


interface props {
  education: educationType,
  screenWidth: number,
}


const EducationCard = ({education, screenWidth} : props) => {

const uni_logo = require("../assets/Images/" + education.imageUrl);



  return (
    <div className='education-container-0'>
    <div className='education-container'>

      {/* Layout for row 1: School Logo*/}
      <div className='image-layer-outer'>
      <div className='image-layer-inner'>
      {/* for Desktops */}
      {screenWidth >= 1101 && <img src={uni_logo} alt="uni_logo" style={{width: '100px', height: '120px', alignContent: 'center', marginTop: '0px' }} />}
      
      {/* for Tablets */}
      {screenWidth <= 1100 && screenWidth >= 481 && <img src={uni_logo} alt="uni_logo" style={{width: '100px', height: '120px', alignContent: 'center', marginTop: '0px' }} />}

      {/* for Mobiles */}
      {screenWidth <= 480 && <img src={uni_logo} alt="uni_logo" style={{width: '80px', height: '110px', alignContent: 'center', marginTop: '0px' }} />}
      
      </div>
      </div>
      
      {/* Layout for row 2 : Degree Detailes*/}
      <div className='education-details'> 

      <div className='desgree-type-styles'>{education.degreeTitle}</div>
      <div className='school-name'>{education.uniName}</div>
      <div className='degree-title'>Major</div>
      <div className='major-style'>{education.course}</div>
      <div className='graducation-style'>{education.graduationMonth} {education.yrOfGraduation}</div>

      </div>
      
    </div>
    </div>
  )
}

export default EducationCard

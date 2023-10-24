// import Box from '@mui/material/Box/Box'
import Chip from '@mui/material/Chip/Chip'
// import Stack from '@mui/material/Stack/Stack'
import React from 'react'

import '../styles/Chipstack.css'


interface props {
    technologyList: String[],
    screenWidth: number;
  
  }
const Chipstack = ({ technologyList, screenWidth }: props) => {
  return (
    <>
    <div className='stack-container'>    
        {screenWidth >= 1401 && technologyList.map((tech:String, index: number) => {
            return <Chip key={index} sx = {{color: '#ffffff', fontSize: 16, m:0.2,borderColor: '#7a95b7'}} variant="outlined" size="small" label={tech} />
         })}

        {screenWidth <= 1400 && screenWidth >= 481 && technologyList.map((tech:String, index: number) => {
            return <Chip key={index} sx = {{color: '#ffffff', fontSize: 16, m:0.2,borderColor: '#7a95b7'}} variant="outlined" size="small" label={tech} />
         })}

       {screenWidth <= 480 && technologyList.map((tech:String, index: number) => {
            return <Chip key={index} sx = {{color: '#ffffff', fontSize: 16, m:0.2,borderColor: '#7a95b7'}} variant="outlined" size="small" label={tech} />
         })}
         
    </div>
    </>
  )
}

export default Chipstack

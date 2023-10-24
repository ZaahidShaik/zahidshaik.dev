import React, { useState } from 'react'

import Modal from '@mui/material/Modal';
import { techStackType } from '../../persistance_store/projects';
import '../../styles/util component styles/PopoverCard.css';
import Chipstack from '../Chipstack';
import { AiOutlineClose } from 'react-icons/ai';
import { MdDoubleArrow } from 'react-icons/md';
import Button from '@mui/material/Button/Button';

interface props {
    title: String;
    techStackData: techStackType[],
    description: String,
    screenWidth: number,
}

const PopoverCard = ({ title, techStackData, description, screenWidth} : props) => {

    const [open, setOpen] = useState(false);
   const updateModelState = () => { setOpen(!open)  }

  

  return (
    <>
    {/* <Link component="button" variant="body2" onClick={updateModelState}>
      more..
    </Link> */}
      
     {/* when for isDescktop */}
     {screenWidth >= 1401 && <Button color='inherit' size="small" variant="text"  onClick={updateModelState} endIcon={<MdDoubleArrow fontSize="inherit"/>}
                    style={{textTransform: 'none',   fontSize: 16,   borderColor: '#60b0cf',}}>Learn more </Button>}

    {/* when for isTab */}
    {screenWidth <= 1400 && screenWidth >= 600 && <Button color='inherit' size="small" variant="text"  onClick={updateModelState} endIcon={<MdDoubleArrow fontSize="inherit"/>}
                    style={{textTransform: 'none',   fontSize: 12,   borderColor: '#60b0cf',}}>Learn more</Button>}

    {/* when for isMovile */}
    {screenWidth <= 480 && <Button color='inherit' size="small" variant="text"  onClick={updateModelState} endIcon={<MdDoubleArrow fontSize="inherit"/>}
                    style={{textTransform: 'none',   fontSize: 12,   borderColor: '#60b0cf',}}>Learn more</Button>}


    <Modal open={open} onClick={updateModelState}>   
    <div className="main-container"> 

    <div className="model-container-outer-layer"> 
    <div className="model-container">
        {/* Title section */}
        <div className='header-section'>
        <div className="model-title-style">Project Details</div>
        
        <div className='header-section-tile-line'>

        <div className="cards-title-style">{title}</div>
         
        <div className='close-button' onClick={updateModelState}>
        {/* <IconButton color="inherit" size="large" onClick={updateModelState}> */}
        <AiOutlineClose fontSize="inherit"/>
        {/* </IconButton> */}
        </div>
        </div>
        </div>
        <div className='card-divider-style'></div>

        {/* Description */}
        <div className="card-description-styles">{description}</div>

        {/* Tech Stack */}
        <div className="tech-stack-style">
        {techStackData.map((stack:techStackType, index:number) => {
        return  <div className='chips-styles' key={index}>
                <div className='stack-name'> # {stack.stackName} </div>
                <Chipstack technologyList={stack.technoloyList} screenWidth={screenWidth}/>
                </div>

        })} 
        </div>
        <div className='card-divider-style'></div>
        <div></div>
        

    </div>
    </div> 

    </div> 
    </Modal>
    </>
  )
}

export default PopoverCard

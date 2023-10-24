import React from 'react'
import '../../styles/component styles/MobileNavbar.css';

import { IconButton } from '@mui/material';
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { IconeNavbuttonType } from '../../models/models';




interface props {
    buttonType: IconeNavbuttonType,

}

const MobileNavbar = ({buttonType}: props) => {


    function getButton(button: String, link: string) {
        

        switch(button){
            case 'Home': {
              return     <IconButton color="inherit" target="_blank" size="large" href="#home">
                           <AiFillHome fontSize="inherit"/>      
                          </IconButton>
            //   break;
            }
            case 'About': {
                return     <IconButton color="inherit" target="_blank" size="large" href="#about">
                             <SiAboutdotme fontSize="inherit" />
                            </IconButton>
                // break;
            }
            case 'Projects': {
                return     <IconButton color="inherit" target="_blank" size="large" href="#projects">
                             <FaProjectDiagram fontSize="inherit"/>
                            </IconButton>
                // break;
            }
            case 'Skills':  {
                return     <IconButton color="inherit" target="_blank" size="large" href="#skills">
                             <BsTools fontSize="inherit"/>
                            </IconButton>
                // break;
            }
            case 'Work':  {
                return     <IconButton color="inherit" target="_blank" size="large" href={"#work"}>
                             <MdOutlineWork fontSize="inherit"/>
                             {/* MdOutlineWorkOutline */}
                            </IconButton>
                // break;
            }
            case 'Education':  {
                return     <IconButton color="inherit" target="_blank" size="large" href={"#education"}>
                             <PiCertificateBold fontSize="inherit"/>
                            </IconButton>
                // break;
            }
            default: { 
                return null
                // break; 
             }
    
           
    }
    }
    

  return (
    <>
    {getButton(buttonType," ")}
    </>
  )
}

export default MobileNavbar

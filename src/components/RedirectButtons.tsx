import { IconButton } from '@mui/material';
import React from 'react'

import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";


export enum buttonTypes{
    GitHub,
    LinkedIn,
    LiveDemo,
    Gmail,
}

interface props {
    buttonType: 'GitHub'| 'LinkedIn' | 'LiveDemo' | 'Gmail',
    redirectLink: string,
}

const RedirectButtons = ({buttonType,redirectLink}: props) => {

    function getButton(button: String, link: string) {
        

        switch(button){
            case 'GitHub': {
              return     <IconButton color="inherit" target="_blank" size="large" href={link}>
                           <VscGithub fontSize="inherit"/>
                          </IconButton>
              // break;
            }
            case 'LinkedIn': {
                return     <IconButton color="inherit" target="_blank" size="large" href={link}>
                             <AiFillLinkedin fontSize="inherit" />
                            </IconButton>
                // break;
            }
            case 'LiveDemo': {
                return     <IconButton color="inherit" target="_blank" size="large" href={link}>
                             <RiLiveLine fontSize="inherit"/>
                            </IconButton>
                // break;
            }
            case 'Gmail':  {
                return     <IconButton color="inherit" target="_blank" size="large" href={link}>
                             <BiLogoGmail fontSize="inherit"/>
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
    <div>
      {getButton(buttonType,redirectLink)}
    </div>
  )
}

export default RedirectButtons




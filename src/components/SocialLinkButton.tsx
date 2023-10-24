import { IconButton } from '@mui/material'
import '../styles/SocialLinkButton.css'
import React from 'react'
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';

function SocialLinkButton() {
  return (
    <div>
    <div className='diamond'>
    <IconButton aria-label="camera" color="inherit" size="large" >
          <CameraOutlinedIcon fontSize="inherit" />
    </IconButton>
    </div>
    <div className='diamond_line_frame'></div>
    </div>
  )
}

export default SocialLinkButton
import IconButton from '@mui/material/IconButton';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import React, { useState } from 'react'

import '../styles/statebtnStyles.css'

function StateButton(
    props:{
        zeroStateIcone?:String;
        oneStateIcon?:String;
        stateAction?: any;
    }
) {
   const [btnState, setBtnState] = useState(false)

  return (
    <div className='btn_style'>
    <IconButton color="inherit" aria-label="add an alarm" size="large" 
                onClick={() => setBtnState(state => !state)}>
    {btnState ? <FlareOutlinedIcon fontSize="inherit"/> :<NightlightRoundOutlinedIcon fontSize="inherit"/>}
    </IconButton>
    </div>

  )
}

export default StateButton
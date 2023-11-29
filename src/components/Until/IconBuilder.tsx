import React from 'react'

import '../../styles/util component styles/IconContainer.css';
import { getIconByName } from '../../services/IconBuilder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const IconBuilder = (iconName: String) => {
  let Icon = getIconByName(iconName);
  console.log(Icon)

  if(Icon === undefined) {Icon = ChevronRightIcon} 
  return (
      <Icon fontSize="inherit"/>
  )
}

export default IconBuilder

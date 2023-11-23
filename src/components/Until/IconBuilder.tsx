import React from 'react'

import '../../styles/util component styles/IconContainer.css';
import { getIconByName } from '../../services/IconBuilder';


const IconBuilder = (iconName: String) => {
  const Icon = getIconByName(iconName);
  return (
      <Icon fontSize="inherit"/>
  )
}

export default IconBuilder

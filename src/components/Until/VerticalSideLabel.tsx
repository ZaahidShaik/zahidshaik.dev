import React from 'react'
import '../../styles/util component styles/VerticalSideLabelStyles.css'

interface props{
    labelText: String,
}

const VerticalSideLabel = ({labelText} : props) => {
  return (
    <div className='section-side-title'> 
      {labelText}
    </div>
  )
}

export default VerticalSideLabel

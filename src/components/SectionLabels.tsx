import React, { CSSProperties } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import '../styles/SectionLabelsStyles.css'

interface props {
    labeltext: String,
    Styles?: CSSProperties,
    link?: String,
    labelType: 'Section' | 'SubSection',
    id?: string
}

const SectionLabels = ({labeltext , Styles, link, labelType, id}: props) => {


  return (
    <>
    <div id={id} style={Styles} className={labelType === 'Section' ? 'section-style label-styles': 'sub-section-style label-styles'}>
         {labeltext}
     
    </div>
   {labelType === 'Section' ? <div className="icon-style"><MdKeyboardDoubleArrowDown fontSize="inherit"/></div> : <></>}
    {/* <div className='divider-style'></div>  */}
    </>
  )
}

export default SectionLabels

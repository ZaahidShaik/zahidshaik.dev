import React, { FC, ReactNode } from 'react'

import { GoDotFill } from "react-icons/go";

import '../../styles/util component styles/Connector.css'



/*
top-down
bottom-up
left-right
right-left

top - right : Location Div
length : 50px ( container height & line 2 width)
line 1 & 3 width = 20px & marginRight = -15px
<div className="container" style={{height: '50px'}}>
      <div className="bottom-end-icon"><GoDotFill/></div>
      <div className="line1" style={{width: '20px', marginRight: "-15px"}}></div>
      <div className="line2" style={{width: '50px'}}></div>
      <div className="line3" style={{width: '20px', marginLeft: "-15px"}}></div>
      <div className="top-start-icon flex-row"><GoDotFill/>
      <div className="child-style">{child}</div> 
      </div>
</div>

bottom - right : Title Div

angle = -120
length = 100

    <div className="container" style={{height: `${lengthT}px`}}>
      <div className="child-style">{child}</div> 
      <div className="bottom-end-icon" style={{marginTop: "-7px", alignSelf: 'start'}}><GoDotFill/>
      </div>

      <div className="line1" style={{width: `${lengthT/4}px`, marginRight: `-${(lengthT/4)-2}px`, alignSelf: 'start'}}></div>
      <div className="line2" style={{width: `${lengthT}px`, alignSelf: 'center', transform: `rotate(${rotationAngle}deg)`}}></div>
      <div className="line3" style={{width: `${lengthT/4}px`, marginLeft: `-${(lengthT/4)-2}px`, alignSelf: 'end'}}></div>
      
      <div className="top-start-icon flex-row" style={{marginBottom: "-18px", alignSelf: 'end'}}><GoDotFill/>
      <div className="child-style">{child}</div> 
      </div>
   </div>


*/
interface BaseFrameProps{
    child : ReactNode,
    childNodeLocation : 'top' | 'bottom',
    rotationAngle: number,
    centerLength: number,
    topMargin: number,
    bottomMargin: number,
    screenWidth: number,
}

const BaseFrameLeftTopRightDownLength100: FC<BaseFrameProps> = ({child, childNodeLocation, rotationAngle, centerLength, topMargin, bottomMargin, screenWidth } : BaseFrameProps) => {
    let dendriteWidth;
    
    if(screenWidth <=480){
       dendriteWidth =  centerLength/6;
    }

    if(screenWidth >=480){
        dendriteWidth =  centerLength/4;

    }
    
    
    return (
        <>
        <div className="container" style={{height: `${centerLength}px`}}>
          {(childNodeLocation === 'top') ? <div className="child-style">{child}</div> : <></> }
          <div className="bottom-end-icon" style={{marginTop: `${topMargin}px`, alignSelf: 'start'}}><GoDotFill/>
          </div>
    
          <div className="line1" style={{width: `${dendriteWidth}px`, marginRight: `-${(centerLength/4)-2}px`, alignSelf: 'start'}}></div>
          <div className="line2" style={{width: `${centerLength}px`, alignSelf: 'center', transform: `rotate(${rotationAngle}deg)`}}></div>
          <div className="line3" style={{width: `${dendriteWidth}px`, marginLeft: `-${(centerLength/4)-2}px`, alignSelf: 'end'}}></div>
          
          <div className="top-start-icon flex-row" style={{marginBottom: `${bottomMargin}px`, alignSelf: 'end'}}><GoDotFill/>
          {(childNodeLocation === 'bottom') ? <div className="child-style">{child}</div> : <></> }
          </div>
       </div>
        </>
    )
}

const BaseFrameLeftTopRightDown85DegLength100: FC<BaseFrameProps> = ({child, childNodeLocation, rotationAngle, centerLength, topMargin, bottomMargin, screenWidth } : BaseFrameProps) => {
    let dendriteWidth;
    
    if(screenWidth <=480){
       dendriteWidth =  centerLength/6;
    }

    if(screenWidth >=480){
        dendriteWidth =  centerLength/4;

    }
    
    
    return (
        <>
        <div className="container" style={{height: `${centerLength}px`}}>
          {(childNodeLocation === 'top') ? <div className="child-style">{child}</div> : <></> }
          {/* <div className="bottom-end-icon" style={{marginTop: `${topMargin}px`, alignSelf: 'start'}}><GoDotFill/></div> */}
    
          
          <div className="line2" style={{width: `${centerLength}px`, alignSelf: 'center', transform: `rotate(${rotationAngle}deg)`}}></div>

          <div className="line1" style={{width: `${dendriteWidth}px`, marginLeft: `-${(centerLength/2)-2}px`, alignSelf: 'start'}}></div>
          <div className="bottom-end-icon" style={{marginTop: `${topMargin}px`, alignSelf: 'start'}}><GoDotFill/></div>
          
          <div className="line3" style={{width: `${dendriteWidth}px`, marginLeft: `-${(centerLength/2)-2}px`, alignSelf: 'end'}}></div>
          
          <div className="top-start-icon flex-row" style={{marginBottom: `${bottomMargin}px`, alignSelf: 'end'}}><GoDotFill/>
          {(childNodeLocation === 'bottom') ? <div className="child-style">{child}</div> : <></> }
          </div>
       </div>
        </>
    )
}

const BaseFrameRightTopLeftDownLength50: FC<BaseFrameProps> = ({child, childNodeLocation, rotationAngle, centerLength, topMargin, bottomMargin, screenWidth} : BaseFrameProps) => {
    let dendriteWidth;
    let bottomMarginChild = bottomMargin -15;
    if(screenWidth <=480){
        dendriteWidth =  centerLength/7;
        bottomMarginChild = bottomMargin -5;
     }
 
     if(screenWidth >=480){
         dendriteWidth =  centerLength/4;
 
     }
    
    return (
        <>
        <div className="container" style={{height: `${centerLength}px`}}>
          {(childNodeLocation === 'bottom') ? <div className="child-style" style={{marginBottom: `${bottomMarginChild}px`, alignSelf: 'end'}}>{child}</div> : <></> }
          <div className="bottom-end-icon" style={{marginBottom: `${bottomMargin}px`, alignSelf: 'end'}}><GoDotFill/>
          </div>
    
          <div className="line1" style={{width: `${dendriteWidth}px`, marginRight: `-${(centerLength/4)-2}px`, alignSelf: 'end'}}></div>
          <div className="line2" style={{width: `${centerLength}px`, alignSelf: 'center', transform: `rotate(${rotationAngle}deg)`}}></div>
          <div className="line3" style={{width: `${dendriteWidth}px`, marginLeft: `-${(centerLength/4)-2}px`, alignSelf: 'start'}}></div>
          
          <div className="top-start-icon flex-row" style={{marginTop: `${topMargin}px`, alignSelf: 'start'}}><GoDotFill/>
          {(childNodeLocation === 'top') ? <div className="child-style">{child}</div> : <></> }
          </div>
       </div>
        </>
    )
}


interface ChildProps{
    child : ReactNode,
    screenWidth: number,
}
const TitleConnector: FC<ChildProps> = ({child, screenWidth} : ChildProps) => {

    {/* for Mobile */}
    if(screenWidth <= 480){
        return <BaseFrameRightTopLeftDownLength50 child={child} childNodeLocation={'top'}
        rotationAngle={-60} centerLength={50} topMargin={-9} bottomMargin={-12} screenWidth={screenWidth}/>
    }
    else 
    if(screenWidth <= 1100){
        return <BaseFrameLeftTopRightDownLength100 child={child} childNodeLocation={'bottom'}
        rotationAngle={-120} centerLength={60} topMargin={-8} bottomMargin={-17} screenWidth={screenWidth}/>
    } 
     else {
        return <BaseFrameLeftTopRightDownLength100 child={child} childNodeLocation={'bottom'}
        rotationAngle={-120} centerLength={100} topMargin={-7} bottomMargin={-19} screenWidth={screenWidth}/>
    }
}

const LocationConnector: FC<ChildProps> = ({child, screenWidth} : ChildProps) => {
    let length = 60
    if(screenWidth <=480 ) {length = 110}
    return <BaseFrameRightTopLeftDownLength50 child={child} childNodeLocation={'top'}
    rotationAngle={-60} centerLength={length} topMargin={-8} bottomMargin={-12} screenWidth={screenWidth}/>
}

const StartDateConnector: FC<ChildProps> = ({child, screenWidth} : ChildProps) => {

    // {/* for Mobile */}
    if(screenWidth <= 480){
        return <BaseFrameRightTopLeftDownLength50 child={child} childNodeLocation={'bottom'}
        rotationAngle={-60} centerLength={50} topMargin={-8} bottomMargin={-12} screenWidth={screenWidth}/>
    } else {
        return <BaseFrameLeftTopRightDownLength100 child={child} childNodeLocation={'top'}
        rotationAngle={-120} centerLength={100} topMargin={-8} bottomMargin={-7} screenWidth={screenWidth}/>
    }

}

const EndDateConnector: FC<ChildProps> = ({child, screenWidth} : ChildProps) => {
    let length = 60
    if(screenWidth <= 480 ){length = 110}
    return <BaseFrameRightTopLeftDownLength50 child={child} childNodeLocation={'bottom'}
    rotationAngle={-60} centerLength={length} topMargin={-7} bottomMargin={-11} screenWidth={screenWidth}/>
}

interface ConnectorProps{
    child : ReactNode,
    screenWidth: number,
    connectorType: 'location' | 'title' | 'startDate' | 'endDate'
}

const Connector: FC<ConnectorProps> = ({child, screenWidth, connectorType} : ConnectorProps) => {
    return (
    <>
    {(connectorType === 'location') ? <LocationConnector child={child} screenWidth={screenWidth}/> : <></>}
    {(connectorType === 'title') ? <TitleConnector child={child} screenWidth={screenWidth}/> : <></>}
    {(connectorType === 'startDate') ? <StartDateConnector child={child} screenWidth={screenWidth}/> : <></>}
    {(connectorType === 'endDate') ? <EndDateConnector child={child} screenWidth={screenWidth}/> : <></>}
    </>
  )
}

export default Connector

import React, { FC } from 'react'
import { dateType } from '../../persistance_store/work';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import '../../styles/util component styles/TimelineElement.css';

interface dateProps {
  date : dateType
}

export const DateComponent = ({date} : dateProps) => {
  return (
    <>
    <div className="date-container">
    <div className="date-month-container">{date.month}</div>
    <div className="date-year-container">{date.year}</div>
    </div>
    </>
  )
}
interface presentProps {
  screenWidth: number
}
export const PresentComponent = ({screenWidth}: presentProps) => {
  return (
  <>
  <div className="date-container">
    { (screenWidth <= 480) ? <div className="current-container">Present</div>: 
    (<><div className="current-container">Current</div>
    <div className="employer-container">Employer</div></>)
    }

  </div>
  </>)

}


interface props{
    startDate: dateType,
    endDate: dateType,
    currentlyAtCompany: Boolean,
    screenWidth: number,
}

// const TimelineElement = ({startDate, endDate, screenWidth} : props) => {

//    const fontSize: string = (screenWidth < 480 || screenWidth === 480) ? '14px' : '16px';
//   //  const dotWidth: string = (screenWidth < 480 || screenWidth === 480) ? '2px' :  '2px';
//    const textWidth: string = (screenWidth < 480 || screenWidth === 480) ? '170px' :  '120px';

  
//     const timelineDotStyle = { borderColor: '#60b0cf',  borderWidth: '2px'};

//     const timelineTextStyle = { fontSize: fontSize, fontWeight: 'bold', width: textWidth}

//   return (
//     <div className='timeline-container' >
//     <Timeline position="alternate-reverse">
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot variant="outlined" style={timelineDotStyle}/>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent style={timelineTextStyle}>{startDate.month} {startDate.year}</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot variant="outlined" style={timelineDotStyle}/>
//         </TimelineSeparator>
//         <TimelineContent style={timelineTextStyle}>{endDate.month} {endDate.year}</TimelineContent>
//       </TimelineItem>
//     </Timeline>
      
//     </div>
//   )
// }


const TimelineElement = ({startDate, endDate, currentlyAtCompany, screenWidth} : props) => {

  return (
    <>
    <div className="timeline-container">
        <div className="start-date-container">
          {/* {DateComponent(startDate)} */}
        </div>

        <div className="line-divider"> </div>
        
        <div className="end-date-container">
          {/* {(!currentlyAtCompany) ? DateComponent(endDate) : PresentComponent()} */}
        </div>
    </div>

    </>
  )

}

export default TimelineElement

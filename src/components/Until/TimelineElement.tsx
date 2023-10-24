import React from 'react'
import { dateType } from '../../persistance_store/work';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

interface props{
    startDate: dateType,
    endDate: dateType,
    screenWidth: number,
}

const TimelineElement = ({startDate, endDate, screenWidth} : props) => {

   const fontSize: string = (screenWidth < 480 || screenWidth === 480) ? '14px' : '16px';
  //  const dotWidth: string = (screenWidth < 480 || screenWidth === 480) ? '2px' :  '2px';
   const textWidth: string = (screenWidth < 480 || screenWidth === 480) ? '170px' :  '120px';

  
    const timelineDotStyle = { borderColor: '#60b0cf',  borderWidth: '2px'};

    const timelineTextStyle = { fontSize: fontSize, fontWeight: 'bold', width: textWidth}

  return (
    <div className='timeline-container' >
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" style={timelineDotStyle}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={timelineTextStyle}>{startDate.month} {startDate.year}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        {/* <TimelineSeparator> */}
          <TimelineDot variant="outlined" style={timelineDotStyle}/>
        {/* </TimelineSeparator> */}
        <TimelineContent style={timelineTextStyle}>{endDate.month} {endDate.year}</TimelineContent>
      </TimelineItem>
    </Timeline>
      
    </div>
  )
}

export default TimelineElement

import React, { FC, ReactNode, useEffect, useState } from 'react'

import '../../../styles/util component styles/IconContainer.css';
import '../../../styles/util component styles/TeachStackTabs.css';

import { techStackType } from '../../../persistance_store/work';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@emotion/styled';
import IconBuilder from '../IconBuilder';



// interface IconProps {
//     child : ReactNode;
//     icon ?: ReactNode;
// }

interface TabIconProps{
    icon : ReactNode;
}

// TODO: move for future use
// const IconContainer: FC<IconProps> = ({child, icon}) => {
//     return (
//         <div className='icon-outer-case'>
//             {child}
//             <div className='tech-tab-icon-style'>
//             {icon}
//             </div>
//         </div>
//     );
// }

// const IconInnerContainer: FC<IconProps> = ({child}) => {
//     return (
//         <div className='icon-inner-case'>
//             {child}
//         </div>
//     );
// }

const TabIconContainer: FC<TabIconProps> = ({icon}) => {
    return (
        <>
        <div className="outer-tab-div">
            <div className="inner-tab-div">
            <div className='tab-icon-style'>
              {icon}
            </div>
            </div>
        </div>
        </>
    );
}


const stackItem = ( item : String) => {
    return (
        <>
        <div className="stack-outer-item-element">
            <div className="stack-inner-item-element">
                <div className="stack-icon">{IconBuilder(item)}</div>
                <div className="icon-name-divider"> </div>
                <div className="stack-label-name">{item}</div>
            </div>
        </div>

        </>
    );
}

const stackItemsList = ( stackList : String[]) => {
    return <div className="stack-list-container">{
        stackList.map((stack: String, index: number) => (stackItem(stack)))
    }</div>
    

}

const TechTab = styled(Tab)`
   cursor: pointer;
   font-size: 0.875rem;
   font-weight: 600;
   indicator-color: '#29435e';
  &:hover {
    background-color: ${'#29435e'};
  }

  &:focus {
    color: #fff;
    outline-bottom: 3px solid ${'#29435e'};
  }
`;



interface props {
    techStack : techStackType[];
    screenWidth: number,
}

const TechStackTabs = ({techStack, screenWidth} : props) => {

    const [tabValue, setTabValue] = useState(0);
    const [tabContent, setTabContent] = useState(techStack[tabValue]);

    useEffect(() => {
        console.log("props changes for Tabs", techStack.toString());
        setTabContent(techStack[tabValue]);
    }, [techStack]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
        setTabContent(techStack[newValue])
    };
    let fontsize;
    let fontcolor;

    if(screenWidth <= 480 ){
        fontsize = 12;
        fontcolor = '#dbdbdb';
    }
    if(screenWidth >= 480 ){
        fontsize = 14;
        fontcolor = '#dbdbdb';
    }
    // if(screenWidth <= 480 ){
        
    // }

    const isTabActive = (tabName: String) => {
       return (tabName === tabContent.stackName);
    }

  return (
    <>
    <Tabs
      value={tabValue}
      onChange={handleChange}
      textColor="secondary"
    //   indicatorColor="transparent"
      aria-label="teach stack tabs">

      <TechTab icon={<TabIconContainer icon={IconBuilder(techStack[0].stackName)}/>} 
      label={techStack[0].stackName} style={{fontSize: fontsize, fontWeight: 'bold', color: fontcolor }} />

      <Tab icon={
      <TabIconContainer icon={IconBuilder(techStack[1].stackName)} />
      } label={techStack[1].stackName} style={{fontSize: fontsize, fontWeight: 'bold', color: fontcolor }}/>

      <Tab icon={
      <TabIconContainer icon={IconBuilder(techStack[2].stackName)}/>} 
      label={techStack[2].stackName} style={{fontSize: fontsize, fontWeight: 'bold', color: fontcolor }}/>

    </Tabs>
    <div>
        {stackItemsList(tabContent.technology)}
    </div>
    </>

  )
}

export default TechStackTabs

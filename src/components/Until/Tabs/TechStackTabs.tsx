import React, { FC, ReactNode, useEffect, useState } from 'react'

import '../../../styles/util component styles/IconContainer.css';
import '../../../styles/util component styles/TeachStackTabs.css';

import { techStackType } from '../../../persistance_store/work';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@emotion/styled';
import IconBuilder from '../IconBuilder';



// import { BiLogoAws } from "react-icons/bi";
// import { TbCloudComputing } from "react-icons/tb";
// import { PiDevices } from "react-icons/pi";
// import { CiServer } from "react-icons/ci";

// // techIcon Imports
// // PL
// import { TbBrandTypescript } from "react-icons/tb";
// import { FaJava } from "react-icons/fa";
// import { BiLogoJavascript } from "react-icons/bi";
// import { IoLogoPython } from "react-icons/io";

// // FE frameworks
// import { FaReact } from "react-icons/fa6";
// import { SiRedux } from "react-icons/si";
// import { FaAngular } from "react-icons/fa6";
// import { SiWebpack } from "react-icons/si";
// import { SiBabel } from "react-icons/si";
// import { FaHtml5 } from "react-icons/fa6";
// import { SiCss3 } from "react-icons/si";
// import { SiJest } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { DiAtom } from "react-icons/di";
// import { SiBootstrap } from "react-icons/si";
// import { SiMui } from "react-icons/si";
// import { FaNpm } from "react-icons/fa6";


// // BE frameworks
// import { SiSpring } from "react-icons/si";
// import { SiSpringboot } from "react-icons/si";
// import { TbFileTypeXml } from "react-icons/tb";
// import { SiJunit5 } from "react-icons/si";
// import { SiApachetomcat } from "react-icons/si";
// import { GrTest } from "react-icons/gr";
// import { FaDocker } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { SiApachekafka } from "react-icons/si";

// import { BiLogoKubernetes } from "react-icons/bi";
// import { SiTerraform } from "react-icons/si";
// import { DiJenkins } from "react-icons/di";

// // DB
// import { GrMysql } from "react-icons/gr";
// import { SiMongodb } from "react-icons/si";
// import { SiRedis } from "react-icons/si";


// // API
// import { TbApi } from "react-icons/tb";
// import { SiGraphql } from "react-icons/si";

// // Cloud
// import { SiAmazondynamodb } from "react-icons/si";
// import { SiAmazons3 } from "react-icons/si";
// import { SiAwslambda } from "react-icons/si";
// import { SiAmazoncloudwatch } from "react-icons/si";
// import { SiAmazonec2 } from "react-icons/si";
// import { SiAmazonsqs } from "react-icons/si";




// const IconMap = new Map<String, any>();
// IconMap.set('Cloud', TbCloudComputing);
// IconMap.set('Backend', CiServer);
// IconMap.set('Frontend', PiDevices);

// //## TechStack Icons
// // Languages
// IconMap.set('TypeScript', TbBrandTypescript);
// IconMap.set('Java', PiDevices);
// IconMap.set('JavaScript', BiLogoJavascript);
// IconMap.set('Python', IoLogoPython);

// // FE Frameworks
// IconMap.set('React', FaReact);
// IconMap.set('Redux', SiRedux);
// IconMap.set('Angular', FaAngular);
// IconMap.set('Webpack', SiWebpack);
// IconMap.set('Babel', SiBabel);
// IconMap.set('Enzyme', SiBabel);
// IconMap.set('HTML', FaHtml5);
// IconMap.set('CSS', SiCss3);
// IconMap.set('Jest', SiJest);
// IconMap.set('CSS', SiCss3);
// IconMap.set('Node.js', FaNodeJs);
// IconMap.set('Atom', DiAtom);
// IconMap.set('Bootstrap', SiBootstrap);
// IconMap.set('Bootstrap', SiMui);
// IconMap.set('Material UI', SiCss3);
// IconMap.set('NPM', FaNpm);


// //  BE frameworks
// IconMap.set('Java', FaJava);
// IconMap.set('Spring', SiSpring);
// IconMap.set('Spring Boot', SiSpringboot);
// IconMap.set('XML', TbFileTypeXml);
// IconMap.set('Tomcat', SiApachetomcat);
// IconMap.set('Junit', SiJunit5);
// IconMap.set('EasyMock', GrTest);
// IconMap.set('Express.js', SiExpress);
// IconMap.set('Kafka', SiApachekafka);

// // Container
// IconMap.set('Docker', FaDocker);
// IconMap.set('Kubernetes', BiLogoKubernetes);
// IconMap.set('Terraform', SiTerraform);
// IconMap.set('Jenkins', DiJenkins);



// // DB
// IconMap.set('SQL', GrMysql);
// IconMap.set('MongoDB', SiMongodb);
// IconMap.set('Redis', SiRedis);


// // API
// IconMap.set('SOAP', TbApi);
// IconMap.set('REST', TbApi);
// IconMap.set('GraphQL', SiGraphql);
// IconMap.set('GraphQL', TbApi);

// // cloud
// IconMap.set('AWS', BiLogoAws);

// IconMap.set('DynamoDB', SiAmazondynamodb);
// IconMap.set('S3', SiAmazons3);
// IconMap.set('Lambda', SiAwslambda);
// IconMap.set('Elasticsearch', BiLogoAws);
// IconMap.set('Kinesis', BiLogoAws);
// IconMap.set('CloudWatch', SiAmazoncloudwatch);
// IconMap.set('Amazon EC2', SiAmazonec2);
// IconMap.set('SQS', SiAmazonsqs);
// IconMap.set('SNS', SiAmazonsqs);
// IconMap.set('Open Search', SiAmazonsqs);








// const getIcon = (keyName: String) => {
//     const Icon = IconMap.get(keyName)
//     return (<Icon fontSize="inherit"/>)
// }

interface IconProps {
    child : ReactNode;
    icon ?: ReactNode;
}

interface TabIconProps{
    icon : ReactNode;
}

const IconContainer: FC<IconProps> = ({child, icon}) => {
    return (
        <div className='icon-outer-case'>
            {child}
            <div className='tech-tab-icon-style'>
            {icon}
            </div>
        </div>
    );
}

const IconInnerContainer: FC<IconProps> = ({child}) => {
    return (
        <div className='icon-inner-case'>
            {child}
        </div>
    );
}

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

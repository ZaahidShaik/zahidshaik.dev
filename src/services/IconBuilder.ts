import {FaReact, FaAngular, FaHtml5, FaNpm } from "react-icons/fa6";


import { BiLogoAws, BiLogoJavascript, BiLogoKubernetes } from "react-icons/bi";
import { TbCloudComputing, TbBrandTypescript, TbFileTypeXml, TbApi } from "react-icons/tb";
import { PiDevices } from "react-icons/pi";
import { CiServer } from "react-icons/ci";
import { FaJava, FaNodeJs, FaDocker } from "react-icons/fa";
import { IoLogoPython, IoIosArrowDropright, IoIosArrowDropleft} from "react-icons/io";
import { SiRedux, SiWebpack, SiBabel, SiCss3, SiJest, SiBootstrap, SiMui,
    SiSpring, SiSpringboot, SiJunit5, SiApachetomcat, SiExpress, SiApachekafka,
    SiTerraform, SiMongodb, SiRedis, SiGraphql, SiAmazondynamodb, SiAmazons3, SiAwslambda,
    SiAmazoncloudwatch, SiAmazonec2, SiAmazonsqs } from "react-icons/si";

import { DiAtom, DiJenkins } from "react-icons/di";
import { GrTest, GrMysql } from "react-icons/gr";
import { RxDividerVertical, RxDividerHorizontal } from "react-icons/rx";

// import { BiLogoAws } from "react-icons/bi";
// import { TbCloudComputing } from "react-icons/tb";
// import { PiDevices } from "react-icons/pi";
// import { CiServer } from "react-icons/ci";

// techIcon Imports
// PL
// import { TbBrandTypescript } from "react-icons/tb";
// import { FaJava } from "react-icons/fa";
// import { BiLogoJavascript } from "react-icons/bi";
// import { IoLogoPython } from "react-icons/io";

// FE frameworks
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


// BE frameworks
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

// DB
// import { GrMysql } from "react-icons/gr";
// import { SiMongodb } from "react-icons/si";
// import { SiRedis } from "react-icons/si";


// API
// import { TbApi } from "react-icons/tb";
// import { SiGraphql } from "react-icons/si";

// Cloud
// import { SiAmazondynamodb } from "react-icons/si";
// import { SiAmazons3 } from "react-icons/si";
// import { SiAwslambda } from "react-icons/si";
// import { SiAmazoncloudwatch } from "react-icons/si";
// import { SiAmazonec2 } from "react-icons/si";
// import { SiAmazonsqs } from "react-icons/si";

// util icons
// import { IoIosArrowDropright } from "react-icons/io";
// import { IoIosArrowDropleft } from "react-icons/io";
// import { RxDividerVertical } from "react-icons/rx";
// import { RxDividerHorizontal } from "react-icons/rx";




export const IconMap = new Map<String, any>();


IconMap.set('Cloud', TbCloudComputing);
IconMap.set('Backend', CiServer);
IconMap.set('Frontend', PiDevices);

//## TechStack Icons
// Languages
IconMap.set('TypeScript', TbBrandTypescript);
IconMap.set('Java', PiDevices);
IconMap.set('JavaScript', BiLogoJavascript);
IconMap.set('Python', IoLogoPython);

// FE Frameworks
IconMap.set('React', FaReact);
IconMap.set('Redux', SiRedux);
IconMap.set('Angular', FaAngular);
IconMap.set('Webpack', SiWebpack);
IconMap.set('Babel', SiBabel);
IconMap.set('Enzyme', SiBabel);
IconMap.set('HTML', FaHtml5);
IconMap.set('CSS', SiCss3);
IconMap.set('Jest', SiJest);
IconMap.set('CSS', SiCss3);
IconMap.set('Node.js', FaNodeJs);
IconMap.set('Atom', DiAtom);
IconMap.set('Bootstrap', SiBootstrap);
IconMap.set('Bootstrap', SiMui);
IconMap.set('Material UI', SiCss3);
IconMap.set('NPM', FaNpm);


//  BE frameworks
IconMap.set('Java', FaJava);
IconMap.set('Spring', SiSpring);
IconMap.set('Spring Boot', SiSpringboot);
IconMap.set('XML', TbFileTypeXml);
IconMap.set('Tomcat', SiApachetomcat);
IconMap.set('Junit', SiJunit5);
IconMap.set('EasyMock', GrTest);
IconMap.set('Express.js', SiExpress);
IconMap.set('Kafka', SiApachekafka);

// Container
IconMap.set('Docker', FaDocker);
IconMap.set('Kubernetes', BiLogoKubernetes);
IconMap.set('Terraform', SiTerraform);
IconMap.set('Jenkins', DiJenkins);



// DB
IconMap.set('SQL', GrMysql);
IconMap.set('MongoDB', SiMongodb);
IconMap.set('Redis', SiRedis);


// API
IconMap.set('SOAP', TbApi);
IconMap.set('REST', TbApi);
IconMap.set('GraphQL', SiGraphql);
IconMap.set('GraphQL', TbApi);

// cloud
IconMap.set('AWS', BiLogoAws);

IconMap.set('DynamoDB', SiAmazondynamodb);
IconMap.set('S3', SiAmazons3);
IconMap.set('Lambda', SiAwslambda);
IconMap.set('Elasticsearch', BiLogoAws);
IconMap.set('Kinesis', BiLogoAws);
IconMap.set('CloudWatch', SiAmazoncloudwatch);
IconMap.set('Amazon EC2', SiAmazonec2);
IconMap.set('SQS', SiAmazonsqs);
IconMap.set('SNS', SiAmazonsqs);
IconMap.set('Open Search', SiAmazonsqs);

// util
IconMap.set('RightArrow', IoIosArrowDropright)
IconMap.set('LeftArrow', IoIosArrowDropleft)
IconMap.set('VerticalDivider', RxDividerVertical)
IconMap.set('HorizontalDivider', RxDividerHorizontal)




export const getIconByName = (keyName: String) => {
    return IconMap.get(keyName)
}
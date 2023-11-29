import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiLogoAws, BiLogoJavascript, BiLogoKubernetes, BiTransferAlt, BiSolidComponent } from "react-icons/bi";
import { CiServer } from "react-icons/ci";
import { DiAtom, DiJenkins } from "react-icons/di";
import {FaReact, FaAngular, FaHtml5, FaNpm, FaDatabase, FaRecycle } from "react-icons/fa6";
import { FaJava, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaRegFileCode } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { IoLogoPython, IoIosArrowDropright, IoIosArrowDropleft, IoIosInfinite} from "react-icons/io";
import { IoConstructOutline, IoGitBranch } from "react-icons/io5";
import { MdOutlineMonitorHeart, MdEngineering, MdOutlineTerminal } from "react-icons/md";


import { PiDevices, PiComputerTower } from "react-icons/pi";
import { RxDividerVertical, RxDividerHorizontal } from "react-icons/rx";
import { SiRedux, SiWebpack, SiBabel, SiCss3, SiJest, SiBootstrap, SiMui,
    SiSpring, SiSpringboot, SiJunit5, SiApachetomcat, SiExpress, SiApachekafka,
    SiTerraform, SiMongodb, SiRedis, SiGraphql, SiAmazondynamodb, SiAmazons3, SiAwslambda,
    SiAmazoncloudwatch, SiAmazonec2, SiAmazonsqs, SiGnubash, SiJetbrains, SiIntellijidea, SiVisualstudiocode,
    SiServerless, SiPytest } from "react-icons/si";
import { TbCloudComputing, TbBrandTypescript, TbFileTypeXml, 
          TbApi, TbBrandSpeedtest, TbArrowsJoin } from "react-icons/tb";

import { TiCloudStorage } from "react-icons/ti";





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
IconMap.set('React Hooks', FaReact);
IconMap.set('Redux', SiRedux);
IconMap.set('Angular', FaAngular);
IconMap.set('Webpack', SiWebpack);
IconMap.set('Babel', SiBabel);
IconMap.set('Babel.js', SiBabel);
IconMap.set('Enzyme', SiBabel);
IconMap.set('HTML', FaHtml5);
IconMap.set('HTML5', FaHtml5);
IconMap.set('CSS', SiCss3);
IconMap.set('Jest', SiJest);
IconMap.set('Jest.js', SiJest);
IconMap.set('CSS', SiCss3);
IconMap.set('Node.js', FaNodeJs);
IconMap.set('Atom', DiAtom);
IconMap.set('Bootstrap', SiBootstrap);
IconMap.set('Material UI', SiMui);
IconMap.set('Material UI', SiCss3);
IconMap.set('NPM', FaNpm);


//  BE frameworks
IconMap.set('Java', FaJava);
IconMap.set('Spring', SiSpring);
IconMap.set('Spring Boot', SiSpringboot);
IconMap.set('XML', TbFileTypeXml);
IconMap.set('Tomcat', SiApachetomcat);
IconMap.set('Express.js', SiExpress);
IconMap.set('Kafka', SiApachekafka);

// Container
IconMap.set('Docker', FaDocker);
IconMap.set('Kubernetes', BiLogoKubernetes);
IconMap.set('Elasticsearch', BiLogoKubernetes);
IconMap.set('Terraform', SiTerraform);
IconMap.set('Jenkins', DiJenkins);

// testing

IconMap.set('Junit', SiJunit5);
IconMap.set('EasyMock', SiPytest);



// DB
IconMap.set('SQL', GrMysql);
IconMap.set('MySQL', GrMysql);
IconMap.set('MongoDB', SiMongodb);
IconMap.set('Redis', SiRedis);


// API
IconMap.set('SOAP', TbApi);
IconMap.set('REST', TbApi);
IconMap.set('GraphQL', SiGraphql);
IconMap.set('gRPC', TbApi);

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

//  Dev Tools
IconMap.set('Bash', SiGnubash);
IconMap.set('Git', FaGitAlt);
IconMap.set('GitHub', FaGithub);
IconMap.set('Agile', FaRecycle);
IconMap.set('CI/CD', IoIosInfinite);


// util
IconMap.set('RightArrow', IoIosArrowDropright)
IconMap.set('LeftArrow', IoIosArrowDropleft)
IconMap.set('VerticalDivider', RxDividerVertical)
IconMap.set('HorizontalDivider', RxDividerHorizontal)

IconMap.set('Programming', FaRegFileCode)
IconMap.set('Development', IoConstructOutline)
IconMap.set('Operations', GiGears)
IconMap.set('API', BiTransferAlt)
IconMap.set('Testing', TbBrandSpeedtest)
IconMap.set('Databases', FaDatabase)
IconMap.set('Streaming', TbArrowsJoin)
IconMap.set('Compute', PiComputerTower)
IconMap.set('Storage', TiCloudStorage)
IconMap.set('ServerLess', SiServerless)
IconMap.set('UI Library', BiSolidComponent)
IconMap.set('Monitoring', MdOutlineMonitorHeart)
IconMap.set('Message Queues', TbArrowsJoin)

IconMap.set('Developer', MdEngineering)
IconMap.set('Version Control', IoGitBranch)
IconMap.set('Project Management', AiOutlineFundProjectionScreen)
IconMap.set('IDE', MdOutlineTerminal)
IconMap.set('Intellij IDE', SiIntellijidea)
IconMap.set('Visual Studio Code', SiVisualstudiocode)





export const getIconByName = (keyName: String) => {
    return IconMap.get(keyName)
}
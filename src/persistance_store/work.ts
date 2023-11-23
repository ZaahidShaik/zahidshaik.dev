export interface locationType{
    city: String,
    state: String,
    countryCode: String,
}

export interface techStackType{
    stackName: stacksTypes,
    technology: String[],
}

export interface dateType
{
     month: String,
     year: number,
}

export enum CurrentlyAtCompany
{
    PRESENT,
}

export enum roleTypes { 
   Design,
   Developer,
   DevOps,
   ScrumMaster,
   Tester,
   QA,
}

export enum stacksTypes{
    Backend = "Backend",
    Frontend = "Frontend",
    Cloud = "Cloud",
}

export interface workType
{
    id: String,
    componyName: String,
    roleTitle: String,
    location: locationType,
    roles: String[],
    techStack: techStackType[],
    startDate: dateType,
    CurrentlyAtCompany : Boolean,
    endDate: dateType,
    roleGuidMDName: String,
    imageUrl: string,
}


export const workList: workType[] = [
    {   
        id: '03',
        componyName: 'Meraki Solutions',
        roleTitle: 'Full Stack Java Developer',
        location: 
        {
            city: 'Redmond',
            state: 'WA',
            countryCode: 'USA',
        },
        roles: ['Dev', 'Design'],
        techStack:[
            {
                stackName: stacksTypes.Frontend,
                technology: ['React','TypeScript','Redux', 'Webpack', 'Babel', 'Enzyme', 'HTML', 'CSS', 'Jest', 'Node.js'],
            },
            {
                stackName: stacksTypes.Backend,
                technology: ['Java','Spring Boot','SOAP', 'XML', 'Junit', 'EasyMock', 'Tomcat', 'Docker'],
            },
            {
                stackName: stacksTypes.Cloud,
                technology: ['DynamoDB','S3','Elasticsearch', 'Lambda', 'Kinesis', 'CloudWatch'],
            },
        ],
        startDate: 
        {
            month: 'March',
            year: 2023,
        },
        CurrentlyAtCompany: true,
        endDate: 
        {
            month: '',
            year: 0,
       },
       roleGuidMDName: 'Amazon.md',
       imageUrl: "amazon_logo.png",
    },
    {
        id: '02',
        componyName: 'Amazon.com',
        roleTitle: 'Software Development Engineer',
        location: 
        {
            city: 'Seattle',
            state: 'WA',
            countryCode: 'USA',
        },
        roles: ['Dev', 'Design'],
        techStack:[
            {
                stackName: stacksTypes.Frontend,
                technology: ['React','TypeScript','Redux', 'Webpack', 'Babel', 'Enzyme', 'HTML', 'CSS', 'Jest', 'Node.js'],
            },
            {
                stackName: stacksTypes.Backend,
                technology: ['Java','Spring Boot','SOAP', 'XML', 'Junit', 'EasyMock', 'Tomcat', 'Docker'],
            },
            {
                stackName: stacksTypes.Cloud,
                technology: ['DynamoDB','S3','Elasticsearch', 'Lambda', 'Kinesis', 'CloudWatch'],
            },
        ],
        startDate: 
        {
            month: 'April',
            year: 2022,
        },
        CurrentlyAtCompany: false,
        endDate: 
        {
            month: 'March',
            year: 2023,
       },
       roleGuidMDName: 'Amazon.md',
       imageUrl: "amazon_logo.png",
    },
    {
        id: '01',
        componyName: 'Baylor College of Medicine',
        roleTitle: 'Full Stack Web Developer',
        location: 
        {
            city: 'Houston',
            state: 'TX',
            countryCode: 'USA',
        },
        roles: ['Dev', 'Design'],
        techStack:[
            {
                stackName: stacksTypes.Frontend,
                technology: ['Angular','TypeScript','Redux', 'Webpack', 'Babel', 'Enzyme', 'HTML', 'CSS', 'Jest', 'Node.js'],
            },
            {
                stackName: stacksTypes.Backend,
                technology: ['JavaScript','Node.js','Express.js', 'SQL', 'Docker'],
            },
            {
                stackName: stacksTypes.Cloud,
                technology: ['DynamoDB', 'Amazon EC2'],
            },
        ],
        startDate: 
        {
            month: 'May',
            year: 2021,
        },
        CurrentlyAtCompany: false,
        endDate: 
        {
            month: 'December',
            year: 2021,
       },
       roleGuidMDName: 'BCM.md',
       imageUrl: "bcn_logo.png",
    },

]
export interface locationType{
    city: String,
    state: String,
    countryCode: String,
}

export interface techStackType{
    stackName: String,
    technology: String[],
}

export interface dateType
{
     month: String,
     year: number,
}

export interface workType
{
    componyName: String,
    roleTitle: String,
    location: locationType,
    techStack: techStackType[],
    startDate: dateType,
    endDate: dateType,
    roleGuidMDName: String,
    imageUrl: string,
}


export const workList: workType[] = [
    {
        componyName: 'Meraki Solutions',
        roleTitle: 'Full Stack Java Developer',
        location: 
        {
            city: 'Redmond',
            state: 'WA',
            countryCode: 'USA',
        },
        techStack:[
            {
                stackName: 'Frontend',
                technology: ['React','TypeScript','Redux', 'Webpack', 'Babel', 'Enzyme', 'HTML', 'CSS', 'Jest', 'Node.js'],
            },
            {
                stackName: 'Backend',
                technology: ['Java','Spring Boot','SOAP', 'XML', 'Junit', 'EasyMock', 'Tomcat', 'Docker'],
            },
            {
                stackName: 'Cloud',
                technology: ['DynamoDB','S3','Elasticsearch', 'Lambda', 'Kinesis', 'CloudWatch'],
            },
        ],
        startDate: 
        {
            month: 'March',
            year: 2023,
        },
        endDate: 
        {
            month: 'October',
            year: 2023,
       },
       roleGuidMDName: 'Amazon.md',
       imageUrl: "amazon_logo.png",
    },
    {
        componyName: 'Amazon.com',
        roleTitle: 'Software Development Engineer',
        location: 
        {
            city: 'Seattle',
            state: 'WA',
            countryCode: 'USA',
        },
        techStack:[
            {
                stackName: 'Frontend',
                technology: ['React','TypeScript','Redux', 'Webpack', 'Babel', 'Enzyme', 'HTML', 'CSS', 'Jest', 'Node.js'],
            },
            {
                stackName: 'Backend',
                technology: ['Java','Spring Boot','SOAP', 'XML', 'Junit', 'EasyMock', 'Tomcat', 'Docker'],
            },
            {
                stackName: 'Cloud',
                technology: ['DynamoDB','S3','Elasticsearch', 'Lambda', 'Kinesis', 'CloudWatch'],
            },
        ],
        startDate: 
        {
            month: 'April',
            year: 2022,
        },
        endDate: 
        {
            month: 'March',
            year: 2023,
       },
       roleGuidMDName: 'Amazon.md',
       imageUrl: "amazon_logo.png",
    },
    {
        componyName: 'Baylor College of Medicine',
        roleTitle: 'Full Stack Web Developer (Capstone)',
        location: 
        {
            city: 'Houston',
            state: 'TX',
            countryCode: 'USA',
        },
        techStack:[
            {
                stackName: 'Frontend',
                technology: ['Angular','TypeScript','Redux', 'Webpack', 'Babel', 'Enzyme', 'HTML', 'CSS', 'Jest', 'Node.js'],
            },
            {
                stackName: 'Backend',
                technology: ['JavaScript','Node.js','Express.js', 'SQL', 'Docker'],
            },
            {
                stackName: 'Cloud',
                technology: ['DynamoDB', 'Amazon EC2'],
            },
        ],
        startDate: 
        {
            month: 'May',
            year: 2021,
        },
        endDate: 
        {
            month: 'December',
            year: 2021,
       },
       roleGuidMDName: 'BCM.md',
       imageUrl: "bcn_logo.png",
    },

]
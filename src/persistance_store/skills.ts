


/*
* Skills stack
Backend Stack 
 - Programming Languages
 - Frameworks
  - Development 
  - API
  - Testing
 - Data Bases


Frontend Stack
 - Programming Languages
 - Frameworks
    - Development
    - Testing
    - API Communication

Cloud Stack
 - AWS
    - ....services list
Dev Tools Stack
 - Versioning control
 - Scrum / Kanban
 - Ticket
*/
export interface subSectionType {
        sectionName: String, 
        sectionTechnologies: String[]
        subSubSection: subSectionType[];
}


export interface skillTypes
{
    stackName: String, 
    stackTechnologies: String[]
    subSection: subSectionType[];
}

export const skillsList: skillTypes[] = [
    {
        stackName: 'Backend Stack', 
        stackTechnologies: [],
        subSection: [
            {
                sectionName: 'Programming',
                sectionTechnologies: ['Java','Python'],
                subSubSection: [],
            },
            {
                sectionName: 'Development',
                sectionTechnologies: ['Spring Boot', 'Node.js', 'Kafka', 'NPM'],
                subSubSection: [],
            },
            {
                sectionName: 'Databases',
                sectionTechnologies: ['MySQL','MongoDB', 'DynamoDB', 'Redis'],
                subSubSection: [],
            },
            {
                sectionName: 'Operations',
                sectionTechnologies: ['Docker', 'Kubernetes', 'Elasticsearch', 'Terraform', 'Jenkins' ],
                subSubSection: [],
            },
            {
                sectionName: 'API',
                sectionTechnologies: ['SOAP', 'REST', 'GraphQL', 'gRPC'],
                subSubSection: [],
            },
            {
                sectionName: 'Testing',
                sectionTechnologies: ['Junit', 'EasyMock'],
                subSubSection: [],
            },

        ]
    },
    {
        stackName: 'Frontend Stack', 
        stackTechnologies: [],
        subSection: [
            {
                sectionName: 'Programming',
                sectionTechnologies: ['TypeScript','JavaScript', 'HTML5', 'CSS'],
                subSubSection: [],
            },
            {
                sectionName: 'Development',
                sectionTechnologies: ['React', 'React Hooks', 'Angular', 'Redux', 'Webpack', 'Babel.js'],
                subSubSection: [],
            },
            {
                sectionName: 'UI Library',
                sectionTechnologies: ['Bootstrap', 'Material UI'],
                subSubSection: [],
            },
            {
                sectionName: 'API',
                sectionTechnologies: ['Atom'],
                subSubSection: [],
            },
            {
                sectionName: 'Testing',
                sectionTechnologies: ['Jest.js', 'Enzyme'],
                subSubSection: [],
            },
        ]
    },
    {
        stackName: 'AWS Services', 
        stackTechnologies: [],
        subSection: [
            {
                sectionName: 'ServerLess',
                sectionTechnologies: ['Open Search','Lambda',],
                subSubSection: [],
            },
            {
                sectionName: 'Monitoring',
                sectionTechnologies: ['CloudWatch'],
                subSubSection: [],
            },
            {
                sectionName: 'Message Queues',
                sectionTechnologies: ['SQS', 'SNS'],
                subSubSection: [],
            },
            {
                sectionName: 'Compute',
                sectionTechnologies: ['Amazon EC2'],
                subSubSection: [],
            },
            {
                sectionName: 'Storage',
                sectionTechnologies: ['S3'],
                subSubSection: [],
            },


        ],
    },
    {
        stackName: 'Developer Tools', 
        stackTechnologies: [],
        subSection: [
            {
                sectionName: 'Version Control',
                sectionTechnologies: ['Git','GitHub'],
                subSubSection: [],
            },
            {
                sectionName: 'Project Management',
                sectionTechnologies: ['CI/CD', 'Agile'],
                subSubSection: [],
            },
            {
                sectionName: 'IDE',
                sectionTechnologies: ['Bash', 'Intellij IDE', 'Visual Studio Code'],
                subSubSection: [],
            },
        ],
    },
    
]  
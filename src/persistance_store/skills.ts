


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
                sectionName: 'Programming Languages',
                sectionTechnologies: ['Java','Python'],
                subSubSection: [],
            },
            {
                sectionName: 'Frameworks',
                sectionTechnologies: [],
                subSubSection: [
                    {
                        sectionName: 'Development',
                        sectionTechnologies: ['Spring Boot', 'Node.js', 'Kafka', 'NPM'],
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
                sectionName: 'Databases',
                sectionTechnologies: ['MySQL','MongoDB', 'DynamoDb', 'Redis'],
                subSubSection: [],
            },

        ]
    },
    {
        stackName: 'Frontend Stack', 
        stackTechnologies: [],
        subSection: [
            {
                sectionName: 'Programming Languages',
                sectionTechnologies: ['TypeScript','JavaScript', 'HTML5', 'CSS'],
                subSubSection: [],
            },
            {
                sectionName: 'Frameworks',
                sectionTechnologies: [],
                subSubSection: [
                    {
                        sectionName: 'Development',
                        sectionTechnologies: ['React', 'React Hooks', 'Angular', 'Redux', 'Webpack', 'Babel.js', 'Bootstrap', 'Material UI'],
                        subSubSection: [],
                    },
                    {
                        sectionName: 'API Communication',
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
        ]
    },
    {
        stackName: 'AWS Stack', 
        stackTechnologies: ['Open Search','Lambda', 'CloudWatch', 'SQS', 'SNS', 'EC2', 'S3', ],
        subSection: [],
    },
    {
        stackName: 'Dev Stack', 
        stackTechnologies: ['Git','GitHub', 'CI/CD', 'Agile', 'Bash'],
        subSection: [],
    },
    
]  
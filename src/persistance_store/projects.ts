export type softwareStackTypes =
    | 'Full Stack'
    | 'Backend'
    | 'Frontend'


export type softwareStackList = 'Full Stack' | 'Backend' | 'Frontend'|  'Cloud' | 'API';


export interface techStackType{
    stackName: softwareStackList,
    technoloyList: String[]
}


export interface projectType{
    projectTitle: String,
    projectStackType: softwareStackTypes,
    githubLink: string,
    demoLink: string ,
    projectDescription: String,
    techStack: techStackType[],
    sourceInfoLink: string ,
}

export const projectList: projectType[] = [
    {
        projectTitle: 'Covid Tracker',
        projectStackType: 'Full Stack',
        githubLink: "https://github.com/ZaahidShaik/Covid-19-Tracker",
        demoLink: "acdhnancaco",
        projectDescription: 'Full stack web application that tracks the covid impact in 40 countries over the world.',
        techStack: [
            {
                stackName: 'Frontend',
                technoloyList: ['TypeScript','Angular', 'Rxjs', 'more..']
            },
            {
                stackName: 'Backend',
                technoloyList: ['Java','Spring Boot', 'Kafka', 'more..']
            },
            {
                stackName: 'API',
                technoloyList: ['Rest','gRPC', 'GraphQL']
            },
            {
                stackName: 'Cloud',
                technoloyList: ['Docker','Kubernaties']
            },
        ],
        sourceInfoLink: "acdhnancaco",
    },
    {
        projectTitle: 'Covid Tracker',
        projectStackType: 'Full Stack',
        githubLink: "https://github.com/ZaahidShaik/Covid-19-Tracker",
        demoLink: "acdhnancaco",
        projectDescription: 'Full stack web application that tracks the covid impact in 40 countries over the world.',
        techStack: [
            {
                stackName: 'Frontend',
                technoloyList: ['TypeScript','Angular', 'Rxjs', ]
            },
            {
                stackName: 'Backend',
                technoloyList: ['Java','Spring Boot', 'Kafka', 'JWT']
            },
            {
                stackName: 'API',
                technoloyList: ['Rest','gRPC', 'GraphQL']
            },
            {
                stackName: 'Cloud',
                technoloyList: ['Docker','Kubernaties']
            },
        ],
        sourceInfoLink: "acdhnancaco",
    },
    {
        projectTitle: 'Covid Tracker',
        projectStackType: 'Full Stack',
        githubLink: "https://github.com/ZaahidShaik/Covid-19-Tracker",
        demoLink: "acdhnancaco",
        projectDescription: 'Full stack web application that tracks the covid impact in 40 countries over the world.',
        techStack: [
            {
                stackName: 'Frontend',
                technoloyList: ['TypeScript','Angular', 'Rxjs']
            },
            {
                stackName: 'Backend',
                technoloyList: ['Java','Spring Boot', 'Kafka', 'JWT']
            },
            {
                stackName: 'API',
                technoloyList: ['Rest','gRPC', 'GraphQL']
            },
            {
                stackName: 'Cloud',
                technoloyList: ['Docker','Kubernaties']
            },
        ],
        sourceInfoLink: "acdhnancaco",
    },

    {
        projectTitle: 'Covid Tracker',
        projectStackType: 'Full Stack',
        githubLink: "https://github.com/ZaahidShaik/Covid-19-Tracker",
        demoLink: "acdhnancaco",
        projectDescription: 'Full stack web application that tracks the covid impact in 40 countries over the world.',
        techStack: [
            {
                stackName: 'Frontend',
                technoloyList: ['TypeScript','Angular', 'Rxjs']
            },
            {
                stackName: 'Backend',
                technoloyList: ['Java','Spring Boot', 'Kafka', 'JWT']
            },
            {
                stackName: 'API',
                technoloyList: ['Rest','gRPC', 'GraphQL']
            },
            {
                stackName: 'Cloud',
                technoloyList: ['Docker','Kubernaties']
            },
        ],
        sourceInfoLink: "acdhnancaco",
    },
    {
        projectTitle: 'Covid Tracker',
        projectStackType: 'Full Stack',
        githubLink: "https://github.com/ZaahidShaik/Covid-19-Tracker",
        demoLink: "acdhnancaco",
        projectDescription: 'Full stack web application that tracks the covid impact in 40 countries over the world.',
        techStack: [
            {
                stackName: 'Frontend',
                technoloyList: ['TypeScript','Angular', 'Rxjs']
            },
            {
                stackName: 'Backend',
                technoloyList: ['Java','Spring Boot', 'Kafka', 'JWT']
            },
            {
                stackName: 'API',
                technoloyList: ['Rest','gRPC', 'GraphQL']
            },
            {
                stackName: 'Cloud',
                technoloyList: ['Docker','Kubernaties']
            },
        ],
        sourceInfoLink: "acdhnancaco",
    },
    {
        projectTitle: 'Covid Tracker',
        projectStackType: 'Full Stack',
        githubLink: "https://github.com/ZaahidShaik/Covid-19-Tracker",
        demoLink: "acdhnancaco",
        projectDescription: 'Full stack web application that tracks the covid impact in 40 countries over the world.',
        techStack: [
            {
                stackName: 'Frontend',
                technoloyList: ['TypeScript','Angular', 'Rxjs']
            },
            {
                stackName: 'Backend',
                technoloyList: ['Java','Spring Boot', 'Kafka', 'JWT']
            },
            {
                stackName: 'API',
                technoloyList: ['Rest','gRPC', 'GraphQL']
            },
            {
                stackName: 'Cloud',
                technoloyList: ['Docker','Kubernaties']
            },
        ],
        sourceInfoLink: "acdhnancaco",
    },
    {
        projectTitle: 'Covid Tracker',
        projectStackType: 'Full Stack',
        githubLink: "https://github.com/ZaahidShaik/Covid-19-Tracker",
        demoLink: "acdhnancaco",
        projectDescription: 'Full stack web application that tracks the covid impact in 40 countries over the world.',
        techStack: [
            {
                stackName: 'Frontend',
                technoloyList: ['TypeScript','Angular', 'Rxjs']
            },
            {
                stackName: 'Backend',
                technoloyList: ['Java','Spring Boot', 'Kafka', 'JWT']
            },
            {
                stackName: 'API',
                technoloyList: ['Rest','gRPC', 'GraphQL']
            },
            {
                stackName: 'Cloud',
                technoloyList: ['Docker','Kubernaties']
            },
        ],
        sourceInfoLink: "acdhnancaco",
    },

]
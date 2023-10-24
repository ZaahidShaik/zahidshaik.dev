
export interface educationType
{
    uniName: String,
    degreeType: String,
    degreeTitle: String,
    yrOfGraduation: number,
    graduationMonth: String,
    course: String,
    imageUrl: string,
}

export const educationList: educationType[] = [
    {
        uniName: 'University of Houston ',
        degreeType: 'Master',
        degreeTitle: 'Master of Science',
        yrOfGraduation: 2021,
        graduationMonth: 'December',
        course: 'Computer Science',
        imageUrl: "uhcl_logo.png",

    },
    {
        uniName: 'Osmania University',
        degreeType: 'Bachelor',
        degreeTitle: 'Bachelor of Engineering',
        yrOfGraduation: 2018,
        graduationMonth: 'August',
        course: 'Electronics & Communication',
        imageUrl: "ou_logo.png",
    }

]
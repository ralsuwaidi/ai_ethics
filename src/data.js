
import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";


const data = {
    directorys: [
        {
            username: "ralsuwaidi",
            name: "Rashed AlSuwaidi",
            headline: "Software Architect at The AI Office",
            position: "Artificial Intelligence, Digital Economy and Remote Work Applications Office",
            about: "I am a software developer with around 7 years of experience. I've worked in Dubai Financial Market, Emirates Nuclear Energy Corporation, Tawazun Technology and Innovation and now in The Artificial Intelligence Office. I've worked on drones, full-stack applications, detection algorithms and many more.",
            banner: "https://media-exp1.licdn.com/dms/image/C4D16AQG4nGtpUSbwBg/profile-displaybackgroundimage-shrink_350_1400/0/1663321204829?e=1674691200&v=beta&t=5OY3CDqiT_Ytk13SoyfpvsTUA8OF-2SpcV0JGMiS2-Y",
            image: "https://media-exp1.licdn.com/dms/image/C4D03AQE4ZuI6OSH17g/profile-displayphoto-shrink_200_200/0/1663321282926?e=1674691200&v=beta&t=uq0UTxtGosJbfXG_RuoKOLelXakdG-_4HKj8Jw17ByY",
            highlights: [
                "Master's Degree in Engineering From Warwick University",
                '4th Place in the Mohammed Bin Zayed International Robotics Competition',
                'Worked on a Military Drone from idea to Maiden Flight',
                'Member of the first batch of UAE Futureneers'
            ],
            socials: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/rashed-alsuwaidi-831478154/",
                    icon: <ImLinkedin/>,
                },
                {
                    name: "Twitter",
                    url: "https://twitter.com/ras_suwaidi",
                    icon: <ImTwitter/>,
                },
                {
                    name: "Github",
                    url: "https://github.com/ralsuwaidi",
                    icon: <ImGithub/>,
                },
            ],
            topics: [
                {
                    name: "NLP",
                    url: "https://www.linkedin.com/in/rashed-alsuwaidi-831478154/",
                    icon: <ImLinkedin/>,
                },
                {
                    name: "computer vision",
                    url: "https://twitter.com/ras_suwaidi",
                    icon: <ImTwitter/>,
                },
            ],
            timeline: [
                {
                    date: "November 2022",
                    title: "Joined The AI Community",
                    description: "",
                },
                {
                    date: "October 2022",
                    title: "Built the UAE Codes One Line of Code",
                    description: "Me and my colleague built the UAE one line of code platform with over 81,000 lines of code to this day",
                },
            ],
            metadata: [
                {
                    key: "Occupation",
                    value: "Software Architect",
                },
                {
                    key: "Years of Experience",
                    value: "7",
                },
                {
                    key: "Academic Degree",
                    value: "MSc in Sustainable Energy Technologies",
                },
            ]
        },
    ],
}

export {data}

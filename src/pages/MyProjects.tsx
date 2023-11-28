import Navbar from "../components/Navbar";
import ProjectBox from "../components/ProjectBox";
import { ProjectType } from "../types";

const projectList: ProjectType[] = [
    {
        name: "UDM Reimbursement Project",
        class: "Software Engineering",
        description: "I collaborated with three classmates on a project to enhance the reimbursement system for the College of Engineering at the University of Detroit Mercy. Our goal was to create a more efficient and user-friendly system for generating reimbursement documents for faculty purchases.",
        discussion: `This project provided me with the opportunity to utilize crucial skills in the workforce, such as HTML, CSS, and JavaScript. It also allowed me to enhance my collaboration abilities by working with three teammates. My teammates and I used the agile methodology, which allowed us to practice real-world skills associated with software engineering and development.
        `,
        tags: "Software engineering",
        // What makes it useful for ur careeer
        demoLink: "https://udm-reimbursement-project.vercel.app"
    },
    {
        name: "Definitions and Description Set",
        class: "Technical writing",
        description: "A definition and description set project for my Technical writing class",
        discussion: `
        As part of my technical writing class, I was tasked with creating a definition and description set that explained how websites work in a way that could be understood by beginners to software engineering. This project was a great opportunity for me to practice my technical writing skills and to learn more about the inner workings of websites.
I made sure to use clear and concise language that would be easy for beginners to understand. I also avoided using technical jargon or acronyms that might be unfamiliar to my audience.
This project was a great learning experience for me. I learned a lot about the inner workings of websites and I improved my technical writing skills. I am confident that the definition and description set that I created will be a valuable resource for beginners to software engineering.
        `,
        tags: "Technical Writing",
        demoLink: ""
    },
    {
        name: "Minim",
        class: "Software Engineering",
        description: "A minimalist note-taking site with AI features like note summarization, text to speech, and rich text formatting.",
        discussion: `This project helped me practice my React, design, and backend skills. I have always been a fan of simple note taking apps, but I have found that it can be difficult to find one that meets all of my needs. I wanted an app that was easy to use, had a clean design, and allowed me to easily organize my notes. I decided to make my own app to meet these needs. 
        I am very happy with the way the app turned out. It is simple to use, has a clean design, and allows me to easily organize my notes. I am confident that this app will be a valuable tool for me, and I hope that others will find it useful as well.`,
        tags: "Personal Projects",
        demoLink: "https://minim-react.vercel.app"
    },
    {
        name: "Windows 10 Clone",
        class: "Personal project",
        description: "",
        discussion: ``,
        tags: "Personal Projects",
        demoLink: "https://minim-react.vercel.app"
    },
    {
        name: "Budgeting Site",
        class: "Personal project",
        description: "",
        discussion: ``,
        tags: "Personal Projects",
        demoLink: "https://minim-react.vercel.app"
    },
]
export default function MyProjects() {
    return (
        <>
            <div className='noise'></div>
            <div className='noise mt-[100vh]'></div>
            <Navbar />

            <h4 className="text-5xl mt-20 font-medium">My Projects</h4>
            <section className="mt-10 flex gap-6 flex-wrap">
                {
                    projectList.map((project) => <ProjectBox project={project} />)
                }
            </section>
        </>
    )
}

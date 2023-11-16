import Navbar from "../components/Navbar";
import ProjectBox from "../components/ProjectBox";
import { ProjectType } from "../types";

const projectList: ProjectType[] = [
    {
        name: "UDM Reimbursement Project",
        class: "Software Engineering",
        description: "I collaborated with three classmates on a project to enhance the reimbursement system for the College of Engineering at the University of Detroit Mercy. Our goal was to create a more efficient and user-friendly system for generating reimbursement documents for faculty purchases.",
        discussion: "Insert discussion",
        demoLink: "https://udm-reimbursement-project.vercel.app/dashboard"
    }
]
export default function MyProjects() {
    return (
        <>
            <div className='noise'></div>
            <Navbar />

            <h4 className="text-5xl mt-20 font-medium">My Projects</h4>
            <section className="mt-10 flex">
                {
                    projectList.map((project) => <ProjectBox project={project} />)
                }
            </section>
        </>
    )
}

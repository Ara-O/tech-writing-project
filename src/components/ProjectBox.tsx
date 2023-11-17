import { ProjectType } from "../types"

interface props {
    project: ProjectType
}
export default function ProjectBox({ project }: props) {
    return (
        <div className="border-solid border w-[600px] box-border px-10 py-7">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <h3 className="mt-3 leading-7 text-[14.5px]"><span className="font-medium"> Description: </span> {project.description}</h3>
            <h2 className="mt-5 text-lg font-semibold">Discussion</h2>
            <h3 className="mt-3 leading-7 text-[14.5px]">{project.discussion}</h3>
            <h4 className="mt-5 text-[14.5px]">Tags: {project.tags}</h4>
            {project.demoLink && <button className="mt-7 bg-white text-black hover:bg-transparent border hover:text-white transition-all hover:border-solid text-sm px-5 py-3">View Demo</button>}
        </div>
    )
}

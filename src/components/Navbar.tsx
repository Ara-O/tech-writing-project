export default function Navbar() {
    return (
        <nav className="flex items-center justify-between">
            <img src="/logo.png" alt="My logo" className="w-10 float-left" />
            <div className="flex gap-32 text-sm ">
                <h3 className="transition-all hover:underline cursor-pointer">Home</h3>
                <h3 className="hover:underline cursor-pointer">Sample Work</h3>
                <h3 className="hover:underline cursor-pointer">About Me</h3>
                <h3 className="hover:underline cursor-pointer">Resume</h3>
            </div>
            <button className="bg-white text-black px-5 py-3 text-xs hover:bg-transparent transition-all hover:text-white hover:border-solid border-white hover:border rounded-full">Contact me</button>
        </nav>
    )
}

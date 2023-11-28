import { Link } from "react-router-dom";
import MainButton from "./MainButton";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between h-30">
            <img src="/logo.png" alt="My logo" className="w-10 float-left hidden md:block" />
            <div className="flex lg:gap-32 gap-6 text-sm ">
                <Link to={'/'}> <h3 className="transition-all hover:underline cursor-pointer">Home</h3></Link>
                <Link to={'/my-projects'}> <h3 className="hover:underline cursor-pointer">My Projects</h3></Link>
                <Link to={'/about-me'}> <h3 className="hover:underline cursor-pointer">About Me</h3></Link>
                <a href="/resume.pdf" target="_blank"><h3 className="hover:underline cursor-pointer">Resume</h3></a>
            </div>
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=oladipoeyiara@gmail.com&su=Subject&body=Body&tf=cm" target="_blank"><MainButton>Contact Me</MainButton></a>
        </nav>
    )
}

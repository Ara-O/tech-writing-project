import { Link } from "react-router-dom";
import MainButton from "./MainButton";

export default function Hero() {
    return (
        <div className="mt-20 flex items-center justify-center gap-56">
            <div>
                <h2 className="text-7xl font-medium">Eyiara Oladipo</h2>
                <h3 className="w-[500px] font-light mt-6 leading-8">Welcome to my E-portfolio! My name is Eyiara Oladipo, but most people call me Ara. In this website, you can find my
                    class projects, resume, a blurb about me, and a means to contact me. Have fun learning about me!
                </h3>
                <Link to={'/my-projects'}> <MainButton classes="mt-7">View My Projects</MainButton></Link>
            </div>
            <img src="/mixed-self-portrait.png" className="w-[400px]" alt="Cyberpunk - made with imgcreator.zmo.ai" />
        </div>
    )
}

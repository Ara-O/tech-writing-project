import Navbar from '../components/Navbar'

export default function AboutMe() {
    return (
        <>
            <div className='noise'></div>
            <Navbar />

            <section className='mt-32 flex gap-32 flex-wrap'>
                <div>
                    <h1 className='text-5xl font-medium'>About Me</h1>
                    <h3 className='w-[700px] mt-6 leading-10 font-light text-lg'> I am a junior studying Computer Science at the University of Detroit Mercy. I am passionate about
                        Front-end development and UX/UI design.
                        I have worked as a teaching assistant and have software development experience through
                        various internships and programs I have had with JOURNi, Accenture, Google, and the Kapor Center. I have experience
                        with HTML, CSS, Javascript and Vue.js. I also have with experience in back-end technologies like Node.js, Express and Mongo DB. </h3>
                </div>
                <div>
                    <h1 className='text-5xl font-medium'>Socials</h1>
                    <div className='border mt-6 border-solid w-[450px] h-96 box-border px-10 py-10'>
                        <h2 className='text-md'>Email: Oladipoeyiara@gmail.com</h2>
                        <h2 className='text-md mt-5'>LinkedIn: Eyiara Oladipo </h2>
                        <h2 className='text-md mt-5'>Phone Number: 555-7334</h2>
                        <h2 className='text-md mt-5'>Github: Ara-O</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

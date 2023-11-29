import Navbar from '../components/Navbar'

export default function AboutMe() {
    return (
        <>
            <div className='noise'></div>
            <Navbar />

            <section className='mt-32 flex gap-32 flex-wrap justify-center'>
                <div>
                    <h1 className='text-5xl font-medium'>About Me</h1>
                    <h3 className='w-[700px] mt-6 leading-10 font-light text-md'> I am a junior studying Computer Science at the University of Detroit Mercy. I am passionate about
                        Front-end development and UX/UI design.
                        I have worked as a teaching assistant and have software development experience through
                        various internships and programs I have had with JOURNi, Accenture, Google, and the Kapor Center. I have experience
                        with HTML, CSS, Javascript and Vue.js. I also have with experience in back-end technologies like Node.js, Express and Mongo DB. </h3>
                    <h3 className='w-[700px] mt-6 leading-10 font-light text-md'>I will be working as a freelance web-developer in the future, creating
                        high fidelity services for large-scale companies, and providing services to hundreds to millions of users. The skills I display in this
                        portfolio help me show how I have been working towards achieving this future. With all these experiences, and a bachelors degree in Computer Science, I hope to leave
                        a mark in the world of Computer Science and Software Engineering.
                    </h3>
                </div>
                <div>
                    <h1 className='text-5xl font-medium'>Socials</h1>
                    <div className='border mt-8 border-solid w-[450px] h-96 box-border px-7 py-8'>
                        <h2 className='text-md'>Email: Oladipoeyiara@gmail.com</h2>
                        <a href="https://www.linkedin.com/in/eyiara-oladipo-2b5ba2180/" className='hover:underline' target='_blank'> <h2 className='text-md mt-5'>LinkedIn: Eyiara Oladipo </h2></a>
                        <h2 className='text-md mt-5'>Phone Number: 555-7334</h2>
                        <a href="https://github.com/Ara-O" className='hover:underline' target='_blank'> <h2 className='text-md mt-5'>Github: Ara-O</h2></a>
                    </div>
                </div>
            </section>
        </>
    )
}

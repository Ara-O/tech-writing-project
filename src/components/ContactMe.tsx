import { useRef } from "react";
import emailjs from '@emailjs/browser';
export default function ContactMe() {
    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, "template_o3dqm6z", form.current, 'DyPL--pVBPxcKgzM6')
            .then((result) => {
                alert("Message sent!")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <>
            <div className="noise mt-[100vh] !h-[750px]"></div>
            <section id='contact-me-main-page-section' className="h-56 flex flex-col items-center ">
                <h3 className="text-4xl font-bold mt-32">Get In Touch With Me</h3>
                <div className="w-[700]px">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex gap-10 mt-12">
                            <span>
                                <label htmlFor="full_name" className="text-md">Full Name:</label>
                                <br />
                                <input type="text" name="full_name" id="full_name" className="h-12 text-black mt-3 text-sm box-border px-4 w-80" placeholder="Enter full name" />
                            </span>
                            <span>
                                <label htmlFor="email" className="text-md">Email:</label>
                                <br />
                                <input type="email" name="email" id="email" className="h-12 text-black mt-3 text-sm box-border px-4 w-80" placeholder="Enter email address" />
                            </span>
                        </div>
                        <div className="mt-7">
                            <span>
                                <label htmlFor="message" className="text-[15px]">Message:</label>
                                <br />
                                <textarea name="message" id="message" className="!h-52 resize-none text-black mt-3 text-sm box-border pl-4 py-4 w-full " placeholder="Enter message"></textarea>
                            </span>
                        </div>
                        <button className="bg-white text-black px-5 py-3 text-xs hover:bg-transparent transition-all hover:text-white hover:border-solid border-white hover:border h-14 rounded-none mt-10" type="submit">Send Message</button>
                    </form>

                </div>
            </section>
        </>
    )
}


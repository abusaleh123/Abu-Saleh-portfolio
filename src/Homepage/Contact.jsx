
import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Swal from 'sweetalert2';
import { ThemeContext } from '../Provider/AuthProvider';

const Contact = () => {
    const {theme} = useContext(ThemeContext)
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_rhqev5o', 'template_lwwbwf4', formData, 'NlaKtek42XFli8pfQ')
            .then((result) => {
                Swal.fire({
                    title: "Email Sent Successfully",
                    icon: "success",
                    draggable: true
                  });
            }, (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    
                  });
            });

        // Reset form
        setFormData({
            user_name: '',
            user_email: '',
            message: ''
        });
    };

    return (
        <div className={`${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
            <div className="w-8/12 mx-auto text-center py-12">
                <div>
                    <h1 className={`text-7xl ${theme === 'dark' ? 'text-white/90' : 'text-[#23D8FF]'}`}>Contact Me</h1>
                </div>
                <section className="lg:flex justify-around mt-16">
                    <div className="xl:w-4/12 mb-6 flex-col">
                        <form onSubmit={sendEmail} className="flex flex-col space-y-3">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                value={formData.user_name}
                                onChange={handleChange}
                                className={`input ${theme === 'dark' ? 'bg-[#1D232A] ' : 'bg-white border placeholder:text-[#23D8FF] border-[#23D8FF] text-[#23D8FF]'} input-bordered input-secondary w-full focus:outline-none`}
                                required
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder="Email"
                                value={formData.user_email}
                                onChange={handleChange}
                                className={`input ${theme === 'dark' ? 'bg-[#1D232A] ' : 'bg-white border placeholder:text-[#23D8FF] border-[#23D8FF] text-[#23D8FF]'} input-bordered input-secondary focus:outline-none`}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`input-secondary p-2 ${theme === 'dark' ? 'bg-[#1D232A] ' : 'bg-white border border-[#23D8FF] placeholder:text-[#23D8FF] text-[#23D8FF]'} input-bordered border focus:outline-none rounded-xl`}
                                cols={10}
                                rows={5}
                                required
                            />
                            <div className="flex justify-end">
                                <button
                                    style={{
                                        background: theme === 'dark'
                                          ? `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`
                                          : '#d1d1d1',
                                        border: theme === 'dark' ? 'none' : '2px solid #23D8FF', backgroundColor: theme === 'dark' ? '': 'white'
                                      }}
                                    className={`btn lg:w-fit ${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} w-full flex text-lg `}
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="">
                        <div>
                            <h1 className="text-5xl text-white mb-8">Information</h1>
                            <div className='space-y-6 flex lg:items-start flex-col items-center'>
                                <div className='flex gap-6  '>
                                    <p className={`border p-2 ${theme === 'dark' ? '': 'border border-[#23D8FF] text-[#23D8FF]'}  rounded-full text-xl`}><IoCallOutline /></p>
                                    <p className={`md:text-2xl ${theme === 'dark' ? 'text-white/70' : 'text-[#23D8FF]/80'}  `}>01522113282/ 01586325786</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className={`border p-2 ${theme === 'dark' ? '': 'border border-[#23D8FF] text-[#23D8FF]'}  rounded-full text-xl`}><MdOutlineEmail /></p>
                                    <p className={`md:text-2xl ${theme === 'dark' ? 'text-white/70' : 'text-[#23D8FF]/80'}  `}>mdabusalehnoor4103@gmail.com</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className={`border p-2 ${theme === 'dark' ? '': 'border border-[#23D8FF] text-[#23D8FF]'}  rounded-full text-xl`}><FaWhatsapp /></p>
                                    <p className={`md:text-2xl ${theme === 'dark' ? 'text-white/70' : 'text-[#23D8FF]/80'}  `}>01586325786</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;

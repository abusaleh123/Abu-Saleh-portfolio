import bg from '../../src/assets/3314424.jpg'
import banner from '../../src/assets/abiutbanner.png'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import git from '../assets/pngwing.com.png'
import facebook from '../assets/facebook-removebg-preview.png'
import LinkedIn from '../assets/Linkedin.png'

const About = () => {
    return (
        <div style={{backgroundImage: `url(${bg })`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='min-h-screen bg-black bg-opacity-75 backdrop-blur-xl py-10'>
            <section className='w-10/12 mx-auto'>
            <section>
       <div className=''>
              <div className='w-10/12 mx-auto text-white  '>
                  <div className='flex md:flex-row flex-col-reverse justify-center   gap-4 items-center  rounded-xl backdrop-blur-xl bg-white/10 py-6 px-8'>
                  <div className=' space-y-2 w-7/12 '> 
                  <p className="lg:text-7xl md:text-3xl  text-2xl font-bold  mb-4">I am</p>
                      {/* <span className='text text-2xl'>Hi I'm</span> */}
                      <h1 className="lg:text-9xl md:text-5xl text-4xl  lg:w-[700px] ">Abu Saleh Noor</h1>
                      {/* <p className="md:text-2xl text-xl text">A Web Developer</p> */}
                      <p className='text-gray-300'>Hi there, as you already saw I am <span className="text-xl text-white">Abu Saleh Noor</span> a passionate front-end developer dedicated to crafting responsive and user-friendly websites. With expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I focus on creating visually appealing and functional web experiences that adapt seamlessly across devices. My goal is to ensure every project I work on combines intuitive design with exceptional performance.

Beyond front-end development, I have experience with backend technologies such as Express, Node.js, and MongoDB, enabling me to build full-stack applications that are both scalable and efficient. This versatility allows me to bridge the gap between elegant user interfaces and robust server-side functionality.

I am deeply committed to continuous learning and growth, staying updated with the latest trends and advancements in web development. Whether it’s exploring new frameworks, optimizing performance, or improving coding practices, I always strive to enhance my skills and deliver better results.

My ultimate goal is to create high-quality websites and applications that provide exceptional user experiences. Every project is an opportunity for me to innovate, solve challenges, and contribute to the digital world meaningfully. I approach each task with dedication, ensuring my work meets and exceeds expectations.</p>
      
                        
                    
      
                  </div>
                  <div className=' w-fit rounded-xl'>
                      <img  className='' src={banner} alt="" />
                  </div>
                  </div>
              </div>
              </div>
              </section>
              <section className='text-center md:mt-12'>
                <div>
                    <h1 className="lg:text-7xl md:text-4xl text-3xl text-white">W. Development Journey</h1>
                    <p className="text-lg mt-1">My Web Development Journey: The Story of How I Entered This Field</p>
                </div>
                <div className='lg:mt-12 mt-6'>
                    <p className='text-start text-gray-300'><span className="text-2xl text-white font-bold">My Journey: </span> 


My journey into web development has been an exciting and transformative experience. Starting with the basics of HTML, CSS, and JavaScript, I built a strong foundation for creating functional and visually appealing websites. As my skills progressed, I delved into React.js, discovering the power of building dynamic, component-based user interfaces that deliver seamless user experiences.
To enhance my designs, I incorporated Tailwind CSS, a utility-first framework that made it easier to create responsive and visually engaging layouts. It allowed me to focus on creativity while maintaining efficiency in styling.
<br />

Exploring backend development with Node.js and Express.js expanded my skill set significantly. These technologies introduced me to the world of server-side applications, where I learned to build scalable APIs and seamlessly connect the front end with the back end. Express, in particular, helped me understand the importance of routing and middleware in modern web development.
<br />

This journey has been a continuous process of learning and experimentation. From tackling real-world projects to overcoming technical challenges, each step has fueled my passion for web development. Today, I am driven to create responsive, user-friendly websites and applications that combine functionality with exceptional design.</p>


<p className='text-start text-gray-300 mt-4'><span className="text-2xl text-white">Story: </span> I have been interested in coding since my childhood, but the real inspiration to enter the field of web development came from my cousin. One day, my cousin introduced me to the world of web development, showing me its endless possibilities and creativity. From that moment, my interest in coding grew even deeper, and I decided to start my journey in web development.

I began by learning the basics of web development, such as HTML, CSS, and JavaScript, and quickly created my first website. This experience was both exciting and motivating. Soon after, I started learning React.js, which was a new and challenging adventure for me. It allowed me to build dynamic, interactive user interfaces.

Additionally, I honed my design skills by using Tailwind CSS, which helped me create responsive and visually appealing layouts for websites. Later, I learned Node.js and Express.js, which allowed me to dive into server-side development and build scalable back-end applications.

This journey is still ongoing, and I’m always eager to learn something new and improve my skills. My ultimate goal is to create web applications that provide the best possible user experience.</p>
                </div>
              </section>
              <section className='text-center md:mt-12'>
              <div>
                    <h1 className="lg:text-7xl md:text-4xl text-3xl text-white">Others</h1>
                    <p className="text-lg mt-1"></p>
                </div>
                <div>
                    <p className='text-start text-gray-300'><span className="text-2xl  text-white font-bold">Song:</span> I have a deep passion for singing both Islamic and patriotic songs. For many years, I have been singing in these two genres, which hold a special meaning for me. Through Islamic songs, I strive to convey the messages of peace, love, and faith in Islam to my audience. I have had the opportunity to perform in Islamic gatherings and various events, sharing the beauty of Islamic music with others.

Additionally, singing patriotic songs allows me to express my love for my country and its culture. Patriotic songs are a powerful way for me to honor the love for my nation, its independence, and its rich heritage. Through this form of music, I aim to spread a sense of pride and respect for the nation.

Singing these songs has taught me discipline, confidence, and the importance of creativity. It has helped me improve with every performance and connect with my audience on a deeper level.</p>
                </div>
              </section>
              <section className='md:mt-16 md:w-9/12 mx-auto'>
              <div className='text-center'>
                    <h1 className="lg:text-7xl md:text-4xl text-3xl text-white *:">Contact</h1>
                
                </div>
                <div className='mt-10 flex justify-around'>
                    <div className='flex gap-6 items-center'>
                        <p className="border p-6 rounded-full md:text-3xl text-xl"><IoCallOutline /> </p>
                        <p className="md:text-3xl text-2xl text-white">01522113282/ 01586325786</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className="border p-6 rounded-full md:text-3xl text-xl"><MdOutlineEmail /> </p>
                        <p className="md:text-3xl text-2xl text-white">mdabusalehnoor4103@gmail.com</p>
                    </div>
                </div>
                 <div className='flex items-center justify-center mt-10 gap-2'>
                                    <a href="https://github.com/abusaleh123" target='_blank'>
                                    <img  className='w-16 p-2 border border-purple-600 rounded-full' src={git} alt="" />
                                    </a>
                                   <a href="https://www.facebook.com/mdabusalehnoor9" target='_blank'>
                                   <img  className='w-16 p-2 border border-purple-600 rounded-full' src={facebook} alt="" />
                                   </a>
                               
                                      <img  className='w-16 p-2 border border-purple-600 rounded-full' src={LinkedIn} alt="" />
                
                            
                                       </div>
              </section>
              </section>
        </div>
    );
};

export default About;
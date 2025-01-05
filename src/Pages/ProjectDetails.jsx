import { useLoaderData } from "react-router-dom";
import bg from '../../src/assets/details.jpg';
import git from '../../src/assets/pngwing.com.png'

const ProjectDetails = () => {
    const project = useLoaderData();

    const {name, image, short_description, long_description, main_technology_stack, main_features, link} = project;
   
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} className="bg-black">
            <div className="w-10/12 mx-auto py-16">
               <div className="border p-10 rounded-xl bg-white/20">
                    <img className="rounded-xl" src={image} alt="" />
                    <h1 className="text-5xl text-white md:mt-8 ">{name}</h1>

                    <p className="text-lg mt-2">{long_description}</p>

                <div>
                    <h1 className="text-white text-2xl">Main Features: </h1>
                    {
                        main_features.map((feat, idx) => <div key={idx}>
                                <ul className="list-disc text-white/70">
                                    <li>{feat.feature}</li>
                                </ul>


                        </div>)
                    }
                </div>



                    <div className="md:flex gap-4 mt-4">
                    <p className="text-2xl text-white/90 ">Main Technology: </p>
                        {
                            main_technology_stack.map((tech, idx) => <div key={idx} className="">
                                    <p className="text-white border px-2 py-1 my-1 rounded-xl  backdrop-blur-xl bg-purple-300/50"> {tech.technology}</p>
                                
                            </div>)
                        }
                    </div>


                    <div className="grid grid-cols-2 ">
                        <div className="flex gap-4 mb-4 mt-6">
                        <a style={{background: `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`}} href={project.client} target="_blank" className={`btn ${project.server ? 'col-span-1' : 'col-span-2'}  border-none w-full text-lg text-white`}>
                            <img className="w-12" src={git} alt="" />
                            
                            Client</a>
                      {
                        project.server &&   <a style={{background: `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`}} href={project.server} target="_blank" className={`btn ${project.server || 'hidden'} col-span-1 border-none w-full text-lg text-white`}>
                        <img className="w-12" src={git} alt="" />
                        
                        Server</a>
                      }
                      
                        </div>
                        <div className="col-span-2">
                            <a style={{background: `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`}} href={link} target="_blank" className="btn border-none text-white text-lg w-full">Live Link</a>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
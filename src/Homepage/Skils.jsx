import { FiArrowDownRight } from "react-icons/fi";
import html from '../../src/assets/icons18.png'
import css from '../../src/assets/CSS3.png'
import tailwind from '../../src/assets/Tailwind CSS.png'
import js from '../../src/assets/JavaScript.png'
import react from '../../src/assets/React (1).png'
import node from '../../src/assets/Node.js.png'
import mongo from '../../src/assets/MongoDB.png'
import express from '../../src/assets/Express (1).png'
import firebase from '../../src/assets/firebase.png';
import { motion } from 'framer-motion';
import { useContext } from "react";
import { ThemeContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Skills = () => {
  const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme === 'dark'? 'bg-black' : 'bg-white border border-[#23D8FF]'}`}>
          
        <div className="w-8/12 mx-auto text-center py-20">
            <div>
                <h1 className={`lg:text-8xl md:6xl text-4xl text-center justify-center ${theme === 'dark'? 'text-white/90': 'text-[#23D8FF]'} flex`}>My Skils <FiArrowDownRight className={`${ theme === 'dark'? 'text-[#6F1160] ' : 'text-[#23D8FF]'}lg:text-8xl md:6xl text-5xl`} /></h1>
            </div>
            <div className={`flex flex-wrap mt-16 ${theme === 'dark' ? 'text-white' : 'text[#23D8FF]'} justify-center gap-8 lg:gap-12`}>
                {/* Card 1 */}
                <motion.div
                
                animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}
                
                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl" src={html} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>HTML</p>
                </motion.div>
                {/* Card 2 */}
                <motion.div
                
                animate={{
                  
                    y: [20, 0, 20],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}
                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl" src={css} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>CSS</p>
                </motion.div>
                {/* Card 3 */}
                <motion.div
                 animate={{
                  
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}
                
                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl" src={tailwind} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>Tailwind</p>
                </motion.div>
                {/* Card 4 */}
                <motion.div
                
                animate={{
                  
                    y: [20, 0, 20],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}

                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl" src={js} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>JS</p>
                </motion.div>
                {/* Card 5 */}
                <motion.div 
                  animate={{
                  
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}
                
                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl" src={react} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>React</p>
                </motion.div>
                {/* Card 6 */}
                <motion.div 
                
                animate={{
                  
                    y: [20, 0, 20],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}

                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl" src={node} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>Node JS</p>
                </motion.div>
                {/* Card 6 */}
                <motion.div 
                
                animate={{
                  
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}
                
                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl" src={mongo} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>MongoDB</p>
                </motion.div>
                {/* Card 7 */}
                <motion.div
                
                animate={{
                  
                    y: [20, 0, 20],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}

                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl bg-white" src={express} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>Express</p>
                </motion.div>
                {/* Card 8 */}
                <motion.div
                 animate={{
                  
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3, 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    ease: "easeInOut", 
                  }}
                className="">
                    <div className="border border-purple-600 p-4 rounded-xl">
                    <img className="w-20 h-20 object-cover rounded-xl bg-white" src={firebase} alt="" />
                    </div>
                      <p className={`${theme === 'dark' ? 'text-white': 'text-[#23D8FF]'} text-3xl mt-2`}>Firebase</p>
                </motion.div>
            </div>
        </div>
        </div>
    );
};

export default Skills;
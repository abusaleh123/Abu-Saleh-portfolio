"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Projects from "../../Homepage/Projects";
import Skills from "../../Homepage/Skils";


export function WorkSkil() {
  return (
    (<div
      className=" py-20   w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <h1
        className="md:text-3xl pb-4 text-xl lg:text-6xl tracking-wide font-bold text-center developer-text relative z-20">
       My Skills
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute  inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]">

          </div>
      </div>
         <div className="bor">
       <Skills></Skills>
         </div>
    </div>)
  );
}

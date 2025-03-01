"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import Banner from "@/Homepage/Header/Banner";

export function BackgroundBeamsDemo() {
  return (
    (<div
      className=" w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
     <Banner></Banner>
      <BackgroundBeams />
    </div>)
  );
}

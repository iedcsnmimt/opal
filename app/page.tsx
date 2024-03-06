import Link from "next/link";
import React from "react";
import Particles from "./components/particles";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
     
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Opal
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          IEDC SNMIMT presents:{" "}
          <Link
            target="_blank"
            href="https://instagram.com/iedc.snm"
            className="underline duration-500 hover:text-zinc-300"
          >
            OPAL
          </Link>{" "}
          Elevating Women,Inspiring Empowerment
        </h2>
   

     
      <div className="flex justify-center my-8">
        <Link href="/form">
          <button className="px-4 py-2 mx-2 bg-zinc-500 text-white rounded-md hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600 transition duration-300 ease-in-out">
            Solve Your Problem
          </button>
        </Link>
        <Link href="/Aboutus">
          <button className="px-4 py-2 mx-2 bg-transparent text-zinc-500 border border-zinc-600 rounded-md hover:bg-zinc-50 hover:text-zinc-600 focus:outline-none focus:bg-zinc-50 focus:text-zinc-600 transition duration-300 ease-in-out">
            About Us
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}

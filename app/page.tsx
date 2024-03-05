import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Form", href: "/form" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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
          Empowering women with safety, support, and community strength. Your secure haven unveiled.
        </h2>
      </div>

      {/* Additional UI elements */}
      <div className="flex justify-center my-8">
        <button className="px-4 py-2 mx-2 bg-zinc-500 text-white rounded-md hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600 transition duration-300 ease-in-out">
          Learn More
        </button>
        <button className="px-4 py-2 mx-2 bg-transparent text-zinc-500 border border-zinc-500 rounded-md hover:bg-zinc-50 hover:text-zinc-600 focus:outline-none focus:bg-zinc-50 focus:text-zinc-600 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>

      <div className="flex justify-center">
        <div className="w-24 h-24 bg-zinc-300 rounded-full"></div>
        <div className="w-24 h-24 bg-zinc-500 rounded-full mx-4"></div>
        <div className="w-24 h-24 bg-zinc-300 rounded-full"></div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
    {
        icon: <Twitter size={20} />,
        href: "https://twitter.com/iedcsnm",
        label: "Twitter",
        handle: "@iedcsnmimt",
    },
    {
        icon: <Mail size={20} />,
        href: "mailto:iedc@snmimt.edu.in",
        label: "Email",
        handle: "iedc@snmimt.edu.in",
    },
    {
        icon: <Instagram size={20} />,
        href: "https://instagram.com/iedc.snm",
        label: "Instagram",
        handle: "IEDC.SNM",
    },
];

export default function AboutUs() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className={`bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
    
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
                <h1 className="text-4xl font-bold text-center text-white my-8 animate-fade-in">
                    Welcome to Opal 
                </h1>
                <p className="text-lg text-center text-gray-300 mb-8 animate-fade-in">
                    IEDC has been developed to foster and nurture innovations combined with entrepreneurship amongst young minds. There is growth potential to be untapped, and IEDC aims to fill this abyss.
                </p>
                <p className="text-lg text-center text-gray-300 mb-8 animate-fade-in">
                    SNM Institute of Management and Technology - Maliankara, hosts OPAL, a web application developed by IEDC, focusing on women's safety and community empowerment. OPAL provides a safe and secure platform for women to seek assistance with any physical or mental health concerns.
                </p>
                <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16 animate-fade-in">
                    {socials.map((s, index) => (
                        <Card key={index}>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {s.icon}
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        {s.handle}
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {s.label}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

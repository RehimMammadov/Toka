"use client"

import Image from "next/image";
import { MacbookScroll } from "./components/macbook.component";
import Navbar from "./navbar.layout";
import Credits from "@/assets/cards-24.png"
import useAOS from "./components/aos.component";

export default function Header() {
    useAOS();
    return (
        <header className="w-full h-[210vh] bg-[#030811] relative">
            <Navbar />
            <div className="p-[12%] pb-20 flex justify-center gap-28">
                <div data-aos="fade-down">
                    <h1 className="text-7xl text-white font-medium leading-tight mt-10">Make your life<br /> easier with <br /> crypto.</h1>
                    <button className="w-56 h-16 bg-[#36bb91] rounded-xl mt-12 text-white font-semibold text-2xl hover:bg-[#1f6750] duration-500">Start now</button>
                </div>
                <Image data-aos="fade-down" src={Credits} alt="Credits" width={500} />
            </div>
            <MacbookScroll
                src={`/linear.webp`}
                showGradient={false}
            />
        </header>
    )
}


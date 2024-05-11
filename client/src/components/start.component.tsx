"use client"

import useAOS from "./aos.component"

export default function Start() {
    useAOS();
    return (
        <div data-aos="fade-down" className="w-[75%] mx-auto p-16 px-24 flex justify-between bg-[#191f24] border border-solid border-[#b2b3b7] rounded-3xl items-center">
            <div className="text-left">
                <h1 className="text-[43px] font-semibold text-white leading-relaxed mb-6">Let’s start your crypto <br /><span className="text-[#2cbca5]">investment</span> now</h1>
                <p className="text-[#b2b3b7] text-normal text-[1.25rem]">Choose from 150+ cryptocurrencies</p>
            </div>
            <button className="w-56 h-16 bg-[#36bb91] rounded-xl mt-12 text-white font-semibold text-2xl hover:bg-[#1f6750] duration-500">Start now</button>
        </div>
    )
}
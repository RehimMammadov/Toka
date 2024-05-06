"use client"

import Image from "next/image"
import Chart from "@/assets/wedgt.png"

export default function Deposit() {
    return (
        <div className="w-[75%] mx-auto flex justify-between gap-7 mt-32 pb-24">
            <div className="text-left">
                <h6 className="text-[1rem] font-bold text-[#2cbca5]">EARN CRYPTO</h6>
                <h2 className="text-white text-[43px] font-medium mt-2">Deposit crypto earn interest</h2>
                <p className="text-[1.25rem] text-[#b3b4b7] font-normal mt-2">Choose from 150+ cryptocurrencies</p>
                <div className="flex justify-start gap-10 mt-4">
                    <div className="flex flex-col gap-3">
                        <span className="text-[4rem] font-semibold text-[#2cbca5]">15%</span>
                        <p className="text-[1.25rem] font-medium text-white">On cryptos</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-[4rem] font-semibold text-[#2cbca5]">40%</span>
                        <p className="text-[1.25rem] font-medium text-white">On stablecoins</p>
                    </div>
                </div>
            </div>
            <Image width={600} src={Chart} alt="chart" />
        </div>
    )
}
"use client"

import Navbar from "@/components/navbar.component";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";
import Credits from "@/assets/cards-24.png"
import Hand from "@/assets/white-hand-product-display.png"
import useAOS from "@/components/aos.component";
import Star from "@/assets/Vector-sparkle-light.png"
import Deposit from "@/components/deposit.component";
import Start from "@/components/start.component";
import { Testimonials } from "@/components/testimonials.component";

export default function Home() {
  useAOS();
  return (
    <main className="w-full bg-[#030811] pb-28">
      <header className="w-full bg-[#030811] relative mb-24 overflow-hidden">
            <Navbar />
            <div className="p-[12%] pb-0 flex justify-center gap-28">
                <div data-aos="fade-down">
                    <h1 className="text-[5rem] text-white font-medium leading-tight mt-10">Make your life<br /> easier with <br /> crypto.</h1>
                    <div className="flex justify-start gap-12 items-center">
                      <button className="w-56 h-16 bg-[#36bb91] rounded-xl mt-12 text-white font-semibold text-2xl hover:bg-[#1f6750] duration-500">Start now</button> 
                      <Image width={70} className="mt-10" src={Star} alt="star" />
                    </div>
                </div>
                <Image data-aos="fade-down" src={Credits} alt="Credits" width={500} />
            </div> 
            <Image data-aos="fade-right" width={750} src={Hand} className="absolute bottom-[-170px] right-0" alt="human_hand" />
          <hr className="mt-80" />
        </header>
            <h5 className="text-[1rem] text-[#2cbca5] font-semibold text-center">BUY, STORE, SELL</h5>
            <h2 className="text-white text-[43px] font-semibold mt-3 text-center">Manage your transactions <br /> in one place</h2>
            <p className="text-[#b3b4b7] text-center text-xl font-normal mt-4 leading-loose">You can buy and sell 150+ cryptocurrencies with 20+ fiat <br /> currencies using bank transfers on your credit or debit card</p>
            <div className="overflow-hidden dark:bg-[#0B0B0F] w-full">
                <MacbookScroll
                  src={`https://toka.peerduck.com/wp-content/uploads/2022/03/Transactions-efg.png`}
                  showGradient={false}
                />
            </div>
            <Deposit />
            <Testimonials />
            <Start />
    </main>
  );
}


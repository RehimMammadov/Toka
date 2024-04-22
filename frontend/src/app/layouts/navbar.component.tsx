"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import { apiUrl } from "../../api/api.js";
import Link from "next/link.js";
import { FaChevronDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
    const [ logos, setLogos ] = useState<any[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.post(apiUrl, {
                query: `
                    query {
                        logos {
                            id, 
                            title
                        }
                    }
                `
            });
            setLogos(response.data.data.logos);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <nav className="w-full p-10 pl-52 pr-52 flex justify-between items-center absolute top-0 left-0">
            { logos &&
                logos.map((logo) => (
                    <h5 className="text-3xl font-extrabold text-white" key={logo.id}>{logo.title}</h5>
                ))
            }
            <ul className="flex justify-between gap-7 items-center">
                <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={"/nft"}>NFT <FaChevronDown className="hover:rotate-180 duration-300" /></Link>
                <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={"/crypto"}>Crypto <FaChevronDown className="hover:rotate-180 duration-300" /></Link>
                <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={"/shop"}>Shop <FaChevronDown className="hover:rotate-180 duration-300" /></Link>
                <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={"/contact"}>Contact Us <FaChevronDown className="hover:rotate-180 duration-300" /></Link>
                <Link className="flex items-center gap-2 text-white font-medium hover:text-[#36bb91] duration-300" href={"/about"}>About Us <FaChevronDown className="hover:rotate-180 duration-300" /></Link>
                <div className="flex justify-between gap-7 items-center">
                    <Link href={"/signin"}><FaRegUser className="w-5 h-5 fill-white hover:fill-[#36bb91] duration-300" /></Link>
                    <Link href={"/favourites"}><FaRegHeart className="w-5 h-5 fill-white hover:fill-[#36bb91] duration-300" /></Link>
                    <Link href={"/cart"}><BsCart2 className="w-6 h-6 fill-white hover:fill-[#36bb91] duration-300" /></Link>
                </div>
            </ul>
        </nav>
    );
}

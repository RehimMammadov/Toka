import { apiUrl } from "@/api/api";
import axios from "axios";
import { useState, useEffect } from "react"
import { FaStar } from "react-icons/fa";
import useAOS from "../../utils/aos.util";

export default function Testimonials() {
    const [ testimonials, setTestimonials ] = useState<any[]>([]);

    const fetchTestimonialsData = async () => {
        try {
            const response = await axios.post(apiUrl, {
                query: `
                            query {
                                testimonials {
                                    id, 
                                    fullname,
                                    vocation,
                                    avatar,
                                    comment
                                }
                            }
                       `
            })
            setTestimonials(response.data.data.testimonials)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchTestimonialsData();
    }, [])

    useAOS();
    return (
        <div className="py-24">
            <h5 className="text-[1rem] text-[#2cbca5] font-semibold text-center">TESTIMONIALS</h5>
            <h2 className="text-white text-[43px] font-semibold mt-3 text-center">What people say</h2>
            <p className="text-[#b3b4b7] text-center text-xl font-normal mt-4 leading-loose">You can buy and sell 150+ cryptocurrencies with 20+ fiat <br /> currencies using bank transfers on your credit or debit card</p>
            <div data-aos="fade-down" className="w-[75%] mx-auto grid grid-cols-2 gap-5 mt-20">
                {
                    testimonials && testimonials.map((item) => (
                        <div className="rounded-xl bg-[#23242b] p-10" key={item.id}>
                            <div className="flex gap-1 text-yellow-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="text-[#b3b4b7] text-[22px] mt-5">{item.comment}</p>
                            <div className="flex justify-between mt-4 items-center">
                                <div className="mt-4">
                                    <h2 className="text-2xl text-white font-medium">{item.fullname}</h2>
                                    <h3 className="mt-2 text-[#676768] text-[16px] font-semibold">{item.vocation}</h3>
                                </div>
                                <img className="w-16 h-16 rounded-[50%]" src={item.avatar} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
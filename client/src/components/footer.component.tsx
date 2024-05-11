import { apiUrl } from "@/api/api"
import axios from "axios"
import { useEffect, useState } from "react"

export const Footer = () => {
    const [ logos, setLogos ] = useState<any[]>([])

    const fetchLogoData = async () => {
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
            })
            setLogos(response.data.data.logos)
        } catch (error) {
            console.error('Error fetching data:', error); 
        }
    }

    useEffect(() => {
        fetchLogoData();
    }, [])

    return (
        <footer className="w-full bg-[#030811] px-24 py-14">
            <div className="flex justify-between">
                <div className="w-[30%]">
                    {
                        logos && logos.map((item) => (
                            <h5 className="text-3xl font-extrabold text-white" key={item.id}>
                                { item.title }
                            </h5>
                        ))
                    }
                    <p className="text-white">Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.</p>
                </div>
                <div className="w-[30%] text-white">
                    <h3 className="border-l-4 border-green-500 pl-4">CONTACT US</h3>
                    <span>Baku, Azerbaijan</span><br />
                    <span>Call us: +994-XX-XXX-XX-XX</span><br />
                    <span>rehim.m04@gmail.com</span>
                </div>
            </div>
        </footer>
    )
}   
import React from 'react'
import logoBeli from "../../assets/logo-beli.png"
import logoCrni from "../../assets/logo-crni.png"

const Footer = () => {
    return (
        <div className='bg-gray-300'><footer className="footer bg-gray-300 text-white p-10 ">
            <nav>
                <h6 className="text-2xl  font-bold text-black">Usluge</h6>
                <a className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">Branding</a>
                <a className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">Design</a>
                <a className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">Marketing</a>
                <a className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">Advertisement</a>
            </nav>
            <nav>
                <h6 className="text-2xl font-bold text-black">Kompanija</h6>
                <a className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">O nama</a>
                <a className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">Kontakt</a>
                <a className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">Karijera</a>

            </nav>
            <nav>
                <h6 className="text-2xl  font-bold text-black">Kontakt</h6>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">E-Mail</a>
            </nav>
            <nav className="flex justify-center w-full mt-8 scale-[0.8]">
                <aside className="flex flex-col items-center text-center">
                    <p className="text-white">Copyright © {new Date().getFullYear()} - All rights reserved by</p>
                    <a href="https://www.instagram.com/bros_c0de/" target="_blank" rel="noopener noreferrer">
                        <img className="h-[50px] mt-2" src={logoCrni} alt="Logo" />
                    </a>
                </aside>
            </nav>


        </footer>
            {/*  <footer className="footer footer-center bg-[#7D7D7D] text-base-content p-4">
                <aside>
                    <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by</p>
                    <a href='https://www.instagram.com/bros_c0de/' target="_blank" rel="noopener noreferrer"><img className='h-[50px]' src={logoCrni}></img></a>
                </aside>
            </footer> */}
        </div>
    )
}

export default Footer
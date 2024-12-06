import React from 'react';
import logoBeli from "../../assets/logo-beli.png";
import logoCrni from "../../assets/logo-crni.png";
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-300'>
            <footer className="bg-gray-300 text-white">
                <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-8 space-y-4 md:space-y-0">
                    <div className="flex flex-wrap justify-center md:justify-start space-x-6 ml-0 md:ml-8">
                        <a href="#" className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">O nama</a>
                        <a href="#" className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">Kontakt</a>
                        <a href="#" className="hover:underline hover:text-[#f5821f] hover:cursor-pointer">Karijera</a>
                        <a href="#" className="hover:underline hover:text-[#f5821f] mt-2 md:mt-0 hover:cursor-pointer">Martini Vesto by Boško Jakovljević</a>
                    </div>

                    <div className="flex justify-center space-x-6 mr-0 md:mr-10">
                        <a href="https://www.instagram.com/martinivestoofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5821f] transition duration-300 cursor-pointer">
                            <FaInstagram className='w-8 h-8' />
                        </a>
                        <a href="https://www.facebook.com/martinivesto.gr" target="_blank" rel="noopener noreferrer" className="hover:text-[#f5821f] transition duration-300 cursor-pointer">
                            <FaFacebook className='w-7 h-8' />
                        </a>
                        <a href="mailto:info@martini-vesto.com" className="hover:text-[#f5821f] transition duration-300 cursor-pointer">
                            <FaEnvelope className='w-7 h-8' />
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 space-x-0 md:space-x-4 text-sm">
                        <p className="text-black text-center md:text-left mb-0">Copyright © {new Date().getFullYear()} - All rights reserved by</p>
                        <a href="https://www.instagram.com/bros_c0de/" target="_blank" rel="noopener noreferrer">
                            <img className="h-[30px]" src={logoCrni} alt="Logo" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;

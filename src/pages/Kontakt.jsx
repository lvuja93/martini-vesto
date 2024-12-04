import React from 'react'
import { FaInstagram, FaFacebook, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons from React Icons
import EmailForm1 from '../components/Kontakt Components/KontaktContent';

const Kontakt = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black p-4">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl p-10 bg-white shadow-md space-y-8 lg:space-y-0 lg:space-x-8 mt-24">
                <div className="w-full p-0 max-w-lg">
                    <h2 className="text-3xl font-bold pb-8 text-center">Postavite nam pitanje</h2>
                    <EmailForm1 />
                </div>
                <div class="w-full lg:w-1/2 py-24 flex flex-col justify-center items-start md:pl-36 font-medium space-y-8 rounded-xl text-xl">

                    <div class="flex items-center space-x-4 p-1 rounded-md hover:text-[#f5821f] transition duration-300 cursor-pointer">
                        <a href="https://www.instagram.com/martinivestoofficial/" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-4">
                            <FaInstagram className="w-8 h-8" />
                            <p class="ml-4">@martinivestoofficial</p>
                        </a>
                    </div>


                    <div class="flex items-center space-x-4 p-1 rounded-md hover:text-[#f5821f] transition duration-300 cursor-pointer">
                        <a href="https://www.facebook.com/martinivesto.gr" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                            <FaFacebook class="w-8 h-8" />
                            <p class="ml-4">Martini Vesto</p>
                        </a>
                    </div>


                    <div class="flex items-center space-x-4 p-1 rounded-md hover:text-[#f5821f] transition duration-300 cursor-pointer">
                        <a href="mailto:info@martini-vesto.com" className="flex items-center space-x-4">
                            <FaEnvelope class="w-8 h-8" />
                            <p class="ml-4">info@martini-vesto.com</p>
                        </a>
                    </div>


                    <div class="flex items-center space-x-4 p-1 rounded-md hover:text-[#f5821f] transition duration-300 cursor-pointer">
                        <a href="tel:+38116215827" class="flex items-center space-x-4">
                            <FaPhoneAlt class="w-8 h-8" />
                            <p class="ml-4">+381 16 215827</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Kontakt;

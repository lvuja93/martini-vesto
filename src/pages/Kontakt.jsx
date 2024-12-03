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
                <div className="w-full lg:w-1/2 py-24 flex flex-col justify-center items-start md:pl-36 font-medium space-y-8 rounded-xl text-xl">

                    <div className='flex items-center space-x-4 p-1 rounded-md hover:text-[#f5821f] transition duration-300 cursor-pointer'>
                        <FaInstagram className='w-8 h-8' />
                        <p>@martinivestoofficial</p>
                    </div>
                    <div className='flex items-center space-x-4 p-1 rounded-md hover:text-[#f5821f] transition duration-300 cursor-pointer'>
                        <FaFacebook className='w-8 h-8' />
                        <p>Martini Vesto</p>
                    </div>
                    <div className='flex items-center space-x-4 pl-1 rounded-md hover:text-[#f5821f] transition duration-300 cursor-pointer'>
                        <FaEnvelope className='w-8 h-8' />
                        <p>info@martini-vesto.com</p>
                    </div>
                    <div className='flex items-center space-x-4 p-1 rounded-md hover:text-[#f5821f] transition duration-300 cursor-pointer'>
                        <FaPhoneAlt className='w-8 h-8' />
                        <p>+381 16 215827</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontakt;

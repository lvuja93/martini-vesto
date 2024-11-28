import React, { useEffect, useState } from "react";
import currentVideo1 from "../assets/cover.mp4";
import currentVideo2 from "../assets/mobile-cover.mp4";
import coverPic1 from "../assets/Pariz/cover-pic1.jpg"
import coverPic2 from "../assets/Pariz/cover-pic-2.jpg"

// Custom hook for media query handling
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const updateMatches = (e) => setMatches(e.matches);

        mediaQuery.addEventListener("change", updateMatches);
        return () => mediaQuery.removeEventListener("change", updateMatches);
    }, [query]);

    return matches;
};

const Home = () => {
    const isMobile = useMediaQuery("(max-width: 640px)");
    const currentVideo = isMobile ? currentVideo2 : currentVideo1;

    return (
        <div className="bg-white">
            <div className="relative bg-white w-full h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    className="w-full h-full object-cover"
                    preload="metadata"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate"
                >
                    <source src={currentVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col mb-28 items-center justify-end text-center text-white z-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">ZIMA 2025</h1>
                    <div className="flex space-x-4 mx-4 md:mx-0">
                        <a
                            href="#"
                            className="bg-white text-black py-4 px-8  rounded text-sm md:text-base font-semibold shadow-md hover:bg-gray-200 transition"
                        >
                            ŽENSKA KOLEKCIJA
                        </a>
                        <a
                            href="#"
                            className="bg-white text-black py-4 px-8 rounded text-sm md:text-base font-semibold shadow-md hover:bg-gray-200 transition"
                        >
                            MUŠKA KOLEKCIJA
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white ">
                <h1 className="text-5xl text-black  font-semibold my-12">REVIJA PARIZ 2024</h1>
            </div>
            <div className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2 p-8 ">
                {/* Prva slika */}
                <div className="flex flex-col justify-center items-center space-y-4 mb-4">
                    <img
                        src={coverPic1}
                        alt="Woman"
                        className="object-cover w-full h-full max-h-[700px] max-w-[500px]"
                    />
                    <a
                        href="#"
                        className="text-black text-lg font-semibold underline"
                    >
                        Ženska revijska odela
                    </a>
                </div>


                {/* Druga slika */}
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img
                        src={coverPic2}
                        alt="Woman"
                        className="object-cover w-full h-full max-h-[700px] max-w-[500px]"
                    />
                    <a
                        href="#"
                        className="text-black text-lg font-semibold underline"
                    >
                        Muška revijska odela
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black p-4">
                <div className="flex flex-col lg:flex-row w-full max-w-6xl p-10 bg-white rounded-lg shadow-md space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="w-full lg:w-1/2 p-5">
                        <h2 className="text-center text-2xl font-semibold mb-6">Zakazite termin za probu</h2>
                        <form id="contact-form">
                            <div className="mb-6 relative text-black">
                                <input type="text" id="name" name="name" placeholder="Unesite ime" required className="w-full p-3 text-base border border-gray-300 rounded-md min-w-0 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
                            </div>
                            <div className="mb-6 relative">
                                <input type="email" id="email" name="email" placeholder="Unesite email" required className="w-full p-3 text-base border border-gray-300 rounded-md min-w-0 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
                            </div>
                            <div className="mb-6 relative">
                                <input type="datetime-local" id="datetime" name="datetime" required className="w-full p-3 text-base border border-gray-300 rounded-md min-w-0 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
                            </div>
                            <div className="mb-6 relative">
                                <input type="tel" id="phone" name="phone" placeholder="Unesite broj telefona" required className="w-full p-3 text-base border border-gray-300 rounded-md min-w-0 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" />
                            </div>
                            <button type="submit" className="w-full p-3 text-base text-white bg-gray-600 rounded-md hover:bg-gray-700">Pošalji</button>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 p-5 flex flex-col space-y-8">
                        <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0">

                            <div className="w-full md:w-5/6">
                                <h3 className="text-lg font-semibold">Lokacija 1</h3>
                                <p className="block text-sm font-medium">Adresa: Ulica 1, Grad 1</p>
                                <p className="block text-sm font-medium">Telefon: +123456789</p>
                                <p className="block text-sm font-medium">Email: lokacija1@example.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0">

                            <div className="w-full md:w-5/6">
                                <h3 className="text-lg font-semibold">Lokacija 2</h3>
                                <p className="block text-sm font-medium">Adresa: Ulica 2, Grad 2</p>
                                <p className="block text-sm font-medium">Telefon: +987654321</p>
                                <p className="block text-sm font-medium">Email: lokacija2@example.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0">

                            <div className="w-full md:w-5/6">
                                <h3 className="text-lg font-semibold">Lokacija 3</h3>
                                <p className="block text-sm font-medium">Adresa: Ulica 3, Grad 3</p>
                                <p className="block text-sm font-medium">Telefon: +1122334455</p>
                                <p className="block text-sm font-medium">Email: lokacija3@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};



export default Home;

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
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md w-96">
                    <h2 class="text-2xl font-semibold text-gray-700 mb-4">Zakazite termin za probu</h2>
                    <form class="space-y-4">

                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Ime</label>
                            <input type="text" id="name" placeholder="Unesite ime"
                                class="block w-full p-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" placeholder="Unesite email"
                                class="block w-full p-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <div>
                            <label for="datetime" class="block text-sm font-medium text-gray-700">Datum i vreme</label>
                            <div class="relative">
                                <input type="datetime-local" id="datetime"
                                    class="block w-full p-2 pl-12 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />

                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10m-4 8h-2a2 2 0 01-2-2v-4a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2zM5 11h14M5 7h14M5 3h14" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700">Telefon</label>
                            <input type="text" id="phone" placeholder="Unesite broj telefona"
                                class="block w-full p-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        </div>

                        <button type="submit"
                            class="w-full bg-blue-500 text-white font-semibold p-2 rounded-lg hover:bg-blue-600 transition">
                            Pošalji
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Home;

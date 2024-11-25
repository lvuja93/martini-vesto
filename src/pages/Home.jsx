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
        <div>
            <div className="relative w-full h-screen overflow-hidden">
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
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="bg-white text-black py-4 px-8 rounded text-sm md:text-base font-semibold shadow-md hover:bg-gray-200 transition"
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
            <div>
                <h1 className="text-5xl font-semibold my-12">REVIJA PARIZ 2024</h1>
            </div>
            <div className="bg-white h-screen grid grid-cols-1 md:grid-cols-2 p-8">
                {/* Prva slika */}
                <div className="flex flex-col justify-center items-center space-y-4">
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
        </div>

    );
};

export default Home;

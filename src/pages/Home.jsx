import React, { useEffect, useRef, useState } from "react";
import currentVideo1 from "../assets/cover.mp4";
import currentVideo2 from "../assets/mobile-cover.mp4";
import coverPic1 from "../assets/Prolece-leto.jpg"
import coverPic2 from "../assets/Jesen-zima.jpg"
import Mailer from "../components/Mailer Components/MailerFrontend"
import tailor from "../assets/tailor-in-action-2.png"
import testPic from "../assets/test.jpg"
import classic1 from "../assets/IMG_2315_jpg_12_11zon 2.jpeg"
import classic2 from "../assets/IMG_2317_jpg_13_11zon.jpeg"
import classic3 from "../assets/IMG_2409_19_11zon 2.jpeg"
import ClassicsGalleryContent from "../components/Gallery Components/ClassicsGalleryContent";
import { Link } from "react-router-dom";


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


    const [showToast, setShowToast] = useState(false);

    const handleSendMessage = () => {
        // Simulate a successful action
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
    };


    const form = useRef();


    // const sendEmail = (e) => {
    //   e.preventDefault();

    //   emailjs.sendForm(
    //     'service_9d0y8dw',  // Service ID from EmailJS
    //     'template_rwgg14t', // Template ID from EmailJS
    //     form.current,
    //     '5PBfDkeFBYXq3Po_j'      // User ID from EmailJS
    //   )
    //   .then((result) => {
    //       console.log(result.text);
    //       // alert("Message sent successfully!");
    //       handleSendMessage()
    //   }, (error) => {
    //       console.log(error.text);
    //       alert("An error occurred, please try again.");
    //   });

    //   e.target.reset();
    // };


    const isMobile = useMediaQuery("(max-width: 640px)");
    const currentVideo = isMobile ? currentVideo2 : currentVideo1;

    return (
        <div className="bg-white">
            <div className="relative bg-white w-full h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    className="w-full h-full object-cover "
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
                    <h1 className="text-4xl md:text-6xl font-bold mb-0">FASHION WEEK</h1>
                    <h1 className="text-xl text-white  font-semibold mb-4">by BOŠKO</h1>
                    <div className="flex space-x-4 mx-4 md:mx-0">

                        <a
                            href="#"
                            className="bg-white text-black py-4 px-8 rounded text-sm md:text-base font-semibold shadow-md hover:bg-[#f5821f] hover:text-white transition"
                        >
                            ISTRAŽI KOLEKCIJU
                        </a>

                    </div>

                </div>
            </div>



            <div className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2 p-8 z-50 mt-8">
                {/* Prva slika */}
                <div className="flex flex-col justify-center items-center space-y-4 h-full mb-12">
                    <a href="#" className="block transition-transform duration-700 hover:scale-105">
                        <div className="relative w-full max-w-[500px] h-[600px]">
                            <img
                                src={coverPic1}
                                alt="Woman"
                                className="object-cover w-full h-full rounded shadow-lg"
                            />
                        </div>

                        <a
                            href="#"
                            className="text-black text-2xl font-semibold underline text-center mt-4"
                        >
                            Proleće/Leto
                        </a>
                    </a>
                </div>

                {/* Druga slika */}
                <div className="flex flex-col justify-center items-center space-y-4 h-full">
                    <a href="#" className="block transition-transform duration-700 hover:scale-105">
                        <div className="relative w-full max-w-[500px] h-[600px]">
                            <img
                                src={coverPic2}
                                alt="Woman"
                                className="object-cover w-full h-full rounded shadow-lg"
                            />
                        </div>

                        <a
                            href="#"
                            className="text-black text-2xl font-semibold underline text-center mt-4"
                        >
                            Jesen/Zima
                        </a>
                    </a>
                </div>
            </div>



            <div className="bg-gray-100 pt-4 pb-12">
                {/* Naslov */}
                <h1 className="text-5xl text-black font-semibold my-12 text-center">
                    <strong className="text-[#f5821f] ">Martini Vesto</strong> klasici
                </h1>

                {/* Sekcija sa slikama */}
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl">
                    {/* leva kolona */}
                    <div className="flex flex-col items-center w-full md:w-1/2 pl-4 py-4">
                        {/* Tekst iznad slike */}
                        <p className=" text-gray-700 font-medium mb-8 text-center text-2xl  ">
                            Klasično odelo nije samo komad garderobe – to je izjava. To je simbol stava, samopouzdanja i prefinjenog ukusa. Naša kolekcija klasičnih odela predstavlja harmoniju tradicije i modernog dizajna, prilagođenu potrebama današnjeg muškarca.
                        </p>
                        <img
                            src={classic3}
                            alt="Slika 3"
                            className="w-4/5 h-full rounded shadow-lg object-cover"
                            style={{ height: 'calc(100% + 1.5rem)' }} // Visina desne slike = visina leve dve + razmak
                        />

                    </div>

                    {/* desna kolona */}
                    <div className="flex flex-col items-center space-y-6 w-full md:w-1/2 pl-4">
                        <img
                            src={classic2}
                            alt="Slika 1"
                            className="w-4/5 rounded shadow-lg"
                        />
                        <img
                            src={classic1}
                            alt="Slika 2"
                            className="w-4/5 rounded shadow-lg"
                        />
                    </div>
                </div>

                {/* Centrirano dugme na kraju */}
                <div className="flex justify-center mt-8">
                    <Link to="/classic galerija" className="px-8 py-3 bg-white text-black text-lg font-semibold rounded hover:bg-[#e5701b] hover:text-white transition-colors duration-300">
                        VIDI CELU KOLEKCIJU
                    </Link>
                </div>
            </div>




            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
                <p className="py-8 text-center text-black text-2xl max-w-3xl px-0">
                    Pravi stil je bezvremenski, a krojenje po meri omogućava Vam da posedujete komad garderobe koji ne samo da prati modne trendove, već i odoleva vremenu.
                </p>
                <div className="flex flex-col lg:flex-row w-full max-w-6xl p-10 bg-white shadow-2xl space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="w-full p-0 max-w-lg">
                        <h2 className="text-2xl pb-8">Zakažite termin</h2>
                        <Mailer />
                    </div>
                    <div className="w-full lg:w-1/2 p-10 flex flex-col space-y-8">
                        <img src={tailor} className="pt-3" alt="Tailor"></img>
                    </div>
                </div>
                {/* Dodati tekst ispod obe kolone */}

            </div>


        </div>


    );
};



export default Home;

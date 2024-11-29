import React, { useEffect, useRef, useState } from "react";
import currentVideo1 from "../assets/cover.mp4";
import currentVideo2 from "../assets/mobile-cover.mp4";
import coverPic1 from "../assets/Pariz/cover-pic1.jpg"
import coverPic2 from "../assets/Pariz/cover-pic-2.jpg"
import Mailer from "../components/Mailer Components/MailerFrontend"


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
                        className="text-black text-2xl font-semibold underline"
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
                        className="text-black text-2xl font-semibold underline"
                    >
                        Muška revijska odela
                    </a>
                </div>


            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black p-4">
                <div className="flex flex-col lg:flex-row w-full max-w-6xl p-10 bg-white rounded-lg shadow-md space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="w-full p-0 max-w-lg ">
                        <h2 className="text-2xl pb-8">Zakazite termin za probu</h2>
                        <Mailer />
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

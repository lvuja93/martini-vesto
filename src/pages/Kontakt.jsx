import React from 'react'
import EmailForm1 from '../components/Kontakt Components/KontaktContent'
import tailor from "../assets/tailor-in-action-2.png"
import insta from "../assets/instagram.png"
import fb from "../assets/facebook.png"
import email from "..//assets/email.png"
import phone from "..//assets/telephone.png"

const Kontakt = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black p-4 ">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl p-10 bg-white  shadow-md space-y-8 lg:space-y-0 lg:space-x-8 mt-24">
                <div className="w-full p-0 max-w-lg ">
                    <h2 className="text-2xl pb-8">Postavite nam pitanje</h2>
                    <EmailForm1 />
                </div>
                <div className="w-full lg:w-1/2 py-24 flex items-center flex-col  space-y-8 bg-gray-200 rounded-xl text-xl ">

                    <div className='flex justify-start'>
                        <a className='flex items-center space-x-2 underline' href="https://www.instagram.com/martinivestoofficial/" target="_blank" >
                            <img src={insta} className='w-8 ' />
                            <p >
                                @martinivestoofficial
                            </p>
                        </a>
                    </div>
                    <div >
                        <a className='flex items-center space-x-2 underline' href="https://www.facebook.com/martinivestoofficial" target="_blank" >
                            <img src={fb} className='w-8 ' />
                            <p >
                                Martini Vesto
                            </p>
                        </a>
                    </div>
                    <div >
                        <a className='flex items-center space-x-2 underline' href="mailto:info@martini-vesto.com" target="_blank"  >
                            <img src={email} className='w-8 ' />
                            <p >
                                info@martini-vesto.com
                            </p>
                        </a>
                    </div>
                    <div >
                        <a className='flex items-center space-x-2 ' href="https://www.instagram.com/martinivestoofficial/" target="_blank" >
                            <img src={phone} className='w-8 ' />
                            <p >
                                +381 16 215827
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Kontakt
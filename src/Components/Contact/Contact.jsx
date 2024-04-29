import React from "react";
import {githubInfo} from '../Github/Github'
import { useNavigate } from "react-router-dom";

function Contact(){
    const navigate = useNavigate()
    const redirect=()=>{
        navigate('/github')
    }
    return(
        <>
        <div className="w-3/4 mx-auto mt-24 lg:flex mb-24 justify-center lg:gap-10">
            <div className="items-center bg-gray-100 p-10 rounded-lg pl-7 text-center">
            <h1 className="font-bold text-4xl">Get in touch:</h1>
            <span className="font-semibold">Fill in the form to start a conversation</span>
            <div className="flex gap-3 justify-center mt-8">
            <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
            <p>Mumbai,Street,State,Postal Code</p>
            </div>
            <div className="flex justify-center gap-3 mt-4">
            <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
            <p>+91 1234567890</p>
            </div>
            <div className="flex justify-center gap-3 mt-4">
            <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
            <p>info@blah.org</p>
            </div>
            </div>
            <div className="items-center flex flex-col">
                <label className="hidden" for="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Full Name"
                className="border border-gray-400 px-3 py-2 rounded-lg mt-12"
                >
                </input>
                <label className="hidden" for="email">Email</label>
                <input type="email" id="email" placeholder="Email"
                className="border border-gray-400 px-3 py-2 rounded-lg mt-3"
                >
                </input>
                <label className="hidden" for="telephone">Telephone Number</label>
                <input type="text" id="telephone" placeholder="Telephone Number"
                className="border border-gray-400 px-3 py-2 rounded-lg mt-3"
                >
                </input>
                <button type="submit" className="bg-orange-700 mt-3 px-6 rounded-lg text-white py-2" onClick={redirect}>Submit</button>
            </div>
        </div>
        </>
    )
}

export default Contact
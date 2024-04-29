import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div className='w-3/4 mx-auto'>
            <div className='mt-10 lg:mt-28 flex justify-between'>
                <img src="https://i.ibb.co/5BCcDYB/Remote2.png" className='w-48 lg:w-96'/>
                <div className='text-right'>
                <p className='font-bold text-2xl lg:text-4xl'>Download Now</p>
                <p className='font-bold text-1xl lg:text-3xl'>Lorem Ipsum</p>
                <Link
                            className="inline-flex text-white items-center px-4 py-2 font-medium bg-orange-700 rounded-lg hover:opacity-75 mt-10" 
                            to="/"
                        >
                         Download now
                        </Link>
                </div>
            </div>
            <div className='flex flex-col mt-28'>
                <img src="https://i.ibb.co/2M7rtLk/Remote1.png" className='w-72 lg:w-96 mx-auto'/>
                <span className='text-center text-2xl lg:text-5xl font-semibold mt-10 mb-10'>Lorem Ipsum Yojo</span>
            </div>
        </div>
        <hr />
        </>
    );
}


export default Home

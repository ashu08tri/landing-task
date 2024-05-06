import React from 'react';
import Image from 'next/image';
import { RiUserFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

function Hero() {
    return (
        <>
            <div className='h-[calc(100vh-6rem)] bg-gradient-to-r from-opacity-blue to-blue-600 border-spacing-1 flex flex-col md:flex-row'>
                {/*text container*/}
                <div className='w-full md:w-1/2 h-2/4 md:h-full pl-2 text-4xl md:text-7xl flex justify-center items-center text-white font-playfair font-semibold'>
                    <div className=''>
                        <p className='py-3'>Not Your</p>
                        <div className='flex relative'><p className='flex text-yellow-300 mr-4'>Ordinary</p>
                            <div className='absolute w-10 h-10 md:w-20 md:h-20 left-40 md:left-80 bottom-3 md:bottom-3'>
                                <Image src='/ordinary.png' fill objectFit='contain' />
                            </div>
                        </div>
                        <div className='md:w-[calc(30vw)]'>
                        <p className='py-3 flex flex-col break-words'>Monetisation Tool</p>
                        </div>
                        
                        <p className='pt-5 text-base'>Turn your inactive users into revenue generating leads by <br /> doing simple tasks & earning rewards.</p>
                    </div>
                </div>

                {/*image container*/}
                <div className='w-full h-3/4 md:h-[calc(100vh-17vh)] md:w-1/2 relative mb-4'>
                    <Image
                        src='/home_hero_image.png'
                        fill
                        objectFit='contain'
                        alt='hero_img'
                        style={{ filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))' }}
                    />
                </div>
            </div>
            <div className='bg-gradient-to-r from-sky-950 to-sky-950 via-sky-900 h-40 md:h-16'>
                <ul className='flex flex-col md:flex-row gap-6 md:gap-10 h-full justify-center items-center text-white text-base md:text-2xl font-semibold'>
                    <li className='list-disc md:list-none'>Easy Monetisation for your product</li>
                    <li className='list-disc'>Turn Your Ideas Into Income</li>
                    <li className='list-disc'>Get Simplified Monetization Solutions</li>
                </ul>
            </div>
            <div className='h-[calc(80vh)] md:h-64 flex flex-col md:flex-row items-center text-white text-xl bg-gradient-to-r from-opacity-blue to-blue-600'>
                <div className='h-1/4 flex justify-center items-center w-1/2 md:w-1/4'>
                    <p className='p-8 border-b-2 md:border-b-0 md:border-r-2 border-blue-400 '>We speak with our powerfull statistics</p>
                </div>

                <div className='h-3/4 w-3/4 my-5 flex flex-col md:flex-row justify-between items-center px-20 text-center'>
                <p className='py-5 text-5xl font-bold'>1M+ <br /><span className='text-xl font-normal flex gap-1 pt-2'><span className='text-yellow-400 text-2xl'><RiUserFill /></span>activeUsers</span></p>
                <p className='py-5 text-5xl font-bold'>30K+ <br /><span className='text-xl font-normal flex gap-1 pt-2'><span className='text-yellow-400 text-2xl'><FaStar /></span>5-Stars Reviews</span></p>
                <p className='py-5 text-5xl font-bold'>$0.5M+ <br /><span className='text-xl font-normal flex gap-1 pt-2'><span className='text-yellow-400 text-2xl'><FaStar /></span>Transactions</span></p>
                </div>

            </div>
        </>

    )
}

export default Hero;
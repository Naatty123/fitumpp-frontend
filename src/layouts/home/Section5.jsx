import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/outline';

export default function SectionFive() {
  return (
    <div className='w-full min-h-screen py-10 px-5'>
        {/* Behind the Scene Box */}
        <div className='absolute w-[50%] md:w-[30%] h-80 bg-gray-300 mt-56'>

        </div>
        {/* Middle Box */}
        <div className='my-20 relative w-full md:w-[80%] h-80 m-auto bg-primary-500'>

        </div>
        {/* Text Box */}
        <div className='absolute -mt-52  md:mx-20 w-[80%] mx-5 md:w-[30%] h-52 px-10 py-5 space-y-5 bg-gray-50 shadow-xl'>
        <h1 className='text-4xl '>See The Works Done</h1>
        <p className='flex items-center text-xl gap-5'>View Gallery <ArrowRightIcon className="w-5"/></p>
        </div>
  </div>
  )
}

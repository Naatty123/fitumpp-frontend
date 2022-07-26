import React from 'react'
import FadeIn from '../../components/home/FadeIn'
import Fadeintest from '../../tests/Fadeintest'

export default function SectionTwo() {
  return (
    <div className='w-full relative h-auto bg-white  bg-gray-100'>
        <section className='w-full flex flex-col md:flex-row justify-center items-center h-auto py-10 md:h-[70vh]'>
            <div className='h-full w-full md:flex hidden'>
                <div className='relative w-[35%] h-[90%]  m-auto bg-pink-300'>
                    <FadeIn/>
                    {/* <Fadeintest/> */}
                </div>
            </div>
            <div className='h-full w-full flex'>
                <div className='w-full md:w-[90%] lg:w-[60%] px-8 md:px-0  sm:my-auto  h-auto sm:h-[80%] bg-gary-50 md:space-y-4 flex flex-col justify-start items-start gap-10'>
                <h1 className='text-3xl'>Printing & Advertisements of any Types</h1>
                <p className=''>Business Cards, Corporate brouchers, Tea glasses, Sanitizer pens, Door signs, Cake toppers,  LED displays, Car Branding, Notice boards, Acrylic engraving & golden painting, Callanders and many more ...</p>
                <button className='px-5 py-3 bg-primary-500 text-gray-50 shadow-md hover:shadow-lg'>Order Now</button>
                </div>
            </div>
        </section>
    </div>
  )
}

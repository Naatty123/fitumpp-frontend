import React, { useState } from 'react'
import SectionOne from '../features/home/SectionOne';
import FourthContent from '../features/home/FourthContent';
import { ArrowRightIcon } from '@heroicons/react/outline';

import logo1 from '../assets/images/Compnays/1.png'
import logo2 from '../assets/images/Compnays/2n.jpg'
import logo3 from '../assets/images/Compnays/3.jpg'
import logo4 from '../assets/images/Compnays/4.png'
import logo5 from '../assets/images/Compnays/5.png'
import logo6 from '../assets/images/Compnays/6.jpg'
import logo7 from '../assets/images/Compnays/7.png'
import logo8 from '../assets/images/Compnays/8 n.jpg'
import logo9 from '../assets/images/Compnays/9.png'
import logo10 from '../assets/images/Compnays/10.png'
import logo11 from '../assets/images/Compnays/11.png'
import logo12 from '../assets/images/Compnays/12.jpg'
import CompanyCards from '../components/CompanyCards';

export default function Home() {
  
  return (
  <div className='bg-gray-50 flex flex-col'>
    {/* First Content */}
      <SectionOne/>
    {/* Second Content */}
    <div className='w-full relative'>
        <section className='w-full flex flex-col md:flex-row justify-center items-center h-screen md:h-[70vh]'>
          <div className='h-full w-full bg-gray-50 flex '>
              <div className='w-[40%]  m-auto h-[80%] bg-pink-300'>

              </div>
          </div>
          <div className='h-full w-full bg-gray-50 flex'>
            <div className='w-full md:w-[60%] px-8 md:px-0  my-auto h-[80%] bg-gary-50 md:space-y-4 flex md:block flex-col justify-center items-center gap-10'>
              <h1 className='text-3xl'>Printing & Advertisements
                of any Types</h1>
              <p className=''>Business Cards, Corporate brouchers, Tea glasses, Sanitizer pens, Door signs, Cake toppers,  LED displays, Car Branding, Notice boards, Acrylic engraving & golden painting, Callanders and many more ...</p>
              <button className='px-5 py-3 bg-primary-500 text-gray-50 shadow-md hover:shadow-lg'>Order Now</button>
            </div>
          </div>
        </section>
    </div>
    {/* Third Content */}
    <div className='w-full relative border-y boredr-gray-200'>
        <section className='w-full min-h-screen  h-auto bg-gray-50 flex flex-col md:flex-row '>
          <div className='w-full h-auto md: py-10 px-4 md:pl-20'>
              <h1 className='text-4xl md:text-7xl'>A <span className='font-semibold text-primary-500'>full-service printing experience</span> build on top of experience and professionalism </h1>
          </div>
          <div className='w-full h-auto py-10 text-2xl space-y-10 px-5 md:px-0 md:pr-10'>
              <p>Our strong reputation is built on the successful delivery of all assignments, no matter how challenging the brief or how tight the timeframe. From business cards to corporate brochures, we collaborate with the customer to understand their requirements fully and to provide the optimal results using the highest specifications appropriate for their budget.We pride ourselves on professionalism, loyalty and a commitment to upholding the needs of our clients</p>
              <button className='px-3 py-4 bg-primary-500 text-white rounded-lg shadow-lg hover:shadow-xl float-right'>More About Us </button>
          </div>
        </section>
    </div>
    {/* Fourth Content */}
    <FourthContent/>
    {/* Fifth Content */}
    <div className='w-full min-h-screen py-10'>
      {/* Behind the Scene Box */}
      <div className='absolute w-[30%] h-80 bg-gray-300 mt-56'>

      </div>
      {/* Middle Box */}
      <div className='my-20 relative w-[80%] h-80 m-auto bg-primary-500'>

      </div>
      {/* Text Box */}
      <div className='absolute -mt-52 mx-20 w-[30%] h-52 px-10 py-5 space-y-5 bg-gray-50 shadow-xl'>
        <h1 className='text-4xl '>See The Works Done</h1>
        <p className='flex items-center text-xl gap-5'>View Gallery <ArrowRightIcon className="w-5"/></p>
      </div>
    </div>
    {/* Sixth Content */}
    <div className='relative  w-full min-h-screen flex flex-col items-center pt-5 gap-24 border-b border-gray-200'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-center text-4xl'>A Selection of Our <br /> <span className='text-primary-500'>Latest & Gratest</span>  Projects</h1>
        <hr className='border-2 border-primary-500 rounded-full w-2/4 m-auto'/>
      </div>
      {/* Background Boxed */}
      <div className='absolute top-44 h-auto w-full z-10'>
        {/* Left Green Box */}
        <div className='absolute w-[15%] h-96 bg-primary-600'>
        </div>
        {/* Right Green Box */}
        <div className='absolute right-0 top-24 w-[25%] h-96 bg-primary-600 float-right'>
        </div>
      </div>
      {/* Foreground Data */}
      <div className='w-full h-96 bg-transparent z-20 flex flex-row gap-20 justify-evenly items-center'>
        <div className='w-48 h-52 bg-gray-400 shadow-xl'></div>
        <div className='w-48 h-52 bg-gray-400 shadow-xl'></div>
        <div className='w-48 h-52 bg-gray-400 shadow-xl'></div>
        <div className='w-48 h-52 bg-gray-400 shadow-xl'></div>
        <div className='w-48 h-52 bg-gray-400 shadow-xl'></div>
      </div>
    </div>
    {/* Seventh Content */}
    <div className='w-full relative h-auto  bg-[#E4F8F2] flex flex-col items-center py-5'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-5xl'>Some of our <span className='text-primary-500'>Satisfied Clients</span></h1>
        <hr className='border-2 border-primary-500 bg-primary-500 w-1/4 m-auto rounded-full'/>
      </div>
      {/* Company List */}
      <div className='w-full h-auto  grid grid-cols-7 gap-5'>
        <div className='w-full h-full '></div>
        <div className='w-full h-full  flex flex-col py-60'>
        <CompanyCards/>
        </div>
        
        <div className='w-full h-full  flex flex-col gap-12 py-40'>
           <CompanyCards/>
           <CompanyCards/>
        </div>

        <div className='w-full h-full  flex flex-col gap-12 py-20'>
           <CompanyCards/>
           <CompanyCards/>
           <CompanyCards/>
        </div>
        
        <div className='w-full h-full  flex flex-col gap-12 py-40'>
           <CompanyCards/>
           <CompanyCards/>
        </div>

        <div className='w-full h-full  flex flex-col py-60'>
           <CompanyCards/>
        </div>
        <div className='w-full h-full '></div>


      </div>

    </div>





    </div>
  )
}

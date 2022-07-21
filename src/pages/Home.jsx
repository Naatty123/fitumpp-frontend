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
import CompanyCardHolder from '../components/CompanyCardHolder';

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
        <div className='w-[80%] h-96 md:w-48 md:h-52 bg-gray-300 shadow-xl'></div>
        <div className='hidden md:block w-48 h-52 bg-gray-400 shadow-xl'></div>
        <div className='hidden md:block w-48 h-52 bg-gray-400 shadow-xl'></div>
        <div className='hidden md:block w-48 h-52 bg-gray-400 shadow-xl'></div>
        <div className='hidden md:block w-48 h-52 bg-gray-400 shadow-xl'></div>
      </div>
    </div>
    {/* Seventh Content */}
    <div className='w-full relative h-auto  bg-[#E4F8F2] flex flex-col items-center py-5'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-5xl text-center'>Some of our <span className='text-primary-500'>Satisfied Clients</span></h1>
        <hr className='border-2 border-primary-500 bg-primary-500 w-1/4 m-auto rounded-full'/>
      </div>
      {/* Company List */}
      <div className='w-full h-auto  grid grid-cols-1 md:grid-cols-7 gap-10'>
        <CompanyCardHolder />
        <div className='w-full h-full  flex flex-col md:py-56'>
        <CompanyCards image={logo8}/>
        </div>

        <div className='w-full h-full  flex flex-col gap-12 md:py-36'>
           <CompanyCards image={logo4}/>
           <CompanyCards image={logo5}/>
        </div>

        <div className='w-full h-full  flex flex-col gap-12 md:py-12'>
           <CompanyCards image={logo1}/>
           <CompanyCards image={logo2}/>
           <CompanyCards image={logo3}/>
        </div>
        
        <div className='w-full h-full  flex flex-col gap-12 md:py-36'>
           <CompanyCards image={logo6}/>
           <CompanyCards image={logo7}/>
        </div>

        <div className='w-full h-full  flex flex-col md:py-56'>
           <CompanyCards image={logo10}/>
        </div>
        <CompanyCardHolder />
        
      </div>

    </div>
    {/* Eigth Content */}
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
          <p class="leading-relaxed">Files</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
          <p class="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

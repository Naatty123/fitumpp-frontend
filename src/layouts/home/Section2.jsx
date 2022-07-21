import React from 'react'

export default function SectionTwo() {
  return (
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
  )
}

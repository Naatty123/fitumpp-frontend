import React from 'react'

export default function Section3() {
    let windowHeight= window.innerHeight;
    // alert(windowHeight);
  return (
    <div className='w-full min-h-screen h-full md:h-auto relative boor md:block flex flex-col'>
        <div className='relative md:absolute md:top-10 md:left-10 w-full md:w-2/3 h-auto bg-primary-300 z-10 py-10 px-5 md:px-10 md:pr-80 space-y-10 order-2'>
            <h1 className='text-4xl md:text-5xl font-semibold'>We succeed when you succeed.</h1>
            <p className='text-lg md:text-xl'>At Fitsum Advert, we approach every project with your success in mind, and we know that looks different for every client. We’ll discuss what has (and hasn’t) worked for you in the past and work together to decide what steps to take next. As your needs evolve, our varied capabilities and expertise allow us to accommodate your requests and help your business succeed.</p>
            <h1 className='text-3xl md:text-5xl font-semibold'>HELPING YOU ACHIEVE YOUR GOALS</h1>
            <p className='text-lg md:text-xl'>We see every print job as a way of
                                    building relationships that guarantee
                                    our clients’ success. Whether our
                                    clients are in business, government,
                                    educational institutions or individuals
                                    planning personal events that require
                                    professional printing, we are here to
                                    ensure that they achieve their goals
                                    by providing affordable, creative and
                                    high quality printing services.</p>
        </div>
        <div 
        className='relative md:absolute md:top-3 md:right-10 w-full md:w-2/4 bg-purple-500 z-20 order-1 '
        style={{
            height: windowHeight/2 + windowHeight/4,
        }}
        >
        </div>
    </div>
  )
}

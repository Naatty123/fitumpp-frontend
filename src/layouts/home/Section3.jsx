import React from 'react'

export default function SectionThree() {
  return (
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
  )
}

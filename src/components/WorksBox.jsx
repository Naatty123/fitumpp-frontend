import React from 'react'

export default function WorksBox(props) {
  return (
    // Full Box
    <div className='w-auto h-auto boor py-10 flex flex-col items-center gap-5 px-5'>
        {/* Upper Box */}
        <div className='flex flex-col items-center gap-2'>
            <img className='w-24' src="https://wiki.dave.eu/images/4/47/Placeholder.png" alt="Place Holder" />
            <p className='text-3xl font-bold'>{props.title}</p>
        </div>
        {/* Center Content */}
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium pariatur obcaecati aut! Perspiciatis minus error suscipit odit at maiores quas consequatur non doloribus? Voluptate quam animi nemo fuga esse.</p>
        </div>
        {/* Last Content */}
        <div>
            <button className='px-5 py-4 bg-primary-500 shadow-md hover:shadow-xl text-white'>Learn More</button>
        </div>
    </div>
  )
}

import React from 'react'

import award from '../../assets/images/AboutPageIcons/award-symbol.png';

    const count=[
            {id:1, text: "Award-1"},
            {id:2, text: "Award-2"},
            {id:3, text: "Award-3"},
            {id:4, text: "Award-4"},
            {id:5, text: "Award-5"},
            {id:6, text: "Award-6"},
    ];

export default function Section7() {
  return (
    <div className='w-full flex flex-col min-h-screen boor py-5 px-20'>
        <div className='flex flex-col gap-10'>
            <img 
            className='w-44 bg-primary-500'
            src={award} 
            alt="Award Icon" />
           <div className='flex flex-col gap-5'>
                <h1 className='text-5xl text-primary-500'>Awards</h1>
                <hr className='border-2 border-primary-500 w-1/4 '/>
           </div>
           <div className='grid grid-col-1 md:grid-cols-3 gap-10'>
             {
                count.map((item)=>(
                    <div
                    key={item.id}
                    className='w-full bg-gray-400 h-60 rounded-2xl shadow-md hover:shadow-2xl cursor-pointer flex justify-center items-center transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 '>
                        <h1 className='text-4xl text-gray-50'>{item.text}</h1>
                    </div>
                ))
             }
           </div>
        </div>
    </div>
  )
}

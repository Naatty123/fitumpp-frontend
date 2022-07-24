import React from 'react'
import { useState } from 'react';

// Images
import machine from '../../assets/images/AboutPageIcons/machine.png';

// Data
import MachineNames from '../../data/MachineNames';
export default function Section9() {
    const [active,setActive] = useState('mach-1');
    
    

  return (
    <div className='relative w-full min-h-screen bg-gray-300'>
        <div className='py-5 md:py-10 px-5 md:px-20 flex flex-col gap-10'>
            <img 
            className='w-44 bg-primary-500'
            src={machine} 
            alt="Machine Icon" />
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl'>Current <span className='text-primary-500'>Printing Machines</span></h1>
                <hr className='border-2 border-primary-500 w-1/4 '/>
            </div>
        </div>
        <div className=' relative boor w-full h-auto grid grid-col-1 md:grid-cols-3 gap-10 px-20 py-5'>
                {
                    MachineNames.map((item) =>(
                        <div 
                        key={item.id}
                        className=' object-fill bg-repeat h-80 w-full bg-gray-3 rounded-xl cursor-pointer hover:shadow-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 '
                        style={{
                            backgroundImage: `url("https://wiki.dave.eu/images/4/47/Placeholder.png")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        >
                            
                        </div>
                    ))
                }
        </div>

    </div>
  )
}

import React from 'react'
import { useState } from 'react';

// Images
import machine from '../../assets/images/AboutPageIcons/machine.png';

export default function Section9() {
    const [active,setActive] = useState('mach-1');
    const machineNames = [
                {id: 1, name: "Heidelberg MO", link:'mach-1'},
                {id: 2, name: "Polar Cutter", link:'mach-2'},
                {id: 3, name: "Perfect Binder" , link:'mach-3'},
                {id: 4, name: "Heidelberg Kord" ,link:'mach-4'},
                {id: 5, name: "Digital Solvent Printer", link:'mach-5'},
                {id: 6, name: "CNC", link:'mach-6'},
                {id: 7, name: "Laser Cutter", link:'mach-7'},
                {id: 8, name: "hp Digital Printer", link:'mach-8'}
    ];
    

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
                    machineNames.map((item) =>(
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

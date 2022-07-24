import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InData from '../../data/InfrastructureData';
// Icons
import infra from '../../assets/images/AboutPageIcons/infrastructure.png';
import InfraComp from '../../components/about/Section6/InfraComp';



export default function Section6() {
    const [active, setActive] = useState("Infa-1");

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3 px-20'>
            <img className='w-32' src={infra} alt="Infrastructure Icon" />
            <h1 className='text-5xl text-primary-500'>Infrastructure</h1>
            <hr className='border-2 border-primary-500 w-2/5'/>
        </div>
        <div className=' relative boor w-full h-[25rem] grid grid-cols-3 '>
             <div className='bg-red-600'>
                <ul className='h-full flex flex-col items-start justify-evenly py-5 px-10 text-2xl'>
                    <li className=' hover:ml-10'>
                       <button onClick={() => setActive("Infa-1")}> <p>01. Customer Service</p></button>
                    </li>
                    <li className=' hover:ml-10'>
                        <button onClick={() => setActive("Infa-2")}><p>02. Pre Press</p></button>
                    </li>
                    <li className=' hover:ml-10'>
                        <button onClick={() => setActive("Infa-3")}><p>03. Printing</p></button>
                    </li>
                    <li className=' hover:ml-10'>
                        <button onClick={() => setActive("Infa-4")}><p>04. Finishing</p></button>
                    </li>
                    <li className=' hover:ml-10'>
                         <button onClick={() => setActive("Infa-5")}><p>05. Logestics</p></button>
                    </li>
                </ul>
             </div>
             <div className='relative bg-orange-400 col-span-2 flex items-center'>
                    {active === 'Infa-1' && <InfraComp image={InData[0]['image']} title={InData[0]['title']}y detail={InData[0]['detail']} />} 
                    {active === 'Infa-2' && <InfraComp image={InData[1]['image']} title={InData[1]['title']}y detail={InData[1]['detail']} />} 
                    {active === 'Infa-3' && <InfraComp image={InData[2]['image']} title={InData[2]['title']}y detail={InData[2]['detail']} />} 
                    {active === 'Infa-4' && <InfraComp image={InData[3]['image']} title={InData[3]['title']}y detail={InData[3]['detail']} />} 
                    {active === 'Infa-5' && <InfraComp image={InData[4]['image']} title={InData[4]['title']}y detail={InData[4]['detail']} />} 

             </div>
        </div>

    </div>
  )
}

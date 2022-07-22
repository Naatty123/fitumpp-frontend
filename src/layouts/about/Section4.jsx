import React from 'react'

import mission from '../../assets/images/AboutPageIcons/mission.png'
import vission from '../../assets/images/AboutPageIcons/vission.png'
import values from '../../assets/images/AboutPageIcons/values.png'

export default function Section4() {
  return (
    <div className='min-h-screen bg-gray-300 grid grid-col-1 md:grid-cols-2 md:pt-64'>
        <div className='flex flex-col'>
            <div className='h-96 w-full bg-red-800 flex flex-col items-start py-8 md:py-16 px-7 md:px-20 gap-5'>
                <img 
                src={mission} 
                alt="Our Mission" 
                className='w-20'
                />
                <h1 className='text-4xl font-semibold'>Our Mision</h1>
                <p className='text-xl'>To provide exceptional printing service
                    by pursuing business through innova-
                    tion & creativity that exceeds the
                    expectation of our esteemed custom-
                    ers.</p>
            </div>
            <div className='h-96 w-full bg-yellow-800 flex flex-col items-start py-8 md:py-16 px-7 md:px-20 gap-5'>
                <img 
                    src={vission} 
                    alt="Our Mission" 
                    className='w-20'
                    />
                    <h1 className='text-4xl font-semibold'>Our Vision</h1>
                    <p className='text-xl'>To be leader in printing & Advertising
                                            business by providing enhanced
                                            service, relationship & profitability.</p>
            </div>
        </div>
        <div className='min-h-screen h-auto w-full bg-green-800 flex flex-col items-start py-8 md:py-16 px-7 md:px-20 gap-5'>
                <img 
                    src={values} 
                    alt="Our Values" 
                    className='w-20'
                    />
                    <h1 className='text-4xl font-semibold'>Our Values</h1>
                    <p className='text-xl'>Delighted customers are key to our
                                            success & we strive to achieve this key
                                            every second Printing is our passion &
                                            hence no matter what your print need
                                            is, Fitsum Printing & Advertising has
                                            most effective print solutions.</p>
                     <p className='text-xl'>So if you are just starting or expand
                        ing your business, keep in mind that
                        good print materials can make a new
                        or small company look like a big pro
                        fessional corporation and Fitsum
                        Printing & Advertising P.L.C. Printing
                        exists to help you do just that.</p>                       
        </div>
       

    </div>
  )
}

import React from 'react'

// Icons 
import { ClockIcon, LocationMarkerIcon,
    PhoneIcon } from '@heroicons/react/outline'
import location from '../../assets/images/About Us/Icons/1location.png'

export default function Section9() {
    return (
        <section className="text-gray-600 body-font relative">
            <div className='min-h-screen px-5 md:px-5 lg:px-20 py-5 lg:py-10 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                {/* <LocationMarkerIcon className='w-32 text-primary-500'/> */}
                <img 
                className='w-32'
                src={location} 
                alt="Location Icon" />
                <h1 className='text-4xl text-primary-500'>Our Location</h1>
                <hr className='border-2 border-primary-500 w-1/5 '/>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1970.2339339210073!2d38.79311611849361!3d9.021013046038462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1658578185564!5m2!1sen!2set" 
                width="100%" 
                height="400px" 
                style={{
                    border: 0, 
                }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20'>
                    {/* Contact Section */}
                    <div className=' h-auto flex flex-col gap-5 items-start'>
                        <div className='flex gap-2'>
                            <PhoneIcon className='w-10 text-primary-500'/>
                            <h1 className='text-3xl text-primary-500'>Contact</h1>
                        </div>
                        <button className='bg-primary-500 px-16 py-3 text-white w-auto hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150 '>Call Now</button>
                        <div className='flex flex-col gap-1'>
                            <p>+251 911 753 962</p> 
                            <p>+251 902 276 627</p>
                            <p>+251 902 278 827</p>
                        </div>
                    </div>
                    {/* Address Section  */}
                    <div className=' h-auto flex flex-col gap-5 items-start'>
                        <div className='flex gap-2'>
                            <LocationMarkerIcon className='w-10 text-primary-500'/>
                            <h1 className='text-3xl text-primary-500'>Address</h1>
                        </div>
                        <button className='bg-primary-500 px-12 md:px-14 lg:px-14  py-3 text-white w-auto hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150'>Get Directions</button>
                        <div>
                            <p>Shola</p>
                            <p>NULL Building</p>
                            <p>Kenenisa Ave</p>
                            <p>Addis Ababa, Ethiopia</p>
                        </div>
                    </div>
                    {/* Bussiness Hours Section */}
                    <div className=' h-auto flex flex-col gap-5 items-start'>
                        <div className='flex gap-2'>
                            <ClockIcon className='w-10 text-primary-500'/>
                            <h1 className='text-3xl text-primary-500'>Office Hours</h1>
                        </div>
                        <button className='bg-primary-500 px-16 py-3 text-white w-auto hover:shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150'>View Office</button>
                        <div>
                            <p>Monday - Friday: 2am - 12pm</p>
                            <p>Saturday: 2am - 6am</p>
                        </div>
                    </div>
                </div>
        </div>

        </section>
    )
}

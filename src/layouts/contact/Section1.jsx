import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Section1() {
  return (
    <div className='relative md:min-h-screen h-[50rem] boor'>
        <div className='w-full relative h-96 bg-orange-800 flex flex-row z-10 border gray-200'>
            <div className='bg-gray-50 w-full flex flex-col justify-center items-start gap-6 px-20'>
                    <h1 className='text-6xl font-semibold'>Contact Us</h1>
                    <p className='text-xl'>Get in touch with us through text, call or sending us a message</p>
            </div>
            <div className='hidden  bg-yellow-600 w-full md:flex justify-center items-center'>
                    <h1 className='text-6xl text-white'>Image Section Here</h1>
            </div>
        </div>
        <div className='absolute top-80 h-auto w-full z-20 flex flex-col md:flex-row justify-evenly gap-5 md:gap-0'>
            {/* Box One Call Us */}
            <div className='relative w-full md:w-1/3 h-auto flex flex-col gap-5 items-center px-10 py-10 bg-gray-50 shadow-2xl border border-gray-200'>
                <div className='w-full flex flex-col gap-1 items-center text-gray-600'>
                    <PhoneIcon className='w-20'/>
                    <h1 className='text-xl'>Talk to Customer Service</h1>
                </div>
                <div>
                    <p className='text-gray-600'>Call us through these phones and ask any questions you want to know about </p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p>+251 911 753 962</p> 
                    <p>+251 902 276 627</p>
                    <p>+251 902 278 827</p>
                </div>
            </div>
            {/* Box Two */}
            <div className='relative w-full md:w-1/3 h-auto flex flex-col gap-5 items-center px-10 py-10 bg-gray-50 shadow-2xl border border-gray-200'>
                <div className='w-full flex flex-col gap-1 items-center text-gray-600'>
                    <MailIcon className='w-20'/>
                    <h1 className='text-xl'>Send Us an E-mail</h1>
                </div>
                <div>
                    <p className='text-gray-600'>Send us an E-email, with your name, phone (Optional) and message explaining what you want in detail </p>
                </div>
                <div className='flex flex-col gap-5'>
                    <button className='bg-primary-500 px-5 py-3 text-white shadow-lg hover:shadow-xl'>Send Message</button>
                </div>
            </div>

        </div>
    </div>
  )
}

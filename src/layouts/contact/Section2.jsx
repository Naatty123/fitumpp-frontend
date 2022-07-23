import React from 'react'

export default function Section2() {
    return (
        <div className='relative w-full min-h-screen h-auto flex flex-col items-center bg-gray-50 py-80 md:py-10 gap-10'>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-5xl text-primary-500'>Connect with Our Physical Office</h1>
                <hr className='border-2 border-primary-500 w-1/4 rounded-xl' />
            </div>
            <div className='w-full h-auto px-20'>
                <div className='relative w-full h-[82vh] md:grid grid-cols-12 border border-gray-300 shadow-xl'>
                    <div className='w-full h-auto bg-slate-700 col-span-8'>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d492.5580250523021!2d38.79231357531903!3d9.021348927233465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1658590825198!5m2!1sen!2set" 
                        width="100%" 
                        height="100%" 
                        style={{
                            border: 0,
                        }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='w-full h-auto bg-gray-200 col-span-4 px-10 py-10 flex flex-col gap-5'>
                        {/* Office Address */}
                        <div className='flex flex-col items-start gap-5'>
                            <h1 className='text-3xl'>Head Offce</h1>
                            <div className='flex flex-col gap-1 text-lg'>
                                <p>Thing One</p>
                                <p>Thing Two</p>
                                <p>Thing Three</p>
                            </div>
                        </div>
                        {/* Phone Address */}
                        <div className='flex flex-col items-start gap-5'>
                            <h1 className='text-3xl'>Phone / Fax</h1>
                            <div className='flex flex-col gap-1 text-lg'>
                                <p>Phone Number</p>
                                <p>Fax Number</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

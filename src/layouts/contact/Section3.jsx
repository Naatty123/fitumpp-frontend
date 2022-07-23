import { Accordion } from 'flowbite-react'
import React from 'react'

export default function Section3() {
  return (
    <div className='w-full h-auto bg-gray-50 px-5 md:px-20 py-10'>
        <Accordion alwaysOpen={true}>
          <Accordion.Panel>
            <Accordion.Title>
              <p> How to find this Office</p>
            </Accordion.Title>
            <Accordion.Content>
              <div className='flex flex-col gap-5'>
                <div className='flex gap-2 items-end'>
                  <h1 className='text-xl'>Driving: </h1>
                  <p>Refer to directions provided by <span className='text-primary-500 font-semibold'>Google Maps.</span></p>
                </div>
                <div className='flex gap-2 items-end'>
                  <h1 className='text-xl'>Public Transportation: </h1>
                  <p>The Closest option for public transportation is to get a taxi that goes to <span className='text-primary-500 font-semibold'>Kazanchis</span>  from <span className='text-primary-500 font-semibold'>Megenagna.</span></p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reiciendis eos dolore dolor. Odit error tempora, aperiam eum consequatur architecto perspiciatis? Labore at ipsam fugit dignissimos natus sunt quos omnis.</p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
    </div>
  )
}

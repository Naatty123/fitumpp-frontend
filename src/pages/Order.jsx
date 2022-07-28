import React from 'react'
import '../assets/styles/Order.css'

// Mantine
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';



export default function Order() {

  

const form = useForm({
  initialValues: {
    name: '',
    email: '',
  },
});

  return (
    <div className='flex flex-col'>
      
      <div class="container1 w-full px-5 md:px-20 ">
          <div class="shape-blob"></div>
          <div class="shape-blob one"></div>
          <div class="shape-blob two"></div>

          <div className='flex flex-col gap-5 bg-gray-200 min-h-screen rounded-2xl w-full m-auto my-5 z-20  bg-opacity-70 backdrop-blur-lg py-5 px-10'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-[#F25984] font-semibold text-4xl'>Order</h1>
              <hr className='w-1/5 border-2 border-[#F25984] rounded-full '/>

            </div>
            <div>

            </div>
        </div>

      </div>

      

    </div>
  )
}

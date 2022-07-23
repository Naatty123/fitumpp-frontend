import React from 'react'

export default function InfraComp(props) {
  return (
    <div className='absolute right-16 w-full h-72 flex gap-4 boor bg-gray-200'>
        <div className='w-full h-full'>
            <img
             src={props.image}
             alt="Place Holder"
             className='w-60    '
             />
        </div>
        <div className='flex flex-col gap-2 py-1'>
            <h1 className='text-5xl '><span className='text-primary-500 text-semibold'>{props.title}</span></h1>
            <p className='text-lg'>{props.detail}</p>
        </div>
    </div>
  )
}

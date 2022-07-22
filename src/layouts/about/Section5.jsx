import { UserGroupIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Section5() {
  return (
    <div className='w-full relative min-h-screen'>
        <div className='flex flex-col px-20 py-10 gap-5'>
           <UserGroupIcon className='w-32 text-primary-500'/>
           <div className='flex flex-col gap-3'>
           <h1 className='text-6xl font-semibold text-primary-500'>Our Staff</h1>
           <hr className='border-2 border-primary-500 w-2/5'/>
           </div>
           <div className='text-xl flex flex-col gap-3'>
                <p>Our organization have well exper-
                    inced & disciplined staffs who have
                    the ability to accomplish the given
                    activities in due deligence.</p>
                <p>Fitsum Printing & Advertisng com-
                    mands in themarket is thanks to the
                    highly professionalteam members
                    who are dedicated to ensuring client
                    satisfaction, reliability and value.
                    Commitment to regular training
                    andto sourcing the very best talent
                    has been central to the continued
                    success.</p>
                <p>Seamless integration across all
                    businessdisciplines and depart-
                    ments, along with aculture of encour-
                    aging individual initiative and inde-
                    pendent thinking help to achieve
                    exceptional results.</p>
           </div>
        </div>  
    </div>
  )
}

import React, { useState } from 'react'
import ImageSlider from '../layouts/ImageSlider'
import Swiper from '../layouts/ImageSlider'
// import blogo from '../img/biglogo.jpg'

export default function Home() {
  const [nid, setNid] = useState();
 

  function checkName(id){
    switch(id){
      case 1:
        return 'Bussiness Cards';
        break;
      case 2: 
        return 'Corporate Brouchers';
        break;
      case 3:
        return 'Cake Toopers';
        break;
      case 4:
        return 'P6 LED displays';
        break;
      case 5:
        return 'Calendars';
        break;
      case 6:
        return '3D Foam Cutout Branding';
        break;
      case 7:
        return '3D Foam Cutout Branding';
        break;
      case 8:
        return 'Signage';
        break;  
      default:
        return 0;
    }
    console.log(works['id'][1]);
  }
  return (
    <div className='bg-gray-50'>
    {/* First Content */}
    <div>
      <div className='absolute py-40 pl-32 w-full  z-30'>
        <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-gray-900">Producing 
                    <br className="hidden lg:inline-block"/>Different Kind of
                    <br className="hidden lg:inline-block"/> 
                    <span className='text-red-700 font-semibold'>
                    {checkName(nid)}  
                    </span> 
                        <br className="hidden lg:inline-block"/>
                        with quality
                    </h1>
      </div>
        <ImageSlider nfun={setNid}/>
        {/* {checkName()} */}
    </div>
      {/* Second Content */}






    </div>
  )
}

import React, { useEffect } from 'react'
import { useState } from 'react'

import ImageCounter from '../../components/home/Section1/ImageCounter'
import SectionOneSlider from '../../components/home/Section1/SectionOneSlider';



// Import Data
import works from '../../data/Works';

  function checkName(id){
    switch(id){
      case 1:
        return ' Bussiness Cards';
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
        return 'Car Brandings';
        break;
      case 6:
        return 'Calander';
        break;
      case 7:
        return '3D Foam Cutout Branding';
        break;
      case 8:
        return 'Signage';
        break;
      case 9:
        return 'Tea';
        break;  
      default:
        return ' NULL ';
    }
  }

  function checkCurrent(item){
    if(item.id == nid){

    }

  }
export default function SectionOne() {
  let [nid, setNid] = useState(1);
    return (
    <div>
      <div className='flex  flex-col gap-8 absolute py-10 px-5 md:py-40 md:pl-32 md:w-full w-full z-30'>
        <h1 className="title-font sm:text-7xl text-4xl w-1/2 md:w-full mb-4 font-medium text-gray-900">Producing 
                    <br className="hidden lg:inline-block"/>Different Kind of
                    <br className="hidden lg:inline-block"/> 
                    <span className='text-red-700 font-semibold'>
                    {checkName(nid)}  
                    </span> 
                        <br className="hidden lg:inline-block"/>
                         with quality
          </h1>
              <ImageCounter work={works} current={nid}/>
              {/* {
                works.map((item) => (
                  
                  <ImageCounter 
                  key={item.id}
                  cname={item.cname}
                  nowNum={nid}
                  />
                ))
              } */}
          
      </div>
        <SectionOneSlider countt={setNid}/>
    </div>
  )
}
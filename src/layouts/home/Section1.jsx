import React, { useEffect } from 'react'
import { useState } from 'react'

import ImageCounter from '../../components/home/Section1/ImageCounter'
import SectionOneSlider from '../../components/home/Section1/SectionOneSlider';

// Import Section 1 Images
import bussinessCard from '../../assets/images/Section-Slider/1.webp'
import corporateBrouchers from '../../assets/images/Section-Slider/2.webp'
import cakeTopperes from '../../assets/images/Section-Slider/3.jpg'
import p6LEDs from '../../assets/images/Section-Slider/4.jpg'
import carBrandings from '../../assets/images/Section-Slider/5.jpg'
import calanders from '../../assets/images/Section-Slider/6.png'
import Dfoam from '../../assets/images/Section-Slider/7.jpg'
import signange from '../../assets/images/Section-Slider/8.jpg'
import tea from '../../assets/images/Section-Slider/9.jpg'

const works =[
  {id: 1, name: "Bussiness Cards", image: bussinessCard, cname: 'sectionOneBoxOff'},
  {id: 2, name: "Corporate Brochures", image:corporateBrouchers, cname: 'sectionOneBoxOff'},
  {id: 3, name: "Cake Toopers", image: cakeTopperes, cname: 'sectionOneBoxOff'},
  {id: 4, name: "P6 LED displays", image: p6LEDs, cname: 'sectionOneBoxOff'},
  {id: 5, name: "Car Brandings", image: carBrandings, cname: 'sectionOneBoxOff'},
  {id: 6, name: "Calendars", image: calanders, cname: 'sectionOneBoxOff'},
  {id: 7, name: "3D Foam Cutout Branding", image: Dfoam, cname: 'sectionOneBoxOff'},
  {id: 8, name: "Signage", image: signange, cname: 'sectionOneBoxOff'},
  {id: 9, name: "Tea", image: tea},
]

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
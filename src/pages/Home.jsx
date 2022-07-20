import React, { useState } from 'react'
import ImageSlider from '../layouts/ImageSlider'
import Swiper from '../layouts/ImageSlider'
import ImageCounter from '../utils/ImageCounter';
// import blogo from '../img/biglogo.jpg'

// Import Section 1 Images
import bussinessCard from '../assets/images/Section1Slider/1.webp'
import corporateBrouchers from '../assets/images/Section1Slider/2.webp'
import cakeTopperes from '../assets/images/Section1Slider/3.jpg'
import p6LEDs from '../assets/images/Section1Slider/4.jpg'
import carBrandings from '../assets/images/Section1Slider/5.jpg'
import calanders from '../assets/images/Section1Slider/6.png'
import Dfoam from '../assets/images/Section1Slider/7.jpg'
import signange from '../assets/images/Section1Slider/8.jpg'
import tea from '../assets/images/Section1Slider/9.jpg'

export default function Home() {
  const [nid, setNid] = useState();
  const works =[
    {id: 1, name: "Bussiness Cards", image: bussinessCard, cname: 'w-10 h-2 bg-gray-400'},
    {id: 2, name: "Corporate Brochures", image:corporateBrouchers, cname: 'w-10 h-2 bg-gray-400'},
    {id: 3, name: "Cake Toopers", image: cakeTopperes, cname: 'w-10 h-2 bg-gray-400'},
    {id: 4, name: "P6 LED displays", image: p6LEDs, cname: 'w-10 h-2 bg-gray-400'},
    {id: 5, name: "Car Brandings", image: carBrandings, cname: 'w-10 h-2 bg-gray-400'},
    {id: 6, name: "Calendars", image: calanders, cname: 'w-10 h-2 bg-gray-400'},
    {id: 7, name: "3D Foam Cutout Branding", image: Dfoam, cname: 'w-10 h-2 bg-gray-400'},
    {id: 8, name: "Signage", image: signange, cname: 'w-10 h-2 bg-gray-400'},
    {id: 9, name: "Tea", image: tea},
  ]
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
  }
  return (
    <div className='bg-gray-50'>
    {/* First Content */}
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
          <div className='w-full md:w-1/2 flex gap-5'>
              {
                works.map((item) => (
                  <ImageCounter cname={item.cname}/>
                ))
              }
          </div>
      </div>
        <ImageSlider nfun={setNid}/>
    </div>
      {/* Second Content */}
    <div className='w-full boor relative'>
        <section className='w-full flex flex-col md:flex-row justify-center items-center h-[90vh] md:h-[70vh]'>
          <div className='h-full w-full bg-gray-300 flex '>
              <div className='w-[40%] boor m-auto h-[80%] bg-pink-300'>

              </div>
          </div>
          <div className='h-full w-full bg-gray-900'></div>
        </section>
    </div>






    </div>
  )
}

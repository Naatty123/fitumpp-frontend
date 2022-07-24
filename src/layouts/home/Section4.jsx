import React, { useEffect, useState } from 'react'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';
import { Swiper, SwiperSlide } from "swiper/react";
import WorksBox from '../../components/WorksBox';

import { Navigation,Autoplay,Pagination } from "swiper";

import '../../assets/styles/FourthContentStyle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Data
import Services from '../../data/Services';


function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
function checkWidth(){
    if(getWindowSize().innerWidth >= 783){
        return 3;
    }else if(getWindowSize().innerWidth >= 1024){
        return 3;
    }
}
  export default function FourthContent() {

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [workTiles, setWorkTiles] = useState(checkWidth());
    
    useEffect(() => {
        function handleWindowResize(){
            setWindowSize(getWindowSize());
            if(getWindowSize().innerWidth >= 783){
                setWorkTiles(2);
            }else if(getWindowSize().innerWidth >= 1024){
                setWorkTiles(3);
            }
        }
        
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
    },[]);
  
  return (
    <div className='w-full relative min-h bg-gray-100 grid grid-cols-12 items-center'>
        <div>
            <ArrowNarrowLeftIcon 
            className='hover:text-primary-500 cursor-pointer'/>
        </div>
        <div className='col-span-10 boor px-5 py-5'>
            <Swiper
                navigation={false}
                slidesPerView={workTiles}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                >
               {
                Services.map((item)=>(
                    <SwiperSlide
                    key={item.id}
                    >
                        <WorksBox 
                        key={item.id}
                        title={item.title}/>
                    </SwiperSlide>
                ))
               }
            </Swiper>
        </div>
        <div>
            <ArrowNarrowRightIcon
            className='hover:text-primary-500 cursor-pointer'/>
        </div>

    </div>
  )
}

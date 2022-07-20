import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Section1Hero from './Section1Hero';

export default function ImageSlider(props) {
  const works =[
    {id: 1, name: "Bussiness Cards"},
    {id: 2, name: "Corporate Brochures"},
    {id: 3, name: "Cake Toopers"},
    {id: 4, name: "P6 LED displays"},
    {id: 5, name: "Car Brandings"},
    {id: 6, name: "Calendars"},
    {id: 7, name: "3D Foam Cutout Branding"},
    {id: 8, name: "Signage"},
  ]
  const fcount = ((id)=>{
    props.nfun(id)
    // console.log(id)
  })
  let count = 1;

  function countWorks(){
    if(count == works.length){
      count = 1}
    else{
      count++;}
    // console.log(count)
      fcount(count)
    //  return props.nfun(count);
  }
  // props.nfun(countWorks)
  // useEffect(()=>{
  //   console.log(countWorks());
  // }) 

  return (
    <Swiper 
    pagination={true} 
    modules={[Pagination, Autoplay]} 
    autoplay={{
      delay: 200
      
    }}
    onSlideChange={()=> countWorks()}
    className="mySwiper h-screen">
    {
      works.map((item) =>(
      <SwiperSlide
      key={item.id}
      > 

        <Section1Hero />
      </SwiperSlide>

      ))
    }
  </Swiper>
  )
}

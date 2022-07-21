import React from 'react'
import Section1Hero from './SectionOneHero.jsx';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Import Section 1 Images
import bussinessCard from '../../../assets/images/Section-Slider/1.webp'
import corporateBrouchers from '../../../assets/images/Section-Slider/2.webp'
import cakeTopperes from '../../../assets/images/Section-Slider/3.jpg'
import p6LEDs from '../../../assets/images/Section-Slider/4.jpg'
import carBrandings from '../../../assets/images/Section-Slider/5.jpg'
import calanders from '../../../assets/images/Section-Slider/6.png'
import Dfoam from '../../../assets/images/Section-Slider/7.jpg'
import signange from '../../../assets/images/Section-Slider/8.jpg'
import tea from '../../../assets/images/Section-Slider/9.jpg'

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

  let count = 1;

export default function SectionOneSlider(props) {

    return (
    <Swiper 
      pagination={true} 
      modules={[Autoplay]} 
      autoplay={{
        delay:2500
      }}
      onSlideChange={()=> {
        if(count == works.length)
          count=1
        else 
          count++
        props.countt(count)    
        console.log(count)
      }}
      className="mySwiper h-screen">
      {
        works.map((item) =>(
        <SwiperSlide
        key={item.id}
        > 
          <Section1Hero image={item.image}/>
        </SwiperSlide>
        ))
      }
    </Swiper>
    )

  
  
}
